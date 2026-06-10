import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { siteNavbar } from "../../data/HomePageContent";
import { auctionsPageContent } from "../../data/AuctionsPageContent";
import {
  buildPropertySearchQuery,
  formatBudgetRangeText,
  parseAmountInput,
  splitBudgetRangeText,
} from "../../utils/propertySearch";
import { NavWrap } from "../Home/HomeStyles";
import {
  AuctionsInner,
  AuctionsPageShell,
  ApplyFiltersButton,
  BankInfo,
  CheckboxList,
  CheckboxMark,
  ClearButton,
  ContentGrid,
  ContentSection,
  CountdownBox,
  CountdownLabel,
  CountdownRow,
  CountdownValue,
  DesktopAuctionsView,
  DarkCardHeader,
  DarkCardIcon,
  DarkCardText,
  DarkSideCard,
  FavoriteButton,
  FieldStack,
  FilterCount,
  FilterIcon,
  FilterLabelWrap,
  FilterRow,
  FilterSection,
  FilterTitle,
  HeroCopy,
  HeroDescription,
  HeroGrid,
  HeroHighlights,
  HeroImage,
  HeroSection,
  HeroTitle,
  HeroVisual,
  HiddenCheckbox,
  HighlightIcon,
  HighlightItem,
  HighlightText,
  HighlightTitle,
  InlineDash,
  InlineFields,
  MetricBlock,
  MetricInline,
  MetricLabel,
  MetricValue,
  MobileAuctionAlertButton,
  MobileAuctionAlertCard,
  MobileAuctionAlertCopy,
  MobileAuctionAlertIcon,
  MobileAuctionAlertText,
  MobileAuctionAlertTitle,
  MobileAuctionBank,
  MobileAuctionBellButton,
  MobileAuctionCard,
  MobileAuctionCardBody,
  MobileAuctionCountdown,
  MobileAuctionCountdownBox,
  MobileAuctionCountdownLabel,
  MobileAuctionCountdownValue,
  MobileAuctionDetailsButton,
  MobileAuctionDropdownList,
  MobileAuctionDropdownOption,
  MobileAuctionDropdownPanel,
  MobileAuctionDropdownTitle,
  MobileAuctionFavorite,
  MobileAuctionFieldAction,
  MobileAuctionFieldBody,
  MobileAuctionFieldIcon,
  MobileAuctionFieldLabel,
  MobileAuctionFieldValue,
  MobileAuctionFigure,
  MobileAuctionFooter,
  MobileAuctionHeroCard,
  MobileAuctionHeroCopy,
  MobileAuctionHeroDescription,
  MobileAuctionHeroImage,
  MobileAuctionHeroTitle,
  MobileAuctionHeroTop,
  MobileAuctionHeroVisual,
  MobileAuctionHighlight,
  MobileAuctionHighlightIcon,
  MobileAuctionHighlightText,
  MobileAuctionHighlightTitle,
  MobileAuctionHighlightsPanel,
  MobileAuctionIconButton,
  MobileAuctionIconButtons,
  MobileAuctionImage,
  MobileAuctionList,
  MobileAuctionLocation,
  MobileAuctionMetric,
  MobileAuctionMetricInline,
  MobileAuctionMetricLabel,
  MobileAuctionMetrics,
  MobileAuctionMetricValue,
  MobileAuctionPopularChip,
  MobileAuctionPopularChips,
  MobileAuctionPopularHeader,
  MobileAuctionPopularMore,
  MobileAuctionPopularRow,
  MobileAuctionResultsCount,
  MobileAuctionResultsHeader,
  MobileAuctionResultsSection,
  MobileAuctionSearchBar,
  MobileAuctionSearchField,
  MobileAuctionSearchGrid,
  MobileAuctionSearchIcon,
  MobileAuctionSearchInput,
  MobileAuctionSearchInputWrap,
  MobileAuctionSearchPanel,
  MobileAuctionSpec,
  MobileAuctionSpecs,
  MobileAuctionStatCard,
  MobileAuctionStatIcon,
  MobileAuctionStatLabel,
  MobileAuctionStatsStrip,
  MobileAuctionStatValue,
  MobileAuctionStatus,
  MobileAuctionSortLabel,
  MobileAuctionSortTools,
  MobileAuctionTitle,
  MobileAuctionTrustGrid,
  MobileAuctionTrustIcon,
  MobileAuctionTrustItem,
  MobileAuctionTrustPanel,
  MobileAuctionTrustText,
  MobileAuctionTrustTitle,
  MobileAuctionVerified,
  MobileAuctionsView,
  MobileAuctionFilterToggle,
  MetricsRow,
  PopularSearches,
  ReasonDot,
  ReasonItem,
  ReasonsList,
  ResultBody,
  ResultCard,
  ResultCardGrid,
  ResultFigure,
  ResultFooter,
  ResultImage,
  ResultLocation,
  ResultSpec,
  ResultSpecs,
  ResultTitle,
  ResultsColumn,
  ResultsHeader,
  ResultsList,
  RightRail,
  SearchBottomRow,
  SearchButton,
  SearchChip,
  SearchControlIcon,
  SearchField,
  SearchGrid,
  SearchInput,
  SearchInputWrap,
  SearchLabel,
  SearchPanel,
  SearchSelectIcon,
  SearchSelectWrap,
  SideButton,
  SideCard,
  Sidebar,
  SidebarHeader,
  SidebarInput,
  SidebarInputWrap,
  SidebarTitle,
  SideTitle,
  SortTools,
  StatCard,
  StatIcon,
  StatLabel,
  StatValue,
  StatsStrip,
  StatusBadge,
  StepHeading,
  StepIcon,
  StepItem,
  StepsList,
  StepText,
  TrustGrid,
  TrustIcon,
  TrustItem,
  TrustStrip,
  TrustText,
  TrustTitle,
  VerifiedMark,
  ViewButton,
  ViewButtons,
  ViewDetailsButton,
} from "./AuctionsStyles";

function formatCountdownValue(value) {
  return String(value).padStart(2, "0");
}

