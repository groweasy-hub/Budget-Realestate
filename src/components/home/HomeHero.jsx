import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AccentWord,
  BadgeCopy,
  BadgeHeading,
  BadgeIconWrap,
  BadgeText,
  BottomHills,
  HeroAtmosphere,
  HeroBackground,
  HeroContent,
  HeroCopy,
  HeroMark,
  HeroShell,
  HeroSubtitle,
  HeroTabButton,
  HeroTabIconWrap,
  HeroTabLabel,
  HeroTabMarker,
  HeroTabs,
  HeroTitle,
  LeftBadge,
  RightBadge,
  RightBadgeCopy,
  RightBadgeHeading,
  RightBadgeHouse,
  RupeeBadgeIcon,
  SearchButton,
  SearchButtonIcon,
  SearchChevron,
  SearchDivider,
  SearchField,
  SearchFieldCopy,
  SearchFieldInput,
  SearchFieldIcon,
  SearchFieldLabel,
  SearchFieldSelect,
  SearchFields,
  SearchBudgetDivider,
  SearchBudgetFields,
  SearchBudgetSelect,
  SearchPanel,
  ServiceChevron,
  ServiceIconWrap,
  ServiceLabel,
  ServiceRow,
  ServicesCard,
  ServicesList,
  ServicesTitle,
  ServicesUnderline,
  SubtitleLine,
  TitleLine,
} from "./HomeHero.Styles";
import { buildPropertySearchQuery } from "../../utils/propertySearch";

const tabs = [
  { id: "buy", label: "Buy", href: "/buy", icon: HomeTabIcon },
  { id: "rent", label: "Rent", href: "/rent", icon: BuildingTabIcon },
  { id: "auctions", label: "Auctions", href: "/auctions", icon: GavelTabIcon },
  { id: "services", label: "Services", href: "/services", icon: HeadsetTabIcon },
];

const propertyTypeOptions = {
  buy: ["Apartment", "Villa", "Independent House", "Plot / Land", "Commercial"],
  rent: ["Apartment", "Villa", "Independent House", "Plot / Land", "Commercial"],
  auctions: ["Apartment", "Independent House", "Commercial", "Plot / Land"],
};

const budgetOptions = {
  buy: ["25L", "50L", "75L", "1Cr", "1.5Cr", "2Cr", "3Cr", "5Cr"],
  rent: ["10K", "20K", "30K", "50K", "75K", "1L", "1.5L"],
  auctions: ["20L", "50L", "75L", "1Cr", "2Cr", "3Cr", "5Cr"],
};

const services = [
  { label: "Land Verification", href: "/services#land-verification", icon: DocumentCheckIcon },
  { label: "Registration Assistance", href: "/services#registration-assistance", icon: ClipboardEditIcon },
  { label: "Legal Consultation", href: "/services#legal-consultation", icon: ScaleIcon },
  { label: "Flat Inspection", href: "/services#flat-inspection", icon: SearchHomeIcon },
  { label: "Property Valuation", href: "/services#property-valuation", icon: HouseRupeeIcon },
];

