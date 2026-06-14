export const navGroups = [
  {
    title: "Main",
    items: [{ id: "dashboard", label: "Dashboard", icon: "dashboard" }],
  },
  {
    title: "Property Management",
    items: [
      { id: "buy-properties", label: "Buy Properties", icon: "building" },
      { id: "rent-properties", label: "Rent Properties", icon: "home" },
      { id: "auction-properties", label: "Auction Properties", icon: "auction" },
      { id: "add-new-property", label: "Add New Property", icon: "plus" },
    ],
  },
  {
    title: "Leads Management",
    items: [
      { id: "contact-leads", label: "Contact Leads", icon: "mail", badge: "0" },
      { id: "site-visit-requests", label: "Site Visit Requests", icon: "doc", badge: "0" },
      { id: "consultation-requests", label: "Consultation Requests", icon: "chat", badge: "0" },
    ],
  },
  {
    title: "User Management",
    items: [
      { id: "users", label: "Users", icon: "user" },
      { id: "agents-advisors", label: "Agents / Advisors", icon: "users" },
    ],
  },
  {
    title: "Reports",
    items: [
      { id: "analytics", label: "Analytics", icon: "chart" },
      { id: "revenue-reports", label: "Revenue Reports", icon: "money" },
      { id: "property-performance", label: "Property Performance", icon: "pie" },
    ],
  },
  {
    title: "Settings",
    items: [
      { id: "settings", label: "Settings", icon: "settings" },
    ],
  },
];
