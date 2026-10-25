import { firebaseConfig } from './firebase-config.js';

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

export class ThemeManager {
  constructor() {
    this.key = 'favoje-theme';
    this.defaultTheme = 'royal-purple';
    this.defaultAppearance = prefersDark ? 'dark' : 'light';
    this.themeMap = {
      'royal-purple': { light: ['#f5f3ff', '#e9e7ff', '#ffffff', '#1f2937', '#374151', '#6366f1', '#4f46e5', '#f97316', '#10b981', '#ef4444', '#94a3b8', '#c7d2fe', '#e0e7ff', '#f8fafc', '#0f172a'], dark: ['#080b14', '#111827', '#1f1b3a', '#f8fafc', '#cbd5e1', '#6366f1', '#4f46e5', '#f59e0b', '#10b981', '#ef4444', '#64748b', '#312e81', '#111827', '#1f2937', '#e2e8f0'] },
      'ember-red': { light: ['#fff7ed', '#ffedd5', '#ffffff', '#1f2937', '#475569', '#ef4444', '#f97316', '#f59e0b', '#10b981', '#ef4444', '#cbd5e1', '#fca5a5', '#fff1f2', '#f8fafc', '#111827'], dark: ['#120b0c', '#1f1111', '#2a1b1d', '#f8fafc', '#ddd6fe', '#ef4444', '#f97316', '#f59e0b', '#10b981', '#ef4444', '#94a3b8', '#7f1d1d', '#3f3f46', '#0f172a', '#f8fafc'] },
      'cyber-cyan': { light: ['#ecfeff', '#cffafe', '#ffffff', '#0f172a', '#475569', '#06b6d4', '#0ea5e9', '#2563eb', '#10b981', '#ef4444', '#94a3b8', '#bae6fd', '#dbeafe', '#f8fafc', '#0f172a'], dark: ['#020b14', '#071826', '#0f1d2f', '#ecfeff', '#dbeafe', '#22d3ee', '#0891b2', '#2563eb', '#10b981', '#ef4444', '#64748b', '#0f172a', '#0f172a', '#1e293b', '#ecfeff'] },
      'emerald': { light: ['#ecfdf5', '#d1fae5', '#ffffff', '#0f172a', '#475569', '#10b981', '#059669', '#22c55e', '#f59e0b', '#ef4444', '#94a3b8', '#bbf7d0', '#dcfce7', '#f8fafc', '#0f172a'], dark: ['#051810', '#092318', '#0b2b1c', '#f8fafc', '#d9f99d', '#10b981', '#059669', '#22c55e', '#f59e0b', '#ef4444', '#64748b', '#14532d', '#1f2937', '#0f172a', '#d1fae5'] },
      'neon-orchid': { light: ['#fdf2f8', '#fce7f3', '#ffffff', '#1f2937', '#475569', '#d946ef', '#a855f7', '#f97316', '#10b981', '#ef4444', '#94a3b8', '#f5d0fe', '#f3e8ff', '#f8fafc', '#0f172a'], dark: ['#120711', '#1d1021', '#2c1634', '#f8fafc', '#e9d5ff', '#d946ef', '#a855f7', '#f97316', '#10b981', '#ef4444', '#a1a1aa', '#4c1d95', '#1f2937', '#0f172a', '#f5d0fe'] },
      'golden-crown': { light: ['#fff7ed', '#ffedd5', '#ffffff', '#1f2937', '#475569', '#f59e0b', '#f97316', '#d97706', '#10b981', '#ef4444', '#cbd5e1', '#fcd34d', '#fef3c7', '#f8fafc', '#111827'], dark: ['#140d07', '#1c120b', '#2b1d12', '#fff7ed', '#fef3c7', '#f59e0b', '#f97316', '#d97706', '#10b981', '#ef4444', '#94a3b8', '#422006', '#1f2937', '#0f172a', '#fff7ed'] },
      'ocean-blue': { light: ['#eff6ff', '#dbeafe', '#ffffff', '#0f172a', '#475569', '#2563eb', '#1d4ed8', '#0ea5e9', '#10b981', '#ef4444', '#94a3b8', '#bfdbfe', '#e0f2fe', '#f8fafc', '#0f172a'], dark: ['#06131f', '#0b1d2d', '#102840', '#f8fafc', '#dbeafe', '#2563eb', '#1d4ed8', '#0ea5e9', '#10b981', '#ef4444', '#64748b', '#0f172a', '#0f172a', '#1e293b', '#f8fafc'] },
      'rose-quartz': { light: ['#fff1f2', '#ffe4e6', '#ffffff', '#1f2937', '#475569', '#f43f5e', '#ec4899', '#f97316', '#10b981', '#ef4444', '#cbd5e1', '#fecdd3', '#fce7f3', '#f8fafc', '#111827'], dark: ['#160d10', '#221417', '#2a1c22', '#fff1f2', '#f5d0fe', '#f43f5e', '#ec4899', '#f97316', '#10b981', '#ef4444', '#94a3b8', '#4c0519', '#1f2937', '#0f172a', '#fdf2f8'] },
      'titanium': { light: ['#f8fafc', '#e2e8f0', '#ffffff', '#0f172a', '#475569', '#64748b', '#94a3b8', '#cbd5e1', '#10b981', '#ef4444', '#94a3b8', '#cbd5e1', '#f1f5f9', '#f8fafc', '#0f172a'], dark: ['#0b0d10', '#111827', '#1f2937', '#f8fafc', '#d1d5db', '#94a3b8', '#64748b', '#cbd5e1', '#10b981', '#ef4444', '#64748b', '#1f2937', '#0f172a', '#111827', '#f8fafc'] },
      'toxic-lime': { light: ['#f7fee7', '#ecfccb', '#ffffff', '#0f172a', '#475569', '#84cc16', '#65a30d', '#a3e635', '#10b981', '#ef4444', '#94a3b8', '#bef264', '#d9f99d', '#f8fafc', '#111827'], dark: ['#0b1208', '#111b0b', '#1d2b13', '#f8fafc', '#dcfce7', '#84cc16', '#65a30d', '#a3e635', '#10b981', '#ef4444', '#64748b', '#365314', '#1f2937', '#0f172a', '#f8fafc'] },
      'arctic-mint': { light: ['#f0fdfa', '#ccfbf1', '#ffffff', '#0f172a', '#475569', '#14b8a6', '#0f766e', '#2dd4bf', '#f59e0b', '#ef4444', '#94a3b8', '#99f6e4', '#d1fae5', '#f8fafc', '#0f172a'], dark: ['#06171a', '#0d2325', '#12333a', '#f8fafc', '#d1fae5', '#14b8a6', '#0f766e', '#2dd4bf', '#10b981', '#ef4444', '#64748b', '#134e4a', '#1f2937', '#0f172a', '#f0fdfa'] },
      'obsidian-bronze': { light: ['#f8f5f1', '#efe4d6', '#ffffff', '#1f2937', '#475569', '#b45309', '#a16207', '#d97706', '#10b981', '#ef4444', '#94a3b8', '#f5d0a9', '#fef3c7', '#f8fafc', '#111827'], dark: ['#090909', '#1a120d', '#2a1f1b', '#f8fafc', '#fef3c7', '#b45309', '#a16207', '#d97706', '#10b981', '#ef4444', '#64748b', '#4a2d1d', '#1f2937', '#0f172a', '#f8fafc'] },
      'dark-ash': { light: ['#f8fafc', '#e2e8f0', '#ffffff', '#0f172a', '#475569', '#64748b', '#94a3b8', '#cbd5e1', '#10b981', '#ef4444', '#94a3b8', '#e2e8f0', '#f1f5f9', '#f8fafc', '#0f172a'], dark: ['#111315', '#1d2125', '#2a2d30', '#f8fafc', '#dfe7ef', '#94a3b8', '#94a3b8', '#cbd5e1', '#10b981', '#ef4444', '#64748b', '#2f343a', '#1f2937', '#0f172a', '#f8fafc'] },
      'dark-brown': { light: ['#f8f5f0', '#f1e7db', '#ffffff', '#1f2937', '#475569', '#8b5e34', '#a16207', '#b45309', '#10b981', '#ef4444', '#94a3b8', '#e7d4b2', '#f5ead7', '#f8fafc', '#0f172a'], dark: ['#100b09', '#1b120f', '#2d1d18', '#fffaf0', '#f5e7d3', '#8b5e34', '#a16207', '#b45309', '#10b981', '#ef4444', '#64748b', '#3e2b1f', '#1f2937', '#0f172a', '#fffaf0'] }
    };
  }

