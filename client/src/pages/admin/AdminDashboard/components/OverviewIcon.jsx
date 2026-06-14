function OverviewIcon({ type }) {
  const icons = {
    buy: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 10.5 12 4l8 6.5" stroke="#5AA949" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.5 9.5V19h11V9.5" stroke="#5AA949" strokeWidth="2" strokeLinejoin="round" />
        <path d="M10 19v-5h4v5" stroke="#5AA949" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
    rent: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 10.5 12 4l8 6.5" stroke="#1F75FE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.5 9.5V19h11V9.5" stroke="#1F75FE" strokeWidth="2" strokeLinejoin="round" />
        <path d="M10 19v-5h4v5" stroke="#1F75FE" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
    auction: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="m11.5 4 8.5 8.5-2 2L9.5 6l2-2Z" stroke="#159447" strokeWidth="2" strokeLinejoin="round" />
        <path d="m8 9.5 6.5 6.5" stroke="#159447" strokeWidth="2" strokeLinecap="round" />
        <path d="m5 15 4 4" stroke="#159447" strokeWidth="2" strokeLinecap="round" />
        <path d="M3.5 19.5 8 15" stroke="#159447" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    views: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M2.8 12s3.4-5.8 9.2-5.8 9.2 5.8 9.2 5.8-3.4 5.8-9.2 5.8S2.8 12 2.8 12Z" stroke="#1F75FE" strokeWidth="1.9" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="2.8" stroke="#1F75FE" strokeWidth="1.9" />
      </svg>
    ),
    interest: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 20c4.26-3.5 7-6.05 7-9.4 0-2.34-1.83-4.1-4.16-4.1-1.56 0-2.83.75-3.84 2.16C10 7.25 8.72 6.5 7.16 6.5 4.84 6.5 3 8.26 3 10.6 3 13.95 5.74 16.5 10 20" stroke="#FF7B17" strokeWidth="1.9" strokeLinejoin="round" />
      </svg>
    ),
    revenue: (
      <span style={{ color: "#7A4EE2", fontSize: "34px", fontWeight: 700, lineHeight: 1 }}>
        &#8377;
      </span>
    ),
  };

  return icons[type] || null;
}

export default OverviewIcon;
