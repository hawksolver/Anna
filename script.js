// script.js
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.slide-in');
    elements.forEach((element, index) => {
      setTimeout(() => {
        element.style.opacity = 1;
        element.style.transform = 'translateX(0)';
      }, index * 500); // 500ms delay for cada elemento
    });
  });
  