let mensagens; 
let novoUser; 
let userCadastrado;

usuario();
buscarMensagens();

//Criar um novo usuário e verificar se ele já existe

function usuario(){
    
    novoUser = prompt("Qual é o seu username?");

    userCadastrado = {
        name: novoUser,
    }

    console.log(userCadastrado);

    const promise = axios.post("https://mock-api.driven.com.br/api/v6/uol/participants", userCadastrado);

    //Executa se o usuário foi cadastrado com sucesso
    promise.then(alertarUser);

    //Executa caso o usuário já exista

    promise.catch(alertarErro);

}

function alertarErro(erro){
    console.log(erro);
    alert("Esse nome de usuário já existe. Por favor, escolha outro!");
    usuario()
}

function alertarUser (resposta){
console.log("ALERTA POST")
buscarMensagens();
}

//Verificar se o usuário está online



// Buscar mensagens do servidor e renderizar

//pegar as mensagens do servidor (API) - Parte 1

function buscarMensagens(){
    console.log("Ordem de execução 1 - buscarMensagens()");
    const promessa = axios.get(
        "https://mock-api.driven.com.br/api/v6/uol/messages"
        );
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


//Enviar mensagens

function enviarMensagem(){
    const nomeUsuario = novoUser;
    const textoMensagem = document.querySelector('textarea').value;
    const publico = 'Todos';
    const tipo = 'message';

    const novaMensagem = {
        from: nomeUsuario,
        to: publico,
        text: textoMensagem,
        type: tipo,
    }

    console.log("Objeto criado com sucesso")
    console.log(novaMensagem);
        
    const promiseMensagem = axios.post("https://mock-api-driven.com.br/api/v6/uol/messages", novaMensagem);
    promiseMensagem.then(alertarMensagem)
}

function alertarMensagem (resposta){
    console.log("Mensagem enviada com sucesso");
    console.log(resposta);
    
}