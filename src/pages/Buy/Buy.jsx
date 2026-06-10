import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import * as FP from "../../components/FeaturedProperties/FeaturedPropertiesStyles";
import Navbar from "../../components/Navbar/Navbar";
import { siteNavbar } from "../../data/HomePageContent";
import { buyPageContent } from "../../data/pageContent";
import {
  matchesBudgetRange,
  matchesLocation,
  matchesPropertyType,
  parsePriceRangeText,
} from "../../utils/propertySearch";
import { NavWrap } from "../Home/HomeStyles";
import {
  BreadcrumbChevron,
  BreadcrumbCurrent,
  BreadcrumbLink,
  Breadcrumbs,
  BuilderCard,
  BuilderGrid,
  BuilderName,
  BuilderTag,
  BuyPageShell,
  CenterAccent,
  CenterTitle,
  FavoriteButton,
  FeaturedProjectsRow,
  FilterField,
  FilterControl,
  FilterControlIcon,
  FilterChevron,
  FilterGrid,
  FilterHeading,
  FilterInput,
  FilterLabel,
  FilterPanel,
  FilterSelect,
  HeroCopy,
  HeroDescription,
  HeroGrid,
  HeroImage,
  HeroImageWrap,
  HeroKicker,
  HeroKickerLine,
  HeroKickerRow,
  HeroSection,
  HeroTitle,
  HeroVisual,
  MobileStatItem,
  MobileStatsStrip,
  MoreFiltersButton,
  PageInner,
  PageSection,
  ReasonCard,
  ReasonGrid,
  ReasonIcon,
  ReasonText,
  ReasonTitle,
  SearchButton,
  SectionAction,
  SectionHeaderRow,
  SectionTitle,
  StatCard,
  StatIcon,
  StatLabel,
  StatValue,
  StatsRow,
  SupportActions,
  SupportBand,
  SupportButton,
  SupportCopy,
  SupportIllustration,
  TrustIcon,
  TrustItem,
  TrustLabel,
  TrustRow,
  WhyInvestPanel,
} from "./BuyStyles";

