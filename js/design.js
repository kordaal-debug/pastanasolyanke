document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.top');
  const updateHeader = () => header?.classList.toggle('scrolled', window.scrollY > 60);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });
  const nav = document.getElementById('nav');
  const burger = document.querySelector('.burger');
  const closeNav = () => { nav?.classList.remove('open'); burger?.setAttribute('aria-expanded', 'false'); };
  nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeNav));
  document.addEventListener('keydown', event => { if(event.key === 'Escape') closeNav(); });
  const dialog = document.querySelector('.photo-dialog');
  if (!dialog) return;
  const photos = [
    ['/img/recovered/28-___.jpg', 'Зелёный зал PASTA на Солянке'],
    ['/img/recovered/25-_____.jpg', 'Стол с цветами у окна'],
    ['/img/recovered/27-____.jpg', 'Дровяная печь PASTA']
  ];
  let current = 0;
  const show = index => {
    current = (index + photos.length) % photos.length;
    const image = dialog.querySelector('img');
    [image.src, image.alt] = photos[current];
    dialog.querySelector('.gallery-counter').textContent = `${current + 1} / ${photos.length}`;
  };
  document.querySelectorAll('[data-gallery]').forEach(button => button.addEventListener('click', () => {
    show(Number(button.dataset.gallery)); dialog.showModal();
  }));
  dialog.querySelector('.gallery-close').addEventListener('click', () => dialog.close());
  dialog.querySelector('.gallery-prev').addEventListener('click', () => show(current - 1));
  dialog.querySelector('.gallery-next').addEventListener('click', () => show(current + 1));
  dialog.addEventListener('keydown', event => {
    if(event.key === 'ArrowRight') { event.preventDefault(); show(current + 1); }
    if(event.key === 'ArrowLeft') { event.preventDefault(); show(current - 1); }
  });
});
