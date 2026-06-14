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

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

export const InfoChipRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 16px;

  @media (max-width: 768px) {
    gap: 8px;
    margin-top: 12px;
  }
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

  @media (max-width: 768px) {
    min-height: 32px;
    font-size: 0.8rem;
    padding: 0 10px;
  }
`;

export const BidCompareCard = styled.div`
  ${panel};
  margin-top: 12px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  overflow: hidden;

  @media (max-width: 768px) {
    margin-top: 14px;
    border-radius: 16px;
  }
`;

export const BidCell = styled.div`
  padding: 14px 16px 12px;
  border-right: 1px solid rgba(27, 92, 53, 0.08);

  &:last-child {
    border-right: 0;
  }

  @media (max-width: 768px) {
    padding: 12px 14px 10px;
  }
`;

export const BidLabel = styled.div`
  color: #66746f;
  font-size: 0.76rem;

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

export const BidValue = styled.div`
  margin-top: 6px;
  color: ${({ $accent }) => ($accent ? "#0f6b34" : "#17251f")};
  font-size: 0.96rem;
  font-weight: 800;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-top: 4px;
  }
`;

export const AuctionSpecGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 10px;
  margin-top: 12px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 0;
    margin-top: 14px;
    border: 1px solid rgba(27, 92, 53, 0.08);
    border-radius: 16px;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.98);
    box-shadow: 0 4px 18px rgba(32, 54, 40, 0.06);
  }
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

  @media (max-width: 768px) {
    padding: 10px 4px;
    border-right: 1px solid rgba(35, 74, 58, 0.08);

    &:last-child {
      border-right: 0;
    }
  }
`;

export const AuctionSpecValue = styled.div`
  color: #17251f;
  font-size: 0.74rem;
  font-weight: 800;
  line-height: 1.15;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 0.82rem;
    font-weight: 800;
  }
`;

export const AuctionSpecLabel = styled.div`
  margin-top: 4px;
  color: #5d6b65;
  font-size: 0.77rem;
  font-weight: 500;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 0.7rem;
    margin-top: 3px;
  }
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

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 14px;
    padding: 16px 14px 14px;
    border-radius: 16px;
    margin-top: 14px;
  }
`;

export const CountdownSide = styled.div``;

export const CountdownTitle = styled.div`
  color: #183022;
  font-size: 0.96rem;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const CountdownInline = styled.div`
  display: flex;
  align-items: start;
  gap: 12px;
  margin-top: 10px;

  @media (max-width: 768px) {
    gap: 10px;
    margin-top: 8px;
  }
`;

export const CountdownGroup = styled.div`
  display: grid;
  justify-items: center;
  gap: 4px;
  min-width: 40px;

  @media (max-width: 768px) {
    min-width: 36px;
  }
`;

export const CountdownNumber = styled.div`
  color: #ff0000;
  font-size: 0.8rem;
  font-weight: 800;
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 1.4rem;
    font-weight: 800;
    color: #e8173a;
  }
`;

export const CountdownUnit = styled.div`
  color: #3d4d46;
  font-size: 0.62rem;
  font-weight: 600;
  text-transform: none;

  @media (max-width: 768px) {
    font-size: 0.65rem;
    color: #5a6963;
  }
`;

export const CountdownDivider = styled.span`
  color: #617068;
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 1;
  margin-top: 2px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-top: 4px;
    color: #617068;
  }
`;

export const CountdownActions = styled.div`
  display: grid;
  gap: 8px;

  @media (max-width: 768px) {
    display: none;
  }
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

  @media (max-width: 768px) {
    min-height: 48px;
    border-radius: 12px;
    font-size: ${({ $ghost }) => ($ghost ? "0.86rem" : "0.92rem")};
    width: 100%;
  }
`;

export const SecureAuctionCard = styled(SidebarCard)`
  min-height: 112px;
  padding: 18px 16px;
  background: linear-gradient(135deg, #f5faf5 0%, #edf7ef 58%, #f8fbf8 100%);

  @media (max-width: 768px) {
    margin-top: 12px;
    border-radius: 16px;
    min-height: auto;
    padding: 14px 16px;
  }
`;

