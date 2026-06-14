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

export const ServiceIcon = styled.span`
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

