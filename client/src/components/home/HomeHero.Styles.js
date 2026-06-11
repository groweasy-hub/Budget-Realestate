import { Link } from "react-router-dom";
import styled from "styled-components";

const heroImage = `${process.env.PUBLIC_URL}/Images/home-hero-bg.jpg`;

/* ─────────────────────────────────────────────
   DESKTOP STYLES (unchanged)
───────────────────────────────────────────── */

export const HeroShell = styled.section`
  position: relative;
  min-height: 100vh;
  padding: 112px 82px 58px;
  background: #eff5ef;
  display: flex;
  align-items: stretch;

  @media (max-width: 1280px) {
    padding: 104px 42px 46px;
  }

  /* ── MOBILE ── */
  @media (max-width: 900px) {
    height: auto;
    min-height: 100svh;
    padding: 0;
    display: flex;
    flex-direction: column;
    background: #f4f6f3;
  }
`;

export const HeroBackground = styled.div`
  position: absolute;
  inset: 0;
  background: url(${heroImage}) center center / cover no-repeat;

  @media (max-width: 900px) {
    position: relative;
    inset: auto;
    flex: 0 0 auto;
    width: 100%;
    height: 44vh;
    min-height: 300px;
    max-height: 400px;
    background: url(${heroImage}) center top / cover no-repeat;

    &::after {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0.92) 0%,
        rgba(255, 255, 255, 0.74) 32%,
        rgba(255, 255, 255, 0.38) 56%,
        rgba(255, 255, 255, 0.12) 76%,
        rgba(255, 255, 255, 0) 94%
      );
      pointer-events: none;
    }
  }
`;

export const HeroAtmosphere = styled.div`
  position: absolute;
  inset: 0;
  background:
    radial-gradient(
      circle at 16% 28%,
      rgba(255, 240, 208, 0.8) 0%,
      rgba(255, 240, 208, 0.18) 26%,
      rgba(255, 240, 208, 0) 48%
    ),
    linear-gradient(
      90deg,
      rgba(255, 249, 239, 0.7) 0%,
      rgba(255, 249, 239, 0.34) 30%,
      rgba(255, 249, 239, 0) 56%
    );

  @media (max-width: 900px) {
    display: none;
  }
`;

export const BottomHills = styled.div`
  position: absolute;
  left: -4%;
  right: -4%;
  bottom: -72px;
  height: 168px;
  border-radius: 55% 55% 0 0 / 100% 100% 0 0;
  background: linear-gradient(
    180deg,
    rgba(34, 107, 57, 0.94) 0%,
    rgba(12, 72, 42, 1) 100%
  );
  box-shadow: 0 -10px 32px rgba(13, 75, 44, 0.08);

  &::before {
    content: "";
    position: absolute;
    inset: 16px -1.5% auto;
    height: 92px;
    border-radius: 52% 48% 0 0 / 100% 100% 0 0;
    background: linear-gradient(
      180deg,
      rgba(70, 154, 72, 0.92) 0%,
      rgba(46, 113, 56, 0.95) 100%
    );
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 980px) 316px;
  justify-content: center;
  gap: 42px;
  align-items: center;

  @media (max-width: 1200px) {
    grid-template-columns: minmax(0, 1fr) 300px;
    gap: 24px;
  }

  /* ── MOBILE ── */
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    max-width: none;
    margin: 0;
    gap: 0;
    flex: 1 1 auto;
  }
`;

export const HeroCopy = styled.div`
  align-items: center;
  position: relative;
  max-width: 980px;
  padding-top: 52px;

  @media (max-width: 1200px) {
    padding-top: 42px;
  }

  /* ── MOBILE ── */
  @media (max-width: 900px) {
    max-width: none;
    padding: 0 16px 20px;
    margin-top: -220px;
    position: relative;
    z-index: 2;
  }
`;

export const HeroMark = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  width: 148px;
  padding: 0px 300px 0 0;
  box-sizing: content-box;
  color: #2d7a45;
  pointer-events: none;

  svg {
    display: block;
    width: 100%;
    height: auto;
  }

  @media (max-width: 1200px) {
    width: 128px;
    padding: 2px 22px 0 0;
  }

  /* ── MOBILE ── */
  @media (max-width: 900px) {
    position: relative;
    top: auto;
    right: auto;
    width: 80px;
    padding: 0;
    box-sizing: border-box;
    margin-bottom: 10px;
  }

  @media (max-width: 400px) {
    width: 70px;
  }
