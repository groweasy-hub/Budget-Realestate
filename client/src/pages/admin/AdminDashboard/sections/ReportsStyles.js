import styled from "styled-components";
import { Card } from "../AdminDashboardStyles";

export const ReportPage = styled.div`
  display: grid;
  gap: 18px;
`;

export const FilterStrip = styled.div`
  display: grid;
  grid-template-columns: ${({ $analytics }) => ($analytics ? "auto repeat(4, minmax(150px, 1fr)) auto" : "repeat(5, minmax(150px, 1fr)) auto auto")};
  gap: 20px;
  align-items: end;
  margin-bottom: 20px;
`;

export const RangeTabs = styled.div`
  height: 40px;
  display: inline-flex;
  align-items: center;
  padding: 4px;
  border: 1px solid #dce3ee;
  border-radius: 8px;
  background: #fff;
`;

export const RangeTab = styled.button`
  height: 30px;
  min-width: 52px;
  padding: 0 14px;
  border-radius: 6px;
  color: ${({ $active }) => ($active ? "#fff" : "#08112f")};
  font-size: 12px;
  font-weight: 800;
  background: ${({ $active }) => ($active ? "#07833e" : "transparent")};
`;

export const FilterField = styled.label`
  display: grid;
  gap: 8px;
  color: #25304a;
  font-size: 11px;
  font-weight: 800;
`;

export const SelectWrap = styled.div`
  position: relative;

  &::after {
    content: "";
    position: absolute;
    right: 15px;
    top: 50%;
    width: 7px;
    height: 7px;
    border-right: 1.7px solid #08112f;
    border-bottom: 1.7px solid #08112f;
    transform: translateY(-65%) rotate(45deg);
    pointer-events: none;
  }
`;

export const Select = styled.select`
  width: 100%;
  height: 40px;
  padding: 0 36px 0 14px;
  border: 1px solid #dce3ee;
  border-radius: 7px;
  color: #08112f;
  font-size: 12px;
  font-weight: 800;
  background: #fff;
  appearance: none;
`;

export const FilterButton = styled.button`
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  padding: 0 18px;
  border: 1px solid #dce3ee;
  border-radius: 7px;
  color: #08112f;
  font-size: 12px;
  font-weight: 800;
  background: #fff;
`;

export const ResetButton = styled.button`
  height: 40px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #07833e;
  font-size: 12px;
  font-weight: 800;
  background: transparent;
`;

export const StatGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(${({ $count }) => $count || 6}, minmax(0, 1fr));
  gap: 18px;
  margin-bottom: 20px;
`;

export const StatCard = styled(Card)`
  min-height: 94px;
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 18px 18px;
  border-radius: 10px;
`;

export const StatIcon = styled.div`
  width: 48px;
  height: 48px;
  display: grid;
  place-items: center;
  flex: 0 0 auto;
  border-radius: 999px;
  color: ${({ $color }) => $color};
  background: ${({ $bg }) => $bg};
`;

export const StatLabel = styled.div`
  color: #08112f;
  font-size: 11px;
  font-weight: 800;
`;

export const StatValue = styled.div`
  margin-top: 7px;
  color: #08112f;
  font-size: 20px;
  font-weight: 800;
  letter-spacing: -0.03em;
`;

export const StatMeta = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  margin-top: 8px;
  color: #07833e;
  font-size: 9px;
  font-weight: 800;
`;

export const Grid = styled.section`
  display: grid;
  grid-template-columns: ${({ $cols }) => $cols || "1fr 1fr"};
  gap: 18px;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Panel = styled(Card)`
  padding: 18px 20px;
  border-radius: 10px;
  min-width: 0;
  overflow: hidden;
`;

export const PanelHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 14px;
`;

export const PanelTitle = styled.h3`
  margin: 0;
  color: #08112f;
  font-size: 15px;
  font-weight: 800;
`;

export const ViewLink = styled.button`
  color: #176cf0;
  font-size: 11px;
  font-weight: 800;
  background: transparent;
`;

export const Legend = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 26px;
  color: #08112f;
  font-size: 10px;
  font-weight: 700;
`;

export const LegendItem = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 7px;

  &::before {
    content: "";
    width: 10px;
    height: 5px;
    border-radius: 99px;
    background: ${({ $color }) => $color};
  }
`;

export const DonutGrid = styled.div`
  display: grid;
  grid-template-columns: 126px minmax(0, 1fr);
  gap: 14px;
  align-items: center;
`;

export const Donut = styled.div`
  width: 118px;
  height: 118px;
  position: relative;
  display: grid;
  place-items: center;
  border-radius: 999px;
  background: ${({ $gradient }) => $gradient};

  &::before {
    content: "";
    width: 66px;
    height: 66px;
    border-radius: 999px;
    background: #fff;
  }
`;

export const DonutCenter = styled.div`
  position: absolute;
  display: grid;
  gap: 3px;
  text-align: center;

  strong {
    color: #08112f;
    font-size: 19px;
    font-weight: 800;
  }

  span {
    color: #33415f;
    font-size: 10px;
    font-weight: 700;
  }
`;

export const DonutLegend = styled.div`
  display: grid;
  gap: 10px;
  min-width: 0;
`;

export const DonutLegendItem = styled.div`
  display: grid;
  grid-template-columns: 9px minmax(0, 1fr) auto;
  align-items: center;
  gap: 10px;
  color: #08112f;
  font-size: 10px;
  font-weight: 800;
  min-width: 0;

  span:nth-child(2) {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  strong {
    justify-self: end;
    text-align: right;
    white-space: nowrap;
  }

  span:first-child {
    width: 8px;
    height: 8px;
    border-radius: 3px;
    background: ${({ $color }) => $color};
  }
`;

