import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${({ $drawerOpen }) => ($drawerOpen ? 1004 : 1000)};
  padding: 18px 48px 0;
  background: ${({ $transparentDesktop }) =>
    $transparentDesktop ? "transparent" : "rgba(255, 255, 255, 0.98)"};
  box-shadow: ${({ $transparentDesktop }) =>
    $transparentDesktop ? "none" : "0 10px 28px rgba(38, 52, 45, 0.06)"};
  transform: translateY(${({ $visible }) => ($visible ? "0" : "-110%")});
  transition: transform 0.38s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: ${({ $visible }) => ($visible ? "auto" : "none")};

  @media (max-width: 1180px) {
    padding: 12px 16px 0;
  }

  @media (max-width: 760px) {
    padding: 0;
    background: transparent;
    box-shadow: none;
    pointer-events: ${({ $visible, $drawerOpen }) =>
      $visible || $drawerOpen ? "auto" : "none"};
  }
`;

export const Shell = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 0 0 18px;
  background: ${({ $transparentDesktop }) =>
    $transparentDesktop ? "transparent" : "transparent"};

  @media (max-width: 1180px) {
    gap: 16px;
    padding: 14px 18px;
    border-radius: 34px;
    background: rgba(255, 255, 255, 0.98);
    box-shadow:
      0 18px 42px rgba(85, 96, 88, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.72);
    backdrop-filter: blur(12px);
  }

  @media (max-width: 760px) {
    position: relative;
    z-index: 1003;
    gap: 9px;
    min-height: 78px;
    padding: 12px 14px;
    border-radius: 0 0 28px 28px;
    background: rgba(255, 255, 255, 0.98);
    box-shadow:
      0 12px 26px rgba(85, 96, 88, 0.11),
      inset 0 1px 0 rgba(255, 255, 255, 0.82);
  }
`;

export const MenuButton = styled.button`
  display: none;
  border: 0;

  @media (max-width: 1180px) {
    display: none;
  }

  @media (max-width: 760px) {
    width: 52px;
    height: 52px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 52px;
    border-radius: 16px;
    background: transparent;
    color: #0f6d34;
    cursor: pointer;
    padding: 0;

    svg {
      width: 32px;
      height: 32px;
      display: block;
    }
  }

  @media (max-width: 760px) {
    width: 38px;
    height: 38px;
    flex-basis: 38px;
    border-radius: 12px;

    svg {
      width: 30px;
      height: 30px;
    }
  }
`;

export const Brand = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: #0d2017;
  text-decoration: none;

  @media (max-width: 1180px) {
    flex: 0 0 auto;
    min-width: 0;
    gap: 12px;
  }

  @media (max-width: 760px) {
    gap: 7px;
    flex: 1 1 auto;
    min-width: 0;
  }
`;

export const BrandMark = styled.span`
  width: 32px;
  height: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #1f7a42;

  svg {
    width: 38px;
    height: 38px;
    display: block;
  }

  @media (max-width: 1180px) {
    width: 64px;
    height: 64px;
    flex: 0 0 64px;

    svg {
      width: 64px;
      height: 64px;
    }
  }

  @media (max-width: 760px) {
    width: 38px;
    height: 38px;
    flex-basis: 38px;

    svg {
      width: 38px;
      height: 38px;
    }
  }
