const themes = {
  'royal-purple': {
    dark: {
      'bg-page': '#080b14',
      'bg-panel': '#111827',
      'bg-surface': '#1b2333',
      'text-main': '#f8fafc',
      'text-muted': '#cbd5e1',
      primary: '#6366f1',
      secondary: '#4f46e5',
      accent: '#f97316',
      success: '#10b981',
      danger: '#ef4444',
      border: 'rgba(148, 163, 184, 0.22)',
      'shadow-soft': 'rgba(6, 10, 24, 0.5)',
      'surface-strong': '#1f2937',
      'bg-overlay': 'rgba(15, 23, 42, 0.74)',
      'text-inverse': '#ffffff',
      'focus-ring': 'rgba(99, 102, 241, 0.55)'
    },
    light: {
      'bg-page': '#f7f8fc',
      'bg-panel': '#ffffff',
      'bg-surface': '#edf2ff',
      'text-main': '#111827',
      'text-muted': '#475569',
      primary: '#4f46e5',
      secondary: '#6366f1',
      accent: '#f97316',
      success: '#10b981',
      danger: '#ef4444',
      border: 'rgba(99, 102, 241, 0.15)',
      'shadow-soft': 'rgba(15, 23, 42, 0.08)',
      'surface-strong': '#e2e8f0',
      'bg-overlay': 'rgba(15, 23, 42, 0.08)',
      'text-inverse': '#ffffff',
      'focus-ring': 'rgba(79, 70, 229, 0.35)'
    }
  },
  'ember-red': {
    dark: {
      'bg-page': '#120b0d',
      'bg-panel': '#1f1114',
      'bg-surface': '#321a1f',
      'text-main': '#fff3f2',
      'text-muted': '#f5c5c7',
      primary: '#ef4444',
      secondary: '#f87171',
      accent: '#fb923c',
      success: '#34d399',
      danger: '#f43f5e',
      border: 'rgba(251, 146, 60, 0.2)',
      'shadow-soft': 'rgba(28, 8, 12, 0.5)',
      'surface-strong': '#3d1c20',
      'bg-overlay': 'rgba(22, 11, 15, 0.74)',
      'text-inverse': '#ffffff',
      'focus-ring': 'rgba(239, 68, 68, 0.5)'
    },
    light: {
      'bg-page': '#fff7f5',
      'bg-panel': '#ffffff',
      'bg-surface': '#fee2e2',
      'text-main': '#1f2937',
      'text-muted': '#6b7280',
      primary: '#dc2626',
      secondary: '#ef4444',
      accent: '#f97316',
      success: '#10b981',
      danger: '#ef4444',
      border: 'rgba(239, 68, 68, 0.18)',
      'shadow-soft': 'rgba(31, 41, 55, 0.08)',
      'surface-strong': '#fef2f2',
      'bg-overlay': 'rgba(127, 29, 29, 0.08)',
      'text-inverse': '#ffffff',
      'focus-ring': 'rgba(220, 38, 38, 0.28)'
    }
  },
  'cyber-cyan': {
    dark: {
      'bg-page': '#06181b',
      'bg-panel': '#0d2128',
      'bg-surface': '#13333a',
      'text-main': '#ecfeff',
      'text-muted': '#bae6fd',
      primary: '#06b6d4',
      secondary: '#22d3ee',
      accent: '#38bdf8',
      success: '#34d399',
      danger: '#f87171',
      border: 'rgba(103, 232, 249, 0.18)',
      'shadow-soft': 'rgba(3, 16, 18, 0.45)',
      'surface-strong': '#123a41',
      'bg-overlay': 'rgba(8, 32, 36, 0.74)',
      'text-inverse': '#ffffff',
      'focus-ring': 'rgba(34, 211, 238, 0.45)'
    },
    light: {
      'bg-page': '#f0fdff',
      'bg-panel': '#ffffff',
      'bg-surface': '#cffafe',
      'text-main': '#0f172a',
      'text-muted': '#475569',
      primary: '#0891b2',
      secondary: '#22d3ee',
      accent: '#0ea5e9',
      success: '#10b981',
      danger: '#ef4444',
      border: 'rgba(14, 165, 233, 0.12)',
      'shadow-soft': 'rgba(2, 6, 23, 0.07)',
      'surface-strong': '#d9f7ff',
      'bg-overlay': 'rgba(8, 145, 178, 0.08)',
      'text-inverse': '#ffffff',
      'focus-ring': 'rgba(8, 145, 178, 0.25)'
    }
  },
  emerald: {
    dark: {
      'bg-page': '#071910',
      'bg-panel': '#10271e',
      'bg-surface': '#123327',
      'text-main': '#ecfdf5',
      'text-muted': '#bbf7d0',
      primary: '#10b981',
      secondary: '#34d399',
      accent: '#fbbf24',
      success: '#22c55e',
      danger: '#f87171',
      border: 'rgba(16, 185, 129, 0.2)',
      'shadow-soft': 'rgba(5, 16, 12, 0.45)',
      'surface-strong': '#1a3b2f',
      'bg-overlay': 'rgba(12, 27, 21, 0.72)',
      'text-inverse': '#ffffff',
      'focus-ring': 'rgba(52, 211, 153, 0.42)'
    },
    light: {
      'bg-page': '#f1fff7',
      'bg-panel': '#ffffff',
      'bg-surface': '#dcfce7',
      'text-main': '#111827',
      'text-muted': '#475569',
      primary: '#059669',
      secondary: '#10b981',
      accent: '#f59e0b',
      success: '#22c55e',
      danger: '#ef4444',
      border: 'rgba(16, 185, 129, 0.15)',
      'shadow-soft': 'rgba(2, 6, 23, 0.06)',
      'surface-strong': '#d1fae5',
      'bg-overlay': 'rgba(5, 150, 105, 0.07)',
      'text-inverse': '#ffffff',
      'focus-ring': 'rgba(5, 150, 105, 0.22)'
    }
  },
  'neon-orchid': {
    dark: {
      'bg-page': '#120c1d',
      'bg-panel': '#1a1230',
      'bg-surface': '#24173f',
      'text-main': '#fdf2ff',
      'text-muted': '#e9d5ff',
      primary: '#a855f7',
      secondary: '#c084fc',
      accent: '#f472b6',
      success: '#34d399',
      danger: '#f87171',
      border: 'rgba(192, 132, 252, 0.2)',
      'shadow-soft': 'rgba(20, 9, 29, 0.5)',
      'surface-strong': '#2f1c46',
      'bg-overlay': 'rgba(27, 18, 42, 0.72)',
      'text-inverse': '#ffffff',
      'focus-ring': 'rgba(168, 85, 247, 0.45)'
    },
    light: {
      'bg-page': '#faf5ff',
      'bg-panel': '#ffffff',
      'bg-surface': '#f3e8ff',
      'text-main': '#1f2937',
      'text-muted': '#52525b',
      primary: '#9333ea',
      secondary: '#a855f7',
      accent: '#ec4899',
      success: '#10b981',
      danger: '#ef4444',
      border: 'rgba(168, 85, 247, 0.14)',
      'shadow-soft': 'rgba(15, 23, 42, 0.05)',
      'surface-strong': '#f5d0fe',
      'bg-overlay': 'rgba(147, 51, 234, 0.06)',
      'text-inverse': '#ffffff',
      'focus-ring': 'rgba(147, 51, 234, 0.22)'
    }
  },
  'golden-crown': {
    dark: {
      'bg-page': '#17120a',
      'bg-panel': '#2d1f10',
      'bg-surface': '#3b2a13',
      'text-main': '#fff7d6',
      'text-muted': '#fcd34d',
      primary: '#fbbf24',
      secondary: '#f59e0b',
      accent: '#f97316',
      success: '#34d399',
      danger: '#f87171',
      border: 'rgba(251, 191, 36, 0.2)',
      'shadow-soft': 'rgba(27, 18, 7, 0.52)',
      'surface-strong': '#4a3316',
      'bg-overlay': 'rgba(36, 28, 14, 0.72)',
      'text-inverse': '#ffffff',
      'focus-ring': 'rgba(251, 191, 36, 0.45)'
    },
    light: {
      'bg-page': '#fffaf0',
      'bg-panel': '#ffffff',
      'bg-surface': '#fef3c7',
      'text-main': '#1f2937',
      'text-muted': '#6b7280',
      primary: '#d97706',
      secondary: '#f59e0b',
      accent: '#f97316',
      success: '#10b981',
      danger: '#ef4444',
      border: 'rgba(245, 158, 11, 0.14)',
      'shadow-soft': 'rgba(15, 23, 42, 0.06)',
      'surface-strong': '#fef3c7',
      'bg-overlay': 'rgba(217, 119, 6, 0.08)',
      'text-inverse': '#ffffff',
      'focus-ring': 'rgba(217, 119, 6, 0.22)'
    }
  },
  'ocean-blue': {
    dark: {
      'bg-page': '#071a23',
      'bg-panel': '#0f2433',
      'bg-surface': '#12374c',
      'text-main': '#ecfeff',
      'text-muted': '#bae6fd',
      primary: '#0ea5e9',
      secondary: '#38bdf8',
      accent: '#22d3ee',
      success: '#34d399',
      danger: '#f87171',
      border: 'rgba(56, 189, 248, 0.18)',
      'shadow-soft': 'rgba(6, 20, 31, 0.45)',
      'surface-strong': '#143b52',
      'bg-overlay': 'rgba(14, 29, 38, 0.74)',
      'text-inverse': '#ffffff',
      'focus-ring': 'rgba(56, 189, 248, 0.42)'
    },
    light: {
      'bg-page': '#f0faff',
      'bg-panel': '#ffffff',
      'bg-surface': '#dbeafe',
      'text-main': '#0f172a',
      'text-muted': '#475569',
      primary: '#0284c7',
      secondary: '#0ea5e9',
      accent: '#22d3ee',
      success: '#10b981',
      danger: '#ef4444',
      border: 'rgba(14, 165, 233, 0.12)',
      'shadow-soft': 'rgba(15, 23, 42, 0.05)',
      'surface-strong': '#dbeafe',
      'bg-overlay': 'rgba(2, 132, 199, 0.08)',
      'text-inverse': '#ffffff',
      'focus-ring': 'rgba(2, 132, 199, 0.22)'
    }
  },
  'rose-quartz': {
    dark: {
      'bg-page': '#170d18',
      'bg-panel': '#241521',
      'bg-surface': '#3b1f2e',
      'text-main': '#fff1f2',
      'text-muted': '#fbcfe8',
      primary: '#f472b6',
      secondary: '#ec4899',
      accent: '#fb7185',
      success: '#34d399',
      danger: '#f87171',
      border: 'rgba(244, 114, 182, 0.2)',
      'shadow-soft': 'rgba(20, 9, 17, 0.48)',
      'surface-strong': '#462539',
      'bg-overlay': 'rgba(32, 15, 26, 0.72)',
      'text-inverse': '#ffffff',
      'focus-ring': 'rgba(244, 114, 182, 0.42)'
    },
    light: {
      'bg-page': '#fff5f7',
      'bg-panel': '#ffffff',
      'bg-surface': '#fce7f3',
      'text-main': '#1f2937',
      'text-muted': '#6b7280',
      primary: '#db2777',
      secondary: '#ec4899',
      accent: '#f43f5e',
      success: '#10b981',
      danger: '#ef4444',
      border: 'rgba(236, 72, 153, 0.15)',
      'shadow-soft': 'rgba(15, 23, 42, 0.05)',
      'surface-strong': '#fce7f3',
      'bg-overlay': 'rgba(219, 39, 119, 0.07)',
      'text-inverse': '#ffffff',
      'focus-ring': 'rgba(219, 39, 119, 0.22)'
    }
  },
  titanium: {
    dark: {
      'bg-page': '#0c1117',
      'bg-panel': '#131d29',
      'bg-surface': '#1f2c39',
      'text-main': '#f8fafc',
      'text-muted': '#cbd5e1',
      primary: '#94a3b8',
      secondary: '#cbd5e1',
      accent: '#a78bfa',
      success: '#34d399',
      danger: '#f87171',
      border: 'rgba(148, 163, 184, 0.2)',
      'shadow-soft': 'rgba(2, 6, 23, 0.42)',
      'surface-strong': '#2c4358',
      'bg-overlay': 'rgba(9, 13, 18, 0.72)',
      'text-inverse': '#ffffff',
      'focus-ring': 'rgba(148, 163, 184, 0.42)'
    },
    light: {
      'bg-page': '#f8fafc',
      'bg-panel': '#ffffff',
      'bg-surface': '#e2e8f0',
      'text-main': '#0f172a',
      'text-muted': '#475569',
      primary: '#64748b',
      secondary: '#94a3b8',
      accent: '#8b5cf6',
      success: '#10b981',
      danger: '#ef4444',
      border: 'rgba(100, 116, 139, 0.12)',
      'shadow-soft': 'rgba(15, 23, 42, 0.05)',
      'surface-strong': '#e2e8f0',
      'bg-overlay': 'rgba(100, 116, 139, 0.08)',
      'text-inverse': '#ffffff',
      'focus-ring': 'rgba(100, 116, 139, 0.2)'
    }
  },
  'toxic-lime': {
    dark: {
      'bg-page': '#0c1409',
      'bg-panel': '#14210f',
      'bg-surface': '#1a2b11',
      'text-main': '#ecfccb',
      'text-muted': '#d9f99d',
      primary: '#84cc16',
      secondary: '#a3e635',
      accent: '#facc15',
      success: '#4ade80',
      danger: '#f87171',
      border: 'rgba(132, 204, 22, 0.2)',
      'shadow-soft': 'rgba(6, 11, 7, 0.45)',
      'surface-strong': '#213716',
      'bg-overlay': 'rgba(20, 33, 15, 0.72)',
      'text-inverse': '#ffffff',
      'focus-ring': 'rgba(132, 204, 22, 0.42)'
    },
    light: {
      'bg-page': '#f8ffe8',
      'bg-panel': '#ffffff',
      'bg-surface': '#ecfccb',
      'text-main': '#111827',
      'text-muted': '#475569',
      primary: '#65a30d',
      secondary: '#84cc16',
      accent: '#facc15',
      success: '#22c55e',
      danger: '#ef4444',
      border: 'rgba(132, 204, 22, 0.12)',
      'shadow-soft': 'rgba(15, 23, 42, 0.05)',
      'surface-strong': '#ecfccb',
      'bg-overlay': 'rgba(101, 163, 13, 0.07)',
      'text-inverse': '#ffffff',
      'focus-ring': 'rgba(101, 163, 13, 0.22)'
    }
  },
  'arctic-mint': {
    dark: {
      'bg-page': '#071a17',
      'bg-panel': '#0f2421',
      'bg-surface': '#123a35',
      'text-main': '#f0fdfa',
      'text-muted': '#a7f3d0',
      primary: '#2dd4bf',
      secondary: '#5eead4',
      accent: '#2ec4b6',
      success: '#34d399',
      danger: '#f87171',
      border: 'rgba(45, 212, 191, 0.2)',
      'shadow-soft': 'rgba(5, 16, 14, 0.45)',
      'surface-strong': '#1d4d45',
      'bg-overlay': 'rgba(11, 29, 25, 0.72)',
      'text-inverse': '#ffffff',
      'focus-ring': 'rgba(45, 212, 191, 0.42)'
    },
    light: {
      'bg-page': '#f0fdfa',
      'bg-panel': '#ffffff',
      'bg-surface': '#ccfbf1',
      'text-main': '#0f172a',
      'text-muted': '#475569',
      primary: '#0f766e',
      secondary: '#2dd4bf',
      accent: '#14b8a6',
      success: '#10b981',
      danger: '#ef4444',
      border: 'rgba(45, 212, 191, 0.12)',
      'shadow-soft': 'rgba(15, 23, 42, 0.05)',
      'surface-strong': '#ccfbf1',
      'bg-overlay': 'rgba(15, 118, 110, 0.07)',
      'text-inverse': '#ffffff',
      'focus-ring': 'rgba(15, 118, 110, 0.2)'
    }
  },
  'obsidian-bronze': {
    dark: {
      'bg-page': '#0d0e0f',
      'bg-panel': '#171814',
      'bg-surface': '#27241b',
      'text-main': '#f8fafc',
      'text-muted': '#d6d3d1',
      primary: '#b45309',
      secondary: '#d97706',
      accent: '#f59e0b',
      success: '#34d399',
      danger: '#f87171',
      border: 'rgba(217, 119, 6, 0.2)',
      'shadow-soft': 'rgba(8, 8, 8, 0.45)',
      'surface-strong': '#3d3324',
      'bg-overlay': 'rgba(18, 17, 13, 0.72)',
      'text-inverse': '#ffffff',
      'focus-ring': 'rgba(217, 119, 6, 0.42)'
    },
    light: {
      'bg-page': '#f8f6f1',
      'bg-panel': '#ffffff',
      'bg-surface': '#f5e6d3',
      'text-main': '#1f2937',
      'text-muted': '#6b7280',
      primary: '#92400e',
      secondary: '#b45309',
      accent: '#f59e0b',
      success: '#10b981',
      danger: '#ef4444',
      border: 'rgba(180, 83, 9, 0.12)',
      'shadow-soft': 'rgba(15, 23, 42, 0.05)',
      'surface-strong': '#f5e6d3',
      'bg-overlay': 'rgba(146, 64, 14, 0.07)',
      'text-inverse': '#ffffff',
      'focus-ring': 'rgba(146, 64, 14, 0.2)'
    }
  },
  'dark-ash': {
    dark: {
      'bg-page': '#090b0d',
      'bg-panel': '#12161c',
      'bg-surface': '#1d2430',
      'text-main': '#f8fafc',
      'text-muted': '#cbd5e1',
      primary: '#64748b',
      secondary: '#94a3b8',
      accent: '#a78bfa',
      success: '#34d399',
      danger: '#f87171',
      border: 'rgba(148, 163, 184, 0.2)',
      'shadow-soft': 'rgba(8, 11, 14, 0.45)',
      'surface-strong': '#2b3745',
      'bg-overlay': 'rgba(18, 22, 28, 0.72)',
      'text-inverse': '#ffffff',
      'focus-ring': 'rgba(148, 163, 184, 0.42)'
    },
    light: {
      'bg-page': '#f8fafc',
      'bg-panel': '#ffffff',
      'bg-surface': '#e2e8f0',
      'text-main': '#111827',
      'text-muted': '#475569',
      primary: '#475569',
      secondary: '#64748b',
      accent: '#8b5cf6',
      success: '#10b981',
      danger: '#ef4444',
      border: 'rgba(71, 85, 105, 0.12)',
      'shadow-soft': 'rgba(15, 23, 42, 0.06)',
      'surface-strong': '#e2e8f0',
      'bg-overlay': 'rgba(71, 85, 105, 0.08)',
      'text-inverse': '#ffffff',
      'focus-ring': 'rgba(71, 85, 105, 0.22)'
    }
  },
  'dark-brown': {
    dark: {
      'bg-page': '#120d0a',
      'bg-panel': '#1d1713',
      'bg-surface': '#2b221d',
      'text-main': '#fef3c7',
      'text-muted': '#e7d8b6',
      primary: '#a16207',
      secondary: '#d97706',
      accent: '#f59e0b',
      success: '#34d399',
      danger: '#f87171',
      border: 'rgba(217, 119, 6, 0.2)',
      'shadow-soft': 'rgba(18, 13, 10, 0.48)',
      'surface-strong': '#4b382d',
      'bg-overlay': 'rgba(27, 20, 16, 0.72)',
      'text-inverse': '#ffffff',
      'focus-ring': 'rgba(217, 119, 6, 0.42)'
    },
    light: {
      'bg-page': '#fffaf6',
      'bg-panel': '#ffffff',
      'bg-surface': '#f5ebe2',
      'text-main': '#1f2937',
      'text-muted': '#6b7280',
      primary: '#92400e',
      secondary: '#b45309',
      accent: '#f59e0b',
      success: '#10b981',
      danger: '#ef4444',
      border: 'rgba(146, 64, 14, 0.12)',
      'shadow-soft': 'rgba(15, 23, 42, 0.06)',
      'surface-strong': '#f5ebe2',
      'bg-overlay': 'rgba(146, 64, 14, 0.06)',
      'text-inverse': '#ffffff',
      'focus-ring': 'rgba(146, 64, 14, 0.2)'
    }
  }
};

