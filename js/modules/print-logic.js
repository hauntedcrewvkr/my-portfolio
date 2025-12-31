export function initPrint() {
  const downloadBtn = document.querySelector('.cta-download');

  if (downloadBtn) {
    downloadBtn.addEventListener('click', (e) => {
      e.preventDefault();

      const resumePath = 'assets/docs/resume.pdf';
      const link = document.createElement('a');
      link.href = resumePath;
      link.download = 'Vikram_Kumar_Roy_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }
}
