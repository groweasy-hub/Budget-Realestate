import styled, { css } from "styled-components";

export const RentPageShell = styled.main`
  min-height: 100vh;
  background: linear-gradient(180deg, #fbfcfa 0%, #f4f7f3 100%);
`;

export const PageInner = styled.div`
  width: min(1520px, calc(100% - 0px));
  margin: 0 auto;
  padding: 50px 0 54px;

  @media (max-width: 980px) {
    padding: 50px 0 0;
    width: min(100%, calc(100% - 20px));
    padding: 0 0 36px;
  }

  @media (max-width: 640px) {
    padding: 50px 0 0;
    width: min(100%, calc(100% - 16px));
  }
`;

export const HeroSection = styled.section`
  position: relative;
  margin-top: 4px;
  padding: 32px 84px 142px;
  overflow: visible;
  background:
    linear-gradient(rgba(5, 42, 18, 0.8), rgba(5, 42, 18, 0.8)),
    url(${({ $backgroundImage }) => $backgroundImage}) center/cover no-repeat;
  box-shadow: inset 0 -80px 120px rgba(7, 35, 14, 0.3);

  @media (max-width: 1180px) {
    padding: 28px 24px 168px;
  }

  @media (max-width: 760px) {
    padding: 22px 16px 186px;
  }

  @media (max-width: 560px) {
    padding: 18px 12px 206px;
  }
`;

export const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.92fr) minmax(360px, 1.08fr);
  gap: 24px;
  align-items: center;

  @media (max-width: 1180px) {
    grid-template-columns: 1fr;
  }
`;

export const HeroCopy = styled.div`
  max-width: 560px;
  color: #ffffff;
`;

export const HeroTitle = styled.h1`
  margin: 0;
  font-size: clamp(2.6rem, 4.2vw, 4rem);
  font-weight: 700;
  line-height: 1.04;
  letter-spacing: -0.04em;
  color: #ffffff;
`;

export const HeroDescription = styled.p`
  max-width: 520px;
  margin: 14px 0 0;
  color: rgba(241, 247, 242, 0.95);
  font-size: 1.03rem;
  line-height: 1.6;
`;

export const HeroStats = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0;
  align-items: center;
  min-height: 164px;
  padding: 0 12px;

  @media (max-width: 1180px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 14px;
    min-height: auto;
    padding: 10px 0 0;
  }

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const StatItem = styled.div`
  display: grid;
  justify-items: center;
  text-align: center;
  padding: 12px 18px;
  border-left: 1px solid rgba(228, 241, 231, 0.2);

  &:first-child {
    border-left: 0;
  }

  @media (max-width: 1180px) {
    border-left: 0;
    border: 1px solid rgba(228, 241, 231, 0.14);
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.04);
  }
`;

export const StatIcon = styled.div`
  width: 44px;
  height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #dff7e3;

  svg {
    width: 28px;
    height: 28px;
    display: block;
  }
`;

export const StatValue = styled.div`
  margin-top: 8px;
  color: #ffffff;
  font-size: 1.15rem;
  font-weight: 700;
  line-height: 1.1;
`;

export const StatLabel = styled.div`
  margin-top: 6px;
  color: rgba(244, 249, 245, 0.94);
  font-size: 0.96rem;
  line-height: 1.3;
`;

export const SearchShell = styled.div`
  position: absolute;
  left: 32px;
  right: 32px;
  bottom: -60px;
  z-index: 12;
  border-radius: 18px;
  margin: 0 44px 0;
  background: rgba(255, 255, 255, 0.98);
  border: 1px solid rgba(38, 85, 54, 0.08);
  box-shadow: 0 28px 58px rgba(56, 74, 59, 0.14);
  overflow: visible;

  @media (max-width: 1180px) {
    left: 16px;
    right: 16px;
    bottom: -124px;
  }

  @media (max-width: 760px) {
    bottom: -178px;
  }

  @media (max-width: 560px) {
    left: 0;
    right: 0;
    margin: 0;
    bottom: -196px;
  }