function getCountdownItems(targetTime, now) {
  const remaining = Math.max(0, targetTime - now);
  const totalSeconds = Math.floor(remaining / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return [
    { value: formatCountdownValue(days), unit: "DAYS" },
    { value: formatCountdownValue(hours), unit: "HRS" },
    { value: formatCountdownValue(minutes), unit: "MINS" },
    { value: formatCountdownValue(seconds), unit: "SECS" },
  ];
}

function Auctions() {
  const { hero, search, filters, listings, rightPanel, stats, trustStrip } =
    auctionsPageContent;
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const fromDateRef = useRef(null);
  const toDateRef = useRef(null);
  const mobileFromDateRef = useRef(null);
  const mobileToDateRef = useRef(null);
  const [selectedAuctionTypes, setSelectedAuctionTypes] = useState([]);
  const [selectedPropertyTypes, setSelectedPropertyTypes] = useState([]);
  const [selectedStatuses, setSelectedStatuses] = useState(["Live Now"]);
  const [searchLocation, setSearchLocation] = useState("");
  const [heroLocation, setHeroLocation] = useState("");
  const [propertyType, setPropertyType] = useState(search.propertyTypes[0]);
  const [auctionType, setAuctionType] = useState(search.auctionTypes[0]);
  const [reserveRange, setReserveRange] = useState("");
  const [minReserve, setMinReserve] = useState("");
  const [maxReserve, setMaxReserve] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [activePopularSearch, setActivePopularSearch] = useState("Hyderabad");
  const [viewMode, setViewMode] = useState("grid");
  const [appliedFilters, setAppliedFilters] = useState(null);
  const [now, setNow] = useState(() => Date.now());
  const [mobilePanel, setMobilePanel] = useState(null);
  const sortOption = search.sortOptions[0];

  const toggleItem = (items, value, setter) => {
    setter(
      items.includes(value)
        ? items.filter((item) => item !== value)
        : [...items, value],
    );
  };

  useEffect(() => {
    const timerId = window.setInterval(() => {
      setNow(Date.now());
    }, 1000);

    return () => {
      window.clearInterval(timerId);
    };
  }, []);

  useEffect(() => {
    const location = searchParams.get("location") || "";
    const propertyTypeFromQuery = searchParams.get("propertyType") || "";
    const minBudgetFromQuery = searchParams.get("minBudget") || "";
    const maxBudgetFromQuery = searchParams.get("maxBudget") || "";
    const propertyTypeValue =
      propertyTypeFromQuery &&
      search.propertyTypes.includes(propertyTypeFromQuery)
        ? propertyTypeFromQuery
        : search.propertyTypes[0];
    const hasSearchFilters = Boolean(
      location ||
      (propertyTypeValue && propertyTypeValue !== search.propertyTypes[0]) ||
      minBudgetFromQuery ||
      maxBudgetFromQuery,
    );

    setHeroLocation(location);
    setPropertyType(propertyTypeValue);
    setReserveRange(
      formatBudgetRangeText(minBudgetFromQuery, maxBudgetFromQuery),
    );
    setMinReserve(
      parseAmountInput(minBudgetFromQuery) !== null
        ? String(parseAmountInput(minBudgetFromQuery))
        : "",
    );
    setMaxReserve(
      parseAmountInput(maxBudgetFromQuery) !== null
        ? String(parseAmountInput(maxBudgetFromQuery))
        : "",
    );
    setSelectedStatuses(hasSearchFilters ? [] : ["Live Now"]);
    setAppliedFilters(
      hasSearchFilters
        ? {
            selectedAuctionTypes: [],
            selectedPropertyTypes:
              propertyTypeValue && propertyTypeValue !== search.propertyTypes[0]
                ? [propertyTypeValue]
                : [],
            selectedStatuses: [],
            searchLocation: location,
            minReserve:
              parseAmountInput(minBudgetFromQuery) !== null
                ? String(parseAmountInput(minBudgetFromQuery))
                : "",
            maxReserve:
              parseAmountInput(maxBudgetFromQuery) !== null
                ? String(parseAmountInput(maxBudgetFromQuery))
                : "",
            fromDate: "",
            toDate: "",
          }
        : null,
    );
  }, [search.propertyTypes, searchParams]);

  const clearAllFilters = () => {
    setSelectedAuctionTypes([]);
    setSelectedPropertyTypes([]);
    setSelectedStatuses(["Live Now"]);
    setSearchLocation("");
    setReserveRange("");
    setMinReserve("");
    setMaxReserve("");
    setFromDate("");
    setToDate("");
    setAppliedFilters(null);
    setMobilePanel(null);
  };

  const handleHeroSearch = () => {
    const { minBudget, maxBudget } = splitBudgetRangeText(reserveRange);
    const nextMinReserve = parseAmountInput(minBudget);
    const nextMaxReserve = parseAmountInput(maxBudget);
    const queryString = buildPropertySearchQuery({
      location: heroLocation,
      propertyType:
        propertyType !== search.propertyTypes[0] ? propertyType : "",
      minBudget,
      maxBudget,
    });

    setSelectedStatuses([]);
    setMinReserve(nextMinReserve !== null ? String(nextMinReserve) : "");
    setMaxReserve(nextMaxReserve !== null ? String(nextMaxReserve) : "");
    setAppliedFilters({
      selectedAuctionTypes,
      selectedPropertyTypes:
        propertyType !== search.propertyTypes[0] ? [propertyType] : [],
      selectedStatuses: [],
      searchLocation: heroLocation,
      minReserve: nextMinReserve !== null ? String(nextMinReserve) : "",
      maxReserve: nextMaxReserve !== null ? String(nextMaxReserve) : "",
      fromDate: "",
      toDate: "",
    });
    navigate(queryString ? `/auctions?${queryString}` : "/auctions");
  };

  const applyFilters = () => {
    setAppliedFilters({
      selectedAuctionTypes,
      selectedPropertyTypes,
      selectedStatuses,
      searchLocation,
      minReserve,
      maxReserve,
      fromDate,
      toDate,
    });
  };

  const countdownTargets = useMemo(
    () =>
      Object.fromEntries(
        listings
          .filter((listing) => listing.countdownSeed)
          .map((listing) => {
            const { days, hours, minutes, seconds } = listing.countdownSeed;
            const totalMilliseconds =
              (((days * 24 + hours) * 60 + minutes) * 60 + seconds) * 1000;

            return [listing.id, Date.now() + totalMilliseconds];
          }),
      ),
    [listings],
  );

  const openDatePicker = (inputRef) => {
    const input = inputRef.current;

    if (!input) {
      return;
    }

    input.focus();

    if (typeof input.showPicker === "function") {
      input.showPicker();
    }
  };

  const filteredListings = useMemo(() => {
    if (!appliedFilters) {
      return listings;
    }

    return listings.filter((listing) => {
      const locationMatches =
        !appliedFilters.searchLocation ||
        listing.location
          .toLowerCase()
          .includes(appliedFilters.searchLocation.toLowerCase());

      const auctionTypeMatches =
        appliedFilters.selectedAuctionTypes.length === 0 ||
        appliedFilters.selectedAuctionTypes.includes(listing.auctionType);

      const propertyTypeMatches =
        appliedFilters.selectedPropertyTypes.length === 0 ||
        appliedFilters.selectedPropertyTypes.some((selectedType) => {
          if (selectedType === "All Residential") {
            return (
              listing.propertyType === "Apartment" ||
              listing.propertyType === "Independent House"
            );
          }

          return listing.propertyType === selectedType;
        });

      const statusMatches =
        appliedFilters.selectedStatuses.length === 0 ||
        appliedFilters.selectedStatuses.includes(listing.statusLabel);

      const minReserveMatches =
        !appliedFilters.minReserve ||
        listing.reserveValue >= Number(appliedFilters.minReserve);

      const maxReserveMatches =
        !appliedFilters.maxReserve ||
        listing.reserveValue <= Number(appliedFilters.maxReserve);

      const fromDateMatches =
        !appliedFilters.fromDate ||
        (listing.auctionDateValue &&
          listing.auctionDateValue >= appliedFilters.fromDate);

      const toDateMatches =
        !appliedFilters.toDate ||
        (listing.auctionDateValue &&
          listing.auctionDateValue <= appliedFilters.toDate);

      return (
        locationMatches &&
        auctionTypeMatches &&
        propertyTypeMatches &&
        statusMatches &&
        minReserveMatches &&
        maxReserveMatches &&
        fromDateMatches &&
        toDateMatches
      );
    });
  }, [appliedFilters, listings]);

  const handleAuctionCardOpen = (listingId) => {
    navigate(`/auction-project/${listingId}`);
  };
  const mobileHeroHighlights = [
    {
      title: "Verified Auctions",
      text: "100% verified listings",
      icon: "verified",
    },
    {
      title: "Transparent Process",
      text: "Clear terms & timeline",
      icon: "process",
    },
    {
      title: "Great Opportunities",
      text: "Below market deals",
      icon: "opportunity",
    },
    {
      title: "Auction Alerts",
      text: "Never miss a deal",
      icon: "alerts",
    },
  ];
  const mobilePopularSearches = [
    "Hyderabad",
    "Bengaluru",
    "Mumbai",
    "Pune",
    "Delhi NCR",
  ];
  const mobilePropertyTypeLabel =
    propertyType === search.propertyTypes[0] ? "All Types" : propertyType;
  const mobileAuctionTypeLabel =
    auctionType === search.auctionTypes[0] ? "All Types" : auctionType;
  const mobileReserveLabel =
    reserveRange ||
    (minReserve || maxReserve
      ? `${minReserve || "Min"} - ${maxReserve || "Max"}`
      : "Min - Max");
  const mobileFilteredListings =
    filteredListings.length > 0 ? filteredListings : listings.slice(0, 3);
  const applyMobileSearch = () => {
    const normalizedReserveRange =
      reserveRange ||
      formatBudgetRangeText(
        minReserve ? String(minReserve) : "",
        maxReserve ? String(maxReserve) : "",
      );
    setReserveRange(normalizedReserveRange);
    setAppliedFilters({
      selectedAuctionTypes,
      selectedPropertyTypes:
        propertyType !== search.propertyTypes[0] ? [propertyType] : [],
      selectedStatuses,
      searchLocation: heroLocation,
      minReserve,
      maxReserve,
      fromDate,
      toDate,
    });
    setMobilePanel(null);
  };
  const renderMobilePanel = () => {
    if (mobilePanel === "propertyType") {
      return (
        <MobileAuctionDropdownPanel>
          <MobileAuctionDropdownTitle>Property Type</MobileAuctionDropdownTitle>
          <MobileAuctionDropdownList>
            {search.propertyTypes.map((item) => (
              <MobileAuctionDropdownOption
                key={item}
                type="button"
                $active={propertyType === item}
                onClick={() => {
                  setPropertyType(item);
                  setMobilePanel(null);
                }}
              >
                <span>
                  {item === search.propertyTypes[0] ? "All Types" : item}
                </span>
              </MobileAuctionDropdownOption>
            ))}
          </MobileAuctionDropdownList>
        </MobileAuctionDropdownPanel>
      );
    }

    if (mobilePanel === "auctionType") {
      return (
        <MobileAuctionDropdownPanel>
          <MobileAuctionDropdownTitle>Auction Type</MobileAuctionDropdownTitle>
          <MobileAuctionDropdownList>
            {search.auctionTypes.map((item) => (
              <MobileAuctionDropdownOption
                key={item}
                type="button"
                $active={auctionType === item}
                onClick={() => {
                  setAuctionType(item);
                  setMobilePanel(null);
                }}
              >
                <span>
                  {item === search.auctionTypes[0] ? "All Types" : item}
                </span>
              </MobileAuctionDropdownOption>
            ))}
          </MobileAuctionDropdownList>
        </MobileAuctionDropdownPanel>
      );
    }

    if (mobilePanel === "reserve") {
      return (
        <MobileAuctionDropdownPanel>
          <MobileAuctionDropdownTitle>Reserve Price</MobileAuctionDropdownTitle>
          <InlineFields>
            <SidebarInputWrap>
              <SidebarInput
                value={minReserve}
                onChange={(event) =>
                  setMinReserve(event.target.value.replace(/\D/g, ""))
                }
                placeholder="Min (₹)"
              />
            </SidebarInputWrap>
            <InlineDash>-</InlineDash>
            <SidebarInputWrap>
              <SidebarInput
                value={maxReserve}
                onChange={(event) =>
                  setMaxReserve(event.target.value.replace(/\D/g, ""))
                }
                placeholder="Max (₹)"
              />
            </SidebarInputWrap>
          </InlineFields>
          <ApplyFiltersButton
            type="button"
            onClick={() => {
              setReserveRange(
                formatBudgetRangeText(
                  minReserve ? String(minReserve) : "",
                  maxReserve ? String(maxReserve) : "",
                ),
              );
              setMobilePanel(null);
            }}
          >
            Apply Reserve Range
          </ApplyFiltersButton>
        </MobileAuctionDropdownPanel>
      );
    }

    if (mobilePanel === "filters") {
      return (
        <MobileAuctionDropdownPanel>
          <MobileAuctionDropdownTitle>More Filters</MobileAuctionDropdownTitle>
          <FieldStack>
            {filters.statuses.map((item) => (
              <MobileAuctionDropdownOption
                key={item.label}
                type="button"
                $active={selectedStatuses.includes(item.label)}
                onClick={() =>
                  toggleItem(selectedStatuses, item.label, setSelectedStatuses)
                }
              >
                <span>{item.label}</span>
                <span>({item.count})</span>
              </MobileAuctionDropdownOption>
            ))}
          </FieldStack>
          <InlineFields>
            <SidebarInputWrap
              role="button"
              tabIndex={0}
              onClick={() => openDatePicker(mobileFromDateRef)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  openDatePicker(mobileFromDateRef);
                }
              }}
            >
              <SidebarInput
                ref={mobileFromDateRef}
                type="date"
                value={fromDate}
                onChange={(event) => setFromDate(event.target.value)}
                placeholder="From Date"
              />
              <SearchControlIcon>
                <CalendarIcon />
              </SearchControlIcon>
            </SidebarInputWrap>
            <InlineDash />
            <SidebarInputWrap
              role="button"
              tabIndex={0}
              onClick={() => openDatePicker(mobileToDateRef)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  openDatePicker(mobileToDateRef);
                }
              }}
            >
              <SidebarInput
                ref={mobileToDateRef}
                type="date"
                value={toDate}
                onChange={(event) => setToDate(event.target.value)}
                placeholder="To Date"
              />
              <SearchControlIcon>
                <CalendarIcon />
              </SearchControlIcon>
            </SidebarInputWrap>
          </InlineFields>
          <ApplyFiltersButton type="button" onClick={applyMobileSearch}>
            Apply Filters
          </ApplyFiltersButton>
        </MobileAuctionDropdownPanel>
      );
    }

    return null;
  };

  return (
    <AuctionsPageShell>
      <NavWrap>
        <Navbar links={siteNavbar.links} ctaLabel={siteNavbar.ctaLabel} />
      </NavWrap>

      <AuctionsInner>
        <DesktopAuctionsView>
          <HeroSection>
            <HeroGrid>
              <HeroCopy>
                <HeroTitle>{hero.title}</HeroTitle>
                <HeroDescription>{hero.description}</HeroDescription>

                <HeroHighlights>
                  {hero.highlights.map((item) => (
                    <HighlightItem key={item.title}>
                      <HighlightIcon>
                        <HeroHighlightIcon type={item.icon} />
                      </HighlightIcon>
                      <div>
                        <HighlightTitle>{item.title}</HighlightTitle>
                        <HighlightText>{item.text}</HighlightText>
                      </div>
                    </HighlightItem>
                  ))}
                </HeroHighlights>
              </HeroCopy>

              <HeroVisual>
                <HeroImage src={hero.image} alt={hero.imageAlt} />
              </HeroVisual>
            </HeroGrid>
          </HeroSection>

          <SearchPanel>
            <SearchGrid>
              <SearchField>
                <SearchLabel>Search Location</SearchLabel>
                <SearchInputWrap>
                  <SearchInput
                    value={heroLocation}
                    onChange={(event) => setHeroLocation(event.target.value)}
                    placeholder="Enter city, locality or landmark"
                  />
                  <SearchControlIcon>
                    <SearchIcon />
                  </SearchControlIcon>
                </SearchInputWrap>
              </SearchField>

              <SearchField>
                <SearchLabel>Property Type</SearchLabel>
                <SearchSelectWrap>
                  <select
                    value={propertyType}
                    onChange={(event) => setPropertyType(event.target.value)}
                  >
                    {search.propertyTypes.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <SearchSelectIcon>
                    <ChevronDownIcon />
                  </SearchSelectIcon>
                </SearchSelectWrap>
              </SearchField>

              <SearchField>
                <SearchLabel>Auction Type</SearchLabel>
                <SearchSelectWrap>
                  <select
                    value={auctionType}
                    onChange={(event) => setAuctionType(event.target.value)}
                  >
                    {search.auctionTypes.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <SearchSelectIcon>
                    <ChevronDownIcon />
                  </SearchSelectIcon>
                </SearchSelectWrap>
              </SearchField>

              <SearchField>
                <SearchLabel>Reserve Price</SearchLabel>
                <SearchInputWrap>
                  <SearchInput
                    value={reserveRange}
                    onChange={(event) => setReserveRange(event.target.value)}
                    placeholder="Min  -  Max"
                  />
                  <SearchControlIcon>
                    <RupeeIcon />
                  </SearchControlIcon>
                </SearchInputWrap>
              </SearchField>

              <SearchButton type="button" onClick={handleHeroSearch}>
                Search Auctions
              </SearchButton>
            </SearchGrid>

            <SearchBottomRow>
              <PopularSearches>
                <strong>Popular Searches:</strong>
                {search.popularSearches.map((item) => (
                  <SearchChip
                    key={item}
                    type="button"
                    onClick={() => setActivePopularSearch(item)}
                    style={{
                      opacity: activePopularSearch === item ? 1 : 0.84,
                    }}
                  >
                    {item}
                  </SearchChip>
                ))}
              </PopularSearches>

              <SortTools>
                <ViewButtons>
                  <ViewButton
                    type="button"
                    $active={viewMode === "grid"}
                    onClick={() => setViewMode("grid")}
                  >
                    <GridIcon />
                  </ViewButton>
                  <ViewButton
                    type="button"
                    $active={viewMode === "list"}
                    onClick={() => setViewMode("list")}
                  >
                    <ListIcon />
                  </ViewButton>
                </ViewButtons>
              </SortTools>
            </SearchBottomRow>
          </SearchPanel>

          <ContentSection>
            <ContentGrid>
              <Sidebar>
                <SidebarHeader>
                  <SidebarTitle>Filters</SidebarTitle>
                  <ClearButton type="button" onClick={clearAllFilters}>
                    Clear All
                  </ClearButton>
                </SidebarHeader>

                <FilterSection>
                  <FilterTitle>Auction Type</FilterTitle>
                  <CheckboxList>
                    {filters.auctionTypes.map((item) => (
                      <FilterRow
                        key={item.label}
                        $active={selectedAuctionTypes.includes(item.label)}
                        onClick={(event) => {
                          event.preventDefault();
                          toggleItem(
                            selectedAuctionTypes,
                            item.label,
                            setSelectedAuctionTypes,
                          );
                        }}
                      >
                        <FilterLabelWrap>
                          <HiddenCheckbox
                            type="checkbox"
                            checked={selectedAuctionTypes.includes(item.label)}
                            readOnly
                          />
                          <CheckboxMark
                            $checked={selectedAuctionTypes.includes(item.label)}
                          />
                          <span>{item.label}</span>
                        </FilterLabelWrap>
                        <FilterCount>({item.count})</FilterCount>
                      </FilterRow>
                    ))}
                  </CheckboxList>
                </FilterSection>

                <FilterSection>
                  <FilterTitle>Property Type</FilterTitle>
                  <CheckboxList>
                    {filters.propertyTypes.map((item) => (
                      <FilterRow
                        key={item.label}
                        onClick={(event) => {
                          event.preventDefault();
                          toggleItem(
                            selectedPropertyTypes,
                            item.label,
                            setSelectedPropertyTypes,
                          );
                        }}
                      >
                        <FilterLabelWrap>
                          <HiddenCheckbox
                            type="checkbox"
                            checked={selectedPropertyTypes.includes(item.label)}
                            readOnly
                          />
                          <FilterIcon
                            $active={selectedPropertyTypes.includes(item.label)}
                          >
                            <PropertyTypeIcon type={item.icon} />
                          </FilterIcon>
                          <span>{item.label}</span>
                        </FilterLabelWrap>
                        <FilterCount>({item.count})</FilterCount>
                      </FilterRow>
                    ))}
                  </CheckboxList>
                </FilterSection>

                <FilterSection>
                  <FilterTitle>Location</FilterTitle>
                  <FieldStack>
                    <SidebarInputWrap>
                      <SidebarInput
                        value={searchLocation}
                        onChange={(event) =>
                          setSearchLocation(event.target.value)
                        }
                        placeholder="Search location"
                      />
                      <SearchControlIcon>
                        <SearchIcon />
                      </SearchControlIcon>
                    </SidebarInputWrap>
                  </FieldStack>
                </FilterSection>

                <FilterSection>
                  <FilterTitle>Price Range (Reserve Price)</FilterTitle>
                  <InlineFields>
                    <SidebarInputWrap>
                      <SidebarInput
                        value={minReserve}
                        onChange={(event) =>
                          setMinReserve(event.target.value.replace(/\D/g, ""))
                        }
                        placeholder="Min (₹)"
                      />
                    </SidebarInputWrap>
                    <InlineDash>-</InlineDash>
                    <SidebarInputWrap>
                      <SidebarInput
                        value={maxReserve}
                        onChange={(event) =>
                          setMaxReserve(event.target.value.replace(/\D/g, ""))
                        }
                        placeholder="Max (₹)"
                      />
                    </SidebarInputWrap>
                  </InlineFields>
                </FilterSection>

                <FilterSection>
                  <FilterTitle>Auction Date</FilterTitle>
                  <InlineFields>
                    <SidebarInputWrap
                      role="button"
                      tabIndex={0}
                      onClick={() => openDatePicker(fromDateRef)}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault();
                          openDatePicker(fromDateRef);
                        }
                      }}
                    >
                      <SidebarInput
                        ref={fromDateRef}
                        type="date"
                        value={fromDate}
                        onChange={(event) => setFromDate(event.target.value)}
                        placeholder="From Date"
                      />
                      <SearchControlIcon>
                        <CalendarIcon />
                      </SearchControlIcon>
                    </SidebarInputWrap>
                    <InlineDash />
                    <SidebarInputWrap
                      role="button"
                      tabIndex={0}
                      onClick={() => openDatePicker(toDateRef)}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault();
                          openDatePicker(toDateRef);
                        }
                      }}
                    >
                      <SidebarInput
                        ref={toDateRef}
                        type="date"
                        value={toDate}
                        onChange={(event) => setToDate(event.target.value)}
                        placeholder="To Date"
                      />
                      <SearchControlIcon>
                        <CalendarIcon />
                      </SearchControlIcon>
                    </SidebarInputWrap>
                  </InlineFields>
                </FilterSection>

                <FilterSection>
                  <FilterTitle>Status</FilterTitle>
                  <CheckboxList>
                    {filters.statuses.map((item) => (
                      <FilterRow
                        key={item.label}
                        $active={selectedStatuses.includes(item.label)}
                        onClick={(event) => {
                          event.preventDefault();
                          toggleItem(
                            selectedStatuses,
                            item.label,
                            setSelectedStatuses,
                          );
                        }}
                      >
                        <FilterLabelWrap>
                          <HiddenCheckbox
                            type="checkbox"
                            checked={selectedStatuses.includes(item.label)}
                            readOnly
                          />
                          <CheckboxMark
                            $checked={selectedStatuses.includes(item.label)}
                          />
                          <span>{item.label}</span>
                        </FilterLabelWrap>
                        <FilterCount>({item.count})</FilterCount>
                      </FilterRow>
                    ))}
                  </CheckboxList>
                </FilterSection>

                <ApplyFiltersButton type="button" onClick={applyFilters}>
                  Apply Filters
                </ApplyFiltersButton>
              </Sidebar>

              <ResultsColumn>
                <ResultsHeader>
                  <span>{filteredListings.length}</span> Auctions Found
                </ResultsHeader>

                <ResultsList>
                  {filteredListings.map((listing) => (
                    <ResultCard
                      key={listing.id}
                      role="link"
                      tabIndex={0}
                      aria-label={`Open details for ${listing.title}`}
                      onClick={() => handleAuctionCardOpen(listing.id)}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault();
                          handleAuctionCardOpen(listing.id);
                        }
                      }}
                    >
                      <ResultCardGrid>
                        <ResultFigure>
                          <ResultImage
                            src={listing.image}
                            alt={listing.imageAlt}
                          />
                          <StatusBadge $tone={listing.statusTone}>
                            {listing.status}
                          </StatusBadge>
                          <FavoriteButton
                            type="button"
                            aria-label="Save auction"
                            onClick={(event) => event.stopPropagation()}
                            onKeyDown={(event) => event.stopPropagation()}
                          >
                            <HeartIcon />
                          </FavoriteButton>
                        </ResultFigure>

                        <ResultBody>
                          <ResultTitle>{listing.title}</ResultTitle>
                          <ResultLocation>
                            <LocationPinIcon />
                            {listing.location}
                          </ResultLocation>

                          <ResultSpecs>
                            {listing.specs.map((spec) => (
                              <ResultSpec key={spec}>
                                <SpecIcon label={spec} />
                                <span>{spec}</span>
                              </ResultSpec>
                            ))}
                          </ResultSpecs>

                          <MetricsRow>
                            <MetricBlock>
                              <MetricLabel>Reserve Price</MetricLabel>
                              <MetricValue $accent>
                                {listing.reservePrice}
                              </MetricValue>
                            </MetricBlock>
                            <MetricBlock>
                              <MetricLabel>EMD</MetricLabel>
                              <MetricValue>{listing.emd}</MetricValue>
                            </MetricBlock>
                            <MetricBlock>
                              <MetricLabel>
                                {listing.countdownSeed
                                  ? "Auction Ends In"
                                  : "Auction Date"}
                              </MetricLabel>
                              {listing.countdownSeed ? (
                                <CountdownRow>
                                  {getCountdownItems(
                                    countdownTargets[listing.id],
                                    now,
                                  ).map((item) => (
                                    <CountdownBox key={item.unit}>
                                      <CountdownValue>
                                        {item.value}
                                      </CountdownValue>
                                      <CountdownLabel>
                                        {item.unit}
                                      </CountdownLabel>
                                    </CountdownBox>
                                  ))}
                                </CountdownRow>
                              ) : (
                                <MetricInline>
                                  <span>{listing.auctionDate}</span>
                                  <span>|</span>
                                  <span>{listing.auctionTime}</span>
                                </MetricInline>
                              )}
                            </MetricBlock>
                          </MetricsRow>

                          <ResultFooter>
                            <BankInfo>
                              <span>{listing.bank}</span>
                              <VerifiedMark>
                                <VerifiedIcon />
                                Verified
                              </VerifiedMark>
                            </BankInfo>

                            <ViewDetailsButton
                              type="button"
                              onClick={(event) => {
                                event.stopPropagation();
                                handleAuctionCardOpen(listing.id);
                              }}
                            >
                              View Details
                            </ViewDetailsButton>
                          </ResultFooter>
                        </ResultBody>
                      </ResultCardGrid>
                    </ResultCard>
                  ))}
                </ResultsList>
              </ResultsColumn>

              <RightRail>
                <SideCard>
                  <SideTitle>How Auctions Work?</SideTitle>
                  <StepsList>
                    {rightPanel.steps.map((item) => (
                      <StepItem key={item.title}>
                        <StepIcon>
                          <StepListIcon type={item.icon} />
                        </StepIcon>
                        <div>
                          <StepHeading>
                            {item.number} {item.title}
                          </StepHeading>
                          <StepText>{item.text}</StepText>
                        </div>
                      </StepItem>
                    ))}
                  </StepsList>

                  <SideButton type="button">View Auction Guide</SideButton>
                </SideCard>

                <SideCard>
                  <SideTitle>Why Choose Our Auctions?</SideTitle>
                  <ReasonsList>
                    {rightPanel.reasons.map((item) => (
                      <ReasonItem key={item}>
                        <ReasonDot>
                          <CheckIcon />
                        </ReasonDot>
                        <span>{item}</span>
                      </ReasonItem>
                    ))}
                  </ReasonsList>
                </SideCard>

                <DarkSideCard>
                  <DarkCardHeader>
                    <SideTitle $dark>
                      Never Miss
                      <br />
                      Great Deals!
                    </SideTitle>
                    <DarkCardIcon>
                      <BellIcon />
                    </DarkCardIcon>
                  </DarkCardHeader>
                  <DarkCardText>
                    Get notified about new auctions matching your preferences.
                  </DarkCardText>
                  <SideButton type="button" $dark>
                    Set Auction Alerts
                  </SideButton>
                </DarkSideCard>
              </RightRail>
            </ContentGrid>
          </ContentSection>

          <StatsStrip>
            {stats.map((item) => (
              <StatCard key={item.label}>
                <StatIcon>
                  <StatsIcon type={item.icon} />
                </StatIcon>
                <div>
                  <StatValue>{item.value}</StatValue>
                  <StatLabel>{item.label}</StatLabel>
                </div>
              </StatCard>
            ))}
          </StatsStrip>

          <TrustStrip>
            <TrustGrid>
              {trustStrip.map((item) => (
                <TrustItem key={item.title}>
                  <TrustIcon>
                    <TrustItemIcon type={item.icon} />
                  </TrustIcon>
                  <div>
                    <TrustTitle>{item.title}</TrustTitle>
                    <TrustText>{item.text}</TrustText>
                  </div>
                </TrustItem>
              ))}
            </TrustGrid>
          </TrustStrip>
        </DesktopAuctionsView>

        <MobileAuctionsView>
          <MobileAuctionHeroCard>
            <MobileAuctionHeroTop>
              <MobileAuctionHeroCopy>
                <MobileAuctionHeroTitle>
                  Property
                  <span>Auctions</span>
                </MobileAuctionHeroTitle>
                <MobileAuctionHeroDescription>
                  Verified bank & legal auctions. Transparent information.
                  Better opportunities.
                </MobileAuctionHeroDescription>
              </MobileAuctionHeroCopy>

              <MobileAuctionHeroVisual>
                <MobileAuctionHeroImage src={hero.image} alt={hero.imageAlt} />
              </MobileAuctionHeroVisual>
            </MobileAuctionHeroTop>
          </MobileAuctionHeroCard>

          <MobileAuctionHighlightsPanel>
            {mobileHeroHighlights.map((item) => (
              <MobileAuctionHighlight key={item.title}>
                <MobileAuctionHighlightIcon>
                  <HeroHighlightIcon type={item.icon} />
                </MobileAuctionHighlightIcon>
                <MobileAuctionHighlightTitle>
                  {item.title}
                </MobileAuctionHighlightTitle>
                <MobileAuctionHighlightText>
                  {item.text}
                </MobileAuctionHighlightText>
              </MobileAuctionHighlight>
            ))}
          </MobileAuctionHighlightsPanel>

          <MobileAuctionSearchPanel>
            <MobileAuctionSearchBar>
              <MobileAuctionSearchInputWrap>
                <MobileAuctionSearchIcon>
                  <SearchIcon />
                </MobileAuctionSearchIcon>
                <MobileAuctionSearchInput
                  value={heroLocation}
                  onChange={(event) => setHeroLocation(event.target.value)}
                  placeholder="Search city, locality or landmark"
                />
              </MobileAuctionSearchInputWrap>
              <MobileAuctionFilterToggle
                type="button"
                aria-label="More filters"
                onClick={() =>
                  setMobilePanel((current) =>
                    current === "filters" ? null : "filters",
                  )
                }
              >
                <FilterAdjustmentsIcon />
              </MobileAuctionFilterToggle>
            </MobileAuctionSearchBar>

            <MobileAuctionSearchGrid>
              <MobileAuctionSearchField>
                <MobileAuctionFieldIcon>
                  <ApartmentIcon />
                </MobileAuctionFieldIcon>
                <MobileAuctionFieldBody>
                  <MobileAuctionFieldLabel>
                    Property Type
                  </MobileAuctionFieldLabel>
                  <MobileAuctionFieldValue>
                    {mobilePropertyTypeLabel}
                  </MobileAuctionFieldValue>
                </MobileAuctionFieldBody>
                <MobileAuctionFieldAction
                  type="button"
                  onClick={() =>
                    setMobilePanel((current) =>
                      current === "propertyType" ? null : "propertyType",
                    )
                  }
                >
                  <ChevronDownIcon />
                </MobileAuctionFieldAction>
              </MobileAuctionSearchField>

              <MobileAuctionSearchField>
                <MobileAuctionFieldIcon>
                  <AuctionBidIcon />
                </MobileAuctionFieldIcon>
                <MobileAuctionFieldBody>
                  <MobileAuctionFieldLabel>
                    Auction Type
                  </MobileAuctionFieldLabel>
                  <MobileAuctionFieldValue>
                    {mobileAuctionTypeLabel}
                  </MobileAuctionFieldValue>
                </MobileAuctionFieldBody>
                <MobileAuctionFieldAction
                  type="button"
                  onClick={() =>
                    setMobilePanel((current) =>
                      current === "auctionType" ? null : "auctionType",
                    )
                  }
                >
                  <ChevronDownIcon />
                </MobileAuctionFieldAction>
              </MobileAuctionSearchField>

              <MobileAuctionSearchField>
                <MobileAuctionFieldIcon>
                  <RupeeIcon />
                </MobileAuctionFieldIcon>
                <MobileAuctionFieldBody>
                  <MobileAuctionFieldLabel>
                    Reserve Price
                  </MobileAuctionFieldLabel>
                  <MobileAuctionFieldValue>
                    {mobileReserveLabel}
                  </MobileAuctionFieldValue>
                </MobileAuctionFieldBody>
                <MobileAuctionFieldAction
                  type="button"
                  onClick={() =>
                    setMobilePanel((current) =>
                      current === "reserve" ? null : "reserve",
                    )
                  }
                >
                  <RupeeIcon />
                </MobileAuctionFieldAction>
              </MobileAuctionSearchField>
            </MobileAuctionSearchGrid>

            {renderMobilePanel()}

            <MobileAuctionPopularRow>
              <MobileAuctionPopularHeader>
                <span>Popular Searches</span>
                <MobileAuctionPopularMore
                  type="button"
                  onClick={() =>
                    setMobilePanel((current) =>
                      current === "filters" ? null : "filters",
                    )
                  }
                >
                  <span>More</span>
                  <ChevronDownIcon />
                </MobileAuctionPopularMore>
              </MobileAuctionPopularHeader>

              <MobileAuctionPopularChips>
                {mobilePopularSearches.map((item) => (
                  <MobileAuctionPopularChip
                    key={item}
                    type="button"
                    $active={activePopularSearch === item}
                    onClick={() => {
                      setActivePopularSearch(item);
                      setHeroLocation(item);
                      setAppliedFilters({
                        selectedAuctionTypes,
                        selectedPropertyTypes:
                          propertyType !== search.propertyTypes[0]
                            ? [propertyType]
                            : [],
                        selectedStatuses,
                        searchLocation: item,
                        minReserve,
                        maxReserve,
                        fromDate,
                        toDate,
                      });
                      setMobilePanel(null);
                    }}
                  >
                    {item}
                  </MobileAuctionPopularChip>
                ))}
              </MobileAuctionPopularChips>
            </MobileAuctionPopularRow>
          </MobileAuctionSearchPanel>

          <MobileAuctionResultsSection>
            <MobileAuctionResultsHeader>
              <MobileAuctionResultsCount>
                {filteredListings.length || auctionsPageContent.resultsCount}{" "}
                Auctions Found
              </MobileAuctionResultsCount>
              <MobileAuctionSortTools>
                <MobileAuctionSortLabel>
                  Sort: <strong>{sortOption}</strong>
                </MobileAuctionSortLabel>
                <MobileAuctionIconButtons>
                  <MobileAuctionIconButton
                    type="button"
                    $active={viewMode === "grid"}
                    onClick={() => setViewMode("grid")}
                  >
                    <GridIcon />
                  </MobileAuctionIconButton>
                  <MobileAuctionIconButton
                    type="button"
                    $active={viewMode === "list"}
                    onClick={() => setViewMode("list")}
                  >
                    <ListIcon />
                  </MobileAuctionIconButton>
                </MobileAuctionIconButtons>
              </MobileAuctionSortTools>
            </MobileAuctionResultsHeader>

            <MobileAuctionList>
              {mobileFilteredListings.map((listing) => (
                <MobileAuctionCard
                  key={listing.id}
                  role="link"
                  tabIndex={0}
                  aria-label={`Open details for ${listing.title}`}
                  onClick={() => handleAuctionCardOpen(listing.id)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      handleAuctionCardOpen(listing.id);
                    }
                  }}
                >
                  <MobileAuctionFigure>
                    <MobileAuctionImage
                      src={listing.image}
                      alt={listing.imageAlt || listing.title}
                    />
                    <MobileAuctionStatus $tone={listing.statusTone}>
                      {listing.status}
                    </MobileAuctionStatus>
                    <MobileAuctionFavorite
                      type="button"
                      aria-label="Save auction"
                      onClick={(event) => event.stopPropagation()}
                      onKeyDown={(event) => event.stopPropagation()}
                    >
                      <HeartIcon />
                    </MobileAuctionFavorite>
                  </MobileAuctionFigure>

                  <MobileAuctionCardBody>
                    <MobileAuctionTitle>{listing.title}</MobileAuctionTitle>
                    <MobileAuctionLocation>
                      <LocationPinIcon />
                      {listing.location}
                    </MobileAuctionLocation>

                    <MobileAuctionSpecs>
                      {listing.specs.map((spec) => (
                        <MobileAuctionSpec key={spec}>
                          <SpecIcon label={spec} />
                          <span>{spec}</span>
                        </MobileAuctionSpec>
                      ))}
                    </MobileAuctionSpecs>

                    <MobileAuctionMetrics>
                      <MobileAuctionMetric>
                        <MobileAuctionMetricLabel>
                          Reserve Price
                        </MobileAuctionMetricLabel>
                        <MobileAuctionMetricValue $accent>
                          {listing.reservePrice.replace("â‚¹", "₹")}
                        </MobileAuctionMetricValue>
                      </MobileAuctionMetric>
                      <MobileAuctionMetric>
                        <MobileAuctionMetricLabel>EMD</MobileAuctionMetricLabel>
                        <MobileAuctionMetricValue>
                          {listing.emd.replace("â‚¹", "₹")}
                        </MobileAuctionMetricValue>
                      </MobileAuctionMetric>
                      <MobileAuctionMetric>
                        <MobileAuctionMetricLabel>
                          {listing.countdownSeed
                            ? "Auction Ends In"
                            : "Auction Date"}
                        </MobileAuctionMetricLabel>
                        {listing.countdownSeed ? (
                          <MobileAuctionCountdown>
                            {getCountdownItems(
                              countdownTargets[listing.id],
                              now,
                            ).map((item) => (
                              <MobileAuctionCountdownBox key={item.unit}>
                                <MobileAuctionCountdownValue>
                                  {item.value}
                                </MobileAuctionCountdownValue>
                                <MobileAuctionCountdownLabel>
                                  {item.unit}
                                </MobileAuctionCountdownLabel>
                              </MobileAuctionCountdownBox>
                            ))}
                          </MobileAuctionCountdown>
                        ) : (
                          <MobileAuctionMetricInline>
                            <span>{listing.auctionDate}</span>
                            <span>|</span>
                            <span>{listing.auctionTime}</span>
                          </MobileAuctionMetricInline>
                        )}
                      </MobileAuctionMetric>
                    </MobileAuctionMetrics>

                    <MobileAuctionFooter>
                      <MobileAuctionBank>
                        <span>{listing.bank}</span>
                        <MobileAuctionVerified>
                          <VerifiedIcon />
                          Verified
                        </MobileAuctionVerified>
                      </MobileAuctionBank>

                      <MobileAuctionDetailsButton
                        type="button"
                        onClick={(event) => {
                          event.stopPropagation();
                          handleAuctionCardOpen(listing.id);
                        }}
                      >
                        View Details
                      </MobileAuctionDetailsButton>
                    </MobileAuctionFooter>
                  </MobileAuctionCardBody>
                </MobileAuctionCard>
              ))}
            </MobileAuctionList>
          </MobileAuctionResultsSection>

          <MobileAuctionAlertCard>
            <MobileAuctionAlertCopy>
              <MobileAuctionAlertIcon>
                <BellOutlineIcon />
              </MobileAuctionAlertIcon>
              <div>
                <MobileAuctionAlertTitle>
                  Never Miss
                  <br />
                  Great Deals!
                </MobileAuctionAlertTitle>
                <MobileAuctionAlertText>
                  Get notified about new auctions matching your preferences.
                </MobileAuctionAlertText>
              </div>
            </MobileAuctionAlertCopy>

            <MobileAuctionAlertButton type="button">
              <span>Set Auction Alerts</span>
              <ArrowRightIcon />
            </MobileAuctionAlertButton>
          </MobileAuctionAlertCard>

          <MobileAuctionStatsStrip>
            {stats.map((item) => (
              <MobileAuctionStatCard key={item.label}>
                <MobileAuctionStatIcon>
                  <StatsIcon type={item.icon} />
                </MobileAuctionStatIcon>
                <MobileAuctionStatValue>
                  {String(item.value).replace("â‚¹", "₹")}
                </MobileAuctionStatValue>
                <MobileAuctionStatLabel>{item.label}</MobileAuctionStatLabel>
              </MobileAuctionStatCard>
            ))}
          </MobileAuctionStatsStrip>

          <MobileAuctionTrustPanel>
            <MobileAuctionTrustGrid>
              {trustStrip.map((item) => (
                <MobileAuctionTrustItem key={item.title}>
                  <MobileAuctionTrustIcon>
                    <TrustItemIcon type={item.icon} />
                  </MobileAuctionTrustIcon>
                  <MobileAuctionTrustTitle>
                    {item.title}
                  </MobileAuctionTrustTitle>
                  <MobileAuctionTrustText>{item.text}</MobileAuctionTrustText>
                </MobileAuctionTrustItem>
              ))}
            </MobileAuctionTrustGrid>
          </MobileAuctionTrustPanel>
        </MobileAuctionsView>
      </AuctionsInner>
    </AuctionsPageShell>
  );
}

