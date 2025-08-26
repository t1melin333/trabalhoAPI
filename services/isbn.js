import * as config from './config.js';

export const getISBN = async (isbn) => {
    const url = `${config.url_api()}/isbn/v1/${isbn}`;
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
        console.error('Error fetching ISBN data:', error);
        throw error;
    }
}