function Buy() {
  const [searchParams] = useSearchParams();
  const { hero, featuredProjects, reasons, builders, supportCta, trustStrip } =
    buyPageContent;
  const mainSearchField = hero.filters[0];
  const filterOptions = hero.filters.slice(1);
  const locationFilter = searchParams.get("location") || "";
  const propertyTypeFilter = searchParams.get("propertyType") || "";
  const minBudgetFilter = searchParams.get("minBudget") || "";
  const maxBudgetFilter = searchParams.get("maxBudget") || "";
  const filteredProjects = useMemo(
    () =>
      featuredProjects.items.filter((project) => {
        const projectType = getBuyProjectType(project);
        const { min, max } = parsePriceRangeText(project.price);

        return (
          matchesLocation(
            `${project.title} ${project.location}`,
            locationFilter,
          ) &&
          matchesPropertyType(projectType, propertyTypeFilter) &&
          matchesBudgetRange(min, max, minBudgetFilter, maxBudgetFilter)
        );
      }),
    [
      featuredProjects.items,
      locationFilter,
      propertyTypeFilter,
      minBudgetFilter,
      maxBudgetFilter,
    ],
  );

  return (
    <BuyPageShell>
      <NavWrap>
        <Navbar links={siteNavbar.links} ctaLabel={siteNavbar.ctaLabel} />
      </NavWrap>
      <PageInner>
        <HeroSection>
          <Breadcrumbs aria-label="Breadcrumb">
            <BreadcrumbLink to="/">Home</BreadcrumbLink>
            <BreadcrumbChevron aria-hidden="true" />
            <BreadcrumbCurrent>Buy</BreadcrumbCurrent>
          </Breadcrumbs>

          <HeroKickerRow>
            <HeroKicker>{hero.kicker}</HeroKicker>
            <HeroKickerLine />
          </HeroKickerRow>

          <HeroGrid>
            <HeroCopy>
              <HeroTitle>{hero.title}</HeroTitle>
              <HeroDescription>{hero.description}</HeroDescription>

              <StatsRow>
                {hero.stats.map((stat) => (
                  <StatCard key={stat.label}>
                    <StatIcon>
                      <MetricIcon type={stat.icon} />
                    </StatIcon>
                    <div>
                      <StatValue>{stat.value}</StatValue>
                      <StatLabel>{stat.label}</StatLabel>
                    </div>
                  </StatCard>
                ))}
              </StatsRow>
            </HeroCopy>

            <HeroVisual>
              <HeroImageWrap>
                <HeroImage src={hero.image} alt={hero.imageAlt} />
              </HeroImageWrap>
            </HeroVisual>
          </HeroGrid>

          <MobileStatsStrip>
            {hero.stats.map((stat) => (
              <MobileStatItem key={stat.label}>
                <StatIcon>
                  <MetricIcon type={stat.icon} />
                </StatIcon>
                <div>
                  <StatValue>{stat.value}</StatValue>
                  <StatLabel>{stat.label}</StatLabel>
                </div>
              </MobileStatItem>
            ))}
          </MobileStatsStrip>

          <FilterPanel>
            <FilterHeading>Search Projects</FilterHeading>
            <FilterGrid>
              <FilterField $full>
                <FilterLabel $visuallyHiddenOnMobile>
                  {mainSearchField.label}
                </FilterLabel>
                <FilterControl>
                  <FilterControlIcon>
                    <SearchFieldIcon />
                  </FilterControlIcon>
                  <FilterInput placeholder={mainSearchField.placeholder} />
                </FilterControl>
              </FilterField>

              {filterOptions.map((field) => (
                <FilterField key={field.label}>
                  <FilterLabel>{field.label}</FilterLabel>
                  <FilterControl>
                    <FilterControlIcon>
                      <FieldIcon label={field.label} />
                    </FilterControlIcon>
                    {field.type === "select" ? (
                      <>
                        <FilterSelect defaultValue="">
                          <option value="" disabled>
                            {field.placeholder}
                          </option>
                          <option>{field.placeholder}</option>
                        </FilterSelect>
                        <FilterChevron>
                          <ChevronDownIcon />
                        </FilterChevron>
                      </>
                    ) : (
                      <>
                        <FilterInput placeholder={field.placeholder} />
                        <FilterChevron>
                          <ChevronDownIcon />
                        </FilterChevron>
                      </>
                    )}
                  </FilterControl>
                </FilterField>
              ))}

              <SearchButton type="button">
                <SearchFieldIcon />
                <span>{hero.searchLabel}</span>
              </SearchButton>
            </FilterGrid>

            <MoreFiltersButton type="button">
              <TuneIcon />
              <span>{hero.moreFiltersLabel}</span>
            </MoreFiltersButton>
          </FilterPanel>
        </HeroSection>

        <PageSection>
          <SectionHeaderRow>
            <SectionTitle>{featuredProjects.title}</SectionTitle>
            <SectionAction to={featuredProjects.actionTo}>
              <span>{featuredProjects.actionLabel}</span>
              <ArrowIcon />
            </SectionAction>
          </SectionHeaderRow>

          <FeaturedProjectsRow>
            {filteredProjects.length > 0 ? (
              filteredProjects.map((property, index) => (
                <BuyProjectCard
                  key={property.id}
                  property={property}
                  index={index}
                />
              ))
            ) : (
              <div style={{ color: "#4f5d58", fontSize: "0.96rem" }}>
                No projects match the selected home search filters.
              </div>
            )}
          </FeaturedProjectsRow>
        </PageSection>

        <PageSection>
          <WhyInvestPanel>
            <CenterTitle>{reasons.title}</CenterTitle>
            <CenterAccent />

            <ReasonGrid>
              {reasons.items.map((item) => (
                <ReasonCard key={item.title}>
                  <ReasonIcon>
                    <ReasonSvg type={item.icon} />
                  </ReasonIcon>
                  <ReasonTitle>{item.title}</ReasonTitle>
                  <ReasonText>{item.description}</ReasonText>
                </ReasonCard>
              ))}
            </ReasonGrid>
          </WhyInvestPanel>
        </PageSection>

        <PageSection>
          <SectionHeaderRow>
            <SectionTitle>{builders.title}</SectionTitle>
            <SectionAction to={builders.actionTo}>
              <span>{builders.actionLabel}</span>
              <ArrowIcon />
            </SectionAction>
          </SectionHeaderRow>

          <BuilderGrid>
            {builders.items.map((builder) => (
              <BuilderCard key={builder.name}>
                <BuilderName>{builder.name}</BuilderName>
                <BuilderTag>{builder.subtitle}</BuilderTag>
              </BuilderCard>
            ))}
          </BuilderGrid>
        </PageSection>

        <PageSection>
          <SupportBand>
            <SupportCopy>
              <h3>{supportCta.title}</h3>
              <p>{supportCta.description}</p>
            </SupportCopy>

            <SupportActions>
              <SupportButton type="button">
                <SupportUserIcon />
                {supportCta.primaryLabel}
              </SupportButton>
              <SupportButton type="button" $ghost>
                <CalendarIcon />
                {supportCta.secondaryLabel}
              </SupportButton>
            </SupportActions>

            <SupportIllustration aria-hidden="true">
              <SupportLineArt />
            </SupportIllustration>
          </SupportBand>

          <TrustRow>
            {trustStrip.map((item) => (
              <TrustItem key={item.label}>
                <TrustIcon>
                  <TrustSvg type={item.icon} />
                </TrustIcon>
                <TrustLabel>{item.label}</TrustLabel>
              </TrustItem>
            ))}
          </TrustRow>
        </PageSection>
      </PageInner>
    </BuyPageShell>
  );
}

