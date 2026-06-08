import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const BuyPageShell = styled.main`
  min-height: 100vh;
  background: linear-gradient(180deg, #fcfdfb 0%, #f6faf5 100%);
`;

export const PageInner = styled.div`
  width: min(1520px, calc(100% - 48px));
  margin: 0 auto;
  padding: 0 0 56px;

  @media (max-width: 980px) {
    width: min(100%, calc(100% - 24px));
    padding: 0 0 42px;
  }
`;

export const HeroSection = styled.section`
  position: relative;
  margin-top: 18px;
  padding: 30px 26px 28px;
  border-radius: 30px;
  background: transparent;
  border: 0;
  box-shadow: none;

  @media (max-width: 980px) {
    padding: 22px 16px 20px;
    border-radius: 24px;
  }
`;

export const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(320px, 1.1fr);
  gap: 20px;
  align-items: end;
  margin-top: 8px;

  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
  }
`;

export const HeroCopy = styled.div`
  max-width: 560px;
  padding-bottom: 30px;
`;

export const HeroTitle = styled.h1`
  margin: 0;
  color: #0f6b34;
  font-size: clamp(2.6rem, 4.2vw, 4rem);
  font-weight: 700;
  line-height: 1.04;
  letter-spacing: -0.04em;
`;

export const HeroDescription = styled.p`
  max-width: 520px;
  color: #4b5c5f;
  max-width: 880px;
  margin: 20px auto 0;
  font-size: clamp(1rem, 1.7vw, 1.18rem);
  line-height: 1.65;
`;

export const StatsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 30px;
`;

export const StatCard = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 12px;
  align-items: center;
  min-width: 140px;
`;

export const StatIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #eef7ef 0%, #e4f1e5 100%);
  color: #2e7a45;

  svg {
    width: 22px;
    height: 22px;
    display: block;
  }
`;

export const StatValue = styled.div`
  color: #143223;
  font-size: 1.35rem;
  font-weight: 800;
  line-height: 1;
`;

export const StatLabel = styled.div`
  margin-top: 6px;
  color: #4c6158;
  font-size: 0.9rem;
`;

export const HeroVisual = styled.div`
  position: relative;
  min-height: 360px;

  @media (max-width: 1080px) {
    min-height: 300px;
  }

  @media (max-width: 760px) {
    min-height: 220px;
  }
`;

export const HeroImageWrap = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: min(960px, 100%);
  overflow: hidden;
  border-radius: 26px;
`;

export const HeroImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;

  max-height: 660px;
  margin-bottom: -50px;
  padding-right: 40px;

  @media (max-width: 1080px) {
    max-height: 450px;
  }

  @media (max-width: 760px) {
    max-height: 220px;
  }
`;

export const FilterPanel = styled.div`
  position: relative;
  z-index: 2;
  margin: 12px 0 0;
  width: 100%;
  padding: 20px 18px 14px;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid rgba(30, 84, 49, 0.1);
  box-shadow: 0 22px 42px rgba(51, 70, 54, 0.1);

  @media (max-width: 980px) {
    margin: 12px 0 0;
  }
`;

