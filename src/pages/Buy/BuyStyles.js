import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const BuyPageShell = styled.main`
  min-height: 100vh;
  background: linear-gradient(180deg, #fcfdfb 0%, #f6faf5 100%);
`;

export const PageInner = styled.div`
  width: min(1520px, calc(100% - 48px));
  margin: 0 auto;
  padding: 50px 0 56px;

  @media (max-width: 980px) {
    width: 100%;
    padding: 0 0 42px;
  }

  @media (max-width: 640px) {
    padding: 80px 0;
    width: 100%;
  }
`;

export const HeroSection = styled.section`
  position: relative;
  margin-top: 18px;
  padding: 30px 26px 28px;
  border-radius: 30px;
  background: transparent;
  border: 0;
  box-shadow: none;

  @media (max-width: 980px) {
    margin-top: 4px;
    padding: 18px 24px 20px;
    border-radius: 0;
  }

  @media (max-width: 640px) {
    padding: 16px 18px 16px;
  }
`;

export const Breadcrumbs = styled.nav`
  display: none;

  @media (max-width: 980px) {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 24px;
    color: #4f5f64;
    font-size: 0.94rem;
    line-height: 1;
  }
`;

export const BreadcrumbLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

export const BreadcrumbCurrent = styled.span`
  color: #4f5f64;
`;

export const BreadcrumbChevron = styled.span`
  width: 8px;
  height: 8px;
  border-top: 1.5px solid currentColor;
  border-right: 1.5px solid currentColor;
  transform: rotate(45deg);
  opacity: 0.8;
`;

export const HeroKickerRow = styled.div`
  display: none;

  @media (max-width: 980px) {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 18px;
  }
`;

export const HeroKicker = styled.span`
  color: #126a37;
  font-size: 0.95rem;
  font-weight: 800;
  letter-spacing: 0;
  text-transform: uppercase;
`;

export const HeroKickerLine = styled.span`
  width: 92px;
  height: 2px;
  border-radius: 999px;
  background: rgba(30, 110, 61, 0.3);
`;

export const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(320px, 1.1fr);
  gap: 20px;
  align-items: end;
  margin-top: 8px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const HeroCopy = styled.div`
  max-width: 560px;
  padding-bottom: 30px;

  @media (max-width: 980px) {
    max-width: 420px;
    padding-bottom: 8px;
  }

  @media (max-width: 760px) {
    padding-bottom: 12px;
  }
`;

export const HeroTitle = styled.h1`
  margin: 0;
  color: #0f6b34;
  font-size: clamp(2.6rem, 4.2vw, 4rem);
  font-weight: 700;
  line-height: 1.04;
  letter-spacing: -0.04em;

  @media (max-width: 980px) {
    color: #13211d;
    font-family: "DM Serif Display", Georgia, serif;
    font-size: clamp(2.9rem, 7.3vw, 4.15rem);
    font-weight: 400;
    line-height: 0.98;
    letter-spacing: -0.05em;
  }
`;

export const HeroDescription = styled.p`
  max-width: 520px;
  color: #4b5c5f;
  max-width: 880px;
  margin: 20px auto 0;
  font-size: clamp(1rem, 1.7vw, 1.18rem);
  line-height: 1.65;

  @media (max-width: 980px) {
    max-width: 380px;
    margin: 16px 0 0;
    font-size: 0.98rem;
    line-height: 1.5;
  }
`;

export const StatsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 30px;

  @media (max-width: 980px) {
    display: none;
  }
`;

export const StatCard = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 12px;
  align-items: center;
  min-width: 140px;
`;

export const StatIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #eef7ef 0%, #e4f1e5 100%);
  color: #2e7a45;

  svg {
    width: 22px;
    height: 22px;
    display: block;
  }
`;

export const StatValue = styled.div`
  color: #143223;
  font-size: 1.35rem;
  font-weight: 800;
  line-height: 1;
`;

export const StatLabel = styled.div`
  margin-top: 6px;
  color: #4c6158;
  font-size: 0.9rem;
`;

export const HeroVisual = styled.div`
  position: relative;
  min-height: 360px;

  @media (max-width: 980px) {
    min-height: 320px;
  }

  @media (max-width: 760px) {
    min-height: 300px;
  }

  @media (max-width: 640px) {
    min-height: 240px;
  }
`;

export const HeroImageWrap = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: min(960px, 100%);
  overflow: hidden;
  border-radius: 26px;

  @media (max-width: 980px) {
    width: min(500px, 100%);
    border-radius: 0;

    &::before {
      content: "";
      position: absolute;
      top: 12px;
      right: 22px;
      z-index: 0;
      width: 220px;
      height: 220px;
      border: 2px solid rgba(186, 213, 205, 0.36);
      border-radius: 50%;
    }
  }
`;

