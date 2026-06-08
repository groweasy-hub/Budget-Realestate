import styled, { css } from "styled-components";

export const PageShell = styled.main`
  min-height: 100vh;
  overflow: hidden;
`;

export const HeroStage = styled.div`
  position: relative;
`;

export const NavWrap = styled.div`
  width: min(1520px, calc(100% - 44px));
  margin: 0 auto;
  padding-top: 20px;

  @media (max-width: 980px) {
    width: min(100%, calc(100% - 20px));
    padding-top: 16px;
  }
`;

export const HeroNavWrap = styled(NavWrap)`
  position: absolute;
  top: 0;
  left: 50%;
  z-index: 8;
  transform: translateX(-50%);
  padding-top: 20px;

  @media (max-width: 980px) {
    padding-top: 16px;
  }
`;

export const PageStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px 48px 72px;

  @media (max-width: 980px) {
    padding: 24px 20px 48px;
  }
`;

const sectionSoftStyles = css`
  background: linear-gradient(
    180deg,
    rgba(234, 246, 234, 0.9),
    rgba(255, 248, 241, 0.86)
  );
`;

export const ContentSection = styled.section`
  padding: 36px;
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(27, 94, 60, 0.08);
  border-radius: 28px;
  box-shadow: 0 22px 48px rgba(44, 59, 53, 0.08);
  backdrop-filter: blur(10px);

  ${({ $soft }) => $soft && sectionSoftStyles}
  ${({ $matrix }) => $matrix && "margin-top: -8px;"}

  @media (max-width: 980px) {
    padding: 28px 22px;
  }
`;

export const SectionHeading = styled.div`
  max-width: 760px;
  margin-bottom: 24px;
`;

export const SectionKicker = styled.span`
  display: inline-flex;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 0.84rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const SectionTitle = styled.h2`
  margin: 0;
  font-family: "Poppins", sans-serif;
  font-size: clamp(2rem, 3vw, 3rem);
  line-height: 1.05;
`;

export const SectionDescription = styled.p`
  margin: 12px 0 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1.03rem;
  line-height: 1.65;
`;
