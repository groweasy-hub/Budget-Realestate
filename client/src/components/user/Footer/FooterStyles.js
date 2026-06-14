import { Link } from "react-router-dom";
import styled from "styled-components";

export const Shell = styled.footer`
  position: relative;
  overflow: hidden;
  margin: 0;
  background: transparent;
`;

export const Wrap = styled.div`
  position: relative;
  width: 100%;

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

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 34px 34px 0 0;
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    left: -40px;
    bottom: 0;
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

  @media (max-width: 760px) {
    min-height: auto;

    padding: 2px 4px 0;
    border-radius: 30px 30px 0 0;
    background:
      radial-gradient(
        circle at 14% 50%,
        rgba(34, 129, 68, 0.18),
        transparent 18%
      ),
      radial-gradient(
        circle at 80% 50%,
        rgba(100, 174, 122, 0.12),
        transparent 22%
      ),
      linear-gradient(90deg, #06281b 0%, #041c13 55%, #083722 100%);
  }
`;

export const DesktopFooterContent = styled.div`
  display: block;

  @media (max-width: 760px) {
    display: none;
  }
`;

export const MobileFooterContent = styled.div`
  display: none;
  border-radius: 30px 30px 0 0;
  @media (max-width: 760px) {
    display: block;
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

  @media (max-width: 760px) {
    grid-template-columns: 1.1fr 1.28fr 1.06fr 0.98fr;
    gap: 36px;
    padding: 14px 18px 18px;
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

  @media (max-width: 760px) {
    padding-left: 0;
    border-left: 0;
  }
`;

export const Brand = styled.div`
  max-width: 330px;

  @media (max-width: 760px) {
    max-width: 330px;
  }
`;