function HomeHero({ activeTab = "buy" }) {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState(activeTab);
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [minBudget, setMinBudget] = useState("");
  const [maxBudget, setMaxBudget] = useState("");
  const currentPropertyTypes = useMemo(
    () => propertyTypeOptions[selectedTab] || propertyTypeOptions.buy,
    [selectedTab],
  );
  const currentBudgetOptions = useMemo(
    () => budgetOptions[selectedTab] || budgetOptions.buy,
    [selectedTab],
  );

  useEffect(() => {
    setSelectedTab(activeTab);
  }, [activeTab]);

  useEffect(() => {
    setPropertyType((currentValue) =>
      currentPropertyTypes.includes(currentValue) ? currentValue : "",
    );
  }, [currentPropertyTypes]);

  const handleTabClick = (tab) => {
    if (tab.id === "services") {
      navigate(tab.href);
      return;
    }

    setSelectedTab(tab.id);
  };

  const handleSearch = () => {
    const currentTab = tabs.find((tab) => tab.id === selectedTab) || tabs[0];
    const searchQuery = buildPropertySearchQuery({
      location,
      propertyType,
      minBudget,
      maxBudget,
    });

    navigate(searchQuery ? `${currentTab.href}?${searchQuery}` : currentTab.href);
  };

  const handleEnterSearch = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearch();
    }
  };

  return (
    <HeroShell>
      <HeroBackground />
      <HeroAtmosphere />
      <BottomHills />

      <HeroContent>
        <HeroCopy>
          <HeroMark>
            <HouseMarkIcon />
          </HeroMark>

          <HeroTitle>
            <TitleLine>Find Your Perfect Property</TitleLine>
            <TitleLine $accent>Without Stretching Your Budget</TitleLine>
          </HeroTitle>

          <HeroSubtitle>
            <SubtitleLine>Buy, Rent or Invest in the right property at the right price.</SubtitleLine>
            <SubtitleLine>
              Transparent. Trusted. <AccentWord>Affordable.</AccentWord>
            </SubtitleLine>
          </HeroSubtitle>

          <HeroTabs>
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = selectedTab === tab.id;

              return (
                <HeroTabButton
                  key={tab.id}
                  type="button"
                  $active={isActive}
                  onClick={() => handleTabClick(tab)}
                >
                  <HeroTabIconWrap $active={isActive}>
                    <Icon />
                  </HeroTabIconWrap>
                  <HeroTabLabel>{tab.label}</HeroTabLabel>
                  {isActive ? <HeroTabMarker /> : null}
                </HeroTabButton>
              );
            })}
          </HeroTabs>

          <SearchPanel>
            <SearchFields>
              <SearchField>
                <SearchFieldIcon>
                  <LocationIcon />
                </SearchFieldIcon>
                <SearchFieldCopy>
                  <SearchFieldLabel>Location</SearchFieldLabel>
                  <SearchFieldInput
                    type="text"
                    value={location}
                    onChange={(event) => setLocation(event.target.value)}
                    onKeyDown={handleEnterSearch}
                    placeholder="Enter location"
                  />
                </SearchFieldCopy>
              </SearchField>

              <SearchDivider />

              <SearchField>
                <SearchFieldIcon>
                  <BuildingSmallIcon />
                </SearchFieldIcon>
                <SearchFieldCopy>
                  <SearchFieldLabel>Property Type</SearchFieldLabel>
                  <SearchFieldSelect
                    value={propertyType}
                    onChange={(event) => setPropertyType(event.target.value)}
                  >
                    <option value="">Select type</option>
                    {currentPropertyTypes.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </SearchFieldSelect>
                </SearchFieldCopy>
                <SearchChevron>
                  <ChevronDownIcon />
                </SearchChevron>
              </SearchField>

              <SearchDivider />

              <SearchField>
                <SearchFieldIcon>
                  <RupeeSmallIcon />
                </SearchFieldIcon>
                <SearchFieldCopy>
                  <SearchFieldLabel>Budget</SearchFieldLabel>
                  <SearchBudgetFields>
                    <SearchBudgetSelect
                      value={minBudget}
                      onChange={(event) => setMinBudget(event.target.value)}
                    >
                      <option value="">Min</option>
                      {currentBudgetOptions.map((option) => (
                        <option key={`min-${selectedTab}-${option}`} value={option}>
                          {option}
                        </option>
                      ))}
                    </SearchBudgetSelect>
                    <SearchBudgetDivider>-</SearchBudgetDivider>
                    <SearchBudgetSelect
                      value={maxBudget}
                      onChange={(event) => setMaxBudget(event.target.value)}
                    >
                      <option value="">Max</option>
                      {currentBudgetOptions.map((option) => (
                        <option key={`max-${selectedTab}-${option}`} value={option}>
                          {option}
                        </option>
                      ))}
                    </SearchBudgetSelect>
                  </SearchBudgetFields>
                </SearchFieldCopy>
              </SearchField>
            </SearchFields>

            <SearchButton type="button" onClick={handleSearch}>
              <SearchButtonIcon>
                <SearchIcon />
              </SearchButtonIcon>
              {selectedTab === "auctions" ? "Search Auctions" : "Search"}
            </SearchButton>
          </SearchPanel>
        </HeroCopy>

        <ServicesCard>
          <ServicesTitle>Services</ServicesTitle>
          <ServicesUnderline />

          <ServicesList>
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <ServiceRow key={service.label} to={service.href}>
                  <ServiceIconWrap>
                    <Icon />
                  </ServiceIconWrap>
                  <ServiceLabel>{service.label}</ServiceLabel>
                  <ServiceChevron>
                    <ChevronRightIcon />
                  </ServiceChevron>
                </ServiceRow>
              );
            })}
          </ServicesList>
        </ServicesCard>
      </HeroContent>

      <LeftBadge>
        <BadgeIconWrap>
          <TagIcon />
        </BadgeIconWrap>
        <BadgeCopy>
          <BadgeHeading>Best Properties. Best Prices. Best Deals.</BadgeHeading>
          <BadgeText>
            Because your <AccentWord>budget</AccentWord> matters.
          </BadgeText>
        </BadgeCopy>
      </LeftBadge>

      <RightBadge>
        <RupeeBadgeIcon>
          <LargeRupeeIcon />
        </RupeeBadgeIcon>
        <RightBadgeCopy>
          <RightBadgeHeading>Great Properties.</RightBadgeHeading>
          <RightBadgeHeading>Budget Friendly.</RightBadgeHeading>
        </RightBadgeCopy>
        <RightBadgeHouse>
          <OutlineHouseBadgeIcon />
        </RightBadgeHouse>
      </RightBadge>
    </HeroShell>
  );
}

