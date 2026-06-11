import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  padding: 80px 0 20px;

  &::before {
    content: "";
    position: absolute;
    top: -52px;
    left: 50%;
    width: min(1120px, 92vw);
    height: 240px;
    transform: translateX(-50%);
    background: #ffffff;
    filter: blur(22px);
    pointer-events: none;
    z-index: 0;
  }
`;

export const Inner = styled.div`
  position: relative;
  z-index: 1;
`;

export const Header = styled.div`
  max-width: 1020px;
  margin: 0 auto 34px;
  text-align: center;
`;

export const KickerRow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 18px;
`;

export const KickerLine = styled.span`
  width: 46px;
  height: 2px;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.secondary};
`;

export const KickerText = styled.span`
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

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
  max-width: 1120px;
  margin: 0 auto;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 720px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 14px;
  }
`;

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  padding: 10px 10px 12px;
  background: rgba(255, 255, 255, 0.94);
  border: 1px solid rgba(23, 51, 40, 0.08);
  border-radius: 18px;
  box-shadow:
    0 6px 16px rgba(33, 48, 41, 0.05),
    0 16px 32px rgba(33, 48, 41, 0.07);
  min-height: 100%;

  @media (max-width: 720px) {
    ${({ $mobileAuction }) =>
      $mobileAuction
        ? `
      grid-column: 1 / -1;
      flex-direction: row;
      align-items: stretch;
      gap: 12px;
      padding: 8px;
      border-radius: 18px;
    `
        : ""}
  }
`;

export const Media = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 14px;
  aspect-ratio: 1.5 / 1;
  background: #edf3eb;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.68);

  @media (max-width: 720px) {
    ${({ $mobileAuction }) =>
      $mobileAuction
        ? `
      width: 48%;
      flex: 0 0 48%;
      aspect-ratio: auto;
      min-height: 150px;
      border-radius: 16px;
    `
        : ""}
  }
`;

export const MediaImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const MediaArt = styled.div`
  width: 100%;
  height: 100%;

  svg {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export const IconBadge = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  z-index: 1;
  display: ${({ $mobileAuction }) => ($mobileAuction ? "none" : "inline-flex")};
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 14px;
  background: linear-gradient(180deg, #2f982d 0%, #207129 100%);
  border: 2px solid rgba(255, 255, 255, 0.92);
  box-shadow: 0 10px 18px rgba(25, 86, 43, 0.22);
  color: #ffffff;

  svg {
    width: 18px;
    height: 18px;
    display: block;
  }

  @media (max-width: 720px) {
    ${({ $mobileAuction }) =>
      $mobileAuction
        ? `
      display: inline-flex;
      width: 52px;
      height: 52px;
      border-radius: 18px;
      border-width: 3px;
      box-shadow: 0 10px 18px rgba(25, 86, 43, 0.18);

      svg {
        width: 22px;
        height: 22px;
      }
    `
        : ""}
  }
`;

export const CardBody = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 12px 4px 0;

  @media (max-width: 720px) {
    ${({ $mobileAuction }) =>
      $mobileAuction
        ? `
      justify-content: center;
      padding: 10px 8px 10px 0;
    `
        : ""}
  }
`;

export const CardTitle = styled.h3`
  margin: 0;
  color: #111a19;
  font-family: "Poppins", sans-serif;
  font-size: clamp(1.05rem, 1.1vw, 1.25rem);
  line-height: 1.12;
  letter-spacing: -0.04em;

  @media (max-width: 720px) {
    ${({ $mobileAuction }) =>
      $mobileAuction
        ? `
      font-size: 1.05rem;
      line-height: 1.08;
      letter-spacing: -0.03em;
    `
        : ""}
  }
`;

export const CardDescription = styled.p`
  margin: 8px 0 0;
  color: #4f6170;
  font-size: 0.88rem;
  line-height: 1.45;

  @media (max-width: 720px) {
    ${({ $mobileAuction }) =>
      $mobileAuction
        ? `
      margin-top: 10px;
      font-size: 0.82rem;
      line-height: 1.35;
      max-width: 230px;
    `
        : ""}
  }
`;

export const CountPill = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  min-height: 38px;
  width: 100%;
  margin-top: 14px;
  padding: 9px 11px;
  border-radius: 12px;
  background: linear-gradient(180deg, #fafcf9 0%, #f3f6f1 100%);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.9),
    0 6px 18px rgba(31, 48, 41, 0.06);

  @media (max-width: 720px) {
    ${({ $mobileAuction }) =>
      $mobileAuction
        ? `
      min-height: 0;
      margin-top: 12px;
      padding: 0;
      gap: 8px;
      background: transparent;
      box-shadow: none;
      border-radius: 0;
      width: auto;
    `
        : ""}
  }
`;

export const CountIconWrap = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: ${({ theme }) => theme.colors.secondary};
  flex: 0 0 auto;

  svg {
    display: block;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 720px) {
    ${({ $mobileAuction }) =>
      $mobileAuction
        ? `
      width: 22px;
      height: 22px;
    `
        : ""}
  }
`;

export const CountValue = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.86rem;
  font-weight: 700;

  @media (max-width: 720px) {
    ${({ $mobileAuction }) =>
      $mobileAuction
        ? `
      font-size: 0.95rem;
      font-weight: 800;
    `
        : ""}
  }
`;

export const CountLabel = styled.span`
  color: #20312b;
  font-size: 0.86rem;
  font-weight: 500;

  @media (max-width: 720px) {
    ${({ $mobileAuction }) =>
      $mobileAuction
        ? `
      font-size: 0.95rem;
      font-weight: 500;
    `
        : ""}
  }
`;
