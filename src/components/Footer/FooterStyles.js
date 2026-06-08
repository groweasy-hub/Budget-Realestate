import { Link } from "react-router-dom";
import styled from "styled-components";

export const Shell = styled.footer`
  position: relative;
  overflow: hidden;
  margin: 0 0 0;

  background: linear-gradient(180deg, #f7f8f5 0%, #f5f7f4 100%);
`;

export const Wrap = styled.div`
  position: relative;
  width: 100%;
  margin: 0;
  padding: 24px 34px 24px;
  border-radius: 34px 34px 0 0;
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
  box-shadow: 0 22px 42px rgba(11, 75, 36, 0.18)

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 34px 34px 0 0;
    border: 1px solid rgba(159, 186, 117, 0.12);
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    left: -40px;
    bottom: -26px;
    width: 130px;
    height: 130px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(124, 176, 80, 0.26) 0%,
      rgba(124, 176, 80, 0.1) 42%,
      rgba(124, 176, 80, 0) 76%
    );
    filter: blur(4px);
    pointer-events: none;
  }

  @media (max-width: 1180px) {
    padding: 22px 18px 20px;
  }
`;

export const TopSection = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 1.28fr 1.06fr 0.98fr;
  gap: 36px;
  align-items: start;
  padding: 4px 8px 18px;

  @media (max-width: 1400px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

export const TopColumn = styled.div`
  min-width: 0;
`;

export const DividerColumn = styled(TopColumn)`
  padding-left: 62px;
  border-left: 1px solid rgba(222, 235, 220, 0.2);

  @media (max-width: 1400px) {
    padding-left: 0;
    border-left: 0;
  }
`;

export const Brand = styled.div`
  max-width: 330px;
`;

export const BrandLogo = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 14px;
  color: #f8faf7;
  text-decoration: none;
`;

export const BrandMark = styled.div`
  width: 60px;
  height: 60px;
  color: #b1d246;

  svg {
    width: 100%;
    height: 100%;
    display: block;
  }
`;

export const BrandWordmark = styled.div`
  display: grid;
  line-height: 0.94;

  strong {
    color: #b1d246;
    font-family: "DM Serif Display", Georgia, serif;
    font-size: 1.38rem;
    font-weight: 400;
    letter-spacing: -0.02em;
  }

  span {
    color: #ffffff;
    font-family: "DM Serif Display", Georgia, serif;
    font-size: 1.28rem;
    font-weight: 400;
    letter-spacing: -0.02em;
  }
`;

export const BrandText = styled.p`
  margin: 20px 0 0;
  color: rgba(247, 250, 246, 0.92);
  font-size: 0.98rem;
  line-height: 1.56;
`;

export const SocialRow = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-top: 20px;
`;

export const SocialButton = styled.a`
  width: 52px;
  height: 52px;
  border-radius: 16px;
  border: 1px solid rgba(214, 228, 209, 0.34);
  background: rgba(255, 255, 255, 0.02);
  color: #ffffff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);

  svg {
    width: 25px;
    height: 25px;
    display: block;
  }
`;

export const SectionTitle = styled.h3`
  margin: 8px 0 0;
  color: #ffffff;
  font-size: 1.04rem;
  font-weight: 700;
`;

export const NavGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px 36px;
  margin-top: 22px;
`;

export const NavList = styled.div`
  display: grid;
  gap: 22px;
`;

export const NavLinkItem = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 16px;
  color: rgba(247, 250, 246, 0.96);
  font-size: 0.97rem;
  font-weight: 500;
  text-decoration: none;

  svg {
    width: 14px;
    height: 14px;
    color: #b1d246;
    flex: 0 0 auto;
  }
`;

export const ContactList = styled.div`
  display: grid;
  gap: 22px;
  margin-top: 22px;
`;

export const ContactItem = styled.div`
  display: grid;
  grid-template-columns: 28px minmax(0, 1fr);
  gap: 14px;
  align-items: center;
  color: rgba(247, 250, 246, 0.94);
  font-size: 0.97rem;
  line-height: 1.4;

  svg {
    width: 24px;
    height: 24px;
    color: #b1d246;
  }
`;

export const SupportCard = styled.div`
  min-height: 228px;
  padding: 28px 28px 22px;
  border-radius: 20px;
  border: 1px solid rgba(199, 214, 194, 0.34);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.02) 0%,
    rgba(255, 255, 255, 0.015) 100%
  );
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
`;

export const SupportHeader = styled.div`
  display: grid;
  grid-template-columns: 88px minmax(0, 1fr);
  gap: 20px;
  align-items: start;
`;

export const SupportIconWrap = styled.div`
  width: 88px;
  height: 88px;
  border-radius: 50%;
  background: rgba(116, 168, 74, 0.12);
  color: #b1d246;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 42px;
    height: 42px;
  }
`;

export const SupportTitle = styled.h4`
  margin: 8px 0 0;
  color: #ffffff;
  font-size: 0.98rem;
  font-weight: 700;
  line-height: 1.35;
`;

export const SupportText = styled.p`
  margin: 10px 0 0;
  color: rgba(247, 250, 246, 0.92);
  font-size: 0.97rem;
  line-height: 1.5;
`;

export const SupportButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  width: 100%;
  min-height: 54px;
  margin-top: 26px;
  border-radius: 14px;
  border: 1px solid rgba(199, 214, 194, 0.36);
  background: rgba(255, 255, 255, 0.02);
  color: #ffffff;
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;

  svg {
    width: 22px;
    height: 22px;
    color: #b1d246;
  }
`;

export const TrustStrip = styled.div`
  margin: 18px 8px 20px;
  padding: 16px 18px;
  border-radius: 18px;
  border: 1px solid rgba(199, 214, 194, 0.28);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.015) 0%,
    rgba(255, 255, 255, 0.01) 100%
  );
`;

export const TrustGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0;

  @media (max-width: 1280px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px 0;
  }

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

export const TrustItem = styled.div`
  display: grid;
  grid-template-columns: 58px minmax(0, 1fr);
  gap: 12px;
  align-items: center;
  padding: 4px 20px;
  border-left: 1px solid rgba(222, 235, 220, 0.2);

  &:first-child {
    border-left: 0;
  }

  @media (max-width: 1280px) {
    &:nth-child(odd) {
      border-left: 0;
    }
  }

  @media (max-width: 860px) {
    padding: 0;
    border-left: 0;
  }
`;

export const TrustIconWrap = styled.div`
  width: 48px;
  height: 48px;
  color: #b1d246;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 44px;
    height: 44px;
    display: block;
  }
`;

export const TrustTitle = styled.div`
  color: #ffffff;
  font-size: 0.9rem;
  font-weight: 700;
  line-height: 1.3;
`;

export const TrustText = styled.div`
  margin-top: 4px;
  color: rgba(247, 250, 246, 0.92);
  font-size: 0.84rem;
  line-height: 1.34;
`;

export const BottomRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 4px 20px 2px;

  @media (max-width: 980px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Copyright = styled.p`
  margin: 0;
  color: rgba(247, 250, 246, 0.92);
  font-size: 0.92rem;
`;

export const LegalLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;

  a,
  span {
    color: rgba(247, 250, 246, 0.92);
    font-size: 0.92rem;
    text-decoration: none;
  }
`;
