const menuButton=document.querySelector('.menu-button');
const nav=document.querySelector('.nav');
menuButton?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'메뉴 닫기':'메뉴 열기')});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuButton?.setAttribute('aria-expanded','false')}));

const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

// Keep About Yonsei aligned below the sticky menu while lazy images settle.
const aboutHeading = document.querySelector('#about .about-heading');
let stopAboutAlignment = () => {};
function alignAbout() {
  stopAboutAlignment();
  if (!aboutHeading) return;
  aboutHeading.classList.add('visible');
  let frame;
  const align = () => {
    const headerHeight = document.querySelector('.site-header')?.getBoundingClientRect().height || 0;
    window.scrollTo({top: Math.max(0, window.scrollY + aboutHeading.getBoundingClientRect().top - headerHeight - 12), behavior: 'instant'});
  };
  const resize = new ResizeObserver(() => {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(align);
  });
  const cancelEvents = ['wheel', 'touchstart', 'pointerdown', 'keydown'];
  let timer;
  const stop = () => {
    resize.disconnect();
    cancelAnimationFrame(frame);
    clearTimeout(timer);
    cancelEvents.forEach(type => window.removeEventListener(type, stop));
  };
  stopAboutAlignment = stop;
  cancelEvents.forEach(type => window.addEventListener(type, stop, {passive: true}));
  resize.observe(document.body);
  timer = setTimeout(stop, 5000);
  align();
}
nav?.querySelector('a[href="#about"]')?.addEventListener('click', event => {
  if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
  event.preventDefault();
  history.pushState(null, '', '#about');
  alignAbout();
});
window.addEventListener('hashchange', () => {
  if (location.hash === '#about') alignAbout();
  else stopAboutAlignment();
});
if (location.hash === '#about') alignAbout();
