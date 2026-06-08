import { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { siteNavbar } from "../../data/HomePageContent";
import { rentPageContent } from "../../data/RentPageContent";
import {
  buildPropertySearchQuery,
  matchesLocation,
  parseAmountInput,
} from "../../utils/propertySearch";
import { NavWrap } from "../Home/HomeStyles";
import {
  AreaInput,
  AreaInputs,
  BHKChip,
  BHKRow,
  CardAction,
  CheckBox,
  CheckItem,
  CheckList,
  CheckRow,
  ClearButton,
  CollapseBody,
  CollapseIcon,
  CollapseRow,
  ContentGrid,
  ContentSection,
  EmptyState,
  EmptyStateText,
  EmptyStateTitle,
  FavoriteButton,
  FilterBlock,
  FilterBlockTitle,
  FilterCount,
  FilterSidebar,
  HelpAction,
  HelpCard,
  HelpCardHeader,
  HelpCardIcon,
  HelpCardText,
  HelpCardTitle,
  HeroCopy,
  HeroDescription,
  HeroGrid,
  HeroSection,
  HeroStats,
  HeroTitle,
  HiddenCheckbox,
  ListingBadge,
  ListingBody,
  ListingCard,
  ListingFigure,
  ListingFooter,
  ListingImage,
  ListingLocation,
  ListingPrice,
  ListingSpecs,
  ListingSubPrice,
  ListingTitle,
  ListingsArea,
  ListingsGrid,
  ListingsHeader,
  PageInner,
  PopularRow,
  RangeLabels,
  RangeInput,
  RangeSliderWrap,
  RangeThumb,
  RangeTrack,
  RentPageShell,
  SearchBottomRow,
  SearchButton,
  SearchChip,
  SearchInput,
  SearchInputIcon,
  SearchInputWrap,
  SearchShell,
  SearchTopRow,
  SelectLabel,
  SelectDropdown,
  SelectDropdownHint,
  SelectDropdownMeta,
  SelectDropdownOption,
  SelectDropdownSection,
  SelectDropdownTitle,
  SelectValueRow,
  SelectWrap,
  SideColumn,
  SidebarHeader,
  SidebarTitle,
  SortLabel,
  SortRow,
  SortSelect,
  StatIcon,
  StatItem,
  StatLabel,
  StatValue,
  TrustGrid,
  TrustIcon,
  TrustItem,
  TrustStrip,
  TrustText,
  TrustTitle,
  ViewButton,
  ViewSwitch,
} from "./RentStyles";

function toggleSelection(values, nextValue) {
  return values.includes(nextValue)
    ? values.filter((value) => value !== nextValue)
    : [...values, nextValue];
}

function getRangePercent(value, min, max) {
  if (max <= min) {
    return 0;
  }

  return ((value - min) / (max - min)) * 100;
}

function formatBudgetValue(value) {
  if (value >= 100000) {
    const lakhs = value / 100000;
    const displayValue = Number.isInteger(lakhs) ? lakhs : lakhs.toFixed(1);
    return `Rs. ${displayValue} L`;
  }

  return `Rs. ${Math.round(value / 1000)} K`;
}

function getSelectionLabel(values, emptyLabel, suffix) {
  if (values.length === 0) {
    return emptyLabel;
  }

  if (values.length === 1) {
    return values[0];
  }

  return `${values.length} ${suffix}`;
}

function Rent() {
  const {
    hero,
    filters,
    listings,
    sideCards,
    trustStrip,
  } = rentPageContent;
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const searchControlsRef = useRef(null);
  const [budgetRange, setBudgetRange] = useState({
    min: filters.budget.minValue,
    max: filters.budget.maxValue,
  });
  const [selectedPropertyTypes, setSelectedPropertyTypes] = useState([]);
  const [selectedBhk, setSelectedBhk] = useState([]);
  const [areaRange, setAreaRange] = useState({
    min: filters.area.minValue,
    max: filters.area.maxValue,
  });
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [selectedPossessionStatuses, setSelectedPossessionStatuses] = useState(
    [],
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [openSections, setOpenSections] = useState({
    amenities: true,
    possessionStatus: true,
  });
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    function handlePointerDown(event) {
      if (
        searchControlsRef.current &&
        !searchControlsRef.current.contains(event.target)
      ) {
        setActiveDropdown(null);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
    };
  }, []);

  useEffect(() => {
    const location = searchParams.get("location") || "";
    const propertyType = searchParams.get("propertyType") || "";
    const minBudget = parseAmountInput(searchParams.get("minBudget"));
    const maxBudget = parseAmountInput(searchParams.get("maxBudget"));

    setSearchQuery(location);
    setSelectedPropertyTypes(
      propertyType && filters.propertyTypes.includes(propertyType)
        ? [propertyType]
        : [],
    );
    setBudgetRange({
      min:
        minBudget !== null
          ? Math.min(
              Math.max(minBudget, filters.budget.minValue),
              filters.budget.maxValue,
            )
          : filters.budget.minValue,
      max:
        maxBudget !== null
          ? Math.max(
              Math.min(maxBudget, filters.budget.maxValue),
              filters.budget.minValue,
            )
          : filters.budget.maxValue,
    });
  }, [filters.budget.maxValue, filters.budget.minValue, filters.propertyTypes, searchParams]);

  const budgetMinPercent = getRangePercent(
    budgetRange.min,
    filters.budget.minValue,
    filters.budget.maxValue,
  );
  const budgetMaxPercent = getRangePercent(
    budgetRange.max,
    filters.budget.minValue,
    filters.budget.maxValue,
  );
  const areaMinPercent = getRangePercent(
    areaRange.min,
    filters.area.minValue,
    filters.area.maxValue,
  );
  const areaMaxPercent = getRangePercent(
    areaRange.max,
    filters.area.minValue,
    filters.area.maxValue,
  );

  const filteredListings = listings.filter((listing) => {
    const matchesSearchQuery = matchesLocation(
      `${listing.title} ${listing.location}`,
      searchQuery,
    );
    const matchesBudget =
      listing.monthlyRent >= budgetRange.min &&
      listing.monthlyRent <= budgetRange.max;
    const matchesPropertyType =
      selectedPropertyTypes.length === 0 ||
      selectedPropertyTypes.includes(listing.propertyType);
    const matchesBhk =
      selectedBhk.length === 0 || selectedBhk.includes(listing.bhk);
    const matchesArea =
      listing.areaValue >= areaRange.min && listing.areaValue <= areaRange.max;
    const matchesAmenities =
      selectedAmenities.length === 0 ||
      selectedAmenities.every((amenity) =>
        listing.amenities.includes(amenity),
      );
    const matchesPossessionStatus =
      selectedPossessionStatuses.length === 0 ||
      selectedPossessionStatuses.includes(listing.possessionStatus);

    return (
      matchesSearchQuery &&
      matchesBudget &&
      matchesPropertyType &&
      matchesBhk &&
      matchesArea &&
      matchesAmenities &&
      matchesPossessionStatus
    );
  });

  const clearAllFilters = () => {
    setBudgetRange({
      min: filters.budget.minValue,
      max: filters.budget.maxValue,
    });
    setSelectedPropertyTypes([]);
    setSelectedBhk([]);
    setAreaRange({
      min: filters.area.minValue,
      max: filters.area.maxValue,
    });
    setSelectedAmenities([]);
    setSelectedPossessionStatuses([]);
    setOpenSections({
      amenities: true,
      possessionStatus: true,
    });
    setActiveDropdown(null);
  };

  const getCountLabel = (predicate) =>
    `(${listings.filter(predicate).length.toLocaleString("en-IN")})`;
  const budgetOptions = [
    {
      label: "All Budgets",
      min: filters.budget.minValue,
      max: filters.budget.maxValue,
    },
    {
      label: "Under Rs. 30 K",
      min: filters.budget.minValue,
      max: 30000,
    },
    {
      label: "Rs. 30 K - Rs. 60 K",
      min: 30000,
      max: 60000,
    },
    {
      label: "Rs. 60 K - Rs. 1 L",
      min: 60000,
      max: 100000,
    },
    {
      label: "Above Rs. 1 L",
      min: 100000,
      max: filters.budget.maxValue,
    },
  ];
  const isDefaultBudget =
    budgetRange.min === filters.budget.minValue &&
    budgetRange.max === filters.budget.maxValue;
  const budgetLabel = isDefaultBudget
    ? "All Budgets"
    : `${formatBudgetValue(budgetRange.min)} - ${formatBudgetValue(
        budgetRange.max,
      )}`;
  const propertyTypeLabel = getSelectionLabel(
    selectedPropertyTypes,
    "All Types",
    "Types",
  );
  const bhkLabel = getSelectionLabel(selectedBhk, "All BHK", "Selected");
  const moreFiltersCount =
    selectedAmenities.length + selectedPossessionStatuses.length;
  const moreFiltersLabel =
    moreFiltersCount > 0 ? `${moreFiltersCount} Active` : "More Filters";
  const toggleDropdown = (dropdownName) => {
    setActiveDropdown((current) =>
      current === dropdownName ? null : dropdownName,
    );
  };
  const handleTopSearch = () => {
    const searchQueryString = buildPropertySearchQuery({
      location: searchQuery,
      propertyType:
        selectedPropertyTypes.length === 1 ? selectedPropertyTypes[0] : "",
      minBudget:
        budgetRange.min > filters.budget.minValue ? String(budgetRange.min) : "",
      maxBudget:
        budgetRange.max < filters.budget.maxValue ? String(budgetRange.max) : "",
    });

    setActiveDropdown(null);
    navigate(searchQueryString ? `/rent?${searchQueryString}` : "/rent");
  };

  return (
    <RentPageShell>
      <NavWrap>
        <Navbar links={siteNavbar.links} ctaLabel={siteNavbar.ctaLabel} />
      </NavWrap>
      <PageInner>
        <HeroSection $backgroundImage={hero.backgroundImage}>
          <HeroGrid>
            <HeroCopy>
              <HeroTitle>{hero.title}</HeroTitle>
              <HeroDescription>{hero.description}</HeroDescription>
            </HeroCopy>

            <HeroStats>
              {hero.stats.map((stat) => (
                <StatItem key={stat.label}>
                  <StatIcon>
                    <HeroMetricIcon type={stat.icon} />
                  </StatIcon>
                  <StatValue>{stat.value}</StatValue>
                  <StatLabel>{stat.label}</StatLabel>
                </StatItem>
              ))}
            </HeroStats>
          </HeroGrid>

          <SearchShell>
            <SearchTopRow ref={searchControlsRef}>
              <SearchInputWrap>
                <SearchInput
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder={hero.searchPlaceholder}
                />
                <SearchInputIcon>
                  <SearchIcon />
                </SearchInputIcon>
              </SearchInputWrap>

              <SelectWrap>
                <SelectLabel>Property Type</SelectLabel>
                <SelectValueRow
                  type="button"
                  onClick={() => toggleDropdown("propertyType")}
                >
                  <span>{propertyTypeLabel}</span>
                  <CollapseIcon $open={activeDropdown === "propertyType"}>
                    <ChevronDownIcon />
                  </CollapseIcon>
                </SelectValueRow>
                {activeDropdown === "propertyType" ? (
                  <SelectDropdown>
                    <SelectDropdownSection>
                      {filters.propertyTypes.map((item) => (
                        <SelectDropdownOption
                          key={item}
                          type="button"
                          $active={selectedPropertyTypes.includes(item)}
                          onClick={() =>
                            setSelectedPropertyTypes((current) =>
                              toggleSelection(current, item),
                            )
                          }
                        >
                          <span>{item}</span>
                          <SelectDropdownMeta>
                            {getCountLabel(
                              (listing) => listing.propertyType === item,
                            )}
                          </SelectDropdownMeta>
                        </SelectDropdownOption>
                      ))}
                    </SelectDropdownSection>
                  </SelectDropdown>
                ) : null}
              </SelectWrap>

              <SelectWrap>
                <SelectLabel>Budget</SelectLabel>
                <SelectValueRow
                  type="button"
                  onClick={() => toggleDropdown("budget")}
                >
                  <span>{budgetLabel}</span>
                  <CollapseIcon $open={activeDropdown === "budget"}>
                    <ChevronDownIcon />
                  </CollapseIcon>
                </SelectValueRow>
                {activeDropdown === "budget" ? (
                  <SelectDropdown>
                    <SelectDropdownSection>
                      {budgetOptions.map((option) => (
                        <SelectDropdownOption
                          key={option.label}
                          type="button"
                          $active={
                            budgetRange.min === option.min &&
                            budgetRange.max === option.max
                          }
                          onClick={() => {
                            setBudgetRange({
                              min: option.min,
                              max: option.max,
                            });
                            setActiveDropdown(null);
                          }}
                        >
                          <span>{option.label}</span>
                        </SelectDropdownOption>
                      ))}
                    </SelectDropdownSection>
                    <SelectDropdownSection>
                      <SelectDropdownHint>
                        Use the left budget slider for a custom rent range.
                      </SelectDropdownHint>
                    </SelectDropdownSection>
                  </SelectDropdown>
                ) : null}
              </SelectWrap>

              <SelectWrap>
                <SelectLabel>BHK</SelectLabel>
                <SelectValueRow
                  type="button"
                  onClick={() => toggleDropdown("bhk")}
                >
                  <span>{bhkLabel}</span>
                  <CollapseIcon $open={activeDropdown === "bhk"}>
                    <ChevronDownIcon />
                  </CollapseIcon>
                </SelectValueRow>
                {activeDropdown === "bhk" ? (
                  <SelectDropdown>
                    <SelectDropdownSection>
                      {filters.bhk.map((item) => (
                        <SelectDropdownOption
                          key={item}
                          type="button"
                          $active={selectedBhk.includes(item)}
                          onClick={() =>
                            setSelectedBhk((current) =>
                              toggleSelection(current, item),
                            )
                          }
                        >
                          <span>{item}</span>
                        </SelectDropdownOption>
                      ))}
                    </SelectDropdownSection>
                  </SelectDropdown>
                ) : null}
              </SelectWrap>

              <SelectWrap>
                <SelectValueRow
                  type="button"
                  onClick={() => toggleDropdown("moreFilters")}
                >
                  <span>{moreFiltersLabel}</span>
                  <CollapseIcon $open={activeDropdown === "moreFilters"}>
                    <FilterAdjustIcon />
                  </CollapseIcon>
                </SelectValueRow>
                {activeDropdown === "moreFilters" ? (
                  <SelectDropdown>
                    <SelectDropdownSection>
                      <SelectDropdownTitle>Amenities</SelectDropdownTitle>
                      {filters.amenities.map((item) => (
                        <SelectDropdownOption
                          key={item}
                          type="button"
                          $active={selectedAmenities.includes(item)}
                          onClick={() =>
                            setSelectedAmenities((current) =>
                              toggleSelection(current, item),
                            )
                          }
                        >
                          <span>{item}</span>
                          <SelectDropdownMeta>
                            {getCountLabel((listing) =>
                              listing.amenities.includes(item),
                            )}
                          </SelectDropdownMeta>
                        </SelectDropdownOption>
                      ))}
                    </SelectDropdownSection>
                    <SelectDropdownSection>
                      <SelectDropdownTitle>Possession Status</SelectDropdownTitle>
                      {filters.possessionStatuses.map((item) => (
                        <SelectDropdownOption
                          key={item}
                          type="button"
                          $active={selectedPossessionStatuses.includes(item)}
                          onClick={() =>
                            setSelectedPossessionStatuses((current) =>
                              toggleSelection(current, item),
                            )
                          }
                        >
                          <span>{item}</span>
                          <SelectDropdownMeta>
                            {getCountLabel(
                              (listing) => listing.possessionStatus === item,
                            )}
                          </SelectDropdownMeta>
                        </SelectDropdownOption>
                      ))}
                    </SelectDropdownSection>
                  </SelectDropdown>
                ) : null}
              </SelectWrap>

              <SearchButton type="button" onClick={handleTopSearch}>
                Search Properties
              </SearchButton>
            </SearchTopRow>

            <SearchBottomRow>
              <PopularRow>
                <strong>Popular Searches:</strong>
                {hero.popularSearches.map((search) => (
                  <SearchChip key={search} type="button">
                    {search}
                  </SearchChip>
                ))}
              </PopularRow>

              <SortRow>
                <SortLabel>Sort by:</SortLabel>
                <SortSelect type="button">
                  {hero.sortBy} <ChevronDownIcon />
                </SortSelect>
                <ViewSwitch>
                  <ViewButton type="button" $active>
                    <GridViewIcon />
                  </ViewButton>
                  <ViewButton type="button">
                    <ListViewIcon />
                  </ViewButton>
                  <ViewButton type="button">
                    <MapPinIcon />
                  </ViewButton>
                </ViewSwitch>
              </SortRow>
            </SearchBottomRow>
          </SearchShell>
        </HeroSection>

        <ContentSection>
          <ContentGrid>
            <FilterSidebar>
              <SidebarHeader>
                <SidebarTitle>Filters</SidebarTitle>
                <ClearButton type="button" onClick={clearAllFilters}>
                  Clear All
                </ClearButton>
              </SidebarHeader>

              <FilterBlock>
                <FilterBlockTitle>Budget Range</FilterBlockTitle>
                <RangeLabels>
                  <span>{formatBudgetValue(budgetRange.min)}</span>
                  <span>{formatBudgetValue(budgetRange.max)}</span>
                </RangeLabels>
                <RangeTrack $start={budgetMinPercent} $end={budgetMaxPercent}>
                  <RangeThumb $position={budgetMinPercent} />
                  <RangeThumb $position={budgetMaxPercent} />
                </RangeTrack>
                <RangeSliderWrap>
                  <RangeInput
                    type="range"
                    min={filters.budget.minValue}
                    max={filters.budget.maxValue}
                    step={filters.budget.step}
                    value={budgetRange.min}
                    aria-label="Minimum budget"
                    onChange={(event) => {
                      const nextMin = Math.min(
                        Number(event.target.value),
                        budgetRange.max - filters.budget.step,
                      );
                      setBudgetRange((current) => ({
                        ...current,
                        min: nextMin,
                      }));
                    }}
                  />
                  <RangeInput
                    type="range"
                    min={filters.budget.minValue}
                    max={filters.budget.maxValue}
                    step={filters.budget.step}
                    value={budgetRange.max}
                    aria-label="Maximum budget"
                    onChange={(event) => {
                      const nextMax = Math.max(
                        Number(event.target.value),
                        budgetRange.min + filters.budget.step,
                      );
                      setBudgetRange((current) => ({
                        ...current,
                        max: nextMax,
                      }));
                    }}
                  />
                </RangeSliderWrap>
              </FilterBlock>

              <FilterBlock>
                <FilterBlockTitle>Property Type</FilterBlockTitle>
                <CheckList>
                  {filters.propertyTypes.map((item) => (
                    <CheckItem key={item}>
                      <CheckRow>
                        <HiddenCheckbox
                          type="checkbox"
                          checked={selectedPropertyTypes.includes(item)}
                          onChange={() =>
                            setSelectedPropertyTypes((current) =>
                              toggleSelection(current, item),
                            )
                          }
                        />
                        <CheckBox $active={selectedPropertyTypes.includes(item)} />
                        <span>{item}</span>
                      </CheckRow>
                      <FilterCount>
                        {getCountLabel(
                          (listing) => listing.propertyType === item,
                        )}
                      </FilterCount>
                    </CheckItem>
                  ))}
                </CheckList>
              </FilterBlock>

              <FilterBlock>
                <FilterBlockTitle>BHK</FilterBlockTitle>
                <BHKRow>
                  {filters.bhk.map((item) => (
                    <BHKChip
                      key={item}
                      type="button"
                      $active={selectedBhk.includes(item)}
                      onClick={() =>
                        setSelectedBhk((current) =>
                          toggleSelection(current, item),
                        )
                      }
                    >
                      {item}
                    </BHKChip>
                  ))}
                </BHKRow>
              </FilterBlock>

              <FilterBlock>
                <FilterBlockTitle>Area (Sq.ft.)</FilterBlockTitle>
                <RangeTrack $start={areaMinPercent} $end={areaMaxPercent}>
                  <RangeThumb $position={areaMinPercent} />
                  <RangeThumb $position={areaMaxPercent} />
                </RangeTrack>
                <RangeSliderWrap>
                  <RangeInput
                    type="range"
                    min={filters.area.minValue}
                    max={filters.area.maxValue}
                    step={filters.area.step}
                    value={areaRange.min}
                    aria-label="Minimum area"
                    onChange={(event) => {
                      const nextMin = Math.min(
                        Number(event.target.value),
                        areaRange.max - filters.area.step,
                      );
                      setAreaRange((current) => ({
                        ...current,
                        min: nextMin,
                      }));
                    }}
                  />
                  <RangeInput
                    type="range"
                    min={filters.area.minValue}
                    max={filters.area.maxValue}
                    step={filters.area.step}
                    value={areaRange.max}
                    aria-label="Maximum area"
                    onChange={(event) => {
                      const nextMax = Math.max(
                        Number(event.target.value),
                        areaRange.min + filters.area.step,
                      );
                      setAreaRange((current) => ({
                        ...current,
                        max: nextMax,
                      }));
                    }}
                  />
                </RangeSliderWrap>
                <AreaInputs>
                  <AreaInput>
                    <span>Min</span>
                    <strong>{areaRange.min}</strong>
                  </AreaInput>
                  <span>to</span>
                  <AreaInput>
                    <span>Max</span>
                    <strong>{areaRange.max}</strong>
                  </AreaInput>
                </AreaInputs>
              </FilterBlock>

              <FilterBlock>
                <CollapseRow
                  type="button"
                  aria-expanded={openSections.amenities}
                  onClick={() =>
                    setOpenSections((current) => ({
                      ...current,
                      amenities: !current.amenities,
                    }))
                  }
                >
                  <span>Amenities</span>
                  <CollapseIcon $open={openSections.amenities}>
                    <ChevronDownIcon />
                  </CollapseIcon>
                </CollapseRow>
                <CollapseBody $open={openSections.amenities}>
                  <CheckList>
                    {filters.amenities.map((item) => (
                      <CheckItem key={item}>
                        <CheckRow>
                          <HiddenCheckbox
                            type="checkbox"
                            checked={selectedAmenities.includes(item)}
                            onChange={() =>
                              setSelectedAmenities((current) =>
                                toggleSelection(current, item),
                              )
                            }
                          />
                          <CheckBox $active={selectedAmenities.includes(item)} />
                          <span>{item}</span>
                        </CheckRow>
                        <FilterCount>
                          {getCountLabel((listing) =>
                            listing.amenities.includes(item),
                          )}
                        </FilterCount>
                      </CheckItem>
                    ))}
                  </CheckList>
                </CollapseBody>
              </FilterBlock>

              <FilterBlock>
                <CollapseRow
                  type="button"
                  aria-expanded={openSections.possessionStatus}
                  onClick={() =>
                    setOpenSections((current) => ({
                      ...current,
                      possessionStatus: !current.possessionStatus,
                    }))
                  }
                >
                  <span>Possession Status</span>
                  <CollapseIcon $open={openSections.possessionStatus}>
                    <ChevronDownIcon />
                  </CollapseIcon>
                </CollapseRow>
                <CollapseBody $open={openSections.possessionStatus}>
                  <CheckList>
                    {filters.possessionStatuses.map((item) => (
                      <CheckItem key={item}>
                        <CheckRow>
                          <HiddenCheckbox
                            type="checkbox"
                            checked={selectedPossessionStatuses.includes(item)}
                            onChange={() =>
                              setSelectedPossessionStatuses((current) =>
                                toggleSelection(current, item),
                              )
                            }
                          />
                          <CheckBox
                            $active={selectedPossessionStatuses.includes(item)}
                          />
                          <span>{item}</span>
                        </CheckRow>
                        <FilterCount>
                          {getCountLabel(
                            (listing) => listing.possessionStatus === item,
                          )}
                        </FilterCount>
                      </CheckItem>
                    ))}
                  </CheckList>
                </CollapseBody>
              </FilterBlock>
            </FilterSidebar>

            <ListingsArea>
              <ListingsHeader>
                <strong>{filteredListings.length.toLocaleString("en-IN")}</strong>
                <span>Properties Found</span>
              </ListingsHeader>

              {filteredListings.length > 0 ? (
                <ListingsGrid>
                  {filteredListings.map((listing) => (
                    <ListingCard
                      key={listing.id}
                      role="link"
                      tabIndex={0}
                      aria-label={`Open details for ${listing.title}`}
                      onClick={() => navigate(`/rent-project/${listing.id}`)}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault();
                          navigate(`/rent-project/${listing.id}`);
                        }
                      }}
                    >
                      <ListingFigure>
                        <ListingImage
                          src={listing.image}
                          alt={listing.imageAlt || listing.title}
                        />
                        <ListingBadge>
                          <VerifiedMiniIcon />
                          <span>{listing.badge}</span>
                        </ListingBadge>
                        <FavoriteButton
                          type="button"
                          onClick={(event) => event.stopPropagation()}
                          onKeyDown={(event) => event.stopPropagation()}
                        >
                          <HeartIcon />
                        </FavoriteButton>
                      </ListingFigure>

                      <ListingBody>
                        <ListingTitle>{listing.title}</ListingTitle>
                        <ListingLocation>
                          <SmallPinIcon /> {listing.location}
                        </ListingLocation>
                        <ListingSpecs>
                          {listing.specs.map((spec) => (
                            <span key={spec}>{spec}</span>
                          ))}
                        </ListingSpecs>
                        <ListingFooter>
                          <div>
                            <ListingPrice>{listing.price}</ListingPrice>
                            <ListingSubPrice>{listing.subPrice}</ListingSubPrice>
                          </div>
                          <CardAction
                            type="button"
                            onClick={(event) => {
                              event.stopPropagation();
                              navigate(`/rent-project/${listing.id}`);
                            }}
                          >
                            View Details
                          </CardAction>
                        </ListingFooter>
                      </ListingBody>
                    </ListingCard>
                  ))}
                </ListingsGrid>
              ) : (
                <EmptyState>
                  <EmptyStateTitle>No properties match these filters</EmptyStateTitle>
                  <EmptyStateText>
                    Adjust the selected budget, type, BHK, area, amenities, or
                    possession status to see more listings.
                  </EmptyStateText>
                </EmptyState>
              )}
            </ListingsArea>

            <SideColumn>
              {sideCards.map((card, index) => (
                <HelpCard key={card.title}>
                  <HelpCardHeader>
                    <HelpCardTitle>{card.title}</HelpCardTitle>
                    <HelpCardIcon>
                      <SideCardIcon type={card.icon} />
                    </HelpCardIcon>
                  </HelpCardHeader>
                  <HelpCardText>{card.description}</HelpCardText>
                  <HelpAction type="button" $ghost={index > 0}>
                    {card.actionLabel}
                  </HelpAction>
                </HelpCard>
              ))}
            </SideColumn>
          </ContentGrid>

          <TrustStrip>
            <TrustGrid>
              {trustStrip.map((item) => (
                <TrustItem key={item.title}>
                  <TrustIcon>
                    <TrustStripIcon type={item.icon} />
                  </TrustIcon>
                  <div>
                    <TrustTitle>{item.title}</TrustTitle>
                    <TrustText>{item.description}</TrustText>
                  </div>
                </TrustItem>
              ))}
            </TrustGrid>
          </TrustStrip>
        </ContentSection>
      </PageInner>
    </RentPageShell>
  );
}

