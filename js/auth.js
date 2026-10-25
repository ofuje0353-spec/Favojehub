import { ThemeManager } from './theme-manager.js';

const themeManager = new ThemeManager();

themeManager.initialize();

const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Firebase Authentication is not connected in this local scaffold. Configure your project and deploy backend logic before enabling production login.');
  });
}

const registerForm = document.getElementById('registerForm');
if (registerForm) {
  registerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Registration is not active in the local scaffold until Firebase Auth and approval logic are configured.');
  });
}

document.querySelectorAll('[data-action="toggle-password"]').forEach((button) => {
  button.addEventListener('click', () => {
    const field = button.parentElement.querySelector('input');
    if (!field) return;
    field.type = field.type === 'password' ? 'text' : 'password';
    button.textContent = field.type === 'password' ? 'Show' : 'Hide';
  });
});