export const HeroImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;

  max-height: 660px;
  margin-bottom: -50px;
  padding-right: 40px;

  @media (max-width: 1080px) {
    max-height: 450px;
  }

  @media (max-width: 980px) {
    position: relative;
    z-index: 1;
    max-height: 340px;
    margin-bottom: 0;
    padding-right: 0;
  }

  @media (max-width: 760px) {
    max-height: 260px;
  }

  @media (max-width: 640px) {
    max-height: 220px;
  }
`;

export const MobileStatsStrip = styled.div`
  display: none;

  @media (max-width: 980px) {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0;
    margin-top: 14px;
    border-radius: 24px;
    background: rgba(255, 255, 255, 0.96);
    border: 1px solid rgba(27, 94, 60, 0.08);
    box-shadow: 0 16px 36px rgba(42, 57, 46, 0.08);
    overflow: hidden;
  }
`;

export const MobileStatItem = styled.div`
  display: grid;
  grid-template-columns: 48px 1fr;
  gap: 12px;
  align-items: center;
  padding: 18px 16px;
  border-right: 1px solid rgba(28, 87, 49, 0.1);

  &:last-child {
    border-right: 0;
  }

  @media (max-width: 640px) {
    grid-template-columns: 42px 1fr;
    gap: 10px;
    padding: 16px 12px;
  }
`;

export const FilterPanel = styled.div`
  position: relative;
  z-index: 2;
  margin: 12px 0 0;
  width: 100%;
  padding: 20px 18px 14px;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid rgba(30, 84, 49, 0.1);
  box-shadow: 0 22px 42px rgba(51, 70, 54, 0.1);

  @media (max-width: 980px) {
    margin: 12px 0 0;
    padding: 18px 18px 14px;
    border-radius: 22px;
  }

  @media (max-width: 640px) {
    padding: 16px 14px 14px;
  }
`;

export const FilterHeading = styled.h3`
  display: none;

  @media (max-width: 980px) {
    display: block;
    margin: 0 0 12px;
    color: #18231f;
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.2;
  }
`;

export const FilterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 14px;
  align-items: end;

  @media (max-width: 1280px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 14px 16px;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }
`;

export const FilterField = styled.div`
  display: grid;
  gap: 8px;

  @media (max-width: 980px) {
    ${({ $full }) =>
      $full &&
      css`
        grid-column: 1 / -1;
      `}
  }

  @media (max-width: 640px) {
    ${({ $full }) =>
      $full &&
      css`
        grid-column: 1 / -1;
      `}
  }
`;

export const FilterLabel = styled.label`
  color: #31403b;
  font-size: 0.82rem;
  font-weight: 700;

  @media (max-width: 980px) {
    ${({ $visuallyHiddenOnMobile }) =>
      $visuallyHiddenOnMobile &&
      css`
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      `}
  }
`;

const sharedField = css`
  width: 100%;
  min-height: 54px;
  padding: 0 16px 0 46px;
  border-radius: 14px;
  border: 1px solid rgba(42, 91, 58, 0.12);
  background: #ffffff;
  color: #6e7b77;
  font-size: 0.96rem;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.86);
`;

export const FilterControl = styled.div`
  position: relative;
`;

export const FilterControlIcon = styled.span`
  position: absolute;
  left: 16px;
  top: 50%;
  z-index: 1;
  width: 18px;
  height: 18px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #7c8a89;
  transform: translateY(-50%);

  svg {
    width: 18px;
    height: 18px;
    display: block;
  }
`;

export const FilterChevron = styled.span`
  position: absolute;
  right: 16px;
  top: 50%;
  width: 18px;
  height: 18px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #687472;
  pointer-events: none;
  transform: translateY(-50%);

  svg {
    width: 16px;
    height: 16px;
    display: block;
  }
`;

export const FilterInput = styled.input`
  ${sharedField};
  padding-right: 16px;
`;

export const FilterSelect = styled.select`
  ${sharedField};
  appearance: none;
  padding-right: 42px;
`;