export const SecureAuctionGrid = styled.div`
  display: grid;
  grid-template-columns: 54px minmax(0, 1fr);
  gap: 14px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 40px minmax(0, 1fr);
    gap: 12px;
  }
`;

export const SecureAuctionTitle = styled.div`
  color: #17251f;
  font-size: 0.98rem;
  font-weight: 800;

  @media (max-width: 768px) {
    font-size: 0.92rem;
  }
`;

export const SecureAuctionText = styled.div`
  margin-top: 6px;
  color: #596862;
  font-size: 0.88rem;
  line-height: 1.48;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    margin-top: 4px;
  }
`;

export const AuctionDetailsGrid = styled.section`
  display: grid;
  grid-template-columns: 1.02fr 1.12fr 1.58fr 1.08fr;
  gap: 14px;
  margin-top: 16px;
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 12px;
    margin-top: 12px;
  }
`;

export const OverviewCard = styled(InfoCard)`
  min-height: 222px;

  @media (max-width: 768px) {
    min-height: auto;
    border-radius: 16px;
  }
`;

export const AmenitiesCard = styled(InfoCard)`
  min-height: 222px;

  @media (max-width: 768px) {
    min-height: auto;
    border-radius: 16px;
  }
`;

export const LocationCard = styled(InfoCard)`
  min-height: 222px;

  @media (max-width: 768px) {
    min-height: auto;
    border-radius: 16px;
  }
`;

export const PriceAuctionCard = styled(SidebarCard)`
  min-height: 222px;
  padding: 18px;

  @media (max-width: 768px) {
    min-height: auto;
    border-radius: 16px;
    padding: 16px;
  }
`;

export const DetailList = styled.div`
  display: grid;
  gap: 14px;
  margin-top: 18px;

  @media (max-width: 768px) {
    gap: 12px;
    margin-top: 14px;
  }
`;

export const DetailItem = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 18px;
  color: #5a6963;
  font-size: 0.9rem;

  @media (max-width: 768px) {
    font-size: 0.82rem;
    gap: 12px;
  }
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

  @media (max-width: 768px) {
    min-height: auto;
    border-radius: 16px;
  }
`;

export const DocumentCard = styled(InfoCard)`
  min-height: 180px;

  @media (max-width: 768px) {
    min-height: auto;
    border-radius: 16px;
  }
`;

export const SimilarAuctionCard = styled(InfoCard)`
  min-height: 214px;
  overflow: hidden;

  @media (max-width: 768px) {
    min-height: auto;
    border-radius: 16px;
  }
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

  @media (max-width: 768px) {
    min-height: auto;
    border-radius: 16px;
  }
`;

export const BankLegalList = styled.div`
  display: grid;
  gap: 12px;
  margin-top: 18px;

  @media (max-width: 768px) {
    gap: 10px;
    margin-top: 14px;
  }
`;

export const BankLegalItem = styled.div`
  display: grid;
  grid-template-columns: 152px minmax(0, 1fr);
  gap: 14px;
  color: #5a6963;
  font-size: 0.85rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    font-size: 0.8rem;
  }
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

  @media (max-width: 768px) {
    gap: 10px 12px;
    margin-top: 14px;
  }
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

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
  }
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

  @media (max-width: 768px) {
    height: 100px;
  }
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

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
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

  @media (max-width: 768px) {
    display: none;
  }
`;

/* ─── Desktop-only wrapper (hidden on mobile) ─── */
export const DesktopOnly = styled.div`
  @media (max-width: 768px) {
    display: none !important;
  }
`;

/* ─── Mobile-only components ─── */

export const MobileTopBar = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 16px;
    position: absolute;
    top: 10px;
    left: 0;
    right: 0;
    z-index: 10;
  }
`;

export const MobileTopBarBtn = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  border: none;
  background: rgba(255, 255, 255, 0.92);
  color: #17251f;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const MobileTopBarRight = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const MobileHeroWrap = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: relative;
    width: 100%;
    background: #000;
  }