export const BrandLogo = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 14px;
  color: #f8faf7;
  text-decoration: none;

  @media (max-width: 760px) {
    gap: 14px;
  }
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

  @media (max-width: 760px) {
    width: 60px;
    height: 60px;
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

  @media (max-width: 760px) {
    strong {
      font-size: 1.48rem;
    }

    span {
      font-size: 1.38rem;
    }
  }
`;

export const BrandText = styled.p`
  margin: 20px 0 0;
  color: rgba(247, 250, 246, 0.92);
  font-size: 0.98rem;
  line-height: 1.56;

  @media (max-width: 760px) {
    margin-top: 20px;
    font-size: 0.98rem;
    line-height: 1.56;
  }
`;

export const SocialRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 20px;

  @media (max-width: 760px) {
    gap: 14px;
    margin-top: 20px;
  }
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

  @media (max-width: 760px) {
    width: 52px;
    height: 52px;
    border-radius: 16px;

    svg {
      width: 25px;
      height: 25px;
    }
  }
`;

export const SectionTitle = styled.h3`
  margin: 8px 0 0;
  color: #ffffff;
  font-size: 1.04rem;
  font-weight: 700;

  @media (max-width: 760px) {
    margin-top: 8px;
    font-size: 1.04rem;
  }
`;

export const NavGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px 36px;
  margin-top: 22px;

  @media (max-width: 760px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 14px 36px;
    margin-top: 22px;
  }
`;

export const NavList = styled.div`
  display: grid;
  gap: 22px;

  @media (max-width: 760px) {
    gap: 22px;
  }
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

  @media (max-width: 760px) {
    gap: 16px;
    font-size: 0.97rem;

    svg {
      width: 14px;
      height: 14px;
    }
  }
`;

export const ContactList = styled.div`
  display: grid;
  gap: 22px;
  margin-top: 22px;

  @media (max-width: 760px) {
    gap: 22px;
    margin-top: 22px;
  }
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

  @media (max-width: 760px) {
    grid-template-columns: 28px minmax(0, 1fr);
    gap: 14px;
    font-size: 0.97rem;

    svg {
      width: 24px;
      height: 24px;
    }
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

  @media (max-width: 760px) {
    min-height: auto;
    padding: 28px 28px 22px;
  }
`;

export const SupportHeader = styled.div`
  display: grid;
  grid-template-columns: 88px minmax(0, 1fr);
  gap: 20px;
  align-items: start;

  @media (max-width: 760px) {
    grid-template-columns: 88px minmax(0, 1fr);
    gap: 20px;
  }
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

  @media (max-width: 760px) {
    width: 88px;
    height: 88px;

    svg {
      width: 42px;
      height: 42px;
    }
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

  @media (max-width: 760px) {
    margin-top: 10px;
    font-size: 0.97rem;
    line-height: 1.5;
  }
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

  @media (max-width: 760px) {
    min-height: 54px;
    margin-top: 26px;
    border-radius: 14px;
    font-size: 1rem;
    gap: 14px;

    svg {
      width: 22px;
      height: 22px;
    }
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

  @media (max-width: 760px) {
    margin: 18px 8px 20px;
    padding: 16px 18px;
  }
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

  @media (max-width: 760px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
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

  @media (max-width: 760px) {
    padding: 4px 20px;
    border-left: 1px solid rgba(222, 235, 220, 0.2);
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

  @media (max-width: 760px) {
    width: 48px;
    height: 48px;

    svg {
      width: 44px;
      height: 44px;
    }
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

  @media (max-width: 760px) {
    font-size: 0.84rem;
    line-height: 1.34;
  }
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

  @media (max-width: 760px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 18px;
    padding: 4px 20px 2px;
  }
`;

export const MobileTopRow = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.18fr) minmax(0, 0.82fr);
  gap: 8px;
  align-items: start;
  @media (max-width: 560px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  padding: 8px 10px 0;
`;

export const MobileBrand = styled.div`
  min-width: 0;

  ${BrandLogo} {
    gap: 12px;
  }

  ${BrandMark} {
    width: 40px;
    height: 40px;
  }

  ${BrandWordmark} {
    strong {
      font-size: 0.9rem;
    }

    span {
      font-size: 0.82rem;
    }
  }

  ${BrandText} {
    max-width: 350px;
    margin-top: 8px;
    font-size: 0.62rem;
    line-height: 1.28;
    color: rgba(247, 250, 246, 0.94);
  }
`;

export const MobileFollowGroup = styled.div`
  min-width: 0;
  padding-top: 0;
  padding-left: 10px;

  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.04fr);
  column-gap: 6px;
  row-gap: 4px;
  align-items: start;
`;

export const MobileFollowTitle = styled.h3`
  margin: 2px 0 0;
  color: #ffffff;
  font-size: 0.72rem;
  font-weight: 700;
  grid-column: 1;
`;

export const MobileSocialRow = styled(SocialRow)`
  margin-top: 4px;
  gap: 6px;
  grid-column: 1;

  ${SocialButton} {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.01);
  }

  svg {
    width: 12px;
    height: 12px;
  }
`;

export const MobileDivider = styled.div`
  height: 1px;
  margin: 10px 0 10px;
  background: rgba(222, 235, 220, 0.16);
`;

export const MobileNavGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0;
  margin: 0 0 10px;

  @media (max-width: 560px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 14px 0;
  }
`;

export const MobileNavItem = styled(Link)`
  display: grid;
  justify-items: center;
  gap: 6px;
  padding: 0 6px;
  text-decoration: none;
  color: #ffffff;
  position: relative;

  &:not(:first-child)::before {
    content: "";
    position: absolute;
    left: 0;
    top: 10px;
    bottom: 10px;
    width: 1px;
    background: rgba(222, 235, 220, 0.16);
  }

  @media (max-width: 560px) {
    &:not(:first-child)::before {
      display: none;
    }
  }
`;

export const MobileNavIconWrap = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: rgba(115, 165, 69, 0.16);
  color: #b7d23c;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);

  svg {
    width: 16px;
    height: 16px;
    display: block;
  }
`;

export const MobileQuickLabel = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: rgba(247, 250, 246, 0.98);
  font-size: 0.64rem;
  font-weight: 700;
  line-height: 1.2;
  text-align: center;

  svg {
    width: 8px;
    height: 8px;
    color: #b7d23c;
    flex: 0 0 auto;
  }
`;

export const MobileInfoCard = styled.div`
  padding: 10px 8px 8px;
  border-radius: 14px;
  border: 1px solid rgba(199, 214, 194, 0.24);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.015) 0%,
    rgba(255, 255, 255, 0.01) 100%
  );
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.03);
`;

export const MobileContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0;
  padding: 0 2px 8px;

  @media (max-width: 560px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 12px 0;
  }
`;

export const MobileContactItem = styled.div`
  display: grid;
  justify-items: center;
  gap: 6px;
  padding: 0 6px;
  color: rgba(247, 250, 246, 0.96);
  text-align: center;
  position: relative;

  &:not(:first-child)::before {
    content: "";
    position: absolute;
    left: 0;
    top: 2px;
    bottom: 2px;
    width: 1px;
    background: rgba(222, 235, 220, 0.16);
  }

  @media (max-width: 560px) {
    &:not(:first-child)::before {
      display: none;
    }
  }
`;

export const MobileContactIconWrap = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 10px;
  background: rgba(122, 173, 77, 0.16);
  color: #b7d23c;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 12px;
    height: 12px;
    display: block;
  }
`;

export const MobileContactText = styled.div`
  display: grid;
  gap: 3px;
  color: rgba(247, 250, 246, 0.95);
  font-size: 0.58rem;
  line-height: 1.2;
`;

export const MobileSupportCopy = styled.div`
  display: grid;
  grid-template-columns: 38px minmax(0, 1fr);
  gap: 8px;
  align-items: center;
`;

export const MobileSupportCard = styled.div`
  display: grid;
  grid-column: 2;
  grid-row: 1 / span 2;
  gap: 6px;
  align-items: center;
  margin-top: 0;
  padding: 6px 6px 6px;
  border-radius: 10px;
  border: 1px solid rgba(199, 214, 194, 0.24);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.02) 0%,
    rgba(255, 255, 255, 0.012) 100%
  );

  ${SupportIconWrap} {
    width: 32px;
    height: 32px;

    svg {
      width: 16px;
      height: 16px;
    }
  }

  ${SupportTitle} {
    margin-top: 0;
    font-size: 0.62rem;
  }

  ${SupportText} {
    margin-top: 2px;
    font-size: 0.52rem;
    line-height: 1.12;
  }

  @media (max-width: 560px) {
    grid-column: 2;
    grid-row: 1 / span 2;
  }
`;

export const MobileSupportButton = styled(SupportButton)`
  margin-top: 0;
  min-height: 24px;
  border-radius: 7px;
  border-color: rgba(199, 214, 194, 0.42);
  background: linear-gradient(180deg, #ffffff 0%, #f5faf6 100%);
  color: #166f39;
  white-space: nowrap;
  gap: 6px;
  font-size: 0.49rem;

  svg {
    color: #1a7c41;
    width: 11px;
    height: 11px;
  }

  @media (max-width: 560px) {
    width: 100%;
  }
`;

export const MobileTrustStrip = styled.div`
  margin: 8px 0 8px;
  padding: 6px 2px 6px;
`;

export const MobileTrustGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0;

  @media (max-width: 560px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 8px 0;
  }
`;

export const MobileTrustItem = styled.div`
  display: grid;
  grid-template-columns: 18px minmax(0, 1fr);
  gap: 6px;
  align-items: start;
  padding: 0 8px;
  border-left: 1px solid rgba(222, 235, 220, 0.16);

  &:first-child {
    border-left: 0;
  }

  ${TrustIconWrap} {
    width: 18px;
    height: 18px;

    svg {
      width: 16px;
      height: 16px;
    }
  }

  ${TrustTitle} {
    font-size: 0.56rem;
  }

  ${TrustText} {
    margin-top: 1px;
    font-size: 0.48rem;
    line-height: 1.14;
  }

  @media (max-width: 560px) {
    &:nth-child(odd) {
      border-left: 0;
    }
  }
`;

export const MobileBottomRow = styled.div`
  display: grid;
  justify-items: center;
  gap: 6px;
  padding-top: 6px;
  border-top: 1px solid rgba(222, 235, 220, 0.14);
  text-align: center;
`;

export const MobileLegalLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  padding-bottom: 25px;

  a,
  span {
    color: rgba(247, 250, 246, 0.92);
    font-size: 0.5rem;
    text-decoration: none;
  }
`;

export const Copyright = styled.p`
  color: rgba(247, 250, 246, 0.92);
  font-size: 0.92rem;

  @media (max-width: 760px) {
    margin: 10px 0 10px;
    font-size: 0.62rem;
  }
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

  @media (max-width: 760px) {
    gap: 20px;

    a,
    span {
      font-size: 0.92rem;
    }
  }
`;

