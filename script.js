let mensagens; 

buscarMensagens();

//pegar as mensagens do servidor (API) - Parte 1

function buscarMensagens(){
    const promessa = axios.get("https://mock-api.driven.com.br/api/v6/uol/messages");

    promessa.then(popularMensagens);
}

//pegar as mensagens da API e joga na variável mensagens - Parte 2

function popularMensagens(resposta){
    console.log(resposta);


if (resposta.status === 200){
    console.log("Deu boom");
}
    
mensagens = resposta.data;
renderizarMensagens();

}

//itera sobre o array de mensagens e coloca as mensagens no DOM - part 3

function renderizarMensagens(){
    const ulMensagens = document.querySelector(".chat");
    ulMensagens.innerHTML = "";

    for (let i = 0; i < mensagens.length; i++){
        ulMensagens.innerHTML += `
        <li>
        ${mensagens[i].time} ${mensagens[i].text}
        </li>

        
        `;
        
    }
}