function HouseMarkIcon() {
  return (
    <svg viewBox="0 0 220 122" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18 86L110 12L158 46V32H172V60L202 86"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M35 86H51" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <path d="M169 86H185" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <path d="M174 63V112" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <path d="M96 56H124V84H96V56Z" stroke="currentColor" strokeWidth="4.2" strokeLinejoin="round" />
      <path d="M110 56V84" stroke="currentColor" strokeWidth="4.2" />
      <path d="M96 70H124" stroke="currentColor" strokeWidth="4.2" />
    </svg>
  );
}

function HomeTabIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 15.5L16 6L27 15.5V27H19.5V20H12.5V27H5V15.5Z" fill="currentColor" />
    </svg>
  );
}

function BuildingTabIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 27V6H20V27" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" />
      <path d="M20 12H26V27" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" />
      <path d="M12 10H14" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M16 10H18" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M12 15H14" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M16 15H18" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M12 20H14" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M16 20H18" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M22 16H24" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M22 20H24" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

function GavelTabIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 12L15 7L25 17L20 22L10 12Z"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path d="M8 24L18 14" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M6 27H19" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M16 23L24 31" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

function HeadsetTabIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 16C7 11.03 11.03 7 16 7C20.97 7 25 11.03 25 16" stroke="currentColor" strokeWidth="2.4" />
      <path d="M7 16V24H11V16" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" />
      <path d="M25 16V24H21V16" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" />
      <path d="M21 25C21 27 19.3 28 16.7 28H16" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16 28C20.8 22.55 23.2 18.37 23.2 15.46C23.2 11.49 20.18 8.4 16 8.4C11.82 8.4 8.8 11.49 8.8 15.46C8.8 18.37 11.2 22.55 16 28Z"
        stroke="currentColor"
        strokeWidth="2.3"
      />
      <circle cx="16" cy="15.4" r="2.4" stroke="currentColor" strokeWidth="2.3" />
    </svg>
  );
}

function BuildingSmallIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.5 27V8H20.5V27" stroke="currentColor" strokeWidth="2.3" strokeLinejoin="round" />
      <path d="M20.5 12.5H26V27" stroke="currentColor" strokeWidth="2.3" strokeLinejoin="round" />
      <path d="M12 12H13.5" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" />
      <path d="M16 12H17.5" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" />
      <path d="M12 16.5H13.5" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" />
      <path d="M16 16.5H17.5" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" />
      <path d="M22.5 17H24" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" />
    </svg>
  );
}

function RupeeSmallIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2.3" />
      <path d="M12 10H21" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" />
      <path d="M12 14H21" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" />
      <path
        d="M12 10C14.4 10 17 10.5 17 14C17 16.2 15.2 17.8 12.6 18H12L19 24"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="14" cy="14" r="7" stroke="currentColor" strokeWidth="2.6" />
      <path d="M19.5 19.5L25 25" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DocumentCheckIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 6H19L24 11V25H10V6Z" stroke="currentColor" strokeWidth="2.1" strokeLinejoin="round" />
      <path d="M19 6V11H24" stroke="currentColor" strokeWidth="2.1" strokeLinejoin="round" />
      <path d="M14 15H19" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" />
      <path d="M14 19H17" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" />
      <circle cx="22" cy="22" r="4.2" stroke="currentColor" strokeWidth="2.1" />
      <path d="M20.5 22L21.7 23.2L24 20.8" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ClipboardEditIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 7H21V25H11V7Z" stroke="currentColor" strokeWidth="2.1" strokeLinejoin="round" />
      <path d="M13 5H19V9H13V5Z" stroke="currentColor" strokeWidth="2.1" strokeLinejoin="round" />
      <path d="M14 14H18" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" />
      <path d="M14 18H18" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" />
      <path d="M19 21L24.8 15.2L27 17.4L21.2 23.2L18.5 23.7L19 21Z" stroke="currentColor" strokeWidth="2.1" strokeLinejoin="round" />
    </svg>
  );
}

function ScaleIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 7V25" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" />
      <path d="M10 10H22" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" />
      <path d="M12 10L8 17H16L12 10Z" stroke="currentColor" strokeWidth="2.1" strokeLinejoin="round" />
      <path d="M20 10L16 17H24L20 10Z" stroke="currentColor" strokeWidth="2.1" strokeLinejoin="round" />
      <path d="M11 25H21" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" />
    </svg>
  );
}

function SearchHomeIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 14L16 7L25 14V24H18V18H14V24H7V14Z" stroke="currentColor" strokeWidth="2.1" strokeLinejoin="round" />
      <circle cx="21.5" cy="21.5" r="4" stroke="currentColor" strokeWidth="2.1" />
      <path d="M24.5 24.5L27.5 27.5" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" />
    </svg>
  );
}

function HouseRupeeIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 14.5L16 7L26 14.5V25H6V14.5Z" stroke="currentColor" strokeWidth="2.1" strokeLinejoin="round" />
      <circle cx="22.5" cy="21.5" r="4.5" stroke="currentColor" strokeWidth="2.1" />
      <path d="M20.5 18.8H24.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M20.5 21H24.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path
        d="M20.5 18.8C21.7 18.8 22.9 19 22.9 21C22.9 22.2 22 23.2 20.7 23.3H20.5L23.5 26"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TagIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 8H18L26 16L16 26L8 18V8Z" fill="currentColor" />
      <circle cx="12.2" cy="12.2" r="1.8" fill="#fff8e8" />
    </svg>
  );
}

function LargeRupeeIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 13H31" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" />
      <path d="M14 19H31" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" />
      <path
        d="M14 13C18.1 13 23 13.8 23 19C23 22.6 20 25.3 15.2 25.7H14L28.2 38"
        stroke="currentColor"
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function OutlineHouseBadgeIcon() {
  return (
    <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 42L48 13L65 25V18H73V32L86 42"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M18 42V83H78V42" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      <path d="M40 83V58H56V83" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      <path d="M28 52H35V59H28V52Z" stroke="currentColor" strokeWidth="2.4" />
      <path d="M61 52H68V59H61V52Z" stroke="currentColor" strokeWidth="2.4" />
      <path d="M28 66H35V73H28V66Z" stroke="currentColor" strokeWidth="2.4" />
      <path d="M61 66H68V73H61V66Z" stroke="currentColor" strokeWidth="2.4" />
      <path d="M4 83H92" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export default HomeHero;
