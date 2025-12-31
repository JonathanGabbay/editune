(function(){
  const root = document.documentElement;

  const email = root.getAttribute('data-email') || 'yehonatanga@gmail.com';
  const phone = root.getAttribute('data-phone') || '+972524711336';
  const wa = root.getAttribute('data-whatsapp') || '972524711336';

  const toast = document.getElementById('toast');
  const emailText = document.getElementById('emailText');
  const phoneText = document.getElementById('phoneText');

  const callBtns = Array.from(document.querySelectorAll('[data-action="call"]'));
  const waBtns = Array.from(document.querySelectorAll('[data-action="whatsapp"]'));
  const copyBtns = Array.from(document.querySelectorAll('[data-action="copy-email"]'));

  function showToast(msg){
    if(!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    window.clearTimeout(showToast._t);
    showToast._t = window.setTimeout(() => toast.classList.remove('show'), 2200);
  }

  function normalizePhone(p){
    return String(p || '').replace(/\s+/g, '');
  }

  function normalizeWhatsApp(n){
    return String(n || '').replace(/[^0-9]/g, '');
  }

  function refresh(){
    if(emailText) emailText.textContent = email;
    if(phoneText) phoneText.textContent = phone;

    const tel = normalizePhone(phone);
    callBtns.forEach(a => a.setAttribute('href', tel ? `tel:${tel}` : '#'));

    const waNum = normalizeWhatsApp(wa);
    const waText = 'Hi, I\'m interested in buying editune.com. Can we discuss?';
    waBtns.forEach(a => a.setAttribute('href', waNum ? `https://wa.me/${waNum}?text=${encodeURIComponent(waText)}` : '#'));
  }

  copyBtns.forEach(btn => {
    btn.addEventListener('click', async () => {
      try{
        await navigator.clipboard.writeText(email);
        showToast('Owner email copied');
      }catch{
        showToast('Could not copy — please copy manually');
      }
    });
  });

  refresh();
})();
