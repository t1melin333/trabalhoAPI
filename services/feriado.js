import * as config from './config.js';

export const getFeriado = async (ano) => {
    const url = `${config.url_api()}/feriados/v1/${ano}`;
    const options ={
        method: 'GET',
        headers: {
            accept: 'application.json'
        }
    };
    try{
        const response = await fetch (url, options);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
            return;
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching Feriado data:', error);
        throw error;
    }
}