function getBuyProjectType(project) {
  const projectSummary = `${project.category} ${project.title}`.toLowerCase();

  if (
    projectSummary.includes("office") ||
    projectSummary.includes("commercial")
  ) {
    return "Commercial";
  }

  if (projectSummary.includes("plot") || projectSummary.includes("land")) {
    return "Plot / Land";
  }

  if (projectSummary.includes("villa")) {
    return "Villa";
  }

  if (projectSummary.includes("independent")) {
    return "Independent House";
  }

  return "Apartment";
}

function BuyProjectCard({ property, index }) {
  const navigate = useNavigate();
  const surface = index % 2 === 0 ? "light" : "dark";
  const [hasImageError, setHasImageError] = useState(false);
  const amenitiesValue = getAmenitiesValue(property.reviews, property.rating);

  const handleCardOpen = () => {
    navigate(`/buy-project/${property.id}`);
  };

  const handleCardKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleCardOpen();
    }
  };

  useEffect(() => {
    setHasImageError(false);
  }, [property.image]);

  return (
    <FP.CardShell
      role="link"
      tabIndex={0}
      aria-label={`Open details for ${property.title}`}
      onClick={handleCardOpen}
      onKeyDown={handleCardKeyDown}
    >
      <FP.CardSurface $surface={surface} $buyCard>
        <FP.FigureShell
          $layout="card"
          $tone={property.tone || property.accent}
          $surface={surface}
          $buyCard
        >
          <FP.FigureBadge $surface={surface}>
            <BadgeIcon kind={property.badgeIcon} />
            <FP.FigureBadgeText>{property.badge}</FP.FigureBadgeText>
          </FP.FigureBadge>

          <FavoriteButton type="button" tabIndex={-1} aria-label="Save project">
            <HeartIcon />
          </FavoriteButton>

          {property.image && !hasImageError ? (
            <FP.FigureImage
              src={property.image}
              alt={property.imageAlt || property.title}
              onError={() => setHasImageError(true)}
            />
          ) : (
            <FP.VisualFallback $tone={property.tone || property.accent} />
          )}
        </FP.FigureShell>

        <FP.CardBody $surface={surface} $buyCard>
          <FP.CardTop $buyCard>
            <div>
              <FP.CardLabel $surface={surface} $buyCard>
                {property.category}
              </FP.CardLabel>
              <FP.TitleText $surface={surface} $buyCard>
                {property.title}
              </FP.TitleText>
              <FP.LocationRow $buyCard>
                <FP.LocationIcon $surface={surface}>
                  <PinIcon />
                </FP.LocationIcon>
                <FP.LocationText $surface={surface} $buyCard>
                  {property.location}
                </FP.LocationText>
              </FP.LocationRow>
            </div>

            <FP.PriceCard $surface={surface} $buyCard>
              <FP.PriceText $surface={surface} $buyCard>
                {formatPriceDisplay(property.price)}
              </FP.PriceText>
              <FP.CardStatus $surface={surface} $buyCard>
                {property.availability}
              </FP.CardStatus>
            </FP.PriceCard>
          </FP.CardTop>

          <FP.CardMeta $surface={surface} $buyCard>
            <FP.CardMetaItem $surface={surface}>
              <LandAreaIcon />
              <div>
                <FP.CardMetaLabel $surface={surface}>
                  Land Area
                </FP.CardMetaLabel>
                <FP.CardMetaValue $surface={surface}>
                  {property.area}
                </FP.CardMetaValue>
              </div>
            </FP.CardMetaItem>
            <FP.CardMetaItem $surface={surface}>
              <TowerIcon />
              <div>
                <FP.CardMetaLabel $surface={surface}>
                  Total Units
                </FP.CardMetaLabel>
                <FP.CardMetaValue $surface={surface}>
                  {property.details}
                </FP.CardMetaValue>
              </div>
            </FP.CardMetaItem>
            <FP.CardMetaItem $surface={surface}>
              <AmenitiesIcon />
              <div>
                <FP.CardMetaLabel $surface={surface}>
                  Amenities
                </FP.CardMetaLabel>
                <FP.CardMetaValue $surface={surface}>
                  {amenitiesValue}
                </FP.CardMetaValue>
              </div>
            </FP.CardMetaItem>
          </FP.CardMeta>

          <FP.PriceWrap $buyCard>
            <FP.ReviewsPill $surface={surface}>
              <StarIcon />
              <span>{property.rating}</span>
            </FP.ReviewsPill>

            <FP.LinkText as="div" $surface={surface}>
              <span>{property.ctaLabel || "View Project"}</span>
              <FP.LinkArrow $surface={surface}>
                <ArrowIcon />
              </FP.LinkArrow>
            </FP.LinkText>
          </FP.PriceWrap>
        </FP.CardBody>
      </FP.CardSurface>
    </FP.CardShell>
  );
}