export const AgentList = styled.div`
  display: grid;
  gap: 18px;
`;

export const AgentItem = styled.div`
  display: grid;
  grid-template-columns: auto auto minmax(0, 1fr) auto auto;
  align-items: center;
  gap: 12px;
  color: #08112f;
`;

export const Medal = styled.div`
  width: 20px;
  height: 20px;
  display: grid;
  place-items: center;
  border-radius: 999px;
  color: #fff;
  font-size: 10px;
  font-weight: 800;
  background: ${({ $type }) => ({ gold: "#ffb020", silver: "#b9c0ca", bronze: "#ef6a32" }[$type] || "transparent")};
`;

export const Avatar = styled.div`
  width: ${({ $small }) => ($small ? "30px" : "34px")};
  height: ${({ $small }) => ($small ? "30px" : "34px")};
  position: relative;
  flex: 0 0 auto;
  border-radius: 999px;
  overflow: hidden;
  background:
    radial-gradient(circle at 50% 30%, ${({ $type }) => ($type === "female" ? "#f2b18f" : "#d89b72")} 0 18%, transparent 19%),
    radial-gradient(circle at 50% 102%, ${({ $type }) => ($type === "female" ? "#f7f8fb" : "#0f1a32")} 0 36%, transparent 37%),
    ${({ $type }) => ($type === "female" ? "#ffe3da" : "#e7eef6")};

  &::before {
    content: "";
    position: absolute;
    left: 6px;
    top: 5px;
    width: 22px;
    height: ${({ $type }) => ($type === "female" ? "17px" : "12px")};
    border-radius: 14px 14px 8px 8px;
    background: ${({ $type }) => ($type === "female" ? "#181521" : "#172033")};
  }
`;

export const SmallText = styled.div`
  color: #33415f;
  font-size: 10px;
  font-weight: 700;
`;

export const StrongText = styled.div`
  color: #08112f;
  font-size: 12px;
  font-weight: 800;
`;

export const Table = styled.table`
  width: 100%;
  min-width: ${({ $minWidth }) => $minWidth || "0"};
  border-collapse: collapse;

  th {
    height: 36px;
    padding: 0 12px;
    color: #08112f;
    font-size: 10px;
    font-weight: 800;
    text-align: left;
    white-space: nowrap;
  }

  td {
    height: 38px;
    padding: 0 12px;
    border-top: 1px solid #edf1f5;
    color: #08112f;
    font-size: 11px;
    font-weight: 700;
    white-space: nowrap;
  }
`;

export const TableScroll = styled.div`
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: thin;
`;

export const LargeTable = styled(Table)`
  min-width: 1180px;

  th {
    height: 44px;
  }

  td {
    height: 44px;
  }
`;

export const StatusBadge = styled.span`
  display: inline-flex;
  align-items: center;
  height: 22px;
  padding: 0 10px;
  border-radius: 5px;
  color: ${({ $pending }) => ($pending ? "#d26c00" : "#07833e")};
  background: ${({ $pending }) => ($pending ? "#fff0db" : "#dff3e6")};
  font-size: 10px;
  font-weight: 800;
`;

export const SummaryList = styled.div`
  display: grid;
`;

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding: 11px 0;
  border-bottom: 1px solid #edf1f5;
  color: #08112f;
  font-size: 13px;
  font-weight: ${({ $bold }) => ($bold ? 800 : 700)};
  background: ${({ $highlight }) => ($highlight ? "#edf8f1" : "transparent")};

  strong {
    color: ${({ $red, $green }) => ($red ? "#ef3d31" : $green ? "#07833e" : "#08112f")};
  }
`;

export const PropertyThumb = styled.div`
  width: 42px;
  height: 34px;
  flex: 0 0 auto;
  border-radius: 6px;
  background:
    linear-gradient(145deg, rgba(255,255,255,.16), rgba(0,0,0,.16)),
    ${({ $tone }) => $tone || "linear-gradient(135deg,#6aa2d8,#17466b 50%,#d6aa5d)"};
`;

export const PropertyCell = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 170px;
`;

export const MiniCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 16px;
  margin-bottom: 20px;
`;

export const MiniMetricCard = styled(Panel)`
  min-height: 126px;
  display: grid;
  gap: 10px;
`;

export const SparklineWrap = styled.div`
  height: 42px;
`;

export const FooterPager = styled.div`
  min-height: 54px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding-top: 12px;
`;

export const PagerControls = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const PageButton = styled.button`
  min-width: ${({ $icon }) => ($icon ? "34px" : "28px")};
  height: 34px;
  display: grid;
  place-items: center;
  border: ${({ $active, $plain }) => ($active || $plain ? "0" : "1px solid #dce3ee")};
  border-radius: 7px;
  color: ${({ $active }) => ($active ? "#fff" : "#08112f")};
  font-size: 12px;
  font-weight: 800;
  background: ${({ $active, $plain }) => ($active ? "#07833e" : $plain ? "transparent" : "#fff")};
`;

export const ExportButton = styled.button`
  height: 38px;
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 0 16px;
  border: 1px solid #dce3ee;
  border-radius: 7px;
  color: #07833e;
  font-size: 12px;
  font-weight: 800;
  background: #fff;
`;
