export default function buscarCotacaoCallBack(moeda, data, callback) {
    let urlAPI = `https://brasilapi.com.br/api/cambio/v1/cotacao/${moeda}/${data}`;

    fetch(urlAPI,
        { method: 'GET' })
        .then(resposta => {
            if(!resposta.ok) {
                throw new Error("Falha no fetch");
            }
            return resposta.json();
        })
        .then(resposta => callback(resposta))
        .catch(error => {console.error("Erro:", error)});
        
}