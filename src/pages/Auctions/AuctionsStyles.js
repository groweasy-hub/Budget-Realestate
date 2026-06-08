import styled, { css } from "styled-components";

const panel = css`
  background: rgba(255, 255, 255, 0.98);
  border: 1px solid rgba(30, 82, 46, 0.08);
  box-shadow: 0 22px 54px rgba(36, 52, 40, 0.08);
  border-radius: 24px;
`;

const muted = "#65726b";
const borderColor = "rgba(31, 81, 47, 0.1)";
const successGreen = "#0f6b34";
const headingInk = "#10211d";

export const AuctionsPageShell = styled.main`
  min-height: 100vh;
  background:
    radial-gradient(
      circle at 17% 5%,
      rgba(241, 218, 181, 0.58),
      transparent 24%
    ),
    radial-gradient(
      circle at 86% 18%,
      rgba(235, 243, 230, 0.88),
      transparent 24%
    ),
    linear-gradient(180deg, #fcfdfb 0%, #f4f8f2 100%);
`;

export const AuctionsInner = styled.div`
  width: min(1520px, calc(100% - 68px));
  margin: 0 auto;
  padding: 12px 0 40px;

  @media (max-width: 1100px) {
    width: min(100%, calc(100% - 24px));
    padding-bottom: 28px;
  }
`;

export const HeroSection = styled.section`
  position: relative;
  padding: 14px 0 0;
`;

export const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.92fr) minmax(440px, 1.08fr);
  gap: 28px;
  align-items: end;

  @media (max-width: 1180px) {
    grid-template-columns: 1fr;
  }
`;

export const HeroCopy = styled.div`
  margin-bottom: 62px;
  padding: 26px 0 22px 18px;

  @media (max-width: 1180px) {
    padding: 28px 4px 8px;
  }
`;

export const HeroTitle = styled.h1`
  margin: 0;
  color: #0f6b34;
  font-size: clamp(2.6rem, 4.2vw, 4rem);
  font-weight: 700;
  line-height: 1.04;
  letter-spacing: -0.04em;
`;

export const HeroDescription = styled.p`
  max-width: 560px;
  margin: 18px 0 0;
  color: #4b5c5f;
  max-width: 880px;
  margin: 20px auto 0;
  font-size: clamp(1rem, 1.7vw, 1.18rem);
  line-height: 1.65;
`;

export const HeroHighlights = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 22px;
  margin-top: 44px;

  @media (max-width: 760px) {
    gap: 14px;
  }
`;

export const HighlightItem = styled.div`
  display: grid;
  grid-template-columns: 52px minmax(0, 1fr);
  gap: 12px;
  align-items: center;
  min-width: 220px;
`;

export const HighlightIcon = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #eef8ef 0%, #e3f1e5 100%);
  color: #1a6a38;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.9);

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const HighlightTitle = styled.div`
  color: #16261f;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.25;
`;

export const HighlightText = styled.div`
  margin-top: 4px;
  color: ${muted};
  font-size: 0.92rem;
  line-height: 1.45;
`;

export const HeroVisual = styled.div`
  position: relative;
  min-height: 454px;
  display: flex;
  align-items: end;
  justify-content: end;

  @media (max-width: 1180px) {
    min-height: 320px;
  }
`;

export const HeroImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center;
  display: block;
  filter: drop-shadow(0 34px 36px rgba(18, 28, 22, 0.16));
  mask-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.95) 10%,
    rgba(0, 0, 0, 1) 78%,
    rgba(0, 0, 0, 0) 100%
  );
`;

export const SearchPanel = styled.section`
  ${panel};
  position: relative;
  z-index: 2;
  margin-top: -18px;
  padding: 18px 20px 14px;

  @media (max-width: 980px) {
    margin-top: 8px;
    padding: 16px 14px;
  }
