import styled from "styled-components";

export const DashboardShell = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 230px minmax(0, 1fr);
  overflow: hidden;
  background: #f6f8fb;

  @media (max-width: 1180px) {
    grid-template-columns: 88px minmax(0, 1fr);
  }

  @media (max-width: 920px) {
    display: none;
  }
`;

export const Sidebar = styled.aside`
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 22px 16px;
  overflow-y: auto;
  scrollbar-width: none;
  color: #fff;
  background: linear-gradient(180deg, #032d1d 0%, #022514 100%);
  box-shadow: inset -1px 0 0 rgba(255, 255, 255, 0.04);

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 920px) {
    display: none;
  }
`;

export const SidebarBrand = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 0 12px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

export const SidebarProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 12px 18px;
  margin-top: 14px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

export const SidebarCopy = styled.div`
  min-width: 0;

  @media (max-width: 1180px) {
    display: none;
  }
`;

export const SidebarSection = styled.div`
  margin-top: 18px;
`;

export const SectionLabel = styled.div`
  padding: 0 14px;
  margin-bottom: 10px;
  color: rgba(255, 255, 255, 0.56);
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;

  @media (max-width: 1180px) {
    display: none;
  }
`;

export const NavList = styled.div`
  display: grid;
  gap: 4px;
`;

export const NavButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  padding: 10px 14px;
  border-radius: 9px;
  color: ${({ $active }) => ($active ? "#fff" : "rgba(255, 255, 255, 0.94)")};
  text-align: left;
  font-size: 14px;
  font-weight: ${({ $active }) => ($active ? 700 : 500)};
  background: ${({ $active }) => ($active ? "#0f8f43" : "transparent")};
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};

  > span:first-of-type {
    flex: 1 1 auto;
    text-align: left;
  }

  svg {
    flex: 0 0 auto;
  }

  @media (max-width: 1180px) {
    justify-content: center;
    padding: 12px;
    span {
      display: none;
    }
  }
`;

export const NavBadge = styled.span`
  min-width: 20px;
  height: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  padding: 0 6px;
  border-radius: 999px;
  color: #ffffff;
  font-size: 11px;
  font-weight: 800;
  background: #13a456;

  @media (max-width: 1180px) {
    display: none;
  }
`;

export const LogoutWrap = styled.div`
  margin-top: auto;
  padding-top: 18px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

export const MainArea = styled.main`
  height: 100vh;
  overflow-y: auto;
  scrollbar-width: none;
  padding: 22px 18px 24px;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 1360px) {
    padding: 18px 16px 22px;
  }

  @media (max-width: 920px) {
    height: auto;
    overflow: visible;
    padding: 16px 12px 24px;
  }
`;

export const TopBar = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 16px;

  @media (max-width: 920px) {
    flex-direction: column;
  }
`;

export const HeadingWrap = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 18px;
`;

export const MenuButton = styled.button`
  width: 38px;
  height: 38px;
  display: inline-grid;
  place-items: center;
  margin-top: 2px;
  border-radius: 10px;
  color: #1a243c;
  background: transparent;
`;

export const DashboardTitle = styled.h1`
  margin: 0;
  color: #15203a;
  font-size: 22px;
  font-weight: 800;
  letter-spacing: -0.03em;
`;

export const DashboardSubtitle = styled.p`
  margin: 6px 0 0;
  color: #576177;
  font-size: 14px;
`;

export const TopActions = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
`;

export const DateButton = styled.button`
  min-width: 310px;
  height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 0 18px;
  border: 1px solid #dfe4ec;
  border-radius: 12px;
  color: #15203a;
  font-size: 14px;
  font-weight: 600;
  background: #fff;
  box-shadow: 0 1px 2px rgba(18, 30, 50, 0.04);

  @media (max-width: 920px) {
    min-width: 0;
    width: 100%;
  }
`;

export const BellButton = styled.button`
  position: relative;
  width: 42px;
  height: 42px;
  display: inline-grid;
  place-items: center;
  border-radius: 999px;
  color: #15203a;
  background: transparent;
`;

export const BellBadge = styled.span`
  position: absolute;
  top: -1px;
  right: -1px;
  min-width: 18px;
  height: 18px;
  padding: 0 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  background: #ef3b3b;
`;

export const HeaderProfile = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 0;
  background: transparent;
