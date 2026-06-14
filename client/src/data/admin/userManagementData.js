export const userStats = [
  { label: "Total Users", value: "128", change: "+12 this month", icon: "users", bg: "#e7f7ed", color: "#07833e" },
  { label: "Active Users", value: "96", change: "+8 this month", icon: "shield", bg: "#e8f1ff", color: "#176cf0" },
  { label: "Agents / Advisors", value: "24", change: "+4 this month", icon: "agent", bg: "#f0e4ff", color: "#9653f3" },
  { label: "Inactive Users", value: "18", change: "-3 this month", icon: "userPlus", bg: "#fff0db", color: "#ff8a00", danger: true },
  { label: "Pending Approval", value: "6", change: "+2 this month", icon: "lock", bg: "#e4f5eb", color: "#07833e" },
];

export const usersRows = [
  { name: "Ravi Kumar", email: "ravi.kumar@email.com", role: "Super Admin", roleTone: "green", department: "Administration", phone: "+91 98765 43210", status: "Active", statusTone: "green", login: ["25 May 2025", "10:30 AM"], avatar: "male" },
  { name: "Neha Sharma", email: "neha.sharma@email.com", role: "Admin", roleTone: "blue", department: "Sales", phone: "+91 98765 43211", status: "Active", statusTone: "green", login: ["25 May 2025", "09:15 AM"], avatar: "female" },
  { name: "Amit Verma", email: "amit.verma@email.com", role: "Agent", roleTone: "purple", department: "Sales", phone: "+91 98765 43212", status: "Active", statusTone: "green", login: ["25 May 2025", "08:45 AM"], avatar: "male" },
  { name: "Vikram Reddy", email: "vikram.reddy@email.com", role: "Agent", roleTone: "purple", department: "Sales", phone: "+91 98765 43213", status: "Active", statusTone: "green", login: ["24 May 2025", "07:20 PM"], avatar: "male" },
  { name: "Sneha Iyer", email: "sneha.iyer@email.com", role: "Agent", roleTone: "purple", department: "Leasing", phone: "+91 98765 43214", status: "Inactive", statusTone: "red", login: ["20 May 2025", "11:30 AM"], avatar: "female" },
  { name: "Karan Patel", email: "karan.patel@email.com", role: "Manager", roleTone: "orange", department: "Marketing", phone: "+91 98765 43215", status: "Active", statusTone: "green", login: ["25 May 2025", "12:05 PM"], avatar: "male" },
  { name: "Priya Reddy", email: "priya.reddy@email.com", role: "Coordinator", roleTone: "cyan", department: "Support", phone: "+91 98765 43216", status: "Pending", statusTone: "orange", login: ["-", ""], avatar: "female" },
  { name: "Rajesh Mehta", email: "rajesh.mehta@email.com", role: "Agent", roleTone: "purple", department: "Sales", phone: "+91 98765 43217", status: "Active", statusTone: "green", login: ["24 May 2025", "04:50 PM"], avatar: "male" },
];

export const roleDistribution = [
  { label: "Super Admin", value: "2 (2%)", color: "#00894a" },
  { label: "Admin", value: "6 (5%)", color: "#2c7df1" },
  { label: "Agents", value: "24 (19%)", color: "#995df1" },
  { label: "Managers", value: "8 (6%)", color: "#ff9d18" },
  { label: "Coordinators", value: "12 (9%)", color: "#35aebe" },
  { label: "Others", value: "76 (59%)", color: "#b9c0ca" },
];

export const recentUsers = [
  { name: "Priya Reddy", role: "Coordinator", time: "2 hours ago", avatar: "female" },
  { name: "Rajesh Mehta", role: "Agent", time: "5 hours ago", avatar: "male" },
  { name: "Mohit Singh", role: "Agent", time: "1 day ago", avatar: "male" },
  { name: "Anjali Desai", role: "Coordinator", time: "2 days ago", avatar: "female" },
];

export const topUsers = [
  { name: "Neha Sharma", value: "92 logins", progress: "88%", avatar: "female" },
  { name: "Amit Verma", value: "78 logins", progress: "74%", avatar: "male" },
  { name: "Vikram Reddy", value: "65 logins", progress: "58%", avatar: "male" },
  { name: "Karan Patel", value: "48 logins", progress: "42%", avatar: "male" },
];

export const departmentUsers = [
  { label: "Sales", value: 46 },
  { label: "Marketing", value: 18 },
  { label: "Leasing", value: 14 },
  { label: "Support", value: 12 },
  { label: "Administration", value: 10 },
  { label: "Others", value: 28 },
];

export const accountStatuses = [
  { label: "Active", value: "96 (75%)", color: "#07833e" },
  { label: "Inactive", value: "18 (14%)", color: "#ff3d2e" },
  { label: "Pending", value: "6 (5%)", color: "#ff9d18" },
  { label: "Banned", value: "8 (6%)", color: "#b8c0cb" },
];