function HeroHighlightIcon({ type }) {
  switch (type) {
    case "alerts":
      return <BellOutlineIcon />;
    case "verified":
      return <ShieldCheckIcon />;
    case "process":
      return <DocumentBadgeIcon />;
    default:
      return <OpportunityIcon />;
  }
}

function PropertyTypeIcon({ type }) {
  switch (type) {
    case "apartment":
      return <ApartmentIcon />;
    case "villa":
      return <VillaIcon />;
    case "plot":
      return <PlotIcon />;
    case "commercial":
      return <CommercialIcon />;
    case "industrial":
      return <IndustrialIcon />;
    default:
      return <HomeIcon />;
  }
}

function StepListIcon({ type }) {
  switch (type) {
    case "search":
      return <SearchIcon />;
    case "review":
      return <ReviewIcon />;
    case "participate":
      return <AuctionBidIcon />;
    default:
      return <CompleteIcon />;
  }
}

function StatsIcon({ type }) {
  switch (type) {
    case "verified":
      return <ShieldCheckIcon />;
    case "bank":
      return <BankIcon />;
    case "value":
      return <ValueIcon />;
    case "buyers":
      return <UsersIcon />;
    default:
      return <ChatCheckIcon />;
  }
}

function TrustItemIcon({ type }) {
  switch (type) {
    case "lock":
      return <LockIcon />;
    case "opportunity":
      return <OpportunityIcon />;
    case "support":
      return <UsersIcon />;
    case "document":
      return <DocumentBadgeIcon />;
    default:
      return <ShieldCheckIcon />;
  }
}

