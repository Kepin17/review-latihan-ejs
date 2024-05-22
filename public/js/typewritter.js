const texts = [
  "Let me introduce myself.", 
  "My name is Kevien.", 
  "I'm Student.",
  "I'm a web developer.",
  "I'm always looking for new challenges.",

];

// script.js
document.addEventListener("DOMContentLoaded", function () {
  const typewriterText = document.getElementById("typewriter-text");
  let index = 0;
  let indexText = 0;
  let isDeleting = false;
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBetweenTexts = 2000;

  function type() {
    let text = texts[indexText];
    if (!isDeleting && index < text.length) {
      typewriterText.textContent += text.charAt(index);
      index++;
      setTimeout(type, typingSpeed);
    } else if (isDeleting && index > 0) {
      typewriterText.textContent = text.substring(0, index - 1);
      index--;
      setTimeout(type, deletingSpeed);
    } else if (!isDeleting && index === text.length) {
      setTimeout(() => {
        isDeleting = true;
        setTimeout(type, deletingSpeed);
      }, delayBetweenTexts);
    } else if (isDeleting && index === 0) {
      isDeleting = false;
      index = 0;
      if (indexText < texts.length - 1) {
        indexText++;
      } else {
        indexText = 0;
      }
      setTimeout(type, typingSpeed);
    }
  }

  type();
});
