import { Fragment, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { navGroups } from "../../../data/admin/navData";
import { AvatarIllustration, BrandMark } from "../../../components/admin/AdminShared";
import { logoutAdmin } from "../../../utils/adminAuth";
import {
  BellBadge,
  BellButton,
  BreadcrumbCurrent,
  BreadcrumbRow,
  DashboardShell,
  DashboardSubtitle,
  DashboardTitle,
  DateButton,
  HeaderProfile,
  HeadingWrap,
  LogoutWrap,
  MainArea,
  MenuButton,
  NavBadge,
  NavButton,
  NavList,
  PrimaryAction,
  SectionLabel,
  Sidebar,
  SidebarBrand,
  SidebarCopy,
  SidebarProfile,
  SidebarSection,
  TopActions,
  TopBar,
} from "./AdminDashboardStyles";
import Section404 from "./components/Section404";
import SidebarIcon from "./components/SidebarIcon";
import { MobileAdminDesktopNotice } from "../AdminLogin/AdminLogin";
import AgentsAdvisorsSection from "./sections/AgentsAdvisorsSection";
import AddNewPropertySection from "./sections/AddNewPropertySection";
import AnalyticsSection from "./sections/AnalyticsSection";
import BuyPropertiesSection from "./sections/BuyPropertiesSection";
import AuctionPropertiesSection from "./sections/AuctionPropertiesSection";
import ContactLeadsSection from "./sections/ContactLeadsSection";
import ConsultationRequestsSection from "./sections/ConsultationRequestsSection";
import DashboardSection from "./sections/DashboardSection";
import PropertyPerformanceSection from "./sections/PropertyPerformanceSection";
import RentPropertiesSection from "./sections/RentPropertiesSection";
import RevenueReportsSection from "./sections/RevenueReportsSection";
import SettingsSection from "./sections/SettingsSection";
import SiteVisitRequestsSection from "./sections/SiteVisitRequestsSection";
import UsersSection from "./sections/UsersSection";

const propertySections = ["buy-properties", "rent-properties", "auction-properties", "add-new-property"];
const breadcrumbSections = [...propertySections, "users", "agents-advisors"];

const pageMeta = {
  "add-new-property": {
    title: "Add New Property",
    breadcrumbs: ["Dashboard", "Property Management", "Add New Property"],
  },
  "contact-leads": {
    title: "Contact Leads",
    subtitle: "Manage and track all property inquiry leads.",
  },
  "site-visit-requests": {
    title: "Site Visit Requests",
    subtitle: "Manage and schedule site visit requests from customers.",
  },
  "consultation-requests": {
    title: "Consultation Requests",
    subtitle: "Manage and respond to consultation requests from potential clients.",
  },
  users: {
    title: "Users",
    breadcrumbs: ["Dashboard", "User Management", "Users"],
  },
  "agents-advisors": {
    title: "Agents / Advisors",
    breadcrumbs: ["Dashboard", "User Management", "Agents / Advisors"],
  },
  analytics: {
    title: "Analytics Overview",
    subtitle: "Comprehensive insights and performance metrics across your real estate platform.",
  },
  "revenue-reports": {
    title: "Revenue Reports",
    breadcrumbs: ["Dashboard", "Reports", "Revenue Reports"],
  },
  "property-performance": {
    title: "Property Performance",
    subtitle: "Detailed performance insights for all properties across your platform.",
  },
  settings: {
    title: "Settings",
    subtitle: "Manage your account, security, notifications and preferences.",
  },
};

const formatToday = () =>
  new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date());