export const SearchButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 52px;
  border-radius: 14px;
  border: 0;
  background: linear-gradient(180deg, #1b6a3a 0%, #0f552d 100%);
  color: #ffffff;
  font-size: 0.96rem;
  font-weight: 700;
  box-shadow: 0 18px 32px rgba(19, 97, 51, 0.16);

  svg {
    width: 18px;
    height: 18px;
    display: block;
  }

  @media (max-width: 980px) {
    grid-column: 1 / -1;
  }
`;

export const MoreFiltersButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  min-height: 42px;
  padding: 0 22px;
  margin: 16px auto 0;
  border-radius: 14px;
  border: 1px solid rgba(33, 86, 51, 0.1);
  background: rgba(252, 253, 251, 0.98);
  color: #27553a;
  font-size: 0.9rem;
  font-weight: 700;

  svg {
    width: 18px;
    height: 18px;
    display: block;
  }
`;

export const PageSection = styled.section`
  margin-top: 36px;

  @media (max-width: 980px) {
    margin-top: 28px;
    padding: 0 24px;
  }

  @media (max-width: 640px) {
    padding: 0 18px;
  }
`;

export const SectionHeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 22px;

  @media (max-width: 640px) {
    gap: 12px;
  }
`;

export const SectionTitle = styled.h2`
  margin: 0;
  color: #14211d;
  font-size: clamp(1.8rem, 2.2vw, 2.2rem);
  line-height: 1.05;
`;

export const SectionAction = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: #1b6a3a;
  text-decoration: none;
  font-size: 0.96rem;
  font-weight: 700;

  @media (max-width: 640px) {
    font-size: 0.9rem;
  }
`;

export const FeaturedProjectsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;

  @media (max-width: 1180px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 980px) {
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    gap: 18px;
    padding: 0 12px 6px 0;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    overscroll-behavior-x: contain;
    touch-action: pan-x;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }

    > * {
      flex: 0 0 min(320px, 72vw);
      scroll-snap-align: start;
    }
  }

  @media (max-width: 640px) {
    > * {
      flex-basis: min(296px, 82vw);
    }
  }
`;

export const WhyInvestPanel = styled.div`
  padding: 34px 28px;
  border-radius: 28px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.98) 0%,
    rgba(249, 252, 248, 0.98) 100%
  );
  border: 1px solid rgba(28, 86, 49, 0.08);
  box-shadow: 0 22px 50px rgba(46, 65, 50, 0.08);

  @media (max-width: 980px) {
    padding: 24px 0 10px;
    border-radius: 24px;
  }

  @media (max-width: 640px) {
    padding: 22px 0 8px;
  }
`;

export const CenterTitle = styled.h2`
  margin: 0;
  text-align: center;
  color: #11201a;
  font-family: "DM Serif Display", Georgia, serif;
  font-size: clamp(2rem, 3vw, 2.8rem);
  line-height: 1.02;
`;

export const CenterAccent = styled.span`
  display: block;
  width: 34px;
  height: 3px;
  margin: 14px auto 0;
  border-radius: 999px;
  background: linear-gradient(90deg, #86bb7d, #327b49);
`;

export const ReasonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 0;
  margin-top: 30px;

  @media (max-width: 1280px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 14px;
  }

  @media (max-width: 980px) {
    grid-auto-flow: column;
    grid-auto-columns: minmax(118px, 1fr);
    grid-template-columns: none;
    gap: 0;
    overflow-x: auto;
    margin-top: 26px;
    padding: 0 4px 6px;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const ReasonCard = styled.div`
  padding: 8px 18px;
  text-align: center;
  border-right: 1px solid rgba(34, 87, 51, 0.12);

  &:last-child {
    border-right: 0;
  }

  @media (max-width: 1280px) {
    border-right: 0;
    border: 1px solid rgba(34, 87, 51, 0.08);
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.78);
    padding: 20px 16px;
  }

  @media (max-width: 980px) {
    min-width: 118px;
    border: 0;
    border-right: 1px solid rgba(34, 87, 51, 0.12);
    border-radius: 0;
    background: transparent;
    padding: 6px 16px 10px;
  }
`;

export const ReasonIcon = styled.div`
  width: 58px;
  height: 58px;
  margin: 0 auto 14px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #eef8ef 0%, #e5f3e6 100%);
  color: #2e7a45;

  svg {
    width: 28px;
    height: 28px;
    display: block;
  }
`;

export const ReasonTitle = styled.h3`
  margin: 0;
  color: #143223;
  font-size: 1.02rem;
  line-height: 1.2;
`;

export const ReasonText = styled.p`
  margin: 10px 0 0;
  color: #546564;
  font-size: 0.94rem;
  line-height: 1.55;
