import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const accentStyles = {
  forest: css`
    background: linear-gradient(
      135deg,
      rgba(27, 94, 60, 0.95),
      rgba(118, 185, 71, 0.72)
    );
  `,
  sand: css`
    background: linear-gradient(
      135deg,
      rgba(244, 232, 216, 0.96),
      rgba(194, 144, 92, 0.86)
    );
  `,
  meadow: css`
    background: linear-gradient(
      135deg,
      rgba(118, 185, 71, 0.92),
      rgba(27, 94, 60, 0.72)
    );
  `,
  sky: css`
    background: linear-gradient(
      135deg,
      rgba(220, 238, 245, 0.96),
      rgba(110, 148, 170, 0.9)
    );
  `,
};

const Card = styled.article`
  overflow: hidden;
  background: #fff;
  border: 1px solid rgba(27, 94, 60, 0.08);
  border-radius: 24px;
  box-shadow: 0 18px 36px rgba(35, 60, 47, 0.08);
`;

const Visual = styled.div`
  position: relative;
  min-height: 190px;
  padding: 18px;
  ${({ $accent }) => accentStyles[$accent] || accentStyles.forest}
`;

const Badge = styled.span`
  display: inline-flex;
  padding: 8px 12px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 999px;
  font-size: 0.82rem;
  font-weight: 700;
`;

const Body = styled.div`
  padding: 22px;
`;

const PriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  align-items: flex-start;

  h3 {
    margin: 0;
    font-size: 1.18rem;
  }

  strong {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.05rem;
    white-space: nowrap;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const Location = styled.p`
  margin: 10px 0 16px;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const Meta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 18px;

  span {
    display: inline-flex;
    padding: 8px 12px;
    background: rgba(234, 246, 234, 0.95);
    border-radius: 999px;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 0.88rem;
    font-weight: 600;
  }
`;

const DetailsLink = styled(Link)`
  display: inline-flex;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
`;

function PropertyCard({ property }) {
  return (
    <Card>
      <Visual $accent={property.accent || "forest"}>
        <Badge>{property.badge}</Badge>
      </Visual>
      <Body>
        <PriceRow>
          <h3>{property.title}</h3>
          <strong>{property.price}</strong>
        </PriceRow>
        <Location>{property.location}</Location>
        <Meta>
          <span>{property.emi}</span>
          <span>{property.area}</span>
        </Meta>
        <DetailsLink to={`/property/${property.id}`}>View details</DetailsLink>
      </Body>
    </Card>
  );
}

export default PropertyCard;
