export function initPrint() {
  const downloadBtn = document.querySelector('.cta-download');

  if (downloadBtn) {
    downloadBtn.addEventListener('click', (e) => {
      e.preventDefault(); // डिफॉल्ट क्लिक रोकें

      // Resume का पाथ (फोल्डर स्ट्रक्चर के हिसाब से)
      // ध्यान दें: आपको 'assets/docs/' में 'resume.pdf' नाम की फाइल रखनी होगी
      const resumePath = 'assets/docs/resume.pdf';

      // डाउनलोड ट्रिगर करें
      const link = document.createElement('a');
      link.href = resumePath;
      link.download = 'Vikram_Kumar_Roy_Resume.pdf'; // यूजर के कंप्यूटर पर इस नाम से सेव होगा
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }
}
