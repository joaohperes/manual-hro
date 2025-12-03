/**
 * Utilidades para detectar e converter ramais e números de telefone em links clicáveis
 */

// Padrão para ramais de 4 dígitos (ex: 8040, 5000)
export const RAMAL_PATTERN = /\b(\d{4})\b/g;

// Padrão para números de telefone (ex: (11) 98765-4321)
export const PHONE_PATTERN = /\(?(\d{2})\)?[\s-]?(\d{4,5})[\s-]?(\d{4})/g;

/**
 * Detecta se um texto contém ramais ou números de telefone
 */
export const hasPhoneNumbers = (text: string): boolean => {
  return RAMAL_PATTERN.test(text) || PHONE_PATTERN.test(text);
};

/**
 * Extrai todos os ramais e números de telefone de um texto
 */
export const extractPhoneNumbers = (text: string) => {
  const ramais = new Set<string>();
  const phones = new Set<string>();

  // Reset regex lastIndex
  RAMAL_PATTERN.lastIndex = 0;
  PHONE_PATTERN.lastIndex = 0;

  // Extrair ramais
  let match;
  while ((match = RAMAL_PATTERN.exec(text)) !== null) {
    ramais.add(match[1]);
  }

  // Extrair telefones
  PHONE_PATTERN.lastIndex = 0;
  while ((match = PHONE_PATTERN.exec(text)) !== null) {
    const phone = `${match[1]}${match[2]}${match[3]}`;
    phones.add(phone);
  }

  return { ramais: Array.from(ramais), phones: Array.from(phones) };
};

/**
 * Formata um ramal para o padrão tel:
 */
export const formatRamalLink = (ramal: string): string => {
  return `tel:${ramal}`;
};

/**
 * Formata um número de telefone para o padrão tel: removendo caracteres especiais
 */
export const formatPhoneLink = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '');
  return `tel:+55${cleaned}`;
};
