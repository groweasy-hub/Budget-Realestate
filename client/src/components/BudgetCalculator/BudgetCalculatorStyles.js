import styled, { css } from "styled-components";

export const Section = styled.section`
  position: relative;
  padding: 96px 0 48px;

  @media (max-width: 1100px) {
    padding: 18px 0 24px;
  }
`;

export const AccentLeaves = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;

  &::before {
    content: "";
    position: absolute;
    top: 22px;
    left: 22px;
    width: 84px;
    height: 84px;
    background-image: radial-gradient(
      rgba(124, 178, 120, 0.34) 1.2px,
      transparent 1.2px
    );
    background-size: 18px 18px;
    opacity: 0.8;
  }

  &::after {
    content: "";
    position: absolute;
    right: -18px;
    top: -2px;
    width: 220px;
    height: 140px;
    background:
      radial-gradient(
        circle at 64% 20%,
        rgba(112, 181, 102, 0.18),
        transparent 16%
      ),
      radial-gradient(
        circle at 82% 40%,
        rgba(112, 181, 102, 0.18),
        transparent 14%
      ),
      radial-gradient(
        circle at 94% 6%,
        rgba(112, 181, 102, 0.16),
        transparent 18%
      );
    filter: blur(2px);
  }

  @media (max-width: 760px) {
    display: none;
  }
`;

export const Inner = styled.div`
  position: relative;
  z-index: 1;
  width: min(1520px, calc(100% - 32px));
  margin: 0 auto;

  @media (max-width: 1100px) {
    width: min(100%, calc(100% - 16px));
  }

  @media (max-width: 760px) {
    width: min(100%, calc(100% - 12px));
  }
`;

export const Header = styled.div`
  max-width: 860px;
  margin: 0 auto 42px;
  text-align: center;

  @media (max-width: 1100px) {
    position: relative;
    max-width: none;
    margin: 0 auto 14px;
    padding: 10px 10px 152px;
  }

  @media (max-width: 760px) {
    max-width: 1020px;
    margin: 0 auto 34px;
    padding: 0;
  }
`;

export const KickerRow = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  margin-bottom: 18px;

  @media (max-width: 1100px) {
    gap: 12px;
    margin-bottom: 16px;
  }
`;

export const KickerIconBox = styled.span`
  width: 34px;
  height: 34px;
  border-radius: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #ffffff 0%, #f1f7f2 100%);
  color: #147a41;
  border: 1px solid rgba(31, 117, 67, 0.16);
  box-shadow: 0 8px 20px rgba(33, 92, 58, 0.08);

  svg {
    width: 20px;
    height: 20px;
    display: block;
  }

  @media (max-width: 760px) {
    display: none;
  }
`;

export const KickerLine = styled.span`
  width: 46px;
  height: 2px;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.secondary};

  @media (max-width: 1100px) {
    width: 18px;
    opacity: 0.28;
  }

  @media (max-width: 760px) {
    width: 46px;
    height: 2px;
    opacity: 1;
  }
`;

export const Kicker = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 0.09em;
  text-transform: uppercase;

  @media (max-width: 1100px) {
    font-size: 1rem;
    line-height: 1;
  }

  @media (max-width: 760px) {
    font-size: 1.5rem;
    line-height: normal;
    letter-spacing: 0.03em;
    text-transform: none;
  }
`;

export const Title = styled.h2`
  margin: 0;
  color: #0f1918;
  font-family: "DM Serif Display", Georgia, serif;
  font-size: clamp(2rem, 4vw, 4rem);
  font-weight: 400;
  line-height: 0.96;
  letter-spacing: -0.04em;

  @media (max-width: 1100px) {
    font-size: clamp(3rem, 7vw, 4.3rem);
  }

  @media (max-width: 760px) {
    font-family: "Poppins", sans-serif;
    font-size: clamp(2rem, 4vw, 4rem);
    line-height: 1.04;
    letter-spacing: -0.055em;
  }
