import styled, { css } from "styled-components";

const panel = css`
  background: rgba(255, 255, 255, 0.98);
  border: 1px solid rgba(23, 84, 47, 0.08);
  border-radius: 24px;
  box-shadow: 0 18px 42px rgba(33, 54, 40, 0.08);
`;

const ink = "#10211c";
const green = "#126c38";
const muted = "#63716b";
const borderColor = "rgba(24, 79, 43, 0.11)";

export const ContactPageShell = styled.main`
  min-height: 100vh;
  background:
    radial-gradient(
      circle at 12% 7%,
      rgba(246, 226, 188, 0.5),
      transparent 22%
    ),
    radial-gradient(
      circle at 88% 7%,
      rgba(224, 243, 223, 0.88),
      transparent 26%
    ),
    linear-gradient(180deg, #fefefd 0%, #f4f8f2 100%);

  @media (max-width: 640px) {
    background: #ffffff;
  }
`;

export const ContactInner = styled.div`
  width: min(1500px, calc(100% - 74px));
  margin: 0 auto;
  padding: 14px 0 36px;

  @media (max-width: 1180px) {
    width: min(100%, calc(100% - 24px));
  }

  @media (max-width: 640px) {
    width: min(100%, calc(100% - 16px));
    display: none;
  }
`;

export const MobileContactReplica = styled.div`
  display: none;

  @media (max-width: 640px) {
    display: block;
    min-height: 100vh;
    padding-bottom: 24px;
    background: #ffffff;
    color: #0d1424;
  }
`;

export const MobileHero = styled.section`
  position: relative;
  overflow: hidden;
  min-height: 190px;
  padding: 96px 24px 16px;
  background:
    radial-gradient(circle at 0% 0%, rgba(223, 240, 226, 0.94) 0, transparent 36%),
    radial-gradient(circle at 78% 46%, rgba(231, 244, 233, 0.9) 0, transparent 43%),
    linear-gradient(180deg, #f8fbf8 0%, #f1f8f2 100%);
`;

export const MobileHeroBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 9px;
  min-height: 23px;
  padding: 0 13px 0 10px;
  border-radius: 999px;
  background: rgba(226, 242, 229, 0.95);
  color: #087132;
  font-size: 9px;
  font-weight: 900;
  line-height: 1;
  letter-spacing: 0;

  svg {
    width: 12px;
    height: 12px;
  }
`;

export const MobileHeroTitle = styled.h1`
  position: relative;
  z-index: 2;
  max-width: 172px;
  margin: 13px 0 0;
  color: #101625;
  font-size: 25px;
  font-weight: 900;
  line-height: 1.15;
  letter-spacing: 0;

  span {
    color: #087132;
  }
`;

export const MobileHeroText = styled.p`
  position: relative;
  z-index: 2;
  max-width: 172px;
  margin: 10px 0 0;
  color: #111827;
  font-size: 11px;
  font-weight: 500;
  line-height: 1.62;
`;

export const MobileHeroVisual = styled.div`
  position: absolute;
  right: -5px;
  top: 99px;
  width: 222px;
  height: 155px;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    right: 1px;
    top: -9px;
    width: 202px;
    height: 202px;
    border: 1px dashed rgba(98, 164, 113, 0.32);
    border-radius: 50%;
  }
`;

export const MobileHeroHouse = styled.img`
  position: absolute;
  right: 3px;
  bottom: -4px;
  width: 184px;
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 14px 16px rgba(38, 50, 42, 0.18));
`;

export const MobileOrbitIcon = styled.div`
  position: absolute;
  width: ${({ $size }) => $size || 37}px;
  height: ${({ $size }) => $size || 37}px;
  left: ${({ $left }) => $left};
  top: ${({ $top }) => $top};
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(231, 243, 232, 0.94);
  color: #087132;

  svg {
    width: ${({ $icon }) => $icon || 18}px;
    height: ${({ $icon }) => $icon || 18}px;
  }
`;

export const MobileContent = styled.div`
  padding: 18px 22px 0;
