import styled from "styled-components";

export const List = styled.div`
  display: grid;
  gap: 14px;
`;

export const Item = styled.details`
  padding: 20px 24px;
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid rgba(27, 94, 60, 0.08);
  border-radius: 20px;

  summary {
    cursor: pointer;
    font-weight: 700;
    list-style: none;
  }

  summary::-webkit-details-marker {
    display: none;
  }

  p {
    margin: 14px 0 0;
    color: ${({ theme }) => theme.colors.textSecondary};
    line-height: 1.65;
  }
`;

