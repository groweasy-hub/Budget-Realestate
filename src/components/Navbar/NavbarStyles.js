import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
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
    gap: 12px;
    padding: 12px 14px;
    border-radius: 0 0 28px 28px;
  }
`;

export const MenuButton = styled.button`
  display: none;
  border: 0;

  @media (max-width: 1180px) {
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
    width: 44px;
    height: 44px;
    flex-basis: 44px;
    border-radius: 12px;

    svg {
      width: 28px;
      height: 28px;
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
    gap: 9px;
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
    width: 32px;
    height: 32px;
    flex-basis: 32px;

    svg {
      width: 32px;
      height: 32px;
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
      font-size: 0.8rem;
    }

    span {
      margin-top: 3px;
      font-size: 0.6rem;
      letter-spacing: 0.14em;
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
    gap: 10px;
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
    min-width: 120px;
    min-height: 36px;
    padding: 0 20px;
    border-radius: 8px;
    font-size: 0.7rem;

    svg {
      width: 12px;
      height: 12px;
      margin-left: 10px;
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
    width: 42px;
    height: 42px;
    flex: 0 0 42px;

    svg {
      width: 24px;
      height: 24px;
    }
  }
`;