  getStoredSelection() {
    const saved = localStorage.getItem(this.key);
    if (!saved) return { theme: this.defaultTheme, appearance: this.defaultAppearance };

    try {
      return JSON.parse(saved);
    } catch {
      return { theme: this.defaultTheme, appearance: this.defaultAppearance };
    }
  }

  applyTheme(theme = this.defaultTheme, appearance = this.defaultAppearance) {
    const themeConfig = this.themeMap[theme] || this.themeMap[this.defaultTheme];
    const palette = themeConfig[appearance] || themeConfig[this.defaultAppearance];

    if (!palette) return;

    document.body.setAttribute('data-theme', theme);
    document.body.setAttribute('data-appearance', appearance);

    const customProperties = [
      ['--bg-page', palette[0]],
      ['--bg-panel', palette[1]],
      ['--bg-surface', palette[2]],
      ['--text-main', palette[3]],
      ['--text-muted', palette[4]],
      ['--primary', palette[5]],
      ['--secondary', palette[6]],
      ['--accent', palette[7]],
      ['--success', palette[8]],
      ['--danger', palette[9]],
      ['--border', palette[10]],
      ['--shadow-soft', palette[11]],
      ['--surface-strong', palette[12]],
      ['--bg-overlay', palette[13]],
      ['--text-inverse', palette[14]]
    ];

    customProperties.forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });

    localStorage.setItem(this.key, JSON.stringify({ theme, appearance }));
  }

  initialize() {
    const { theme, appearance } = this.getStoredSelection();
    this.applyTheme(theme, appearance);

    document.querySelectorAll('[data-theme]').forEach((button) => {
      button.addEventListener('click', () => {
        const selectedTheme = button.dataset.theme;
        const selectedAppearance = button.dataset.appearance || 'dark';
        this.applyTheme(selectedTheme, selectedAppearance);
      });
    });

    const themeButton = document.getElementById('themePreviewButton');
    if (themeButton) {
      themeButton.addEventListener('click', () => {
        const current = this.getStoredSelection();
        const nextAppearance = current.appearance === 'dark' ? 'light' : 'dark';
        this.applyTheme(current.theme, nextAppearance);
      });
    }

    const themeSettingsButton = document.getElementById('themeSettingsButton');
    if (themeSettingsButton) {
      themeSettingsButton.addEventListener('click', () => {
        window.location.href = 'admin/theme-manager.html';
      });
    }
  }
}

const themeManager = new ThemeManager();

window.addEventListener('DOMContentLoaded', () => {
  themeManager.initialize();
  const body = document.body;
  body.dataset.theme = 'royal-purple';
  body.dataset.appearance = 'dark';
});
