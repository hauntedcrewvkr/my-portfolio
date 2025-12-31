export function initTheme() {
  const toggleBtn = document.querySelector('.theme-toggle');

  // अगर बटन नहीं मिला तो कोड यहीं रुक जाए (Error Prevention)
  if (!toggleBtn) return;

  const icon = toggleBtn.querySelector('i');
  const root = document.documentElement; // <html> tag

  // ------------------------------------------------------
  // 1. Memory Check (क्या यूजर ने पहले डार्क मोड चुना था?)
  // ------------------------------------------------------
  const savedTheme = localStorage.getItem('portfolio-theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // अगर मेमोरी में 'dark' है या सिस्टम डार्क है, तो डार्क मोड ऑन करें
  if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    enableDarkMode();
  }

  // ------------------------------------------------------
  // 2. Click Event (Theme Toggle)
  // ------------------------------------------------------
  toggleBtn.addEventListener('click', () => {
    const isDark = root.getAttribute('data-theme') === 'dark';

    if (isDark) {
      disableDarkMode();
    } else {
      enableDarkMode();
    }
  });

  // --- Helper Functions ---
  function enableDarkMode() {
    root.setAttribute('data-theme', 'dark');
    icon.classList.replace('ph-sun', 'ph-moon'); // Icon बदलें
    localStorage.setItem('portfolio-theme', 'dark'); // मेमोरी में सेव करें

    // बटन को घुमाने का एनिमेशन
    toggleBtn.style.transform = 'rotate(360deg)';
    setTimeout(() => (toggleBtn.style.transform = ''), 300);
  }

  function disableDarkMode() {
    root.removeAttribute('data-theme');
    icon.classList.replace('ph-moon', 'ph-sun'); // Icon बदलें
    localStorage.setItem('portfolio-theme', 'light'); // मेमोरी में सेव करें

    // बटन को वापस घुमाएं
    toggleBtn.style.transform = 'rotate(-360deg)';
    setTimeout(() => (toggleBtn.style.transform = ''), 300);
  }

  // ------------------------------------------------------
  // 3. Mobile Tooltip Logic (Click to Show Text)
  // ------------------------------------------------------
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      // यह लॉजिक सिर्फ मोबाइल स्क्रीन (768px से कम) पर चले
      if (window.innerWidth <= 768) {
        // बाकी सभी लिंक्स से 'show' क्लास हटा दें
        navLinks.forEach((l) => l.classList.remove('show'));

        // जिस पर क्लिक किया, उस पर 'show' लगाएं
        link.classList.add('show');
      }
    });
  });
}
