/* ==========================================================================
   MODULE: Contact Engine (Google Apps Script Integration)
   ========================================================================== */

export function initContact() {
  const form = document.getElementById('contact-form');
  const btn = form.querySelector('.form-submit-btn');
  const btnText = form.querySelector('.btn-text');
  const statusMsg = document.getElementById('form-status');

  // ★★★ PASTE YOUR GOOGLE DEPLOYMENT URL HERE ★★★
  const scriptURL = 'YOUR_GOOGLE_SCRIPT_WEB_APP_URL';

  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // 1. UI: Loading State
    const originalText = btnText.innerText;
    btnText.innerText = 'Transmitting...';
    btn.style.opacity = '0.7';
    btn.disabled = true;
    statusMsg.innerText = '';
    statusMsg.className = 'form-status';

    // 2. Prepare Data (FormData converts inputs automatically)
    const requestBody = new FormData(form);

    // 3. Send to Google
    fetch(scriptURL, {method: 'POST', body: requestBody})
      .then((response) => {
        // Google Script always returns 200 OK via fetch logic
        console.log('Signal Transmitted');

        // Success UI
        btnText.innerText = 'Signal Sent';
        statusMsg.innerText = 'Protocol Successful. Message Transmitted.';
        statusMsg.classList.add('status-success');

        form.reset();

        // Reset Button
        setTimeout(() => {
          btnText.innerText = originalText;
          btn.disabled = false;
          btn.style.opacity = '1';
          statusMsg.innerText = '';
        }, 4000);
      })
      .catch((error) => {
        console.error('Transmission Error!', error.message);

        // Error UI
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
