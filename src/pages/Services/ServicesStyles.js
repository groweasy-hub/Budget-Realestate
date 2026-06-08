import styled, { css } from "styled-components";

const panel = css`
  background: rgba(255, 255, 255, 0.98);
  border: 1px solid rgba(27, 92, 51, 0.08);
  border-radius: 24px;
  box-shadow: 0 22px 56px rgba(34, 51, 40, 0.08);
`;

const ink = "#10211c";
const muted = "#63716b";
const borderColor = "rgba(24, 79, 43, 0.1)";
const green = "#126c38";

export const ServicesPageShell = styled.main`
  min-height: 100vh;
  background:
    radial-gradient(
      circle at 18% 8%,
      rgba(245, 222, 185, 0.55),
      transparent 24%
    ),
    radial-gradient(
      circle at 92% 6%,
      rgba(223, 241, 221, 0.9),
      transparent 28%
    ),
    linear-gradient(180deg, #fdfefc 0%, #f4f8f2 100%);
`;

export const ServicesInner = styled.div`
  width: min(1520px, calc(100% - 70px));
  margin: 0 auto;
  padding: 18px 0 36px;

  @media (max-width: 1100px) {
    width: min(100%, calc(100% - 24px));
    padding-bottom: 24px;
  }
`;

export const HeroSection = styled.section`
  position: relative;
  padding-top: 12px;
`;

export const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.92fr) minmax(500px, 1.08fr);
  gap: 26px;
  align-items: center;

  @media (max-width: 1180px) {
    grid-template-columns: 1fr;
  }
`;

export const HeroCopy = styled.div`
  padding: 22px 0 10px 30px;
`;

export const HeroBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  min-height: 48px;
  padding: 0 18px 0 14px;
  border-radius: 999px;
  background: linear-gradient(180deg, #eef7ef 0%, #e5f1e6 100%);
  color: ${green};
  font-size: 1rem;
  font-weight: 800;
  letter-spacing: 0.02em;

  svg {
    width: 18px;
    height: 18px;
  }
`;

export const HeroTitle = styled.h1`
  margin: 24px 0 0;
  color: ${ink};
  font-size: clamp(2.6rem, 4.2vw, 4rem);
  font-weight: 700;
  line-height: 1.04;
  letter-spacing: -0.04em;
`;

export const HeroAccent = styled.span`
  display: block;
  color: ${green};
`;

export const HeroDescription = styled.p`
  max-width: 520px;
  margin: 22px 0 0;
  color: #283630;
  font-size: 1.18rem;
  line-height: 1.6;
`;

export const HeroHighlights = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 28px;

  @media (max-width: 760px) {
    gap: 18px;
  }
`;

export const HighlightItem = styled.div`
  display: grid;
  grid-template-columns: 50px minmax(0, 1fr);
  gap: 12px;
  align-items: center;
  min-width: 218px;
`;

export const HighlightIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #eef7ef 0%, #e3f1e5 100%);
  color: ${green};

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const HighlightTitle = styled.div`
  color: #182720;
  font-size: 0.78rem;
  font-weight: 800;
  line-height: 1.25;
`;

export const HighlightText = styled.div`
  margin-top: 5px;
  color: ${muted};
  font-size: 0.82rem;
  line-height: 1.45;
`;

export const HeroVisual = styled.div`
  position: relative;
  min-height: 470px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 1180px) {
    min-height: 340px;
  }
`;

export const HeroGlow = styled.div`
  position: absolute;
  right: -10px;
  top: -30px;
  width: 560px;
  height: 560px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(210, 239, 209, 0.72) 0%,
    rgba(210, 239, 209, 0.28) 46%,
    rgba(210, 239, 209, 0) 74%
  );
`;

export const HeroImage = styled.img`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 820px;
  height: auto;
  display: block;
  object-fit: cover;
  filter: drop-shadow(0 34px 34px rgba(20, 30, 24, 0.14));
  mask-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.98) 12%,
    rgba(0, 0, 0, 1) 80%,
    rgba(0, 0, 0, 0) 100%
  );