export const agentStats = [
  { label: "Total Agents", value: "24", change: "+4 this month", icon: "users", bg: "#e7f7ed", color: "#07833e" },
  { label: "Active Agents", value: "20", change: "+3 this month", icon: "shield", bg: "#e8f1ff", color: "#176cf0" },
  { label: "Verified Agents", value: "18", change: "+2 this month", icon: "check", bg: "#f0e4ff", color: "#9653f3" },
  { label: "Top Performers", value: "6", change: "This Month", icon: "star", bg: "#fff0db", color: "#ff9d18" },
  { label: "Total Sales by Agents", value: "₹ 2.48 Cr", change: "", icon: "rupee", bg: "#e4f5eb", color: "#07833e", wide: true },
];

export const agentRows = [
  { name: "Neha Sharma", email: "neha.sharma@email.com", contact: "+91 98765 43211", specialization: "Residential", tone: "green", experience: "5 Years", properties: 32, sales: "₹ 48.75 Lakh", rating: "4.8", status: "Active", statusTone: "green", avatar: "female" },
  { name: "Amit Verma", email: "amit.verma@email.com", contact: "+91 98765 43212", specialization: "Commercial", tone: "blue", experience: "7 Years", properties: 45, sales: "₹ 78.60 Lakh", rating: "4.6", status: "Active", statusTone: "green", avatar: "male" },
  { name: "Vikram Reddy", email: "vikram.reddy@email.com", contact: "+91 98765 43213", specialization: "Residential", tone: "green", experience: "4 Years", properties: 28, sales: "₹ 36.20 Lakh", rating: "4.7", status: "Active", statusTone: "green", avatar: "male" },
  { name: "Sneha Iyer", email: "sneha.iyer@email.com", contact: "+91 98765 43214", specialization: "Leasing", tone: "purple", experience: "3 Years", properties: 19, sales: "₹ 25.10 Lakh", rating: "4.5", status: "Inactive", statusTone: "red", avatar: "female" },
  { name: "Karan Patel", email: "karan.patel@email.com", contact: "+91 98765 43215", specialization: "Commercial", tone: "blue", experience: "6 Years", properties: 38, sales: "₹ 62.40 Lakh", rating: "4.6", status: "Active", statusTone: "green", avatar: "male" },
  { name: "Priya Reddy", email: "priya.reddy@email.com", contact: "+91 98765 43216", specialization: "Residential", tone: "green", experience: "2 Years", properties: 15, sales: "₹ 18.75 Lakh", rating: "4.4", status: "Pending", statusTone: "orange", avatar: "female" },
  { name: "Rajesh Mehta", email: "rajesh.mehta@email.com", contact: "+91 98765 43217", specialization: "Luxury", tone: "orange", experience: "8 Years", properties: 41, sales: "₹ 85.30 Lakh", rating: "4.9", status: "Active", statusTone: "green", avatar: "male" },
  { name: "Anjali Desai", email: "anjali.desai@email.com", contact: "+91 98765 43218", specialization: "Residential", tone: "green", experience: "4 Years", properties: 22, sales: "₹ 29.60 Lakh", rating: "4.6", status: "Active", statusTone: "green", avatar: "female" },
];

export const agentStatus = [
  { label: "Active", value: "20 (83%)", color: "#07833e" },
  { label: "Inactive", value: "2 (8%)", color: "#ff3d2e" },
  { label: "Pending", value: "2 (8%)", color: "#ff9d18" },
];

export const topAgents = [
  { rank: 1, name: "Amit Verma", value: "₹ 78.60 Lakh", avatar: "male" },
  { rank: 2, name: "Rajesh Mehta", value: "₹ 85.30 Lakh", avatar: "male" },
  { rank: 3, name: "Neha Sharma", value: "₹ 48.75 Lakh", avatar: "female" },
  { rank: 4, name: "Vikram Reddy", value: "₹ 36.20 Lakh", avatar: "male" },
  { rank: 5, name: "Karan Patel", value: "₹ 62.40 Lakh", avatar: "male" },
];

export const agentSpecializations = [
  { label: "Residential", value: "12 (50%)", color: "#07833e" },
  { label: "Commercial", value: "6 (25%)", color: "#2c7df1" },
  { label: "Leasing", value: "3 (12.5%)", color: "#995df1" },
  { label: "Luxury", value: "2 (8.5%)", color: "#ff9d18" },
  { label: "Other", value: "1 (4%)", color: "#b9c0ca" },
];

export const recentAgentRegistrations = [
  { name: "Priya Reddy", meta: "Registered on 25 May 2025", status: "Pending", tone: "orange", avatar: "female" },
  { name: "Mohit Singh", meta: "Registered on 24 May 2025", status: "Active", tone: "green", avatar: "male" },
  { name: "Arjun Nair", meta: "Registered on 23 May 2025", status: "Active", tone: "green", avatar: "male" },
  { name: "Divya Kapoor", meta: "Registered on 22 May 2025", status: "Pending", tone: "orange", avatar: "female" },
];
