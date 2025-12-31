export function initTheme() {
  const toggleBtn = document.querySelector('.theme-toggle');

  if (!toggleBtn) return;

  const icon = toggleBtn.querySelector('i');
  const root = document.documentElement;
  const savedTheme = localStorage.getItem('portfolio-theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) enableDarkMode();

  toggleBtn.addEventListener('click', () => {
    const isDark = root.getAttribute('data-theme') === 'dark';

    if (isDark) {
      disableDarkMode();
    } else {
      enableDarkMode();
    }
  });

  function enableDarkMode() {
    root.setAttribute('data-theme', 'dark');
    icon.classList.replace('ph-sun', 'ph-moon');
    localStorage.setItem('portfolio-theme', 'dark');
    toggleBtn.style.transform = 'rotate(360deg)';
    setTimeout(() => (toggleBtn.style.transform = ''), 300);
  }

  function disableDarkMode() {
    root.removeAttribute('data-theme');
    icon.classList.replace('ph-moon', 'ph-sun');
    localStorage.setItem('portfolio-theme', 'light');
    toggleBtn.style.transform = 'rotate(-360deg)';
    setTimeout(() => (toggleBtn.style.transform = ''), 300);
  }

  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        navLinks.forEach((l) => l.classList.remove('show'));
        link.classList.add('show');
      }
    });
  });
}