function HeroMetricIcon({ type }) {
  switch (type) {
    case "verified":
      return <VerifiedOutlineIcon />;
    case "location":
      return <LocationOutlineIcon />;
    case "stars":
      return <StarsIcon />;
    default:
      return <HomeOutlineIcon />;
  }
}

function SideCardIcon({ type }) {
  switch (type) {
    case "save":
      return <SaveIcon />;
    case "insight":
      return <InsightIcon />;
    default:
      return <SupportIcon />;
  }
}

function TrustStripIcon({ type }) {
  switch (type) {
    case "pricing":
      return <PricingIcon />;
    case "loan":
      return <LoanIcon />;
    case "legal":
      return <LegalIcon />;
    case "guidance":
      return <GuidanceIcon />;
    default:
      return <ShieldIcon />;
  }
}

function ChevronDownIcon() {
  return (
    <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3 4.5L6 7.5L9 4.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HomeOutlineIcon() {
  return (
    <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.5 13L14 6L22.5 13V22H17.3V16.7H10.7V22H5.5V13Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function VerifiedOutlineIcon() {
  return (
    <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14 5L20.5 7.5V13C20.5 17.4 17.9 21.2 14 22.9C10.1 21.2 7.5 17.4 7.5 13V7.5L14 5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M11.1 13.6L13.2 15.7L17.3 11.6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LocationOutlineIcon() {
  return (
    <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14 23C17.7 18.8 19.5 15.6 19.5 13.4C19.5 10.36 17.14 8 14 8C10.86 8 8.5 10.36 8.5 13.4C8.5 15.6 10.3 18.8 14 23Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="14" cy="13.4" r="2.2" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function StarsIcon() {
  return (
    <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.5 7.4L11.6 9.7L14.1 10L12.3 11.8L12.7 14.3L10.5 13.1L8.2 14.3L8.7 11.8L6.8 10L9.4 9.7L10.5 7.4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M19.8 10.1L20.6 11.7L22.4 12L21 13.3L21.4 15.1L19.8 14.3L18.1 15.1L18.5 13.3L17.2 12L19 11.7L19.8 10.1Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M17 5.6L17.5 6.7L18.7 6.9L17.9 7.7L18.1 8.9L17 8.3L15.9 8.9L16.1 7.7L15.3 6.9L16.5 6.7L17 5.6Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="9" cy="9" r="5.8" stroke="currentColor" strokeWidth="1.8" />
      <path d="M13.5 13.5L17 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function FilterAdjustIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 6H16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M6 10H14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M8 14H12" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <circle cx="7" cy="6" r="1" fill="currentColor" />
      <circle cx="12" cy="10" r="1" fill="currentColor" />
      <circle cx="9.5" cy="14" r="1" fill="currentColor" />
    </svg>
  );
}

function GridViewIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="4.5" height="4.5" rx="1" stroke="currentColor" strokeWidth="1.6" />
      <rect x="11.5" y="4" width="4.5" height="4.5" rx="1" stroke="currentColor" strokeWidth="1.6" />
      <rect x="4" y="11.5" width="4.5" height="4.5" rx="1" stroke="currentColor" strokeWidth="1.6" />
      <rect x="11.5" y="11.5" width="4.5" height="4.5" rx="1" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function ListViewIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 5H16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M6 10H16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M6 15H16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="4" cy="5" r="1" fill="currentColor" />
      <circle cx="4" cy="10" r="1" fill="currentColor" />
      <circle cx="4" cy="15" r="1" fill="currentColor" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 16.8C12.8 13.7 14.2 11.4 14.2 9.8C14.2 7.44 12.36 5.6 10 5.6C7.64 5.6 5.8 7.44 5.8 9.8C5.8 11.4 7.2 13.7 10 16.8Z" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="10" cy="9.8" r="1.5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function VerifiedMiniIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.4" />
      <path d="M5.6 8L7.2 9.6L10.4 6.4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 16C13.8 12.9 15.7 10.7 15.7 8.3C15.7 6.6 14.4 5.3 12.7 5.3C11.6 5.3 10.7 5.8 10 6.8C9.3 5.8 8.4 5.3 7.3 5.3C5.6 5.3 4.3 6.6 4.3 8.3C4.3 10.7 6.2 12.9 10 16Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SmallPinIcon() {
  return (
    <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 10.4C7.86 8.31 8.8 6.75 8.8 5.66C8.8 4.12 7.6 2.92 6 2.92C4.4 2.92 3.2 4.12 3.2 5.66C3.2 6.75 4.14 8.31 6 10.4Z" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="6" cy="5.6" r="0.9" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 12C6 8.69 8.69 6 12 6C15.31 6 18 8.69 18 12" stroke="currentColor" strokeWidth="1.8" />
      <path d="M6 12V16H8.7V12" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M18 12V16H15.3V12" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M15.3 17.5C15.3 18.88 14 19.7 12 19.7H11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function SaveIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 20C15.8 16.9 17.7 14.7 17.7 12.3C17.7 10.6 16.4 9.3 14.7 9.3C13.6 9.3 12.7 9.8 12 10.8C11.3 9.8 10.4 9.3 9.3 9.3C7.6 9.3 6.3 10.6 6.3 12.3C6.3 14.7 8.2 16.9 12 20Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M8 6.4C8.6 5.13 9.93 4.3 11.4 4.3C13.22 4.3 14.8 5.55 15.2 7.3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function InsightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 18.5H19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M7.2 16.2V12.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 16.2V9.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M16.8 16.2V6.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M7.2 9.4L10.1 7L13.2 8.7L16.8 5.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3L18 5.2V10.2C18 14.3 15.5 17.9 12 19.4C8.5 17.9 6 14.3 6 10.2V5.2L12 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M9.2 10.7L11.2 12.7L14.8 9.1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PricingIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="4.8" width="10" height="14.5" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M9 9H13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M9 12H13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="17.5" cy="15.5" r="3.5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function LoanIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.8 10.2L12 4.5L19.2 10.2V18.5H4.8V10.2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M8.2 12.4H15.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M10 15.2H14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function LegalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 5V19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M7.5 8H16.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M9 8L6.2 12.7H11.8L9 8Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M15 8L12.2 12.7H17.8L15 8Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

function GuidanceIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4.5 18.2C4.5 15.54 6.52 13.7 9 13.7C11.48 13.7 13.5 15.54 13.5 18.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M15.5 9.8L17.1 11.4L20.2 8.3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default Rent;
