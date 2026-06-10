import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  padding: 18px 0 10px;
  overflow: hidden;

  @media (max-width: 980px) {
    padding: 18px 0 0;
  }
`;

export const SplitLayout = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(300px, 1.1fr);
  gap: 22px;
  align-items: end;
  margin-bottom: 18px;

  @media (max-width: 1180px) {
    grid-template-columns: 1fr;
    align-items: start;
    gap: 8px;
  }
`;

export const HeaderCopy = styled.div`
  text-align: center;
  max-width: 640px;
  padding: 5px 0 40px 150px;

  @media (max-width: 1180px) {
    max-width: 760px;
    margin: 0 auto;
    padding: 0;
  }

  @media (max-width: 760px) {
    max-width: 360px;
  }
`;

export const KickerRow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 18px;
  margin-bottom: 24px;

  @media (max-width: 760px) {
    gap: 14px;
    margin-bottom: 18px;
  }
`;

export const KickerLine = styled.span`
  width: 56px;
  height: 1px;
  background: linear-gradient(
    90deg,
    rgba(56, 122, 74, 0.06),
    rgba(56, 122, 74, 0.34),
    rgba(56, 122, 74, 0.06)
  );

  @media (max-width: 760px) {
    width: 36px;
    height: 2px;
    border-radius: 999px;
    background: rgba(93, 171, 88, 0.58);
  }
`;

export const Kicker = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 0.03em;

  @media (max-width: 760px) {
    font-size: 1rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
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
    font-family: "DM Serif Display", Georgia, serif;
    font-size: 2.95rem;
    line-height: 0.94;
    letter-spacing: -0.04em;
  }
`;

export const Description = styled.p`
  max-width: 880px;
  margin: 20px auto 0;
  color: #536471;
  font-size: clamp(1rem, 1.7vw, 1.18rem);
  line-height: 1.65;

  @media (max-width: 760px) {
    max-width: 330px;
    margin-top: 18px;
    font-size: 0.95rem;
    line-height: 1.54;
  }
`;

export const HeroWrap = styled.div`
  position: relative;
  min-height: 360px;

  @media (max-width: 1180px) {
    min-height: 300px;
  }

  @media (max-width: 760px) {
    min-height: 144px;
    margin-top: -80px;

    &::before {
      content: "";
      position: absolute;
      top: 0px;
      right: 8px;
      z-index: 2;
      width: 140px;
      height: 0px;

      filter: blur(10px);
      pointer-events: none;
    }
  }
`;

export const HeroStage = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: min(660px, 100%);
  min-height: 340px;

  @media (max-width: 1180px) {
    position: relative;
    width: min(620px, 100%);
    margin: 0 auto;
  }

  @media (max-width: 760px) {
    width: min(100%, 420px);
    min-height: 338px;
    margin-top: -50px;
    overflow: hidden;

    &::before {
      content: "";
      left: 50%;
      top: 34px;
      width: 300px;
      height: 300px;
    }

    &::after {
      content: "";
      position: absolute;
      left: 50%;
      bottom: 68px;
      width: 100%;
      height: 180px;
      pointer-events: none;
    }
  }
`;

export const HeroBadge = styled.div`
  display: none;

  @media (max-width: 760px) {
    position: absolute;
    left: 74px;
    top: 82px;
    z-index: 2;
    display: inline-flex;
    width: 56px;
    height: 64px;
    color: #3c8e2f;
    filter: drop-shadow(0 18px 28px rgba(62, 128, 57, 0.14))
      drop-shadow(0 4px 12px rgba(62, 128, 57, 0.12));

    svg {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
`;

export const HeroImage = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  width: min(620px, 100%);
  height: auto;
  display: block;
  object-fit: contain;

  @media (max-width: 760px) {
    right: 50%;
    bottom: 0;
    width: 121%;
    transform: translateX(48%);
    filter: brightness(1.08) saturate(0.82) contrast(0.92);
  }
`;

export const FeatureGrid = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;

  @media (max-width: 1180px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

export const Card = styled.article`
  position: relative;
  padding: 20px 18px;
  min-height: 168px;
  border-radius: 20px;
  background:
    radial-gradient(
      circle at 10% 8%,
      rgba(229, 240, 226, 0.55),
      transparent 28%
    ),
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.97),
      rgba(251, 252, 248, 0.95)
    );
  border: 1px solid rgba(150, 190, 145, 0.28);

  @media (max-width: 760px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 136px;
    padding: 18px 18px 18px 14px;
    border-radius: 24px;
    box-shadow:
      0 16px 40px rgba(63, 85, 69, 0.06),
      inset 0 1px 0 rgba(255, 255, 255, 0.9);
  }
`;

export const CardDots = styled.div`
  position: absolute;
  top: 18px;
  right: 18px;
  display: inline-flex;
  gap: 4px;

  span {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: rgba(180, 209, 173, 0.88);
  }

  @media (max-width: 760px) {
    display: none;
  }
`;

export const CardBody = styled.div`
  display: grid;
  grid-template-columns: 98px 1fr;
  gap: 14px;
  align-items: center;

  @media (max-width: 760px) {
    grid-template-columns: 108px minmax(0, 1fr);
    gap: 16px;
    align-items: center;
    flex: 1;
  }
`;

export const CardIconDisc = styled.div`
  width: 98px;
  height: 98px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background:
    radial-gradient(
      circle at 50% 42%,
      rgba(255, 255, 255, 0.94),
      rgba(237, 244, 234, 0.96)
    ),
    linear-gradient(
      180deg,
      rgba(240, 247, 239, 0.88),
      rgba(228, 239, 226, 0.92)
    );
  border: 1px solid rgba(171, 201, 163, 0.38);
  box-shadow:
    inset 0 2px 6px rgba(255, 255, 255, 0.72),
    0 12px 24px rgba(90, 121, 96, 0.09);
  color: #2d7e46;

  svg {
    width: 48px;
    height: 48px;
    display: block;
  }

  @media (max-width: 760px) {
    width: 92px;
    height: 92px;
    box-shadow:
      inset 0 2px 8px rgba(255, 255, 255, 0.84),
      0 12px 26px rgba(90, 121, 96, 0.07);

    svg {
      width: 46px;
      height: 46px;
    }
  }
`;

export const CardCopy = styled.div`
  min-width: 0;
`;

export const CardTitle = styled.h3`
  margin: 0;
  color: #0a3f21;
  font-size: clamp(1.18rem, 1.45vw, 1.42rem);
  font-weight: 700;
  line-height: 1.12;

  @media (max-width: 760px) {
    font-size: 1.22rem;
    line-height: 1.1;
    letter-spacing: -0.03em;
  }
`;

export const CardAccent = styled.span`
  display: inline-flex;
  width: 28px;
  height: 3px;
  margin: 12px 0 12px;
  border-radius: 999px;
  background: linear-gradient(90deg, #67a95c, #2e7b46);

  @media (max-width: 760px) {
    width: 40px;
    margin: 10px 0 10px;
  }
`;

export const CardDescription = styled.p`
  margin: 0;
  color: #3d4b4e;
  font-size: 0.92rem;
  line-height: 1.42;

  @media (max-width: 760px) {
    max-width: 240px;
    font-size: 0.82rem;
    line-height: 1.48;
  }
`;

export const CardArrow = styled.div`
  display: none;

  @media (max-width: 760px) {
    flex: 0 0 auto;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(180deg, #f3f8ef 0%, #edf5e8 100%);
    color: #2f7f3b;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.84);

    svg {
      width: 18px;
      height: 18px;
      display: block;
    }
  }
`;