`;

export const ShieldOrb = styled.div`
  position: absolute;
  right: 44px;
  top: 8px;
  z-index: 2;
  width: 182px;
  height: 182px;
  border-radius: 50%;
  background: radial-gradient(
    circle at center,
    rgba(255, 255, 255, 0.78) 0%,
    rgba(233, 246, 232, 0.44) 58%,
    rgba(233, 246, 232, 0) 78%
  );
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 760px) {
    right: 8px;
    width: 138px;
    height: 138px;
  }
`;

export const ShieldCard = styled.div`
  position: absolute;
  right: 8px;
  bottom: 112px;
  z-index: 3;
  ${panel};
  min-width: 148px;
  padding: 16px 18px;
  display: grid;
  gap: 4px;

  @media (max-width: 760px) {
    right: 0;
    bottom: 64px;
  }
`;

export const ShieldCardTitle = styled.div`
  color: ${green};
  font-size: 1rem;
  font-weight: 800;
`;

export const ShieldCardText = styled.div`
  color: #4d5b55;
  font-size: 0.92rem;
`;

export const JourneySection = styled.section`
  ${panel};
  margin-top: 6px;
  padding: 18px 22px 20px;
`;

export const JourneyTitle = styled.h2`
  margin: 0 0 18px;
  color: ${ink};
  font-size: 1.2rem;
  font-weight: 800;
`;

export const JourneyRow = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 0;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const JourneyStep = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 76px minmax(0, 1fr);
  gap: 16px;
  align-items: start;
  padding-right: 18px;

  &:not(:last-child)::after {
    content: "";
    position: absolute;
    left: calc(100% - 42px);
    top: 32px;
    width: calc(100% - 56px);
    border-top: 1px dashed rgba(21, 98, 49, 0.46);
  }

  &:not(:last-child)::before {
    content: "";
    position: absolute;
    left: calc(100% - 44px);
    top: 28px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #166e39;
  }

  @media (max-width: 1100px) {
    padding-right: 0;

    &::after,
    &::before {
      display: none;
    }
  }
`;

export const JourneyIcon = styled.div`
  width: 76px;
  height: 76px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #edf7ee 0%, #e4f1e6 100%);
  color: ${green};

  svg {
    width: 36px;
    height: 36px;
  }
`;

export const JourneyNumber = styled.div`
  color: ${green};
  font-size: 1.12rem;
  font-weight: 800;
`;

export const JourneyStepTitle = styled.div`
  margin-top: 2px;
  color: #18301f;
  font-size: 1rem;
  font-weight: 800;
  line-height: 1.3;
`;

export const JourneyText = styled.p`
  margin: 8px 0 0;
  color: ${muted};
  font-size: 0.9rem;
  line-height: 1.58;
`;

export const FeatureSection = styled.section`
  display: grid;
  grid-template-columns: 320px minmax(0, 1fr) 460px 300px;
  gap: 12px;
  margin-top: 14px;
  scroll-margin-top: 110px;

  @media (max-width: 1420px) {
    grid-template-columns: 280px minmax(0, 1fr) 420px;
  }

  @media (max-width: 1180px) {
    grid-template-columns: 1fr;
  }
`;

export const ImageCard = styled.div`
  ${panel};
  overflow: hidden;
  min-height: 266px;
`;

export const FeatureImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

export const DetailCard = styled.div`
  ${panel};
  padding: 18px 18px 18px;
`;

export const FeatureNumber = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #eef7ef 0%, #e4f1e6 100%);
  color: ${green};
  font-size: 1.08rem;
  font-weight: 800;
`;

export const DetailTitle = styled.h3`
  margin: 10px 0 0;
  color: ${ink};
  font-size: 0.98rem;
  font-weight: 800;
`;

export const DetailText = styled.p`
  margin: 8px 0 0;
  color: #45534d;
  font-size: 0.84rem;
  line-height: 1.48;
`;

export const BulletList = styled.div`
  display: grid;
  gap: 6px;
  margin-top: 12px;
