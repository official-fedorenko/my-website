// Этот файл JavaScript содержит скрипты для интерактивности на сайте.
// Он может включать функции для обработки форм, анимации и других динамических элементов.

document.addEventListener("DOMContentLoaded", function () {
  // Пример функции для обработки формы обратной связи
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      // Логика обработки формы
      alert("Форма отправлена!");
    });
  }

  // Пример анимации при прокрутке
  const elements = document.querySelectorAll(".fade-in");
  const options = {
    root: null,
    threshold: 0.1,
    rootMargin: "0px",
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, options);

  elements.forEach((element) => {
    observer.observe(element);
  });

  var modal = document.getElementById("modal");
  var btn = document.getElementById("learn-more-btn");
  var span = document.getElementsByClassName("close-btn")[0];

  btn.onclick = function () {
    modal.style.display = "block";
  };

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});
