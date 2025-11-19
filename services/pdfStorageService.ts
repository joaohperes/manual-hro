/**
 * Upload um PDF para localStorage (sem CORS issues)
 * @param file - Arquivo PDF
 * @param protocolId - ID único do protocolo
 * @returns URL de download do arquivo armazenado (blob URL)
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

    // Converter arquivo para Base64
    const base64 = await fileToBase64(file);

    // Armazenar no localStorage
    const timestamp = Date.now();
    const storageKey = `pdf_${protocolId}_${timestamp}`;
    const pdfData = {
      protocolId,
      fileName: file.name,
      fileSize: file.size,
      base64: base64,
      uploadedAt: new Date().toISOString(),
    };

    localStorage.setItem(storageKey, JSON.stringify(pdfData));
    console.log(`📤 PDF stored locally: ${storageKey}`);

    // Retornar um identificador que será usado para recuperar depois
    return `local://${storageKey}`;
  } catch (error) {
    console.error('❌ Error uploading PDF:', error);
    throw error;
  }
};

/**
 * Deletar um PDF do localStorage
 * @param storageUrl - URL local (formato: local://pdf_protocolId_timestamp)
 */
export const deletePdfFromStorage = async (storageUrl: string): Promise<void> => {
  try {
    if (storageUrl.startsWith('local://')) {
      const storageKey = storageUrl.replace('local://', '');
      localStorage.removeItem(storageKey);
      console.log('✅ PDF deleted successfully');
    }
  } catch (error) {
    console.error('❌ Error deleting PDF:', error);
    // Não lançar erro para não quebrar a aplicação
  }
};

/**
 * Obter URL de download de um arquivo armazenado localmente
 * @param storageUrl - URL local (formato: local://pdf_protocolId_timestamp)
 * @returns Blob URL para download
 */
export const getPdfDownloadUrl = async (storageUrl: string): Promise<string> => {
  try {
    if (storageUrl.startsWith('local://')) {
      const storageKey = storageUrl.replace('local://', '');
      const pdfDataJson = localStorage.getItem(storageKey);

      if (!pdfDataJson) {
        throw new Error('PDF não encontrado no armazenamento local');
      }

      const pdfData = JSON.parse(pdfDataJson);
      const base64Data = pdfData.base64.split(',')[1] || pdfData.base64;
      const binaryString = atob(base64Data);
      const bytes = new Uint8Array(binaryString.length);

      for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }

      const blob = new Blob([bytes], { type: 'application/pdf' });
      return URL.createObjectURL(blob);
    }

    throw new Error('URL de armazenamento inválida');
  } catch (error) {
    console.error('❌ Error getting download URL:', error);
    throw error;
  }
};

/**
 * Verificar se o localStorage está disponível
 */
export const isFirebaseConfigured = (): boolean => {
  try {
    return typeof localStorage !== 'undefined';
  } catch {
    return false;
  }
};

/**
 * Converter arquivo para Base64
 */
const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};