`;

export const BuilderGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 14px;

  @media (max-width: 1280px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 980px) {
    grid-auto-flow: column;
    grid-auto-columns: minmax(140px, 1fr);
    grid-template-columns: none;
    overflow-x: auto;
    padding-bottom: 4px;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const BuilderCard = styled.div`
  min-height: 126px;
  padding: 18px 14px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: rgba(255, 255, 255, 0.98);
  border: 1px solid rgba(30, 84, 49, 0.1);
  box-shadow: 0 18px 34px rgba(53, 73, 56, 0.06);

  @media (max-width: 980px) {
    min-height: 92px;
    padding: 12px 16px;
    border-radius: 16px;
    box-shadow: none;
  }
`;

export const BuilderName = styled.div`
  color: #172420;
  font-size: 1.3rem;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;

  @media (max-width: 980px) {
    font-size: 1.05rem;
    line-height: 1.05;
  }
`;

export const BuilderTag = styled.div`
  margin-top: 10px;
  color: #63716c;
  font-size: 0.82rem;
  line-height: 1.4;

  @media (max-width: 980px) {
    display: none;
  }
`;

export const SupportBand = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 28px 32px;
  border-radius: 22px;
  background:
    radial-gradient(
      circle at 86% 20%,
      rgba(126, 190, 96, 0.18),
      transparent 18%
    ),
    linear-gradient(90deg, #0d4f28 0%, #0f5d30 100%);
  color: #ffffff;

  @media (max-width: 980px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 24px 18px;
  }
`;

export const SupportIllustration = styled.div`
  position: absolute;
  right: 24px;
  bottom: 12px;
  width: 128px;
  height: 128px;
  color: rgba(155, 198, 119, 0.22);
  pointer-events: none;

  svg {
    width: 100%;
    height: 100%;
    display: block;
  }
`;

export const SupportCopy = styled.div`
  max-width: 540px;

  h3 {
    margin: 0;
    font-family: "DM Serif Display", Georgia, serif;
    font-size: clamp(1.8rem, 2.4vw, 2.6rem);
    line-height: 1.02;
  }

  p {
    margin: 12px 0 0;
    color: rgba(241, 248, 243, 0.9);
    font-size: 1rem;
    line-height: 1.6;
  }
`;

export const SupportActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;

  @media (max-width: 980px) {
    width: 100%;
    margin-top: 6px;
  }

  @media (max-width: 560px) {
    width: 100%;
  }
`;

export const SupportButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 52px;
  padding: 0 22px;
  border-radius: 14px;
  border: 1px solid
    ${({ $ghost }) =>
      $ghost ? "rgba(221, 238, 226, 0.36)" : "rgba(186, 223, 99, 0.4)"};
  background: ${({ $ghost }) =>
    $ghost
      ? "rgba(255, 255, 255, 0.06)"
      : "linear-gradient(180deg, #8abd3f 0%, #6c9f28 100%)"};
  color: #ffffff;
  font-size: 0.96rem;
  font-weight: 700;

  svg {
    width: 18px;
    height: 18px;
    display: block;
  }

  @media (max-width: 560px) {
    width: 100%;
    justify-content: center;
  }
`;

export const TrustRow = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 0;
  margin-top: 20px;
  padding: 0 8px;

  @media (max-width: 1180px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 14px;
    padding: 0;
  }

  @media (max-width: 980px) {
    grid-auto-flow: column;
    grid-auto-columns: minmax(120px, 1fr);
    grid-template-columns: none;
    gap: 0;
    overflow-x: auto;
    margin-top: 18px;
    padding: 0;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const TrustItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 18px;
  border-right: 1px solid rgba(34, 87, 51, 0.12);

  &:last-child {
    border-right: 0;
  }

  @media (max-width: 1180px) {
    min-height: 70px;
    padding: 14px 16px;
    border-right: 0;
    border: 1px solid rgba(34, 87, 51, 0.08);
    border-radius: 18px;
    background: rgba(255, 255, 255, 0.9);
  }

  @media (max-width: 980px) {
    min-height: auto;
    padding: 0 14px;
    border: 0;
    border-radius: 0;
    background: transparent;
    box-shadow: none;
    flex-direction: row;
    align-items: center;
    border-right: 1px solid rgba(34, 87, 51, 0.12);
  }
`;

export const TrustIcon = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #edf7ee 0%, #e3f1e4 100%);
  color: #2c7a45;

  svg {
    width: 20px;
    height: 20px;
    display: block;
  }
`;

export const TrustLabel = styled.div`
  color: #2f4138;
  font-size: 0.92rem;
  font-weight: 600;
  line-height: 1.45;
`;

export const FavoriteButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 2;
  width: 34px;
  height: 34px;
  border: 0;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.86);
  color: #829199;
  box-shadow: 0 8px 18px rgba(49, 64, 69, 0.14);

  svg {
    width: 18px;
    height: 18px;
    display: block;
  }
`;