`;

export const MobileSectionTitle = styled.h2`
  margin: 0 0 13px;
  color: #0d1424;
  font-size: 14px;
  font-weight: 900;
  line-height: 1.2;
  letter-spacing: 0;
`;

export const MobileInfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px 10px;
  margin-bottom: 20px;
`;

export const MobileInfoCard = styled.div`
  min-height: 87px;
  border: 1px solid rgba(22, 42, 32, 0.06);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0 7px 18px rgba(27, 38, 32, 0.08);
  display: grid;
  grid-template-columns: 38px minmax(0, 1fr);
  gap: 10px;
  align-items: start;
  padding: 12px 10px;
`;

export const MobileInfoIcon = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #edf6ee;
  color: #087132;

  svg {
    width: 22px;
    height: 22px;
  }
`;

export const MobileInfoTitle = styled.h3`
  margin: 2px 0 6px;
  color: #0d1424;
  font-size: 11px;
  font-weight: 900;
  line-height: 1.2;
`;

export const MobileInfoText = styled.p`
  margin: 0;
  color: #111827;
  font-size: 9px;
  font-weight: 500;
  line-height: 1.55;
`;

export const MobileInlineLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
  color: #087132;
  font-size: 9px;
  font-weight: 900;
  text-decoration: none;

  svg {
    width: 11px;
    height: 11px;
  }
`;

export const MobileForm = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px 9px;
`;

export const MobileField = styled.label`
  position: relative;
  min-height: 29px;
  border: 1px solid rgba(102, 116, 138, 0.22);
  border-radius: 5px;
  background: #ffffff;
  display: flex;
  align-items: center;
  padding: 0 10px 0 29px;
  color: #667085;

  svg {
    position: absolute;
    left: 10px;
    top: 50%;
    width: 12px;
    height: 12px;
    transform: translateY(-50%);
  }
`;

export const MobileInput = styled.input`
  width: 100%;
  border: 0;
  outline: 0;
  background: transparent;
  color: #111827;
  font-size: 9px;
  font-weight: 500;

  &::placeholder {
    color: #667085;
    opacity: 1;
  }
`;

export const MobileSelectLabel = styled(MobileField)`
  select {
    width: 100%;
    border: 0;
    outline: 0;
    appearance: none;
    background: transparent;
    color: #667085;
    font-size: 9px;
    font-weight: 500;
  }

  span {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
  }

  span svg {
    position: static;
    width: 11px;
    height: 11px;
    transform: none;
  }
`;

export const MobileWide = styled.div`
  grid-column: 1 / -1;
`;

export const MobileMessageField = styled.label`
  position: relative;
  min-height: 55px;
  border: 1px solid rgba(102, 116, 138, 0.22);
  border-radius: 5px;
  background: #ffffff;
  display: block;
  padding: 10px 10px 8px 29px;
  color: #667085;

  svg {
    position: absolute;
    left: 10px;
    top: 13px;
    width: 12px;
    height: 12px;
  }
`;

export const MobileMessageLabel = styled.div`
  color: #667085;
  font-size: 9px;
  font-weight: 500;
  line-height: 1;
`;

export const MobileTextarea = styled.textarea`
  width: 100%;
  min-height: 27px;
  margin-top: 6px;
  border: 0;
  outline: 0;
  resize: none;
  background: transparent;
  color: #111827;
  font-size: 9px;
  font-weight: 500;
  line-height: 1.3;

  &::placeholder {
    color: #667085;
    opacity: 1;
  }