`;

export const SummaryValue = styled.p`
  max-width: 880px;
  margin: 20px auto 0;
  color: #536471;
  font-size: clamp(1rem, 1.7vw, 1.18rem);
  line-height: 1.65;

  @media (max-width: 1100px) {
    max-width: 420px;
    margin-top: 16px;
    font-size: 1.08rem;
    line-height: 1.45;
  }

  @media (max-width: 760px) {
    max-width: 880px;
    margin: 20px auto 0;
    font-size: clamp(1rem, 1.7vw, 1.18rem);
    line-height: 1.65;
  }
`;

export const MobileHeaderIllustration = styled.div`
  display: none;

  @media (max-width: 1100px) {
    position: absolute;
    right: -8px;
    bottom: -10px;
    display: block;
    width: min(352px, 46vw);
    pointer-events: none;
  }

  @media (max-width: 760px) {
    display: none;
  }
`;

export const CalculatorShell = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.02fr) minmax(0, 0.98fr);
  gap: 14px;
  align-items: stretch;
  width: min(1060px, 100%);
  margin: 0 auto;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    width: min(760px, 100%);
    gap: 10px;
  }
`;

const panelCard = css`
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid rgba(44, 98, 67, 0.08);
  box-shadow:
    0 18px 38px rgba(62, 84, 68, 0.07),
    inset 0 1px 0 rgba(255, 255, 255, 0.82);
`;

export const InputColumn = styled.div`
  ${panelCard};
  padding: 10px;
  display: grid;
  gap: 8px;

  @media (max-width: 1100px) {
    padding: 10px 18px 18px;
    gap: 0;
    border-radius: 28px;
    box-shadow:
      0 24px 56px rgba(54, 73, 60, 0.08),
      inset 0 1px 0 rgba(255, 255, 255, 0.88);
  }
`;

export const FieldCard = styled.div`
  padding: 10px 10px 8px;
  border-radius: 14px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.96) 0%,
    rgba(248, 250, 247, 0.96) 100%
  );
  border: 1px solid rgba(45, 94, 66, 0.07);
  box-shadow: 0 12px 26px rgba(51, 78, 60, 0.06);

  @media (max-width: 1100px) {
    padding: 20px 0 18px;
    border-radius: 0;
    background: transparent;
    border: 0;
    box-shadow: none;
    border-bottom: 1px solid rgba(43, 90, 62, 0.08);
  }
`;

export const FieldHeader = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr minmax(126px, 170px);
  align-items: center;
  gap: 10px;

  @media (max-width: 1100px) {
    grid-template-columns: 84px minmax(0, 1fr) minmax(238px, 280px);
    gap: 18px;
  }

  @media (max-width: 760px) {
    grid-template-columns: 60px minmax(0, 1fr) minmax(136px, 152px);
    gap: 12px;
  }
`;

export const FieldIconWrap = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #f0f7f0 0%, #e9f2ea 100%);
  color: #2b844b;

  svg {
    width: 20px;
    height: 20px;
    display: block;
  }

  @media (max-width: 1100px) {
    width: 70px;
    height: 70px;
    border-radius: 20px;
    background: linear-gradient(180deg, #f6fbf6 0%, #eef6ef 100%);
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.9),
      0 12px 24px rgba(70, 108, 79, 0.06);

    svg {
      width: 30px;
      height: 30px;
    }
  }

  @media (max-width: 760px) {
    width: 52px;
    height: 52px;
    border-radius: 16px;

    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

export const FieldLabel = styled.div`
  color: #17211e;
  font-size: clamp(0.88rem, 1vw, 1rem);
  font-weight: 600;
  line-height: 1.15;

  @media (max-width: 1100px) {
    font-size: 1.18rem;
    font-weight: 600;
    letter-spacing: -0.02em;
  }

  @media (max-width: 760px) {
    font-size: 0.9rem;
  }
