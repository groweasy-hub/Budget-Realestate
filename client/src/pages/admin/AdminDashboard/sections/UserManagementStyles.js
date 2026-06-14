import styled from "styled-components";
import { Card } from "../AdminDashboardStyles";

export const ManagementPage = styled.div`
  display: grid;
  gap: 18px;
`;

export const StatGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 18px;

  @media (max-width: 1500px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
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

export const StatCopy = styled.div`
  min-width: 0;
`;

export const StatLabel = styled.div`
  color: #101a34;
  font-size: 12px;
  font-weight: 800;
  line-height: 1.2;
`;

export const StatValueRow = styled.div`
  display: flex;
  align-items: end;
  gap: 28px;
  margin-top: 10px;
`;

export const StatValue = styled.div`
  color: #0e1730;
  font-size: 22px;
  font-weight: 800;
  letter-spacing: -0.03em;
  white-space: nowrap;
`;

export const StatChange = styled.div`
  padding-bottom: 4px;
  color: ${({ $danger }) => ($danger ? "#f0342f" : "#00894a")};
  font-size: 10px;
  font-weight: 800;
  white-space: nowrap;
`;

export const MainContentGrid = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 340px;
  gap: 18px;
  align-items: start;

  @media (max-width: 1400px) {
    grid-template-columns: 1fr;
  }
`;

export const MainColumn = styled.div`
  display: grid;
  gap: 18px;
  min-width: 0;
`;

export const SideColumn = styled.aside`
  display: grid;
  gap: 18px;
  min-width: 0;
`;

export const ManagementCard = styled(Card)`
  overflow: hidden;
  border-radius: 10px;
`;

export const FilterBar = styled.div`
  display: grid;
  grid-template-columns: minmax(260px, 330px) repeat(${({ $filters }) => $filters || 3}, minmax(150px, 1fr)) 96px;
  gap: 24px;
  align-items: end;
  padding: 26px 26px 22px;
  border-bottom: 1px solid #edf1f5;
`;

export const SearchBox = styled.label`
  height: 48px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 16px;
  border: 1px solid #dce3ee;
  border-radius: 7px;
  color: #657089;
  background: #fff;
`;

export const SearchInput = styled.input`
  width: 100%;
  border: 0;
  outline: 0;
  color: #101a34;
  font-size: 12px;
  font-weight: 600;
  background: transparent;

  &::placeholder {
    color: #77839b;
  }
`;

export const FilterField = styled.label`
  display: grid;
  gap: 9px;
`;

export const FilterLabel = styled.span`
  color: #25304a;
  font-size: 12px;
  font-weight: 700;
`;

export const SelectWrap = styled.div`
  position: relative;

  &::after {
    content: "";
    position: absolute;
    right: 16px;
    top: 50%;
    width: 7px;
    height: 7px;
    border-right: 1.7px solid #15203a;
    border-bottom: 1.7px solid #15203a;
    transform: translateY(-65%) rotate(45deg);
    pointer-events: none;
  }
`;

export const FilterSelect = styled.select`
  width: 100%;
  height: 40px;
  padding: 0 36px 0 14px;
  border: 1px solid #dce3ee;
  border-radius: 7px;
  color: #101a34;
  font-size: 12px;
  font-weight: 800;
  background: #fff;
  outline: 0;
  appearance: none;
`;

export const FilterButton = styled.button`
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: 1px solid #dce3ee;
  border-radius: 7px;
  color: #101a34;
  font-size: 13px;
  font-weight: 800;
  background: #fff;
`;

export const ResetRow = styled.div`
  grid-column: 1 / -1;
  display: flex;
  justify-content: flex-end;
  margin-top: -8px;
`;

export const ResetButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  color: #00894a;
  font-size: 12px;
  font-weight: 800;
  background: transparent;
`;

export const ManagementTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th {
    height: 48px;
    padding: 0 15px;
    color: #101a34;
    font-size: 12px;
    font-weight: 800;
    text-align: left;
    white-space: nowrap;
  }

  td {
    height: 62px;
    padding: 0 15px;
    border-top: 1px solid #edf1f5;
    color: #101a34;
    font-size: 13px;
    font-weight: 600;
    vertical-align: middle;
    white-space: nowrap;
  }
`;

export const CheckBox = styled.input`
  width: 15px;
  height: 15px;
  accent-color: #00894a;
`;

export const PersonCell = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 190px;
`;

export const Avatar = styled.div`
  width: ${({ $small }) => ($small ? "34px" : "36px")};
  height: ${({ $small }) => ($small ? "34px" : "36px")};
  position: relative;
  flex: 0 0 auto;
  border-radius: 999px;
  overflow: hidden;
  background:
    radial-gradient(circle at 50% 30%, ${({ $type }) => ($type === "female" ? "#f2b18f" : "#d89b72")} 0 18%, transparent 19%),
    radial-gradient(circle at 50% 102%, #0f1a32 0 36%, transparent 37%),
    ${({ $type }) => ($type === "female" ? "#ffe3da" : "#e7eef6")};
  box-shadow: inset 0 0 0 1px rgba(15, 26, 50, 0.06);

  &::before {
    content: "";
    position: absolute;
    left: ${({ $type }) => ($type === "female" ? "6px" : "7px")};
    top: 5px;
    width: ${({ $type }) => ($type === "female" ? "23px" : "22px")};
    height: ${({ $type }) => ($type === "female" ? "18px" : "13px")};
    border-radius: ${({ $type }) => ($type === "female" ? "15px 15px 11px 11px" : "13px 13px 7px 7px")};
    background: ${({ $type }) => ($type === "female" ? "#171a26" : "#172033")};
  }

  &::after {
    content: "";
    position: absolute;
    left: 14px;
    bottom: 0;
    width: 9px;
    height: 15px;
    background: #fff;
    clip-path: polygon(50% 0, 100% 100%, 0 100%);
  }
`;

export const PersonName = styled.div`
  color: #101a34;
  font-size: 13px;
  font-weight: 800;
`;

export const PersonMeta = styled.div`
  margin-top: 3px;
  color: #4f5a73;
  font-size: 10px;
  font-weight: 600;
`;

export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  height: 21px;
  padding: 0 9px;
  border-radius: 5px;
  color: ${({ $tone }) =>
    ({
      green: "#07833e",
      blue: "#176cf0",
      purple: "#8b4de8",
      orange: "#e77600",
      cyan: "#067f90",
      red: "#ef3d31",
    })[$tone] || "#07833e"};
  font-size: 11px;
  font-weight: 800;
  background: ${({ $tone }) =>
    ({
      green: "#dff3e6",
      blue: "#e4f0ff",
      purple: "#f0e4ff",
      orange: "#fff0db",
      cyan: "#dff5f7",
      red: "#ffe4df",
    })[$tone] || "#dff3e6"};
`;

export const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
`;

export const IconButton = styled.button`
  width: 33px;
  height: 33px;
  display: inline-grid;
  place-items: center;
  border: 1px solid #dfe5ee;
  border-radius: 7px;
  color: #18233d;
  background: #fff;
`;

export const TableFooter = styled.div`
  height: 62px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 0 24px;
  border-top: 1px solid #edf1f5;
`;

export const FooterText = styled.div`
  color: #101a34;
  font-size: 13px;
  font-weight: 600;
`;

export const FooterControls = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;
`;

export const PageSize = styled.select`
  width: 135px;
  height: 38px;
  padding: 0 36px 0 15px;
  border: 1px solid #dce3ee;
  border-radius: 7px;
  color: #101a34;
  font-size: 13px;
  font-weight: 800;
  background: #fff;
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const PageButton = styled.button`
  min-width: ${({ $wide }) => ($wide ? "46px" : "36px")};
  height: 36px;
  display: inline-grid;
  place-items: center;
  border: ${({ $active, $plain }) => ($active || $plain ? 0 : "1px solid #dce3ee")};
  border-radius: 7px;
  color: ${({ $active }) => ($active ? "#fff" : "#101a34")};
  font-size: 13px;
  font-weight: 800;
  background: ${({ $active, $plain }) => ($active ? "linear-gradient(180deg, #0a8a42 0%, #006c36 100%)" : $plain ? "transparent" : "#fff")};
`;

export const SideCard = styled(Card)`
  padding: 20px;
  border-radius: 10px;
`;

export const SideTitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 18px;
`;

export const SideTitle = styled.h3`
  margin: 0;
  color: #101a34;
  font-size: 15px;
  font-weight: 800;
`;

export const ViewLink = styled.button`
  color: #176cf0;
  font-size: 12px;
  font-weight: 800;
  background: transparent;
`;

export const DonutGrid = styled.div`
  display: grid;
  grid-template-columns: 132px 1fr;
  gap: 22px;
  align-items: center;
`;

export const Donut = styled.div`
  width: ${({ $size }) => $size || "128px"};
  height: ${({ $size }) => $size || "128px"};
  position: relative;
  display: grid;
  place-items: center;
  border-radius: 999px;
  background: ${({ $gradient }) => $gradient};

  &::before {
    content: "";
    width: 74px;
    height: 74px;
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
    color: #101a34;
    font-size: 25px;
    font-weight: 800;
  }

  span {
    color: #4f5a73;
    font-size: 11px;
    font-weight: 700;
  }
`;

export const LegendList = styled.div`
  display: grid;
  gap: 12px;
`;

export const LegendItem = styled.div`
  display: grid;
  grid-template-columns: 10px minmax(0, 1fr) auto;
  align-items: center;
  gap: 11px;
  color: #101a34;
  font-size: 11px;
  font-weight: 700;

  span:first-child {
    width: 9px;
    height: 9px;
    border-radius: 3px;
    background: ${({ $color }) => $color};
  }
`;

export const CompactList = styled.div`
  display: grid;
  gap: 17px;
`;

export const CompactItem = styled.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: 12px;
`;

export const CompactValue = styled.div`
  color: #24304b;
  font-size: 11px;
  font-weight: 700;
  white-space: nowrap;
`;

export const ProgressLine = styled.div`
  width: 96px;
  height: 3px;
  border-radius: 99px;
  background: #e8edf4;
  overflow: hidden;

  span {
    display: block;
    width: ${({ $value }) => $value};
    height: 100%;
    background: #00894a;
  }
`;

export const BottomGrid = styled.section`
  display: grid;
  grid-template-columns: ${({ $agent }) => ($agent ? "1.4fr 0.9fr 0.9fr" : "1.2fr 1fr 1fr")};
  gap: 18px;

  @media (max-width: 1400px) {
    grid-template-columns: 1fr;
  }
`;

export const ChartCard = styled(Card)`
  min-height: 206px;
  padding: 18px 20px;
  border-radius: 10px;
`;

export const ChartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const ChartTitle = styled.h3`
  margin: 0;
  color: #101a34;
  font-size: 14px;
  font-weight: 800;
`;

export const ChartLegend = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  color: #101a34;
  font-size: 10px;
  font-weight: 700;
`;

export const ChartLegendItem = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 7px;

  &::before {
    content: "";
    width: 9px;
    height: 4px;
    border-radius: 99px;
    background: ${({ $color }) => $color};
  }
`;

export const HorizontalBarList = styled.div`
  display: grid;
  gap: 11px;
  margin-top: 18px;
`;

export const HorizontalBar = styled.div`
  display: grid;
  grid-template-columns: 72px 1fr 28px;
  align-items: center;
  gap: 12px;
  color: #24304b;
  font-size: 11px;
  font-weight: 700;

  div {
    height: 12px;
    border-radius: 0;
    background: linear-gradient(90deg, #53c474 0%, #78d88d 100%);
    width: ${({ $value }) => `${$value}%`};
  }
`;

export const QuickGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 13px;
  margin-top: 20px;
`;

export const QuickAction = styled.button`
  height: 88px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 8px;
  border: 1px solid #dfe5ee;
  border-radius: 9px;
  color: #101a34;
  font-size: 9px;
  font-weight: 700;
  line-height: 1.25;
  background: #fff;
  cursor: pointer;
  transition:
    border-color 0.18s ease,
    box-shadow 0.18s ease,
    transform 0.18s ease;

  &:hover {
    border-color: #0f8f43;
    box-shadow: 0 10px 24px rgba(15, 143, 67, 0.12);
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid rgba(15, 143, 67, 0.35);
    outline-offset: 2px;
  }

  &:active {
    transform: translateY(0);
  }

  svg {
    color: ${({ $green }) => ($green ? "#00894a" : "#101a34")};
  }
`;

export const RankBubble = styled.div`
  width: 22px;
  height: 22px;
  display: grid;
  place-items: center;
  border-radius: 999px;
  color: #101a34;
  font-size: 11px;
  font-weight: 800;
  background: #eef2f7;
`;