const defaultTheme = { theme: 'royal-purple', appearance: 'dark' };

function cssVarName(key) {
  return `--${key.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`).replace(/_/g, '-')}`;
}

export class ThemeManager {
  constructor(storageKey = 'favoje-theme') {
    this.storageKey = storageKey;
  }

  getStoredSelection() {
    try {
      const raw = localStorage.getItem(this.storageKey);
      if (!raw) return defaultTheme;
      const parsed = JSON.parse(raw);
      if (!parsed.theme || !themes[parsed.theme]) return defaultTheme;
      return {
        theme: parsed.theme,
        appearance: parsed.appearance === 'light' ? 'light' : 'dark'
      };
    } catch (error) {
      return defaultTheme;
    }
  }

  applyTheme(themeName, appearance = 'dark') {
    const selectedTheme = themes[themeName] || themes[defaultTheme.theme];
    const palette = selectedTheme[appearance] || selectedTheme.dark;

    Object.entries(palette).forEach(([key, value]) => {
      document.documentElement.style.setProperty(cssVarName(key), value);
    });

    document.body.dataset.theme = themeName;
    document.body.dataset.appearance = appearance;

    try {
      localStorage.setItem(this.storageKey, JSON.stringify({ theme: themeName, appearance }));
    } catch (error) {
      // Ignore localStorage failures in restricted browsers.
    }

    document.querySelectorAll('.theme-swatch').forEach((button) => {
      const isActive = button.dataset.theme === themeName && button.dataset.appearance === appearance;
      button.classList.toggle('active', isActive);
    });
  }

  initialize() {
    const { theme, appearance } = this.getStoredSelection();
    this.applyTheme(theme, appearance);

    document.querySelectorAll('.theme-swatch').forEach((button) => {
      button.addEventListener('click', () => {
        const nextTheme = button.dataset.theme || defaultTheme.theme;
        const nextAppearance = button.dataset.appearance || 'dark';
        this.applyTheme(nextTheme, nextAppearance);
      });
    });
  }
}

export default ThemeManager;

if (typeof document !== 'undefined') {
  const themeManager = new ThemeManager();
  themeManager.initialize();
}
