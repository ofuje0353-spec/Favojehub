export function bindPasswordToggles() {
  document.querySelectorAll('[data-action="toggle-password"]').forEach((button) => {
    button.addEventListener('click', () => {
      const field = button.parentElement.querySelector('input');
      if (!field) return;
      const isPassword = field.type === 'password';
      field.type = isPassword ? 'text' : 'password';
      button.textContent = isPassword ? 'Hide' : 'Show';
    });
  });
}

export function setStatusText(selector, value) {
  const node = document.querySelector(selector);
  if (node) node.textContent = value;
}
