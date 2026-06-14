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

  @media (max-width: 768px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 8px;
    margin-top: 14px;
  }
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

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 4px;
    padding: 10px 4px;
    border-right: 1px solid rgba(35, 74, 58, 0.08);
    border-radius: 10px;
    background: #f7faf8;

    &:last-child {
      border-right: 1px solid rgba(35, 74, 58, 0.08);
    }

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const RentSpecValue = styled.div`
  color: #17251f;
  font-size: 0.68rem;
  font-weight: 800;
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: 0.85rem;
    font-weight: 800;
    text-align: center;
  }
`;

export const RentSpecLabel = styled.div`
  margin-top: 5px;
  color: #54645d;
  font-size: 0.78rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 0.7rem;
    margin-top: 2px;
    text-align: center;
    color: #67746e;
  }
`;

export const RentDetailsGrid = styled.section`
  display: grid;
  grid-template-columns: 1.02fr 1.2fr 1.08fr 1fr;
  gap: 14px;
  margin-top: 16px;
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 12px;
    margin-top: 12px;
  }
`;

export const RentSummaryCard = styled(SidebarCard)`
  min-height: 218px;
  padding: 16px 18px;

  @media (max-width: 768px) {
    min-height: unset;
    padding: 16px 16px;
    grid-column: 1 / -1;
  }
`;

export const SummaryList = styled.div`
  display: grid;
  gap: 14px;
  margin-top: 18px;

  @media (max-width: 768px) {
    gap: 12px;
    margin-top: 14px;
  }
`;

export const SummaryItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  color: #596862;
  font-size: 0.92rem;

  @media (max-width: 768px) {
    font-size: 0.88rem;
  }
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

  @media (max-width: 1024px) {
    grid-column: 1 / -1;
  }

  @media (max-width: 768px) {
    grid-column: 1 / -1;
    min-height: unset;
  }
`;

export const NearbyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 12px;
  margin-top: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 10px;
    margin-top: 14px;
  }
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

  @media (max-width: 768px) {
    min-height: 80px;
    padding: 10px 6px 10px;
    border-radius: 12px;
  }
`;

export const NearbyLabel = styled.div`
  margin-top: 10px;
  color: #1a2822;
  font-size: 0.82rem;
  font-weight: 700;
  line-height: 1.3;

  @media (max-width: 768px) {
    margin-top: 6px;
    font-size: 0.72rem;
  }
`;

export const NearbyTime = styled.div`
  margin-top: 6px;
  color: #0f6b34;
  font-size: 0.9rem;
  font-weight: 700;

  @media (max-width: 768px) {
    margin-top: 4px;
    font-size: 0.78rem;
  }
`;

export const LocalityCard = styled(InfoCard)`
  min-height: 170px;

  @media (max-width: 768px) {
    min-height: unset;
    grid-column: 1 / -1;
  }
`;

export const LocalityText = styled.p`
  margin: 18px 0 0;
  color: #596862;
  font-size: 0.69rem;
  line-height: 1.72;

  @media (max-width: 768px) {
    font-size: 0.82rem;
    margin: 12px 0 0;
  }
`;

export const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 22px;

  @media (max-width: 768px) {
    gap: 8px;
    margin-top: 14px;
  }
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

  @media (max-width: 768px) {
    font-size: 0.72rem;
    min-height: 30px;
    padding: 0 12px;
  }
`;

export const VerifiedPropertyCard = styled(SidebarCard)`
  min-height: 98px;
  padding: 20px 18px;
  background: linear-gradient(135deg, #f5faf5 0%, #eef7f0 55%, #f7fbf7 100%);

  @media (max-width: 768px) {
    min-height: unset;
    padding: 16px 16px;
    grid-column: 1 / -1;
  }
`;

export const VerifiedPropertyContent = styled.div`
  display: grid;
  grid-template-columns: 54px minmax(0, 1fr);
  gap: 14px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 48px minmax(0, 1fr);
    gap: 12px;
  }
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

/* ─── Visibility wrappers ─── */

