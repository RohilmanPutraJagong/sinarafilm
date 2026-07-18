
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
toggle?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add('visible');
  });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const buttons = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.film-card');
buttons.forEach(btn=>btn.addEventListener('click',()=>{
  buttons.forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  const f = btn.dataset.filter;
  cards.forEach(card=>{
    card.classList.toggle('hidden', !(f==='all' || card.dataset.status===f));
  });
}));

document.querySelector('.play')?.addEventListener('click',()=>{
  alert('Trailer akan tersedia setelah SINARA resmi diluncurkan.');
});
