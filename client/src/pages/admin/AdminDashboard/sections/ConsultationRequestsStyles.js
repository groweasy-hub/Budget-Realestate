import styled from "styled-components";
import { Card } from "../AdminDashboardStyles";

export const ConsultationStatsGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 18px;
  margin-bottom: 18px;
`;

export const StatCard = styled(Card)`
  min-height: 102px;
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 22px 26px;
  border-radius: 10px;
`;

export const StatIcon = styled.div`
  width: 50px;
  height: 50px;
  display: grid;
  place-items: center;
  flex: 0 0 auto;
  border-radius: 999px;
  color: ${({ $color }) => $color};
  background: ${({ $bg }) => $bg};
`;

export const StatLabel = styled.div`
  color: #08112f;
  font-size: 12px;
  font-weight: 800;
`;

export const StatValueRow = styled.div`
  display: flex;
  align-items: end;
  gap: 22px;
  margin-top: 10px;
`;

export const StatValue = styled.div`
  color: #08112f;
  font-size: 22px;
  font-weight: 800;
  letter-spacing: -0.03em;
`;

export const StatMeta = styled.div`
  padding-bottom: 4px;
  color: #07833e;
  font-size: 10px;
  font-weight: 800;
  white-space: nowrap;
`;

export const PageGrid = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 292px;
  gap: 18px;
  align-items: start;
`;

export const MainStack = styled.div`
  display: grid;
  gap: 18px;
  min-width: 0;
`;

export const SideStack = styled.aside`
  display: grid;
  gap: 18px;
`;

export const MainCard = styled(Card)`
  overflow: hidden;
  border-radius: 10px;
`;

export const FilterBar = styled.div`
  display: grid;
  grid-template-columns: 300px repeat(4, minmax(130px, 1fr)) 96px;
  gap: 22px;
  align-items: end;
  padding: 28px 24px 16px;
  border-bottom: 1px solid #edf1f5;
`;

export const SearchBox = styled.label`
  height: 44px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 16px;
  border: 1px solid #dce3ee;
  border-radius: 7px;
  color: #657089;
  background: #fff;

  input {
    width: 100%;
    border: 0;
    outline: 0;
    color: #08112f;
    font-size: 11px;
    font-weight: 600;
    background: transparent;
  }
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
  height: 38px;
  padding: 0 36px 0 13px;
  border: 1px solid #dce3ee;
  border-radius: 7px;
  color: #08112f;
  font-size: 12px;
  font-weight: 800;
  background: #fff;
  outline: 0;
  appearance: none;
`;

export const FilterButton = styled.button`
  height: 38px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  border: 1px solid #dce3ee;
  border-radius: 7px;
  color: #08112f;
  font-size: 12px;
  font-weight: 800;
  background: #fff;
`;

export const ResetLine = styled.div`
  grid-column: 1 / -1;
  display: flex;
  justify-content: flex-end;
`;

export const ResetButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  color: #07833e;
  font-size: 11px;
  font-weight: 800;
  background: transparent;
`;

export const Table = styled.table`
  width: 100%;
  min-width: 1160px;
  border-collapse: collapse;

  th {
    height: 48px;
    padding: 0 14px;
    color: #08112f;
    font-size: 11px;
    font-weight: 800;
    text-align: left;
    white-space: nowrap;
  }

  td {
    height: 68px;
    padding: 0 14px;
    border-top: 1px solid #edf1f5;
    color: #08112f;
    font-size: 12px;
    font-weight: 600;
    vertical-align: middle;
  }
`;

export const TableScroll = styled.div`
  overflow-x: auto;
`;

export const Checkbox = styled.input`
  width: 15px;
  height: 15px;
  accent-color: #07833e;
`;

export const PersonCell = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 185px;
`;

export const Avatar = styled.div`
  width: ${({ $small }) => ($small ? "32px" : "38px")};
  height: ${({ $small }) => ($small ? "32px" : "38px")};
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
    left: 7px;
    top: 5px;
    width: 24px;
    height: ${({ $type }) => ($type === "female" ? "19px" : "13px")};
    border-radius: 15px 15px 9px 9px;
    background: ${({ $type }) => ($type === "female" ? "#181521" : "#172033")};
  }
`;

export const Name = styled.div`
  color: #08112f;
  font-size: 12px;
  font-weight: 800;
`;

export const Muted = styled.div`
  margin-top: 4px;
  color: #33415f;
  font-size: 10px;
  font-weight: 600;
`;

export const Topic = styled.div`
  min-width: 130px;
  color: #08112f;
  font-size: 12px;
  font-weight: 800;
  line-height: 1.35;

  span {
    display: block;
    color: #33415f;
    font-size: 10px;
    font-weight: 600;
  }
`;

export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 22px;
  padding: 0 9px;
  border-radius: 5px;
  color: ${({ $tone }) =>
    ({
      green: "#07833e",
      blue: "#176cf0",
      purple: "#8b4de8",
      orange: "#d26c00",
      red: "#ef3d31",
    })[$tone]};
  font-size: 10px;
  font-weight: 800;
  background: ${({ $tone }) =>
    ({
      green: "#dff3e6",
      blue: "#e4f0ff",
      purple: "#f0e4ff",
      orange: "#fff0db",
      red: "#ffe4df",
    })[$tone]};
  white-space: nowrap;
`;

export const ModeCell = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 9px;
  min-width: 98px;
  color: #08112f;
  font-weight: 800;
`;

