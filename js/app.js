import { ThemeManager } from './theme-manager.js';

export function bindPasswordToggles() {
  document.querySelectorAll('[data-action="toggle-password"]').forEach((button) => {
    button.addEventListener('click', () => {
      const field = button.parentElement?.querySelector('input');
      if (!field) return;
      const isPassword = field.type === 'password';
      field.type = isPassword ? 'text' : 'password';
      button.textContent = isPassword ? 'Hide' : 'Show';
    });
  });
}

export function initAuthHandlers() {
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const identifier = document.getElementById('loginIdentifier')?.value?.trim() || '';
      const password = document.getElementById('loginPassword')?.value || '';

      if (!identifier || !password) {
        alert('Enter your email or username and password to continue.');
        return;
      }

      const isDemoUser = identifier.includes('@') || identifier.toLowerCase().startsWith('@');
      if (!isDemoUser && !identifier.match(/^[a-zA-Z0-9_]+$/)) {
        alert('Use a valid FUTMINNA email or username format.');
        return;
      }

      alert('Authentication is intentionally disabled in this scaffold until Firebase Auth and approval validation are configured in production.');
    });
  }

  const registerForm = document.getElementById('registerForm');
  if (registerForm) {
    registerForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const requiredIds = [
        'fullName',
        'username',
        'email',
        'matricNumber',
        'faculty',
        'department',
        'academicLevel',
        'password',
        'confirmPassword'
      ];

      const missing = requiredIds.some((id) => !(document.getElementById(id)?.value || '').trim());
      if (missing) {
        alert('Complete all required student registration details before submission.');
        return;
      }

      const password = document.getElementById('password')?.value || '';
      const confirmPassword = document.getElementById('confirmPassword')?.value || '';
      if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
      }

      if (!document.getElementById('termsAccepted')?.checked) {
        alert('You must accept the approval and access policy to continue.');
        return;
      }

      alert('Registration request captured. Approval and account activation require backend verification and admin review.');
    });
  }

  bindPasswordToggles();
}

export function initDashboard() {
  const statusNode = document.getElementById('accountStatus');
  if (statusNode) {
    statusNode.textContent = 'Approved Player';
  }

  const stats = {
    playerRank: '#24',
    battlesWon: '18',
    playerXp: '2680',
    accuracyRate: '92%',
    dailyStreak: '9'
  };

  Object.entries(stats).forEach(([id, value]) => {
    const node = document.getElementById(id);
    if (node) node.textContent = value;
  });

  const logoutButton = document.getElementById('logoutButton');
  if (logoutButton) {
    logoutButton.addEventListener('click', () => {
      window.location.href = 'login.html';
    });
  }
}

export function initAppShell() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach((link) => {
    const href = link.getAttribute('href') || '';
    if (href && href.endsWith(currentPage)) {
      link.classList.add('active');
    }
  });

  const themeButton = document.getElementById('themePreviewButton');
  if (themeButton) {
    themeButton.addEventListener('click', () => {
      const manager = new ThemeManager();
      const current = manager.getStoredSelection();
      const nextAppearance = current.appearance === 'dark' ? 'light' : 'dark';
      manager.applyTheme(current.theme, nextAppearance);
    });
  }

  bindPasswordToggles();
}

export default { bindPasswordToggles, initAuthHandlers, initDashboard, initAppShell };
