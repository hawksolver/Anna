document
  .getElementById("transition-button")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Impede o redirecionamento imediato
    document.body.classList.add("transition"); // Adiciona a classe de transição

    // Aguarda o tempo da transição antes de redirecionar
    setTimeout(() => {
      window.location.href = "./telas/pt2.html"; // Redireciona para a próxima página
    }, 1000); // Tempo em milissegundos (1s)
  });
