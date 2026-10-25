import { ThemeManager } from './theme-manager.js';

export function initSafeApp() {
  const themeManager = new ThemeManager();
  themeManager.initialize();

  const page = document.body.dataset.page || 'general';
  if (page === 'auth') {
    document.querySelectorAll('[data-action="toggle-password"]').forEach((button) => {
      button.addEventListener('click', () => {
        const field = button.parentElement.querySelector('input');
        if (!field) return;
        field.type = field.type === 'password' ? 'text' : 'password';
        button.textContent = field.type === 'password' ? 'Show' : 'Hide';
      });
    });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSafeApp);
} else {
  initSafeApp();
}
