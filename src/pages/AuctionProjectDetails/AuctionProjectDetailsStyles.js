import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  InfoCard,
  SidebarCard,
} from "../BuyProjectDetails/BuyProjectDetailsStyles";

const panel = `
  background: rgba(255, 255, 255, 0.98);
  border: 1px solid rgba(27, 92, 53, 0.08);
  border-radius: 26px;
  box-shadow: 0 18px 44px rgba(32, 54, 40, 0.08);
`;

export const AuctionBadge = styled.div`
  min-height: 36px;
  padding: 0 14px;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.86rem;
  font-weight: 700;
  box-shadow: 0 6px 18px rgba(25, 41, 31, 0.08);
  background: ${({ $tone }) =>
    $tone === "auction"
      ? "linear-gradient(180deg, #c0224f 0%, #a91741 100%)"
      : $tone === "bank"
        ? "linear-gradient(180deg, #fff4ea 0%, #ffeddc 100%)"
        : "rgba(255, 255, 255, 0.96)"};
  color: ${({ $tone }) =>
    $tone === "auction" ? "#ffffff" : $tone === "bank" ? "#ef7d1a" : "#183022"};
  border: 1px solid
    ${({ $tone }) =>
      $tone === "verified"
        ? "rgba(15, 107, 52, 0.14)"
        : $tone === "bank"
          ? "rgba(239, 125, 26, 0.15)"
          : "transparent"};

  svg {
    width: 16px;
    height: 16px;
    color: currentColor;
  }
`;

export const SummaryPanel = styled.div`
  min-width: 0;
  padding: 2px 10px 0 14px;
`;

export const InfoChipRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 16px;
`;

export const InfoChip = styled.div`
  min-height: 34px;
  padding: 0 12px;
  border-radius: 12px;
  background: ${({ $surface }) =>
    $surface === "soft"
      ? "linear-gradient(180deg, #f7f9ff 0%, #eef3ff 100%)"
      : "linear-gradient(180deg, #f7f9fb 0%, #f2f4f7 100%)"};
  color: ${({ $surface }) => ($surface === "soft" ? "#2f457a" : "#18251f")};
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.84rem;
  font-weight: 700;

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const BidCompareCard = styled.div`
  ${panel};
  margin-top: 12px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  overflow: hidden;
`;

export const BidCell = styled.div`
  padding: 14px 16px 12px;
  border-right: 1px solid rgba(27, 92, 53, 0.08);

  &:last-child {
    border-right: 0;
  }
`;

export const BidLabel = styled.div`
  color: #66746f;
  font-size: 0.76rem;
`;

export const BidValue = styled.div`
  margin-top: 6px;
  color: ${({ $accent }) => ($accent ? "#0f6b34" : "#17251f")};
  font-size: 0.96rem;
  font-weight: 800;
`;

export const AuctionSpecGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 10px;
  margin-top: 12px;
`;

export const AuctionSpecCard = styled.div`
  display: column;
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

export const AuctionSpecValue = styled.div`
  color: #17251f;
  font-size: 0.74rem;
  font-weight: 800;
  line-height: 1.15;
  text-align: center;
`;

export const AuctionSpecLabel = styled.div`
  margin-top: 4px;
  color: #5d6b65;
  font-size: 0.77rem;
  font-weight: 500;
  text-align: center;
`;

export const CountdownActionCard = styled.div`
  ${panel};
  margin-top: 12px;
  padding: 14px 14px 12px;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 152px;
  gap: 16px;
  align-items: center;
  background: linear-gradient(90deg, #f3faf4 0%, #eef7f0 58%, #f8fbf8 100%);
`;

export const CountdownSide = styled.div``;

export const CountdownTitle = styled.div`
  color: #183022;
  font-size: 0.96rem;
  font-weight: 700;
`;

export const CountdownInline = styled.div`
  display: flex;
  align-items: start;
  gap: 12px;
  margin-top: 10px;
`;

export const CountdownGroup = styled.div`
  display: grid;
  justify-items: center;
  gap: 4px;
  min-width: 40px;
`;

export const CountdownNumber = styled.div`
  color: #ff0000;
  font-size: 0.8rem;
  font-weight: 800;
  line-height: 1;
`;

export const CountdownUnit = styled.div`
  color: #3d4d46;
  font-size: 0.62rem;
  font-weight: 600;
  text-transform: none;
`;

export const CountdownDivider = styled.span`
  color: #617068;
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 1;
  margin-top: 2px;
`;

export const CountdownActions = styled.div`
  display: grid;
  gap: 8px;
`;

export const AuctionActionButton = styled.button`
  min-height: 32px;
  border-radius: 10px;
  border: 1px solid
    ${({ $ghost }) =>
      $ghost ? "rgba(15, 107, 52, 0.28)" : "rgba(15, 107, 52, 0.14)"};
  background: ${({ $ghost }) =>
    $ghost
      ? "rgba(255, 255, 255, 0.7)"
      : "linear-gradient(180deg, #0f6b34 0%, #0a582b 100%)"};
  color: ${({ $ghost }) => ($ghost ? "#0f6b34" : "#ffffff")};
  font-size: ${({ $ghost }) => ($ghost ? "0.62rem" : "0.68rem")};
  font-weight: 700;
  cursor: pointer;
`;

export const SecureAuctionCard = styled(SidebarCard)`
  min-height: 112px;
  padding: 18px 16px;
  background: linear-gradient(135deg, #f5faf5 0%, #edf7ef 58%, #f8fbf8 100%);
`;

export const SecureAuctionGrid = styled.div`
  display: grid;
  grid-template-columns: 54px minmax(0, 1fr);
  gap: 14px;
  align-items: center;
`;

