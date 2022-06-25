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

        if(mensagens[i].type === "message"){
        ulMensagens.innerHTML += `
        <li class="publica">
        <span class="time">${mensagens[i].time}</span> <span class="name">${mensagens[i].from}</span> para <span class="name">${mensagens[i].to}</span> ${mensagens[i].text}
        </li>

        
        `;
        }    
        
        if(mensagens[i].type === "private_message"){
                ulMensagens.innerHTML += `
                <li class="reservada">
                <span class="time">${mensagens[i].time}</span> <span class="name">${mensagens[i].from}</span> reservadamente <span class="name">${mensagens[i].to}</span> ${mensagens[i].text}
                </li>
        
                
                `;
            }

        if(mensagens[i].type === "status"){
                ulMensagens.innerHTML += `
                <li class="entrou-saiu">
                <span class="time">${mensagens[i].time}</span> <span class="name">${mensagens[i].from}</span> ${mensagens[i].text}
                </li>
        
                
                `;
            }
        }
        
}
