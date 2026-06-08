import styled from "styled-components";
import {
  InfoCard,
  SidebarCard,
} from "../BuyProjectDetails/BuyProjectDetailsStyles";

export const RentPriceRow = styled.div`
  display: inline-flex;
  align-items: baseline;
  gap: 8px;
  flex-wrap: wrap;
`;

export const RentPriceUnit = styled.span`
  color: #0f6b34;
  font-size: 2rem;
  font-weight: 700;
  line-height: 1;
`;

export const RentMetaNote = styled.div`
  margin-top: 8px;
  color: #67746e;
  font-size: 0.94rem;
  font-weight: 500;
`;

export const RentSpecGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
  margin-top: 18px;
`;

export const RentSpecCard = styled.div`
  display: flex;
  align-items: center;

  gap: 8px;
  min-width: 0;
  padding: 6px 4px;
  border-right: 1px solid
    ${({ $surface }) =>
      $surface === "dark"
        ? "rgba(222, 238, 229, 0.12)"
        : "rgba(35, 74, 58, 0.08)"};

  &:last-child {
    border-right: 0;
  }

  svg {
    width: 18px;
    height: 18px;
    color: ${({ $surface }) => ($surface === "dark" ? "#b7ebcb" : "#2e7b46")};
    flex: 0 0 auto;
  }
`;

export const RentSpecValue = styled.div`
  color: #17251f;
  font-size: 0.68rem;
  font-weight: 800;
  line-height: 1.1;
`;

export const RentSpecLabel = styled.div`
  margin-top: 5px;
  color: #54645d;
  font-size: 0.78rem;
  font-weight: 600;
`;

export const RentDetailsGrid = styled.section`
  display: grid;
  grid-template-columns: 1.02fr 1.2fr 1.08fr 1fr;
  gap: 14px;
  margin-top: 16px;
  align-items: start;
`;

export const RentSummaryCard = styled(SidebarCard)`
  min-height: 218px;
  padding: 16px 18px;
`;

export const SummaryList = styled.div`
  display: grid;
  gap: 14px;
  margin-top: 18px;
`;

export const SummaryItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  color: #596862;
  font-size: 0.92rem;
`;

export const SummaryLabel = styled.span`
  color: #596862;
`;

export const SummaryValue = styled.span`
  color: #192720;
  font-weight: 700;
  text-align: right;
  white-space: nowrap;
`;

export const NearbyCard = styled(InfoCard)`
  grid-column: 1 / span 2;
  min-height: 170px;
`;

export const NearbyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 12px;
  margin-top: 20px;
`;

export const NearbyItem = styled.div`
  min-height: 96px;
  padding: 14px 10px 12px;
  border-radius: 16px;
  background: #ffffff;
  border: 1px solid rgba(27, 92, 53, 0.08);
  display: grid;
  justify-items: center;
  text-align: center;
`;

export const NearbyLabel = styled.div`
  margin-top: 10px;
  color: #1a2822;
  font-size: 0.82rem;
  font-weight: 700;
  line-height: 1.3;
`;

export const NearbyTime = styled.div`
  margin-top: 6px;
  color: #0f6b34;
  font-size: 0.9rem;
  font-weight: 700;
`;

export const LocalityCard = styled(InfoCard)`
  min-height: 170px;
`;

export const LocalityText = styled.p`
  margin: 18px 0 0;
  color: #596862;
  font-size: 0.69rem;
  line-height: 1.72;
`;

export const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 22px;
`;

export const Tag = styled.div`
  min-height: 28px;
  padding: 0 14px;
  border-radius: 999px;
  background: linear-gradient(180deg, #f6fbf7 0%, #eff6f0 100%);
  border: 1px solid rgba(27, 92, 53, 0.08);
  color: #193026;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.56rem;
  font-weight: 600;

  svg {
    width: 16px;
    height: 16px;
    color: #0f6b34;
  }
`;

export const VerifiedPropertyCard = styled(SidebarCard)`
  min-height: 98px;
  padding: 20px 18px;
  background: linear-gradient(135deg, #f5faf5 0%, #eef7f0 55%, #f7fbf7 100%);
`;

export const VerifiedPropertyContent = styled.div`
  display: grid;
  grid-template-columns: 54px minmax(0, 1fr);
  gap: 14px;
  align-items: center;
`;

export const VerifiedPropertyTitle = styled.div`
  color: #192720;
  font-size: 0.98rem;
  font-weight: 800;
`;

export const VerifiedPropertyText = styled.div`
  margin-top: 6px;
  color: #596862;
  font-size: 0.9rem;
  line-height: 1.55;
`;
