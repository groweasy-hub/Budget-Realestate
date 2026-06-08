import {
  ActionRow,
  ButtonIcon,
  ButtonLink,
  Copy,
  OuterSection,
  FloatingCard,
  FloatingCardEyebrow,
  FloatingCardIcon,
  FloatingCardValue,
  HeroArt,
  HeroImage,
  HeroPanel,
  KickerPill,
  Title,
  Description,
  SectionShell,
} from "./ContactCTAStyles";

const DEFAULT_FLOATING_CARDS = [
  {
    id: "clients",
    position: "top",
    eyebrow: "Trusted by",
    value: "10,000+",
    description: "Happy Clients",
    icon: "shield",
  },
  {
    id: "transparency",
    position: "bottom",
    eyebrow: "Verified Listings",
    value: "100%",
    description: "Transparency",
    icon: "check",
  },
  {
    id: "growth",
    position: "right",
    eyebrow: "Growth Focused",
    value: "High ROI",
    description: "Opportunities",
    icon: "chart",
  },
];

function ContactCTA({
  kicker = "Let's Get Started",
  title = "Ready to Find Your Next Property?",
  description = "Whether you're buying, renting, investing, or exploring auctions, we help you make smarter real estate decisions.",
  primaryLabel = "Browse Properties",
  primaryTo = "/buy",
  secondaryLabel = "Talk to an Expert",
  secondaryTo = "/services",
  heroImage = "/Images/CTA-house.png",
  heroImageAlt = "Modern house illustration",
  floatingCards = DEFAULT_FLOATING_CARDS,
}) {
  const cards = floatingCards.length ? floatingCards : DEFAULT_FLOATING_CARDS;

  return (
    <OuterSection as="section">
      <SectionShell>
        <Copy>
          <KickerPill>
            <SparkleIcon />
            <span>{kicker}</span>
          </KickerPill>
          <Title>{title}</Title>
          <Description>{description}</Description>

          <ActionRow>
            <ButtonLink to={primaryTo}>
              <span>{primaryLabel}</span>
              <ButtonIcon>
                <ArrowIcon />
              </ButtonIcon>
            </ButtonLink>
            <ButtonLink to={secondaryTo} $ghost>
              <span>{secondaryLabel}</span>
              <ButtonIcon $ghost>
                <PhoneIcon />
              </ButtonIcon>
            </ButtonLink>
          </ActionRow>
        </Copy>

        <HeroPanel>
          <HeroArt>
            <HeroImage src={heroImage} alt={heroImageAlt} />
          </HeroArt>

          {cards.map((card) => (
            <FloatingCard key={card.id || card.value} $position={card.position}>
              <FloatingCardIcon>
                <StatIcon type={card.icon} />
              </FloatingCardIcon>
              <div>
                <FloatingCardEyebrow>{card.eyebrow}</FloatingCardEyebrow>
                <FloatingCardValue>{card.value}</FloatingCardValue>
                <p>{card.description}</p>
              </div>
            </FloatingCard>
          ))}
        </HeroPanel>
      </SectionShell>
    </OuterSection>
  );
}

function StatIcon({ type = "shield" }) {
  switch (type) {
    case "chart":
      return <ChartIcon />;
    case "check":
      return <CheckCircleIcon />;
    default:
      return <ShieldIcon />;
  }
}

function SparkleIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 2.7L11.7 7.1L16.1 8.8L11.7 10.5L10 14.9L8.3 10.5L3.9 8.8L8.3 7.1L10 2.7Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.2 10H15.8"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <path
        d="M10.9 5.1L15.8 10L10.9 14.9"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.3 3.7H8.4C8.8 3.7 9.1 4 9.2 4.3L10.1 7.2C10.2 7.6 10 8.1 9.6 8.3L8.1 9.1C9 10.8 10.4 12.2 12.1 13.1L12.9 11.6C13.1 11.2 13.6 11 14 11.1L16.9 12C17.2 12.1 17.5 12.4 17.5 12.8V14.9C17.5 15.5 17 16 16.4 16H15.1C8.9 16 4 11.1 4 4.9V3.6C4 3 4.5 2.5 5.1 2.5H6.3V3.7Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 3L18 5.3V10.3C18 14.4 15.5 18 12 19.5C8.5 18 6 14.4 6 10.3V5.3L12 3Z"
        fill="currentColor"
        fillOpacity="0.18"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M9.2 10.8L11.2 12.9L15 8.9"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckCircleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle
        cx="12"
        cy="12"
        r="8.5"
        fill="currentColor"
        fillOpacity="0.16"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M8.5 12.2L10.8 14.5L15.4 9.7"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5 18.5H19"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M7.2 16.3V12.6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M12 16.3V9.6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M16.8 16.3V6.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M7.2 8.9L10.2 6.4L13.2 8.1L17 4.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ContactCTA;