export const DesktopOnly = styled.div`
  display: block;

  @media (max-width: 768px) {
    display: none !important;
  }
`;

export const MobileOnly = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: relative;
    background: #f5f7f5;
    min-height: 100vh;
  }
`;

/* ─── Mobile-only layout components ─── */

export const MobileTopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px 8px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
`;

export const MobileTopBarBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.92);
  border: none;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);

  svg {
    width: 18px;
    height: 18px;
    color: #192720;
  }
`;

export const MobileTopBarRight = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const MobileGalleryWrapper = styled.div`
  display: block;
  position: relative;
  width: 100%;
`;

export const MobileMainImage = styled.img`
  display: block;
  width: 100%;
  height: 240px;
  object-fit: cover;
`;

export const MobileBadgeRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  position: absolute;
  top: 12px;
  left: 12px;
  flex-wrap: wrap;
`;

export const MobileBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.95);
  color: #192720;
  font-size: 0.72rem;
  font-weight: 700;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);

  svg {
    width: 12px;
    height: 12px;
    color: #f5a623;
  }
`;

export const MobilePhotoCount = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 4px 10px;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.55);
  color: #fff;
  font-size: 0.72rem;
  font-weight: 600;

  svg {
    width: 14px;
    height: 14px;
  }
`;

export const MobileThumbnailRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
`;

export const MobileThumbnailItem = styled.button`
  position: relative;
  border: none;
  padding: 0;
  cursor: pointer;
  overflow: hidden;
  background: none;

  img {
    width: 100%;
    height: 82px;
    object-fit: cover;
    display: block;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      transparent 40%,
      rgba(0, 0, 0, 0.52) 100%
    );
  }
`;

export const MobileThumbnailLabel = styled.div`
  position: absolute;
  bottom: 7px;
  left: 0;
  right: 0;
  z-index: 2;
  color: #fff;
  font-size: 0.7rem;
  font-weight: 700;
  text-align: center;
  line-height: 1.2;
  padding: 0 4px;
`;

export const MobileMorePhotos = styled.button`
  position: relative;
  border: none;
  padding: 0;
  cursor: pointer;
  overflow: hidden;
  background: #1a3a28;

  img {
    width: 100%;
    height: 82px;
    object-fit: cover;
    display: block;
    opacity: 0.3;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 82px;
`;

export const MobileMorePhotosLabel = styled.div`
  color: #fff;
  font-size: 1.1rem;
  font-weight: 800;
  line-height: 1;
`;

export const MobileMorePhotosSub = styled.div`
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.68rem;
  font-weight: 600;
  margin-top: 3px;
`;

export const MobilePropertyInfo = styled.div`
  display: block;
  padding: 14px 16px 0;
`;

export const MobileAdvisorSection = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 12px;
  align-items: start;
  padding: 14px 16px;
  background: #fff;
  border-radius: 14px;
  border: 1px solid rgba(27, 92, 53, 0.08);
  margin: 12px 16px 0;
`;

export const MobileAdvisorLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;

export const MobileAdvisorAvatar = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  overflow: hidden;
  background: #dae5dd;
  flex-shrink: 0;

  svg {
    width: 64px;
    height: 64px;
  }
`;

export const MobileAdvisorRight = styled.div`
  min-width: 0;
`;

export const MobileAdvisorTitle = styled.div`
  font-size: 0.72rem;
  color: #67746e;
  font-weight: 500;
  margin-bottom: 4px;
`;

export const MobileAdvisorName = styled.div`
  font-size: 1rem;
  font-weight: 800;
  color: #192720;
`;

export const MobileAdvisorMeta = styled.div`
  font-size: 0.78rem;
  color: #596862;
  margin-top: 2px;
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
    width: 13px;
    height: 13px;
    color: #f5a623;
  }
`;

export const MobileAdvisorActions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  padding: 10px 16px 0;
`;