`;

export const BrandCopy = styled.div`
  line-height: 0.92;

  strong {
    display: block;
    font-size: 1.08rem;
    font-weight: 900;
    letter-spacing: 0.01em;
    text-transform: uppercase;
  }

  span {
    display: block;
    color: #278145;
    font-size: 0.9rem;
    font-weight: 800;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  @media (max-width: 1180px) {
    strong {
      font-size: 1.52rem;
      font-weight: 900;
      letter-spacing: 0.01em;
    }

    span {
      margin-top: 4px;
      font-size: 0.88rem;
      font-weight: 600;
      letter-spacing: 0.18em;
    }
  }

  @media (max-width: 760px) {
    strong {
      font-size: 0.92rem;
      letter-spacing: 0;
    }

    span {
      margin-top: 3px;
      font-size: 0.58rem;
      letter-spacing: 0.16em;
    }
  }
`;

export const NavLinks = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex: 1 1 480px;

  @media (max-width: 1180px) {
    display: none;
  }

  @media (max-width: 760px) {
    display: none;
  }
`;

export const NavLinkItem = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-height: 36px;
  padding: 0 10px;
  color: ${({ $active }) => ($active ? "#1f7a42" : "#1b211d")};
  text-decoration: none;
  font-size: 0.96rem;
  font-weight: ${({ $active }) => ($active ? 700 : 500)};

  @media (max-width: 760px) {
    min-height: 32px;
    padding: 0 6px;
    font-size: 0.9rem;
  }
`;

export const NavChevron = styled.span`
  width: 12px;
  height: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 10px;
    height: 10px;
    display: block;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-left: auto;

  @media (max-width: 1180px) {
    gap: 12px;
    flex: 0 0 auto;
  }

  @media (max-width: 760px) {
    gap: 8px;
    margin-left: 0;
  }
`;

export const PrimaryButton = styled.button`
  min-height: 44px;
  padding: 0 22px;
  border-radius: 8px;
  border: 0;
  background: linear-gradient(180deg, #17753e 0%, #0d612f 100%);
  color: #ffffff;
  font-size: 0.95rem;
  font-weight: 700;
  box-shadow: 0 14px 28px rgba(18, 104, 53, 0.15);
  cursor: pointer;

  svg {
    width: 12px;
    height: 12px;
    margin-left: 6px;
    vertical-align: middle;
  }

  @media (max-width: 1180px) {
    min-width: clamp(180px, 28vw, 320px);
    min-height: 68px;
    padding: 0 clamp(20px, 3vw, 36px);
    border-radius: 20px;
    background: linear-gradient(180deg, #0f7a32 0%, #085f24 100%);
    font-size: 1.22rem;
    font-weight: 600;
    letter-spacing: -0.01em;
    box-shadow: 0 10px 26px rgba(14, 105, 46, 0.22);

    svg {
      width: 22px;
      height: 22px;
      margin-left: 12px;
    }
  }

  @media (max-width: 760px) {
    min-width: 118px;
    min-height: 44px;
    padding: 0 16px;
    border-radius: 10px;
    font-size: 0.78rem;
    white-space: nowrap;

    svg {
      width: 15px;
      height: 15px;
      margin-left: 8px;
    }
  }
`;

export const ButtonLabelDesktop = styled.span`
  display: inline;

  @media (max-width: 1180px) {
    display: none;
  }
`;

export const ButtonLabelMobile = styled.span`
  display: none;

  @media (max-width: 1180px) {
    display: inline;
  }
`;

export const ProfileButton = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid rgba(28, 86, 49, 0.12);
  background: linear-gradient(180deg, #ffffff 0%, #f7faf7 100%);
  color: #266c3c;
  cursor: pointer;

  svg {
    width: 22px;
    height: 22px;
    display: block;
    margin: 0 auto;
  }

  @media (max-width: 1180px) {
    width: 60px;
    height: 60px;
    flex: 0 0 60px;
    border: 0;
    border-radius: 50%;
    background: #f0f1ef;
    color: #4a5a50;
    box-shadow: none;

    svg {
      width: 28px;
      height: 28px;
    }
  }

  @media (max-width: 760px) {
    width: 44px;
    height: 44px;
    flex: 0 0 44px;

    svg {
      width: 25px;
      height: 25px;
    }
  }
`;

export const MobileDrawer = styled.div`
  display: none;

  @media (max-width: 760px) {
    position: fixed;
    inset: 0;
    z-index: 1001;
    display: block;
    pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
    visibility: ${({ $open }) => ($open ? "visible" : "hidden")};
    transition: visibility 0.28s ease;
  }
`;

export const DrawerCloseBackdrop = styled.button`
  display: none;

  @media (max-width: 760px) {
    position: fixed;
    inset: 0;
    display: block;
    border: 0;
    background: rgba(16, 28, 22, 0.26);
    opacity: 0;
    padding: 0;
  }
`;

export const DrawerPanel = styled.aside`
  display: none;

  @media (max-width: 760px) {
    position: fixed;
    top: 0;
    left: 0;
    bottom: auto;
    width: min(100vw, 430px);
    height: 100vh;
    height: 100dvh;
    display: flex;
    flex-direction: column;
    padding: 98px 14px 12px;
    background: #ffffff;
    border-radius: 0 0 26px 0;
    box-shadow:
      18px 0 42px rgba(12, 29, 20, 0.16),
      inset -1px 0 0 rgba(18, 85, 46, 0.06);
    overflow-y: auto;
    overscroll-behavior: contain;
    transform: translateX(${({ $open }) => ($open ? "0" : "-105%")});
    transition: transform 0.34s cubic-bezier(0.22, 0.61, 0.36, 1);
  }
`;

export const DrawerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-height: 100%;
  padding: 0 10px 8px;
`;

export const DrawerUser = styled.section`
  display: grid;
  grid-template-columns: 78px minmax(0, 1fr);
  align-items: center;
  column-gap: 10px;
  padding: 26px 8px 28px;
  border-bottom: 1px solid rgba(24, 36, 30, 0.1);
`;

export const DrawerProfileIcon = styled.div`
  width: 58px;
  height: 58px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: #0b7337;
  background:
    radial-gradient(
      circle at 35% 28%,
      rgba(255, 255, 255, 0.75),
      transparent 45%
    ),
    linear-gradient(135deg, #eef6ef 0%, #dcebe0 100%);

  svg {
    width: 30px;
    height: 30px;
  }
`;

export const DrawerUserCopy = styled.div`
  min-width: 0;

  > span {
    display: block;
    color: #5a5d64;
    font-size: 0.93rem;
    font-weight: 600;
    line-height: 1.3;
  }

  > strong {
    display: block;
    margin-top: 8px;
    color: #090d1b;
    font-size: 1.02rem;
    font-weight: 800;
    line-height: 1.15;
  }
`;

export const DrawerActions = styled.div`
  display: flex;
  gap: 14px;
  margin-top: 18px;

  button {
    min-height: 34px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border-radius: 10px;
    padding: 0 22px;
    color: #0b7135;
    border: 1px solid rgba(13, 113, 53, 0.26);
    background: #ffffff;
    font-size: 0.8rem;
    font-weight: 800;
    white-space: nowrap;
    cursor: pointer;
  }

  button:first-child {
    color: #ffffff;
    border-color: transparent;
    background: linear-gradient(180deg, #0d8038 0%, #006226 100%);
    box-shadow: 0 10px 20px rgba(10, 111, 50, 0.18);
  }

  svg {
    width: 22px;
    height: 22px;
    flex: 0 0 22px;
  }
`;

export const DrawerNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 0 6px 22px;
  border-bottom: 1px solid rgba(24, 36, 30, 0.1);
`;

export const DrawerNavItem = styled(Link)`
  min-height: 46px;
  display: grid;
  grid-template-columns: 44px minmax(0, 1fr) 22px;
  align-items: center;
  column-gap: 24px;
  color: ${({ $active }) => ($active ? "#006d31" : "#080c19")};
  text-decoration: none;
  font-size: 1.05rem;
  font-weight: ${({ $active }) => ($active ? 800 : 700)};

  > svg {
    width: 22px;
    height: 22px;
    justify-self: end;
    color: ${({ $active }) => ($active ? "#006d31" : "#4c5058")};
  }
`;

export const DrawerNavIcon = styled.span`
  width: 44px;
  height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  color: #087338;
  background:
    radial-gradient(
      circle at 30% 24%,
      rgba(255, 255, 255, 0.72),
      transparent 44%
    ),
    linear-gradient(135deg, #f3f7f3 0%, #e4efe8 100%);

  svg {
    width: 28px;
    height: 28px;
    display: block;
  }
`;

export const DrawerHelp = styled.section`
  display: grid;
  grid-template-columns: 68px minmax(0, 1fr);
  column-gap: 18px;
  align-items: center;
  margin-top: -2px;
  padding: 18px 18px;
  border-radius: 6px;
  background:
    radial-gradient(
      circle at left center,
      rgba(206, 226, 213, 0.76),
      transparent 38%
    ),
    linear-gradient(90deg, #eef5ef 0%, #f7fbf8 100%);
`;

export const DrawerHelpIcon = styled.div`
  width: 68px;
  height: 68px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: #0b7135;
  background: linear-gradient(135deg, #e8f3ea 0%, #d8eadf 100%);

  svg {
    width: 38px;
    height: 38px;
  }
`;

export const DrawerHelpCopy = styled.div`
  min-width: 0;

  strong {
    display: block;
    color: #080c19;
    font-size: 1rem;
    font-weight: 800;
    line-height: 1.2;
  }

  span {
    display: block;
    margin-top: 9px;
    color: #51545c;
    font-size: 0.84rem;
    font-weight: 600;
    line-height: 1.35;
  }

  button {
    min-height: 42px;
    display: inline-flex;
    align-items: center;
    gap: 12px;
    margin-top: 14px;
    padding: 0 18px;
    border: 0;
    border-radius: 9px;
    background: linear-gradient(180deg, #0b8038 0%, #006126 100%);
    color: #ffffff;
    font-size: 0.92rem;
    font-weight: 800;
    cursor: pointer;
    white-space: nowrap;
  }

  button svg {
    width: 20px;
    height: 20px;
  }
`;

export const DrawerFooter = styled.footer`
  margin-top: auto;
  padding: 14px 0 0;
  border-top: 1px solid rgba(24, 36, 30, 0.1);
  text-align: center;

  > span {
    display: block;
    color: #006d31;
    font-size: 0.9rem;
    font-weight: 600;
    line-height: 1.2;
  }
`;

export const DrawerSocials = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 22px;
  padding-top: 10px;
`;

export const DrawerSocialLink = styled.a`
  width: 44px;
  height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: #087338;
  background:
    radial-gradient(
      circle at 30% 24%,
      rgba(255, 255, 255, 0.7),
      transparent 45%
    ),
    linear-gradient(135deg, #eef5f0 0%, #e1ece5 100%);

  svg {
    width: 23px;
    height: 23px;
  }
`;
