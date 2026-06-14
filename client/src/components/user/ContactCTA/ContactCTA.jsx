import {
  ActionRow,
  BackdropSkyline,
  ButtonIcon,
  ButtonLink,
  Birds,
  Copy,
  OuterSection,
  FloatingCards,
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
        </Copy>

        <HeroPanel>
          <BackdropSkyline aria-hidden="true">
            <SkylineIcon />
          </BackdropSkyline>
          <Birds aria-hidden="true">
            <BirdsIcon />
          </Birds>
          <HeroArt>
            <HeroImage src={heroImage} alt={heroImageAlt} />
          </HeroArt>

          <FloatingCards>
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
          </FloatingCards>
        </HeroPanel>

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

function BirdsIcon() {
  return (
    <svg viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 23C14.9 15.5 21.9 15.8 29 23C35.6 29.2 42.1 29.3 48 23"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M56 39C61.8 32.5 67.6 32.7 73.4 39C78.8 44.4 84.1 44.6 89 39"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SkylineIcon() {
  return (
    <svg viewBox="0 0 320 420" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.88">
        <Tower x="18" y="228" width="40" height="156" />
        <Tower x="82" y="170" width="54" height="214" />
        <Tower x="156" y="70" width="74" height="314" />
        <Tower x="252" y="134" width="58" height="250" />
      </g>
    </svg>
  );
}

function Tower({ x, y, width, height }) {
  const domeY = y + height * 0.16;
  const baseY = y + height;
  const middleX = x + width / 2;
  const bodyWidth = width * 0.44;
  const bodyLeft = middleX - bodyWidth / 2;
  const topWidth = width * 0.2;
  const topLeft = middleX - topWidth / 2;

  return (
    <g transform={`translate(${x} ${y})`}>
      <path
        d={`
          M ${width * 0.5} 0
          L ${width * 0.62} ${height * 0.16}
          H ${width * 0.56}
          V ${height * 0.22}
          C ${width * 0.78} ${height * 0.29}, ${width * 0.78} ${height * 0.39}, ${width * 0.62} ${height * 0.46}
          V ${height * 0.78}
          C ${width * 0.76} ${height * 0.82}, ${width * 0.86} ${height * 0.9}, ${width * 0.88} ${height}
          H ${width * 0.12}
          C ${width * 0.14} ${height * 0.9}, ${width * 0.24} ${height * 0.82}, ${width * 0.38} ${height * 0.78}
          V ${height * 0.46}
          C ${width * 0.22} ${height * 0.39}, ${width * 0.22} ${height * 0.29}, ${width * 0.44} ${height * 0.22}
          V ${height * 0.16}
          H ${width * 0.38}
          L ${width * 0.5} 0
          Z
        `}
        fill="currentColor"
        fillOpacity="0.18"
      />
      <rect
        x={bodyLeft - x}
        y={height * 0.18}
        width={bodyWidth}
        height={height * 0.6}
        rx={bodyWidth * 0.18}
        fill="currentColor"
        fillOpacity="0.16"
      />
      <rect
        x={topLeft - x}
        y={height * 0.08}
        width={topWidth}
        height={height * 0.12}
        rx={topWidth * 0.35}
        fill="currentColor"
        fillOpacity="0.18"
      />
      <path
        d={`M ${middleX - x} ${domeY} V ${baseY - y}`}
        stroke="currentColor"
        strokeOpacity="0.16"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </g>
  );
}

export default ContactCTA;