`;

const sharedValueField = css`
  width: 100%;
  min-height: 38px;
  padding: 0 12px;
  border-radius: 10px;
  border: 1px solid rgba(50, 86, 66, 0.14);
  background: rgba(255, 255, 255, 0.94);
  color: #14211d;
  font-size: clamp(0.86rem, 0.96vw, 0.94rem);
  font-weight: 500;
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.88),
    0 6px 16px rgba(63, 86, 71, 0.04);
`;

export const TextValueBox = styled.div`
  ${sharedValueField};
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  white-space: nowrap;

  @media (max-width: 1100px) {
    min-height: 60px;
    padding: 0 30px;
    border-radius: 20px;
    font-size: 1.16rem;
  }

  @media (max-width: 760px) {
    min-height: 40px;
    padding: 0 18px;
    border-radius: 14px;
    font-size: 0.92rem;
  }
`;

export const ValueInput = styled.input`
  ${sharedValueField};
  appearance: textfield;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    margin: 0;
    appearance: none;
  }

  @media (max-width: 1100px) {
    min-height: 74px;
    padding: 0 26px;
    border-radius: 18px;
    font-size: 1.1rem;
  }

  @media (max-width: 760px) {
    min-height: 60px;
    padding: 0 18px;
    border-radius: 14px;
    font-size: 0.88rem;
  }
