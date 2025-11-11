// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
menuBtn.addEventListener('click',()=>navLinks.classList.toggle('open'));

// Scroll spy (highlight active section)
const links = document.querySelectorAll('.navlink');
const sections = [...links].map(a=>document.querySelector(a.getAttribute('href')));
const setActive = (id)=>{
  links.forEach(a=>a.classList.toggle('active', a.getAttribute('href') === '#'+id));
};
const observer = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ setActive(e.target.id) }
  })
},{rootMargin:'-40% 0px -50% 0px', threshold:.01});
sections.forEach(s=>s&&observer.observe(s));

// Tabs
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');
tabBtns.forEach(btn=>btn.addEventListener('click', ()=>{
  tabBtns.forEach(b=>b.classList.remove('active'));
  tabPanels.forEach(p=>p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(btn.dataset.tab).classList.add('active');
}));

// GitHub cards updater
function setGithub(){
  const u = document.getElementById('ghUser').value.trim() || 'octocat';
  document.getElementById('ghOverview').src = `https://github-readme-stats.vercel.app/api?username=${u}&show_icons=true&theme=tokyonight`;
  document.getElementById('ghLangs').src = `https://github-readme-stats.vercel.app/api/top-langs/?username=${u}&layout=compact&theme=tokyonight`;
}
window.setGithub = setGithub;

// Year
document.getElementById('year').textContent = new Date().getFullYear();


