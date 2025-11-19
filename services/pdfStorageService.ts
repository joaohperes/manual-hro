import { storage } from './firebaseConfig';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';

/**
 * Upload um PDF para Firebase Storage
 * @param file - Arquivo PDF
 * @param protocolId - ID único do protocolo
 * @returns URL de download do arquivo armazenado
 */
export const uploadPdfToStorage = async (file: File, protocolId: string): Promise<string> => {
  try {
    // Validar arquivo
    if (file.size > 10 * 1024 * 1024) {
      throw new Error('Arquivo muito grande. Máximo: 10MB');
    }

    if (!file.type.includes('pdf')) {
      throw new Error('Arquivo deve ser um PDF');
    }

    // Criar referência no Firebase Storage
    const timestamp = Date.now();
    const fileName = `${protocolId}_${timestamp}.pdf`;
    const fileRef = ref(storage, `protocols/${fileName}`);

    // Fazer upload
    console.log(`📤 Uploading PDF: ${fileName}`);
    await uploadBytes(fileRef, file);

    // Obter URL de download
    const downloadUrl = await getDownloadURL(fileRef);
    console.log('✅ PDF uploaded successfully:', downloadUrl);

    return downloadUrl;
  } catch (error) {
    console.error('❌ Error uploading PDF:', error);
    throw error;
  }
};

/**
 * Deletar um PDF do Firebase Storage pela URL
 * @param downloadUrl - URL de download do arquivo
 */
export const deletePdfFromStorage = async (downloadUrl: string): Promise<void> => {
  try {
    // Extrair o caminho do arquivo da URL
    const urlPath = downloadUrl.split('/o/')[1]?.split('?')[0];
    if (!urlPath) {
      throw new Error('Invalid download URL');
    }

    // Decodificar o caminho
    const decodedPath = decodeURIComponent(urlPath);
    const fileRef = ref(storage, decodedPath);

    // Deletar arquivo
    await deleteObject(fileRef);
    console.log('✅ PDF deleted successfully');
  } catch (error) {
    console.error('❌ Error deleting PDF:', error);
    // Não lançar erro para não quebrar a aplicação
  }
};

/**
 * Obter URL de download de um arquivo no Firebase Storage
 * @param fileName - Nome do arquivo
 * @returns URL de download
 */
export const getPdfDownloadUrl = async (fileName: string): Promise<string> => {
  try {
    const fileRef = ref(storage, `protocols/${fileName}`);
    return await getDownloadURL(fileRef);
  } catch (error) {
    console.error('❌ Error getting download URL:', error);
    throw error;
  }
};

/**
 * Verificar se a configuração do Firebase está disponível
 */
export const isFirebaseConfigured = (): boolean => {
  try {
    return !!storage;
  } catch {
    return false;
  }
};
