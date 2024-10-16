let card = document.getElementById("card");
let nqfdButton = document.getElementById("nqfd");

// Exibir a mensagem caso seja selecionado o 'sim'
document.querySelector("#bom").addEventListener("click", function () {
  let question = document.getElementById("question");
  let message = document.getElementById("answer1");
  
  question.style.display = "none";
  nqfdButton.style.display = "none"; // Oculta o botão
  message.style.display = "flex";
});

// Exibir a mensagem caso seja selecionado o '+ ou -'
document.querySelector("#mom").addEventListener("click", function () {
  let question = document.getElementById("question");
  let message = document.getElementById("answer2");

  question.style.display = "none";
  nqfdButton.style.display = "none"; // Oculta o botão
  message.style.display = "flex";
});

// Exibir a mensagem caso seja selecionado o 'não'
document.querySelector("#ruim").addEventListener("click", function () {
  let question = document.getElementById("question");
  let message = document.getElementById("answer3");

  question.style.display = "none";
  nqfdButton.style.display = "none"; // Oculta o botão
  message.style.display = "flex";
});

// Movimento aleatório do botão 'não'
nqfdButton.addEventListener("mouseover", function () {
  let width = window.innerWidth - 50;
  let height = window.innerHeight - 50;

  this.style.position = "absolute";
  this.style.top = Math.random() * width + "px";
  this.style.left = Math.random() * height + "px";
});


// document.querySelector("#no").addEventListener("mouseover", function () {
//   let width = window.innerWidth - 50;
//   let height = window.innerHeight - 50;

//   this.style.position = "absolute";
//   this.style.top = Math.random() * width + "px";
//   this.style.left = Math.random() * height + "px";
// });