function getAmenitiesValue(reviews = "", rating = "0") {
  const reviewCount = Number.parseInt(String(reviews).replace(/\D/g, ""), 10);

  if (Number.isFinite(reviewCount) && reviewCount > 0) {
    return `${Math.max(20, Math.round(reviewCount / 10) * 10)}+`;
  }

  return `${Math.max(20, Math.round(Number(rating || 0) * 20))}+`;
}

function formatPriceDisplay(price = "") {
  return String(price).replace(/\bRs\b/g, "₹");
}

function MetricIcon({ type }) {
  switch (type) {
    case "builders":
      return <BuilderMetricIcon />;
    case "locations":
      return <LocationMetricIcon />;
    default:
      return <ProjectsMetricIcon />;
  }
}

function FieldIcon({ label = "" }) {
  const normalizedLabel = label.toLowerCase();

  if (normalizedLabel.includes("location")) {
    return <LocationMetricIcon />;
  }

  if (normalizedLabel.includes("type")) {
    return <ProjectsMetricIcon />;
  }

  if (normalizedLabel.includes("budget")) {
    return <RupeeIcon />;
  }

  return <StatusIcon />;
}

function ReasonSvg({ type }) {
  switch (type) {
    case "growth":
      return <GrowthReasonIcon />;
    case "planning":
      return <PlanningReasonIcon />;
    case "payments":
      return <PaymentsReasonIcon />;
    case "builders":
      return <BuilderReasonIcon />;
    case "shield":
      return <ShieldReasonIcon />;
    default:
      return <AmenitiesReasonIcon />;
  }
}

function TrustSvg({ type }) {
  switch (type) {
    case "legal":
      return <LegalTrustIcon />;
    case "support":
      return <SupportTrustIcon />;
    case "pricing":
      return <PricingTrustIcon />;
    case "secure":
      return <SecureTrustIcon />;
    default:
      return <VerifyTrustIcon />;
  }
}

function BadgeIcon({ kind }) {
  switch (kind) {
    case "rocket":
      return <RocketIcon />;
    case "chart":
      return <ChartIcon />;
    default:
      return <StarIcon />;
  }
}

function ProjectsMetricIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5 18.5V6H10V18.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M10 18.5V10H15V18.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M15 18.5V4H19V18.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BuilderMetricIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M4.5 18.5C4.5 15.7 6.5 13.8 9 13.8C11.5 13.8 13.5 15.7 13.5 18.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M15.5 7.5H19.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M17.5 5.5V9.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LocationMetricIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 20C15.2 16.3 16.8 13.5 16.8 11.5C16.8 8.85 14.74 6.8 12 6.8C9.26 6.8 7.2 8.85 7.2 11.5C7.2 13.5 8.8 16.3 12 20Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle
        cx="12"
        cy="11.5"
        r="1.9"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 17.5C13 14.09 14.5 11.48 14.5 9.66C14.5 7.18 12.61 5.25 10 5.25C7.39 5.25 5.5 7.18 5.5 9.66C5.5 11.48 7 14.09 10 17.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle
        cx="10"
        cy="9.6"
        r="1.5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 2.4L12.35 7.16L17.6 7.92L13.8 11.62L14.7 16.84L10 14.36L5.3 16.84L6.2 11.62L2.4 7.92L7.65 7.16L10 2.4Z" />
    </svg>
  );
}

function RocketIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.8 3.8C10.2 4.2 8.1 5.6 6.8 7.9L5.9 9.5L8.6 12.2L10.2 11.3C12.5 10 13.9 7.9 14.3 5.3L14.5 3.7L12.8 3.8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M7.8 12.2L5.2 14.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="11.4" cy="6.6" r="1.1" fill="currentColor" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.5 15.5H16.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M5.2 13.2L8.3 9.6L10.8 11.4L14.8 6.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.5 10H15.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M10.8 5.3L15.5 10L10.8 14.7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.5 7.8L10 12.3L14.5 7.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SearchFieldIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="9" cy="9" r="5.7" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M13.2 13.2L16.2 16.2"
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
        d="M5.5 4.5H13.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M5.5 8.2H13"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M8 8.2C10 8.2 11.5 7 11.5 5.5V4.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M7 8.2L13 15.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function StatusIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="4"
        y="5"
        width="12"
        height="10"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M7 9.5H13"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function TuneIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4 6H16"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M4 14H16"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <circle cx="7" cy="6" r="1.7" fill="currentColor" />
      <circle cx="13" cy="14" r="1.7" fill="currentColor" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 15.6L4.7 10.4C3.6 9.3 3.6 7.4 4.7 6.3C5.8 5.2 7.6 5.2 8.7 6.3L10 7.6L11.3 6.3C12.4 5.2 14.2 5.2 15.3 6.3C16.4 7.4 16.4 9.3 15.3 10.4L10 15.6Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SupportUserIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="2.7" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M3.8 15.2C3.8 12.9 5.7 11.2 8 11.2C10.3 11.2 12.2 12.9 12.2 15.2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M14 7.2H17.2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M15.6 5.6V8.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="3.8"
        y="5.2"
        width="12.4"
        height="11"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M6.6 3.8V6.2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M13.4 3.8V6.2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path d="M3.8 8.2H16.2" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function SupportLineArt() {
  return (
    <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16 42H128L142 30V42H150"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M52 128V82H78V128" stroke="currentColor" strokeWidth="2" />
      <path d="M86 128V66H112V128" stroke="currentColor" strokeWidth="2" />
      <path d="M40 128H122" stroke="currentColor" strokeWidth="2" />
      <path d="M20 56H50" stroke="currentColor" strokeWidth="2" />
      <circle cx="24" cy="128" r="4" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function LandAreaIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4 4H8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M4 4V8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M16 4H12"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M16 4V8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M4 16H8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M4 16V12"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M16 16H12"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M16 16V12"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function TowerIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 17V4H14V17"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 7H9.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M10.5 7H11.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M8.5 10H9.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M10.5 10H11.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function AmenitiesIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 3.5L11.6 6.8L15.3 7.3L12.7 9.8L13.3 13.4L10 11.6L6.7 13.4L7.3 9.8L4.7 7.3L8.4 6.8L10 3.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AmenitiesReasonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5 18V6H9.8V18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9.8 18V9.5H14.6V18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M14.6 18V4H19V18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GrowthReasonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4 18.5H20"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M7 15L10.5 11L13.2 13L18 7.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.8 7.5H18V9.7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlanningReasonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="5"
        y="5"
        width="14"
        height="14"
        rx="2.4"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M9 9H15"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M9 12H15"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M9 15H12"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PaymentsReasonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5 7.5H19V16.5H5V7.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M8 11.2H12.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle
        cx="16.2"
        cy="12"
        r="2.2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function BuilderReasonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M4.5 18.5C4.5 15.7 6.5 13.8 9 13.8C11.5 13.8 13.5 15.7 13.5 18.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M16 7.2L17.2 8.4L20 5.6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldReasonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 3L18 5.3V10.3C18 14.4 15.5 18 12 19.5C8.5 18 6 14.4 6 10.3V5.3L12 3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9.3 10.8L11.3 12.9L14.8 9.4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function VerifyTrustIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M8.8 12.3L10.8 14.3L15 10.1"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LegalTrustIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 5.5V18.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M7.5 8H16.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M9 8L6 13H12L9 8Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M15 8L12 13H18L15 8Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SupportTrustIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 12C6 8.69 8.69 6 12 6C15.31 6 18 8.69 18 12"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M6 12V16H8.8V12"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M18 12V16H15.2V12"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PricingTrustIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="6"
        y="4.5"
        width="10"
        height="15"
        rx="2.2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M9 9H13"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M9 12H13"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle
        cx="17.5"
        cy="15.5"
        r="3.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function SecureTrustIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 3L18 5.3V10.3C18 14.4 15.5 18 12 19.5C8.5 18 6 14.4 6 10.3V5.3L12 3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <rect
        x="10"
        y="10.5"
        width="4"
        height="4.6"
        rx="0.8"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M10.8 10.5V9.5C10.8 8.84 11.34 8.3 12 8.3C12.66 8.3 13.2 8.84 13.2 9.5V10.5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

export default Buy;