function AdminDashboard() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("dashboard");
  const todayLabel = useMemo(() => formatToday(), []);

  const activeItem = useMemo(
    () =>
      navGroups
        .flatMap((group) => group.items)
        .find((item) => item.id === activeSection) ?? navGroups[0].items[0],
    [activeSection],
  );

  const handleLogout = () => {
    logoutAdmin();
    navigate("/admin/login", { replace: true });
  };

  const currentMeta = pageMeta[activeSection];
  const pageTitle = currentMeta?.title ?? activeItem.label;
  const pageSubtitle = currentMeta?.subtitle ?? `You opened the ${activeItem.label} section.`;
  const breadcrumbs = currentMeta?.breadcrumbs ?? ["Dashboard", activeItem.label];
  const addActionLabel =
    activeSection === "users"
      ? "Add New User"
      : activeSection === "agents-advisors"
        ? "Add New Agent"
        : "";
  const showExport = ["analytics", "revenue-reports", "property-performance"].includes(activeSection);

  return (
    <>
      <MobileAdminDesktopNotice />
      <DashboardShell>
      <Sidebar>
        <SidebarBrand>
          <BrandMark size={46} />
          <SidebarCopy>
            <div style={{ color: "#F7F8FA", fontSize: "18px", fontWeight: 700, lineHeight: 1.1 }}>Budget</div>
            <div style={{ color: "#12C15B", fontSize: "18px", fontWeight: 700, lineHeight: 1.1 }}>RealEstate</div>
            <div style={{ marginTop: 6, color: "rgba(255,255,255,0.78)", fontSize: "12px" }}>Admin Panel</div>
          </SidebarCopy>
        </SidebarBrand>

        <SidebarProfile>
          <AvatarIllustration />
          <SidebarCopy>
            <div style={{ fontSize: "14px", fontWeight: 700 }}>Ravi Kumar</div>
            <div style={{ marginTop: "4px", color: "rgba(255,255,255,0.72)", fontSize: "13px" }}>Super Admin</div>
          </SidebarCopy>
          <div style={{ marginLeft: "auto" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="m6 9 6 6 6-6" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </SidebarProfile>

        {navGroups.map((group) => (
          <SidebarSection key={group.title}>
            <SectionLabel>{group.title}</SectionLabel>
            <NavList>
              {group.items.map((item) => (
                <NavButton key={item.id} $active={item.id === activeSection} type="button" onClick={() => setActiveSection(item.id)}>
                  <SidebarIcon name={item.icon} />
                  <span>{item.label}</span>
                  {item.badge ? <NavBadge>{item.badge}</NavBadge> : null}
                </NavButton>
              ))}
            </NavList>
          </SidebarSection>
        ))}

        <LogoutWrap>
          <NavButton onClick={handleLogout}>
            <SidebarIcon name="logout" />
            <span>Logout</span>
          </NavButton>
        </LogoutWrap>
      </Sidebar>

      <MainArea>
        <TopBar>
          <HeadingWrap>
            <MenuButton type="button" aria-label="Open menu">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" stroke="#1A243C" strokeWidth="1.9" strokeLinecap="round" />
              </svg>
            </MenuButton>
            <div>
              <DashboardTitle>{pageTitle}</DashboardTitle>
              {breadcrumbSections.includes(activeSection) ? (
                <BreadcrumbRow>
                  {breadcrumbs.map((item, index) => (
                    <Fragment key={item}>
                      {index === breadcrumbs.length - 1 ? <BreadcrumbCurrent>{item}</BreadcrumbCurrent> : <span>{item}</span>}
                      {index < breadcrumbs.length - 1 ? (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path d="m9 6 6 6-6 6" stroke="#7D879A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ) : null}
                    </Fragment>
                  ))}
                </BreadcrumbRow>
              ) : (
                <DashboardSubtitle>
                  {activeSection === "dashboard"
                    ? "Welcome back, Ravi Kumar! Here's what's happening today."
                    : pageSubtitle}
                </DashboardSubtitle>
              )}
            </div>
          </HeadingWrap>

          <TopActions>
            {showExport ? (
              <PrimaryAction type="button" style={{ background: "#fff", color: "#07833e", border: "1px solid #dce3ee", boxShadow: "none" }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 3.5v10M7.8 9.7l4.2 4.2 4.2-4.2M5.2 17.2v1.4a2 2 0 0 0 2 2h9.6a2 2 0 0 0 2-2v-1.4" stroke="#07833e" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Export Report
              </PrimaryAction>
            ) : null}

            {addActionLabel ? (
              <PrimaryAction type="button">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 5v14M5 12h14" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                </svg>
                {addActionLabel}
              </PrimaryAction>
            ) : null}

            <DateButton type="button">
              <span style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="3.5" y="4.5" width="17" height="16" rx="2.2" stroke="#18233D" strokeWidth="1.7" />
                  <path d="M7 2.8v3.4M17 2.8v3.4M3.5 9h17" stroke="#18233D" strokeWidth="1.7" strokeLinecap="round" />
                </svg>
                {todayLabel}
              </span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="m6 9 6 6 6-6" stroke="#18233D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </DateButton>

            <BellButton type="button" aria-label="Notifications">
              <SidebarIcon name="bell" color="#18233D" />
              <BellBadge>0</BellBadge>
            </BellButton>

            <HeaderProfile type="button" aria-label="Open profile">
              <AvatarIllustration />
            </HeaderProfile>
          </TopActions>
        </TopBar>

        {activeSection === "dashboard" ? (
          <DashboardSection />
        ) : activeSection === "buy-properties" ? (
          <BuyPropertiesSection />
        ) : activeSection === "rent-properties" ? (
          <RentPropertiesSection />
        ) : activeSection === "auction-properties" ? (
          <AuctionPropertiesSection />
        ) : activeSection === "add-new-property" ? (
          <AddNewPropertySection />
        ) : activeSection === "contact-leads" ? (
          <ContactLeadsSection />
        ) : activeSection === "site-visit-requests" ? (
          <SiteVisitRequestsSection />
        ) : activeSection === "consultation-requests" ? (
          <ConsultationRequestsSection />
        ) : activeSection === "users" ? (
          <UsersSection />
        ) : activeSection === "agents-advisors" ? (
          <AgentsAdvisorsSection />
        ) : activeSection === "analytics" ? (
          <AnalyticsSection />
        ) : activeSection === "revenue-reports" ? (
          <RevenueReportsSection />
        ) : activeSection === "property-performance" ? (
          <PropertyPerformanceSection />
        ) : activeSection === "settings" ? (
          <SettingsSection />
        ) : (
          <Section404 title={activeItem.label} />
        )}
      </MainArea>
      </DashboardShell>
    </>
  );
}

export default AdminDashboard;
