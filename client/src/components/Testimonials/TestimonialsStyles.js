import styled from "styled-components";

export const Grid = styled.div`
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

export const Card = styled.article`
  padding: 24px;
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(27, 94, 60, 0.08);
  border-radius: 24px;
  box-shadow: 0 18px 36px rgba(35, 60, 47, 0.06);

  p {
    margin: 0 0 16px;
    color: ${({ theme }) => theme.colors.textSecondary};
    line-height: 1.7;
  }

  strong {
    display: block;
    margin-bottom: 4px;
  }

  span {
    display: block;
    color: #667673;
    font-size: 0.88rem;
  }
`;

export const Avatar = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  margin-bottom: 16px;
  border-radius: 16px;
  background: linear-gradient(
    180deg,
    rgba(239, 248, 238, 0.95),
    rgba(232, 243, 229, 0.9)
  );
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 800;
`;

export const Rating = styled.div`
  margin-bottom: 12px;
  color: ${({ theme }) => theme.colors.accent};
  letter-spacing: 0.18em;
`;
