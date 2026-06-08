import { Link } from "react-router-dom";
import styled from "styled-components";

export const Shell = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 0 0 18px;

  @media (max-width: 1180px) {
    flex-wrap: wrap;
  }
`;

export const Brand = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: #0d2017;
  text-decoration: none;
`;

export const BrandMark = styled.span`
  width: 42px;
  height: 42px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #1f7a42;

  svg {
    width: 38px;
    height: 38px;
    display: block;
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
`;

export const NavLinks = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex: 1 1 480px;
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

  svg {
    width: 12px;
    height: 12px;
    margin-left: 6px;
    vertical-align: middle;
  }
`;

export const ProfileButton = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid rgba(28, 86, 49, 0.12);
  background: linear-gradient(180deg, #ffffff 0%, #f7faf7 100%);
  color: #266c3c;

  svg {
    width: 22px;
    height: 22px;
    display: block;
    margin: 0 auto;
  }
`;
