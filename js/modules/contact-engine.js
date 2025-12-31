export function initContact() {
  const form = document.getElementById('contact-form');
  const btn = form.querySelector('.form-submit-btn');
  const btnText = form.querySelector('.btn-text');
  const statusMsg = document.getElementById('form-status');
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwDbuhlSn9dag1gB2iEMtGm2dNwRl99cIwEpOvNp2giaomLVcOYXij2EqqYuidNWVfZjw/exec';

  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const originalText = btnText.innerText;

    btnText.innerText = 'Transmitting...';
    btn.style.opacity = '0.7';
    btn.disabled = true;
    statusMsg.innerText = '';
    statusMsg.className = 'form-status';

    const requestBody = new FormData(form);

    fetch(scriptURL, {method: 'POST', body: requestBody})
      .then((response) => {
        console.log('Signal Transmitted');
        btnText.innerText = 'Signal Sent';
        statusMsg.innerText = 'Protocol Successful. Message Transmitted.';
        statusMsg.classList.add('status-success');
        form.reset();
        setTimeout(() => {
          btnText.innerText = originalText;
          btn.disabled = false;
          btn.style.opacity = '1';
          statusMsg.innerText = '';
        }, 4000);
      })
      .catch((error) => {
        console.error('Transmission Error!', error.message);

        btnText.innerText = 'Failed';
        statusMsg.innerText = 'Signal Lost. Check Connection.';
        statusMsg.classList.add('status-error');

        setTimeout(() => {
          btnText.innerText = originalText;
          btn.disabled = false;
          btn.style.opacity = '1';
        }, 3000);
      });
  });
}
