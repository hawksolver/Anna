// Variáveis do jogo
let tentativas = 6;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;

const palavras = [
  { nome: "FIVE", categoria: "Número" },
  { nome: "SETENTA E SETE", categoria: "Número" },
  { nome: "MILKA OREO", categoria: "Doce" },
  { nome: "BOLINHO", categoria: "Doce" },
  { nome: "ZELDA", categoria: "Jogo" },
  { nome: "LUCIANO", categoria: "Alguém" },
  { nome: "AZUL", categoria: "Cor" },
  { nome: "ROXA", categoria: "Cor" },
  { nome: "5004B5", categoria: "Cor" },
  { nome: "LILO E STITCH", categoria: "Filme" },
  { nome: "CARATE", categoria: "Ação" },
  { nome: "TOCAR TECLADO", categoria: "Ação" },
  { nome: "FUTEBOL", categoria: "Ação" },
  { nome: "BEE", categoria: "Inglês" },
  { nome: "PINK", categoria: "Inglês" },
  { nome: "TABLE", categoria: "Inglês" },
  { nome: "WORK", categoria: "Inglês" },
  { nome: "PEOPLES", categoria: "Inglês" },
  { nome: "LIMERENCIA", categoria: "PALAVRA ESPECIAL" },
];

// Função da senha
function verificarSenha() {
  const senhaCorreta = "5004b5"; // troca aqui a senha que quiser
  const senhaDigitada = document.getElementById("input-senha").value.trim();

  if (senhaDigitada === senhaCorreta) {
    document.getElementById("tela-senha").style.display = "none";
    document.querySelector(".container").style.display = "flex";
    iniciarJogo();
  } else {
    const erro = document.getElementById("mensagem-erro");
    erro.style.display = "block";
    setTimeout(() => {
      erro.style.display = "none";
    }, 2000);
  }
}

// Função para iniciar o jogo da forca
function iniciarJogo() {
  // sorteia palavra e categoria
  const palavraSorteada = palavras[Math.floor(Math.random() * palavras.length)];
  palavraSecretaSorteada = palavraSorteada.nome.toUpperCase();
  palavraSecretaCategoria = palavraSorteada.categoria;
  listaDinamica = [];

  // preenche listaDinamica com "_" ou espaço
  for (let i = 0; i < palavraSecretaSorteada.length; i++) {
    if (palavraSecretaSorteada[i] === " ") {
      listaDinamica.push(" ");
    } else {
      listaDinamica.push("_");
    }
  }

  tentativas = 6;
  atualizarPalavraNaTela();
  atualizarImagemForca();
  atualizarCategoria();
  habilitarTeclado(true);
}

function atualizarPalavraNaTela() {
  const palavraSecretaElemento = document.getElementById("palavra-secreta");
  palavraSecretaElemento.innerHTML = "";

  for (let i = 0; i < listaDinamica.length; i++) {
    let span = document.createElement("span");
    span.classList.add("letras");
    span.innerText = listaDinamica[i];
    palavraSecretaElemento.appendChild(span);
  }
}

function atualizarCategoria() {
  const categoriaElemento = document.getElementById("categoria");
  categoriaElemento.innerText = `Categoria: ${palavraSecretaCategoria}`;
}

function verificaLetraEscolhida(letra) {
  let acertou = false;

  for (let i = 0; i < palavraSecretaSorteada.length; i++) {
    if (palavraSecretaSorteada[i] === letra) {
      listaDinamica[i] = letra;
      acertou = true;
    }
  }

  if (!acertou) {
    tentativas--;
    atualizarImagemForca();
  }

  atualizarPalavraNaTela();
  verificarFimDeJogo();
  document.getElementById("tecla-" + letra).disabled = true;
}

function atualizarImagemForca() {
  const image = document.getElementById("image");
  switch (tentativas) {
    case 6:
      image.src = "../img/forca.png";
      break;
    case 5:
      image.src = "../img/forca01.png";
      break;
    case 4:
      image.src = "../img/forca02.png";
      break;
    case 3:
      image.src = "../img/forca03.png";
      break;
    case 2:
      image.src = "../img/forca04.png";
      break;
    case 1:
      image.src = "../img/forca05.png";
      break;
    case 0:
      image.src = "../img/forca06.png";
      break;
  }
}
function verificarFimDeJogo() {
  if (listaDinamica.indexOf("_") === -1) {
    alert("Parabéns! Você venceu! 🎉");
    habilitarTeclado(false);
  }

  if (tentativas === 0) {
    alert(
      `Você perdeu! A palavra era: ${palavraSecretaSorteada}. Tente novamente!`
    );
    habilitarTeclado(false);
  }
}

function habilitarTeclado(estado) {
  const botoes = document.querySelectorAll("#teclado button");
  botoes.forEach((botao) => {
    if (botao.id !== "btnReniciar") {
      botao.disabled = !estado;
    }
  });
}

function reiniciarJogo() {
  iniciarJogo();
}