`;

export const SearchTopRow = styled.div`
  display: grid;
  grid-template-columns: 2.2fr 1.25fr 1.15fr 0.95fr 1fr 1.1fr;
  gap: 12px;
  padding: 14px 14px;
  align-items: center;

  @media (max-width: 1280px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

const inputBase = css`
  min-height: 48px;
  width: 100%;
  border-radius: 10px;
  border: 1px solid rgba(41, 89, 58, 0.14);
  background: #ffffff;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.92);
`;

export const SearchInputWrap = styled.div`
  ${inputBase};
  display: flex;
  align-items: center;
  padding: 0 12px 0 14px;
  gap: 8px;
`;

export const SearchInput = styled.input`
  width: 100%;
  border: 0;
  outline: none;
  color: #293430;
  font-size: 0.88rem;
  background: transparent;
`;

export const SearchInputIcon = styled.span`
  width: 16px;
  height: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #6c7773;

  svg {
    width: 13px;
    height: 13px;
    display: block;
  }
`;

export const SelectWrap = styled.div`
  ${inputBase};
  position: relative;
  display: grid;
  align-content: center;
  padding: 6px 12px;
`;

export const SelectLabel = styled.div`
  color: #66716d;
  font-size: 0.72rem;
  line-height: 1.2;
`;

export const SelectValueRow = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
  margin-top: 2px;
  padding: 0;
  border: 0;
  background: transparent;
  color: #12211c;
  font-size: 0.84rem;
  font-weight: 600;
  text-align: left;
  cursor: pointer;

  svg {
    width: 8px;
    height: 8px;
    flex: 0 0 auto;
  }
`;

export const SelectDropdown = styled.div`
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  right: 0;
  z-index: 20;
  padding: 10px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.99);
  border: 1px solid rgba(37, 84, 52, 0.1);
  box-shadow: 0 20px 40px rgba(41, 63, 47, 0.16);
`;

export const SelectDropdownSection = styled.div`
  display: grid;
  gap: 6px;

  & + & {
    margin-top: 10px;
    padding-top: 10px;
    border-top: 1px solid rgba(33, 83, 49, 0.08);
  }
`;

export const SelectDropdownTitle = styled.div`
  color: #6b7872;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

export const SelectDropdownOption = styled.button`
  width: 100%;
  min-height: 38px;
  padding: 8px 10px;
  border-radius: 10px;
  border: 1px solid
    ${({ $active }) =>
      $active ? "rgba(17, 109, 49, 0.18)" : "rgba(33, 83, 49, 0.08)"};
  background: ${({ $active }) =>
    $active ? "linear-gradient(180deg, #eef8f0 0%, #e3f3e6 100%)" : "#ffffff"};
  color: ${({ $active }) => ($active ? "#146d39" : "#23312b")};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  font-size: 0.82rem;
  font-weight: 600;
  text-align: left;
  cursor: pointer;
`;

export const SelectDropdownMeta = styled.span`
  color: #6b7872;
  font-size: 0.76rem;
  font-weight: 600;
`;

export const SelectDropdownHint = styled.p`
  margin: 0;
  color: #697771;
  font-size: 0.78rem;
  line-height: 1.5;
`;

export const SearchButton = styled.button`
  min-height: 48px;
  border-radius: 10px;
  border: 0;
  background: linear-gradient(180deg, #17703b 0%, #0f5d2f 100%);
  color: #ffffff;
  font-size: 0.88rem;
  font-weight: 700;
  box-shadow: 0 18px 30px rgba(24, 99, 53, 0.16);
`;

