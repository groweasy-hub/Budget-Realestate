import styled from "styled-components";
import { Card } from "../AdminDashboardStyles";

export const SettingsPage = styled.div`
  display: grid;
  gap: 20px;
`;

export const SettingsTabs = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 18px;
`;

export const SettingsTab = styled(Card)`
  min-height: 112px;
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 24px 22px;
  border: 0;
  border-radius: 10px;
  cursor: pointer;
  text-align: left;
  box-shadow:
    0 10px 28px rgba(18, 31, 53, 0.05),
    0 0 0 1px ${({ $active }) => ($active ? "rgba(7,131,62,.18)" : "rgba(20,31,47,.06)")};
  background: ${({ $active }) => ($active ? "linear-gradient(135deg, #f3fbf6 0%, #ffffff 100%)" : "#fff")};
`;

export const TabIcon = styled.div`
  width: 52px;
  height: 52px;
  display: grid;
  place-items: center;
  flex: 0 0 auto;
  border-radius: 999px;
  color: ${({ $active }) => ($active ? "#07833e" : "#14203a")};
  background: ${({ $active }) => ($active ? "#dff4e7" : "#f0f2f5")};
`;

export const TabTitle = styled.div`
  color: #08112f;
  font-size: 15px;
  font-weight: 800;
`;

export const TabText = styled.div`
  margin-top: 8px;
  color: #34405a;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.55;
`;

export const SettingsGrid = styled.div`
  display: grid;
  grid-template-columns: 1.05fr 1fr 1.1fr;
  gap: 18px;
`;

export const SettingsCard = styled(Card)`
  padding: 24px 26px;
  border-radius: 10px;
  min-width: 0;
  box-shadow:
    0 10px 32px rgba(18, 31, 53, 0.07),
    0 0 0 1px ${({ $active }) => ($active ? "rgba(7,131,62,.22)" : "rgba(20,31,47,.05)")};
`;

export const WideCard = styled(SettingsCard)`
  grid-column: span 2;
`;

export const CardHead = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 28px;
`;

export const HeadIcon = styled.div`
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  flex: 0 0 auto;
  border-radius: 999px;
  color: ${({ $dark }) => ($dark ? "#14203a" : "#07833e")};
  background: ${({ $dark }) => ($dark ? "#eef1f5" : "#e4f7eb")};
`;

export const CardTitle = styled.h3`
  margin: 0;
  color: #08112f;
  font-size: 15px;
  font-weight: 800;
`;

export const CardSub = styled.p`
  margin: 6px 0 0;
  color: #34405a;
  font-size: 12px;
  font-weight: 600;
`;

export const ProfileContent = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 150px;
  gap: 32px;
  align-items: start;
`;

export const FieldStack = styled.div`
  display: grid;
  gap: 19px;
`;

export const Field = styled.label`
  display: grid;
  gap: 9px;
  color: #14203a;
  font-size: 12px;
  font-weight: 700;
`;

export const TextInput = styled.input`
  height: 40px;
  padding: 0 14px;
  border: 1px solid #dce3ee;
  border-radius: 6px;
  color: #08112f;
  font-size: 12px;
  font-weight: 700;
  background: #fff;
`;

export const PhotoBlock = styled.div`
  display: grid;
  justify-items: center;
  gap: 14px;
  padding-top: 36px;
  color: #14203a;
  font-size: 12px;
  font-weight: 700;
