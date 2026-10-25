import { initAppShell, initAuthHandlers, initDashboard } from './auth.js';
import { ThemeManager } from './theme-manager.js';

const themeManager = new ThemeManager();
themeManager.initialize();

window.addEventListener('DOMContentLoaded', () => {
  initAuthHandlers();
  initDashboard();
  initAppShell();
});