`;

export const MobileSwipeImage = styled.img`
  width: 100%;
  height: 320px;
  object-fit: cover;
  display: block;
`;

export const MobileViewPhotos = styled.button`
  position: absolute;
  bottom: 52px;
  left: 16px;
  min-height: 30px;
  padding: 0 12px;
  border-radius: 10px;
  border: none;
  background: rgba(0, 0, 0, 0.62);
  color: #ffffff;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.76rem;
  font-weight: 600;
  cursor: pointer;

  svg {
    width: 14px;
    height: 14px;
  }
`;

export const MobileDotRow = styled.div`
  position: absolute;
  bottom: 14px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const MobileDot = styled.div`
  width: ${({ $active }) => ($active ? "10px" : "7px")};
  height: ${({ $active }) => ($active ? "10px" : "7px")};
  border-radius: 50%;
  background: ${({ $active }) =>
    $active ? "#ffffff" : "rgba(255, 255, 255, 0.5)"};
  transition: all 0.2s ease;
`;

export const MobileBadgeRow = styled.div`
  position: absolute;
  top: calc(30px + 54px);
  left: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const MobileThumbnailRow = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 0;
    width: 100%;
  }
`;

export const MobileThumbItem = styled.button`
  position: relative;
  height: 88px;
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
  overflow: hidden;

  &:last-child {
    background: #1a2e22;
  }
`;

export const MobileThumbImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const MobileThumbLabel = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 4px 6px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, transparent 100%);
  color: #ffffff;
  font-size: 0.65rem;
  font-weight: 600;
  text-align: center;
`;

export const MobileMoreOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(15, 40, 25, 0.82);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ffffff;
`;

export const MobileMoreCount = styled.div`
  font-size: 1.4rem;
  font-weight: 800;
  line-height: 1;
`;

export const MobileMoreText = styled.div`
  font-size: 0.7rem;
  font-weight: 600;
  margin-top: 2px;
`;

export const MobileContent = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    padding: 16px 16px 100px;
  }
`;

export const MobileBreadcrumb = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.78rem;
  color: #5a6963;
  margin-bottom: 10px;
`;

export const MobileCrumbLink = styled(Link)`
  color: #0f6b34;
  font-weight: 600;
  text-decoration: none;
`;

export const MobileCrumbSep = styled.span`
  color: #9aaba4;
`;

export const MobileTitle = styled.h1`
  font-size: 1.4rem;
  font-weight: 800;
  color: #17251f;
  line-height: 1.28;
  margin: 0 0 8px;
`;

export const MobileLocationRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: #5a6963;
  font-size: 0.84rem;
  margin-bottom: 12px;

  svg {
    width: 16px;
    height: 16px;
    color: #0f6b34;
    flex: 0 0 auto;
  }
`;

export const MobileAdvisorCard = styled.div`
  background: rgba(255, 255, 255, 0.98);
  border: 1px solid rgba(27, 92, 53, 0.08);
  border-radius: 20px;
  box-shadow: 0 8px 28px rgba(32, 54, 40, 0.08);
  padding: 16px;
  margin-top: 14px;
`;

export const MobileAdvisorHeader = styled.div`
  display: grid;
  grid-template-columns: 72px minmax(0, 1fr);
  gap: 12px;
  align-items: start;
  margin-bottom: 12px;
`;

export const MobileAdvisorAvatar = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 14px;
  overflow: hidden;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const MobileAdvisorMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const MobileAdvisorTag = styled.div`
  font-size: 0.72rem;
  font-weight: 600;
  color: #5a6963;
  margin-bottom: 2px;
`;

export const MobileAdvisorName = styled.div`
  font-size: 1rem;
  font-weight: 800;
  color: #17251f;
`;

export const MobileAdvisorRole = styled.div`
  font-size: 0.76rem;
  color: #66746f;
`;

export const MobileAdvisorExp = styled.div`
  font-size: 0.76rem;
  color: #66746f;
