import * as config from './config.js';

export const getCEP = async (cep) => {
  const url = `${config.url_api()}/cep/v2/${cep}`;
  
  const options = {
    method: 'GET',
    headers: {
      'Accept': 'application/json'
    }
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Erro HTTP! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error('Erro ao buscar dados do CEP:', error);
    throw error; // Re-lança o erro para que quem chamou a função possa tratá-lo
  }
};
