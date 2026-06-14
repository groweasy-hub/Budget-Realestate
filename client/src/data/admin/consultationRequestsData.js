export const consultationStats = [
  { label: "Total Requests", value: "248", meta: "+18 this week", icon: "chat", color: "#07833e", bg: "#e4f5eb" },
  { label: "Pending", value: "39", meta: "+6 this week", icon: "calendar", color: "#176cf0", bg: "#e6f0ff" },
  { label: "In Progress", value: "63", meta: "+8 this week", icon: "users", color: "#ff9d18", bg: "#fff0db" },
  { label: "Completed", value: "128", meta: "+14 this week", icon: "check", color: "#07833e", bg: "#e4f5eb" },
  { label: "Converted", value: "18", meta: "+3 this week", icon: "chart", color: "#9a54ed", bg: "#f0e4ff" },
];

export const consultationFilters = [
  { label: "Consultation Type", value: "All Types" },
  { label: "Preferred Mode", value: "All Modes" },
  { label: "Status", value: "All Status" },
  { label: "Assigned To", value: "All Agents" },
];

export const consultationRows = [
  { client: "Rahul Sharma", email: "rahul.sharma@email.com", phone: "+91 98765 43210", topic: ["Buying guidance for", "first home", "3 BHK in Hyderabad"], type: "Buy", typeTone: "green", mode: "Video Call", modeIcon: "video", date: "25 May 2025", time: "10:30 AM", agent: "Neha Sharma", agentAvatar: "female", status: "In Progress", statusTone: "orange", avatar: "male" },
  { client: "Priya Reddy", email: "priya.reddy@email.com", phone: "+91 91234 56789", topic: ["Rental market trends", "in Gachibowli"], type: "Rent", typeTone: "blue", mode: "Phone Call", modeIcon: "phone", date: "25 May 2025", time: "09:15 AM", agent: "Amit Verma", agentAvatar: "male", status: "Pending", statusTone: "red", avatar: "female" },
  { client: "Arjun Kumar", email: "arjun.kumar@email.com", phone: "+91 99876 54321", topic: ["Investment advice for", "long term returns"], type: "Buy", typeTone: "green", mode: "In Person", modeIcon: "person", date: "24 May 2025", time: "04:45 PM", agent: "Vikram Reddy", agentAvatar: "male", status: "Scheduled", statusTone: "blue", avatar: "male" },
  { client: "Sneha Iyer", email: "sneha.iyer@email.com", phone: "+91 97654 32109", topic: ["Auction process", "explanation"], type: "Auction", typeTone: "purple", mode: "Video Call", modeIcon: "video", date: "24 May 2025", time: "02:30 PM", agent: "Neha Sharma", agentAvatar: "female", status: "Completed", statusTone: "green", avatar: "female" },
  { client: "Karan Patel", email: "karan.patel@email.com", phone: "+91 88990 11223", topic: ["Home loan & financing", "options"], type: "Buy", typeTone: "green", mode: "Phone Call", modeIcon: "phone", date: "23 May 2025", time: "11:00 AM", agent: "Amit Verma", agentAvatar: "male", status: "Completed", statusTone: "green", avatar: "male" },
  { client: "Meera Joshi", email: "meera.joshi@email.com", phone: "+91 94444 55667", topic: ["NRI investment", "consultation"], type: "Buy", typeTone: "green", mode: "In Person", modeIcon: "person", date: "22 May 2025", time: "05:20 PM", agent: "Vikram Reddy", agentAvatar: "male", status: "In Progress", statusTone: "orange", avatar: "female" },
  { client: "Vivek Reddy", email: "vivek.reddy@email.com", phone: "+91 90000 77889", topic: ["Property valuation", "and comparison"], type: "Buy", typeTone: "green", mode: "Video Call", modeIcon: "video", date: "22 May 2025", time: "10:10 AM", agent: "Neha Sharma", agentAvatar: "female", status: "Pending", statusTone: "red", avatar: "male" },
  { client: "Ananya Das", email: "ananya.das@email.com", phone: "+91 93322 11009", topic: ["Best areas for", "family living"], type: "Buy", typeTone: "green", mode: "Phone Call", modeIcon: "phone", date: "21 May 2025", time: "03:40 PM", agent: "Amit Verma", agentAvatar: "male", status: "Scheduled", statusTone: "blue", avatar: "female" },
];

export const calendarDays = [
  ["27", "28", "29", "30", "1", "2", "3"],
  ["4", "5", "6", "7", "8", "9", "10"],
  ["11", "12", "13", "14", "15", "16", "17"],
  ["18", "19", "20", "21", "22", "23", "24"],
  ["25", "26", "27", "28", "29", "30", "31"],
];

export const todayConsultations = [
  { time: "10:30 AM", name: "Rahul Sharma", mode: "Video Call", status: "In Progress", tone: "orange", avatar: "male" },
  { time: "02:30 PM", name: "Sneha Iyer", mode: "Video Call", status: "Completed", tone: "green", avatar: "female" },
  { time: "04:45 PM", name: "Arjun Kumar", mode: "In Person", status: "Scheduled", tone: "blue", avatar: "male" },
];

export const consultationTypes = [
  { label: "Property Guidance", value: "120 (48%)", color: "#07833e" },
  { label: "Investment Advice", value: "58 (23%)", color: "#176cf0" },
  { label: "Loan & Financing", value: "32 (13%)", color: "#ffb020" },
  { label: "Market Trends", value: "24 (10%)", color: "#9a54ed" },
  { label: "Others", value: "14 (6%)", color: "#b9c0ca" },
];

export const requestSources = [
  { label: "Website", value: "112 (45%)", color: "#07833e" },
  { label: "Property Listing Page", value: "68 (27%)", color: "#176cf0" },
  { label: "Mobile App", value: "40 (16%)", color: "#ffb020" },
  { label: "Social Media", value: "18 (7%)", color: "#9a54ed" },
  { label: "Others", value: "10 (6%)", color: "#b9c0ca" },
];

export const recentActivities = [
  { text: "Neha Sharma completed consultation with Sneha Iyer", time: "2 min ago", icon: "users", color: "#07833e", bg: "#e4f5eb" },
  { text: "Amit Verma scheduled a call with Priya Reddy", time: "15 min ago", icon: "calendar", color: "#176cf0", bg: "#e6f0ff" },
  { text: "New consultation request received from Meera Joshi", time: "1 hour ago", icon: "chat", color: "#07833e", bg: "#e4f5eb" },
];