`;

export const ProfilePhoto = styled.div`
  width: 104px;
  height: 104px;
  position: relative;
  border-radius: 999px;
  background:
    radial-gradient(circle at 50% 29%, #d89b72 0 18%, transparent 19%),
    radial-gradient(circle at 50% 102%, #0f1a32 0 39%, transparent 40%),
    #e7eef6;
  overflow: visible;

  &::before {
    content: "";
    position: absolute;
    left: 21px;
    top: 18px;
    width: 62px;
    height: 34px;
    border-radius: 34px 34px 15px 15px;
    background: #172033;
  }
`;

export const CameraButton = styled.button`
  position: absolute;
  right: 5px;
  bottom: 8px;
  width: 28px;
  height: 28px;
  display: grid;
  place-items: center;
  border: 2px solid #fff;
  border-radius: 999px;
  color: #08112f;
  background: #eef2f7;
`;

export const ButtonRow = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-top: 28px;
`;

export const SaveButton = styled.button`
  height: 40px;
  padding: 0 22px;
  border-radius: 6px;
  color: #fff;
  font-size: 12px;
  font-weight: 800;
  background: linear-gradient(180deg, #0c8e43 0%, #057438 100%);
`;

export const OutlineButton = styled.button`
  height: 40px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 0 18px;
  border: 1px solid ${({ $danger }) => ($danger ? "#ff8b8b" : "#dce3ee")};
  border-radius: 6px;
  color: ${({ $danger }) => ($danger ? "#ef3d31" : "#08112f")};
  font-size: 12px;
  font-weight: 800;
  background: #fff;
`;

export const SecurityRow = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 16px;
  align-items: center;
  padding: 0 0 20px;
  border-bottom: 1px solid #edf1f5;
`;

export const SecurityTitle = styled.div`
  color: #08112f;
  font-size: 12px;
  font-weight: 800;
`;

export const SecurityText = styled.div`
  margin-top: 7px;
  color: #34405a;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.55;
`;

export const Switch = styled.button`
  width: 37px;
  height: 20px;
  position: relative;
  border-radius: 999px;
  background: ${({ $on }) => ($on ? "#07833e" : "#c9d0db")};
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    top: 3px;
    left: ${({ $on }) => ($on ? "20px" : "3px")};
    width: 14px;
    height: 14px;
    border-radius: 999px;
    background: #fff;
  }
`;

export const SessionBox = styled.div`
  margin-top: 16px;
  border: 1px solid #edf1f5;
  border-radius: 8px;
  overflow: hidden;
`;

export const SessionRow = styled.div`
  display: grid;
  grid-template-columns: 22px minmax(0, 1fr) 112px auto;
  align-items: center;
  gap: 12px;
  min-height: 38px;
  padding: 0 12px;
  color: #08112f;
  font-size: 11px;
  font-weight: 700;
`;

export const SessionMeta = styled.span`
  color: #34405a;
  font-weight: 600;
`;

export const SessionBadge = styled.span`
  padding: 5px 8px;
  border-radius: 5px;
  color: #07833e;
  font-size: 10px;
  font-weight: 800;
  background: #dff3e6;
`;

export const NotificationList = styled.div`
  display: grid;
  gap: 22px;
`;

export const NotificationItem = styled.div`
  display: grid;
  grid-template-columns: 34px minmax(0, 1fr) auto;
  align-items: center;
  gap: 14px;
`;

export const MiniIcon = styled.div`
  width: 28px;
  height: 28px;
  display: grid;
  place-items: center;
  border-radius: 7px;
  color: #07833e;
  background: #e4f7eb;
`;

export const ItemTitle = styled.div`
  color: #08112f;
  font-size: 12px;
  font-weight: 800;
`;

export const ItemText = styled.div`
  margin-top: 5px;
  color: #34405a;
  font-size: 12px;
  font-weight: 600;
`;

export const ThemeButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
`;

export const ThemeButton = styled.button`
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: 1px solid ${({ $active }) => ($active ? "#07833e" : "#dce3ee")};
  border-radius: 6px;
  color: #08112f;
  font-size: 12px;
  font-weight: 800;
  background: ${({ $active }) => ($active ? "#f4fbf7" : "#fff")};
  cursor: pointer;
`;

export const ColorRow = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-top: 17px;
`;

export const ColorSwatch = styled.button`
  width: 36px;
  height: 36px;
  display: grid;
  place-items: center;
  border-radius: 6px;
  color: #fff;
  background: ${({ $color }) => $color};
  box-shadow: 0 8px 18px rgba(18, 31, 53, 0.12);
  cursor: pointer;
`;

export const SystemGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 54px;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-template-columns: 42px minmax(0, 1fr);
  align-items: center;
  gap: 14px;
  min-height: 66px;
  border-bottom: 1px solid #edf1f5;
`;

export const StatusDot = styled.span`
  width: 7px;
  height: 7px;
  display: inline-block;
  margin-right: 6px;
  border-radius: 999px;
  background: #07833e;
`;
