import * as config from './config.js';

export const getCNPJ = async (cnpj) => {
    const url = `${config.url_api()}/cnpj/v1/${cnpj}`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json'
        }
      };
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('Error fetching CNPJ data:', error);
        throw error;
      }
    };