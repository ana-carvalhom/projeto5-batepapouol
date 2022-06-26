let mensagens; 
let novoUser; 
let userCadastrado;

usuario();
manterConexao();
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
    usuario();
}

function alertarUser (resposta){
console.log("ALERTA POST")
buscarMensagens();
}

//Verificar se o usuário está online - manter conexão
function manterConexao(){
    let userConectado = {
        name: userCadastrado.name,
    }

    axios.post("https://mock-api.driven.com.br/api/v6/uol/status", userConectado)
    console.log("user conectado")
    setInterval(manterConexao,3000);
    
}

// Buscar mensagens do servidor e renderizar

//pegar as mensagens do servidor (API) - Parte 1

function buscarMensagens(){
    console.log("Ordem de execução 1 - buscarMensagens()");
    const promessa = axios.get(
        "https://mock-api.driven.com.br/api/v6/uol/messages"
        );
    promessa.then(popularMensagens);
   setInterval(buscarMensagens,4500);

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

        if(mensagens[i].type === "message" && mensagens[i].to === "Todos"){
        ulMensagens.innerHTML += `
        <li class="publica">
        <span class="time">${mensagens[i].time}</span> <span class="name">${mensagens[i].from}</span> para <span class="name">${mensagens[i].to}</span> ${mensagens[i].text}
        </li>

        
        `;
        }    
        
        if(mensagens[i].type === "private_message" && mensagens[i].to === userCadastrado.name){
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



function novaMensagem(el){
    const novasMensagens = document.querySelector('textarea').value;
    const nome = userCadastrado.name;
    let enviarMensagem={
       from: nome,
        to: "Todos",
        text: novasMensagens,
        type: "message"
    }
 
    promise=axios.post("https://mock-api.driven.com.br/api/v6/uol/messages",enviarMensagem);
    promise.then(buscarMensagens);
    promise.catch(alertar);
 }


 function alertar(erro){
  console.log(erro);
  alert("Deu erro ai")
 }