function SpecIcon({ label }) {
  if (label.includes("BHK")) {
    return <BedIcon />;
  }

  if (label.includes("Sq") || label.includes("Sq.")) {
    return <AreaIcon />;
  }

  return <ListingTypeIcon />;
}

function ChevronDownIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4 6.5L8 10L12 6.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="9" cy="9" r="5.6" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M13.2 13.2L16.5 16.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function RupeeIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.5 4.5H13.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M6.5 8H13.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M6.5 4.5V4.5C9.26 4.5 11.5 6.74 11.5 9.5V9.5H6.5L12.5 15.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GridIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="3.5"
        y="3.5"
        width="5"
        height="5"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <rect
        x="11.5"
        y="3.5"
        width="5"
        height="5"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <rect
        x="3.5"
        y="11.5"
        width="5"
        height="5"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <rect
        x="11.5"
        y="11.5"
        width="5"
        height="5"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function ListIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="4.5" cy="5.5" r="1" fill="currentColor" />
      <circle cx="4.5" cy="10" r="1" fill="currentColor" />
      <circle cx="4.5" cy="14.5" r="1" fill="currentColor" />
      <path
        d="M7.5 5.5H16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M7.5 10H16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M7.5 14.5H16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LocationPinIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 13.6C10.54 10.76 11.8 8.63 11.8 7.14C11.8 5.04 10.1 3.35 8 3.35C5.9 3.35 4.2 5.04 4.2 7.14C4.2 8.63 5.46 10.76 8 13.6Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <circle cx="8" cy="7.2" r="1.4" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function BedIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.5 8.5V12.2"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M13.5 8.5V12.2"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path d="M2.5 9H13.5V11H2.5V9Z" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M4 6.2H7.2C8.08 6.2 8.8 6.92 8.8 7.8V9H4V6.2Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M8.8 6.8H11.2C12.08 6.8 12.8 7.52 12.8 8.4V9H8.8V6.8Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  );
}

function AreaIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="3"
        y="3"
        width="10"
        height="10"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M6 3V5.4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M10 3V5.4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M3 6H5.4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M10.6 10H13"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ListingTypeIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3 12.5V6.8L8 3.5L13 6.8V12.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M6.2 12.5V9.6H9.8V12.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 16C13.78 12.96 15.67 10.74 15.67 8.34C15.67 6.66 14.36 5.35 12.68 5.35C11.56 5.35 10.65 5.88 10 6.9C9.35 5.88 8.44 5.35 7.32 5.35C5.64 5.35 4.33 6.66 4.33 8.34C4.33 10.74 6.22 12.96 10 16Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function VerifiedIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="6" fill="currentColor" fillOpacity="0.14" />
      <path
        d="M5.2 8.1L7 9.9L10.8 6.1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="3.5"
        y="4.5"
        width="13"
        height="12"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M6.5 2.8V6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M13.5 2.8V6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M3.5 7.5H16.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function ShieldCheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 3.5L18 6V10.8C18 14.78 15.45 18.3 12 19.75C8.55 18.3 6 14.78 6 10.8V6L12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9.4 11.3L11.2 13.1L14.9 9.4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DocumentBadgeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="5.5"
        y="4.5"
        width="10.5"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M8.5 8H13.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M8.5 11H13.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle
        cx="17.5"
        cy="15.5"
        r="3"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M16.2 15.5L17.1 16.4L18.8 14.6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function OpportunityIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="9" cy="8.2" r="2.6" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M4.8 18.3C4.8 15.83 6.63 14.1 9 14.1C11.37 14.1 13.2 15.83 13.2 18.3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M15.5 7.1V13.1"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M12.5 10.1H18.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.8 9L10 4.5L16.2 9V15.5H12.2V11.8H7.8V15.5H3.8V9Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ApartmentIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="5.2"
        y="3.5"
        width="9.6"
        height="12.8"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M8 6.3H8.01"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <path
        d="M12 6.3H12.01"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <path
        d="M8 9.6H8.01"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <path
        d="M12 9.6H12.01"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <path
        d="M9.2 16.3V12.9H10.8V16.3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function VillaIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.2 10L10 4.8L16.8 10V16H3.2V10Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 16V11.8H12.5V16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M13.8 6.6V4.8H15.6V8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlotIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.5 14.5L7 5.5L14.5 8L12 17L4.5 14.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M7.8 6.4L12.8 9.6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M6.6 10.6L11.6 13.8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CommercialIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="4"
        y="4"
        width="12"
        height="12"
        rx="1.6"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M7 7H13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M7 10H13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M7 13H10.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IndustrialIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.5 16V8.5L8 10.8V7.2L12.5 9.5V6L16.5 8.4V16H3.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M6.2 13.2H6.21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M9.5 13.2H9.51"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M12.8 13.2H12.81"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ReviewIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="5.5"
        y="4.5"
        width="11"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M8.5 8H13.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M8.5 11.5H13.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M16.5 16.5L19 19"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle
        cx="15.6"
        cy="15.6"
        r="3.2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function AuctionBidIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7 10.5L10 7.5L13 10.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 7.5V15.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M5.5 18.5H18.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M15.5 5.5H18.5V8.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.5 5.5L14.8 9.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CompleteIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M9 12.2L11.1 14.3L15.4 10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 4V2.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.5 6.3L4.9 8.7L9.5 4.1"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14 5.5C10.96 5.5 8.5 7.96 8.5 11V14.1C8.5 15.24 8.13 16.34 7.45 17.25L6 19.2H22L20.55 17.25C19.87 16.34 19.5 15.24 19.5 14.1V11C19.5 7.96 17.04 5.5 14 5.5Z"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinejoin="round"
      />
      <path
        d="M11.8 21.2C12.2 22.26 13.02 22.8 14 22.8C14.98 22.8 15.8 22.26 16.2 21.2"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <circle
        cx="22.2"
        cy="19.3"
        r="2.2"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M24.8 21.8L26.3 23.3"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BankIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.5 9L12 5L19.5 9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 10.5V17"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M10 10.5V17"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M14 10.5V17"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M17.5 10.5V17"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M4.5 18.5H19.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ValueIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="6"
        y="4.5"
        width="10"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M9 8H13"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M9 11.2H13"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle
        cx="17.8"
        cy="15.5"
        r="3.2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="8.2" r="3" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M4.8 18.2C4.8 15.4 7.03 13.5 10 13.5C12.97 13.5 15.2 15.4 15.2 18.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M16.5 9.1C17.86 9.39 18.9 10.57 18.9 12.02C18.9 13.47 17.86 14.65 16.5 14.94"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ChatCheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 17.5V19.5L9.2 17.5H17C18.38 17.5 19.5 16.38 19.5 15V7.5C19.5 6.12 18.38 5 17 5H7C5.62 5 4.5 6.12 4.5 7.5V15C4.5 16.38 5.62 17.5 7 17.5H6Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 11.3L10.4 13.2L14.8 8.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="6"
        y="10"
        width="12"
        height="9"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M8.5 10V7.8C8.5 5.98 9.96 4.5 11.75 4.5H12.25C14.04 4.5 15.5 5.98 15.5 7.8V10"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M12 13.4V15.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BellOutlineIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 4.8C9.35 4.8 7.2 6.95 7.2 9.6V12.3C7.2 13.29 6.88 14.26 6.28 15.05L5 16.8H19L17.72 15.05C17.12 14.26 16.8 13.29 16.8 12.3V9.6C16.8 6.95 14.65 4.8 12 4.8Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M10.2 19C10.57 19.91 11.21 20.4 12 20.4C12.79 20.4 13.43 19.91 13.8 19"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function FilterAdjustmentsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5 7H19"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M7.5 12H16.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M10 17H14"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="9" cy="7" r="1.3" fill="currentColor" />
      <circle cx="14" cy="12" r="1.3" fill="currentColor" />
      <circle cx="11.5" cy="17" r="1.3" fill="currentColor" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3 8H13"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M8.8 3.8L13 8L8.8 12.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Auctions;