`;

export const MobileSubmit = styled.button`
  grid-column: 1 / -1;
  height: 29px;
  margin-top: 2px;
  border-radius: 5px;
  background: linear-gradient(90deg, #087132 0%, #05722f 50%, #087132 100%);
  color: #ffffff;
  font-size: 10px;
  font-weight: 900;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  box-shadow: 0 8px 16px rgba(8, 113, 50, 0.17);

  svg {
    width: 15px;
    height: 15px;
  }
`;

export const MobileMap = styled.div`
  position: relative;
  height: 109px;
  overflow: hidden;
  border-radius: 6px;
  background:
    linear-gradient(33deg, transparent 0 46%, rgba(255, 255, 255, 0.95) 47% 49%, transparent 50%),
    linear-gradient(146deg, transparent 0 45%, rgba(255, 255, 255, 0.95) 46% 48%, transparent 49%),
    linear-gradient(77deg, transparent 0 48%, rgba(255, 255, 255, 0.95) 49% 51%, transparent 52%),
    repeating-linear-gradient(12deg, rgba(255,255,255,0.72) 0 2px, transparent 2px 18px),
    repeating-linear-gradient(96deg, rgba(255,255,255,0.72) 0 2px, transparent 2px 21px),
    linear-gradient(135deg, #f3f0ea 0%, #eef4eb 48%, #f5efe8 100%);
  box-shadow: inset 0 0 0 1px rgba(12, 35, 23, 0.04);
`;

export const MobileMapPin = styled.div`
  position: absolute;
  left: 47%;
  top: 14px;
  width: 28px;
  height: 36px;
  border-radius: 50% 50% 50% 0;
  transform: rotate(-45deg);
  background: #087132;
  box-shadow: 0 8px 12px rgba(8, 113, 50, 0.24);

  &::after {
    content: "";
    position: absolute;
    inset: 8px;
    border-radius: 3px;
    background: #ffffff;
    clip-path: polygon(50% 0, 91% 31%, 91% 100%, 61% 100%, 61% 65%, 39% 65%, 39% 100%, 9% 100%, 9% 31%);
    transform: rotate(45deg);
  }
`;

export const MobileMapCard = styled.div`
  position: absolute;
  left: 9px;
  bottom: 7px;
  width: 142px;
  min-height: 68px;
  padding: 13px 12px 10px;
  border-radius: 7px;
  background: rgba(255, 255, 255, 0.96);
  box-shadow: 0 8px 18px rgba(28, 42, 34, 0.12);
`;

export const MobileMapTitle = styled.h3`
  margin: 0;
  color: #0d1424;
  font-size: 10px;
  font-weight: 900;
`;

export const MobileMapText = styled.p`
  margin: 8px 0 0;
  color: #111827;
  font-size: 9px;
  font-weight: 500;
`;

export const MobileBottomHelp = styled.div`
  display: grid;
  grid-template-columns: 42px minmax(0, 1fr) auto;
  gap: 12px;
  align-items: center;
  min-height: 54px;
  margin-top: 16px;
  padding: 10px 9px 10px 14px;
  border-radius: 8px;
  background: linear-gradient(90deg, #eef7ef 0%, #f8fbf8 100%);
`;

export const MobileBottomText = styled.div`
  h3 {
    margin: 0;
    color: #0d1424;
    font-size: 11px;
    font-weight: 900;
  }

  p {
    margin: 5px 0 0;
    color: #111827;
    font-size: 9px;
    font-weight: 500;
  }
`;

export const MobileWhatsappButton = styled.a`
  justify-self: end;
  min-width: 132px;
  height: 32px;
  border: 1px solid rgba(8, 113, 50, 0.74);
  border-radius: 6px;
  color: #087132;
  text-decoration: none;
  font-size: 10px;
  font-weight: 900;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  svg {
    width: 14px;
    height: 14px;
  }
`;

export const HeroSection = styled.section`
  position: relative;
  padding-top: 8px;
`;

export const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(440px, 0.84fr) minmax(0, 1.16fr);
  gap: 10px;
  align-items: center;

  @media (max-width: 1180px) {
    grid-template-columns: 1fr;
  }
`;

export const HeroCopy = styled.div`
  padding: 12px 0 0 10px;

  @media (max-width: 760px) {
    padding: 10px 0 0;
  }
`;

export const HeroBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  min-height: 42px;
  padding: 0 16px 0 14px;
  border-radius: 999px;
  background: linear-gradient(180deg, #eff7ef 0%, #e5f1e6 100%);
  color: ${green};
  font-size: 0.88rem;
  font-weight: 800;
  letter-spacing: 0.01em;

  svg {
    width: 17px;
    height: 17px;
  }
`;

export const HeroTitle = styled.h1`
  margin: 24px 0 0;
  color: #0f6b34;
  font-size: clamp(2.6rem, 4.2vw, 4rem);
  font-weight: 700;
  line-height: 1.04;
  letter-spacing: -0.04em;
`;

export const HeroAccent = styled.span`
  color: ${green};
`;

export const HeroParagraph = styled.p`
  max-width: 520px;
  color: #4b5c5f;
  max-width: 880px;
  margin: 20px auto 0;
  font-size: clamp(1rem, 1.7vw, 1.18rem);
  line-height: 1.65;
`;

export const HeroHighlights = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 18px 28px;
  margin-top: 26px;
`;

export const HighlightItem = styled.div`
  display: grid;
  grid-template-columns: 44px minmax(0, 1fr);
  gap: 10px;
  align-items: start;
  min-width: 146px;
`;

export const HighlightIcon = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #eef7ef 0%, #e4f1e6 100%);
  color: ${green};
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.85);

  svg {
    width: 22px;
    height: 22px;
  }
`;

export const HighlightTitle = styled.div`
  color: #172620;
  font-size: 0.9rem;
  font-weight: 800;
  line-height: 1.25;
`;

export const HighlightText = styled.div`
  margin-top: 4px;
  color: ${muted};
  font-size: 0.83rem;
  line-height: 1.48;
`;

export const HeroVisual = styled.div`
  position: relative;
  min-height: 520px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 1180px) {
    min-height: 360px;
  }

  @media (max-width: 640px) {
    min-height: 240px;
  }
`;

export const HeroGlow = styled.div`
  position: absolute;
  inset: 0 0 30px auto;
  width: 930px;
  border-radius: 50%;
  background: radial-gradient(
    circle at 68% 38%,
    rgba(218, 241, 216, 0.86) 0%,
    rgba(218, 241, 216, 0.38) 34%,
    rgba(218, 241, 216, 0) 72%
  );
`;

export const HeroImage = styled.img`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 880px;
  display: block;
  object-fit: contain;
  filter: drop-shadow(0 30px 38px rgba(24, 38, 29, 0.13));
`;

export const FloatingCards = styled.div`
  position: absolute;
  right: 6px;
  top: 62px;
  z-index: 2;
  display: grid;
  gap: 16px;

  @media (max-width: 760px) {
    position: static;
    margin-top: 16px;
  }
`;

export const FloatingCard = styled.div`
  ${panel};
  min-width: 188px;
  min-height: 86px;
  padding: 14px 18px;
  display: grid;
  grid-template-columns: 44px minmax(0, 1fr);
  gap: 12px;
  align-items: center;
`;

export const FloatingIcon = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #eef7ef 0%, #e4f1e6 100%);
  color: ${green};

  svg {
    width: 22px;
    height: 22px;
  }
`;

export const FloatingTitle = styled.div`
  color: #182620;
  font-size: 0.98rem;
  font-weight: 800;
  line-height: 1.2;
`;

export const FloatingText = styled.div`
  margin-top: 4px;
  color: #31413b;
  font-size: 0.86rem;
`;

export const ActionsGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  margin-top: 8px;

  @media (max-width: 1180px) {
    grid-template-columns: 1fr;
  }
`;

export const ActionCard = styled.div`
  ${panel};
  position: relative;
  min-height: 248px;
  padding: 22px 18px 16px;
  overflow: hidden;
`;

export const ActionHeader = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const ActionIcon = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #eef7ef 0%, #e4f1e6 100%);
  color: ${green};

  svg {
    width: 25px;
    height: 25px;
  }
`;

export const ActionTitle = styled.h2`
  max-width: 190px;
  margin: 0;
  color: ${ink};
  font-size: 1.02rem;
  font-weight: 800;
  line-height: 1.17;
`;

export const ActionText = styled.p`
  max-width: 326px;
  margin: 12px 0 0;
  color: #44524c;
  font-size: 0.89rem;
  line-height: 1.56;
  position: relative;
  z-index: 1;
`;

export const ActionButton = styled.button`
  min-height: 40px;
  width: 138px;
  margin-top: 16px;
  padding: 0 14px;
  border-radius: 8px;
  background: linear-gradient(180deg, #116d37 0%, #0a592a 100%);
  color: #ffffff;
  font-size: 0.84rem;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  white-space: nowrap;
  position: relative;
  z-index: 1;
  cursor: pointer;
  box-shadow: 0 14px 26px rgba(10, 89, 42, 0.16);
`;

export const ActionIllustration = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -32%);
  opacity: 0.08;
  color: #44524c;
  display: column;
  align-items: end;
  justify-content: end;
  pointer-events: none;

  svg {
    width: 132px;
    height: 132px;
  }
`;

export const FormSection = styled.section`
  ${panel};
  display: grid;
  grid-template-columns: minmax(0, 1.6fr) minmax(300px, 0.84fr);
  margin-top: 18px;
  overflow: hidden;

  @media (max-width: 1180px) {
    grid-template-columns: 1fr;
  }
`;

export const FormPanel = styled.div`
  padding: 22px 24px 22px;

  @media (max-width: 760px) {
    padding: 18px 16px;
  }
`;

export const SectionTitle = styled.h2`
  margin: 0;
  color: ${ink};
  font-size: 1.16rem;
  font-weight: 800;
  line-height: 1.25;
`;

export const SectionUnderline = styled.div`
  width: 24px;
  height: 3px;
  border-radius: 999px;
  margin-top: 10px;
  background: linear-gradient(90deg, #126c38 0%, #7db88c 100%);
`;

export const SectionText = styled.p`
  max-width: 400px;
  margin: 10px 0 0;
  color: #55635d;
  font-size: 0.9rem;
  line-height: 1.58;
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) 142px;
  gap: 12px 14px;
  margin-top: 20px;
  align-items: start;

  @media (max-width: 1180px) {
    grid-template-columns: 1fr;
  }
`;

export const InputWrap = styled.div`
  position: relative;
  min-height: 42px;
  border-radius: 8px;
  border: 1px solid ${borderColor};
  background: #ffffff;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 12px;
`;

export const Input = styled.input`
  width: 100%;
  border: 0;
  outline: none;
  background: transparent;
  color: #24332c;
  font-size: 0.84rem;

  &::placeholder {
    color: #7c8882;
  }
`;

export const InputIcon = styled.span`
  color: #74817b;

  svg {
    width: 15px;
    height: 15px;
    display: block;
  }
`;

export const RadioPanel = styled.div`
  min-height: 136px;
  border-radius: 10px;
  border: 1px solid ${borderColor};
  background: #ffffff;
  padding: 12px 14px;
`;

export const RadioTitle = styled.div`
  color: #1f2d27;
  font-size: 0.8rem;
  font-weight: 700;
`;

export const RadioList = styled.div`
  display: grid;
  gap: 12px;
  margin-top: 10px;
`;

export const RadioItem = styled.label`
  display: flex;
  align-items: center;
  gap: 9px;
  color: #43524b;
  font-size: 0.86rem;
  cursor: pointer;
`;

export const RadioMark = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 1px solid
    ${({ $checked }) =>
      $checked ? "rgba(18, 111, 53, 0.26)" : "rgba(31, 81, 47, 0.18)"};
  background: #ffffff;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    inset: 3px;
    border-radius: 50%;
    background: ${green};
    opacity: ${({ $checked }) => ($checked ? 1 : 0)};
  }
`;

export const SelectWrap = styled.div`
  position: relative;
  min-height: 42px;
  border-radius: 8px;
  border: 1px solid ${borderColor};
  background: #ffffff;
  display: flex;
  align-items: center;
  padding: 0 12px;
`;

export const Select = styled.select`
  width: 100%;
  height: 40px;
  border: 0;
  outline: none;
  background: transparent;
  color: #24332c;
  font-size: 0.84rem;
  appearance: none;
  cursor: pointer;
`;

export const SelectIcon = styled.span`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #74817b;
  pointer-events: none;

  svg {
    width: 13px;
    height: 13px;
    display: block;
  }
`;

export const FullRow = styled.div`
  grid-column: 1 / -1;
`;

export const TextareaWrap = styled.div`
  min-height: 88px;
  border-radius: 10px;
  border: 1px solid ${borderColor};
  background: #ffffff;
  padding: 10px 12px;
`;

export const Textarea = styled.textarea`
  width: 100%;
  min-height: 66px;
  border: 0;
  outline: none;
  resize: none;
  background: transparent;
  color: #22312b;
  font-size: 0.84rem;

  &::placeholder {
    color: #88938e;
  }
`;

export const SubmitButton = styled.button`
  min-width: 196px;
  min-height: 42px;
  margin-top: 14px;
  padding: 0 16px;
  border-radius: 8px;
  background: linear-gradient(180deg, #116d37 0%, #0a592a 100%);
  color: #ffffff;
  font-size: 0.88rem;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  white-space: nowrap;
  cursor: pointer;
`;

export const FormSidebar = styled.div`
  position: relative;
  padding: 34px 26px 24px;
  background: radial-gradient(
    circle at 78% 52%,
    rgba(226, 240, 224, 0.95),
    rgba(244, 248, 243, 0.95) 52%,
    rgba(249, 252, 249, 0.98) 100%
  );

  @media (max-width: 760px) {
    padding: 22px 16px 18px;
  }
`;

export const Signature = styled.div`
  margin-top: 18px;
  color: #17311f;
  font-family: "DM Serif Display", Georgia, serif;
  font-size: 2rem;
  font-style: italic;
`;

export const ChairVisual = styled.div`
  position: relative;
  height: 290px;
  margin-top: 2px;
`;

export const CircleGlow = styled.div`
  position: absolute;
  right: 18px;
  top: 32px;
  width: 248px;
  height: 248px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(214, 233, 214, 0.92) 0%,
    rgba(214, 233, 214, 0.28) 62%,
    rgba(214, 233, 214, 0) 76%
  );
`;

export const IllustrationBase = styled.div`
  position: absolute;
  left: 26px;
  right: 20px;
  bottom: 8px;
  height: 24px;
  border-radius: 50%;
  background: rgba(156, 170, 159, 0.22);
`;

export const TableIllustration = styled.div`
  position: absolute;
  left: 26px;
  bottom: 26px;
  width: 66px;
  height: 66px;
  border-radius: 50%;
  background: linear-gradient(180deg, #212b26 0%, #121a16 100%);
  box-shadow: 0 12px 18px rgba(24, 35, 28, 0.18);

  &::before {
    content: "";
    position: absolute;
    left: 21px;
    top: -14px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: linear-gradient(180deg, #2a3630 0%, #18221d 100%);
  }

  &::after {
    content: "";
    position: absolute;
    left: 29px;
    top: -26px;
    width: 7px;
    height: 16px;
    border-radius: 4px;
    background: #fafdf9;
    box-shadow: -8px 2px 0 0 #5f7d60;
  }
`;

export const ChairIllustration = styled.div`
  position: absolute;
  right: 32px;
  bottom: 20px;
  width: 196px;
  height: 174px;
  border-radius: 38% 42% 26% 28% / 44% 44% 24% 26%;
  background: linear-gradient(180deg, #cbd9ca 0%, #739177 38%, #2f4a32 100%);
  box-shadow: 0 24px 30px rgba(39, 60, 43, 0.18);

  &::before {
    content: "";
    position: absolute;
    left: 18px;
    top: 18px;
    width: 156px;
    height: 108px;
    border-radius: 42% 44% 30% 32%;
    background: linear-gradient(180deg, #f5faf5 0%, #a8bca8 36%, #557156 100%);
  }

  &::after {
    content: "";
    position: absolute;
    left: 38px;
    bottom: -8px;
    width: 114px;
    height: 74px;
    border-radius: 42% 42% 34% 34%;
    background: linear-gradient(180deg, #86a287 0%, #39513a 100%);
  }
`;

export const ExpertsSection = styled.section`
  margin-top: 18px;
`;

export const SectionHeaderRow = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 18px;
`;

export const SectionAction = styled.button`
  background: transparent;
  color: ${green};
  font-size: 0.84rem;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  svg {
    width: 14px;
    height: 14px;
  }
`;

export const ExpertsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin-top: 14px;

  @media (max-width: 1180px) {
    grid-template-columns: 1fr;
  }
`;

export const ExpertCard = styled.div`
  ${panel};
  min-height: 180px;
  padding: 12px;
  display: grid;
  grid-template-columns: 108px minmax(0, 1fr);
  gap: 12px;
  align-items: start;
`;

export const ExpertAvatar = styled.div`
  position: relative;
  height: 156px;
  border-radius: 16px;
  background: ${({ $tone }) =>
    $tone === "sand"
      ? "linear-gradient(180deg, #f2efe6 0%, #e6e1d3 100%)"
      : $tone === "harbor"
        ? "linear-gradient(180deg, #eef1f5 0%, #d8e0e9 100%)"
        : "linear-gradient(180deg, #edf4ef 0%, #dbe7de 100%)"};
  overflow: hidden;

  svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }
`;

export const AvatarPlaceholder = styled.div`
  display: none;
`;

export const ExpertContent = styled.div`
  position: relative;
  padding-top: 2px;
`;

export const ExpertStar = styled.div`
  position: absolute;
  right: 0;
  top: -2px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: linear-gradient(180deg, #eef7ef 0%, #e4f1e6 100%);
  color: ${green};
  display: inline-flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 12px;
    height: 12px;
  }
`;

export const ExpertName = styled.h3`
  margin: 2px 0 0;
  color: ${ink};
  font-size: 0.94rem;
  font-weight: 800;
`;

export const ExpertRole = styled.div`
  margin-top: 5px;
  color: ${green};
  font-size: 0.82rem;
  font-weight: 700;
`;

export const ExpertMeta = styled.div`
  display: grid;
  gap: 6px;
  margin-top: 10px;
  color: #4d5b55;
  font-size: 0.79rem;
  line-height: 1.44;
`;

export const SmallActionButton = styled.button`
  min-width: 106px;
  min-height: 32px;
  margin-top: 12px;
  padding: 0 10px;
  border-radius: 8px;
  border: 1px solid rgba(18, 111, 53, 0.18);
  background: linear-gradient(180deg, #ffffff 0%, #f5faf6 100%);
  color: #166f39;
  font-size: 0.76rem;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  white-space: nowrap;
  cursor: pointer;
`;

export const OfficesSection = styled.section`
  margin-top: 16px;
`;

export const OfficesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin-top: 14px;

  @media (max-width: 1180px) {
    grid-template-columns: 1fr;
  }
`;

export const OfficeCard = styled.div`
  ${panel};
  min-height: 152px;
  padding: 12px;
  display: grid;
  grid-template-columns: 102px minmax(0, 1fr);
  gap: 12px;
  align-items: start;
`;

export const OfficeImage = styled.img`
  width: 102px;
  height: 104px;
  border-radius: 12px;
  object-fit: cover;
  display: block;
`;

export const OfficeName = styled.h3`
  margin: 4px 0 0;
  color: ${ink};
  font-size: 0.94rem;
  font-weight: 800;
`;

export const OfficeLocation = styled.div`
  margin-top: 5px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: ${green};
  font-size: 0.8rem;
  font-weight: 700;

  svg {
    width: 12px;
    height: 12px;
  }
`;

export const OfficeHours = styled.div`
  margin-top: 10px;
  color: #55635d;
  font-size: 0.79rem;
`;

export const OutlineButton = styled.button`
  min-width: 136px;
  min-height: 32px;
  margin-top: 10px;
  padding: 0 12px;
  border-radius: 8px;
  border: 1px solid rgba(18, 111, 53, 0.18);
  background: linear-gradient(180deg, #ffffff 0%, #f5faf6 100%);
  color: #166f39;
  font-size: 0.76rem;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  white-space: nowrap;
  cursor: pointer;
`;

export const StatsSection = styled.section`
  ${panel};
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin-top: 18px;
  overflow: hidden;

  @media (max-width: 1180px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const StatItem = styled.div`
  min-height: 118px;
  padding: 22px 24px;
  display: grid;
  grid-template-columns: 52px minmax(0, 1fr);
  gap: 14px;
  align-items: center;
  border-left: 1px solid rgba(24, 79, 43, 0.08);

  &:first-child {
    border-left: 0;
  }
`;

export const StatIcon = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #eef7ef 0%, #e4f1e6 100%);
  color: ${green};

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const StatValue = styled.div`
  color: ${ink};
  font-size: 1.34rem;
  font-weight: 800;
`;

export const StatHeading = styled.div`
  margin-top: 4px;
  color: #1d2d26;
  font-size: 0.92rem;
  font-weight: 700;
`;

export const StatText = styled.div`
  margin-top: 5px;
  color: ${muted};
  font-size: 0.84rem;
`;

export const BottomCta = styled.section`
  position: relative;
  margin-top: 16px;
  border-radius: 24px;
  overflow: hidden;
  background:
    radial-gradient(
      circle at 10% 50%,
      rgba(34, 129, 68, 0.34),
      transparent 16%
    ),
    radial-gradient(
      circle at 76% 50%,
      rgba(100, 174, 122, 0.28),
      transparent 24%
    ),
    linear-gradient(90deg, #0b6b34 0%, #084e26 72%, #0b6b34 100%);
  box-shadow: 0 22px 42px rgba(11, 75, 36, 0.18);

  &::after {
    content: "";
    position: absolute;
    right: 18px;
    bottom: -8px;
    width: 150px;
    height: 124px;
    border: 2px solid rgba(177, 221, 185, 0.14);
    border-top-left-radius: 18px;
    border-top-right-radius: 18px;
    border-bottom: 0;
    transform: perspective(220px) rotateX(16deg);
    opacity: 0.9;
  }
`;

export const BottomCtaGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto auto;
  gap: 20px;
  align-items: center;
  min-height: 112px;
  padding: 20px 24px 22px;

  @media (max-width: 1180px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 760px) {
    padding: 18px 16px;
  }
`;

export const BottomCtaPrimary = styled.div`
  display: grid;
  grid-template-columns: 58px minmax(0, 1fr);
  gap: 16px;
  align-items: center;
`;

export const BottomCtaIcon = styled.div`
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.12);
  color: #ffffff;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 28px;
    height: 28px;
  }
`;

export const BottomCtaTitle = styled.h3`
  margin: 0;
  color: #ffffff;
  font-size: 1.18rem;
  font-weight: 800;
`;

export const BottomCtaText = styled.p`
  max-width: 510px;
  margin: 6px 0 0;
  color: rgba(241, 247, 242, 0.92);
  font-size: 0.92rem;
  line-height: 1.5;
`;

export const LightButton = styled.button`
  min-width: 264px;
  min-height: 52px;
  padding: 0 20px;
  border-radius: 12px;
  background: linear-gradient(180deg, #ffffff 0%, #f3f8f3 100%);
  color: #18301f;
  font-size: 0.94rem;
  font-weight: 800;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  white-space: nowrap;
  cursor: pointer;

  @media (max-width: 760px) {
    width: 100%;
    min-width: 0;
  }
`;

export const DarkOutlineButton = styled.button`
  min-width: 206px;
  min-height: 52px;
  padding: 0 18px;
  border-radius: 12px;
  border: 1px solid rgba(220, 239, 224, 0.26);
  background: transparent;
  color: #ffffff;
  font-size: 0.94rem;
  font-weight: 800;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  white-space: nowrap;
  cursor: pointer;

  @media (max-width: 760px) {
    width: 100%;
    min-width: 0;
  }
`;
