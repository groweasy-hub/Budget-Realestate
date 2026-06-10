import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { ContentSection } from "../../pages/Home/HomeStyles";

export const OuterSection = styled(ContentSection)`
  padding: 0;
  background: transparent;
  border: 0;
  box-shadow: none;
  backdrop-filter: none;
`;

export const SectionShell = styled.div`
  position: relative;
  display: grid;
  grid-template-areas:
    "copy hero"
    "actions hero";
  grid-template-columns: minmax(0, 0.92fr) minmax(360px, 1.08fr);
  gap: 28px;
  align-items: center;
  min-height: 500px;
  padding: 30px 34px 26px 34px;
  border-radius: 0;
  overflow: hidden;
  background: transparent;
  border: 0;
  box-shadow: none;

  @media (max-width: 1180px) {
    grid-template-areas:
      "copy"
      "hero"
      "actions";
    grid-template-columns: 1fr;
    min-height: auto;
    gap: 22px;
    padding: 24px 22px 20px;
  }

  @media (max-width: 760px) {
    gap: 0;
    padding: 28px 18px 18px;
    border-radius: 0;
    overflow: visible;
    background: transparent;
    box-shadow: none;
  }
`;

export const Copy = styled.div`
  grid-area: copy;
  position: relative;
  z-index: 1;
  max-width: 560px;

  @media (max-width: 760px) {
    max-width: none;
    padding: 10px 0 0;
  }
`;

export const KickerPill = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  min-height: 42px;
  padding: 0 18px;
  border-radius: 999px;
  background: linear-gradient(
    180deg,
    rgba(239, 248, 234, 0.96),
    rgba(231, 244, 228, 0.94)
  );
  border: 1px solid rgba(193, 221, 187, 0.82);
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 0.03em;

  svg {
    width: 16px;
    height: 16px;
    display: block;
  }

  @media (max-width: 760px) {
    gap: 11px;
    min-height: 54px;
    padding: 0 26px;
    border-radius: 999px;
    background: rgba(251, 253, 249, 0.88);
    border: 1.5px solid rgba(203, 223, 196, 0.98);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.92);
    font-size: 0.94rem;
    letter-spacing: 0;

    svg {
      width: 14px;
      height: 14px;
    }
  }
`;

export const Title = styled.h2`
  margin: 0;
  color: #0f1918;
  font-family: "Poppins", sans-serif;
  font-size: clamp(2rem, 4vw, 4rem);
  font-weight: 400;
  line-height: 1.04;
  letter-spacing: -0.055em;

  @media (max-width: 760px) {
    max-width: 300px;
    margin-top: 24px;
    font-family: "DM Serif Display", Georgia, serif;
    font-size: clamp(3.2rem, 13vw, 4.9rem);
    line-height: 0.94;
    letter-spacing: -0.055em;
  }
`;

export const Description = styled.p`
  max-width: 880px;
  margin: 20px auto 0;
  color: #536471;
  font-size: clamp(1rem, 1.7vw, 1.18rem);
  line-height: 1.65;

  @media (max-width: 760px) {
    max-width: 292px;
    margin: 26px 0 0;
    font-size: 0.98rem;
    line-height: 1.66;
  }
`;

export const ActionRow = styled.div`
  grid-area: actions;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 28px;

  @media (max-width: 1180px) {
    margin-top: 0;
  }

  @media (max-width: 760px) {
    flex-direction: column;
    gap: 16px;
    padding: 20px 0 12px;
  }
`;

const baseButton = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  min-height: 46px;
  padding: 0 28px;
  border-radius: 999px;
  font-size: 1.03rem;
  font-weight: 700;
  text-decoration: none;
  transition:
    transform 180ms ease,
    box-shadow 180ms ease,
    background-color 180ms ease;

  &:hover {
    transform: translateY(-1px);
  }
`;

export const ButtonLink = styled(Link)`
  ${baseButton};
  color: ${({ $ghost }) => ($ghost ? "#1f6f43" : "#ffffff")};
  background: ${({ $ghost }) =>
    $ghost
      ? "rgba(255, 255, 255, 0.74)"
      : "linear-gradient(180deg, #0f5d30 0%, #0a4825 100%)"};
  border: 1.5px solid
    ${({ $ghost }) =>
      $ghost ? "rgba(165, 199, 156, 0.78)" : "rgba(10, 72, 37, 0.16)"};
  box-shadow: ${({ $ghost }) =>
    $ghost
      ? "0 14px 30px rgba(94, 118, 97, 0.08)"
      : "0 16px 32px rgba(15, 88, 46, 0.2)"};

  span:first-child {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 760px) {
    width: 100%;
    position: relative;
    min-height: 52px;
    padding: 0 24px;
    border-radius: 22px;
    font-size: 1.02rem;
    background: ${({ $ghost }) => ($ghost ? "#ffffff" : "#0e6b34")};
    border-width: ${({ $ghost }) => ($ghost ? "1.5px" : "0")};
    box-shadow: ${({ $ghost }) =>
      $ghost ? "inset 0 0 0 1px rgba(52, 144, 78, 0.18)" : "none"};

    span:first-child {
      width: 100%;
      text-align: center;
    }
  }
`;

export const ButtonIcon = styled.span`
  width: 24px;
  height: 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: inherit;

  svg {
    width: 20px;
    height: 20px;
    display: block;
  }

  @media (max-width: 760px) {
    position: absolute;
    right: 22px;
    top: 50%;
    width: 28px;
    height: 28px;
    transform: translateY(-50%);

    svg {
      width: 28px;
      height: 28px;
    }
  }
`;