`;

export const BulletItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #33413b;
  font-size: 0.83rem;

  svg {
    width: 16px;
    height: 16px;
    color: #6cab72;
    flex: 0 0 auto;
  }
`;

export const LearnMoreButton = styled.button`
  min-width: 122px;
  min-height: 36px;
  margin-top: 12px;
  padding: 0 14px;
  border-radius: 9px;
  background: linear-gradient(180deg, #116d37 0%, #0a592a 100%);
  color: #ffffff;
  font-size: 0.82rem;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  svg {
    width: 15px;
    height: 15px;
  }
`;

export const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const StatCard = styled.div`
  ${panel};
  min-height: 118px;
  padding: 16px 16px;
  display: grid;
  grid-template-columns: 48px minmax(0, 1fr);
  gap: 10px;
  align-items: start;
`;

export const StatIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #edf7ee 0%, #e4f1e6 100%);
  color: ${green};

  svg {
    width: 21px;
    height: 21px;
  }
`;

export const StatValue = styled.div`
  color: ${green};
  font-size: 0.98rem;
  font-weight: 800;
`;

export const StatHeading = styled.div`
  margin-top: 4px;
  color: #172620;
  font-size: 0.84rem;
  font-weight: 800;
`;

export const StatText = styled.div`
  margin-top: 3px;
  color: ${muted};
  font-size: 0.79rem;
  line-height: 1.3;
`;

export const SideVisualCard = styled.div`
  ${panel};
  position: relative;
  overflow: hidden;
  min-height: 266px;
`;

export const OverlayChecklist = styled.div`
  position: absolute;
  right: 18px;
  bottom: 18px;
  width: 136px;
  padding: 14px 12px;
  border-radius: 16px;
  background: rgba(255, 247, 241, 0.94);
  border: 1px solid rgba(200, 181, 160, 0.22);
  box-shadow: 0 18px 28px rgba(51, 44, 39, 0.12);
  transform: rotate(-2deg);
`;

export const ChecklistHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 10px;
  color: ${green};
  font-size: 0.9rem;
  font-weight: 800;
`;

export const ChecklistList = styled.div`
  display: grid;
  gap: 8px;
`;

export const ChecklistItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #405048;
  font-size: 0.82rem;

  svg {
    width: 12px;
    height: 12px;
    color: #5ea96d;
    flex: 0 0 auto;
  }
`;

export const CompareSection = styled.section`
  ${panel};
  margin-top: 16px;
  padding: 0;
  overflow: hidden;
`;

export const CompareGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.02fr) minmax(0, 1fr);
  gap: 0;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

export const CompareCard = styled.div`
  padding: 0;
  border-right: ${({ $withBorder }) =>
    $withBorder ? `1px solid ${borderColor}` : "0"};

  @media (max-width: 1100px) {
    border-right: 0;
    border-bottom: ${({ $withBorder }) =>
      $withBorder ? `1px solid ${borderColor}` : "0"};
  }
`;

export const CompareTitle = styled.h3`
  margin: 0;
  padding: 16px 22px 10px;
  color: ${ink};
  font-size: 1.12rem;
  font-weight: 800;
`;

export const CompareTableWrap = styled.div`
  position: relative;
  padding: 0 22px 18px;
`;

export const CompareTable = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow: hidden;
  border-radius: 18px;
  border: 1px solid rgba(24, 79, 43, 0.08);
`;

export const CompareColumn = styled.div`
  background: ${({ $greenColumn }) => ($greenColumn ? "#f6fbf6" : "#ffffff")};
`;

export const CompareHeader = styled.div`
  min-height: 40px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  gap: 10px;
  background: ${({ $greenColumn }) =>
    $greenColumn
      ? "linear-gradient(180deg, #0f6a35 0%, #0a592a 100%)"
      : "#eef3ef"};
  color: ${({ $greenColumn }) => ($greenColumn ? "#ffffff" : "#17261f")};
  font-size: 0.9rem;
  font-weight: 800;

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const CompareList = styled.div`
  display: grid;
  gap: 10px;
  padding: 12px 16px 14px;
