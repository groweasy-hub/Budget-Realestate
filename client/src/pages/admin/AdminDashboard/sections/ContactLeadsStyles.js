import styled from "styled-components";
import { Card } from "../AdminDashboardStyles";

export const ContactStatsGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 16px;
  margin-bottom: 22px;

  @media (max-width: 1380px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

export const LeadStatCard = styled(Card)`
  min-height: 102px;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 21px 22px;
  border-radius: 10px;
`;

export const LeadStatIcon = styled.div`
  width: 54px;
  height: 54px;
  display: grid;
  place-items: center;
  flex: 0 0 auto;
  border-radius: 999px;
  color: ${({ $color }) => $color};
  background: ${({ $bg }) => $bg};
`;

export const LeadStatCopy = styled.div`
  min-width: 0;
`;

export const LeadStatLabel = styled.div`
  color: #080f2c;
  font-size: 13px;
  font-weight: 700;
  line-height: 1.25;
`;

export const LeadStatValueRow = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 15px;
  margin-top: 12px;
`;

export const LeadStatValue = styled.div`
  color: #080f2c;
  font-size: 25px;
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.01em;
`;

export const LeadStatMeta = styled.div`
  padding-bottom: 2px;
  color: ${({ $green }) => ($green ? "#069542" : "#080f2c")};
  font-size: 11px;
  font-weight: 800;
  white-space: nowrap;
`;

export const LeadsCard = styled(Card)`
  overflow: hidden;
  border-radius: 10px;
`;

export const LeadsToolbar = styled.div`
  padding: 20px 20px 16px;
`;

export const LeadsToolbarTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

export const LeadsSearch = styled.label`
  width: min(100%, 300px);
  height: 35px;
  display: flex;
  align-items: center;
  gap: 11px;
  padding: 0 12px;
  border: 1px solid #d3dbe7;
  border-radius: 6px;
  color: #8b94a9;
  background: #ffffff;

  input {
    width: 100%;
    border: 0;
    outline: 0;
    padding: 0;
    color: #101936;
    font-size: 12px;
    font-weight: 500;
    background: transparent;
  }

  input::placeholder {
    color: #8993aa;
  }
`;

export const ExportButton = styled.button`
  height: 35px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 0 17px;
  border: 1px solid #d3dbe7;
  border-radius: 6px;
  color: #08112f;
  font-size: 13px;
  font-weight: 800;
  background: #ffffff;
`;

export const LeadFiltersGrid = styled.div`
  display: grid;
  grid-template-columns: 230px 220px 220px 220px 86px 52px;
  gap: 22px;
  align-items: end;
  margin-top: 18px;

  @media (max-width: 1500px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 18px;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const LeadFilterField = styled.label`
  display: grid;
  gap: 8px;
  color: #08112f;
  font-size: 11px;
  font-weight: 800;
`;

export const LeadSelectWrap = styled.div`
  position: relative;

  &::after {
    content: "";
    position: absolute;
    right: 14px;
    top: 50%;
    width: 7px;
    height: 7px;
    border-right: 1.7px solid #08112f;
    border-bottom: 1.7px solid #08112f;
    transform: translateY(-65%) rotate(45deg);
    pointer-events: none;
  }
`;

export const LeadSelect = styled.select`
  width: 100%;
  height: 35px;
  padding: 0 38px 0 13px;
  border: 1px solid #d3dbe7;
  border-radius: 6px;
  color: #08112f;
  font-size: 12px;
  font-weight: 700;
  background: #ffffff;
  appearance: none;
  outline: 0;
`;

export const FiltersButton = styled.button`
  height: 35px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 0 15px;
  border: 1px solid #d3dbe7;
  border-radius: 6px;
  color: #08112f;
  font-size: 12px;
  font-weight: 800;
  background: #ffffff;
`;

export const ResetButton = styled.button`
  height: 35px;
  color: #006fe6;
  font-size: 12px;
  font-weight: 700;
  background: transparent;
`;

export const LeadsTableScroll = styled.div`
  overflow-x: auto;
`;

export const LeadsTable = styled.table`
  width: 100%;
  min-width: 1230px;
  border-collapse: collapse;

  th {
    height: 58px;
    padding: 0 14px;
    border-top: 1px solid #eef2f7;
    color: #08112f;
    font-size: 12px;
    font-weight: 800;
    text-align: left;
    white-space: nowrap;
  }

  td {
    height: 66px;
    padding: 0 14px;
    border-top: 1px solid #eef2f7;
    color: #08112f;
    font-size: 13px;
    vertical-align: middle;
  }
`;

export const Checkbox = styled.input`
  width: 15px;
  height: 15px;
  margin: 0;
  border: 1px solid #aab6c7;
  border-radius: 3px;
  accent-color: #007f45;
`;

export const LeadDetailsCell = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
  min-width: 220px;
`;

export const PersonAvatar = styled.div`
  width: ${({ $small }) => ($small ? "27px" : "34px")};
  height: ${({ $small }) => ($small ? "27px" : "34px")};
  flex: 0 0 auto;
  border-radius: 999px;
  overflow: hidden;
`;

export const LeadName = styled.div`
  color: #08112f;
  font-size: 12px;
  font-weight: 800;
  line-height: 1.28;
`;

export const LeadEmail = styled.div`
  margin-top: 4px;
  color: #33415f;
  font-size: 12px;
  font-weight: 500;
`;

export const TwoLineCell = styled.div`
  min-width: 120px;
  line-height: 1.35;

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
    font-size: 12px;
    font-weight: 500;
  }
`;

export const InterestCell = styled.div`
  min-width: 220px;
  color: #08112f;
  font-size: 12px;
  line-height: 1.35;

  strong {
    display: block;
    font-weight: 800;
  }

  span {
    display: block;
    margin-top: 6px;
    font-weight: 500;
  }
`;

export const SourceCell = styled.div`
  min-width: 100px;
`;

export const StatusBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 20px;
  padding: 0 8px;
  border-radius: 5px;
  color: ${({ $color }) => $color};
  font-size: 10px;
  font-weight: 800;
  background: ${({ $bg }) => $bg};
  white-space: nowrap;
`;

export const AgentCell = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  min-width: 132px;
  color: #08112f;
  font-size: 12px;
  font-weight: 800;
  white-space: nowrap;
`;

export const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;

export const LeadActionButton = styled.button`
  width: 29px;
  height: 29px;
  display: inline-grid;
  place-items: center;
  border: 1px solid #dbe2ec;
  border-radius: 7px;
  color: #08112f;
  background: #ffffff;
`;

export const LeadsFooter = styled.div`
  min-height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 0 22px;
  border-top: 1px solid #eef2f7;
`;

export const FooterText = styled.div`
  color: #08112f;
  font-size: 12px;
  font-weight: 600;
`;

export const FooterControls = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;

export const PageSizeSelect = styled.select`
  width: 126px;
  height: 34px;
  padding: 0 38px 0 16px;
  border: 1px solid #d3dbe7;
  border-radius: 6px;
  color: #08112f;
  font-size: 12px;
  font-weight: 800;
  background: #ffffff;
  appearance: none;
  outline: 0;
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
  color: #08112f;
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
