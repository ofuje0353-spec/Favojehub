:root {
  --bg-page: #080b14;
  --bg-panel: #111827;
  --bg-surface: #1b2333;
  --text-main: #f8fafc;
  --text-muted: #cbd5e1;
  --primary: #6366f1;
  --secondary: #4f46e5;
  --accent: #f97316;
  --success: #10b981;
  --danger: #ef4444;
  --border: rgba(148, 163, 184, 0.22);
  --shadow-soft: rgba(6, 10, 24, 0.5);
  --surface-strong: #1f2937;
  --bg-overlay: rgba(15, 23, 42, 0.74);
  --text-inverse: #ffffff;
  --focus-ring: rgba(99, 102, 241, 0.55);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: Inter, "Segoe UI", sans-serif;
  background: radial-gradient(circle at top, rgba(99, 102, 241, 0.18), transparent 30%), var(--bg-page);
  color: var(--text-main);
  line-height: 1.6;
}

body[data-appearance="light"] {
  color-scheme: light;
}

body[data-appearance="dark"] {
  color-scheme: dark;
}

button,
input,
select {
  font: inherit;
}

button {
  cursor: pointer;
}

img {
  max-width: 100%;
  display: block;
}

.app-shell {
  max-width: 1440px;
  margin: 0 auto;
  padding: 16px 20px 40px;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  min-height: 72px;
  padding: 18px 20px;
  margin-bottom: 24px;
  background: rgba(17, 24, 39, 0.68);
  border: 1px solid var(--border);
  border-radius: 22px;
  backdrop-filter: blur(14px);
  box-shadow: 0 18px 38px var(--shadow-soft);
}

.brand-group {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-mark {
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border-radius: 14px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: var(--text-inverse);
  font-weight: 800;
  letter-spacing: 0.08em;
}

.eyebrow {
  display: inline-block;
  margin-bottom: 6px;
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-muted);
}

h1,
h2,
h3,
h4,
p {
  margin: 0;
}

.topnav {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
}

.nav-link {
  padding: 8px 12px;
  border-radius: 10px;
  color: var(--text-muted);
  transition: 200ms ease;
}

.nav-link:hover,
.nav-link.active {
  background: rgba(99, 102, 241, 0.12);
  color: var(--text-main);
}

.top-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.primary-button,
.secondary-button,
.ghost-button,
.icon-button,
.text-link,
.theme-swatch,
.answer-choice,
.pill,
.status-dot {
  transition: all 180ms ease;
}

.primary-button,
.secondary-button,
.ghost-button,
.icon-button {
  border-radius: 12px;
  border: 1px solid transparent;
  padding: 12px 18px;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.primary-button {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: var(--text-inverse);
  box-shadow: 0 10px 30px rgba(99, 102, 241, 0.35);
}

.secondary-button {
  background: rgba(255, 255, 255, 0.02);
  color: var(--text-main);
  border-color: var(--border);
}

.ghost-button {
  background: transparent;
  color: var(--text-main);
  border-color: var(--border);
}

.primary-button:hover,
.secondary-button:hover,
.ghost-button:hover,
.icon-button:hover,
.answer-choice:hover,
.theme-swatch:hover {
  transform: translateY(-1px);
}

.app-shell,
.page-shell,
.narrow-shell,
.hero-panel,
.mode-grid,
.content-row,
.stats-grid,
.tournament-grid,
.auth-layout,
.battle-shell,
.rush-layout {
  width: 100%;
}

.page-shell {
  display: flex;
  flex-direction: column;
  gap: 28px;
  min-height: calc(100vh - 120px);
}

.narrow-shell {
  max-width: 1120px;
  margin: 0 auto;
}

.hero-panel {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 22px;
  padding: 28px;
  border-radius: 30px;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.07), rgba(17, 24, 39, 0.9));
  border: 1px solid var(--border);
}

.hero-copy h2 {
  font-size: clamp(2.4rem, 5vw, 4rem);
  line-height: 1.04;
  margin-bottom: 14px;
  max-width: 620px;
}

.hero-copy p {
  font-size: 1.06rem;
  color: var(--text-muted);
  max-width: 640px;
}

