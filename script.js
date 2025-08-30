<script>
document.addEventListener('DOMContentLoaded', function () {
  initMenuToggle();
  fillYears();
  initTypingEffect();
  initFadeIn();
  initAutoIntroMessage();
  setActiveMenu();
});

// === Toggle menu cho header ===
function initMenuToggle() {
  const toggle = document.getElementById('burger');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  }
}

// === Year filler ===
function fillYears() {
  const years = ['year', 'year2', 'year3', 'year4', 'year5', 'year6'];
  const currentYear = new Date().getFullYear();
  years.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = currentYear;
  });
}

// === Typing effect (dùng cho .typing) ===
function initTypingEffect() {
  const typingEl = document.querySelector('.typing');
  if (typingEl) {
    const text = typingEl.getAttribute('data-text') || '';
    typeWriterEffect(typingEl, text, 40);
  }
}

// === Fade-in animation on scroll ===
function initFadeIn() {
  const elements = document.querySelectorAll('.fade-in');
  if (!elements.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // chỉ observe 1 lần
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => observer.observe(el));
}

// === Auto intro message theo page ===
function initAutoIntroMessage() {
  const messages = {
    "mo-nang.html": "Giặt những giấc mơ rồi phơi dưới nắng",
    "o-trong-vuon.html": "Nơi mùi hương biết kể chuyện",
    "binh-yen.html": "Chậm lại một chút, để thấy mình đang sống",
    "blogs.html": "Dừng lại để nghe những câu chuyện bên lề ở đây",
    "ve-toi.html": "Đôi dòng về mình"
  };

  const currentPage = window.location.pathname.split("/").pop();
  const message = messages[currentPage];
  if (!message) return;

  const categoryHeader = document.querySelector(".category-header h2");
  if (categoryHeader) {
    const introDiv = document.createElement("div");
    introDiv.classList.add("intro-message");

    const h3 = document.createElement("h3");
    introDiv.appendChild(h3);

    categoryHeader.insertAdjacentElement("afterend", introDiv);

    typeWriterEffect(h3, message, 50);
  }
}

// === Auto active menu ===
function setActiveMenu() {
  const currentPage = window.location.pathname.split("/").pop();
  document.querySelectorAll(".main-nav a").forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPage || (currentPage === "" && href === "index.html")) {
      link.classList.add("active");
    }
  });
}

// === Typewriter helper ===
function typeWriterEffect(element, text, speed = 40) {
  let i = 0;
  function typing() {
    if (i <= text.length) {
      element.textContent = text.slice(0, i);
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}
</script>