export const MobileAdvisorBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: 42px;
  border-radius: 10px;
  font-size: 0.82rem;
  font-weight: 700;
  cursor: pointer;
  border: 1.5px solid;

  svg {
    width: 16px;
    height: 16px;
  }

  ${({ $filled }) =>
    $filled
      ? `
    background: #0f6b34;
    color: #fff;
    border-color: #0f6b34;
    grid-column: 1 / -1;
  `
      : `
    background: #fff;
    color: #192720;
    border-color: rgba(27, 92, 53, 0.18);
  `}

  ${({ $whatsapp }) =>
    $whatsapp &&
    `
    background: #fff;
    color: #25D366;
    border-color: rgba(37, 211, 102, 0.3);
  `}
`;

export const MobileResponseCard = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 10px 16px 0;
  padding: 12px 14px;
  background: #f7faf8;
  border-radius: 12px;
  border: 1px solid rgba(27, 92, 53, 0.06);
  font-size: 0.82rem;
  color: #596862;

  svg {
    width: 18px;
    height: 18px;
    color: #0f6b34;
    flex-shrink: 0;
  }

  strong {
    display: block;
    color: #203028;
    font-size: 0.82rem;
  }
`;

export const MobileSectionCard = styled.div`
  display: block;
  background: #fff;
  border-radius: 14px;
  border: 1px solid rgba(27, 92, 53, 0.08);
  padding: 16px 16px;
  margin: 12px 16px 0;
`;

export const MobileSectionHeading = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.96rem;
  font-weight: 800;
  color: #192720;

  svg {
    width: 20px;
    height: 20px;
    color: #0f6b34;
  }
`;

export const MobileSectionHeadingRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MobileViewAll = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 3px;
  font-size: 0.8rem;
  font-weight: 700;
  color: #0f6b34;
  background: none;
  border: none;
  cursor: pointer;

  svg {
    width: 14px;
    height: 14px;
  }
`;

export const MobileAmenitiesRow = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 14px;
  overflow-x: auto;
  padding-bottom: 4px;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const MobileAmenityItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  min-width: 52px;
`;

export const MobileAmenityIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: #f2f8f4;
  border: 1px solid rgba(27, 92, 53, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 22px;
    height: 22px;
    color: #0f6b34;
  }
`;

export const MobileAmenityLabel = styled.div`
  font-size: 0.7rem;
  font-weight: 700;
  color: #1a2822;
  text-align: center;
  line-height: 1.2;
`;

export const MobileLocationRow = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 14px;
  overflow-x: auto;
  padding-bottom: 4px;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const MobileLocationItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  min-width: 72px;
  max-width: 80px;
  text-align: center;
`;

export const MobileLocationIcon = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 10px;
  background: #f2f8f4;
  border: 1px solid rgba(27, 92, 53, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 20px;
    height: 20px;
    color: #0f6b34;
  }
`;

export const MobileLocationName = styled.div`
  font-size: 0.68rem;
  font-weight: 700;
  color: #1a2822;
  margin-top: 6px;
  line-height: 1.25;
`;

export const MobileLocationTime = styled.div`
  font-size: 0.72rem;
  font-weight: 700;
  color: #0f6b34;
  margin-top: 3px;
`;

export const MobileLocationDivider = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  color: rgba(27, 92, 53, 0.2);
  font-size: 1rem;
  align-self: center;
  margin-top: -10px;
`;

export const MobileBottomBar = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 10px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  padding: 12px 16px calc(12px + env(safe-area-inset-bottom));
  border-top: 1px solid rgba(27, 92, 53, 0.1);
  box-shadow: 0 -4px 18px rgba(0, 0, 0, 0.08);
  z-index: 100;
`;

export const MobileBottomBarBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  height: 46px;
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;

  svg {
    width: 18px;
    height: 18px;
  }

  ${({ $outline }) =>
    $outline
      ? `
    background: #fff;
    color: #192720;
    border: 1.5px solid rgba(27, 92, 53, 0.2);
  `
      : `
    background: #0f6b34;
    color: #fff;
    border: none;
  `}
`;

export const MobilePageBottomPad = styled.div`
  display: block;
  height: 80px;
`;

