import styled, { css } from "styled-components";

export const Section = styled.section`
  position: relative;
  padding: 96px 0 48px;
  overflow: hidden;
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
`;

export const Inner = styled.div`
  position: relative;
  z-index: 1;
  width: min(1520px, calc(100% - 32px));
  margin: 0 auto;

  @media (max-width: 760px) {
    width: min(100%, calc(100% - 20px));
  }
`;

export const Header = styled.div`
  max-width: 860px;
  margin: 0 auto 42px;
  text-align: center;
`;

export const KickerRow = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  margin-bottom: 18px;
`;

export const KickerLine = styled.span`
  width: 58px;
  height: 1px;
  background: linear-gradient(
    90deg,
    rgba(56, 122, 74, 0),
    rgba(56, 122, 74, 0.38),
    rgba(56, 122, 74, 0)
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

export const SummaryValue = styled.p`
  max-width: 880px;
  margin: 20px auto 0;
  color: #536471;
  font-size: clamp(1rem, 1.7vw, 1.18rem);
  line-height: 1.65;
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
`;

export const FieldHeader = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr minmax(126px, 170px);
  align-items: center;
  gap: 10px;

  @media (max-width: 760px) {
    grid-template-columns: 62px 1fr;

    > :last-child {
      grid-column: 1 / -1;
    }
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

  @media (max-width: 760px) {
    width: 56px;
    height: 56px;
    border-radius: 16px;

    svg {
      width: 28px;
      height: 28px;
    }
  }
`;

export const FieldLabel = styled.div`
  color: #17211e;
  font-size: clamp(0.88rem, 1vw, 1rem);
  font-weight: 600;
  line-height: 1.15;
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
  font-weight: 600;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.88);
`;

export const ValueInput = styled.input`
  ${sharedValueField};
  appearance: textfield;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    margin: 0;
    appearance: none;
  }
`;

export const SelectBox = styled.select`
  ${sharedValueField};
  appearance: none;
  background-image:
    linear-gradient(45deg, transparent 50%, #1f6f43 50%),
    linear-gradient(135deg, #1f6f43 50%, transparent 50%);
  background-position:
    calc(100% - 28px) calc(50% - 3px),
    calc(100% - 22px) calc(50% - 3px);
  background-size:
    6px 6px,
    6px 6px;
  background-repeat: no-repeat;
  cursor: pointer;
`;

export const RangeInput = styled.input`
  width: calc(100% - 60px);
  margin: 8px 0 0 60px;
  accent-color: #257d49;

  &::-webkit-slider-runnable-track {
    height: 4px;
    border-radius: 999px;
  }

  &::-webkit-slider-thumb {
    margin-top: -7px;
  }

  @media (max-width: 760px) {
    width: 100%;
    margin-left: 0;
  }
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
`;

export const ResultPanel = styled.div`
  ${panelCard};
  position: relative;
  padding: 10px 10px 10px;
`;

export const HouseIllustration = styled.div`
  position: absolute;
  top: -98px;
  right: -18px;
  width: min(190px, 24vw);
  pointer-events: none;

  @media (max-width: 1100px) {
    position: relative;
    top: auto;
    right: auto;
    width: min(320px, 80%);
    margin: -90px auto 8px;
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

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const GaugeImageWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 116px;
`;

export const GaugeImage = styled.img`
  max-width: 100%;
  max-height: 122px;
  height: auto;
  display: block;
  object-fit: contain;
`;

export const GaugeArt = styled.div`
  position: relative;
  min-height: 150px;

  svg {
    width: 100%;
    height: auto;
    display: block;
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
`;

export const ResultMeta = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;
  padding: 10px 2px 0;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
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

  p {
    margin: 4px 0 0;
    color: #5e6a6e;
    font-size: 0.72rem;
    line-height: 1.45;
  }

  @media (max-width: 760px) {
    &:first-child {
      border-right: 0;
      padding-right: 0;
      border-bottom: 1px solid rgba(43, 90, 62, 0.14);
      padding-bottom: 18px;
    }

    &:last-child {
      padding-left: 0;
    }
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
`;

export const ResultMetaLabel = styled.div`
  color: #4f5a60;
  font-size: 0.72rem;
  line-height: 1.3;
`;

export const ResultMetaValue = styled.div`
  margin-top: 4px;
  color: #207949;
  font-family: "DM Serif Display", Georgia, serif;
  font-size: clamp(1.35rem, 1.6vw, 1.8rem);
  line-height: 0.98;
  letter-spacing: -0.045em;
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
`;