`;

export const HeroTitle = styled.h1`
  margin: 0;
  padding-right: 210px;
  font-family: "Poppins", sans-serif;
  font-size: clamp(2.35rem, 4.8vw, 3.4rem);
  line-height: 0.98;
  font-weight: 600;
  letter-spacing: -0.048em;
  color: #0f1f24;

  @media (max-width: 1200px) {
    padding-right: 170px;
  }

  /* ── MOBILE ── */
  @media (max-width: 900px) {
    font-size: 1.65rem;
    padding-right: 0;
    line-height: 1.08;
    letter-spacing: -0.03em;
    font-weight: 700;
  }

  @media (max-width: 400px) {
    font-size: 1.5rem;
    padding-right: 0;
  }
`;

export const TitleLine = styled.span`
  display: block;
  color: ${(props) => (props.$accent ? "#2d7a45" : "#0f1f24")};

  & + & {
    margin-top: 6px;
  }
`;

export const HeroSubtitle = styled.div`
  margin-top: 26px;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  line-height: 1.52;
  color: #3c4d54;

  /* ── MOBILE ── */
  @media (max-width: 900px) {
    width: 100%;
    margin-top: 12px;
    font-size: 12.5px;
    color: #3c4d54;
  }
`;

export const SubtitleLine = styled.span`
  display: block;
`;

export const AccentWord = styled.span`
  color: #2d7a45;
