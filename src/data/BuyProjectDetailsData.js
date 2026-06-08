const commonAmenities = [
  { key: "pool", label: "Swimming\nPool" },
  { key: "club", label: "Club\nHouse" },
  { key: "gym", label: "Gym\n& Fitness" },
  { key: "play", label: "Children\nPlay Area" },
  { key: "track", label: "Jogging\nTrack" },
  { key: "security", label: "24/7\nSecurity" },
  { key: "backup", label: "Power\nBackup" },
  { key: "ev", label: "EV\nCharging" },
];

const consultant = {
  name: "Ravi Kumar",
  experience: "15+ Years Experience",
  role: "Property Advisor",
  rating: "4.9",
  reviews: "210 Reviews",
  responseTime: "Usually responds in 5 mins",
};

const baseProject = {
  badges: ["Featured", "Verified Property", "Ready to Move"],
  consultant,
  detailsInfoLabel: "All Inclusive Price",
  actionLabels: {
    siteVisit: "Schedule Site Visit",
    expert: "Talk to an Expert",
    callback: "Request Callback",
    whatsapp: "Chat on WhatsApp",
    brochure: "Download Brochure",
  },
  aboutTitle: "About This Property",
  amenitiesTitle: "Amenities",
  locationTitle: "Location Advantages",
  similarTitle: "Similar Properties",
  whyTitle: "Why Choose This Property?",
  calculatorTitle: "EMI Calculator",
  whyPoints: [
    "Verified Property & Ownership",
    "All Legal Documents Checked",
    "Price Benchmark Verified",
    "RERA Registered Project",
    "Site Inspection Available",
    "Bank Loan Assistance Available",
  ],
  amenities: commonAmenities,
  bottomCta: {
    title: "Interested in this Property?",
    text: "Schedule a site visit or talk to our property expert today.",
    primaryLabel: "Book a Site Visit",
    secondaryLabel: "Talk to an Expert",
    image: "/Images/CTA-house.png",
    imageAlt: "Property preview",
  },
};