export const SearchBottomRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  padding: 10px 14px;
  border-top: 1px solid rgba(33, 83, 49, 0.08);

  @media (max-width: 1180px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const PopularRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  color: #21322b;
  font-size: 0.84rem;
`;

export const SearchChip = styled.button`
  min-height: 28px;
  padding: 0 12px;
  border-radius: 999px;
  border: 0;
  background: linear-gradient(180deg, #eef7ef 0%, #e1f0e2 100%);
  color: #1d6f3e;
  font-size: 0.8rem;
  font-weight: 600;
`;

export const SortRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: auto;

  @media (max-width: 1180px) {
    margin-left: 0;
  }

  @media (max-width: 760px) {
    flex-wrap: wrap;
  }
`;

export const SortLabel = styled.div`
  color: #606d69;
  font-size: 0.84rem;
`;

export const SortSelect = styled.button`
  min-height: 32px;
  padding: 0 12px;
  border-radius: 10px;
  border: 1px solid rgba(36, 85, 53, 0.1);
  background: #ffffff;
  color: #1e2a25;
  font-size: 0.82rem;
  font-weight: 600;

  svg {
    width: 8px;
    height: 8px;
    margin-left: 6px;
  }
`;

export const ViewSwitch = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ViewButton = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 10px;
  border: 1px solid rgba(36, 85, 53, 0.1);
  background: ${({ $active }) =>
    $active ? "linear-gradient(180deg, #eef7ef 0%, #dff0e0 100%)" : "#ffffff"};
  color: ${({ $active }) => ($active ? "#1f6f3d" : "#73807a")};

  svg {
    width: 14px;
    height: 14px;
  }
`;

export const ContentSection = styled.section`
  margin-top: 126px;
  padding: 0 44px 0;

  @media (max-width: 1180px) {
    margin-top: 170px;
    padding: 0 16px 0;
  }

  @media (max-width: 760px) {
    margin-top: 222px;
    padding: 0;
  }

  @media (max-width: 560px) {
    margin-top: 238px;
  }
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 270px minmax(0, 1fr) 250px;
  gap: 18px;
  align-items: start;

  @media (max-width: 1320px) {
    grid-template-columns: 250px minmax(0, 1fr);
  }

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

const whitePanel = css`
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.98);
  border: 1px solid rgba(37, 84, 52, 0.08);
  box-shadow: 0 18px 42px rgba(51, 69, 55, 0.08);
`;

export const FilterSidebar = styled.aside`
  ${whitePanel};
  padding: 16px 16px 10px;
`;

export const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding-bottom: 14px;
  border-bottom: 1px solid rgba(33, 83, 49, 0.08);
`;

export const SidebarTitle = styled.h2`
  margin: 0;
  color: #17221d;
  font-size: 1.05rem;
  line-height: 1.2;
`;

export const ClearButton = styled.button`
  border: 0;
  background: transparent;
  color: #1f7a42;
  font-size: 0.84rem;
  font-weight: 700;
`;

export const FilterBlock = styled.div`
  padding: 16px 0;
  border-bottom: 1px solid rgba(33, 83, 49, 0.08);
`;

export const FilterBlockTitle = styled.h3`
  margin: 0 0 14px;
  color: #19211d;
  font-size: 0.94rem;
  line-height: 1.2;
`;

export const RangeLabels = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #2a352f;
  font-size: 0.9rem;
`;

export const RangeTrack = styled.div`
  position: relative;
  height: 4px;
  margin-top: 14px;
  border-radius: 999px;
  background: rgba(25, 102, 53, 0.18);

  &::before {
    content: "";
    position: absolute;
    left: ${({ $start = 0 }) => `${$start}%`};
    right: ${({ $end = 100 }) => `${100 - $end}%`};
    top: 0;
    bottom: 0;
    border-radius: 999px;
    background: #18743c;
  }
`;

export const RangeThumb = styled.span`
  position: absolute;
  top: 50%;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #ffffff;
  border: 3px solid #16733b;
  transform: translate(-50%, -50%);
  left: ${({ $position = 0 }) => `${$position}%`};
  box-shadow: 0 4px 12px rgba(12, 64, 28, 0.16);
`;

export const RangeSliderWrap = styled.div`
  position: relative;
  margin-top: -10px;
  height: 16px;
`;

export const RangeInput = styled.input`
  position: absolute;
  inset: 0;
  width: 100%;
  margin: 0;
  appearance: none;
  background: transparent;
  opacity: 0;
  cursor: pointer;

  &::-webkit-slider-runnable-track {
    height: 16px;
    background: transparent;
  }

  &::-webkit-slider-thumb {
    appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  &::-moz-range-track {
    height: 16px;
    background: transparent;
  }

  &::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 0;
    background: transparent;
    cursor: pointer;
  }
`;

export const CheckList = styled.div`
  display: grid;
  gap: 10px;
`;

export const CheckItem = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  cursor: pointer;
  color: #2a342f;
  font-size: 0.92rem;
`;

export const HiddenCheckbox = styled.input`
  position: absolute;
  opacity: 0;
  pointer-events: none;
`;

export const CheckRow = styled.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 10px;
`;

export const CheckBox = styled.span`
  position: relative;
  width: 16px;
  height: 16px;
  border-radius: 4px;
  border: 1px solid
    ${({ $active }) =>
      $active ? "rgba(21, 111, 57, 0.24)" : "rgba(33, 83, 49, 0.16)"};
  background: ${({ $active }) =>
    $active ? "linear-gradient(180deg, #15753d 0%, #0f5f30 100%)" : "#ffffff"};
  box-shadow: ${({ $active }) =>
    $active ? "0 8px 18px rgba(16, 88, 42, 0.16)" : "none"};

  &::after {
    content: "";
    position: absolute;
    left: 4px;
    top: 1px;
    width: 4px;
    height: 8px;
    border: solid #ffffff;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    opacity: ${({ $active }) => ($active ? 1 : 0)};
  }
`;

export const FilterCount = styled.span`
  color: #6e7b77;
  font-size: 0.9rem;
`;

export const BHKRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const BHKChip = styled.button`
  min-height: 34px;
  padding: 0 12px;
  border-radius: 8px;
  border: 1px solid
    ${({ $active }) =>
      $active ? "rgba(17, 109, 49, 0.2)" : "rgba(33, 83, 49, 0.12)"};
  background: ${({ $active }) =>
    $active ? "linear-gradient(180deg, #15753d 0%, #0f5f30 100%)" : "#ffffff"};
  color: ${({ $active }) => ($active ? "#ffffff" : "#24312b")};
  font-size: 0.88rem;
  font-weight: 600;
`;

export const AreaInputs = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 10px;
  align-items: center;
  margin-top: 14px;
`;

export const AreaInput = styled.div`
  min-height: 40px;
  padding: 0 12px;
  border-radius: 8px;
  border: 1px solid rgba(33, 83, 49, 0.12);
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #1f2b26;
  font-size: 0.9rem;
`;

export const CollapseRow = styled.button`
  width: 100%;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 0;
  background: transparent;
  color: #19211d;
  font-size: 0.94rem;
  font-weight: 600;
`;

export const CollapseIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transform: rotate(${({ $open }) => ($open ? "180deg" : "0deg")});
  transition: transform 0.2s ease;
`;

export const CollapseBody = styled.div`
  display: ${({ $open }) => ($open ? "block" : "none")};
  padding-top: 10px;
`;

export const ListingsArea = styled.div``;

export const ListingsHeader = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin: 2px 0 14px;
  color: #2f3b35;
  font-size: 1rem;

  strong {
    color: #157239;
  }
`;

export const ListingsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;

  @media (max-width: 1180px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const ListingCard = styled.article`
  ${whitePanel};
  overflow: hidden;
  cursor: pointer;
`;

export const ListingFigure = styled.div`
  position: relative;
  height: 224px;
  overflow: hidden;
`;

export const ListingImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const ListingBadge = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  min-height: 28px;
  padding: 0 10px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: linear-gradient(180deg, #156f39 0%, #0f5c2f 100%);
  color: #ffffff;
  font-size: 0.78rem;
  font-weight: 700;
`;

export const FavoriteButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.14);
  color: #ffffff;
  backdrop-filter: blur(6px);
`;

export const ListingBody = styled.div`
  padding: 12px 12px 14px;
`;

export const ListingTitle = styled.h3`
  margin: 0;
  color: #18231f;
  font-size: 1.02rem;
  line-height: 1.25;
`;

export const ListingLocation = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 4px;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 0.84rem;
  line-height: 1.4;

  svg {
    width: 12px;
    height: 12px;
    flex: 0 0 auto;
  }
`;

export const EmptyState = styled.div`
  ${whitePanel};
  padding: 28px 24px;
  text-align: center;
`;

export const EmptyStateTitle = styled.h3`
  margin: 0;
  color: #18231f;
  font-size: 1.05rem;
`;

export const EmptyStateText = styled.p`
  margin: 10px 0 0;
  color: #5f6d68;
  font-size: 0.92rem;
  line-height: 1.6;
`;

export const ListingSpecs = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
  color: #596863;
  font-size: 0.82rem;

  span + span::before {
    content: "•";
    margin-right: 8px;
    color: #85938e;
  }
`;

export const ListingFooter = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 14px;
  margin-top: 12px;

  @media (max-width: 520px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ListingPrice = styled.div`
  color: #12803f;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.2;
`;

export const ListingSubPrice = styled.div`
  margin-top: 4px;
  color: #5d6c67;
  font-size: 0.84rem;
`;

export const CardAction = styled.button`
  min-width: 92px;
  min-height: 36px;
  padding: 0 14px;
  border-radius: 8px;
  border: 1px solid rgba(27, 115, 59, 0.34);
  background: linear-gradient(180deg, #ffffff 0%, #f8fbf8 100%);
  color: #17723a;
  font-size: 0.84rem;
  font-weight: 700;
`;

export const SideColumn = styled.div`
  display: grid;
  gap: 12px;

  @media (max-width: 1320px) {
    grid-column: 1 / -1;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

export const HelpCard = styled.div`
  ${whitePanel};
  padding: 18px 16px;
`;

export const HelpCardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
`;

export const HelpCardTitle = styled.h3`
  margin: 0;
  color: #17221d;
  font-size: 1.12rem;
  line-height: 1.45;
`;

export const HelpCardIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #eef7ef 0%, #e3f1e4 100%);
  color: #1e7a41;

  svg {
    width: 24px;
    height: 24px;
    display: block;
  }
`;

export const HelpCardText = styled.p`
  margin: 10px 0 0;
  color: #5c6966;
  font-size: 0.94rem;
  line-height: 1.7;
`;

export const HelpAction = styled.button`
  width: 100%;
  min-height: 44px;
  margin-top: 14px;
  border-radius: 8px;
  border: 1px solid
    ${({ $ghost }) =>
      $ghost ? "rgba(29, 108, 52, 0.22)" : "rgba(19, 98, 49, 0.18)"};
  background: ${({ $ghost }) =>
    $ghost
      ? "linear-gradient(180deg, #ffffff 0%, #f8fbf8 100%)"
      : "linear-gradient(180deg, #166f39 0%, #0e5d2f 100%)"};
  color: ${({ $ghost }) => ($ghost ? "#177139" : "#ffffff")};
  font-size: 0.94rem;
  font-weight: 700;
`;

export const TrustStrip = styled.section`
  ${whitePanel};
  margin-top: 22px;
  padding: 14px 18px;
`;

export const TrustGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 0;

  @media (max-width: 1180px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 14px;
  }

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const TrustItem = styled.div`
  display: grid;
  grid-template-columns: 44px 1fr;
  gap: 12px;
  align-items: start;
  padding: 10px 14px;
  border-left: 1px solid rgba(33, 83, 49, 0.08);

  &:first-child {
    border-left: 0;
  }

  @media (max-width: 1180px) {
    border-left: 0;
    border: 1px solid rgba(33, 83, 49, 0.08);
    border-radius: 14px;
  }
`;

export const TrustIcon = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #eef7ef 0%, #e3f1e4 100%);
  color: #1e7a41;

  svg {
    width: 24px;
    height: 24px;
    display: block;
  }
`;

export const TrustTitle = styled.h3`
  margin: 0;
  color: #17221d;
  font-size: 0.96rem;
  line-height: 1.35;
`;

export const TrustText = styled.p`
  margin: 4px 0 0;
  color: #5f6b68;
  font-size: 0.9rem;
  line-height: 1.55;
`;

export const DesktopRentView = styled.div`
  @media (max-width: 760px) {
    display: none;
  }
`;

export const MobileRentView = styled.div`
  display: none;

  @media (max-width: 760px) {
    display: grid;
    gap: 18px;
    padding: 30px 0 20px;
  }
`;

export const MobileHeroCard = styled.section`
  position: relative;
  overflow: hidden;
  padding: 24px 18px 18px;
  border-radius: 34px;
  background: linear-gradient(180deg, #ffffff 0%, #fbfcf9 100%);
  border: 1px solid rgba(46, 78, 58, 0.12);
  box-shadow:
    0 24px 50px rgba(47, 63, 53, 0.09),
    inset 0 1px 0 rgba(255, 255, 255, 0.96);
`;

export const MobileHeroVisual = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 74%;
  pointer-events: none;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.98) 0%,
      rgba(255, 255, 255, 0.86) 22%,
      rgba(255, 255, 255, 0.08) 62%,
      rgba(255, 255, 255, 0) 100%
    );
    z-index: 1;
  }
`;

export const MobileHeroImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  filter: saturate(0.9) brightness(1.06);
`;

export const MobileHeroCopy = styled.div`
  position: relative;
  z-index: 2;
  max-width: 46%;
  min-height: 178px;
  padding-top: 18px;
`;

export const MobileHeroTitle = styled.h1`
  margin: 0;
  color: #0f4c2a;
  font-family: "DM Serif Display", Georgia, serif;
  font-size: clamp(2.2rem, 7vw, 3.4rem);
  font-weight: 400;
  line-height: 0.98;
  letter-spacing: -0.05em;
`;

export const MobileHeroDescription = styled.p`
  margin: 18px 0 0;
  color: #2f373f;
  font-size: 0.78rem;
  line-height: 1.55;
`;

export const MobileAccountButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 3;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid rgba(27, 109, 60, 0.12);
  background: rgba(255, 255, 255, 0.9);
  color: #16713b;
  box-shadow: 0 12px 24px rgba(58, 77, 65, 0.1);

  svg {
    width: 24px;
    height: 24px;
    display: block;
    margin: 0 auto;
  }
`;

export const MobileStatsPanel = styled.section`
  ${whitePanel};
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0;
  padding: 8px 0;
`;

export const MobileStatEntry = styled.div`
  display: grid;
  justify-items: center;
  text-align: center;
  gap: 4px;
  padding: 16px 10px 14px;
  border-left: 1px solid rgba(31, 89, 53, 0.12);

  &:first-child {
    border-left: 0;
  }
`;

export const MobileStatIcon = styled.div`
  width: 44px;
  height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #126d38;

  svg {
    width: 26px;
    height: 26px;
    display: block;
  }
`;

export const MobileStatValue = styled.div`
  margin-top: 2px;
  color: #101820;
  font-size: 0.96rem;
  font-weight: 700;
  line-height: 1.1;
`;

export const MobileStatText = styled.div`
  color: #49535c;
  font-size: 0.76rem;
  line-height: 1.25;
`;

export const MobileSearchPanel = styled.section`
  ${whitePanel};
  display: grid;
  gap: 14px;
  padding: 18px;
`;

export const MobileSearchBar = styled.div`
  display: grid;
  grid-template-columns: 18px minmax(0, 1fr) 24px;
  align-items: center;
  gap: 12px;
  min-height: 60px;
  padding: 0 16px;
  border-radius: 16px;
  border: 1px solid rgba(31, 89, 53, 0.12);
  background: #ffffff;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.94);
`;

export const MobileSearchBarIcon = styled.span`
  width: 18px;
  height: 18px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #6a747d;

  svg {
    width: 18px;
    height: 18px;
    display: block;
  }
`;

export const MobileSearchBarInput = styled.input`
  width: 100%;
  border: 0;
  outline: none;
  background: transparent;
  color: #20272f;
  font-size: 0.98rem;
  line-height: 1.2;

  &::placeholder {
    color: #67727a;
  }
`;

export const MobileFilterToggle = styled.button`
  width: 24px;
  height: 24px;
  border: 0;
  padding: 0;
  background: transparent;
  color: #556168;

  svg {
    width: 20px;
    height: 20px;
    display: block;
  }
`;

export const MobileFilterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
`;

export const MobileFilterField = styled.button`
  min-height: 74px;
  width: 100%;
  padding: 12px 14px;
  border-radius: 14px;
  border: 1px solid rgba(31, 89, 53, 0.12);
  background: #ffffff;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.94);
  display: grid;
  grid-template-columns: 22px minmax(0, 1fr) 12px;
  align-items: center;
  gap: 12px;
  text-align: left;
  color: #162029;
`;

export const MobileFilterFieldIcon = styled.span`
  width: 22px;
  height: 22px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #4f5960;

  svg {
    width: 20px;
    height: 20px;
    display: block;
  }
`;

export const MobileFilterFieldBody = styled.span`
  display: grid;
  gap: 4px;
  min-width: 0;
`;

export const MobileFilterFieldLabel = styled.span`
  color: #313a42;
  font-size: 0.76rem;
  line-height: 1.1;
`;

export const MobileFilterFieldValue = styled.span`
  color: #111921;
  font-size: 0.94rem;
  font-weight: 500;
  line-height: 1.15;
`;

export const MobileFilterFieldChevron = styled.span`
  width: 12px;
  height: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #616c73;

  svg {
    width: 10px;
    height: 10px;
    display: block;
  }
`;

export const MobileFilterDropdown = styled.div`
  padding: 12px;
  border-radius: 16px;
  border: 1px solid rgba(31, 89, 53, 0.12);
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0 18px 34px rgba(51, 69, 55, 0.08);
`;

export const MobileFilterDropdownTitle = styled.div`
  color: #59646b;
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

export const MobileFilterDropdownSection = styled.div`
  display: grid;
  gap: 8px;
  margin-top: 10px;

  & + & {
    margin-top: 14px;
    padding-top: 14px;
    border-top: 1px solid rgba(31, 89, 53, 0.08);
  }
`;

export const MobileFilterDropdownOption = styled.button`
  width: 100%;
  min-height: 42px;
  padding: 10px 12px;
  border-radius: 12px;
  border: 1px solid
    ${({ $active }) =>
      $active ? "rgba(17, 109, 49, 0.18)" : "rgba(31, 89, 53, 0.08)"};
  background: ${({ $active }) =>
    $active ? "linear-gradient(180deg, #eef8f0 0%, #e3f3e6 100%)" : "#ffffff"};
  color: ${({ $active }) => ($active ? "#146d39" : "#23312b")};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  text-align: left;
  font-size: 0.84rem;
  font-weight: 600;
`;

export const MobileSearchCta = styled.button`
  min-height: 56px;
  border-radius: 14px;
  border: 0;
  background: linear-gradient(180deg, #0f6b35 0%, #0c5d2d 100%);
  color: #ffffff;
  font-size: 0.98rem;
  font-weight: 700;
  box-shadow: 0 18px 30px rgba(20, 96, 49, 0.16);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  svg {
    width: 18px;
    height: 18px;
    display: block;
  }
`;

export const MobileMoreFiltersButton = styled.button`
  border: 0;
  padding: 0;
  background: transparent;
  color: #116b37;
  font-size: 0.98rem;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  svg {
    width: 18px;
    height: 18px;
    display: block;
  }
`;

export const MobileSection = styled.section`
  display: grid;
  gap: 12px;
`;

export const MobileSectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 0 2px;
`;

export const MobileSectionTitle = styled.h2`
  margin: 0;
  color: #15211c;
  font-family: "DM Serif Display", Georgia, serif;
  font-size: 1.85rem;
  font-weight: 400;
  line-height: 1;
  letter-spacing: -0.04em;
`;

export const MobileSectionLink = styled.button`
  border: 0;
  padding: 0;
  background: transparent;
  color: #126d38;
  font-size: 0.96rem;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  gap: 8px;

  svg {
    width: 16px;
    height: 16px;
    display: block;
  }
`;

export const MobilePillRow = styled.div`
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding: 2px 2px 4px;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const MobilePill = styled.button`
  min-width: max-content;
  min-height: 42px;
  padding: 0 18px;
  border-radius: 14px;
  border: 1px solid rgba(24, 110, 59, 0.16);
  background: linear-gradient(180deg, #fbfdfb 0%, #f3f8f3 100%);
  color: #176e3c;
  font-size: 0.94rem;
  font-weight: 500;
`;

export const MobileFeaturedRail = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(268px, 72vw);
  gap: 14px;
  overflow-x: auto;
  padding: 2px 2px 6px;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const MobileFeaturedCard = styled.article`
  ${whitePanel};
  overflow: hidden;
`;

export const MobileFeaturedFigure = styled.div`
  position: relative;
  height: 166px;
  overflow: hidden;
`;

export const MobileFeaturedImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

export const MobileFeaturedBadge = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  min-height: 32px;
  padding: 0 12px;
  border-radius: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${({ $featured }) =>
    $featured
      ? "linear-gradient(180deg, #7d33ea 0%, #5d21bf 100%)"
      : "linear-gradient(180deg, #15703a 0%, #0f5d2f 100%)"};
  color: #ffffff;
  font-size: 0.82rem;
  font-weight: 700;
`;

export const MobileFeaturedFavorite = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.42);
  background: rgba(255, 255, 255, 0.16);
  color: #ffffff;
  backdrop-filter: blur(8px);

  svg {
    width: 18px;
    height: 18px;
    display: block;
    margin: 0 auto;
  }
`;

export const MobileFeaturedBody = styled.div`
  display: grid;
  gap: 8px;
  padding: 14px 14px 16px;
`;

export const MobileFeaturedCardTitle = styled.h3`
  margin: 0;
  color: #1b232b;
  font-size: 1.02rem;
  line-height: 1.28;
`;

export const MobileFeaturedLocation = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #566169;
  font-size: 0.84rem;
  line-height: 1.35;

  svg {
    width: 13px;
    height: 13px;
    display: block;
    flex: 0 0 auto;
  }
`;

export const MobileFeaturedSpecs = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  color: #49545c;
  font-size: 0.82rem;

  span + span::before {
    content: "•";
    margin-right: 8px;
    color: #8e989f;
  }
`;

export const MobileFeaturedPrice = styled.div`
  color: #0e7037;
  font-size: 1.02rem;
  font-weight: 700;
  line-height: 1.2;
`;

export const MobileFeaturedDeposit = styled.div`
  color: #434d55;
  font-size: 0.84rem;
  line-height: 1.3;
`;

export const MobileFeaturedButton = styled.button`
  width: 100%;
  min-height: 40px;
  margin-top: 2px;
  border-radius: 10px;
  border: 1px solid rgba(20, 108, 58, 0.18);
  background: linear-gradient(180deg, #ffffff 0%, #f7fbf8 100%);
  color: #176f3c;
  font-size: 0.9rem;
  font-weight: 700;
`;

export const MobileSupportGrid = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(0, 0.92fr);
  gap: 14px;
`;

export const MobileSupportCard = styled.div`
  ${whitePanel};
  padding: 18px 16px;
  display: grid;
  align-content: start;
  justify-items: start;
  gap: 12px;
`;

export const MobileSupportIconWrap = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 18px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #eef7ef 0%, #e3f1e4 100%);
  color: #1d7440;

  svg {
    width: 25px;
    height: 25px;
    display: block;
  }
`;

export const MobileSupportTitle = styled.h3`
  margin: 0;
  color: #163321;
  font-family: "DM Serif Display", Georgia, serif;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 0.95;
  letter-spacing: -0.03em;
`;

export const MobileSupportText = styled.p`
  margin: 0;
  color: #465159;
  font-size: 0.62rem;
  line-height: 1.55;
`;

export const MobileSupportButton = styled.button`
  min-width: 168px;
  min-height: 42px;
  padding: 0 18px;
  border-radius: 10px;
  border: 0;
  background: linear-gradient(180deg, #0f6b35 0%, #0c5d2d 100%);
  color: #ffffff;
  font-size: 0.92rem;
  font-weight: 700;
`;

export const MobileQuickActions = styled.div`
  display: grid;
  gap: 12px;
`;

export const MobileQuickActionCard = styled.button`
  ${whitePanel};
  width: 100%;
  padding: 14px;
  display: flex;
  grid-template-columns: 52px minmax(0, 1fr) 14px;
  align-items: center;
  gap: 12px;
  text-align: left;
`;

export const MobileQuickActionIcon = styled.span`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  color: #1d7440;

  svg {
    width: 30px;
    height: 30px;
    display: block;
  }
`;

export const MobileQuickActionTitle = styled.div`
  color: #1a2229;
  font-size: 0.84rem;
  font-weight: 700;
  line-height: 1.2;
`;

export const MobileQuickActionText = styled.div`
  margin-top: 4px;
  color: #4e5960;
  font-size: 0.5rem;
  line-height: 1.5;
`;

export const MobileQuickActionArrow = styled.span`
  width: 14px;
  height: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #232c32;

  svg {
    width: 12px;
    height: 12px;
    display: block;
  }
`;

export const MobileTrustPanel = styled.section`
  ${whitePanel};
  padding: 14px 6px;
`;

export const MobileTrustGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 0;
`;

export const MobileTrustItem = styled.div`
  display: grid;
  justify-items: center;
  text-align: center;
  gap: 8px;
  padding: 12px 8px 10px;
  border-left: 1px solid rgba(31, 89, 53, 0.1);

  &:first-child {
    border-left: 0;
  }
`;

export const MobileTrustIcon = styled.div`
  width: 34px;
  height: 34px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #176f3c;

  svg {
    width: 22px;
    height: 22px;
    display: block;
  }
`;

export const MobileTrustLabel = styled.div`
  color: #163321;
  font-size: 0.68rem;
  font-weight: 700;
  line-height: 1.2;
`;

export const MobileTrustCopy = styled.div`
  color: #4f5a62;
  font-size: 0.58rem;
  line-height: 1.3;
`;