export const SecureAuctionTitle = styled.div`
  color: #17251f;
  font-size: 0.98rem;
  font-weight: 800;
`;

export const SecureAuctionText = styled.div`
  margin-top: 6px;
  color: #596862;
  font-size: 0.88rem;
  line-height: 1.48;
`;

export const AuctionDetailsGrid = styled.section`
  display: grid;
  grid-template-columns: 1.02fr 1.12fr 1.58fr 1.08fr;
  gap: 14px;
  margin-top: 16px;
  align-items: start;
`;

export const OverviewCard = styled(InfoCard)`
  min-height: 222px;
`;

export const AmenitiesCard = styled(InfoCard)`
  min-height: 222px;
`;

export const LocationCard = styled(InfoCard)`
  min-height: 222px;
`;

export const PriceAuctionCard = styled(SidebarCard)`
  min-height: 222px;
  padding: 18px;
`;

export const DetailList = styled.div`
  display: grid;
  gap: 14px;
  margin-top: 18px;
`;

export const DetailItem = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 18px;
  color: #5a6963;
  font-size: 0.9rem;
`;

export const DetailLabel = styled.span`
  color: #5a6963;
`;

export const DetailValue = styled.span`
  color: #18251f;
  font-weight: 700;
  text-align: right;
  white-space: pre-wrap;
`;

export const BankLegalCard = styled(InfoCard)`
  min-height: 214px;
`;

export const DocumentCard = styled(InfoCard)`
  min-height: 180px;
`;

export const SimilarAuctionCard = styled(InfoCard)`
  min-height: 214px;
  overflow: hidden;
`;

export const ConfidenceCard = styled(SidebarCard)`
  min-height: 214px;
  overflow: hidden;
  background:
    radial-gradient(
      circle at 88% 20%,
      rgba(224, 239, 226, 0.94),
      rgba(243, 248, 244, 0.96) 60%,
      rgba(249, 252, 249, 0.98) 100%
    ),
    #ffffff;
`;

export const BankLegalList = styled.div`
  display: grid;
  gap: 12px;
  margin-top: 18px;
`;

export const BankLegalItem = styled.div`
  display: grid;
  grid-template-columns: 152px minmax(0, 1fr);
  gap: 14px;
  color: #5a6963;
  font-size: 0.85rem;
`;

export const BankLegalValue = styled.div`
  color: #192720;
  font-weight: 500;
`;

export const DocumentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px 16px;
  margin-top: 18px;
`;

export const DocumentItem = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #4f6058;
  font-size: 0.82rem;

  svg {
    width: 16px;
    height: 16px;
    color: #0f6b34;
    flex: 0 0 auto;
  }
`;

export const DocumentsButton = styled.button`
  width: fit-content;
  min-height: 42px;
  margin-top: 14px;
  padding: 0 10px;
  border-radius: 8px;
  border: 1px solid rgba(15, 107, 52, 0.08);
  background: linear-gradient(180deg, #eef7ef 0%, #e8f3ea 100%);
  color: #183022;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-size: 0.62rem;
  font-weight: 700;
  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
    flex: 0 0 auto;
  }
`;

export const SimilarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

export const ViewAllButton = styled.button`
  min-height: 30px;
  padding: 0 12px;
  border-radius: 10px;
  border: 1px solid rgba(27, 92, 53, 0.08);
  background: linear-gradient(180deg, #f9fbfa 0%, #f3f6f4 100%);
  color: #223028;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.76rem;
  font-weight: 700;
  cursor: pointer;
`;

export const SimilarAuctionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin-top: 12px;
`;

export const SimilarAuctionItem = styled(Link)`
  ${panel};
  overflow: hidden;
  border-radius: 16px;
  text-decoration: none;
  color: inherit;
`;

export const SimilarAuctionImageWrap = styled.div`
  position: relative;
  height: 92px;
  overflow: hidden;
`;

export const SimilarAuctionImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const SimilarAuctionBadge = styled.div`
  position: absolute;
  top: 7px;
  left: 7px;
  min-height: 22px;
  padding: 0 8px;
  border-radius: 9px;
  background: rgba(255, 255, 255, 0.94);
  color: #1b2822;
  display: inline-flex;
  align-items: center;
  font-size: 0.62rem;
  font-weight: 700;
`;

export const SimilarAuctionFav = styled.div`
  position: absolute;
  top: 7px;
  right: 7px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.92);
  color: #7c8882;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 14px;
    height: 14px;
  }
`;

export const SimilarAuctionBody = styled.div`
  padding: 8px 10px 10px;
`;

export const SimilarAuctionTitle = styled.div`
  color: #17251f;
  font-size: 0.84rem;
  font-weight: 800;
  line-height: 1.35;
`;

export const SimilarAuctionLocation = styled.div`
  margin-top: 4px;
  color: #65736d;
  font-size: 0.74rem;
`;

export const SimilarAuctionPrice = styled.div`
  margin-top: 6px;
  color: #0f6b34;
  font-size: 0.92rem;
  font-weight: 800;
`;

export const SimilarAuctionEnding = styled.div`
  margin-top: 4px;
  color: #65736d;
  font-size: 0.74rem;
`;

export const ConfidenceGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 112px;
  gap: 12px;
  align-items: center;
  height: 100%;
`;

export const ConfidenceList = styled.div`
  display: grid;
  gap: 12px;
  margin-top: 18px;
`;

export const ConfidenceItem = styled.div`
  display: grid;
  grid-template-columns: 18px minmax(0, 1fr);
  gap: 10px;
  color: #4f6058;
  font-size: 0.86rem;

  svg {
    width: 18px;
    height: 18px;
    color: #0f6b34;
  }
`;

export const ConfidenceArt = styled.div`
  color: #0f6b34;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 104px;
    height: 104px;
  }
`;
