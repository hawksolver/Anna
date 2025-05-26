function typeWriter(element, speed = 30) {
  const text = element.textContent;
  element.textContent = "";
  let i = 0;
  function typing() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}

window.addEventListener("DOMContentLoaded", () => {
  const zeldaP = document.querySelector(".zelda-p");
  typeWriter(zeldaP, 40);
});
