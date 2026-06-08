import { Link } from "react-router-dom";
import styled from "styled-components";

const heroImage = `${process.env.PUBLIC_URL}/Images/home-hero-bg.jpg`;

export const HeroShell = styled.section`
  position: relative;
  min-height: 100vh;
  height: 100vh;
  overflow: hidden;
  padding: 112px 82px 58px;
  background: #eff5ef;
  display: flex;
  align-items: stretch;

  @media (max-width: 1280px) {
    padding: 104px 42px 46px;
  }

  @media (max-width: 900px) {
    padding: 92px 18px 28px;
  }
`;

export const HeroBackground = styled.div`
  position: absolute;
  inset: 0;
  background: url(${heroImage}) center center / cover no-repeat;
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
  max-width: 1520px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 980px) 316px;
  justify-content: space-between;
  gap: 42px;
  align-items: start;

  @media (max-width: 1200px) {
    grid-template-columns: minmax(0, 1fr) 300px;
    gap: 24px;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

export const HeroCopy = styled.div`
  max-width: 980px;
  padding-top: 52px;

  @media (max-width: 1200px) {
    padding-top: 42px;
  }

  @media (max-width: 900px) {
    padding-top: 24px;
  }
`;

export const HeroMark = styled.div`
  width: 128px;
  margin: 15px 460px -15px auto;
  color: #2d7a45;

  svg {
    display: block;
    width: 100%;
    height: auto;
  }

  @media (max-width: 1200px) {
    width: 154px;
    margin-right: 40px;
  }

  @media (max-width: 900px) {
    width: 128px;
    margin: 0 0 12px auto;
  }
`;

export const HeroTitle = styled.h1`
  margin: 0;
  font-family: "Poppins", sans-serif;
  font-size: 42px;
  line-height: 0.98;
  font-weight: 600;
  letter-spacing: -0.048em;
  color: #0f1f24;
`;

export const TitleLine = styled.span`
  display: block;
  color: ${(props) => (props.$accent ? "#2d7a45" : "#0f1f24")};

  & + & {
    margin-top: 8px;
  }
`;

export const HeroSubtitle = styled.div`
  margin-top: 26px;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  line-height: 1.52;
  color: #3c4d54;
`;

export const SubtitleLine = styled.span`
  display: block;
`;

export const AccentWord = styled.span`
  color: #2d7a45;
`;

export const HeroTabs = styled.div`
  width: min(700px, 100%);
  margin-top: 34px;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
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
  background: rgba(255, 255, 255, 0.92);
  box-shadow: 0 18px 38px rgba(72, 91, 72, 0.1);
  backdrop-filter: blur(8px);
`;

export const HeroTabIconWrap = styled.span`
  width: 28px;
  height: 28px;
  flex: 0 0 28px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #2d7a45;
  background: ${(props) => (props.$active ? "#eef5e7" : "transparent")};

  svg {
    display: block;
    width: 17px;
    height: 17px;
  }
`;

export const HeroTabLabel = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.02em;
`;

export const HeroTabMarker = styled.span`
  position: absolute;
  left: 14px;
  right: 14px;
  bottom: -5px;
  height: 5px;
  border-radius: 999px;
  background: #63b04c;
`;

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

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
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

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    gap: 10px;
    padding: 12px;
  }
`;

export const SearchField = styled.div`
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 8px;
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
`;

export const SearchFieldCopy = styled.div`
  min-width: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const SearchFieldLabel = styled.span`
  font-family: "Inter", sans-serif;
  font-size: 11px;
  line-height: 1.1;
  color: #67747b;
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
  color: #46535a;
  cursor: pointer;
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
  color: #46535a;
  cursor: pointer;
`;

export const SearchBudgetDivider = styled.span`
  font-family: "Inter", sans-serif;
  font-size: 12px;
  line-height: 1;
  color: #6f7c83;
`;

export const SearchChevron = styled.span`
  margin-left: auto;
  color: #4f5d65;
  pointer-events: none;

  svg {
    display: block;
    width: 13px;
    height: 13px;
  }
`;

export const SearchDivider = styled.span`
  width: 1px;
  height: 26px;
  background: rgba(28, 67, 53, 0.14);

  @media (max-width: 760px) {
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
`;

export const ServicesCard = styled.aside`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 316px;
  margin-top: 108px;
  padding: 22px 18px 18px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.93);
  box-shadow: 0 32px 66px rgba(72, 88, 69, 0.15);
  backdrop-filter: blur(10px);

  @media (max-width: 900px) {
    max-width: none;
    margin-top: 0;
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

export const LeftBadge = styled.div`
  position: absolute;
  left: 82px;
  bottom: 52px;
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

  @media (max-width: 900px) {
    position: relative;
    left: auto;
    bottom: auto;
    width: 100%;
    margin-top: 18px;
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
    width: 18px;
    height: 18px;
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
`;

export const BadgeText = styled.span`
  font-family: "Inter", sans-serif;
  font-size: 11px;
  line-height: 1.3;
  color: #3b4a4f;
`;

export const RightBadge = styled.div`
  position: absolute;
  right: 82px;
  bottom: 50px;
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

  @media (max-width: 900px) {
    position: relative;
    right: auto;
    bottom: auto;
    width: 100%;
    margin-top: 14px;
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
`;

export const RightBadgeHouse = styled.span`
  justify-self: end;
  color: #a7c76b;

  svg {
    display: block;
    width: 46px;
    height: 46px;
  }
`;