`;

/* ─────────────────────────────────────────────
   TABS
───────────────────────────────────────────── */

export const HeroTabs = styled.div`
  width: min(700px, 100%);
  margin-top: 34px;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px;

  /* ── MOBILE ── */
  @media (max-width: 900px) {
    width: 100%;
    margin-top: 10px;
    gap: 8px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

export const HeroTabButton = styled.button`
  position: relative;
  min-height: 48px;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 14px;
  border: 1.6px solid
    ${(props) => (props.$active ? "#2d7a45" : "rgba(28, 60, 50, 0.08)")};
  cursor: pointer;
  color: #15252a;
  background: rgba(255, 255, 255, 0.96);
  box-shadow: 0 4px 12px rgba(72, 91, 72, 0.08);

  /* ── MOBILE ── */
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 14px 6px 12px;
    min-height: 66px;
    border-radius: 16px;
    border: 1.8px solid
      ${(props) => (props.$active ? "#2d7a45" : "rgba(28, 60, 50, 0.09)")};
    background: #ffffff;
    box-shadow: 0 2px 8px rgba(72, 91, 72, 0.06);
  }
`;

export const HeroTabIconWrap = styled.span`
  width: 20px;
  height: 20px;
  flex: 0 0 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #2d7a45;
  svg {
    display: block;
    width: 20px;
    height: 20px;
  }

  /* ── MOBILE ── */
  @media (max-width: 900px) {
    width: 24px;
    height: 24px;
    flex: 0 0 24px;

    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

export const HeroTabLabel = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.02em;

  /* ── MOBILE ── */
  @media (max-width: 900px) {
    font-size: 12.5px;
    font-weight: 600;
    letter-spacing: -0.01em;
    color: #15252a;
  }
`;

export const HeroTabMarker = styled.span`
  position: absolute;
  left: 14px;
  right: 14px;
  bottom: -5px;
  height: 5px;
  border-radius: 999px;
  background: #63b04c;

  /* ── MOBILE ── */
  @media (max-width: 900px) {
    left: 16px;
    right: 16px;
    bottom: -4px;
    height: 4px;
  }
`;

/* ─────────────────────────────────────────────
   SEARCH PANEL
───────────────────────────────────────────── */

export const SearchPanel = styled.div`
  width: min(860px, 100%);
  margin-top: 18px;
  padding: 10px;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 158px;
  gap: 10px;
  border-radius: 16px;
  background: #105a39;
  box-shadow: 0 28px 56px rgba(24, 71, 49, 0.2);

  /* ── MOBILE ── */
  @media (max-width: 900px) {
    width: 100%;
    margin-top: 12px;
    padding: 0;
    grid-template-columns: 1fr;
    gap: 0;
    border-radius: 16px;
    background: #ffffff;
    box-shadow: 0 2px 16px rgba(24, 71, 49, 0.09);
    overflow: hidden;
  }
`;

export const SearchFields = styled.div`
  min-height: 58px;
  display: grid;
  grid-template-columns: 1.04fr 1px 1fr 1px 0.92fr;
  align-items: center;
  padding: 4px 8px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.98);

  /* ── MOBILE ── */
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    min-height: auto;
    padding: 0 14px;
    border-radius: 0;
    background: transparent;
    gap: 0;
  }
`;

export const SearchField = styled.div`
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 8px;

  /* ── MOBILE ── */
  @media (max-width: 900px) {
    width: 100%;
    padding: 12px 0;
    gap: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.07);
    box-sizing: border-box;

    &:last-child {
      border-bottom: none;
    }
  }
`;

export const SearchFieldIcon = styled.span`
  width: 24px;
  height: 24px;
  flex: 0 0 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #2d7a45;

  svg {
    display: block;
    width: 18px;
    height: 18px;
  }

  /* ── MOBILE ── */
  @media (max-width: 900px) {
    width: 30px;
    height: 30px;
    flex: 0 0 36px;
    border-radius: 50%;
    background: rgba(45, 122, 69, 0.1);

    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

export const SearchFieldCopy = styled.div`
  min-width: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2px;

  /* ── MOBILE ── */
  @media (max-width: 900px) {
    flex: 1 1 auto;
    gap: 2px;
  }
`;

export const SearchFieldLabel = styled.span`
  font-family: "Inter", sans-serif;
  font-size: 11px;
  line-height: 1.1;
  color: #67747b;

  /* ── MOBILE ── */
  @media (max-width: 900px) {
    font-size: 12px;
    font-weight: 600;
    color: #1a282d;
    line-height: 1.2;
  }
`;

export const SearchFieldValue = styled.span`
  font-family: "Inter", sans-serif;
  font-size: 12px;
  line-height: 1.2;
  color: #46535a;
`;

export const SearchFieldInput = styled.input`
  width: 100%;
  padding: 0;
  border: 0;
  outline: none;
  background: transparent;
  font-family: "Inter", sans-serif;
  font-size: 12px;
  line-height: 1.2;
  color: #46535a;
  cursor: text;

  &::placeholder {
    color: #8c989f;
  }

  /* ── MOBILE ── */
  @media (max-width: 900px) {
    font-size: 11px;
    color: #8c989f;
  }
`;

export const SearchFieldSelect = styled.select`
  width: 100%;
  padding: 0;
  border: 0;
  outline: none;
  appearance: none;
  background: transparent;
  font-family: "Inter", sans-serif;
  font-size: 12px;
  line-height: 1.2;
  color: #8c989f;
  cursor: pointer;

  /* ── MOBILE ── */
  @media (max-width: 900px) {
    font-size: 11px;
  }
`;

export const SearchBudgetFields = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
  gap: 6px;
  align-items: center;
  width: 100%;
`;

export const SearchBudgetSelect = styled.select`
  width: 100%;
  min-width: 0;
  padding: 0;
  border: 0;
  outline: none;
  appearance: none;
  background: transparent;
  font-family: "Inter", sans-serif;
  font-size: 12px;
  line-height: 1.2;
  color: #8c989f;
  cursor: pointer;

  /* ── MOBILE ── */
  @media (max-width: 900px) {
    font-size: 11px;
  }
`;

export const SearchBudgetDivider = styled.span`
  font-family: "Inter", sans-serif;
  font-size: 12px;
  line-height: 1;
  color: #6f7c83;

  @media (max-width: 900px) {
    font-size: 11px;
  }
`;

export const SearchChevron = styled.span`
  margin-left: auto;
  flex: 0 0 auto;
  color: #4f5d65;
  pointer-events: none;

  svg {
    display: block;
    width: 13px;
    height: 13px;
  }

  /* ── MOBILE ── */
  @media (max-width: 900px) {
    color: #8a9499;

    svg {
      width: 13px;
      height: 13px;
    }
  }
`;

export const SearchDivider = styled.span`
  width: 1px;
  height: 26px;
  background: rgba(28, 67, 53, 0.14);

  @media (max-width: 900px) {
    display: none;
  }
`;

export const SearchButton = styled.button`
  min-height: 58px;
  border: 0;
  border-radius: 12px;
  background: #6db449;
  color: #ffffff;
  font-family: "Poppins", sans-serif;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.01em;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;

  /* ── MOBILE ── */
  @media (max-width: 900px) {
    width: calc(100% - 28px);
    margin: 0 14px 14px;
    min-height: 46px;
    border-radius: 12px;
    background: #0e5c30;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.01em;
    gap: 8px;
  }
`;

export const SearchButtonIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  svg {
    display: block;
    width: 15px;
    height: 15px;
  }

  /* ── MOBILE ── */
  @media (max-width: 900px) {
    svg {
      width: 15px;
      height: 15px;
    }
  }
`;

/* ─────────────────────────────────────────────
   SERVICES CARD (desktop only)
───────────────────────────────────────────── */

export const ServicesCard = styled.aside`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 310px;
  margin-top: 20px;
  padding: 22px 18px 18px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0 18px 42px rgba(72, 88, 69, 0.12);

  @media (max-width: 900px) {
    display: none;
  }
`;

export const ServicesTitle = styled.h2`
  margin: 0;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #1f5e3d;
`;

export const ServicesUnderline = styled.div`
  width: 58px;
  height: 2px;
  margin-top: 8px;
  border-radius: 999px;
  background: #6db449;
`;

export const ServicesList = styled.div`
  margin-top: 14px;
  display: grid;
  gap: 10px;
`;

export const ServiceRow = styled(Link)`
  display: grid;
  grid-template-columns: 52px minmax(0, 1fr) 12px;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: #16262b;
  transition: color 0.2s ease;

  &:hover {
    color: #1f5e3d;
  }
`;

export const ServiceIconWrap = styled.span`
  width: 46px;
  height: 46px;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #2d7a45;
  background: #edf4e7;

  svg {
    display: block;
    width: 24px;
    height: 24px;
  }
`;

export const ServiceLabel = styled.span`
  font-family: "Inter", sans-serif;
  font-size: 12px;
  line-height: 1.35;
  color: inherit;
`;

export const ServiceChevron = styled.span`
  color: #55636b;

  svg {
    display: block;
    width: 10px;
    height: 10px;
  }
`;

/* ─────────────────────────────────────────────
   BADGES
───────────────────────────────────────────── */

export const LeftBadge = styled.div`
  position: absolute;
  left: 10px;
  bottom: -30px;
  z-index: 2;
  width: 312px;
  min-height: 62px;
  padding: 8px 12px;
  display: grid;
  grid-template-columns: 28px minmax(0, 1fr);
  align-items: center;
  gap: 12px;
  border-radius: 18px;
  background: rgba(255, 248, 232, 0.97);
  box-shadow: 0 20px 44px rgba(117, 98, 61, 0.14);

  @media (max-width: 1280px) {
    left: 40px;
  }

  @media (max-width: 1180px) {
    width: 270px;
    min-height: 54px;
    padding: 8px 10px;
    grid-template-columns: 24px minmax(0, 1fr);
    gap: 10px;
    border-radius: 16px;
    background: #edf4e7;
    box-shadow: 0 14px 28px rgba(88, 116, 77, 0.1);
  }

  /* ── MOBILE ── */
  @media (max-width: 900px) {
    position: static;
    width: 100%;
    margin: 0px 0 0;
    min-height: 0;
    padding: 12px 14px;
    border-radius: 14px;
    grid-template-columns: 30px minmax(0, 1fr);
    gap: 10px;
    background: #edf4e7;
    box-shadow: none;
    box-sizing: border-box;
  }
`;

export const BadgeIconWrap = styled.span`
  width: 28px;
  height: 28px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #3f9550;

  svg {
    display: block;
    width: 28px;
    height: 28px;
  }

  /* ── MOBILE ── */
  @media (max-width: 900px) {
    width: 30px;
    height: 30px;

    svg {
      width: 30px;
      height: 30px;
    }
  }

  @media (max-width: 1180px) and (min-width: 901px) {
    width: 24px;
    height: 24px;

    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

export const BadgeCopy = styled.span`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const BadgeHeading = styled.span`
  font-family: "Inter", sans-serif;
  font-size: 11px;
  line-height: 1.3;
  font-weight: 700;
  color: #18282d;

  /* ── MOBILE ── */
  @media (max-width: 900px) {
    font-size: 13px;
    font-weight: 700;
  }

  @media (max-width: 1180px) and (min-width: 901px) {
    font-size: 10px;
  }
`;

export const BadgeText = styled.span`
  font-family: "Inter", sans-serif;
  font-size: 11px;
  line-height: 1.3;
  color: #3b4a4f;

  /* ── MOBILE ── */
  @media (max-width: 900px) {
    font-size: 12px;
  }

  @media (max-width: 1180px) and (min-width: 901px) {
    font-size: 10px;
  }
`;

export const RightBadge = styled.div`
  position: absolute;
  right: 15px;
  bottom: -30px;
  z-index: 2;
  width: 300px;
  min-height: 62px;
  padding: 8px 12px 8px 12px;
  display: grid;
  grid-template-columns: 52px minmax(0, 1fr) 48px;
  align-items: center;
  gap: 10px;
  border-radius: 18px;
  background: rgba(255, 248, 232, 0.97);
  box-shadow: 0 20px 44px rgba(117, 98, 61, 0.14);

  @media (max-width: 1280px) {
    right: 40px;
  }

  @media (max-width: 1180px) {
    width: 262px;
    min-height: 54px;
    padding: 8px 10px;
    grid-template-columns: 42px minmax(0, 1fr) 38px;
    gap: 8px;
    border-radius: 16px;
    background: #edf4e7;
    box-shadow: 0 14px 28px rgba(88, 116, 77, 0.1);
  }

  /* ── MOBILE ── */
  @media (max-width: 900px) {
    position: static;
    width: 100%;
    margin: 10px 0 0;
    min-height: 0;
    padding: 12px 14px;
    border-radius: 14px;
    grid-template-columns: 40px minmax(0, 1fr) 50px;
    gap: 10px;
    background: #edf4e7;
    box-shadow: none;
    box-sizing: border-box;
    overflow: hidden;
  }
`;

export const RupeeBadgeIcon = styled.span`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  background: #2d7a45;

  svg {
    display: block;
    width: 24px;
    height: 24px;
  }

  /* ── MOBILE ── */
  @media (max-width: 900px) {
    width: 40px;
    height: 40px;

    svg {
      width: 24px;
      height: 24px;
    }
  }

  @media (max-width: 1180px) and (min-width: 901px) {
    width: 28px;
    height: 28px;

    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

export const RightBadgeCopy = styled.span`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const RightBadgeHeading = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  line-height: 1.16;
  font-weight: 600;
  color: #16262b;

  /* ── MOBILE ── */
  @media (max-width: 900px) {
    font-size: 13px;
    font-weight: 700;
    line-height: 1.22;
  }

  @media (max-width: 1180px) and (min-width: 901px) {
    font-size: 10.5px;
    line-height: 1.2;
  }
`;

export const RightBadgeHouse = styled.span`
  justify-self: end;
  color: #a7c76b;

  svg {
    display: block;
    width: 46px;
    height: 46px;
  }

  /* ── MOBILE ── */
  @media (max-width: 900px) {
    svg {
      width: 50px;
      height: 50px;
    }
  }

  @media (max-width: 1180px) and (min-width: 901px) {
    svg {
      width: 36px;
      height: 36px;
    }
  }
`;

/* ─────────────────────────────────────────────
   MOBILE-ONLY: SERVICES STRIP
───────────────────────────────────────────── */

export const MobileServicesSection = styled.section`
  display: none;

  @media (max-width: 900px) {
    display: block;
    padding: 24px 16px 28px;
    background: #f4f6f3;
  }
`;

export const MobileServicesHeader = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const MobileServicesTitleBlock = styled.div``;

export const MobileServicesTitle = styled.h2`
  margin: 0;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: #0f1f24;
  line-height: 1.1;
`;

export const MobileServicesTitleBar = styled.div`
  width: 38px;
  height: 3px;
  margin-top: 7px;
  border-radius: 999px;
  background: #2d7a45;
`;

export const MobileServicesViewAll = styled(Link)`
  font-family: "Inter", sans-serif;
  font-size: 13.5px;
  font-weight: 600;
  color: #2d7a45;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding-bottom: 2px;

  svg {
    width: 14px;
    height: 14px;
    display: block;
  }
`;

export const MobileServicesGrid = styled.div`
  display: flex;
  gap: 0;
  justify-content: space-between;
`;

export const MobileServiceItem = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 9px;
  text-decoration: none;
  color: #16262b;
  flex: 0 0 auto;
  width: 18%;
`;

export const MobileServiceIconCircle = styled.span`
  width: 58px;
  height: 58px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #2d7a45;
  border: 1.5px solid rgba(45, 122, 69, 0.18);
  background: rgba(237, 244, 231, 0.5);

  svg {
    display: block;
    width: 28px;
    height: 28px;
  }
`;

export const MobileServiceLabel = styled.span`
  font-family: "Inter", sans-serif;
  font-size: 11px;
  line-height: 1.3;
  font-weight: 500;
  color: #2a3a40;
  text-align: center;
  display: block;
`;
