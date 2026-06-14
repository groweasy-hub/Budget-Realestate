import {
  CardArrow,
  Card,
  CardAccent,
  CardBody,
  CardCopy,
  CardDescription,
  CardDots,
  CardIconDisc,
  CardTitle,
  Description,
  FeatureGrid,
  HeaderCopy,
  HeroImage,
  HeroStage,
  HeroWrap,
  Kicker,
  KickerLine,
  KickerRow,
  Section,
  SplitLayout,
  Title,
} from "./WhyChooseUsStyles";

const FALLBACK_POINTS = [
  {
    title: "Verified Listings",
    description:
      "Every listing is screened for pricing sanity, location clarity, and authenticity.",
    icon: "shield",
  },
  {
    title: "Budget Friendly",
    description:
      "EMI-aware discovery helps users compare smart homes without overcommitting.",
    icon: "wallet",
  },
  {
    title: "Legal Assistance",
    description:
      "From title review to auction paperwork, we reduce hidden legal friction.",
    icon: "gavel",
  },
  {
    title: "Property Inspection",
    description:
      "Independent inspection support helps buyers and tenants avoid costly surprises.",
    icon: "inspection",
  },
  {
    title: "Trusted Agents",
    description:
      "Human guidance stays available for shortlists, negotiations, and final closure.",
    icon: "agent",
  },
  {
    title: "Transparent Pricing",
    description:
      "Clear price context, estimated EMIs, and market references keep decisions grounded.",
    icon: "pricing",
  },
];

function WhyChooseUs({
  kicker = "Why Choose Us",
  title = "Why Choose Us",
  description = "Built for people who want transparent property decisions without wasting time or budget.",
  points = [],
  heroImage,
  heroImageAlt = "Why choose us illustration",
}) {
  const resolvedPoints = points.length ? points : FALLBACK_POINTS;
  const heroImageSrc = resolveAssetPath(heroImage);

  return (
    <Section id="why-choose-us">
      <SplitLayout>
        <HeaderCopy>
          <KickerRow>
            <KickerLine />
            <Kicker>{kicker}</Kicker>
            <KickerLine />
          </KickerRow>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </HeaderCopy>

        <HeroWrap>
          <HeroStage $hasImage={Boolean(heroImageSrc)}>
            {heroImageSrc ? (
              <HeroImage src={heroImageSrc} alt={heroImageAlt} />
            ) : null}
          </HeroStage>
        </HeroWrap>
      </SplitLayout>

      <FeatureGrid>
        {resolvedPoints.map((point) => (
          <Card key={point.title}>
            <CardDots aria-hidden="true">
              <span />
              <span />
              <span />
            </CardDots>
            <CardBody>
              <CardIconDisc>
                <Icon type={point.icon || inferIcon(point.title)} />
              </CardIconDisc>
              <CardCopy>
                <CardTitle>{point.title}</CardTitle>
                <CardAccent />
                <CardDescription>{point.description}</CardDescription>
              </CardCopy>
            </CardBody>
            <CardArrow aria-hidden="true">
              <ChevronRightIcon />
            </CardArrow>
          </Card>
        ))}
      </FeatureGrid>
    </Section>
  );
}

function inferIcon(title = "") {
  const value = title.toLowerCase();

  if (value.includes("verify")) {
    return "shield";
  }

  if (value.includes("budget")) {
    return "wallet";
  }

  if (value.includes("legal")) {
    return "gavel";
  }

  if (value.includes("inspect")) {
    return "inspection";
  }

  if (value.includes("agent")) {
    return "agent";
  }

  return "pricing";
}

function resolveAssetPath(path) {
  if (!path) {
    return "";
  }

  if (/^(https?:|data:|blob:)/.test(path)) {
    return path;
  }

  if (path.startsWith("/")) {
    return `${process.env.PUBLIC_URL || ""}${path}`;
  }

  return path;
}

