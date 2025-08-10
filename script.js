document.addEventListener('DOMContentLoaded', function(){
  // === Toggle menu cho index.html và các trang dùng id ===
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
  }

  // === Year filler cho tất cả các trang ===
  const years = [ 'year','year2','year3','year4','year5','year6' ];
  years.forEach(id => {
    const el = document.getElementById(id);
    if(el) el.textContent = new Date().getFullYear();
  });

  // === Typing effect ===
  const typingEl = document.querySelector('.typing');
  if (typingEl) {
    const text = typingEl.getAttribute('data-text') || '';
    let i = 0;
    function type(){
      if (i <= text.length) {
        typingEl.textContent = text.slice(0, i);
        i++;
        setTimeout(type, 40);
      }
    }
    type();
  }

  // === Fade-in animation on scroll ===
  const elements = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.1 });
  elements.forEach(el => observer.observe(el));

  // === Auto intro message depending on page ===
  const messages = {
    "mo-nang.html": "Giặt những giấc mơ rồi phơi dưới nắng",
    "o-trong-vuon.html": "Nơi mùi hương biết kể chuyện",
    "binh-yen.html": "Chậm lại một chút, để thấy mình đang sống",
    "blogs.html": "Dừng lại để nghe những câu chuyện bên lề ở đây",
    "ve-toi.html": "Đôi dòng về mình"
  };
  const currentPage = window.location.pathname.split("/").pop();
  const text = messages[currentPage];
  if (text) {
    const categoryHeader = document.querySelector(".category-header h2");
    if (categoryHeader) {
      const introDiv = document.createElement("div");
      introDiv.classList.add("intro-message");
      const h3 = document.createElement("h3");
      h3.id = "typewriter";
      introDiv.appendChild(h3);
      categoryHeader.insertAdjacentElement("afterend", introDiv);
      typeWriterEffect("typewriter", text, 50);
    }
  }
});

// Typewriter helper
function typeWriterEffect(elementId, text, speed) {
  let i = 0;
  const el = document.getElementById(elementId);
  function typing() {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}


