import styled from "styled-components";
import { Card } from "../AdminDashboardStyles";

export const VisitStatsGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 14px;
  margin-bottom: 18px;

  @media (max-width: 1380px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

export const VisitStatCard = styled(Card)`
  min-height: 96px;
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 18px 20px;
  border-radius: 10px;
`;

export const VisitStatIcon = styled.div`
  width: 48px;
  height: 48px;
  display: grid;
  place-items: center;
  flex: 0 0 auto;
  border-radius: 999px;
  color: ${({ $color }) => $color};
  background: ${({ $bg }) => $bg};
`;

export const VisitStatLabel = styled.div`
  color: #080f2c;
  font-size: 12px;
  font-weight: 800;
  line-height: 1.25;
`;

export const VisitStatValueRow = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 16px;
  margin-top: 11px;
`;

export const VisitStatValue = styled.div`
  color: #080f2c;
  font-size: 24px;
  font-weight: 800;
  line-height: 1;
`;

export const VisitStatMeta = styled.div`
  padding-bottom: 2px;
  color: #07863c;
  font-size: 10px;
  font-weight: 800;
  white-space: nowrap;
`;

export const VisitGrid = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 292px;
  gap: 16px;
  align-items: start;

  @media (max-width: 1280px) {
    grid-template-columns: 1fr;
  }
`;

export const VisitMainCard = styled(Card)`
  overflow: hidden;
  border-radius: 10px;
`;

export const VisitFilters = styled.div`
  display: grid;
  grid-template-columns: 190px 100px 142px 108px 112px 96px 72px 44px;
  gap: 10px;
  align-items: end;
  padding: 18px 16px 14px;

  @media (max-width: 1500px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const VisitSearch = styled.label`
  height: 31px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 10px;
  border: 1px solid #d3dbe7;
  border-radius: 6px;
  color: #8b94a9;
  background: #ffffff;

  input {
    width: 100%;
    border: 0;
    outline: 0;
    color: #101936;
    font-size: 10px;
    font-weight: 600;
    background: transparent;
  }

  input::placeholder {
    color: #8993aa;
  }
`;

export const VisitFilterField = styled.label`
  display: grid;
  gap: 6px;
  color: #08112f;
  font-size: 10px;
  font-weight: 800;
`;

export const SelectWrap = styled.div`
  position: relative;

  &::after {
    content: "";
    position: absolute;
    right: 13px;
    top: 50%;
    width: 7px;
    height: 7px;
    border-right: 1.7px solid #08112f;
    border-bottom: 1.7px solid #08112f;
    transform: translateY(-65%) rotate(45deg);
    pointer-events: none;
  }
`;

export const VisitSelect = styled.select`
  width: 100%;
  height: 31px;
  padding: 0 30px 0 10px;
  border: 1px solid #d3dbe7;
  border-radius: 6px;
  color: #08112f;
  font-size: 10px;
  font-weight: 700;
  background: #ffffff;
  appearance: none;
  outline: 0;
`;

export const FilterButton = styled.button`
  height: 31px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  border: 1px solid #d3dbe7;
  border-radius: 6px;
  color: #08112f;
  font-size: 10px;
  font-weight: 800;
  background: #ffffff;
`;

export const ResetLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 31px;
`;

export const ResetButton = styled.button`
  color: #007f45;
  font-size: 10px;
  font-weight: 800;
  background: transparent;
`;

export const VisitTableScroll = styled.div`
  overflow-x: auto;
`;

export const VisitTable = styled.table`
  width: 100%;
  min-width: 1050px;
  border-collapse: collapse;

  th {
    height: 50px;
    padding: 0 14px;
    border-top: 1px solid #eef2f7;
    color: #08112f;
    font-size: 11px;
    font-weight: 800;
    text-align: left;
    white-space: nowrap;
  }

  td {
    height: 68px;
    padding: 0 14px;
    border-top: 1px solid #eef2f7;
    color: #08112f;
    font-size: 12px;
    vertical-align: middle;
  }
`;

export const Checkbox = styled.input`
  width: 15px;
  height: 15px;
  margin: 0;
  accent-color: #007f45;
`;

export const CustomerCell = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 188px;
`;

export const Avatar = styled.div`
  width: ${({ $small }) => ($small ? "28px" : "42px")};
  height: ${({ $small }) => ($small ? "28px" : "42px")};
  flex: 0 0 auto;
  border-radius: 999px;
  overflow: hidden;
`;

export const CustomerName = styled.div`
  color: #08112f;
  font-size: 12px;
  font-weight: 800;
`;

export const MutedLine = styled.div`
  margin-top: 4px;
  color: #33415f;
  font-size: 10px;
  font-weight: 600;
`;

export const PropertyCell = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 205px;
`;

export const Thumb = styled.div`
  width: ${({ $large }) => ($large ? "70px" : "44px")};
  height: ${({ $large }) => ($large ? "52px" : "40px")};
  flex: 0 0 auto;
  border-radius: 7px;
  overflow: hidden;
  background:
    linear-gradient(150deg, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.18)),
    ${({ $tone }) => $tone};
`;

export const PropertyTitle = styled.div`
  color: #08112f;
  font-size: 12px;
  font-weight: 800;
`;

export const IdLine = styled.div`
  margin-top: 5px;
  color: #007f45;
  font-size: 10px;
  font-weight: 800;
`;

export const Pill = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 22px;
  padding: 0 9px;
  border-radius: 5px;
  color: ${({ $color }) => $color};
  font-size: 10px;
  font-weight: 800;
  background: ${({ $bg }) => $bg};
  white-space: nowrap;
`;

export const TwoLine = styled.div`
  min-width: 88px;

  strong {
    display: block;
    color: #08112f;
    font-size: 12px;
    font-weight: 800;
  }

  span {
    display: block;
    margin-top: 5px;
    color: #33415f;
    font-size: 10px;
    font-weight: 600;
  }
`;

export const AgentCell = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  min-width: 132px;
  color: #08112f;
  font-size: 12px;
  font-weight: 800;
`;

export const ActionRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const IconButton = styled.button`
  width: 28px;
  height: 28px;
  display: inline-grid;
  place-items: center;
  border: 1px solid #dbe2ec;
  border-radius: 6px;
  color: #08112f;
  background: #ffffff;
`;

export const TableFooter = styled.div`
  min-height: 58px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 0 16px;
  border-top: 1px solid #eef2f7;
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

export const PageSizeSelect = styled.select`
  width: 126px;
  height: 34px;
  padding: 0 34px 0 14px;
  border: 1px solid #d3dbe7;
  border-radius: 6px;
  color: #08112f;
  font-size: 12px;
  font-weight: 800;
  background: #ffffff;
  appearance: none;
`;

export const PageButton = styled.button`
  min-width: ${({ $icon }) => ($icon ? "34px" : "22px")};
  height: ${({ $icon }) => ($icon ? "34px" : "32px")};
  display: inline-grid;
  place-items: center;
  padding: 0 8px;
  border: ${({ $icon }) => ($icon ? "1px solid #d3dbe7" : "0")};
  border-radius: 6px;
  color: ${({ $active }) => ($active ? "#ffffff" : "#08112f")};
  font-size: 12px;
  font-weight: 800;
  background: ${({ $active }) => ($active ? "#007f45" : "#ffffff")};
`;

export const SideStack = styled.aside`
  display: grid;
  gap: 16px;
`;

export const SideCard = styled(Card)`
  padding: 18px 16px;
  border-radius: 10px;
`;

export const SideTitle = styled.h3`
  margin: 0 0 16px;
  color: #08112f;
  font-size: 15px;
  font-weight: 800;
`;

export const CalendarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const CalendarMonth = styled.div`
  color: #08112f;
  font-size: 13px;
  font-weight: 800;
`;

export const CalendarNav = styled.button`
  width: 25px;
  height: 25px;
  display: grid;
  place-items: center;
  border: 1px solid #dbe2ec;
  border-radius: 6px;
  color: #08112f;
  background: #ffffff;
`;

export const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 12px 9px;
  color: #08112f;
  text-align: center;
`;

export const CalendarHead = styled.div`
  font-size: 10px;
  font-weight: 800;
`;

export const CalendarDay = styled.div`
  position: relative;
  height: 27px;
  display: grid;
  place-items: center;
  border-radius: 9px;
  color: ${({ $muted }) => ($muted ? "#7d879a" : "#08112f")};
  font-size: 11px;
  font-weight: 800;
  background: ${({ $active, $soft }) => ($active ? "#007f45" : $soft ? "#eef2f7" : "transparent")};

  ${({ $active }) => ($active ? "color: #ffffff;" : "")}

  &::after {
    content: ${({ $dot }) => ($dot ? '""' : "none")};
    position: absolute;
    left: 50%;
    bottom: -5px;
    width: 4px;
    height: 4px;
    border-radius: 999px;
    background: #007f45;
    transform: translateX(-50%);
  }
`;

export const UpcomingHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 22px 0 14px;
  color: #08112f;
  font-size: 13px;
  font-weight: 800;

  button {
    color: #006fe6;
    font-size: 11px;
    font-weight: 800;
    background: transparent;
  }
`;

export const UpcomingList = styled.div`
  display: grid;
  gap: 12px;
`;

export const UpcomingItem = styled.div`
  display: grid;
  grid-template-columns: 48px minmax(0, 1fr) auto;
  gap: 10px;
  align-items: center;
`;

export const UpcomingMeta = styled.div`
  color: #33415f;
  font-size: 10px;
  font-weight: 600;
`;

export const UpcomingTitle = styled.div`
  margin-top: 4px;
  color: #08112f;
  font-size: 11px;
  font-weight: 800;
`;

export const FullScheduleButton = styled.button`
  width: 100%;
  height: 36px;
  margin-top: 18px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: 1px solid #007f45;
  border-radius: 7px;
  color: #007f45;
  font-size: 12px;
  font-weight: 800;
  background: #ffffff;
`;

export const BottomGrid = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 292px;
  gap: 16px;
  margin-top: 16px;

  @media (max-width: 1280px) {
    grid-template-columns: 1fr;
  }
`;

export const TimelineCard = styled(Card)`
  padding: 16px 18px;
  border-radius: 10px;
`;

export const TimelineTitle = styled.h3`
  margin: 0 0 14px;
  color: #08112f;
  font-size: 15px;
  font-weight: 800;
`;

export const TimelineTrack = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
  padding-top: 16px;

  &::before {
    content: "";
    position: absolute;
    top: 2px;
    left: 10px;
    right: 10px;
    height: 1px;
    background: #cbd5e1;
  }

  @media (max-width: 920px) {
    grid-template-columns: 1fr;
  }
`;

export const TimelineItem = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 80px minmax(0, 1fr);
  gap: 12px;
  min-height: 110px;
  padding: 14px;
  border: 1px solid #edf1f5;
  border-radius: 10px;
  background: #ffffff;

  &::before {
    content: "";
    position: absolute;
    top: -19px;
    left: 0;
    width: 7px;
    height: 7px;
    border-radius: 999px;
    background: ${({ $color }) => $color};
  }
`;

export const TimelineTime = styled.div`
  color: ${({ $color }) => $color};
  font-size: 12px;
  font-weight: 800;
`;

export const TimelineVisitTitle = styled.div`
  margin-top: 4px;
  color: #08112f;
  font-size: 12px;
  font-weight: 800;
`;

export const QuickActionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

export const QuickActionButton = styled.button`
  min-height: 58px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 10px 6px;
  border: 1px solid #dbe2ec;
  border-radius: 8px;
  color: #08112f;
  font-size: 10px;
  font-weight: 800;
  background: #ffffff;
  cursor: pointer;
  transition:
    border-color 0.18s ease,
    box-shadow 0.18s ease,
    transform 0.18s ease;

  &:hover {
    border-color: #007f45;
    box-shadow: 0 10px 24px rgba(0, 127, 69, 0.12);
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid rgba(0, 127, 69, 0.35);
    outline-offset: 2px;
  }

  &:active {
    transform: translateY(0);
  }

  svg {
    color: ${({ $color }) => $color || "#08112f"};
  }
`;