function Icon({ type = "shield" }) {
  switch (type) {
    case "wallet":
      return <WalletIcon />;
    case "gavel":
      return <GavelIcon />;
    case "inspection":
      return <InspectionIcon />;
    case "agent":
      return <AgentIcon />;
    case "pricing":
      return <PricingIcon />;
    default:
      return <ShieldIcon />;
  }
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M32 8L49.5 14.6V28.9C49.5 40.8 42.1 51.6 32 56C21.9 51.6 14.5 40.8 14.5 28.9V14.6L32 8Z"
        fill="currentColor"
        fillOpacity="0.16"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinejoin="round"
      />
      <path
        d="M24.2 31.8L29.1 36.8L40.4 24.8"
        stroke="currentColor"
        strokeWidth="3.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WalletIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="10"
        y="16"
        width="44"
        height="32"
        rx="7"
        fill="currentColor"
        fillOpacity="0.14"
        stroke="currentColor"
        strokeWidth="2.8"
      />
      <path
        d="M37 27.8H54V38.4H37C33.8 38.4 31.2 36 31.2 33.1C31.2 30.2 33.8 27.8 37 27.8Z"
        fill="white"
        stroke="currentColor"
        strokeWidth="2.8"
      />
      <circle cx="39.8" cy="33.1" r="2.3" fill="currentColor" />
    </svg>
  );
}

function GavelIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M24.5 18.5L34.5 28.5"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M20 23L29.9 32.9"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <rect
        x="31.8"
        y="11.8"
        width="8.6"
        height="23"
        rx="2.8"
        transform="rotate(45 31.8 11.8)"
        fill="currentColor"
        fillOpacity="0.14"
        stroke="currentColor"
        strokeWidth="2.8"
      />
      <rect
        x="16.2"
        y="27.5"
        width="8.6"
        height="23"
        rx="2.8"
        transform="rotate(45 16.2 27.5)"
        fill="currentColor"
        fillOpacity="0.14"
        stroke="currentColor"
        strokeWidth="2.8"
      />
      <path
        d="M36 37L46.5 47.5"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M18 49H44"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function InspectionIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="27" cy="27" r="17" stroke="currentColor" strokeWidth="3.2" />
      <path
        d="M39.2 39.2L52 52"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M19.5 28.7V23.3L27 17.5L34.5 23.3V36.4H29.7V28.7H24.3V36.4H19.5V28.7Z"
        fill="currentColor"
        fillOpacity="0.16"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AgentIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle
        cx="28"
        cy="22"
        r="10"
        fill="currentColor"
        fillOpacity="0.14"
        stroke="currentColor"
        strokeWidth="2.8"
      />
      <path
        d="M15 49C15 40.7 21.7 34 30 34C38.3 34 45 40.7 45 49V52H15V49Z"
        fill="currentColor"
        fillOpacity="0.14"
        stroke="currentColor"
        strokeWidth="2.8"
      />
      <path
        d="M50.6 35.7L52.6 39.8L57 40.4L53.8 43.5L54.6 47.8L50.6 45.7L46.7 47.8L47.4 43.5L44.3 40.4L48.7 39.8L50.6 35.7Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PricingIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="16"
        y="11"
        width="24"
        height="42"
        rx="5"
        fill="currentColor"
        fillOpacity="0.14"
        stroke="currentColor"
        strokeWidth="2.8"
      />
      <path
        d="M22 22H34"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <path
        d="M22 31H34"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <circle
        cx="43.5"
        cy="42.5"
        r="9.5"
        fill="white"
        stroke="currentColor"
        strokeWidth="2.8"
      />
      <path
        d="M43.4 37.6V47.4"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M40.3 39.8H45.4C46.7 39.8 47.7 40.6 47.7 41.8C47.7 43 46.7 43.9 45.4 43.9H39.8"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9 6L15 12L9 18"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default WhyChooseUs;

