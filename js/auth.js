import { ThemeManager } from './theme-manager.js';

export function bindPasswordToggles() {
  document.querySelectorAll('[data-action="toggle-password"]').forEach((button) => {
    button.addEventListener('click', () => {
      const field = button.parentElement.querySelector('input');
      if (!field) return;
      field.type = field.type === 'password' ? 'text' : 'password';
      button.textContent = field.type === 'password' ? 'Show' : 'Hide';
    });
  });
}

export function initSafeApp() {
  const themeManager = new ThemeManager();
  themeManager.initialize();

  bindPasswordToggles();

  const themeButton = document.getElementById('themePreviewButton');
  if (themeButton) {
    themeButton.addEventListener('click', () => {
      const current = themeManager.getStoredSelection();
      const nextAppearance = current.appearance === 'dark' ? 'light' : 'dark';
      themeManager.applyTheme(current.theme, nextAppearance);
    });
  }

  const page = document.body.dataset.page || 'general';
  if (page === 'dashboard') {
    const statusNode = document.getElementById('accountStatus');
    if (statusNode) {
      statusNode.textContent = 'Approved Player';
    }

    const cards = [
      ['playerRank', '#24'],
      ['battlesWon', '18'],
      ['playerXp', '2680'],
      ['accuracyRate', '92%'],
      ['dailyStreak', '9'],
    ];

    cards.forEach(([id, value]) => {
      const node = document.getElementById(id);
      if (node) node.textContent = value;
    });
  }

  const logoutButton = document.getElementById('logoutButton');
  if (logoutButton) {
    logoutButton.addEventListener('click', () => {
      window.location.href = 'login.html';
    });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSafeApp);
} else {
  initSafeApp();
}
