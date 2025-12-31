/* ==========================================================================
   MODULE: Projects Engine (The Creations Logic)
   ========================================================================== */

// 1. THE DATASET
const projectData = [
  {
    title: 'Network Optimizer 4636',
    desc: 'Advanced Android system tuning module to unlock maximum throughput using hidden kernel parameters and radio config.',
    // Array of technologies used
    stack: ['Java', 'Shell Script', 'Android SDK'],
  },
  {
    title: 'Vedic Astro Engine',
    desc: 'High-precision algorithmic engine for generating birth charts (Kundali) and planetary positions based on ancient Jyotish logic.',
    stack: ['Python', 'NumPy', 'Algorithms'],
  },
  {
    title: 'Portfolio V2 (Hyper-Realism)',
    desc: "A digital architectural portfolio featuring 'Twin-Orb' controls, dark mode physics, and JSON-driven content injection.",
    stack: ['HTML5', 'CSS3 Variables', 'Vanilla JS'],
  },
];

// 2. THE RENDER LOGIC
export function initProjects() {
  const container = document.getElementById('projects-container');
  if (!container) return;

  container.innerHTML = '';

  projectData.forEach((project, index) => {
    const li = document.createElement('li');
    li.className = 'project-card';

    // --- Tech Stack Builder ---
    // हम हर तकनीक के लिए एक छोटा <span> (Pill) बनाएंगे
    const stackHTML = project.stack.map((tech) => `<span class="tech-pill">${tech}</span>`).join('');

    // HTML Structure
    li.innerHTML = `
            <div class="card-content">
                <h3>${project.title}</h3>
                <p>${project.desc}</p>
            </div>
            
            <div class="card-footer">
                <div class="tech-stack-wrapper">
                    ${stackHTML}
                </div>
            </div>
        `;

    // Animation Stagger (Waterfall Effect)
    li.style.animation = `fadeInUp 0.6s ease forwards`;
    // Projects come slightly slower than skills
    li.style.animationDelay = `${index * 100}ms`;
    li.style.opacity = '0';

    container.appendChild(li);
  });
}
