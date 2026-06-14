import React from "react";

export function BrandMark({ size = 62 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <path
        d="M11 27.5L32 8l21 19.5"
        stroke="#12C15B"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 25.5V49h30V25.5"
        stroke="#12C15B"
        strokeWidth="4.5"
        strokeLinejoin="round"
      />
      <path
        d="M10 49h44"
        stroke="#12C15B"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      <path
        d="M27 49V34h10v15"
        stroke="#12C15B"
        strokeWidth="4.5"
        strokeLinejoin="round"
      />
      <path
        d="M29.5 20h5v8h-5z"
        fill="#12C15B"
      />
    </svg>
  );
}

export function BrandBlock() {
  return (
    <>
      <BrandMark />
      <div>
        <div style={{ color: "#F7F8FA", fontSize: "26px", fontWeight: 700, lineHeight: 1.1 }}>
          Budget
        </div>
        <div style={{ color: "#12C15B", fontSize: "26px", fontWeight: 700, lineHeight: 1.1 }}>
          RealEstate
        </div>
        <div style={{ color: "rgba(255,255,255,0.84)", fontSize: "17px", marginTop: "8px" }}>
          Admin Panel
        </div>
      </div>
    </>
  );
}

export function ShieldUserIcon({ size = 82, circle = "#E5F5EA", stroke = "#168246" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 82 82" fill="none" aria-hidden="true">
      <circle cx="41" cy="41" r="41" fill={circle} />
      <path
        d="M41 18c4.8 4 11.87 5.52 16.5 6.06v12.89c0 13.06-10.08 21.1-16.5 24.05-6.42-2.95-16.5-10.99-16.5-24.05V24.06C29.13 23.52 36.2 22 41 18Z"
        stroke={stroke}
        strokeWidth="2.8"
        strokeLinejoin="round"
      />
      <circle cx="41" cy="35" r="5.3" stroke={stroke} strokeWidth="2.8" />
      <path
        d="M32.5 50.25c2.12-5.2 7.05-7.75 8.5-7.75s6.38 2.55 8.5 7.75"
        stroke={stroke}
        strokeWidth="2.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function AvatarIllustration({ size = 48 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="1" y="1" width="46" height="46" rx="23" fill="#fff" stroke="#E1E6EE" />
      <circle cx="24" cy="16" r="8" fill="#D89B72" />
      <path d="M12 40c1.92-7.38 7.3-11 12-11s10.08 3.62 12 11" fill="#0D2345" />
      <path d="M17.75 40 24 29l6.25 11" fill="#F7F9FC" />
      <path d="M17 12.2c1.4-5.2 6.7-8.2 11.85-6.74A9.65 9.65 0 0 1 35 16.2V18h-3.25v-4.15l-2.3 2.65c-3.52 4.07-8.88 6.1-14.2 5.35l-1.35-.19.28-1.34A15.79 15.79 0 0 1 17 12.2Z" fill="#101A2F" />
    </svg>
  );
}

export function GoogleIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M21.8 12.23c0-.74-.07-1.45-.19-2.13H12v4.03h5.49a4.7 4.7 0 0 1-2.04 3.08v2.56h3.3c1.93-1.78 3.05-4.4 3.05-7.54Z"
        fill="#4285F4"
      />
      <path
        d="M12 22c2.76 0 5.08-.91 6.77-2.46l-3.3-2.56c-.91.61-2.08.97-3.47.97-2.66 0-4.92-1.8-5.72-4.22H2.88v2.64A10.23 10.23 0 0 0 12 22Z"
        fill="#34A853"
      />
      <path
        d="M6.28 13.73A6.15 6.15 0 0 1 5.96 12c0-.6.11-1.18.32-1.73V7.63H2.88A10.23 10.23 0 0 0 1.8 12c0 1.64.39 3.18 1.08 4.37l3.4-2.64Z"
        fill="#FBBC05"
      />
      <path
        d="M12 6.05c1.5 0 2.84.52 3.89 1.53l2.92-2.92C17.07 3.04 14.75 2 12 2A10.23 10.23 0 0 0 2.88 7.63l3.4 2.64c.8-2.42 3.06-4.22 5.72-4.22Z"
        fill="#EA4335"
      />
    </svg>
  );
}
