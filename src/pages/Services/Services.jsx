import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { siteNavbar } from "../../data/HomePageContent";
import { servicesPageContent } from "../../data/ServicesPageContent";
import { NavWrap } from "../Home/HomeStyles";
import {
  BulletItem,
  BulletList,
  ChecklistHeader,
  ChecklistItem,
  ChecklistList,
  CompareCard,
  CompareColumn,
  CompareGrid,
  CompareHeader,
  CompareItem,
  CompareList,
  CompareSection,
  CompareTable,
  CompareTableWrap,
  CompareTitle,
  CtaButton,
  CtaDivider,
  CtaFeature,
  CtaFeatures,
  CtaGrid,
  CtaIcon,
  CtaImage,
  CtaPrimary,
  CtaSection,
  CtaText,
  CtaTitle,
  CtaVisual,
  DetailCard,
  DetailText,
  DetailTitle,
  FeatureImage,
  FeatureNumber,
  FeatureSection,
  HeroAccent,
  HeroCopy,
  HeroDescription,
  HeroGlow,
  HeroGrid,
  HeroHighlights,
  HeroImage,
  HeroSection,
  HeroTitle,
  HeroVisual,
  HighlightIcon,
  HighlightItem,
  HighlightText,
  HighlightTitle,
  ImageCard,
  JourneyIcon,
  JourneyNumber,
  JourneyRow,
  JourneySection,
  JourneyStep,
  JourneyStepTitle,
  JourneyText,
  JourneyTitle,
  LearnMoreButton,
  OverlayChecklist,
  ReasonIcon,
  ReasonItem,
  ReasonsGrid,
  ReasonsPanel,
  ReasonText,
  ReasonsTitle,
  ServicesInner,
  ServicesPageShell,
  ShieldCard,
  ShieldCardText,
  ShieldCardTitle,
  ShieldOrb,
  SideVisualCard,
  StatCard,
  StatGrid,
  StatHeading,
  StatIcon,
  StatText,
  StatValue,
  VsBubble,
} from "./ServicesStyles";

