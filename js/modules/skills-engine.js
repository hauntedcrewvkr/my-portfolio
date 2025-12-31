/* ==========================================================================
   MODULE: Skills Engine (The Knowledge Base)
   ========================================================================== */

// 1. THE DATASET
// mastered: true = रंगीन दिखेगा (Active)
// mastered: false = ग्रे दिखेगा (Passive/Learning)
const knowledgeBase = [
  // --- Mastered Skills (Colorful) ---
  {
    name: 'Javascript',
    icon: 'ph-file-js',
    color: '#F7DF1E', // JS Yellow
    mastered: true,
  },
  {
    name: 'React.js',
    icon: 'ph-atom',
    color: '#61DAFB', // React Blue
    mastered: true,
  },
  {
    name: 'Python',
    icon: 'ph-file-py',
    color: '#3776AB', // Python Blue
    mastered: true,
  },
  {
    name: 'Node.js',
    icon: 'ph-hard-drives',
    color: '#339933', // Node Green
    mastered: true,
  },
  {
    name: 'Database',
    icon: 'ph-database',
    color: '#c5a059', // Our Gold (SQL)
    mastered: true,
  },

  // --- Future / Learning Skills (Gray) ---
  {
    name: 'Rust',
    icon: 'ph-gear',
    color: '#dea584', // Will be ignored by logic
    mastered: false,
  },
  {
    name: 'Docker',
    icon: 'ph-container',
    color: '#2496ED',
    mastered: false,
  },
  {
    name: 'AI/ML',
    icon: 'ph-brain',
    color: '#FF6F00',
    mastered: false,
  },
];

// 2. THE RENDER LOGIC
export function initSkills() {
  const container = document.getElementById('skills-container');
  if (!container) return;

  container.innerHTML = '';

  knowledgeBase.forEach((skill, index) => {
    const li = document.createElement('li');

    // Base Class
    li.className = 'skill-tag';

    // STATUS LOGIC:
    // अगर सीखा हुआ है, तो 'mastered' क्लास और इनलाइन कलर दें
    // अगर नहीं, तो 'locked' क्लास दें (जो CSS में ग्रे हो जाएगा)
    if (skill.mastered) {
      li.classList.add('mastered');
      // हम CSS Variable में कलर पास कर रहे हैं ताकि होवर इफेक्ट में यूज़ कर सकें
      li.style.setProperty('--brand-color', skill.color);
    } else {
      li.classList.add('locked');
    }

    // HTML Structure: Icon + Name
    li.innerHTML = `
            <i class="ph ${skill.icon} skill-icon"></i>
            <span>${skill.name}</span>
        `;

    // Animation Stagger
    li.style.animation = `fadeInUp 0.5s ease forwards`;
    li.style.animationDelay = `${index * 50}ms`;
    li.style.opacity = '0';

    container.appendChild(li);
  });
}