`;

export const SelectBox = styled.select`
  ${sharedValueField};
  appearance: none;
  background-image:
    linear-gradient(45deg, transparent 50%, #1f6f43 50%),
    linear-gradient(135deg, #1f6f43 50%, transparent 50%);
  background-position:
    calc(100% - 34px) calc(50% - 4px),
    calc(100% - 24px) calc(50% - 4px);
  background-size:
    10px 10px,
    10px 10px;
  background-repeat: no-repeat;
  cursor: pointer;

  @media (max-width: 1100px) {
    min-height: 80px;
    padding: 0 30px;
    border-radius: 20px;
    font-size: 1.16rem;
    background-position:
      calc(100% - 42px) calc(50% - 4px),
      calc(100% - 31px) calc(50% - 4px);
  }

  @media (max-width: 760px) {
    min-height: 40px;
    padding: 0 18px;
    border-radius: 14px;
    font-size: 0.92rem;
    background-position:
      calc(100% - 24px) calc(50% - 3px),
      calc(100% - 18px) calc(50% - 3px);
    background-size:
      8px 8px,
      8px 8px;
  }
`;

export const RangeSlider = styled.div`
  position: relative;
  width: calc(100% - 124px);
  margin: 14px 0 0 88px;

  @media (max-width: 760px) {
    width: calc(100% - 78px);
    margin: 12px 0 0 60px;
  }
`;

export const RangeTrack = styled.div`
  position: relative;
  width: 100%;
  height: 4px;
  border-radius: 999px;
  background: #edf0ed;
  overflow: visible;
`;

export const RangeFill = styled.span`
  position: absolute;
  inset: 0 auto 0 0;
  border-radius: inherit;
  background: linear-gradient(90deg, #177741 0%, #177741 100%);
`;

export const RangeThumb = styled.span`
  position: absolute;
  top: 50%;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #1c8249;
  box-shadow: 0 8px 18px rgba(40, 111, 69, 0.18);
  transform: translate(-50%, -50%);
`;

export const RangeInput = styled.input`
  position: absolute;
  inset: -10px 0 -10px 0;
  width: 100%;
  margin: 0;
  opacity: 0;
  cursor: pointer;
`;

export const NoteRow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 2px 4px 0;
  color: #606c71;
  font-size: 0.74rem;
  line-height: 1.45;

  svg {
    width: 18px;
    height: 18px;
    color: #87b18a;
    flex: 0 0 auto;
  }

  @media (max-width: 1100px) {
    gap: 18px;
    margin-top: 10px;
    padding: 24px 20px;
    font-size: 1rem;
    line-height: 1.45;
    border-radius: 24px;
    background: linear-gradient(180deg, #fafdfb 0%, #f4f7f4 100%);

    svg {
      width: 42px;
      height: 42px;
    }
  }

  @media (max-width: 760px) {
    gap: 12px;
    padding: 14px 12px;
    font-size: 0.86rem;

    svg {
      width: 28px;
      height: 28px;
    }
  }
`;

export const ResultPanel = styled.div`
  ${panelCard};
  position: relative;
  padding: 10px 10px 10px;

  @media (max-width: 1100px) {
    padding: 18px 18px 18px;
    border-radius: 28px;
    box-shadow:
      0 24px 56px rgba(54, 73, 60, 0.08),
      inset 0 1px 0 rgba(255, 255, 255, 0.88);
  }
`;

export const HouseIllustration = styled.div`
  position: absolute;
  top: -98px;
  right: -18px;
  width: min(190px, 24vw);
  pointer-events: none;

  @media (max-width: 1100px) {
    display: none;
  }
`;

export const IllustrationImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
`;

export const GaugeCard = styled.div`
  display: grid;
  grid-template-columns: 1.12fr 0.88fr;
  align-items: center;
  gap: 8px;
  padding-top: 6px;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(43, 90, 62, 0.14);

  @media (max-width: 1100px) {
    grid-template-columns: 1.08fr 0.92fr;
    gap: 14px;
    padding: 12px 2px 20px;
  }

  @media (max-width: 760px) {
    grid-template-columns: 1.04fr 0.96fr;
    gap: 8px;
    padding: 6px 0 0px;
  }
`;

export const GaugeImageWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 116px;

  @media (max-width: 1100px) {
    min-height: 220px;
  }

  @media (max-width: 760px) {
    min-height: 128px;
  }
`;

export const GaugeImage = styled.img`
  max-width: 100%;
  max-height: 122px;
  height: auto;
  display: block;
  object-fit: contain;

  @media (max-width: 1100px) {
    max-height: 236px;
  }

  @media (max-width: 760px) {
    max-height: 140px;
  }
`;

export const GaugeArt = styled.div`
  position: relative;
  min-height: 150px;

  svg {
    width: 100%;
    height: auto;
    display: block;
  }

  @media (max-width: 1100px) {
    min-height: 272px;
  }

  @media (max-width: 760px) {
    min-height: 174px;
  }
`;

export const GaugeText = styled.div`
  position: absolute;
  inset: 88px 305px 10px auto;
  text-align: center;

  span {
    display: block;
    color: #192320;
    font-size: 0.74rem;
    font-weight: 600;
  }

  strong {
    display: block;
    margin-top: 8px;
    color: #217c49;
    font-family: "DM Serif Display", Georgia, serif;
    font-size: clamp(1.65rem, 2vw, 2.2rem);
    line-height: 0.95;
    letter-spacing: -0.05em;
  }

  small {
    display: block;
    margin-top: 6px;
    color: #313a3d;
    font-size: 0.72rem;
    font-weight: 500;
  }

  @media (max-width: 1100px) {
    inset: 122px auto auto 96px;
    text-align: center;

    span {
      font-size: 0.98rem;
    }

    strong {
      margin-top: 10px;
      font-size: clamp(2.7rem, 6vw, 3.6rem);
    }

    small {
      margin-top: 8px;
      font-size: 0.98rem;
    }
  }

  @media (max-width: 760px) {
    inset: 80px auto auto 45px;
    text-align: center;

    span {
      font-size: 0.72rem;
    }

    strong {
      margin-top: 8px;
      font-size: 1.5rem;
    }

    small {
      margin-top: 6px;
      font-size: 0.72rem;
    }
  }
`;

export const ResultMeta = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;
  padding: 10px 2px 0;

  @media (max-width: 1100px) {
    gap: 0;
    padding: 18px 2px 0;
  }

  @media (max-width: 760px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const ResultMetaCard = styled.div`
  display: grid;
  grid-template-columns: 46px 1fr;
  gap: 8px;
  align-items: start;
  padding: 2px 4px 0 0;

  &:first-child {
    border-right: 1px solid rgba(43, 90, 62, 0.14);
    padding-right: 20px;
  }

  &:last-child {
    padding-left: 6px;
  }

  @media (max-width: 1100px) {
    grid-template-columns: 74px 1fr;
    gap: 16px;
    padding: 8px 18px 4px;
  }

  @media (max-width: 760px) {
    grid-template-columns: 48px 1fr;
    gap: 12px;
    padding: 8px 6px;
  }
`;

export const ResultMetaDescription = styled.p`
  margin: 4px 0 0;
  color: #5e6a6e;
  font-size: 0.72rem;
  line-height: 1.45;

  @media (max-width: 1100px) {
    margin-top: 10px;
    font-size: 0.94rem;
    line-height: 1.45;
  }

  @media (max-width: 760px) {
    max-width: ${({ $compact, $score }) => {
      if ($compact) {
        return "96px";
      }

      if ($score) {
        return "104px";
      }

      return "100px";
    }};
    font-size: ${({ $compact, $score }) => {
      if ($compact) {
        return "0.62rem";
      }

      if ($score) {
        return "0.64rem";
      }

      return "0.64rem";
    }};
    line-height: 1.36;
  }
`;

export const ResultMetaIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: linear-gradient(180deg, #f0f7f0 0%, #e6f0e7 100%);
  color: #257d49;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 18px;
    height: 18px;
    display: block;
  }

  @media (max-width: 1100px) {
    width: 64px;
    height: 64px;
    border-radius: 20px;
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.92),
      0 12px 24px rgba(70, 108, 79, 0.06);

    svg {
      width: 28px;
      height: 28px;
    }
  }

  @media (max-width: 760px) {
    width: 32px;
    height: 32px;
    border-radius: 14px;

    svg {
      width: 28px;
      height: 28px;
    }
  }
`;

export const ResultMetaLabel = styled.div`
  color: #4f5a60;
  font-size: 0.72rem;
  line-height: 1.3;

  @media (max-width: 1100px) {
    font-size: 0.95rem;
  }

  @media (max-width: 760px) {
    font-size: 0.64rem;
  }
`;

export const ResultMetaValue = styled.div`
  margin-top: 4px;
  color: #207949;
  font-family: "DM Serif Display", Georgia, serif;
  font-size: clamp(1.35rem, 1.6vw, 1.8rem);
  line-height: 0.98;
  letter-spacing: -0.045em;

  @media (max-width: 1100px) {
    margin-top: 8px;
    font-size: clamp(2.2rem, 5vw, 2.9rem);
  }

  @media (max-width: 760px) {
    margin-top: 6px;
    font-size: 0.95rem;
  }
`;

export const Banner = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  margin-top: 10px;
  padding: 10px 12px;
  border-radius: 12px;
  background: linear-gradient(180deg, #eef8ef 0%, #e4f3e6 100%);
  color: #257b49;
  font-size: 0.76rem;
  font-weight: 600;
  line-height: 1.4;

  @media (max-width: 1100px) {
    gap: 16px;
    margin-top: 20px;
    padding: 18px 22px;
    border-radius: 24px;
    font-size: 1rem;
  }

  @media (max-width: 760px) {
    gap: 12px;
    padding: 14px 16px;
    border-radius: 18px;
    font-size: 0.86rem;
  }
`;

export const BannerIconWrap = styled.span`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #257b49;
  border: 1.5px solid rgba(37, 123, 73, 0.28);

  svg {
    width: 14px;
    height: 14px;
    display: block;
  }

  @media (max-width: 1100px) {
    width: 48px;
    height: 48px;

    svg {
      width: 22px;
      height: 22px;
    }
  }

  @media (max-width: 760px) {
    width: 30px;
    height: 30px;

    svg {
      width: 14px;
      height: 14px;
    }
  }
`;
