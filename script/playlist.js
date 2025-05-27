const musicas = [
  {
    nome: "Those eyes",
    artista: "A primeira musica, <br> a melhor provavelmente",
    imagem: "../img/11.jpg",
    audio: "../music/Those_Eyes.mp3",
  },
  {
    nome: "I Found Her",
    artista:
      "Tinha outras músicas, mas <br>calculei uma que vc se lembraria<br> com mais facilidade(20seg)",
    imagem: "../img/samu.jpg",
    audio: "../music/JVKE-her.mp3",
  },
  {
    nome: "Lisboa",
    artista: "A música que eu mais gosto...<br> E que eu mais ouvi",
    imagem: "../img/2.jpg",
    audio: "../music/Lisboa.mp3",
  },
  {
    nome: "Tenta Acreditar",
    artista: "Ouvi essa quando estava triste...",
    imagem: "../img/triste.png",
    audio: "../music/acreditar.mp3",
  },
  {
    nome: "Alianca",
    artista: "Coloquei <br> pra dar 5 musicas kkkkkkk.k<br>Amei essa foto",
    imagem: "../img/mal.png",
    audio: "../music/Alianca.mp3",
  },
  // Adicione até 10 músicas assim
];

let indexAtual = 0;
const audio = document.getElementById("audio");
const img = document.getElementById("currentImg");
const bg = document.getElementById("bg");
const playBtn = document.getElementById("playBtn");
const musicTitle = document.getElementById("musicTitle");
const timer = document.getElementById("timer");
const artistName = document.getElementById("artistName");

function carregarMusica(index) {
  const atual = musicas[index];
  const proxima = musicas[(index + 1) % musicas.length];

  img.src = atual.imagem;
  bg.style.backgroundImage = `url('${proxima.imagem}')`;
  audio.src = atual.audio;
  musicTitle.textContent = atual.nome;
  artistName.innerHTML = atual.artista;
  playBtn.textContent = "▶";
}

function togglePlayPause() {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = "⏸";
  } else {
    audio.pause();
    playBtn.textContent = "▶";
  }
}

function nextMusic() {
  indexAtual = (indexAtual + 1) % musicas.length;
  carregarMusica(indexAtual);
  audio.play();
  playBtn.textContent = "⏸";
}

function prevMusic() {
  indexAtual = (indexAtual - 1 + musicas.length) % musicas.length;
  carregarMusica(indexAtual);
  audio.play();
  playBtn.textContent = "⏸";
}

function formatarTempo(segundos) {
  const min = Math.floor(segundos / 60);
  const seg = Math.floor(segundos % 60);
  return `${min.toString().padStart(2, "0")}:${seg
    .toString()
    .padStart(2, "0")}`;
}

audio.addEventListener("timeupdate", () => {
  const tempoAtual = formatarTempo(audio.currentTime);
  const duracao = formatarTempo(audio.duration || 0);
  timer.textContent = `${tempoAtual} / ${duracao}`;
});

audio.addEventListener("ended", nextMusic);

carregarMusica(indexAtual);

const progressBar = document.getElementById("progressBar");

audio.addEventListener("timeupdate", () => {
  const tempoAtual = formatarTempo(audio.currentTime);
  const duracao = formatarTempo(audio.duration || 0);
  timer.textContent = `${tempoAtual} / ${duracao}`;

  const porcentagem = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = `${porcentagem}%`;
});

document.querySelector(".progress-container").addEventListener("click", (e) => {
  const largura = e.currentTarget.clientWidth;
  const clickX = e.offsetX;
  const novaTime = (clickX / largura) * audio.duration;
  audio.currentTime = novaTime;
});

/* Senha PART */
function checkPassword() {
  const senha = prompt("Senha? DICA: Vc ama!");
  if (senha === "milkaoreo") {
    // <<< Coloca aqui a senha especial
    document.getElementById("conteudo").style.display = "block";
    document.querySelector(".senha-btn").style.display = "none";
    document.querySelector("h2").style.display = "none";

    // Fica o fundo preto
    document.body.style.backgroundColor = "#000";
  } else {
    alert("Ahn? Não é essa! Tenta de novo! 💕");
  }
}