export const HeroPanel = styled.div`
  grid-area: hero;
  position: relative;
  min-height: 440px;
  z-index: 1;

  @media (max-width: 1180px) {
    min-height: 390px;
  }

  @media (max-width: 760px) {
    min-height: auto;
    margin-top: 4px;
    padding: 0 0 4px;
  }
`;

export const BackdropSkyline = styled.div`
  position: absolute;
  display: none;

  @media (max-width: 760px) {
    top: 4px;
    right: -24px;
    z-index: 1;
    display: block;
    width: 240px;
    height: 300px;
    color: rgba(162, 182, 154, 0.42);
    opacity: 0.62;
    filter: blur(0.3px);

    svg {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
`;

export const HeroArt = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: min(720px, 100%);
  display: flex;
  justify-content: flex-end;

  @media (max-width: 760px) {
    position: relative;
    right: auto;
    bottom: auto;
    width: 100%;
    justify-content: center;
    margin-top: -30px;
    padding: 0px 30px 0;
    z-index: 2;
  }
`;

export const HeroImage = styled.img`
  width: min(810px, 100%);
  height: auto;
  display: block;
  object-fit: contain;

  @media (max-width: 760px) {
    width: calc(100% + 62px);
    max-width: none;
    margin: 0 -18px;
    filter: brightness(1.08) saturate(0.9) contrast(0.94);
  }
`;

export const Birds = styled.div`
  display: none;

  @media (max-width: 760px) {
    position: absolute;
    top: 62px;
    right: 62px;
    z-index: 3;
    display: block;
    width: 76px;
    color: rgba(135, 156, 131, 0.58);

    svg {
      width: 100%;
      height: auto;
      display: block;
    }
  }
`;

export const FloatingCards = styled.div`
  @media (max-width: 760px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px 14px;
    margin-top: 6px;
    padding: 0;
  }
`;

export const FloatingCard = styled.div`
  position: absolute;
  display: fex-wrap: wrap;
  grid-template-columns: 38px 1fr;
  gap: 10px;
  align-items: center;
  min-width: 158px;
  max-width: 188px;
  padding: 12px 14px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(196, 218, 192, 0.9);
  box-shadow:
    0 18px 36px rgba(71, 95, 78, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(10px);

  p {
    margin: 2px 0 0;
    color: #5a6668;
    font-size: 0.92rem;
    line-height: 1.3;
  }

  ${({ $position }) =>
    $position === "top" &&
    css`
      top: 30px;
      right: 22px;
    `}

  ${({ $position }) =>
    $position === "bottom" &&
    css`
      left: 18px;
      bottom: 48px;
    `}

  ${({ $position }) =>
    $position === "right" &&
    css`
      right: 0;
      top: 58%;
      transform: translateY(-50%);
    `}

  @media (max-width: 1180px) {
    ${({ $position }) =>
      $position === "top" &&
      css`
        top: 16px;
        right: 12px;
      `}

    ${({ $position }) =>
      $position === "bottom" &&
      css`
        left: 6px;
        bottom: 26px;
      `}
  }

  @media (max-width: 760px) {
    min-width: 74px;
    max-width: 126px;
    padding: 12px 14px;
    border-radius: 18px;
    grid-template-columns: 36px 1fr;
    gap: 10px;

    p {
      font-size: 0.78rem;
    }

    ${({ $position }) =>
      $position === "top" &&
      css`
        top: 8px;
        right: 2px;
      `}

    ${({ $position }) =>
      $position === "bottom" &&
      css`
        left: 0;
        bottom: 18px;
      `}

    ${({ $position }) =>
      $position === "right" &&
      css`
        right: -2px;
      `}

    position: relative;
    inset: auto;
    min-width: 0;
    max-width: none;
    padding: 18px 0px 18px 20px;
    border-radius: 20px;
    grid-template-columns: 66px minmax(0, 1fr);
    gap: 14px;
    align-items: center;
    background: rgba(255, 255, 255, 0.96);
    border: 1px solid rgba(223, 233, 220, 0.96);
    box-shadow: 0 12px 32px rgba(74, 95, 78, 0.08);
    backdrop-filter: none;
    transform: none;

    p {
      margin-top: 4px;
      color: #5f6f73;
      font-size: 0.84rem;
      line-height: 1.3;
    }

    ${({ $position }) =>
      $position === "top" &&
      css`
        order: 1;
      `}

    ${({ $position }) =>
      $position === "right" &&
      css`
        order: 2;
      `}

    ${({ $position }) =>
      $position === "bottom" &&
      css`
        order: 3;
      `}
  }
`;

export const FloatingCardIcon = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  color: #247848;

  svg {
    width: 20px;
    height: 20px;
    display: block;
  }

  @media (max-width: 760px) {
    width: 30px;
    height: 30px;

    svg {
      width: 30px;
      height: 30px;
    }
  }
`;

export const FloatingCardEyebrow = styled.div`
  color: #5c6d6f;
  font-size: 0.76rem;
  font-weight: 600;
  line-height: 1.2;

  @media (max-width: 760px) {
    font-size: 0.63rem;
    font-weight: 500;
  }
`;

export const FloatingCardValue = styled.div`
  margin-top: 2px;
  color: #0e5e31;
  font-size: 0.96rem;
  font-weight: 800;
  line-height: 1.1;

  @media (max-width: 760px) {
    margin-top: 6px;
    font-size: 0.88rem;
  }
`;
