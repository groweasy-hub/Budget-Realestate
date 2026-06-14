import { useState } from "react";
import {
  ButtonRow,
  CameraButton,
  CardHead,
  CardSub,
  CardTitle,
  ColorRow,
  ColorSwatch,
  Field,
  FieldStack,
  HeadIcon,
  InfoRow,
  ItemText,
  ItemTitle,
  MiniIcon,
  NotificationItem,
  NotificationList,
  OutlineButton,
  PhotoBlock,
  ProfileContent,
  ProfilePhoto,
  SaveButton,
  SecurityRow,
  SecurityText,
  SecurityTitle,
  SessionBadge,
  SessionBox,
  SessionMeta,
  SessionRow,
  SettingsCard,
  SettingsGrid,
  SettingsPage,
  SettingsTab,
  SettingsTabs,
  StatusDot,
  Switch,
  SystemGrid,
  TabIcon,
  TabText,
  TabTitle,
  TextInput,
  ThemeButton,
  ThemeButtons,
  WideCard,
} from "./SettingsStyles";

function Icon({ name, size = 20 }) {
  const common = { stroke: "currentColor", strokeWidth: 1.9, strokeLinecap: "round", strokeLinejoin: "round" };
  const icons = {
    user: <><circle cx="12" cy="8.3" r="3.2" {...common} /><path d="M5.3 19c1.25-3.25 3.85-4.85 6.7-4.85s5.45 1.6 6.7 4.85" {...common} /></>,
    shield: <><path d="M12 3.5c2.25 1.9 5.25 2.55 7 2.9v4.75c0 4.45-3.2 7.25-7 8.55-3.8-1.3-7-4.1-7-8.55V6.4c1.75-.35 4.75-1 7-2.9Z" {...common} /><path d="m9.2 11.6 1.8 1.8 3.8-4" {...common} /></>,
    bell: <path d="M6.5 16.5h11l-1.6-2.1V10a3.9 3.9 0 1 0-7.8 0v4.4L6.5 16.5ZM10 18a2 2 0 0 0 4 0" {...common} />,
    palette: <><path d="M12 4a8 8 0 0 0 0 16h1.2a1.8 1.8 0 0 0 1.1-3.2 1.8 1.8 0 0 1 1.1-3.2H16a4 4 0 0 0 0-8c-1.2-.9-2.55-1.6-4-1.6Z" {...common} /><circle cx="8.4" cy="10" r=".9" fill="currentColor" /><circle cx="11.2" cy="8.2" r=".9" fill="currentColor" /><circle cx="14.4" cy="9.5" r=".9" fill="currentColor" /></>,
    info: <><circle cx="12" cy="12" r="8" {...common} /><path d="M12 11v5M12 8h.01" {...common} /></>,
    lock: <><rect x="6.5" y="10" width="11" height="9" rx="1.8" {...common} /><path d="M8.5 10V7.8a3.5 3.5 0 0 1 7 0V10" {...common} /></>,
    camera: <><path d="M7 8.5 8.4 6h7.2L17 8.5h1.6a1.9 1.9 0 0 1 1.9 1.9v6.2a1.9 1.9 0 0 1-1.9 1.9H5.4a1.9 1.9 0 0 1-1.9-1.9v-6.2a1.9 1.9 0 0 1 1.9-1.9H7Z" {...common} /><circle cx="12" cy="13.5" r="2.7" {...common} /></>,
    chevron: <path d="m9 6 6 6-6 6" {...common} />,
    desktop: <><rect x="4" y="5.5" width="16" height="11" rx="1.4" {...common} /><path d="M9 20h6M12 16.5V20" {...common} /></>,
    phone: <><rect x="8" y="3.8" width="8" height="16.4" rx="1.6" {...common} /><path d="M11.3 17.5h1.4" {...common} /></>,
    laptop: <><path d="M5.5 6.5h13v9h-13v-9Z" {...common} /><path d="M3.5 18h17" {...common} /></>,
    logout: <><path d="M10 6H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4" {...common} /><path d="M14 8.5 18.5 13 14 17.5M8.5 13h10" {...common} /></>,
    lead: <path d="m12 3 1.5 3 3.4.5-2.45 2.4.58 3.35L12 10.65 8.97 12.25l.58-3.35L7.1 6.5l3.4-.5L12 3Z" {...common} />,
    moon: <path d="M17.5 15.4A6.4 6.4 0 0 1 8.6 6.5 7.1 7.1 0 1 0 17.5 15.4Z" {...common} />,
    sun: <><circle cx="12" cy="12" r="3.2" {...common} /><path d="M12 3.8v1.5M12 18.7v1.5M3.8 12h1.5M18.7 12h1.5M6.2 6.2l1.05 1.05M16.75 16.75l1.05 1.05M17.8 6.2l-1.05 1.05M7.25 16.75 6.2 17.8" {...common} /></>,
    database: <><ellipse cx="12" cy="6.5" rx="5.5" ry="2.5" {...common} /><path d="M6.5 6.5v5c0 1.4 2.45 2.5 5.5 2.5s5.5-1.1 5.5-2.5v-5M6.5 11.5v5c0 1.4 2.45 2.5 5.5 2.5s5.5-1.1 5.5-2.5v-5" {...common} /></>,
    cloud: <path d="M7.2 17.5h10a3.3 3.3 0 0 0 .55-6.55A5 5 0 0 0 8.2 9.5a3.9 3.9 0 0 0-1 8Z" {...common} />,
    clock: <><circle cx="12" cy="12" r="8" {...common} /><path d="M12 7.5v5l3.2 1.9" {...common} /></>,
    check: <path d="m7 12.2 3 3 7-7" {...common} />,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">{icons[name]}</svg>;
}

const tabs = [
  { id: "profile", title: "Profile Settings", text: "Manage your personal details and profile.", icon: "user" },
  { id: "security", title: "Security", text: "Manage password and security preferences.", icon: "shield" },
  { id: "notifications", title: "Notifications", text: "Configure email and SMS notifications.", icon: "bell" },
  { id: "appearance", title: "Appearance", text: "Customize the look and feel of the dashboard.", icon: "palette" },
  { id: "system", title: "System Information", text: "View system status and platform information.", icon: "info" },
];

const notifications = [
  ["New Property Lead", "Get notified when a new lead is received"],
  ["Site Visit Request", "Get notified on new site visit requests"],
  ["Consultation Request", "Get notified on new consultation requests"],
  ["New User Registration", "Get notified when a new user registers"],
  ["Email Notifications", "Receive notifications via email"],
  ["SMS Notifications", "Receive notifications via SMS"],
];

function SettingsSection() {
  const [activeTab, setActiveTab] = useState("profile");
  const [profile, setProfile] = useState({
    name: "Ravi Kumar",
    email: "ravi.kumar@budgetrealestate.com",
    mobile: "+91 98765 43210",
  });
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);
  const [notificationPrefs, setNotificationPrefs] = useState(
    notifications.reduce((prefs, [title]) => ({ ...prefs, [title]: true }), {}),
  );
  const [themeMode, setThemeMode] = useState("Light");
  const [primaryColor, setPrimaryColor] = useState("#07833e");

  const handleTabClick = (id) => {
    setActiveTab(id);
    window.requestAnimationFrame(() => {
      document.getElementById(`settings-${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  const updateProfile = (field) => (event) => {
    setProfile((current) => ({ ...current, [field]: event.target.value }));
  };

  return (
    <SettingsPage>
      <SettingsTabs>
        {tabs.map((tab) => (
          <SettingsTab key={tab.id} as="button" type="button" $active={activeTab === tab.id} onClick={() => handleTabClick(tab.id)}>
            <TabIcon $active={activeTab === tab.id}><Icon name={tab.icon} size={25} /></TabIcon>
            <div><TabTitle>{tab.title}</TabTitle><TabText>{tab.text}</TabText></div>
          </SettingsTab>
        ))}
      </SettingsTabs>

      <SettingsGrid>
        <SettingsCard id="settings-profile" $active={activeTab === "profile"}>
          <CardHead><HeadIcon><Icon name="user" /></HeadIcon><div><CardTitle>Profile Settings</CardTitle><CardSub>Update your personal information.</CardSub></div></CardHead>
          <ProfileContent>
            <FieldStack>
              <Field>Admin Name<TextInput value={profile.name} onChange={updateProfile("name")} /></Field>
              <Field>Email Address<TextInput value={profile.email} onChange={updateProfile("email")} /></Field>
              <Field>Mobile Number<TextInput value={profile.mobile} onChange={updateProfile("mobile")} /></Field>
            </FieldStack>
            <PhotoBlock>
              <span>Profile Photo</span>
              <ProfilePhoto><CameraButton type="button"><Icon name="camera" size={14} /></CameraButton></ProfilePhoto>
            </PhotoBlock>
          </ProfileContent>
          <ButtonRow><SaveButton type="button">Save Changes</SaveButton><OutlineButton type="button"><Icon name="lock" size={14} />Change Password</OutlineButton></ButtonRow>
        </SettingsCard>

        <SettingsCard id="settings-security" $active={activeTab === "security"}>
          <CardHead><HeadIcon><Icon name="shield" /></HeadIcon><div><CardTitle>Security Settings</CardTitle><CardSub>Manage your account security.</CardSub></div></CardHead>
          <SecurityRow>
            <div><SecurityTitle>Change Password</SecurityTitle><SecurityText>Update your password regularly<br />to keep your account secure.</SecurityText></div>
            <OutlineButton type="button">Change Password <Icon name="chevron" size={14} /></OutlineButton>
          </SecurityRow>
          <SecurityRow style={{ paddingTop: 18 }}>
            <div><SecurityTitle>Two-Factor Authentication</SecurityTitle><SecurityText>Add an extra layer of security<br />to your account.</SecurityText></div>
            <Switch type="button" $on={twoFactorEnabled} aria-pressed={twoFactorEnabled} onClick={() => setTwoFactorEnabled((enabled) => !enabled)} />
          </SecurityRow>
          <div style={{ marginTop: 18 }}>
            <SecurityTitle>Active Sessions</SecurityTitle>
            <SecurityText>You are logged in on the following devices.</SecurityText>
            <SessionBox>
              <SessionRow><Icon name="desktop" size={17} /><span>Windows • Chrome</span><SessionMeta>Hyderabad, India</SessionMeta><SessionBadge>Current Session</SessionBadge></SessionRow>
              <SessionRow><Icon name="phone" size={17} /><span>iPhone 14 • Safari</span><SessionMeta>Hyderabad, India</SessionMeta><SessionMeta>2 hours ago</SessionMeta></SessionRow>
              <SessionRow><Icon name="laptop" size={17} /><span>MacBook Air • Chrome</span><SessionMeta>Bangalore, India</SessionMeta><SessionMeta>1 day ago</SessionMeta></SessionRow>
            </SessionBox>
            <OutlineButton type="button" $danger style={{ marginTop: 14 }}><Icon name="logout" size={14} />Logout All Devices</OutlineButton>
          </div>
        </SettingsCard>

        <SettingsCard id="settings-notifications" $active={activeTab === "notifications"}>
          <CardHead><HeadIcon><Icon name="bell" /></HeadIcon><div><CardTitle>Notification Preferences</CardTitle><CardSub>Choose what you want to be notified about.</CardSub></div></CardHead>
          <NotificationList>
            {notifications.map(([title, text]) => (
              <NotificationItem key={title}>
                <MiniIcon><Icon name="lead" size={15} /></MiniIcon>
                <div><ItemTitle>{title}</ItemTitle><ItemText>{text}</ItemText></div>
                <Switch
                  type="button"
                  $on={notificationPrefs[title]}
                  aria-pressed={notificationPrefs[title]}
                  onClick={() => setNotificationPrefs((prefs) => ({ ...prefs, [title]: !prefs[title] }))}
                />
              </NotificationItem>
            ))}
          </NotificationList>
        </SettingsCard>

        <SettingsCard id="settings-appearance" $active={activeTab === "appearance"}>
          <CardHead><HeadIcon $dark><Icon name="palette" /></HeadIcon><div><CardTitle>Appearance Settings</CardTitle><CardSub>Customize the appearance of the dashboard.</CardSub></div></CardHead>
          <Field style={{ marginBottom: 20 }}>Theme Mode</Field>
          <ThemeButtons>
            {[
              ["Light", "sun"],
              ["Dark", "moon"],
              ["System", "desktop"],
            ].map(([label, icon]) => (
              <ThemeButton key={label} type="button" $active={themeMode === label} onClick={() => setThemeMode(label)}>
                <Icon name={icon} size={16} />{label}
              </ThemeButton>
            ))}
          </ThemeButtons>
          <Field style={{ marginTop: 28 }}>Primary Color</Field>
          <ColorRow>
            {["#07833e", "#176cf0", "#8f3de5", "#ff850f", "#ff303d", "#526070"].map((color) => (
              <ColorSwatch key={color} type="button" $color={color} onClick={() => setPrimaryColor(color)}>
                {primaryColor === color ? <Icon name="check" size={18} /> : null}
              </ColorSwatch>
            ))}
          </ColorRow>
          <ItemText style={{ marginTop: 18 }}>This color will be used across the admin panel.</ItemText>
        </SettingsCard>

        <WideCard id="settings-system" $active={activeTab === "system"}>
          <CardHead><HeadIcon $dark><Icon name="info" /></HeadIcon><div><CardTitle>System Information</CardTitle><CardSub>View system and platform information.</CardSub></div></CardHead>
          <SystemGrid>
            <div>
              <InfoRow><MiniIcon><Icon name="shield" size={16} /></MiniIcon><div><ItemTitle>Platform Version</ItemTitle><ItemText>v1.2.0</ItemText></div></InfoRow>
              <InfoRow><MiniIcon><Icon name="cloud" size={16} /></MiniIcon><div><ItemTitle>Last Login</ItemTitle><ItemText>25 May 2025, 10:30 AM</ItemText></div></InfoRow>
              <InfoRow><MiniIcon><Icon name="database" size={16} /></MiniIcon><div><ItemTitle>Server Status</ItemTitle><ItemText><StatusDot />Operational</ItemText></div></InfoRow>
            </div>
            <div>
              <InfoRow><MiniIcon><Icon name="database" size={16} /></MiniIcon><div><ItemTitle>Database Status</ItemTitle><ItemText><StatusDot />Connected</ItemText></div></InfoRow>
              <InfoRow><HeadIcon $dark style={{ width: 34, height: 34, borderRadius: 8 }}><Icon name="cloud" size={16} /></HeadIcon><div><ItemTitle>Environment</ItemTitle><ItemText>Production</ItemText></div></InfoRow>
              <InfoRow><HeadIcon $dark style={{ width: 34, height: 34, borderRadius: 8 }}><Icon name="clock" size={16} /></HeadIcon><div><ItemTitle>Server Uptime</ItemTitle><ItemText>15 days, 6 hours, 24 minutes</ItemText></div></InfoRow>
            </div>
          </SystemGrid>
        </WideCard>
      </SettingsGrid>
    </SettingsPage>
  );
}

export default SettingsSection;
