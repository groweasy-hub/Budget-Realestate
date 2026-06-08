import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  padding: 18px 0 10px;
  overflow: hidden;

  @media (max-width: 980px) {
    padding: 10px 0 0;
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
  }
`;

export const HeaderCopy = styled.div`
  text-align: center;
  max-width: 640px;
  padding: 5px 0 40px 150px;
`;

export const KickerRow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 18px;
  margin-bottom: 24px;
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
`;

export const Kicker = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 0.03em;
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

export const HeroWrap = styled.div`
  position: relative;
  min-height: 360px;

  @media (max-width: 1180px) {
    min-height: 300px;
  }

  @media (max-width: 760px) {
    min-height: 240px;
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
    min-height: 240px;
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
    width: 100%;
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
    gap: 12px;
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
    min-height: auto;
    padding: 18px 16px;
    border-radius: 18px;
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
`;

export const CardBody = styled.div`
  display: grid;
  grid-template-columns: 98px 1fr;
  gap: 14px;
  align-items: center;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    gap: 14px;
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
    width: 90px;
    height: 90px;

    svg {
      width: 42px;
      height: 42px;
    }
  }
`;

export const CardCopy = styled.div`
  p {
    margin: 0;
    color: #3d4b4e;
    font-size: 0.92rem;
    line-height: 1.42;
  }
`;

export const CardTitle = styled.h3`
  margin: 0;
  color: #0a3f21;
  font-size: clamp(1.18rem, 1.45vw, 1.42rem);
  font-weight: 700;
  line-height: 1.12;
`;

export const CardAccent = styled.span`
  display: inline-flex;
  width: 28px;
  height: 3px;
  margin: 12px 0 12px;
  border-radius: 999px;
  background: linear-gradient(90deg, #67a95c, #2e7b46);
`;