.hero-actions,
.form-row,
.combat-actions,
.auth-actions,
.footer-links {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.hero-actions {
  margin-top: 24px;
  margin-bottom: 26px;
}

.large {
  padding: 16px 20px;
  font-size: 1.05rem;
}

.hero-meta {
  display: grid;
  grid-template-columns: repeat(3, minmax(120px, 1fr));
  gap: 12px;
  max-width: 500px;
}

.hero-meta > div {
  background: rgba(15, 23, 42, 0.38);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 14px 16px;
}

.hero-meta strong {
  display: block;
  font-size: 1.4rem;
  margin-bottom: 6px;
}

.hero-meta span,
small,
.setting-item span,
.notification-item p,
.history-item span,
.status-card small {
  color: var(--text-muted);
}

.mode-grid {
  display: grid;
  gap: 22px;
}

.three-up {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.four-up {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.mode-card,
.panel,
.stat-card,
.tournament-card,
.leaderboard-item,
.announcement-item,
.history-item,
.activity-item,
.notification-item,
.setting-item,
.room-card,
.score-card,
.panel-sm,
.auth-panel,
.glass-panel {
  background: rgba(17, 24, 39, 0.8);
  border: 1px solid var(--border);
  border-radius: 22px;
  box-shadow: 0 14px 38px rgba(15, 23, 42, 0.16);
}

.mode-card,
.panel,
.stat-card,
.leaderboard-item,
.announcement-item,
.history-item,
.activity-item,
.notification-item,
.setting-item,
.room-card,
.score-card,
.auth-panel {
  padding: 22px;
}

.content-row,
.stats-grid,
.tournament-grid {
  display: grid;
  gap: 20px;
}

.content-row {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.stats-grid {
  grid-template-columns: repeat(5, minmax(140px, 1fr));
}

.stat-card strong {
  display: block;
  margin: 8px 0 6px;
  font-size: clamp(1.5rem, 2vw, 2rem);
}

.status-card {
  margin-top: 18px;
  padding: 18px;
  border-radius: 16px;
  background: rgba(99, 102, 241, 0.08);
  border: 1px solid var(--border);
}

.status-card strong {
  display: block;
  font-size: 1.2rem;
  margin-top: 8px;
}

.section-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  margin-bottom: 18px;
}

.notification-list,
.history-list,
.activity-list,
.settings-list,
.player-list {
  display: grid;
  gap: 12px;
}

.notification-item,
.history-item,
.setting-item,
.activity-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  padding: 14px 16px;
  background: rgba(15, 23, 42, 0.36);
  border: 1px solid var(--border);
  border-radius: 16px;
}

.dashboard-layout {
  display: grid;
  grid-template-columns: 280px minmax(0, 1fr);
  gap: 22px;
}

.sidebar-panel {
  padding: 22px;
}

.menu-list {
  list-style: none;
  padding: 0;
  margin: 18px 0 0;
  display: grid;
  gap: 10px;
}

.menu-list a {
  display: block;
  padding: 10px 12px;
  border-radius: 12px;
  color: var(--text-muted);
}

.menu-list a:hover {
  background: rgba(99, 102, 241, 0.08);
  color: var(--text-main);
}

.main-column {
  display: grid;
  gap: 24px;
}

.auth-layout {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 28px 16px;
}

.auth-panel {
  width: min(100%, 760px);
  padding: 26px 24px;
  background: rgba(17, 24, 39, 0.85);
}

.wide-panel {
  width: min(100%, 900px);
}

.auth-form {
  display: grid;
  gap: 16px;
}

.auth-form.two-column {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

label {
  display: grid;
  gap: 8px;
  color: var(--text-main);
}

input,
select {
  width: 100%;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: rgba(15, 23, 42, 0.46);
  color: var(--text-main);
  padding: 12px 14px;
}

input::placeholder {
  color: rgba(203, 213, 225, 0.75);
}

input:focus,
select:focus,
button:focus-visible,
a:focus-visible {
  outline: 3px solid var(--focus-ring);
  outline-offset: 2px;
}

.password-wrap {
  position: relative;
}

.password-wrap .icon-button {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  padding: 8px 10px;
  background: rgba(99, 102, 241, 0.08);
  border-color: var(--border);
  color: var(--text-main);
}

.checkbox-inline {
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.checkbox-inline input {
  width: auto;
}

.legal-box {
  padding: 12px 14px;
  border-radius: 12px;
  background: rgba(99, 102, 241, 0.08);
  border: 1px solid var(--border);
}

.full-span {
  grid-column: 1 / -1;
}

.auth-divider {
  position: relative;
  text-align: center;
  margin: 18px 0;
  color: var(--text-muted);
}

.auth-divider::before {
  content: "";
  position: absolute;
  inset: 50% 0 auto 0;
  height: 1px;
  background: var(--border);
}

.auth-divider span {
  position: relative;
  background: rgba(17, 24, 39, 0.8);
  padding: 0 12px;
}

.theme-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  gap: 12px;
}

.theme-swatch {
  text-align: left;
  padding: 12px 14px;
  border-radius: 12px;
  background: rgba(15, 23, 42, 0.48);
  border: 1px solid var(--border);
  color: var(--text-main);
}

.theme-swatch.active {
  border-color: rgba(99, 102, 241, 0.7);
  box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.18);
}

.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 22px 12px 0;
  color: var(--text-muted);
}

.footer-links {
  justify-content: flex-end;
}

@media (max-width: 980px) {
  .three-up,
  .content-row,
  .dashboard-layout,
  .hero-panel,
  .four-up {
    grid-template-columns: 1fr;
  }

  .stats-grid {
    grid-template-columns: repeat(2, minmax(150px, 1fr));
  }

  .topbar,
  .footer {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 640px) {
  .app-shell {
    padding: 12px 12px 28px;
  }

  .topbar {
    padding: 14px 16px;
  }

  .topnav,
  .top-actions,
  .hero-actions,
  .combat-actions,
  .footer-links {
    width: 100%;
  }

  .hero-copy h2 {
    font-size: 2.3rem;
  }

  .stats-grid,
  .answer-grid,
  .auth-form.two-column {
    grid-template-columns: 1fr;
  }

  .hero-meta {
    grid-template-columns: 1fr;
  }
}

@media (prefers-reduced-motion: reduce) {
  * {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
