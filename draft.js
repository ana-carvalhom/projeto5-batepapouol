// let mensagens; 
// let novoUser;
// let destinatario; 
// let visibilidade;

// cadastrarUser();

// buscarMensagens();

// manterConexao();






// function cadastrarUser(){  const nome = prompt("Qual é o seu nome?");
//   novoUser = {      name: nome  };
//  console.log("novoUser");

  
//   const promise = axios.post(      "https://mock-api.driven.com.br/api/v6/uol/participants", novoUser  );
//   promise.then(buscarMensagens);  promise.catch(alertarErro);
//   }

// function alertarErro(error){  console.log(error.response.status);
//   if(error.response.status === 400) {      alert("Já existe um usuário com esse nome. Escolha outro!!");
//       cadastrarUser()  }
//  }



// function manterConexao (novoUser) {
//        let conexao = setInterval(function (){
//         axios.post("https://mock-api.driven.com.br/api/v6/uol/status", novoUser);
//         console.log("O usuário está online")
//        }, 5000);
//     }
       
       
// function enviarMensagem(){
//     const novaMensagem = document.querySelector(".digitar-mensagem").value;

//     const textoMensagem = {
//         from: novoUser.name,
//         to: destinatario,
//         text: novaMensagem,
//         type: visibilidade
//     }

//     const promiseMensagem = axios.post("https://mock-api.driven.com.br/api/v6/uol/messages", textoMensagem);

//     promiseMensagem.then(enviarMensagem);
//     promiseMensagem.catch(
//         console.log("deu ruim"));

//     document.querySelector(".digitar-mensagem").value = "";
// }
// function cadastrarUser(){  const nome = prompt("Qual é o seu nome?");
//   novoUser = {      name: nome  };
//  console.log("novoUser");

  
//   const promise = axios.post(      "https://mock-api.driven.com.br/api/v6/uol/participants", novoUser  );
//   promise.then(buscarMensagens);  promise.catch(alertarErro);
//   }

// function alertarErro(error){  console.log(error.response.status);
//   if(error.response.status === 400) {      alert("Já exist  e um usuário com esse nome. Escolha outro!!");
//       cadastrarUser()  }
//  }



// function manterConexao (novoUser) {
//        let conexao = setInterval(function (){
//         axios.post("https://mock-api.driven.com.br/api/v6/uol/status", novoUser);
//         console.log("O usuário está online")
//        }, 5000);
//     }
       
       
// function enviarMensagem(){
//     const novaMensagem = document.querySelector(".digitar-mensagem").value;

//     const textoMensagem = {
//         from: novoUser.name,
//         to: destinatario,
//         text: novaMensagem,
//         type: visibilidade
//     }

//     const promiseMensagem = axios.post("https://mock-api.driven.com.br/api/v6/uol/messages", textoMensagem);

//     promiseMensagem.then(enviarMensagem);
//     promiseMensagem.catch(
//         console.log("deu ruim"));

//     document.querySelector(".digitar-mensagem").value = "";
// }


/////////////enviar mensagem 

// function enviarMensagem(){
//     const mensagem = document.querySelector('textarea').value

//     const novaMensagem = {
//         from: userCadastrado,
//         to: "todos",
//         text: mensagem,
//         type: "message"
//     }

//     console.log(mensagem);

//     const promise = axios.post("https://mock-api.driven.com.br/api/v6/uol/messages", novaMensagem);

//     //Executa se a mensagem foi enviada com sucesso
//     promise.then(alertarMensagem);

//     //Executa se houve problema com o envio da mensagem

//     promise.catch(erroMensagem);

// }

// function erroMensagem(erro){
//     console.log(erro);
//     alert("Por favor, tente novamente");
//     enviarMensagem()
// }

// function alertarMensagem (resposta){
// console.log("MENSAGEM ENVIADA COM SUCCESO")
// buscarMensagens();
// }