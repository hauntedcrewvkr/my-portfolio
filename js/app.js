import {initTheme} from './modules/animations.js';
import {initPrint} from './modules/print-logic.js';
import {initSkills} from './modules/skills-engine.js';
import {initProjects} from './modules/projects-engine.js';
import {initNavigation} from './modules/navigation-engine.js';
import {initContact} from './modules/contact-engine.js';

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initPrint();
  initNavigation();
  initSkills();
  initProjects();
  initContact();
});
