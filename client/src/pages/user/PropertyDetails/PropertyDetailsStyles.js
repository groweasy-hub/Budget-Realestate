import { Link } from "react-router-dom";
import styled from "styled-components";

export const DetailHero = styled.section`
  padding: 48px;

  @media (max-width: 980px) {
    padding: 24px 20px 48px;
  }
`;

export const DetailCard = styled.div`
  padding: 40px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.95),
    rgba(234, 246, 234, 0.88)
  );
  border: 1px solid rgba(27, 94, 60, 0.08);
  border-radius: 32px;
  box-shadow: 0 24px 60px rgba(35, 60, 47, 0.12);

  h1 {
    margin: 0;
    font-family: "Poppins", sans-serif;
    font-size: clamp(2rem, 3vw, 3rem);
    line-height: 1.05;
  }

  p {
    margin: 12px 0 0;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 1.03rem;
    line-height: 1.65;
  }

  @media (max-width: 980px) {
    padding: 28px 22px;
  }
`;

export const DetailMeta = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  margin: 28px 0;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

export const DetailMetaCard = styled.div`
  padding: 20px;
  background: rgba(255, 255, 255, 0.78);
  border-radius: 20px;

  span {
    display: block;
    color: #667673;
    font-size: 0.88rem;
  }

  strong {
    display: block;
    margin-top: 5px;
    font-size: 1rem;
  }
`;

export const DetailActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
`;

export const ActionLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 52px;
  padding: 0 24px;
  border-radius: 999px;
  font-weight: 700;
  background: ${({ $ghost }) => ($ghost ? "transparent" : "#fff")};
  color: ${({ theme }) => theme.colors.primary};
  border: ${({ $ghost, theme }) =>
    $ghost ? `1px solid ${theme.colors.primary}` : "0"};
`;

export const OverviewGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;

  @media (max-width: 1280px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

export const OverviewCard = styled.article`
  padding: 24px;
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(27, 94, 60, 0.08);
  border-radius: 24px;

  h3 {
    margin: 0 0 12px;
    font-size: 1.08rem;
  }

  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.textSecondary};
    line-height: 1.65;
  }
`;

