document.addEventListener('DOMContentLoaded', function(){
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('main-nav');
  if(toggle && nav){
    toggle.addEventListener('click', () => nav.classList.toggle('open'));
  }

  // year filler
  const years = [ 'year','year2','year3','year4','year5','year6' ];
  years.forEach(id => {
    const el = document.getElementById(id);
    if(el) el.textContent = new Date().getFullYear();
  });

  // typing effect
  const typingEl = document.querySelector('.typing');
  if(typingEl){
    const text = typingEl.getAttribute('data-text') || '';
    let i = 0;
    function type(){
      if(i <= text.length) {
        typingEl.textContent = text.slice(0,i);
        i++;
        setTimeout(type, 40);
      }
    }
    type();
  }
});
// === Fade-in on scroll ===
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => observer.observe(el));
});