function Services() {
  const location = useLocation();
  const { hero, journey, services, comparison, reasons, cta } =
    servicesPageContent;

  useEffect(() => {
    if (!location.hash) {
      return;
    }

    const sectionId = decodeURIComponent(location.hash.slice(1));
    const targetSection = document.getElementById(sectionId);

    if (!targetSection) {
      return;
    }

    requestAnimationFrame(() => {
      targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [location.hash]);

  return (
    <ServicesPageShell>
      <NavWrap>
        <Navbar links={siteNavbar.links} ctaLabel={siteNavbar.ctaLabel} />
      </NavWrap>

      <ServicesInner>
        <HeroSection>
          <HeroGrid>
            <HeroCopy>
              <HeroTitle>
                {hero.title}
                <HeroAccent>{hero.accentTitle}</HeroAccent>
              </HeroTitle>

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
              <HeroGlow />
              <HeroImage src={hero.image} alt={hero.imageAlt} />
              <ShieldOrb>
                <LargeShieldIcon />
              </ShieldOrb>
              <ShieldCard>
                <ShieldCardTitle>{hero.verifiedCard.title}</ShieldCardTitle>
                <ShieldCardText>{hero.verifiedCard.text}</ShieldCardText>
              </ShieldCard>
            </HeroVisual>
          </HeroGrid>
        </HeroSection>

        <JourneySection>
          <JourneyTitle>{journey.title}</JourneyTitle>
          <JourneyRow>
            {journey.steps.map((item) => (
              <JourneyStep key={item.number}>
                <JourneyIcon>
                  <JourneyStepIcon type={item.icon} />
                </JourneyIcon>
                <div>
                  <JourneyNumber>{item.number}</JourneyNumber>
                  <JourneyStepTitle>{item.title}</JourneyStepTitle>
                  <JourneyText>{item.text}</JourneyText>
                </div>
              </JourneyStep>
            ))}
          </JourneyRow>
        </JourneySection>

        {services.map((service) => (
          <FeatureSection key={service.sectionNumber} id={toServiceId(service.title)}>
            <ImageCard>
              <FeatureImage
                src={service.primaryImage}
                alt={service.primaryImageAlt}
              />
            </ImageCard>

            <DetailCard>
              <FeatureNumber>{service.sectionNumber}</FeatureNumber>
              <DetailTitle>{service.title}</DetailTitle>
              <DetailText>{service.description}</DetailText>

              <BulletList>
                {service.bullets.map((item) => (
                  <BulletItem key={item}>
                    <SmallCheckIcon />
                    <span>{item}</span>
                  </BulletItem>
                ))}
              </BulletList>

              <LearnMoreButton type="button">
                Learn More
                <ArrowRightIcon />
              </LearnMoreButton>
            </DetailCard>

            <StatGrid>
              {service.stats.map((item) => (
                <StatCard key={`${service.sectionNumber}-${item.label}`}>
                  <StatIcon>
                    <FeatureStatIcon type={item.icon} />
                  </StatIcon>
                  <div>
                    <StatValue>{item.value}</StatValue>
                    <StatHeading>{item.label}</StatHeading>
                    <StatText>{item.text}</StatText>
                  </div>
                </StatCard>
              ))}
            </StatGrid>

            <SideVisualCard>
              <FeatureImage
                src={service.secondaryImage}
                alt={service.secondaryImageAlt}
              />
              <OverlayChecklist>
                <ChecklistHeader>
                  <ClipboardIcon />
                  <span>Verified</span>
                </ChecklistHeader>
                <ChecklistList>
                  {service.checklist.map((item) => (
                    <ChecklistItem key={`${service.sectionNumber}-${item}`}>
                      <SmallCheckIcon />
                      <span>{item}</span>
                    </ChecklistItem>
                  ))}
                </ChecklistList>
              </OverlayChecklist>
            </SideVisualCard>
          </FeatureSection>
        ))}

        <CompareSection>
          <CompareGrid>
            <CompareCard $withBorder>
              <CompareTitle>{comparison.title}</CompareTitle>
              <CompareTableWrap>
                <CompareTable>
                  <CompareColumn>
                    <CompareHeader>
                      <CompareProcessIcon />
                      {comparison.leftTitle}
                    </CompareHeader>
                    <CompareList>
                      {comparison.leftItems.map((item) => (
                        <CompareItem key={item}>
                          <NegativeIcon />
                          <span>{item}</span>
                        </CompareItem>
                      ))}
                    </CompareList>
                  </CompareColumn>

                  <CompareColumn $greenColumn>
                    <CompareHeader $greenColumn>
                      <HomeMarkIcon />
                      {comparison.rightTitle}
                    </CompareHeader>
                    <CompareList>
                      {comparison.rightItems.map((item) => (
                        <CompareItem key={item} $success>
                          <PositiveIcon />
                          <span>{item}</span>
                        </CompareItem>
                      ))}
                    </CompareList>
                  </CompareColumn>
                </CompareTable>

                <VsBubble>VS</VsBubble>
              </CompareTableWrap>
            </CompareCard>

            <ReasonsPanel>
              <ReasonsTitle>{reasons.title}</ReasonsTitle>
              <ReasonsGrid>
                {reasons.items.map((item) => (
                  <ReasonItem key={item.title}>
                    <ReasonIcon>
                      <ReasonItemIcon type={item.icon} />
                    </ReasonIcon>
                    <div>
                      <DetailTitle as="div">{item.title}</DetailTitle>
                      <ReasonText>{item.text}</ReasonText>
                    </div>
                  </ReasonItem>
                ))}
              </ReasonsGrid>
            </ReasonsPanel>
          </CompareGrid>
        </CompareSection>

        <CtaSection>
          <CtaGrid>
            <CtaPrimary>
              <CtaIcon>
                <CalendarSupportIcon />
              </CtaIcon>
              <div>
                <CtaTitle>{cta.title}</CtaTitle>
                <CtaText>{cta.description}</CtaText>
              </div>
            </CtaPrimary>

            <CtaFeatures>
              {cta.features.map((item, index) => (
                <div
                  key={item}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 18,
                  }}
                >
                  <CtaFeature>
                    <SmallShieldIcon />
                    <span>{item}</span>
                  </CtaFeature>
                  {index < cta.features.length - 1 ? <CtaDivider /> : null}
                </div>
              ))}
            </CtaFeatures>

            <CtaButton type="button">
              {cta.buttonLabel}
              <ArrowRightIcon />
            </CtaButton>

            <CtaVisual>
              <CtaImage src={cta.image} alt={cta.imageAlt} />
            </CtaVisual>
          </CtaGrid>
        </CtaSection>
      </ServicesInner>
    </ServicesPageShell>
  );
}

function toServiceId(title) {
  return title.toLowerCase().replace(/\s+/g, "-");
}

function HeroHighlightIcon({ type }) {
  switch (type) {
    case "guidance":
      return <ExpertIcon />;
    case "lock":
      return <LockIcon />;
    default:
      return <ShieldIcon />;
  }
}

function JourneyStepIcon({ type }) {
  switch (type) {
    case "register":
      return <DocumentIcon />;
    case "legal":
      return <ScalesIcon />;
    case "inspect":
      return <InspectIcon />;
    case "valuation":
      return <ValuationIcon />;
    default:
      return <LandIcon />;
  }
}

function FeatureStatIcon({ type }) {
  switch (type) {
    case "experts":
      return <ExpertIcon />;
    case "documents":
      return <DocumentIcon />;
    case "satisfaction":
      return <ThumbsUpIcon />;
    default:
      return <UsersIcon />;
  }
}

function ReasonItemIcon({ type }) {
  switch (type) {
    case "eye":
      return <EyeIcon />;
    case "gavel":
      return <GavelIcon />;
    case "support":
      return <SupportIcon />;
    default:
      return <BadgeIcon />;
  }
}

function BadgeIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="6.8" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M10 6.5V13.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M6.5 10H13.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 3.6L18 6.1V10.9C18 14.86 15.45 18.35 12 19.8C8.55 18.35 6 14.86 6 10.9V6.1L12 3.6Z"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 11.2L11.3 13L14.9 9.4"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ExpertIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="9" cy="8.2" r="3" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M4.6 18.2C4.6 15.58 6.63 13.8 9 13.8C11.37 13.8 13.4 15.58 13.4 18.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M16 9.3L17.6 10.9L20.6 7.9"
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
        d="M8.8 10V7.7C8.8 5.93 10.23 4.5 12 4.5C13.77 4.5 15.2 5.93 15.2 7.7V10"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M12 13.2V15.6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LargeShieldIcon() {
  return (
    <svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M60 6L103 22V58C103 90.8 84.8 118.6 60 131C35.2 118.6 17 90.8 17 58V22L60 6Z"
        fill="url(#shieldFill)"
        stroke="white"
        strokeWidth="7"
      />
      <path
        d="M40 67L54 81L84 51"
        stroke="white"
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="shieldFill"
          x1="60"
          y1="6"
          x2="60"
          y2="131"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#37A259" />
          <stop offset="1" stopColor="#0D6A34" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function LandIcon() {
  return (
    <svg viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7 18.8C8.7 16.4 10.7 15.2 13 15.2C15.3 15.2 17.3 16.4 19 18.8"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <path
        d="M13 5.5C15.76 5.5 18 7.74 18 10.5C18 14.1 13 18.6 13 18.6C13 18.6 8 14.1 8 10.5C8 7.74 10.24 5.5 13 5.5Z"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinejoin="round"
      />
      <circle
        cx="13"
        cy="10.5"
        r="1.8"
        stroke="currentColor"
        strokeWidth="1.9"
      />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 4.8H15.5L19 8.3V20C19 20.99 18.19 21.8 17.2 21.8H8.8C7.81 21.8 7 20.99 7 20V6.6C7 5.61 7.81 4.8 8.8 4.8H8Z"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinejoin="round"
      />
      <path
        d="M15.5 4.8V8.3H19"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinejoin="round"
      />
      <path
        d="M10.2 11.2H16"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <path
        d="M10.2 14.7H16"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <path
        d="M10.2 18.2H13.9"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ScalesIcon() {
  return (
    <svg viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13 5.2V20.8"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <path
        d="M7.2 8H18.8"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <path
        d="M9.3 8L6.1 13H12.5L9.3 8Z"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinejoin="round"
      />
      <path
        d="M16.7 8L13.5 13H19.9L16.7 8Z"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InspectIcon() {
  return (
    <svg viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.2 20.2V11.1L13 7L18.8 11.1V14.5"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinejoin="round"
      />
      <path
        d="M10.7 20.2V15.8H15.3V18.2"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinejoin="round"
      />
      <circle
        cx="18.2"
        cy="18.2"
        r="3.1"
        stroke="currentColor"
        strokeWidth="1.9"
      />
      <path
        d="M20.6 20.6L22.5 22.5"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ValuationIcon() {
  return (
    <svg viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7 18.5V10.5L13 6L19 10.5V18.5"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinejoin="round"
      />
      <path
        d="M9.8 18.5V14.2H13.9"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="18.5"
        cy="18"
        r="3.1"
        stroke="currentColor"
        strokeWidth="1.9"
      />
      <path
        d="M18.5 16.2V19.8"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <path
        d="M16.7 18H20.3"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SmallCheckIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="6" fill="currentColor" fillOpacity="0.16" />
      <path
        d="M5.1 8.2L7.1 10.2L11 6.3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.5 8H12.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M9.4 4.9L12.5 8L9.4 11.1"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle
        cx="10.2"
        cy="9.1"
        r="3"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M5 19.4C5 16.7 7.16 14.9 10.2 14.9C13.24 14.9 15.4 16.7 15.4 19.4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M16.8 9.8C18.29 10.07 19.4 11.37 19.4 12.95C19.4 14.53 18.29 15.83 16.8 16.1"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ThumbsUpIcon() {
  return (
    <svg viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.5 11.5L13 6.2C13.33 5.5 13.96 5 14.7 5C15.63 5 16.38 5.79 16.32 6.72L16 11.5H19.4C20.37 11.5 21.1 12.38 20.92 13.33L19.9 18.73C19.74 19.58 18.99 20.2 18.13 20.2H10.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <rect
        x="5.2"
        y="11.5"
        width="3.6"
        height="8.7"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function ClipboardIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="4.5"
        y="4.2"
        width="11"
        height="13"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <rect
        x="7.1"
        y="2.8"
        width="5.8"
        height="2.6"
        rx="1.2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function CompareProcessIcon() {
  return (
    <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.5 12.8V7.6L9 4.2L13.5 7.6V12.8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M7.1 12.8V9.9H10.9V12.8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HomeMarkIcon() {
  return (
    <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.8 8.4L9 4.5L14.2 8.4V13.7H10.8V10.7H7.2V13.7H3.8V8.4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M6.4 8.9L8.1 10.6L11.6 7.1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function NegativeIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="6" fill="#FDE9E8" />
      <path
        d="M5.5 5.5L10.5 10.5"
        stroke="#E34C43"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M10.5 5.5L5.5 10.5"
        stroke="#E34C43"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PositiveIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="6" fill="#E8F6EC" />
      <path
        d="M5.2 8.2L7.1 10.1L10.9 6.3"
        stroke="#18713A"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.8 12C5.87 8.52 8.69 6.8 12 6.8C15.31 6.8 18.13 8.52 20.2 12C18.13 15.48 15.31 17.2 12 17.2C8.69 17.2 5.87 15.48 3.8 12Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="2.6" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function GavelIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.2 7.2L16.8 15.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <rect
        x="5.4"
        y="5.8"
        width="4.2"
        height="2.8"
        rx="0.8"
        transform="rotate(-45 5.4 5.8)"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <rect
        x="13.4"
        y="13.8"
        width="4.2"
        height="2.8"
        rx="0.8"
        transform="rotate(-45 13.4 13.8)"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M6 19H18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle
        cx="9.2"
        cy="8.3"
        r="2.9"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M4.7 18.2C4.7 15.65 6.63 13.9 9.2 13.9C11.77 13.9 13.7 15.65 13.7 18.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M16.2 10.2H20.3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M18.25 8.15V12.25"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CalendarSupportIcon() {
  return (
    <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="5.2"
        y="6"
        width="17.6"
        height="16.2"
        rx="3"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M9.2 3.8V8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M18.8 3.8V8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M5.2 10.6H22.8" stroke="currentColor" strokeWidth="2" />
      <path
        d="M11 16.3H17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SmallShieldIcon() {
  return (
    <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9 2.8L13.6 4.6V8.3C13.6 11.14 11.85 13.65 9 14.8C6.15 13.65 4.4 11.14 4.4 8.3V4.6L9 2.8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M7.1 8.6L8.4 9.9L10.9 7.4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Services;
