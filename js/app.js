import {initTheme} from './modules/animations.js';
import {initPrint} from './modules/print-logic.js';
import {initSkills} from './modules/skills-engine.js';
import {initProjects} from './modules/projects-engine.js';
import {initNavigation} from './modules/navigation-engine.js'; // <-- NEW IMPORT
import {initContact} from './modules/contact-engine.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Core Systems
  initTheme();
  initPrint();
  initNavigation(); // <-- START THE SCROLL SPY

  // 2. Data Injection
  initSkills();
  initProjects();
  initContact();

  console.log('%c System Online ', 'background: #1a2238; color: #c5a059; padding: 4px; border-radius: 4px; font-weight: bold;');
});
