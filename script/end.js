emailjs.init("GRpvt54ee9apPUOm9");

let nota = 0;

const estrelas = document.querySelectorAll(".estrela");
estrelas.forEach((e) => {
  e.addEventListener("click", () => {
    nota = e.getAttribute("data-valor");
    estrelas.forEach((s) => s.classList.remove("selecionada"));
    for (let i = 0; i < nota; i++) {
      estrelas[i].classList.add("selecionada");
    }
  });
});

function enviarNota() {
  if (nota == 0) {
    alert("Escolha uma nota!");
    return;
  }
  emailjs
    .send("service_bd4fu2b", "template_rkr0ewp", {
      nota: nota,
    })
    .then(
      () => {
        alert("Nota enviada! Obrigado!");
      },
      (error) => {
        console.log("FAILED...", error);
      }
    );
}