export const FilterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 14px;
  align-items: end;

  @media (max-width: 1280px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const FilterField = styled.div`
  display: grid;
  gap: 8px;
`;

export const FilterLabel = styled.label`
  color: #31403b;
  font-size: 0.82rem;
  font-weight: 700;
`;

const sharedField = css`
  width: 100%;
  min-height: 52px;
  padding: 0 16px;
  border-radius: 14px;
  border: 1px solid rgba(42, 91, 58, 0.12);
  background: #ffffff;
  color: #6e7b77;
  font-size: 0.96rem;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.86);
`;

export const FilterInput = styled.input`
  ${sharedField};
`;

export const FilterSelect = styled.select`
  ${sharedField};
  appearance: none;
  background-image:
    linear-gradient(45deg, transparent 50%, #28553a 50%),
    linear-gradient(135deg, #28553a 50%, transparent 50%);
  background-position:
    calc(100% - 24px) calc(50% - 3px),
    calc(100% - 18px) calc(50% - 3px);
  background-size:
    6px 6px,
    6px 6px;
  background-repeat: no-repeat;
`;

export const SearchButton = styled.button`
  min-height: 52px;
  border-radius: 14px;
  border: 0;
  background: linear-gradient(180deg, #1b6a3a 0%, #0f552d 100%);
  color: #ffffff;
  font-size: 0.96rem;
  font-weight: 700;
  box-shadow: 0 18px 32px rgba(19, 97, 51, 0.16);
`;

export const MoreFiltersButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  min-height: 42px;
  padding: 0 22px;
  margin: 16px auto 0;
  border-radius: 14px;
  border: 1px solid rgba(33, 86, 51, 0.1);
  background: rgba(252, 253, 251, 0.98);
  color: #27553a;
  font-size: 0.9rem;
  font-weight: 700;
`;

export const PageSection = styled.section`
  margin-top: 36px;

  @media (max-width: 980px) {
    margin-top: 28px;
  }
`;

export const SectionHeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 22px;

  @media (max-width: 760px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const SectionTitle = styled.h2`
  margin: 0;
  color: #14211d;
  font-size: clamp(1.8rem, 2.2vw, 2.2rem);
  line-height: 1.05;
`;

export const SectionAction = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: #1b6a3a;
  text-decoration: none;
  font-size: 0.96rem;
  font-weight: 700;
`;

export const WhyInvestPanel = styled.div`
  padding: 34px 28px;
  border-radius: 28px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.98) 0%,
    rgba(249, 252, 248, 0.98) 100%
  );
  border: 1px solid rgba(28, 86, 49, 0.08);
  box-shadow: 0 22px 50px rgba(46, 65, 50, 0.08);
`;

export const CenterTitle = styled.h2`
  margin: 0;
  text-align: center;
  color: #11201a;
  font-family: "DM Serif Display", Georgia, serif;
  font-size: clamp(2rem, 3vw, 2.8rem);
  line-height: 1.02;
`;

export const CenterAccent = styled.span`
  display: block;
  width: 34px;
  height: 3px;
  margin: 14px auto 0;
  border-radius: 999px;
  background: linear-gradient(90deg, #86bb7d, #327b49);
`;

export const ReasonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 0;
  margin-top: 30px;

  @media (max-width: 1280px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 14px;
  }

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const ReasonCard = styled.div`
  padding: 8px 18px;
  text-align: center;
  border-right: 1px solid rgba(34, 87, 51, 0.12);

  &:last-child {
    border-right: 0;
  }

  @media (max-width: 1280px) {
    border-right: 0;
    border: 1px solid rgba(34, 87, 51, 0.08);
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.78);
    padding: 20px 16px;
  }
`;

export const ReasonIcon = styled.div`
  width: 58px;
  height: 58px;
  margin: 0 auto 14px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #eef8ef 0%, #e5f3e6 100%);
  color: #2e7a45;

  svg {
    width: 28px;
    height: 28px;
    display: block;
  }
`;

export const ReasonTitle = styled.h3`
  margin: 0;
  color: #143223;
  font-size: 1.02rem;
  line-height: 1.2;
`;

export const ReasonText = styled.p`
  margin: 10px 0 0;
  color: #546564;
  font-size: 0.94rem;
  line-height: 1.55;
`;

export const BuilderGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 14px;

  @media (max-width: 1280px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const BuilderCard = styled.div`
  min-height: 126px;
  padding: 18px 14px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: rgba(255, 255, 255, 0.98);
  border: 1px solid rgba(30, 84, 49, 0.1);
  box-shadow: 0 18px 34px rgba(53, 73, 56, 0.06);
`;

export const BuilderName = styled.div`
  color: #172420;
  font-size: 1.3rem;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

export const BuilderTag = styled.div`
  margin-top: 10px;
  color: #63716c;
  font-size: 0.82rem;
  line-height: 1.4;
`;

export const SupportBand = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 28px 32px;
  border-radius: 22px;
  background:
    radial-gradient(
      circle at 86% 20%,
      rgba(126, 190, 96, 0.18),
      transparent 18%
    ),
    linear-gradient(90deg, #0d4f28 0%, #0f5d30 100%);
  color: #ffffff;

  @media (max-width: 980px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 24px 18px;
  }
`;

export const SupportCopy = styled.div`
  max-width: 540px;

  h3 {
    margin: 0;
    font-family: "DM Serif Display", Georgia, serif;
    font-size: clamp(1.8rem, 2.4vw, 2.6rem);
    line-height: 1.02;
  }

  p {
    margin: 12px 0 0;
    color: rgba(241, 248, 243, 0.9);
    font-size: 1rem;
    line-height: 1.6;
  }
`;

export const SupportActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
`;

export const SupportButton = styled.button`
  min-height: 52px;
  padding: 0 22px;
  border-radius: 14px;
  border: 1px solid
    ${({ $ghost }) =>
      $ghost ? "rgba(221, 238, 226, 0.36)" : "rgba(186, 223, 99, 0.4)"};
  background: ${({ $ghost }) =>
    $ghost
      ? "rgba(255, 255, 255, 0.06)"
      : "linear-gradient(180deg, #8abd3f 0%, #6c9f28 100%)"};
  color: #ffffff;
  font-size: 0.96rem;
  font-weight: 700;
`;

export const TrustRow = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 0;
  margin-top: 20px;
  padding: 0 8px;

  @media (max-width: 1180px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 14px;
    padding: 0;
  }

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const TrustItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 18px;
  border-right: 1px solid rgba(34, 87, 51, 0.12);

  &:last-child {
    border-right: 0;
  }

  @media (max-width: 1180px) {
    min-height: 70px;
    padding: 14px 16px;
    border-right: 0;
    border: 1px solid rgba(34, 87, 51, 0.08);
    border-radius: 18px;
    background: rgba(255, 255, 255, 0.9);
  }
`;

export const TrustIcon = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #edf7ee 0%, #e3f1e4 100%);
  color: #2c7a45;

  svg {
    width: 20px;
    height: 20px;
    display: block;
  }
`;

export const TrustLabel = styled.div`
  color: #2f4138;
  font-size: 0.92rem;
  font-weight: 600;
  line-height: 1.45;
`;
