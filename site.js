(()=>{const rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
document.querySelectorAll('main section .wrap > *:not(.grid), .grid > *, .hero.full .shot').forEach((el,i)=>{if(!el.hasAttribute('data-reveal')){el.setAttribute('data-reveal','');el.style.transitionDelay=(i%4)*90+'ms'}});
const els=document.querySelectorAll('[data-reveal]');
if(rm||!('IntersectionObserver' in window)){els.forEach(e=>e.classList.add('in'));return}
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{rootMargin:'0px 0px -8% 0px',threshold:.08});
els.forEach(e=>io.observe(e));
/* slow drift on the logo + banner text */
const drift=[...document.querySelectorAll('.biglogo,.bandtxt')];let tk=0;
addEventListener('scroll',()=>{if(tk)return;tk=requestAnimationFrame(()=>{tk=0;const vh=innerHeight;drift.forEach(el=>{const r=el.getBoundingClientRect();if(r.bottom<0||r.top>vh)return;const p=(r.top+r.height/2-vh/2)/vh;el.style.translate=`0 ${p*-60}px`})})},{passive:true});
})();