export const ActionRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const IconButton = styled.button`
  width: 32px;
  height: 32px;
  display: grid;
  place-items: center;
  border: 1px solid #dfe5ee;
  border-radius: 7px;
  color: #08112f;
  background: #fff;
`;

export const TableFooter = styled.div`
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 0 18px;
  border-top: 1px solid #edf1f5;
`;

export const FooterText = styled.div`
  color: #08112f;
  font-size: 12px;
  font-weight: 600;
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const PageSize = styled.select`
  width: 126px;
  height: 34px;
  padding: 0 34px 0 14px;
  border: 1px solid #dce3ee;
  border-radius: 7px;
  color: #08112f;
  font-size: 12px;
  font-weight: 800;
  background: #fff;
  appearance: none;
`;

export const PageButton = styled.button`
  min-width: ${({ $icon }) => ($icon ? "34px" : "24px")};
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

export const SideCard = styled(Card)`
  padding: 18px 16px;
  border-radius: 10px;
`;

export const SideTitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 16px;
`;

export const SideTitle = styled.h3`
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

export const CalendarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const CalendarNav = styled.button`
  width: 26px;
  height: 26px;
  display: grid;
  place-items: center;
  border: 1px solid #dce3ee;
  border-radius: 7px;
  background: #fff;
`;

export const CalendarMonth = styled.div`
  color: #08112f;
  font-size: 13px;
  font-weight: 800;
`;

export const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 12px 9px;
  text-align: center;
`;

export const CalendarHead = styled.div`
  color: #08112f;
  font-size: 10px;
  font-weight: 800;
`;

export const CalendarDay = styled.div`
  position: relative;
  height: 27px;
  display: grid;
  place-items: center;
  border-radius: 8px;
  color: ${({ $active }) => ($active ? "#fff" : "#08112f")};
  font-size: 11px;
  font-weight: 800;
  background: ${({ $active }) => ($active ? "#07833e" : "transparent")};

  &::after {
    content: ${({ $dot }) => ($dot ? '""' : "none")};
    position: absolute;
    left: 50%;
    bottom: -5px;
    width: 4px;
    height: 4px;
    border-radius: 999px;
    background: #07833e;
    transform: translateX(-50%);
  }
`;

export const CompactList = styled.div`
  display: grid;
  gap: 20px;
`;

export const CompactItem = styled.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: 12px;
`;

export const QuickGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

export const QuickButton = styled.button`
  height: 58px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 8px 5px;
  border: 1px solid #dfe5ee;
  border-radius: 8px;
  color: #08112f;
  font-size: 9px;
  font-weight: 800;
  background: #fff;
  cursor: pointer;
  transition:
    border-color 0.18s ease,
    box-shadow 0.18s ease,
    transform 0.18s ease;

  &:hover {
    border-color: #07833e;
    box-shadow: 0 10px 24px rgba(7, 131, 62, 0.12);
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid rgba(7, 131, 62, 0.35);
    outline-offset: 2px;
  }

  &:active {
    transform: translateY(0);
  }
`;

export const ActivityItem = styled.div`
  display: grid;
  grid-template-columns: 34px minmax(0, 1fr) auto;
  gap: 12px;
  align-items: start;
`;

export const ActivityIcon = styled.div`
  width: 28px;
  height: 28px;
  display: grid;
  place-items: center;
  border-radius: 999px;
  color: ${({ $color }) => $color};
  background: ${({ $bg }) => $bg};
`;

export const ActivityText = styled.div`
  color: #08112f;
  font-size: 11px;
  font-weight: 700;
  line-height: 1.45;
`;

export const ActivityTime = styled.div`
  color: #33415f;
  font-size: 10px;
  font-weight: 600;
  white-space: nowrap;
`;

export const BottomGrid = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(0, 0.8fr) minmax(0, 0.9fr) 292px;
  gap: 18px;
  margin-top: 18px;
`;

export const ChartCard = styled(Card)`
  min-height: 188px;
  padding: 18px 18px;
  border-radius: 10px;
`;

export const ChartHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const ChartTitle = styled.h3`
  margin: 0;
  color: #08112f;
  font-size: 14px;
  font-weight: 800;
`;

export const Legend = styled.div`
  display: flex;
  gap: 18px;
  color: #08112f;
  font-size: 10px;
  font-weight: 700;
`;

export const LegendKey = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;

  &::before {
    content: "";
    width: 9px;
    height: 4px;
    border-radius: 99px;
    background: ${({ $color }) => $color};
  }
`;

export const DonutGrid = styled.div`
  display: grid;
  grid-template-columns: 132px 1fr;
  gap: 22px;
  align-items: center;
`;

export const Donut = styled.div`
  width: 126px;
  height: 126px;
  position: relative;
  display: grid;
  place-items: center;
  border-radius: 999px;
  background: ${({ $gradient }) => $gradient};

  &::before {
    content: "";
    width: 72px;
    height: 72px;
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
    font-size: 22px;
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
  gap: 11px;
`;

export const DonutLegendItem = styled.div`
  display: grid;
  grid-template-columns: 9px minmax(0, 1fr) auto;
  gap: 10px;
  align-items: center;
  color: #08112f;
  font-size: 10px;
  font-weight: 700;

  span:first-child {
    width: 8px;
    height: 8px;
    border-radius: 3px;
    background: ${({ $color }) => $color};
  }
`;
