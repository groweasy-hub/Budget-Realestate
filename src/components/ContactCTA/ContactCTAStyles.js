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
    grid-template-columns: 1fr;
    min-height: auto;
    gap: 22px;
    padding: 24px 22px 20px;
  }
`;

export const Copy = styled.div`
  position: relative;
  z-index: 1;
  max-width: 560px;

  h2 {
    margin: 18px 0 0;
    color: #081714;
    font-family: "DM Serif Display", Georgia, serif;
    font-size: clamp(3rem, 5vw, 5.2rem);
    line-height: 0.96;
    letter-spacing: -0.05em;
  }

  p {
    max-width: 520px;
    margin: 20px 0 0;
    color: #4a5a5e;
    font-size: clamp(1rem, 1.6vw, 1.22rem);
    line-height: 1.58;
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
`;

export const Title = styled.h2`
  margin: 0;
  color: #0f1918;
  font-family: "Poppins", sans-serif;
  font-size: clamp(2rem, 4vw, 4rem);
  font-weight: 400;
  line-height: 1.04;
  letter-spacing: -0.055em;
`;

export const Description = styled.p`
  max-width: 880px;
  margin: 20px auto 0;
  color: #536471;
  font-size: clamp(1rem, 1.7vw, 1.18rem);
  line-height: 1.65;
`;

export const ActionRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 28px;
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

  @media (max-width: 760px) {
    width: 100%;
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
`;

export const HeroPanel = styled.div`
  position: relative;
  min-height: 440px;
  z-index: 1;

  @media (max-width: 1180px) {
    min-height: 390px;
  }

  @media (max-width: 760px) {
    min-height: 300px;
  }
`;

export const Skyline = styled.div`
  position: absolute;
  inset: 24px 8% auto 10%;
  height: 250px;
  opacity: 0.35;
  background: linear-gradient(
    90deg,
    transparent 0 10%,
    rgba(144, 180, 138, 0.2) 10% 12%,
    transparent 12% 20%,
    rgba(144, 180, 138, 0.18) 20% 22%,
    transparent 22% 30%,
    rgba(144, 180, 138, 0.24) 30% 33%,
    transparent 33% 40%,
    rgba(144, 180, 138, 0.18) 40% 42%,
    transparent 42% 51%,
    rgba(144, 180, 138, 0.22) 51% 54%,
    transparent 54% 66%,
    rgba(144, 180, 138, 0.16) 66% 68%,
    transparent 68% 100%
  );
  mask-image:
    linear-gradient(to top, #000 0 72%, transparent 100%),
    linear-gradient(90deg, transparent 0 4%, #000 4% 96%, transparent 96% 100%);

  &::before {
    content: "";
    position: absolute;
    left: 6%;
    right: 0;
    bottom: 0;
    height: 100%;
    background: linear-gradient(
      180deg,
      transparent 0 26%,
      rgba(140, 177, 135, 0.18) 26% 100%
    );
    clip-path: polygon(
      8% 100%,
      8% 52%,
      10% 52%,
      10% 28%,
      12% 28%,
      12% 52%,
      14% 52%,
      14% 100%,
      24% 100%,
      24% 46%,
      27% 46%,
      27% 18%,
      30% 46%,
      30% 100%,
      42% 100%,
      42% 42%,
      45% 42%,
      45% 8%,
      48% 42%,
      48% 100%,
      58% 100%,
      58% 34%,
      61% 34%,
      61% 12%,
      64% 34%,
      64% 100%,
      74% 100%,
      74% 50%,
      78% 50%,
      78% 22%,
      82% 50%,
      82% 100%,
      100% 100%,
      100% 0,
      0 0,
      0 100%
    );
  }
`;

export const HeroArt = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: min(720px, 100%);
  display: flex;
  justify-content: flex-end;
`;

export const HeroImage = styled.img`
  width: min(810px, 100%);
  height: auto;
  display: block;
  object-fit: contain;
`;

export const FloatingCard = styled.div`
  position: absolute;
  display: grid;
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
    min-width: 154px;
    max-width: 176px;
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
  }
`;

export const FloatingCardIcon = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #f0f8ef 0%, #e5f3e4 100%);
  color: #247848;

  svg {
    width: 20px;
    height: 20px;
    display: block;
  }

  @media (max-width: 760px) {
    width: 32px;
    height: 32px;

    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

export const FloatingCardEyebrow = styled.div`
  color: #5c6d6f;
  font-size: 0.76rem;
  font-weight: 600;
  line-height: 1.2;

  @media (max-width: 760px) {
    font-size: 0.66rem;
  }
`;

export const FloatingCardValue = styled.div`
  margin-top: 2px;
  color: #0e5e31;
  font-size: 0.96rem;
  font-weight: 800;
  line-height: 1.1;

  @media (max-width: 760px) {
    font-size: 0.82rem;
  }
`;