`;

export const MobileAdvisorRating = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: #0f6b34;
  font-size: 0.78rem;
  font-weight: 700;
  margin-top: 4px;

  svg {
    width: 14px;
    height: 14px;
  }
`;

export const MobileAdvisorButtons = styled.div`
  display: grid;
  gap: 8px;
`;

export const MobileAdvisorBtn = styled.button`
  width: 100%;
  min-height: 44px;
  border-radius: 12px;
  border: 1px solid
    ${({ $variant }) =>
      $variant === "whatsapp"
        ? "rgba(37, 211, 102, 0.3)"
        : $variant === "ghost"
          ? "rgba(15, 107, 52, 0.2)"
          : "transparent"};
  background: ${({ $variant }) =>
    $variant === "filled"
      ? "linear-gradient(180deg, #0f6b34 0%, #0a582b 100%)"
      : $variant === "ghost"
        ? "rgba(255, 255, 255, 0.9)"
        : $variant === "whatsapp"
          ? "linear-gradient(180deg, #25d366 0%, #1db954 100%)"
          : "rgba(255,255,255,0.9)"};
  color: ${({ $variant }) =>
    $variant === "filled"
      ? "#ffffff"
      : $variant === "whatsapp"
        ? "#ffffff"
        : "#0f6b34"};
  font-size: 0.88rem;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;

  svg {
    width: 18px;
    height: 18px;
  }
`;

export const MobileActionRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0;
  border: 1px solid rgba(27, 92, 53, 0.08);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0 4px 18px rgba(32, 54, 40, 0.06);
  overflow: hidden;
  margin-top: 14px;
`;

export const MobileActionBtn = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 12px 6px;
  border: none;
  background: none;
  color: #344f3e;
  font-size: 0.72rem;
  font-weight: 600;
  cursor: pointer;
  border-right: 1px solid rgba(27, 92, 53, 0.08);

  &:last-child {
    border-right: 0;
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

export const MobilePriceCard = styled.div`
  background: rgba(255, 255, 255, 0.98);
  border: 1px solid rgba(27, 92, 53, 0.08);
  border-radius: 20px;
  box-shadow: 0 8px 28px rgba(32, 54, 40, 0.06);
  padding: 16px;
  margin-top: 12px;
`;

export const MobilePriceTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.96rem;
  font-weight: 800;
  color: #17251f;
  margin-bottom: 14px;

  svg {
    width: 20px;
    height: 20px;
    color: #0f6b34;
  }
`;

export const MobilePriceGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px 16px;
`;

export const MobilePriceRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const MobilePriceLabel = styled.div`
  font-size: 0.74rem;
  color: #66746f;
`;

export const MobilePriceValue = styled.div`
  font-size: 0.88rem;
  font-weight: 700;
  color: #17251f;
`;

export const MobilePriceDivider = styled.div`
  height: 1px;
  background: rgba(27, 92, 53, 0.08);
  margin: 12px 0;
`;

export const MobilePriceMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.78rem;
  color: #66746f;
  margin-top: 4px;
`;

export const MobilePriceMetaValue = styled.span`
  font-weight: 600;
  color: #17251f;
`;

export const MobileBottomBar = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #ffffff;
    border-top: 1px solid rgba(27, 92, 53, 0.1);
    box-shadow: 0 -4px 20px rgba(32, 54, 40, 0.1);
    z-index: 100;
    padding: 10px 12px 12px;
    gap: 10px;
  }
`;

export const MobileBottomBarBtn = styled.button`
  min-height: 48px;
  border-radius: 12px;
  border: 1px solid
    ${({ $variant }) =>
      $variant === "ghost" ? "rgba(15, 107, 52, 0.2)" : "transparent"};
  background: ${({ $variant }) =>
    $variant === "ghost"
      ? "rgba(255, 255, 255, 0.9)"
      : "linear-gradient(180deg, #0f6b34 0%, #0a582b 100%)"};
  color: ${({ $variant }) => ($variant === "ghost" ? "#0f6b34" : "#ffffff")};
  font-size: 0.88rem;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;

  svg {
    width: 18px;
    height: 18px;
  }
`;