`;

export const SearchGrid = styled.div`
  display: grid;
  grid-template-columns: 1.58fr repeat(3, minmax(0, 1fr)) 0.98fr;
  gap: 14px;
  align-items: end;

  @media (max-width: 1280px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const SearchField = styled.label`
  display: grid;
  gap: 7px;
`;

export const SearchLabel = styled.span`
  color: #15241d;
  font-size: 0.84rem;
  font-weight: 700;
  line-height: 1.2;
`;

const controlBase = css`
  min-height: 50px;
  border-radius: 10px;
  border: 1px solid ${borderColor};
  background: #ffffff;
  color: #22312b;
  font-size: 0.92rem;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.92);
`;

export const SearchInputWrap = styled.div`
  ${controlBase};
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 14px 0 16px;
`;

export const SearchInput = styled.input`
  width: 100%;
  border: 0;
  outline: none;
  background: transparent;
  color: #22312b;
  font-size: 0.92rem;
  line-height: 1;

  &::placeholder {
    color: #7a8780;
  }
`;

export const SearchControlIcon = styled.span`
  color: #44544d;

  svg {
    width: 16px;
    height: 16px;
    display: block;
  }
`;

export const SearchSelectWrap = styled.div`
  ${controlBase};
  position: relative;
  overflow: hidden;

  select {
    width: 100%;
    height: 100%;
    padding: 0 38px 0 14px;
    border: 0;
    outline: none;
    background: transparent;
    color: #22312b;
    font-size: 0.92rem;
    line-height: 1;
    appearance: none;
    cursor: pointer;
  }
`;

export const SearchSelectIcon = styled.span`
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: #5f6d67;
  pointer-events: none;

  svg {
    width: 12px;
    height: 12px;
    display: block;
  }
`;

export const SearchButton = styled.button`
  min-height: 50px;
  border-radius: 10px;
  background: linear-gradient(180deg, #0f6b34 0%, #0a5a2a 100%);
  color: #ffffff;
  font-size: 0.92rem;
  font-weight: 700;
  box-shadow: 0 18px 30px rgba(12, 87, 38, 0.2);
  cursor: pointer;
`;

export const SearchBottomRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  padding-top: 14px;

  @media (max-width: 980px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const PopularSearches = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  color: #1f2f29;
  font-size: 0.88rem;

  strong {
    margin-right: 6px;
  }
`;

export const SearchChip = styled.button`
  min-height: 32px;
  padding: 0 13px;
  border-radius: 999px;
  border: 1px solid rgba(37, 117, 66, 0.18);
  background: linear-gradient(180deg, #eef8ef 0%, #e4f2e5 100%);
  color: #216f3c;
  font-size: 0.84rem;
  font-weight: 600;
  cursor: pointer;
`;

export const SortTools = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: auto;

  @media (max-width: 980px) {
    margin-left: 0;
  }
`;

export const SortLabel = styled.span`
  color: ${muted};
  font-size: 0.86rem;
`;

export const SortSelectWrap = styled(SearchSelectWrap)`
  width: 160px;
  min-width: 160px;
  justify-self: center;

  select {
    font-size: 0.88rem;
    font-weight: 600;
    padding: 0 36px;
    text-align: center;
    text-align-last: center;
  }
`;

export const ViewButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ViewButton = styled.button`
  width: 34px;
  height: 34px;
  border-radius: 8px;
  border: 1px solid
    ${({ $active }) => ($active ? "rgba(29, 112, 56, 0.24)" : borderColor)};
  background: ${({ $active }) =>
    $active ? "linear-gradient(180deg, #eef8ef 0%, #e1f1e3 100%)" : "#ffffff"};
  color: ${({ $active }) => ($active ? "#176d39" : "#62706a")};
  cursor: pointer;

  svg {
    width: 15px;
    height: 15px;
  }
`;

export const ContentSection = styled.section`
  margin-top: 28px;
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 290px minmax(0, 1fr) 330px;
  gap: 22px;
  align-items: start;

  @media (max-width: 1320px) {
    grid-template-columns: 290px minmax(0, 1fr);
  }

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

export const Sidebar = styled.aside`
  ${panel};
  padding: 22px 22px 18px;
`;

export const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(32, 83, 49, 0.08);
`;

export const SidebarTitle = styled.h2`
  margin: 0;
  color: ${headingInk};
  font-size: 1.15rem;
  font-weight: 700;
`;

export const ClearButton = styled.button`
  background: transparent;
  color: #1c7a40;
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
`;

export const FilterSection = styled.div`
  padding: 18px 0;
  border-bottom: 1px solid rgba(32, 83, 49, 0.08);

  &:last-of-type {
    border-bottom: 0;
  }
`;

export const FilterTitle = styled.h3`
  margin: 0 0 14px;
  color: #182520;
  font-size: 0.98rem;
  font-weight: 700;
`;

export const CheckboxList = styled.div`
  display: grid;
  gap: 12px;
`;

export const FilterRow = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  cursor: pointer;
  color: #26342d;
  font-size: 0.93rem;
`;

export const FilterLabelWrap = styled.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 10px;
`;

export const HiddenCheckbox = styled.input`
  position: absolute;
  opacity: 0;
  pointer-events: none;
`;

export const CheckboxMark = styled.span`
  width: 17px;
  height: 17px;
  position: relative;
  border-radius: 4px;
  border: 1px solid
    ${({ $checked }) =>
      $checked ? "rgba(18, 111, 53, 0.2)" : "rgba(31, 81, 47, 0.18)"};
  background: ${({ $checked }) =>
    $checked ? "linear-gradient(180deg, #107039 0%, #0b5d2c 100%)" : "#ffffff"};

  &::after {
    content: "";
    position: absolute;
    left: 5px;
    top: 2px;
    width: 4px;
    height: 8px;
    border: solid #ffffff;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    opacity: ${({ $checked }) => ($checked ? 1 : 0)};
  }
`;

export const FilterCount = styled.span`
  color: ${muted};
  font-size: 0.9rem;
`;

export const FilterIcon = styled.span`
  color: ${({ $active }) => ($active ? "#146d39" : "#71807a")};

  svg {
    width: 17px;
    height: 17px;
    display: block;
  }
`;

export const FieldStack = styled.div`
  display: grid;
  gap: 10px;
`;

export const SidebarInputWrap = styled.div`
  ${controlBase};
  min-width: 0;
  min-height: 50px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 14px;
  cursor: text;
`;

export const SidebarInput = styled.input`
  width: 100%;
  min-width: 0;
  border: 0;
  outline: none;
  background: transparent;
  color: #22312b;
  font-size: 0.94rem;

  &::placeholder {
    color: #7b8882;
  }

  &[type="date"] {
    font-size: 0.78rem;
    letter-spacing: -0.02em;
  }
`;

export const InlineFields = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 10px;
  align-items: center;
`;

export const InlineDash = styled.span`
  color: #7e8b84;
  font-size: 0.95rem;
`;

export const ApplyFiltersButton = styled.button`
  width: 100%;
  min-height: 58px;
  margin-top: 16px;
  border-radius: 12px;
  background: linear-gradient(180deg, #0f6b34 0%, #0a5a2a 100%);
  color: #ffffff;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
`;

export const ResultsColumn = styled.div`
  min-width: 0;
`;

export const ResultsHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 4px 0 16px;
  color: #1b2a24;
  font-size: 1.05rem;
  font-weight: 700;

  span {
    color: #167139;
  }
`;

export const ResultsList = styled.div`
  display: grid;
  gap: 16px;
`;

export const ResultCard = styled.article`
  ${panel};
  overflow: hidden;
  padding: 16px;
  cursor: pointer;
`;

export const ResultCardGrid = styled.div`
  display: grid;
  grid-template-columns: 264px minmax(0, 1fr);
  gap: 18px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const ResultFigure = styled.div`
  position: relative;
  height: 230px;
  border-radius: 16px;
  overflow: hidden;
  background: #dce9df;
`;

export const ResultImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const StatusBadge = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  min-height: 28px;
  padding: 0 10px;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  font-size: 0.75rem;
  font-weight: 700;
  color: #ffffff;
  background: ${({ $tone }) =>
    $tone === "upcoming"
      ? "linear-gradient(180deg, #f6a227 0%, #ec8a11 100%)"
      : $tone === "info"
        ? "linear-gradient(180deg, #4f7dff 0%, #3467eb 100%)"
        : "linear-gradient(180deg, #119844 0%, #0d7a36 100%)"};
`;

export const FavoriteButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(255, 255, 255, 0.6);
  color: #31413a;
  backdrop-filter: blur(8px);
  cursor: pointer;

  svg {
    width: 18px;
    height: 18px;
  }
`;

export const ResultBody = styled.div`
  display: grid;
  align-content: start;
`;

export const ResultTitle = styled.h3`
  margin: 2px 0 0;
  color: #182620;
  font-size: 1.13rem;
  font-weight: 700;
  line-height: 1.3;
`;

export const ResultLocation = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  margin-top: 8px;
  color: ${muted};
  font-size: 0.92rem;

  svg {
    width: 15px;
    height: 15px;
    color: #7d8a84;
  }
`;

export const ResultSpecs = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 14px;
`;

export const ResultSpec = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  color: #46544e;
  font-size: 0.9rem;

  svg {
    width: 15px;
    height: 15px;
  }
`;

export const MetricsRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1.25fr;
  gap: 18px;
  margin-top: 20px;
  padding-top: 14px;
  border-top: 1px solid rgba(32, 83, 49, 0.08);

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const MetricBlock = styled.div``;

export const MetricLabel = styled.div`
  color: #6e7c76;
  font-size: 0.76rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  text-transform: uppercase;
`;

export const MetricValue = styled.div`
  margin-top: 10px;
  color: ${({ $accent }) => ($accent ? successGreen : "#17251f")};
  font-size: ${({ $accent }) => ($accent ? "1.1rem" : "1.04rem")};
  font-weight: 800;
`;

export const MetricInline = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 14px;
  color: #17251f;
  font-size: 0.98rem;
  font-weight: 700;
`;

export const CountdownRow = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
`;

export const CountdownBox = styled.div`
  min-width: 44px;
  padding: 8px 6px 6px;
  border-radius: 8px;
  border: 1px solid rgba(246, 92, 82, 0.22);
  background: #fff7f6;
  text-align: center;
`;

export const CountdownValue = styled.div`
  color: #ef4d42;
  font-size: 1rem;
  font-weight: 800;
  line-height: 1;
`;

export const CountdownLabel = styled.div`
  margin-top: 5px;
  color: #8b8f94;
  font-size: 0.57rem;
  font-weight: 700;
  letter-spacing: 0.05em;
`;

export const ResultFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  margin-top: 18px;
  padding-top: 14px;
  border-top: 1px solid rgba(32, 83, 49, 0.08);

  @media (max-width: 760px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const BankInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  color: #394842;
  font-size: 0.92rem;
`;

export const VerifiedMark = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  color: #126d39;
  font-size: 0.9rem;
  font-weight: 700;

  svg {
    width: 15px;
    height: 15px;
  }
`;

export const ViewDetailsButton = styled.button`
  min-width: 116px;
  min-height: 42px;
  padding: 0 16px;
  border-radius: 10px;
  border: 1px solid rgba(31, 118, 61, 0.24);
  background: linear-gradient(180deg, #ffffff 0%, #f5faf6 100%);
  color: #166f39;
  font-size: 0.92rem;
  font-weight: 700;
  cursor: pointer;
`;

export const RightRail = styled.div`
  display: grid;
  gap: 18px;

  @media (max-width: 1320px) {
    grid-column: 1 / -1;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

export const SideCard = styled.aside`
  ${panel};
  padding: 24px 22px;
`;

export const DarkSideCard = styled(SideCard)`
  background: linear-gradient(180deg, #0b6b34 0%, #084f26 100%);
  color: #ffffff;
  border-color: rgba(11, 76, 35, 0.22);
  box-shadow: 0 20px 36px rgba(12, 72, 36, 0.18);
`;

export const SideTitle = styled.h3`
  margin: 0;
  color: ${({ $dark }) => ($dark ? "#ffffff" : "#182620")};
  font-size: 1.1rem;
  font-weight: 800;
  line-height: 1.35;
`;

export const StepsList = styled.div`
  display: grid;
  gap: 18px;
  margin-top: 20px;
`;

export const StepItem = styled.div`
  display: grid;
  grid-template-columns: 46px minmax(0, 1fr);
  gap: 12px;
`;

export const StepIcon = styled.div`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #eef8ef 0%, #e2f1e4 100%);
  color: #136d38;

  svg {
    width: 22px;
    height: 22px;
  }
`;

export const StepHeading = styled.div`
  color: #14211d;
  font-size: 1rem;
  font-weight: 800;
`;

export const StepText = styled.p`
  margin: 6px 0 0;
  color: ${muted};
  font-size: 0.91rem;
  line-height: 1.55;
`;

export const SideButton = styled.button`
  width: 100%;
  min-height: 48px;
  margin-top: 20px;
  border-radius: 12px;
  border: 1px solid rgba(26, 111, 57, 0.24);
  background: ${({ $dark }) =>
    $dark
      ? "linear-gradient(180deg, #ffffff 0%, #f4fbf5 100%)"
      : "linear-gradient(180deg, #ffffff 0%, #f4fbf5 100%)"};
  color: ${({ $dark }) => ($dark ? "#106b35" : "#146d39")};
  font-size: 0.94rem;
  font-weight: 700;
  cursor: pointer;
`;

export const ReasonsList = styled.div`
  display: grid;
  gap: 16px;
  margin-top: 20px;
`;

export const ReasonItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #26342d;
  font-size: 0.95rem;
`;

export const ReasonDot = styled.span`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #0f6d34;
  color: #ffffff;

  svg {
    width: 11px;
    height: 11px;
  }
`;

export const DarkCardHeader = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 16px;
`;

export const DarkCardText = styled.p`
  margin: 14px 0 0;
  color: rgba(242, 247, 243, 0.9);
  font-size: 0.94rem;
  line-height: 1.72;
`;

export const DarkCardIcon = styled.div`
  color: #8de284;

  svg {
    width: 40px;
    height: 40px;
  }
`;

export const StatsStrip = styled.section`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 16px;
  margin-top: 28px;

  @media (max-width: 1180px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const StatCard = styled.div`
  ${panel};
  padding: 20px 22px;
  display: grid;
  grid-template-columns: 48px minmax(0, 1fr);
  gap: 14px;
  align-items: center;
`;

export const StatIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #eef8ef 0%, #e2f1e4 100%);
  color: #146e39;

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const StatValue = styled.div`
  color: #16251f;
  font-size: 1.1rem;
  font-weight: 800;
`;

export const StatLabel = styled.div`
  margin-top: 4px;
  color: ${muted};
  font-size: 0.91rem;
`;

export const TrustStrip = styled.section`
  ${panel};
  margin-top: 18px;
  padding: 24px 26px;
`;

export const TrustGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 1180px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const TrustItem = styled.div`
  display: grid;
  grid-template-columns: 48px minmax(0, 1fr);
  gap: 12px;
  align-items: start;
`;

export const TrustIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #eef8ef 0%, #e4f2e5 100%);
  color: #146d39;

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const TrustTitle = styled.div`
  color: #17251f;
  font-size: 0.98rem;
  font-weight: 800;
`;

export const TrustText = styled.p`
  margin: 6px 0 0;
  color: ${muted};
  font-size: 0.9rem;
  line-height: 1.55;
`;
