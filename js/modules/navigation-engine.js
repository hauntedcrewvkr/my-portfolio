/* ==========================================================================
   MODULE: Navigation Engine (Scroll Spy & Click Logic)
   ========================================================================== */

export function initNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section');

  // -----------------------------------------------------------
  // 1. CLICK LOGIC (Immediate Feedback)
  // -----------------------------------------------------------
  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      // नोट: हम e.preventDefault() नहीं कर रहे ताकि एंकर स्क्रॉल काम करे

      // 1. बाकियों से Active हटाएं
      navLinks.forEach((l) => l.classList.remove('active'));

      // 2. जिस पर क्लिक किया उसे Active करें
      link.classList.add('active');
    });
  });

  // -----------------------------------------------------------
  // 2. SCROLL SPY (Intersection Observer)
  // -----------------------------------------------------------

  // यह "Observer" सेटिंग है
  const observerOptions = {
    root: null, // पूरा व्यूपोर्ट
    rootMargin: '-45% 0px -45% 0px', // CRITICAL: स्क्रीन के बीच में एक 10% की "लेज़र स्ट्रिप" बनाता है
    threshold: 0, // जैसे ही सेक्शन उस स्ट्रिप को छुएगा, ट्रिगर होगा
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // स्क्रीन के बीच में जो सेक्शन आया है, उसका ID लो
        const currentId = entry.target.getAttribute('id');

        // बाकियों से Active हटाओ
        navLinks.forEach((link) => {
          link.classList.remove('active');

          // अगर लिंक का href इस ID से मैच करता है, तो उसे Active करो
          if (link.getAttribute('href') === `#${currentId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, observerOptions);

  // सभी सेक्शन्स पर "लेज़र" (Observer) लगाओ
  sections.forEach((section) => {
    observer.observe(section);
  });
}