`;

export const MetricsGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
  margin-bottom: 16px;

  @media (max-width: 1280px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.section`
  border-radius: 18px;
  background: #fff;
  box-shadow:
    0 10px 32px rgba(18, 31, 53, 0.07),
    0 0 0 1px rgba(20, 31, 47, 0.05);
`;

export const MetricCard = styled(Card)`
  padding: 22px 20px 16px;
  border-top: 2px solid ${({ $accent }) => $accent || "transparent"};
`;

export const MetricHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 14px;
`;

export const MetricIcon = styled.div`
  width: 50px;
  height: 50px;
  display: grid;
  place-items: center;
  border-radius: 999px;
  background: ${({ $bg }) => $bg};
`;

export const MetricLabel = styled.div`
  color: #17213b;
  font-size: 14px;
  font-weight: 700;
`;

export const MetricValue = styled.div`
  margin-top: 8px;
  color: #15203a;
  font-size: 20px;
  font-weight: 800;
  letter-spacing: -0.03em;
`;

export const SubMetricRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
  margin-top: 24px;
  padding-top: 14px;
  border-top: 1px solid #edf1f5;
`;

export const SubMetric = styled.div`
  color: #606b80;
  font-size: 12px;

  strong {
    display: block;
    margin-top: 8px;
    color: #18233d;
    font-size: 14px;
    font-weight: 800;
  }
`;

export const AvailabilityBar = styled.div`
  height: 5px;
  margin-top: 22px;
  border-radius: 999px;
  background: #edf1f5;
  overflow: hidden;

  span {
    display: block;
    width: ${({ $value }) => $value};
    height: 100%;
    border-radius: 999px;
    background: ${({ $color }) => $color};
  }
`;

export const AvailabilityText = styled.div`
  margin-top: 10px;
  color: #18233d;
  text-align: right;
  font-size: 13px;
  font-weight: 600;
`;

export const RevenueCard = styled(Card)`
  padding: 22px 20px 16px;
`;

export const RevenueStats = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin-top: 18px;
  padding-top: 14px;
  border-top: 1px solid #edf1f5;
`;

export const RevenueStat = styled.div`
  color: #606b80;
  font-size: 13px;

  strong {
    display: block;
    margin-top: 10px;
    color: #18233d;
    font-size: 18px;
    font-weight: 800;
  }
`;

export const RevenueTrend = styled.div`
  margin-top: 10px;
`;

export const TrendBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 10px;
  margin-top: 10px;
  border-radius: 8px;
  color: #138543;
  font-size: 12px;
  font-weight: 700;
  background: #ecf8ef;
`;

export const ChartGrid = styled.section`
  display: grid;
  grid-template-columns: 1.28fr 1fr;
  gap: 16px;
  margin-bottom: 16px;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;

export const ChartCard = styled(Card)`
  padding: 18px 20px 14px;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  margin-bottom: 12px;
`;

export const CardTitle = styled.h3`
  margin: 0;
  color: #18233d;
  font-size: 16px;
  font-weight: 800;
  letter-spacing: -0.03em;
`;

export const FilterButton = styled.button`
  height: 36px;
  padding: 0 14px;
  border: 1px solid #dfe4ec;
  border-radius: 10px;
  color: #18233d;
  font-size: 14px;
  font-weight: 600;
  background: #fff;
`;

export const LegendRow = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
  margin-bottom: 6px;
  padding-left: 28px;
  color: #263148;
  font-size: 14px;

  @media (max-width: 720px) {
    flex-wrap: wrap;
    gap: 10px 20px;
    padding-left: 0;
  }
`;

export const LegendItem = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;

  &::before {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 999px;
    background: ${({ $color }) => $color};
  }
`;

export const AvailabilityCard = styled(Card)`
  display: grid;
  grid-template-columns: 260px 1fr;
  align-items: center;
  gap: 20px;
  padding: 18px 20px;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

export const DonutWrap = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: conic-gradient(
    #2ea55d 0 53.8%,
    #2d7be6 53.8% 75%,
    #ff982f 75% 100%
  );

  &::before {
    content: "";
    width: 102px;
    height: 102px;
    border-radius: 50%;
    background: #fff;
    box-shadow: inset 0 0 0 1px rgba(17, 29, 48, 0.04);
  }
`;

export const DonutCenter = styled.div`
  position: absolute;
  display: grid;
  gap: 4px;
  text-align: center;
  color: #17213b;

  strong {
    font-size: 24px;
    font-weight: 800;
  }

  span {
    font-size: 13px;
    color: #4d576b;
  }
`;

