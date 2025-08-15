<script>
document.addEventListener('DOMContentLoaded', function(){
  // === Toggle menu cho header ===
  const toggle = document.getElementById('burger');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  }

  // === Year filler ===
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

  // === Auto intro message ===
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

  // === Auto active menu ===
  document.querySelectorAll(".main-nav a").forEach(link => {
    if (link.getAttribute("href") === currentPage || 
        (currentPage === "" && link.getAttribute("href") === "index.html")) {
      link.classList.add("active");
    }
  });

  // === Music player ===
  const musicContainer = document.createElement('div');
  musicContainer.id = 'aplayer';
  document.body.appendChild(musicContainer);

  const ap = new APlayer({
    container: document.getElementById('aplayer'),
    audio: [{
      name: 'HoanggThhusBlog',
      artist: 'Unknown',
      url: 'rhapsody_in_the_garden-steve_lowther.mp3',
      cover: 'SMPIC.png'
    }]
  });
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
</script>