const projects = {
  "skyline-crest-residences": {
    ...baseProject,
    id: "skyline-crest-residences",
    category: "Villas",
    locationTrail: "Banjara Hills, Hyderabad",
    title: "Skyline Crest Residences",
    location: "Banjara Hills, Hyderabad",
    rating: "4.9",
    reviews: "128 Reviews",
    projectCode: "BR-1287",
    price: "Rs 4.5 Cr",
    specs: [
      { value: "4", label: "BHK" },
      { value: "3200", label: "Sqft" },
      { value: "Villa", label: "Type" },
      { value: "Ready", label: "To Move" },
    ],
    gallery: [
      {
        label: "Exterior View",
        image: "/Images/luxury-homes.jpg",
        imageAlt: "Skyline Crest exterior",
      },
      {
        label: "Bedroom",
        image: "/Images/CTA-house.png",
        imageAlt: "Bedroom view",
      },
      {
        label: "Living Room",
        image: "/Images/buy-house.jpg",
        imageAlt: "Living room view",
      },
      {
        label: "Exterior View",
        image: "/Images/luxury-homes.jpg",
        imageAlt: "Exterior evening view",
      },
    ],
    aboutDescription:
      "Skyline Crest Residences offers premium 4 BHK villas designed for a luxurious lifestyle. With world-class amenities, landscaped gardens, and excellent connectivity to major business hubs, this is where comfort meets convenience.",
    aboutPoints: [
      "Premium villa community",
      "Spacious living & dining areas",
      "Private garden & terrace",
      "Clubhouse & modern amenities",
      "24/7 security & CCTV surveillance",
      "Excellent connectivity",
    ],
    locationAdvantages: [
      { place: "Financial District", time: "10 min" },
      { place: "HITEC City", time: "15 min" },
      { place: "Rajiv Gandhi International Airport", time: "25 min" },
      { place: "Outer Ring Road", time: "5 min" },
      { place: "Top Schools & Colleges", time: "7 min" },
    ],
    calculator: {
      propertyPrice: 45000000,
      downPayment: 5000000,
      interestRate: 8.4,
      tenureYears: 20,
      image: "/Images/budget-calculator-calculator.png",
      imageAlt: "Calculator illustration",
    },
    securityCard: {
      title: "Your investment is secure with us.",
      text: "Transparent. Verified. Trusted.",
    },
  },
  "lansum-eldorado": {
    ...baseProject,
    id: "lansum-eldorado",
    category: "Apartments",
    locationTrail: "Kokapet, Hyderabad",
    title: "Lansum Eldorado",
    location: "Kokapet, Hyderabad",
    rating: "4.8",
    reviews: "112 Reviews",
    projectCode: "BR-2074",
    price: "Rs 2.15 Cr",
    specs: [
      { value: "4", label: "BHK" },
      { value: "2800", label: "Sqft" },
      { value: "Apartment", label: "Type" },
    ],
    gallery: [
      {
        label: "Tower View",
        image: "/Images/flats.jpg",
        imageAlt: "Lansum Eldorado towers",
      },
      {
        label: "Lobby",
        image: "/Images/home-hero-bg.jpg",
        imageAlt: "Project approach view",
      },
      {
        label: "Club Area",
        image: "/Images/buy-house.jpg",
        imageAlt: "Clubhouse preview",
      },
      {
        label: "Night View",
        image: "/Images/flats.jpg",
        imageAlt: "Night tower view",
      },
    ],
    aboutDescription:
      "Lansum Eldorado is a large-format residential community in Kokapet with premium apartments, green open spaces, and access to the citys top growth corridor.",
    aboutPoints: [
      "Large gated development",
      "Premium clubhouse & podium amenities",
      "Excellent arterial road connectivity",
      "Strong rental and resale demand",
      "Designed by reputed consultants",
      "Near schools and healthcare",
    ],
    locationAdvantages: [
      { place: "Financial District", time: "8 min" },
      { place: "Kokapet SEZ", time: "6 min" },
      { place: "HITEC City", time: "18 min" },
      { place: "Outer Ring Road", time: "4 min" },
      { place: "International Schools", time: "10 min" },
    ],
    calculator: {
      propertyPrice: 21500000,
      downPayment: 3000000,
      interestRate: 8.4,
      tenureYears: 20,
      image: "/Images/budget-calculator-calculator.png",
      imageAlt: "Calculator illustration",
    },
    securityCard: {
      title: "A verified premium apartment investment.",
      text: "Transparent pricing. Strong location. Trusted support.",
    },
  },
  "aparna-zenon": {
    ...baseProject,
    id: "aparna-zenon",
    category: "Apartments",
    locationTrail: "Tellapur, Hyderabad",
    title: "Aparna Zenon",
    location: "Tellapur, Hyderabad",
    rating: "4.7",
    reviews: "89 Reviews",
    projectCode: "BR-1830",
    price: "Rs 1.45 Cr",
    specs: [
      { value: "3", label: "BHK" },
      { value: "2100", label: "Sqft" },
      { value: "Apartment", label: "Type" },
    ],
    gallery: [
      {
        label: "Project View",
        image: "/Images/luxury-homes.jpg",
        imageAlt: "Aparna Zenon front view",
      },
      {
        label: "Living Room",
        image: "/Images/buy-house.jpg",
        imageAlt: "Living room view",
      },
      {
        label: "Bedroom",
        image: "/Images/CTA-house.png",
        imageAlt: "Bedroom preview",
      },
      {
        label: "Elevation",
        image: "/Images/home-hero-bg.jpg",
        imageAlt: "Elevation view",
      },
    ],
    aboutDescription:
      "Aparna Zenon combines practical layouts, reputed construction quality, and fast-emerging Tellapur connectivity for families seeking long-term value.",
    aboutPoints: [
      "Functional family layouts",
      "Developer with proven track record",
      "Well-planned amenity zones",
      "Strong future appreciation potential",
      "Near IT corridors and highways",
      "Balanced lifestyle location",
    ],
    locationAdvantages: [
      { place: "Tellapur Junction", time: "4 min" },
      { place: "Gachibowli", time: "18 min" },
      { place: "Lingampally Station", time: "12 min" },
      { place: "ORR Access", time: "9 min" },
      { place: "Schools & Retail", time: "6 min" },
    ],
    calculator: {
      propertyPrice: 14500000,
      downPayment: 2000000,
      interestRate: 8.35,
      tenureYears: 20,
      image: "/Images/budget-calculator-calculator.png",
      imageAlt: "Calculator illustration",
    },
    securityCard: {
      title: "Move ahead with a trusted builder choice.",
      text: "Verified documents. Guided process. Better confidence.",
    },
  },
  "rajapushpa-pristinia": {
    ...baseProject,
    id: "rajapushpa-pristinia",
    category: "Apartments",
    locationTrail: "Narsingi, Hyderabad",
    title: "Rajapushpa Pristinia",
    location: "Narsingi, Hyderabad",
    rating: "4.9",
    reviews: "143 Reviews",
    projectCode: "BR-2314",
    price: "Rs 2.90 Cr",
    specs: [
      { value: "4", label: "BHK" },
      { value: "3400", label: "Sqft" },
      { value: "Apartment", label: "Type" },
    ],
    gallery: [
      {
        label: "Exterior View",
        image: "/Images/flats.jpg",
        imageAlt: "Rajapushpa towers",
      },
      {
        label: "Club House",
        image: "/Images/buy-house.jpg",
        imageAlt: "Club house preview",
      },
      {
        label: "Sky Lounge",
        image: "/Images/home-hero-bg.jpg",
        imageAlt: "Sky lounge view",
      },
      {
        label: "Amenity Deck",
        image: "/Images/flats.jpg",
        imageAlt: "Amenity deck view",
      },
    ],
    aboutDescription:
      "Rajapushpa Pristinia delivers large-format premium apartments in Narsingi with upscale specifications, expansive amenities, and proximity to the western business corridor.",
    aboutPoints: [
      "Spacious premium residences",
      "High-end lobby and common areas",
      "Signature clubhouse facilities",
      "Excellent access to work hubs",
      "Strong long-term appreciation outlook",
      "Quality-led developer brand",
    ],
    locationAdvantages: [
      { place: "Narsingi ORR Exit", time: "3 min" },
      { place: "Financial District", time: "12 min" },
      { place: "Wipro Circle", time: "16 min" },
      { place: "International Schools", time: "8 min" },
      { place: "Airport", time: "28 min" },
    ],
    calculator: {
      propertyPrice: 29000000,
      downPayment: 4000000,
      interestRate: 8.5,
      tenureYears: 20,
      image: "/Images/budget-calculator-calculator.png",
      imageAlt: "Calculator illustration",
    },
    securityCard: {
      title: "Premium living backed by verified diligence.",
      text: "Clear process. Transparent documents. Confident purchase.",
    },
  },
  "my-home-tycoon": {
    ...baseProject,
    id: "my-home-tycoon",
    category: "Commercial",
    locationTrail: "Gachibowli, Hyderabad",
    title: "My Home Tycoon",
    location: "Gachibowli, Hyderabad",
    rating: "4.8",
    reviews: "101 Reviews",
    projectCode: "BR-3015",
    price: "Rs 5.25 Cr",
    specs: [
      { value: "Office", label: "Space" },
      { value: "4500", label: "Sqft" },
      { value: "Commercial", label: "Type" },
      { value: "Ready", label: "To Occupy" },
    ],
    gallery: [
      {
        label: "Building View",
        image: "/Images/commercial.jpg",
        imageAlt: "My Home Tycoon facade",
      },
      {
        label: "Reception",
        image: "/Images/home-hero-bg.jpg",
        imageAlt: "Reception preview",
      },
      {
        label: "Workspace",
        image: "/Images/buy-house.jpg",
        imageAlt: "Workspace preview",
      },
      {
        label: "Night Facade",
        image: "/Images/commercial.jpg",
        imageAlt: "Commercial exterior",
      },
    ],
    aboutDescription:
      "My Home Tycoon is a premium office destination in Gachibowli offering strong corporate visibility, efficient floor plates, and excellent investment-grade positioning.",
    aboutPoints: [
      "Prime business district address",
      "High corporate occupancy appeal",
      "Flexible office configurations",
      "Strong rental yield potential",
      "Excellent city connectivity",
      "Professional asset management",
    ],
    locationAdvantages: [
      { place: "Wipro Circle", time: "5 min" },
      { place: "Financial District", time: "10 min" },
      { place: "Metro Access", time: "12 min" },
      { place: "Outer Ring Road", time: "8 min" },
      { place: "Hotels & Retail", time: "4 min" },
    ],
    calculator: {
      propertyPrice: 52500000,
      downPayment: 7000000,
      interestRate: 8.4,
      tenureYears: 20,
      image: "/Images/budget-calculator-calculator.png",
      imageAlt: "Calculator illustration",
    },
    securityCard: {
      title: "A secure commercial asset with verified fundamentals.",
      text: "Trusted advisory. Verified benchmarks. Smart positioning.",
    },
  },
};