export const AvailabilityLegend = styled.div`
  display: grid;
  gap: 28px;
  padding-right: 20px;

  @media (max-width: 720px) {
    width: 100%;
    padding-right: 0;
  }
`;

export const AvailabilityItem = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 16px;
  align-items: center;
  color: #18233d;
  font-size: 14px;
  font-weight: 600;
`;

export const Dot = styled.span`
  width: 11px;
  height: 11px;
  border-radius: 3px;
  background: ${({ $color }) => $color};
`;

export const TableGrid = styled.section`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 16px;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;

export const TableCard = styled(Card)`
  padding: 18px 18px 12px;
`;

export const ViewAllButton = styled.button`
  height: 32px;
  padding: 0 14px;
  border-radius: 8px;
  color: #0d8b41;
  font-size: 13px;
  font-weight: 700;
  background: #f1fbf4;
`;

export const TableScroll = styled.div`
  overflow-x: auto;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th {
    padding: 10px 0 14px;
    color: #576177;
    font-size: 12px;
    font-weight: 600;
    text-align: left;
    white-space: nowrap;
  }

  td {
    padding: 12px 0;
    border-top: 1px solid #edf1f5;
    color: #18233d;
    font-size: 13px;
    vertical-align: middle;
  }
`;

export const ThumbRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 245px;
`;

export const Thumb = styled.img`
  width: 58px;
  height: 38px;
  border-radius: 8px;
  object-fit: cover;
`;

export const TypeBadge = styled.span`
  display: inline-flex;
  align-items: center;
  height: 24px;
  padding: 0 10px;
  border-radius: 7px;
  color: ${({ $color }) => $color};
  font-size: 12px;
  font-weight: 700;
  background: ${({ $bg }) => $bg};
  white-space: nowrap;
`;

export const StatusText = styled.span`
  color: ${({ $color }) => $color};
  font-weight: 700;
`;

export const LeadAvatar = styled.div`
  width: 28px;
  height: 28px;
  display: inline-grid;
  place-items: center;
  border-radius: 999px;
  color: #2a4c74;
  font-size: 11px;
  font-weight: 700;
  background: ${({ $bg }) => $bg || "#e7eefb"};
`;

export const BreadcrumbRow = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  margin-top: 7px;
  color: #647086;
  font-size: 14px;
  font-weight: 500;
`;

export const BreadcrumbCurrent = styled.span`
  color: #465066;
`;

