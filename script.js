let mensagens; 
let novoUser;
let destinatario; 
let visibilidade;

cadastrarUser();

buscarMensagens();

manterConexao();

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


 function cadastrarUser(){  const nome = prompt("Qual é o seu nome?");
  novoUser = {      name: nome  };
 console.log("novoUser");

  
  const promise = axios.post(      "https://mock-api.driven.com.br/api/v6/uol/participants", novoUser  );
  promise.then(buscarMensagens);  promise.catch(alertarErro);
  }

function alertarErro(error){  console.log(error.response.status);
  if(error.response.status === 400) {      alert("Já exist  e um usuário com esse nome. Escolha outro!!");
      cadastrarUser()  }
 }



function manterConexao (novoUser) {
       let conexao = setInterval(function (){
        axios.post("https://mock-api.driven.com.br/api/v6/uol/status", novoUser);
        console.log("O usuário está online")
       }, 5000);
    }
       
       
function enviarMensagem(){
    const novaMensagem = document.querySelector(".digitar-mensagem").value;

    const textoMensagem = {
        from: novoUser.name,
        to: destinatario,
        text: novaMensagem,
        type: visibilidade
    }

    const promiseMensagem = axios.post("https://mock-api.driven.com.br/api/v6/uol/messages", textoMensagem);

    promiseMensagem.then(enviarMensagem);
    promiseMensagem.catch(
        console.log("deu ruim"));

    document.querySelector(".digitar-mensagem").value = "";
}