const similarProperties = {
  "skyline-crest-residences": [
    {
      id: "rajapushpa-pristinia",
      badge: "Featured",
      title: "Jubilee Signature Towers",
      location: "Jubilee Hills, Hyderabad",
      specs: "4 BHK  ·  2800 Sqft",
      price: "Rs 3.75 Cr",
      image: "/Images/flats.jpg",
      imageAlt: "Jubilee Signature Towers",
    },
    {
      id: "my-home-tycoon",
      badge: "New Launch",
      title: "Meridian Commerce Suites",
      location: "Gachibowli, Hyderabad",
      specs: "3 BHK  ·  2100 Sqft",
      price: "Rs 2.85 Cr",
      image: "/Images/commercial.jpg",
      imageAlt: "Meridian Commerce Suites",
    },
    {
      id: "lansum-eldorado",
      badge: "Premium",
      title: "Orchard Green Estates",
      location: "Kokapet, Hyderabad",
      specs: "4 BHK  ·  3400 Sqft",
      price: "Rs 4.10 Cr",
      image: "/Images/luxury-homes.jpg",
      imageAlt: "Orchard Green Estates",
    },
    {
      id: "aparna-zenon",
      badge: "Featured",
      title: "Zen Garden Heights",
      location: "Tellapur, Hyderabad",
      specs: "3 BHK  ·  2000 Sqft",
      price: "Rs 2.40 Cr",
      image: "/Images/home-hero-bg.jpg",
      imageAlt: "Zen Garden Heights",
    },
  ],
};

export function getBuyProjectDetails(projectId) {
  const fallbackProject = projects["skyline-crest-residences"];
  const project = projects[projectId] || fallbackProject;

  return {
    ...project,
    similarProperties:
      similarProperties[project.id] ||
      similarProperties["skyline-crest-residences"],
  };
}

export const buyProjectDetailIds = Object.keys(projects);