export const SimpleMetricsGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
  margin-bottom: 20px;

  @media (max-width: 1280px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

export const SimpleMetricCard = styled(Card)`
  padding: 22px 26px;
  display: flex;
  align-items: center;
  gap: 18px;
  min-height: 102px;
`;

export const SimpleMetricCopy = styled.div`
  display: grid;
  gap: 8px;
`;

export const SimpleMetricLabel = styled.div`
  color: #17213b;
  font-size: 14px;
  font-weight: 700;
`;

export const SimpleMetricValue = styled.div`
  color: #15203a;
  font-size: 22px;
  font-weight: 800;
  letter-spacing: -0.03em;
`;

export const BuyPageCard = styled(Card)`
  padding: 0;
  overflow: hidden;
`;

export const BuyToolbar = styled.div`
  padding: 22px 24px 0;
`;

export const BuyToolbarTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding-bottom: 18px;
  border-bottom: 1px solid #edf1f5;

  @media (max-width: 980px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const SearchWrap = styled.div`
  width: min(100%, 388px);
  height: 40px;
  display: flex;
  align-items: center;
  gap: 11px;
  padding: 0 14px;
  border: 1px solid #d9e0e9;
  border-radius: 10px;
  color: #7c879c;
  background: #fff;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.7);

  @media (max-width: 980px) {
    width: 100%;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  border: 0;
  outline: 0;
  padding: 0;
  color: #18233d;
  font-size: 14px;
  background: transparent;

  &::placeholder {
    color: #96a0b2;
  }
`;

export const ActionRow = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
`;

export const PrimaryAction = styled.button`
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 0 18px;
  border-radius: 8px;
  color: #ffffff;
  font-size: 15px;
  font-weight: 700;
  background: linear-gradient(180deg, #119247 0%, #0e853f 100%);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.12);
`;

export const SecondaryAction = styled.button`
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 0 18px;
  border: 1px solid #d9e0e9;
  border-radius: 8px;
  color: #18233d;
  font-size: 15px;
  font-weight: 600;
  background: #ffffff;
`;

export const BuyFiltersRow = styled.div`
  display: grid;
  grid-template-columns:
    repeat(${({ $columns }) => $columns || 4}, minmax(0, 154px))
    auto;
  gap: 16px;
  padding: 16px 0 22px;

  @media (max-width: 1180px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

export const FilterField = styled.label`
  display: grid;
  gap: 8px;
`;

export const FilterFieldLabel = styled.span`
  color: #263148;
  font-size: 13px;
  font-weight: 500;
`;

export const SelectWrap = styled.div`
  position: relative;
`;

export const FilterSelect = styled.select`
  width: 100%;
  height: 40px;
  padding: 0 38px 0 14px;
  border: 1px solid #d9e0e9;
  border-radius: 8px;
  color: #18233d;
  font-size: 14px;
  background: #ffffff;
  appearance: none;
  outline: 0;
`;

export const FiltersActionWrap = styled.div`
  display: flex;
  align-items: end;
`;

export const MoreFiltersButton = styled.button`
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 0 16px;
  border: 1px solid #d9e0e9;
  border-radius: 8px;
  color: #18233d;
  font-size: 14px;
  font-weight: 600;
  background: #ffffff;
`;

export const BuyTableWrap = styled.div`
  border-top: 1px solid #edf1f5;
`;

export const BuyTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th {
    padding: 16px 12px;
    color: #18233d;
    font-size: 13px;
    font-weight: 700;
    text-align: left;
    white-space: nowrap;
  }

  td {
    padding: 12px;
    border-top: 1px solid #edf1f5;
    color: #18233d;
    font-size: 14px;
    vertical-align: middle;
  }
`;

export const CheckboxCell = styled.td`
  width: 42px;
`;

export const TableCheckbox = styled.input`
  width: 16px;
  height: 16px;
  accent-color: #0f8f43;
`;

export const BuyPropertyCell = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  min-width: 250px;
`;

export const BuyThumb = styled.img`
  width: 74px;
  height: 46px;
  border-radius: 10px;
  object-fit: cover;
  flex: 0 0 auto;
`;

export const BuyPropertyName = styled.div`
  color: #15203a;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.45;

  span {
    display: block;
    margin-top: 4px;
    color: #465066;
    font-size: 12px;
    font-weight: 500;
  }
`;

export const Pill = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 63px;
  height: 24px;
  padding: 0 10px;
  border-radius: 7px;
  color: ${({ $color }) => $color};
  font-size: 12px;
  font-weight: 700;
  background: ${({ $bg }) => $bg};
  white-space: nowrap;
`;

export const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const TableActionButton = styled.button`
  width: 32px;
  height: 32px;
  display: inline-grid;
  place-items: center;
  border: 1px solid #e0e5ec;
  border-radius: 8px;
  color: #52607a;
  background: #ffffff;
`;

export const BuyTableFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 18px 24px 22px;
  border-top: 1px solid #edf1f5;

  @media (max-width: 980px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const FooterMeta = styled.div`
  color: #263148;
  font-size: 14px;
  font-weight: 500;
`;

export const FooterControls = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;
  flex-wrap: wrap;

  @media (max-width: 980px) {
    justify-content: space-between;
  }
`;

export const PageSizeSelect = styled.select`
  width: 126px;
  height: 40px;
  padding: 0 36px 0 14px;
  border: 1px solid #d9e0e9;
  border-radius: 8px;
  color: #18233d;
  font-size: 14px;
  background: #ffffff;
  appearance: none;
  outline: 0;
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #18233d;
`;

export const PaginationButton = styled.button`
  min-width: ${({ $icon }) => ($icon ? "36px" : "34px")};
  height: 34px;
  display: inline-grid;
  place-items: center;
  padding: 0 10px;
  border: ${({ $active, $plain }) =>
    $active || $plain ? "0" : "1px solid #d9e0e9"};
  border-radius: 8px;
  color: ${({ $active }) => ($active ? "#ffffff" : "#18233d")};
  font-size: 14px;
  font-weight: ${({ $active }) => ($active ? 700 : 600)};
  background: ${({ $active, $plain }) =>
    $active ? "#0f8f43" : $plain ? "transparent" : "#ffffff"};
`;