`;

export const CompareItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #33423c;
  font-size: 0.9rem;
  line-height: 1.4;

  svg {
    width: 15px;
    height: 15px;
    color: ${({ $success }) => ($success ? "#18713a" : "#e24f48")};
    flex: 0 0 auto;
  }
`;

export const VsBubble = styled.div`
  position: absolute;
  left: 50%;
  top: 84px;
  transform: translateX(-50%);
  width: 52px;
  height: 52px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border: 1px solid rgba(24, 79, 43, 0.08);
  box-shadow: 0 12px 24px rgba(34, 51, 40, 0.12);
  color: ${ink};
  font-size: 1rem;
  font-weight: 800;
`;

export const ReasonsPanel = styled.div`
  padding: 16px 22px 18px;
`;

export const ReasonsTitle = styled.h3`
  margin: 0;
  color: ${ink};
  font-size: 1.12rem;
  font-weight: 800;
`;

export const ReasonsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px 24px;
  margin-top: 16px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const ReasonItem = styled.div`
  display: grid;
  grid-template-columns: 52px minmax(0, 1fr);
  gap: 14px;
  align-items: start;
`;

export const ReasonIcon = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #edf7ee 0%, #e4f1e6 100%);
  color: ${green};

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const ReasonTitle = styled.div`
  color: #172620;
  font-size: 0.98rem;
  font-weight: 800;
`;

export const ReasonText = styled.p`
  margin: 6px 0 0;
  color: ${muted};
  font-size: 0.9rem;
  line-height: 1.55;
`;

export const CtaSection = styled.section`
  margin-top: 16px;
  border-radius: 22px;
  overflow: hidden;
  background:
    radial-gradient(circle at 12% 50%, rgba(27, 123, 61, 0.3), transparent 20%),
    radial-gradient(
      circle at 78% 50%,
      rgba(95, 174, 120, 0.32),
      transparent 24%
    ),
    linear-gradient(90deg, #0b6b34 0%, #095328 70%, #0b6b34 100%);
  box-shadow: 0 22px 42px rgba(11, 75, 36, 0.18);
`;

export const CtaGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.94fr) auto 270px;
  gap: 22px;
  align-items: center;
  min-height: 128px;
  padding: 20px 26px;

  @media (max-width: 1180px) {
    grid-template-columns: 1fr;
  }
`;

export const CtaPrimary = styled.div`
  display: grid;
  grid-template-columns: 68px minmax(0, 1fr);
  gap: 16px;
  align-items: center;
  color: #ffffff;
`;

export const CtaIcon = styled.div`
  width: 68px;
  height: 68px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.12);
  color: #ffffff;

  svg {
    width: 30px;
    height: 30px;
  }
`;

export const CtaTitle = styled.h3`
  margin: 0;
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: 800;
`;

export const CtaText = styled.p`
  margin: 6px 0 0;
  color: rgba(241, 247, 242, 0.9);
  font-size: 0.92rem;
  line-height: 1.5;
`;

export const CtaFeatures = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;

  @media (max-width: 1180px) {
    flex-wrap: wrap;
  }
`;

export const CtaFeature = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: #ffffff;
  font-size: 0.92rem;
  line-height: 1.4;

  svg {
    width: 18px;
    height: 18px;
    flex: 0 0 auto;
  }
`;

export const CtaDivider = styled.div`
  width: 1px;
  align-self: stretch;
  background: rgba(221, 239, 224, 0.2);

  @media (max-width: 1180px) {
    display: none;
  }
`;

export const CtaButton = styled.button`
  min-width: 250px;
  min-height: 58px;
  padding: 0 20px;
  border-radius: 12px;
  background: linear-gradient(180deg, #ffffff 0%, #f3f8f3 100%);
  color: #18301f;
  font-size: 0.98rem;
  font-weight: 800;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  cursor: pointer;

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const CtaVisual = styled.div`
  align-self: end;
`;

export const CtaImage = styled.img`
  width: 100%;
  max-width: 270px;
  height: auto;
  display: block;
  object-fit: contain;
`;
