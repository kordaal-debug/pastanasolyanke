document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.burger');
  if (toggle) { toggle.removeAttribute('onclick'); toggle.addEventListener('click', () => {
    const open = document.getElementById('nav').classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  }); }
  let ready = false;
  try {
    if (typeof window.widgetArea === 'function') {
      window.widgetArea({ booking: [{name:'Pasta на Солянке',point:447091}], button:'[href="#openReMarkedWidget"]',email:true,phoneMask:true,rangeSlotsTime:true,blockedOpenTime:true,blockedAutoLanding:true,utmSourceToReserveSource:true,errorColor:'red',linkPolicy:'https://remarked.ru/widget/new/css/privancy.html',qtyMax:10 });
      ready = true;
    }
  } catch (error) { console.error('Booking widget could not initialize', error); }
  document.querySelectorAll('[href="#openReMarkedWidget"]').forEach(button => {
    button.addEventListener('click', event => {
      event.preventDefault();
      if (ready) return;
      let message = document.getElementById('booking-status');
      if (!message) { message = document.createElement('p'); message.id='booking-status'; message.setAttribute('role','status'); button.after(message); }
      message.hidden=false;
      message.innerHTML='Форма временно недоступна. Пожалуйста, позвоните: <a href="tel:+79254477317">+7 (925) 447-73-17</a>.';
      message.scrollIntoView({block:'center'});
    });
  });
  // Keep existing inbound links working without editing the Maps listing.
  const openInboundBooking = () => {
    const hash = window.location.hash.toLowerCase();
    const source = new URLSearchParams(window.location.search).get('utm_source');
    const requested = hash === '#openremarkedwidget' || hash === '#bron' ||
      (!hash && source?.toLowerCase() === 'ymaps');
    if (!requested) return;
    const trigger = document.querySelector('[href="#openReMarkedWidget"]');
    if (trigger) trigger.click();
  };
  openInboundBooking();
  window.addEventListener('hashchange', openInboundBooking);

});