function SidebarIcon({ name, color = "currentColor" }) {
  const common = {
    stroke: color,
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  const map = {
    dashboard: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M4 10.5 12 4l8 6.5" {...common} />
        <path d="M6.5 9.5V19h11V9.5" {...common} />
        <path d="M10 19v-5h4v5" {...common} />
      </svg>
    ),
    building: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <rect x="5" y="3.5" width="10" height="17" rx="1.8" {...common} />
        <path d="M15 8h4v12.5h-4" {...common} />
        <path d="M8 7.5h1M11 7.5h1M8 11.5h1M11 11.5h1M8 15.5h1M11 15.5h1" {...common} />
      </svg>
    ),
    home: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M4 10.5 12 4l8 6.5" {...common} />
        <path d="M6.5 9.5V19h11V9.5" {...common} />
        <path d="M10 19v-5h4v5" {...common} />
      </svg>
    ),
    auction: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="m11.2 4 8.2 8.2-1.85 1.85L9.35 5.85 11.2 4Z" {...common} />
        <path d="m7.75 8.75 7.5 7.5" {...common} />
        <path d="m4.5 14.4 5.1 5.1" {...common} />
        <path d="m3.7 18.4 4.1-4.1" {...common} />
      </svg>
    ),
    plus: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="8" {...common} />
        <path d="M12 8v8M8 12h8" {...common} />
      </svg>
    ),
    mail: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="4.5" width="16" height="15" rx="2.2" {...common} />
        <path d="m6.8 8 5.2 4.3L17.2 8" {...common} />
        <path d="m7 15 3-2.4M17 15l-3-2.4" {...common} />
      </svg>
    ),
    doc: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M7 3.8h7l4 4V20H7V3.8Z" {...common} />
        <path d="M14 3.8v4h4M10 11h5M10 14.5h5M10 18h3" {...common} />
      </svg>
    ),
    chat: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M7 17.5H5a2 2 0 0 1-2-2V7.8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v7.7a2 2 0 0 1-2 2H9l-4 3v-3Z" {...common} />
        <path d="M11 9.5h8a2 2 0 0 1 2 2v6.7a2 2 0 0 1-2 2h-2v2.2l-3.3-2.2H11" {...common} />
      </svg>
    ),
    user: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8.5" r="3.5" {...common} />
        <path d="M5 19c1.3-3.4 4.3-5 7-5s5.7 1.6 7 5" {...common} />
      </svg>
    ),
    users: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <circle cx="9" cy="8.5" r="3.2" {...common} />
        <circle cx="17.2" cy="7.8" r="2.4" {...common} />
        <path d="M3.8 18.8c1.1-3 3.8-4.5 5.2-4.5S13.1 15.8 14.2 18.8M14.8 18c.7-1.8 2-2.8 2.85-2.8.83 0 2.15 1 2.85 2.8" {...common} />
      </svg>
    ),
    chart: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M5 19V12M12 19V7M19 19v-4" {...common} />
        <rect x="3.5" y="10.5" width="3" height="8.5" rx="1.1" {...common} />
        <rect x="10.5" y="5.5" width="3" height="13.5" rx="1.1" {...common} />
        <rect x="17.5" y="13.5" width="3" height="5.5" rx="1.1" {...common} />
      </svg>
    ),
    money: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="8.2" {...common} />
        <path d="M12 7v10M15 8.7c-.63-.9-1.6-1.45-3-1.45-1.62 0-2.8.78-2.8 2.2 0 1.27.96 1.86 2.82 2.24 1.8.37 2.98.98 2.98 2.43 0 1.52-1.31 2.38-3.1 2.38-1.72 0-2.84-.54-3.53-1.55" {...common} />
      </svg>
    ),
    pie: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M12 4v8h8" {...common} />
        <path d="M20 13.5A8 8 0 1 1 10.5 4.14" {...common} />
      </svg>
    ),
    settings: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="m12 3 1.4 2.4 2.76.62-.38 2.76 1.9 1.99-1.9 1.99.38 2.76-2.76.62L12 21l-1.4-2.4-2.76-.62.38-2.76-1.9-1.99 1.9-1.99-.38-2.76 2.76-.62L12 3Z" {...common} />
        <circle cx="12" cy="12" r="2.6" {...common} />
      </svg>
    ),
    bell: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M6.5 16.5h11l-1.6-2.1V10a3.9 3.9 0 1 0-7.8 0v4.4L6.5 16.5ZM10 18a2 2 0 0 0 4 0" {...common} />
      </svg>
    ),
    shield: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M12 3c2.2 1.94 5.38 2.77 7 3.05v4.84c0 4.6-3.39 7.48-7 8.74-3.61-1.26-7-4.14-7-8.74V6.05C6.62 5.77 9.8 4.94 12 3Z" {...common} />
        <path d="m9.2 11.7 1.9 1.9 3.7-4" {...common} />
      </svg>
    ),
    logout: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M10 6H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4" {...common} />
        <path d="M14 8.5 18.5 13 14 17.5M8.5 13h10" {...common} />
      </svg>
    ),
  };

  return map[name] || null;
}

export default SidebarIcon;
