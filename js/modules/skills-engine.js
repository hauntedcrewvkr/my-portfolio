const knowledgeBase = [
  {
    name: 'Javascript',
    icon: 'ph-custom ph-logo-javascript',
    color: '#F7DF1E',
    mastered: true,
  },
  {
    name: 'React.js',
    icon: 'ph-atom',
    color: '#61DAFB',
    mastered: true,
  },
  {
    name: 'Python',
    icon: 'ph-custom ph-logo-python',
    color: '#3776AB',
    mastered: true,
  },
  {
    name: 'Node.js',
    icon: 'ph-custom ph-logo-nodejs',
    color: '#339933',
    mastered: true,
  },
  {
    name: 'SQL',
    icon: 'ph-custom ph-logo-sql',
    color: '#4479A1',
    mastered: true,
  },
  {
    name: 'HTML5',
    icon: 'ph-custom ph-logo-html5',
    color: '#E34F26',
    mastered: true,
  },
  {
    name: 'CSS3',
    icon: 'ph-custom ph-logo-css3',
    color: '#1572B6',
    mastered: true,
  },
  {
    name: 'Linux',
    icon: 'ph-linux-logo',
    color: '#FCC624',
    mastered: true,
  },
  {
    name: 'VBA',
    icon: 'ph-custom ph-file-vba',
    color: '#217346',
    mastered: true,
  },
  {
    name: 'Tableau',
    icon: 'ph-custom ph-logo-tableau',
    color: '#E97627',
    mastered: true,
  },
  {
    name: 'Power BI',
    icon: 'ph-custom ph-logo-powerbi',
    color: '#F2C811',
    mastered: true,
  },
  {
    name: 'MS Office',
    icon: 'ph-custom ph-logo-office',
    color: '#EA3E23',
    mastered: true,
  },
  {
    name: 'GSuite',
    icon: 'ph-custom ph-logo-gsuite',
    color: '#4285F4',
    mastered: true,
  },
  {
    name: 'Numpy',
    icon: 'ph-custom ph-logo-numpy',
    color: '#4D77CF',
    mastered: true,
  },
  {
    name: 'Pandas',
    icon: 'ph-custom ph-logo-pandas',
    color: '#E70488',
    mastered: true,
  },
  //-------------------------------------------------<( Future-Learning-Skills )>-
  {
    name: 'Rust',
    icon: 'ph-custom ph-logo-rust',
    color: '#DEA584',
    mastered: false,
  },
  {
    name: 'Docker',
    icon: 'ph-custom ph-logo-docker',
    color: '#2496ED',
    mastered: false,
  },
  {
    name: 'AI/ML',
    icon: 'ph-brain',
    color: '#A020F0',
    mastered: false,
  },
];

export function initSkills() {
  const container = document.getElementById('skills-container');
  if (!container) return;

  container.innerHTML = '';

  knowledgeBase.forEach((skill, index) => {
    const li = document.createElement('li');

    li.className = 'skill-tag';

    if (skill.mastered) {
      li.classList.add('mastered');
      li.style.setProperty('--brand-color', skill.color);
    } else {
      li.classList.add('locked');
    }

    li.innerHTML = `
            <i class="ph ${skill.icon} skill-icon"></i>
            <span>${skill.name}</span>
        `;

    li.style.animation = `fadeInUp 0.5s ease forwards`;
    li.style.animationDelay = `${index * 50}ms`;
    li.style.opacity = '0';

    container.appendChild(li);
  });
}
