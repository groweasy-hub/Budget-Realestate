import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { siteNavbar } from "../../data/HomePageContent";
import { contactPageContent } from "../../data/ContactPageContent";
import { NavWrap } from "../Home/HomeStyles";
import {
  ActionButton,
  ActionCard,
  ActionHeader,
  ActionIcon,
  ActionIllustration,
  ActionsGrid,
  ActionText,
  ActionTitle,
  BottomCta,
  BottomCtaGrid,
  BottomCtaIcon,
  BottomCtaPrimary,
  BottomCtaText,
  BottomCtaTitle,
  ChairIllustration,
  ChairVisual,
  CircleGlow,
  ContactInner,
  ContactPageShell,
  DarkOutlineButton,
  ExpertAvatar,
  ExpertCard,
  ExpertContent,
  ExpertsGrid,
  ExpertsSection,
  ExpertMeta,
  ExpertName,
  ExpertRole,
  ExpertStar,
  FloatingCard,
  FloatingCards,
  FloatingIcon,
  FloatingText,
  FloatingTitle,
  FormGrid,
  FormPanel,
  FormSection,
  FormSidebar,
  FullRow,
  HeroAccent,
  HeroCopy,
  HeroGlow,
  HeroGrid,
  HeroHighlights,
  HeroImage,
  HeroParagraph,
  HeroSection,
  HeroTitle,
  HeroVisual,
  HighlightIcon,
  HighlightItem,
  HighlightText,
  HighlightTitle,
  IllustrationBase,
  Input,
  InputIcon,
  InputWrap,
  LightButton,
  MobileBottomHelp,
  MobileBottomText,
  MobileContactReplica,
  MobileContent,
  MobileField,
  MobileForm,
  MobileHero,
  MobileHeroBadge,
  MobileHeroHouse,
  MobileHeroText,
  MobileHeroTitle,
  MobileHeroVisual,
  MobileInfoCard,
  MobileInfoGrid,
  MobileInfoIcon,
  MobileInfoText,
  MobileInfoTitle,
  MobileInlineLink,
  MobileInput,
  MobileMap,
  MobileMapCard,
  MobileMapPin,
  MobileMapText,
  MobileMapTitle,
  MobileMessageField,
  MobileMessageLabel,
  MobileOrbitIcon,
  MobileSectionTitle,
  MobileSelectLabel,
  MobileSubmit,
  MobileTextarea,
  MobileWhatsappButton,
  MobileWide,
  OfficeCard,
  OfficeHours,
  OfficeImage,
  OfficeLocation,
  OfficeName,
  OfficesGrid,
  OfficesSection,
  OutlineButton,
  SectionAction,
  SectionHeaderRow,
  SectionText,
  SectionTitle,
  SectionUnderline,
  Select,
  SelectIcon,
  SelectWrap,
  Signature,
  SmallActionButton,
  StatHeading,
  StatIcon,
  StatItem,
  StatsSection,
  StatText,
  StatValue,
  SubmitButton,
  TableIllustration,
  Textarea,
  TextareaWrap,
} from "./ContactStyles";

function Contact() {
  const { hero, quickActions, consultation, experts, offices, stats, cta } =
    contactPageContent;
  const [selectedService, setSelectedService] = useState(
    consultation.services[0],
  );

  return (
    <ContactPageShell>
      <NavWrap>
        <Navbar links={siteNavbar.links} ctaLabel={siteNavbar.ctaLabel} />
      </NavWrap>

      <MobileContactReplica>
        <MobileHero>
          <MobileHeroBadge>
            <MessageBubbleIcon />
            CONTACT US
          </MobileHeroBadge>
          <MobileHeroTitle>
            We're Here
            <br />
            <span>To Help You</span>
          </MobileHeroTitle>
          <MobileHeroText>
            Have questions or need assistance? Our team is ready to help you
            with all your property needs.
          </MobileHeroText>
          <MobileHeroVisual>
            <MobileOrbitIcon $left="18px" $top="20px" $size={39} $icon={20}>
              <PhoneIcon />
            </MobileOrbitIcon>
            <MobileOrbitIcon $left="170px" $top="-7px" $size={35} $icon={19}>
              <MailIcon />
            </MobileOrbitIcon>
            <MobileOrbitIcon $left="2px" $top="116px" $size={37} $icon={20}>
              <HeadsetIcon />
            </MobileOrbitIcon>
            <MobileHeroHouse src={hero.image} alt={hero.imageAlt} />
          </MobileHeroVisual>
        </MobileHero>

        <MobileContent>
          <MobileSectionTitle>Get in Touch</MobileSectionTitle>
          <MobileInfoGrid>
            <MobileInfoCard>
              <MobileInfoIcon>
                <LocationPinIcon />
              </MobileInfoIcon>
              <div>
                <MobileInfoTitle>Our Office</MobileInfoTitle>
                <MobileInfoText>
                  Budget RealEstate HQ
                  <br />
                  Hyderabad, Telangana,
                  <br />
                  India - 500001
                </MobileInfoText>
              </div>
            </MobileInfoCard>

            <MobileInfoCard>
              <MobileInfoIcon>
                <PhoneIcon />
              </MobileInfoIcon>
              <div>
                <MobileInfoTitle>Call Us</MobileInfoTitle>
                <MobileInfoText>
                  +91 XXXXXXXXXX
                  <br />
                  <br />
                  Mon - Sat
                  <br />
                  9:00 AM - 7:00 PM
                </MobileInfoText>
              </div>
            </MobileInfoCard>

            <MobileInfoCard>
              <MobileInfoIcon>
                <MailIcon />
              </MobileInfoIcon>
              <div>
                <MobileInfoTitle>Email Us</MobileInfoTitle>
                <MobileInfoText>
                  hello@budgetrealestate.com
                  <br />
                  <br />
                  We'll respond within
                  <br />
                  24 hours
                </MobileInfoText>
              </div>
            </MobileInfoCard>

            <MobileInfoCard>
              <MobileInfoIcon>
                <HeadsetIcon />
              </MobileInfoIcon>
              <div>
                <MobileInfoTitle>Support</MobileInfoTitle>
                <MobileInfoText>
                  Need help with something
                  <br />
                  urgent?
                </MobileInfoText>
                <MobileInlineLink href="https://wa.me/" aria-label="Chat on WhatsApp">
                  Chat on WhatsApp
                  <WhatsAppIcon />
                </MobileInlineLink>
              </div>
            </MobileInfoCard>
          </MobileInfoGrid>

          <MobileSectionTitle>Send Us a Message</MobileSectionTitle>
          <MobileForm>
            <MobileField>
              <UserIcon />
              <MobileInput placeholder="Full Name" />
            </MobileField>
            <MobileField>
              <PhoneIcon />
              <MobileInput placeholder="Phone Number" />
            </MobileField>
            <MobileWide>
              <MobileField>
                <MailIcon />
                <MobileInput placeholder="Email Address" />
              </MobileField>
            </MobileWide>
            <MobileSelectLabel>
              <CalendarIcon />
              <select defaultValue="">
                <option value="" disabled>
                  Subject
                </option>
                <option>Property enquiry</option>
              </select>
              <span>
                <ChevronDownIcon />
              </span>
            </MobileSelectLabel>
            <MobileSelectLabel>
              <TagIcon />
              <select defaultValue="">
                <option value="" disabled>
                  Service Needed
                </option>
                {consultation.services.map((service) => (
                  <option key={service}>{service}</option>
                ))}
              </select>
              <span>
                <ChevronDownIcon />
              </span>
            </MobileSelectLabel>
            <MobileWide>
              <MobileMessageField>
                <MessageBubbleIcon />
                <MobileMessageLabel>Your Message</MobileMessageLabel>
                <MobileTextarea placeholder="Type your message here..." />
              </MobileMessageField>
            </MobileWide>
            <MobileSubmit type="button">
              Send Message
              <PaperPlaneIcon />
            </MobileSubmit>
          </MobileForm>

          <MobileSectionTitle style={{ marginTop: 17 }}>Find Us</MobileSectionTitle>
          <MobileMap>
            <MobileMapPin />
            <MobileMapCard>
              <MobileMapTitle>Budget RealEstate HQ</MobileMapTitle>
              <MobileMapText>Hyderabad, Telangana, India</MobileMapText>
              <MobileInlineLink href="https://maps.google.com" aria-label="View on Google Maps">
                View on Google Maps
                <ExternalIcon />
              </MobileInlineLink>
            </MobileMapCard>
          </MobileMap>

          <MobileBottomHelp>
            <MobileInfoIcon>
              <HeadsetIcon />
            </MobileInfoIcon>
            <MobileBottomText>
              <h3>Need immediate help?</h3>
              <p>Our support team is just a message away.</p>
            </MobileBottomText>
            <MobileWhatsappButton href="https://wa.me/">
              Chat on WhatsApp
              <WhatsAppIcon />
            </MobileWhatsappButton>
          </MobileBottomHelp>
        </MobileContent>
      </MobileContactReplica>

      <ContactInner>
        <HeroSection>
          <HeroGrid>
            <HeroCopy>
              <HeroTitle>
                {hero.title}
                <br />
                {hero.titleLineTwo}
                <br />
                With a <HeroAccent>{hero.accentText}</HeroAccent>
              </HeroTitle>

              <HeroParagraph>{hero.descriptionPrimary}</HeroParagraph>
              <HeroParagraph style={{ marginTop: 10 }}>
                {hero.descriptionSecondary}
              </HeroParagraph>

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

              <FloatingCards>
                {hero.floatingCards.map((item) => (
                  <FloatingCard key={item.title}>
                    <FloatingIcon>
                      <HeroHighlightIcon type={item.icon} />
                    </FloatingIcon>
                    <div>
                      <FloatingTitle>{item.title}</FloatingTitle>
                      <FloatingText>{item.text}</FloatingText>
                    </div>
                  </FloatingCard>
                ))}
              </FloatingCards>
            </HeroVisual>
          </HeroGrid>
        </HeroSection>

        <ActionsGrid>
          {quickActions.map((item) => (
            <ActionCard key={item.title}>
              <ActionHeader>
                <ActionIcon>
                  <QuickActionIcon type={item.icon} />
                </ActionIcon>
                <ActionTitle>{item.title}</ActionTitle>
              </ActionHeader>
              <ActionText>{item.description}</ActionText>
              <ActionButton type="button">
                {item.buttonLabel}
                <ArrowRightIcon />
              </ActionButton>
              <ActionIllustration>
                <QuickActionArt type={item.illustration} />
              </ActionIllustration>
            </ActionCard>
          ))}
        </ActionsGrid>

        <FormSection>
          <FormPanel>
            <SectionTitle>{consultation.title}</SectionTitle>
            <SectionUnderline />
            <SectionText>{consultation.description}</SectionText>

            <FormGrid>
              <InputWrap>
                <Input placeholder="Full Name" />
                <InputIcon>
                  <UserIcon />
                </InputIcon>
              </InputWrap>

              <InputWrap>
                <Input placeholder="Phone Number" />
                <InputIcon>
                  <PhoneIcon />
                </InputIcon>
              </InputWrap>

              <div style={{ gridColumn: "1 / -1" }}>
                <InputWrap>
                  <Input placeholder="Email Address" />
                  <InputIcon>
                    <MailIcon />
                  </InputIcon>
                </InputWrap>
              </div>

              <div>
                <div
                  style={{
                    color: "#1f2d27",
                    fontSize: "0.84rem",
                    fontWeight: 700,
                    marginBottom: 8,
                  }}
                >
                  Preferred Date
                </div>
                <InputWrap>
                  <Input placeholder="Select Date" />
                  <InputIcon>
                    <CalendarIcon />
                  </InputIcon>
                </InputWrap>
              </div>

              <div>
                <div
                  style={{
                    color: "#1f2d27",
                    fontSize: "0.84rem",
                    fontWeight: 700,
                    marginBottom: 8,
                  }}
                >
                  Preferred Time
                </div>
                <InputWrap>
                  <Input placeholder="Select Time" />
                  <InputIcon>
                    <ClockIcon />
                  </InputIcon>
                </InputWrap>
              </div>

              <div style={{ gridColumn: 3, gridRow: 3 }}>
                <div
                  style={{
                    color: "#1f2d27",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    marginBottom: 8,
                  }}
                >
                  Service Needed
                </div>
                <SelectWrap>
                  <Select
                    value={selectedService}
                    onChange={(event) => setSelectedService(event.target.value)}
                  >
                    {consultation.services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </Select>
                  <SelectIcon>
                    <ChevronDownIcon />
                  </SelectIcon>
                </SelectWrap>
              </div>

              <FullRow style={{ gridColumn: "1 / span 2" }}>
                <div
                  style={{
                    color: "#1f2d27",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    marginBottom: 8,
                  }}
                >
                  Message (Optional)
                </div>
                <TextareaWrap>
                  <Textarea placeholder="Tell us more about your requirement..." />
                </TextareaWrap>
              </FullRow>
            </FormGrid>

            <SubmitButton type="button">
              Schedule Consultation
              <ArrowRightIcon />
            </SubmitButton>
          </FormPanel>

          <FormSidebar>
            <SectionTitle style={{ maxWidth: 280 }}>
              {consultation.sidebar.title}
            </SectionTitle>
            <SectionUnderline />
            <SectionText style={{ maxWidth: 280 }}>
              {consultation.sidebar.text}
            </SectionText>
            <Signature>Jenna</Signature>

            <ChairVisual>
              <CircleGlow />
              <IllustrationBase />
              <TableIllustration />
              <ChairIllustration />
            </ChairVisual>
          </FormSidebar>
        </FormSection>

        <ExpertsSection>
          <SectionHeaderRow>
            <div>
              <SectionTitle>{experts.title}</SectionTitle>
              <SectionUnderline />
            </div>

            <SectionAction type="button">
              {experts.actionLabel}
              <ArrowRightIcon />
            </SectionAction>
          </SectionHeaderRow>

          <ExpertsGrid>
            {experts.items.map((item) => (
              <ExpertCard key={item.name}>
                <ExpertAvatar $tone={item.tone}>
                  <ExpertPortraitArt type={item.avatarLabel} />
                </ExpertAvatar>

                <ExpertContent>
                  <ExpertStar>
                    <BadgeStarIcon />
                  </ExpertStar>
                  <ExpertName>{item.name}</ExpertName>
                  <ExpertRole>{item.role}</ExpertRole>
                  <ExpertMeta>
                    {item.details.map((detail) => (
                      <div key={`${item.name}-${detail}`}>{detail}</div>
                    ))}
                  </ExpertMeta>

                  <SmallActionButton type="button">
                    <PhoneIcon />
                    Book Call
                  </SmallActionButton>
                </ExpertContent>
              </ExpertCard>
            ))}
          </ExpertsGrid>
        </ExpertsSection>

        <OfficesSection>
          <SectionHeaderRow>
            <div>
              <SectionTitle>{offices.title}</SectionTitle>
              <SectionUnderline />
            </div>

            <SectionAction type="button">
              {offices.actionLabel}
              <ArrowRightIcon />
            </SectionAction>
          </SectionHeaderRow>

          <OfficesGrid>
            {offices.items.map((item) => (
              <OfficeCard key={item.name}>
                <OfficeImage src={item.image} alt={item.imageAlt} />
                <div>
                  <OfficeName>{item.name}</OfficeName>
                  <OfficeLocation>
                    <LocationPinIcon />
                    {item.location}
                  </OfficeLocation>
                  <OfficeHours>{item.hours}</OfficeHours>
                  <OutlineButton type="button">
                    View Directions
                    <ArrowRightIcon />
                  </OutlineButton>
                </div>
              </OfficeCard>
            ))}
          </OfficesGrid>
        </OfficesSection>

        <StatsSection>
          {stats.map((item) => (
            <StatItem key={item.label}>
              <StatIcon>
                <StatsIcon type={item.icon} />
              </StatIcon>
              <div>
                <StatValue>{item.value}</StatValue>
                <StatHeading>{item.label}</StatHeading>
                <StatText>{item.text}</StatText>
              </div>
            </StatItem>
          ))}
        </StatsSection>

        <BottomCta>
          <BottomCtaGrid>
            <BottomCtaPrimary>
              <BottomCtaIcon>
                <HomeOutlineIcon />
              </BottomCtaIcon>
              <div>
                <BottomCtaTitle>{cta.title}</BottomCtaTitle>
                <BottomCtaText>{cta.text}</BottomCtaText>
              </div>
            </BottomCtaPrimary>

            <LightButton type="button">
              {cta.primaryLabel}
              <ArrowRightIcon />
            </LightButton>

            <DarkOutlineButton type="button">
              {cta.secondaryLabel}
              <PhoneIcon />
            </DarkOutlineButton>
          </BottomCtaGrid>
        </BottomCta>
      </ContactInner>
    </ContactPageShell>
  );
}

function HeroHighlightIcon({ type }) {
  switch (type) {
    case "clients":
      return <ClientsIcon />;
    case "star":
      return <StarRingIcon />;
    default:
      return <ShieldIcon />;
  }
}

function QuickActionIcon({ type }) {
  switch (type) {
    case "headset":
      return <HeadsetIcon />;
    case "home":
      return <HouseLineIcon />;
    default:
      return <CalendarLargeIcon />;
  }
}

function QuickActionArt({ type }) {
  switch (type) {
    case "chat":
      return <ChatArtIcon />;
    case "home":
      return <HomeArtIcon />;
    default:
      return <CalendarArtIcon />;
  }
}

function StatsIcon({ type }) {
  switch (type) {
    case "experts":
      return <UserBadgeIcon />;
    case "documents":
      return <DocumentIcon />;
    case "thumb":
      return <ThumbsUpIcon />;
    default:
      return <ClientsIcon />;
  }
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 3.8L18.4 6.4V11.1C18.4 15.15 15.74 18.64 12 20.2C8.26 18.64 5.6 15.15 5.6 11.1V6.4L12 3.8Z"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinejoin="round"
      />
      <path
        d="M9.2 11.4L11.2 13.4L14.9 9.7"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ClientsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8.7" cy="8.3" r="3" stroke="currentColor" strokeWidth="1.8" />
      <circle
        cx="16.3"
        cy="9.5"
        r="2.4"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M3.9 18.2C3.9 15.52 6.03 13.8 8.7 13.8C11.37 13.8 13.5 15.52 13.5 18.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M14.3 17C14.52 15.23 15.86 14 17.7 14C19.19 14 20.43 14.82 20.95 16.1"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function StarRingIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 4.5L13.95 8.45L18.3 9.08L15.15 12.15L15.89 16.48L12 14.43L8.11 16.48L8.85 12.15L5.7 9.08L10.05 8.45L12 4.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CalendarLargeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="4.5"
        y="5.7"
        width="15"
        height="13.8"
        rx="2.6"
        stroke="currentColor"
        strokeWidth="1.9"
      />
      <path
        d="M8.2 3.8V7"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <path
        d="M15.8 3.8V7"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <path d="M4.5 9.7H19.5" stroke="currentColor" strokeWidth="1.9" />
    </svg>
  );
}

function HeadsetIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.3 12.4C5.3 8.55 8.28 5.6 12 5.6C15.72 5.6 18.7 8.55 18.7 12.4"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <rect
        x="4.3"
        y="11.5"
        width="3.2"
        height="5.7"
        rx="1.2"
        stroke="currentColor"
        strokeWidth="1.9"
      />
      <rect
        x="16.5"
        y="11.5"
        width="3.2"
        height="5.7"
        rx="1.2"
        stroke="currentColor"
        strokeWidth="1.9"
      />
      <path
        d="M16.5 18.4C16.1 19.45 14.82 20.2 13.3 20.2H11.7"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
    </svg>
  );
}

function HouseLineIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.5 10L12 4.4L19.5 10V19H14.8V14.7H9.2V19H4.5V10Z"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinejoin="round"
      />
      <path
        d="M8.7 9.9L12 7.5L15.3 9.9"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CalendarArtIcon() {
  return (
    <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="28"
        y="30"
        width="88"
        height="98"
        rx="14"
        stroke="currentColor"
        strokeWidth="6"
      />
      <path
        d="M48 20V42"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M96 20V42"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path d="M28 54H116" stroke="currentColor" strokeWidth="6" />
      <path
        d="M50 78H64"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M74 78H88"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M50 100H64"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M74 100H88"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ChatArtIcon() {
  return (
    <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M40 44H110C123.255 44 134 54.7452 134 68V72C134 85.2548 123.255 96 110 96H82L58 116V96H40C26.7452 96 16 85.2548 16 72V68C16 54.7452 26.7452 44 40 44Z"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinejoin="round"
      />
      <path
        d="M42 68H108"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M42 84H88"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function HomeArtIcon() {
  return (
    <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M32 72L80 36L128 72V126H96V94H64V126H32V72Z"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinejoin="round"
      />
      <path
        d="M54 68L80 49L106 68"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M108 54C116 56 123.2 61.2 128 68"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="9" cy="5.6" r="2.4" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M4.8 14.5C4.8 12.17 6.61 10.6 9 10.6C11.39 10.6 13.2 12.17 13.2 14.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.6 3.6H7.2L8.1 6.8L6.9 7.9C7.53 9.14 8.56 10.16 9.8 10.8L10.9 9.6L14.1 10.5V12.1C14.1 12.82 13.52 13.4 12.8 13.4C7.94 13.4 4 9.46 4 4.6C4 3.88 4.58 3.3 5.3 3.3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="2.9"
        y="4.2"
        width="12.2"
        height="9.6"
        rx="1.8"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M4 5.4L9 9.1L14 5.4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="3"
        y="4.3"
        width="12"
        height="10.4"
        rx="1.8"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M6 2.8V5.1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12 2.8V5.1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M3 7H15" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M9 6V9.2L11.1 10.6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BadgeStarIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 2.4L9.3 5.1L12.3 5.53L10.15 7.62L10.66 10.58L8 9.18L5.34 10.58L5.85 7.62L3.7 5.53L6.7 5.1L8 2.4Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LocationPinIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 2.7C9.93 2.7 11.5 4.27 11.5 6.2C11.5 8.72 8 11.9 8 11.9C8 11.9 4.5 8.72 4.5 6.2C4.5 4.27 6.07 2.7 8 2.7Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="8" cy="6.2" r="1.2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function UserBadgeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="9.2" cy="8.4" r="3" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M4.6 18.3C4.6 15.65 6.62 13.9 9.2 13.9C11.78 13.9 13.8 15.65 13.8 18.3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M16.7 7.2V12.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M14.2 9.7H19.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.4 4.8H14.2L17.8 8.4V18.6C17.8 19.59 16.99 20.4 16 20.4H8C7.01 20.4 6.2 19.59 6.2 18.6V6C6.2 5.01 7.01 4.2 8 4.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M14.2 4.8V8.4H17.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9.2 11H14.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M9.2 14.3H14.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ThumbsUpIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.1 11.3L12.4 6.4C12.74 5.68 13.42 5.2 14.18 5.2C15.08 5.2 15.82 5.96 15.78 6.86L15.56 11.3H18.8C19.75 11.3 20.48 12.16 20.31 13.09L19.42 18.02C19.28 18.83 18.57 19.42 17.75 19.42H10.1"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <rect
        x="5"
        y="11.3"
        width="3.4"
        height="8.12"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function HomeOutlineIcon() {
  return (
    <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.6 12L14 5.8L22.4 12V22H16.8V16.8H11.2V22H5.6V12Z"
        stroke="currentColor"
        strokeWidth="2.1"
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

function MessageBubbleIcon() {
  return (
    <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.4 5.1C3.4 4.1 4.2 3.3 5.2 3.3H12.8C13.8 3.3 14.6 4.1 14.6 5.1V10.2C14.6 11.2 13.8 12 12.8 12H7.3L4.3 14.2V12H5.2C4.2 12 3.4 11.2 3.4 10.2V5.1Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M6.1 7.2H11.9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M6.1 9.2H9.9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function TagIcon() {
  return (
    <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.7 9.2V4.4H8.5L14.4 10.3L9.6 15.1L3.7 9.2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="6.5" cy="7.1" r="0.8" fill="currentColor" />
    </svg>
  );
}

function PaperPlaneIcon() {
  return (
    <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.2 3.1L7.3 10.9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M15.2 3.1L10.2 15.1L7.3 10.9L3 8.2L15.2 3.1Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7 4.4H4.6C3.7 4.4 3 5.1 3 6V13.2C3 14.1 3.7 14.8 4.6 14.8H11.8C12.7 14.8 13.4 14.1 13.4 13.2V10.8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M10.2 3.2H14.8V7.8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.3 9.7L14.5 3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.2 14L4.9 11.8C4.4 10.9 4.1 10 4.1 9C4.1 6.3 6.3 4.1 9 4.1C11.7 4.1 13.9 6.3 13.9 9C13.9 11.7 11.7 13.9 9 13.9C8.1 13.9 7.2 13.6 6.5 13.2L4.2 14Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M7.2 6.9C7 7.3 7 7.8 7.2 8.2C7.7 9.4 8.6 10.3 9.8 10.8C10.2 11 10.7 11 11.1 10.8L11.5 10C11.6 9.8 11.5 9.6 11.3 9.5L10.5 9.1C10.3 9 10.1 9 10 9.2L9.7 9.5C9 9.1 8.6 8.7 8.3 8.1L8.6 7.8C8.8 7.7 8.8 7.5 8.7 7.3L8.3 6.6C8.2 6.4 7.9 6.3 7.8 6.4L7.2 6.9Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ExpertPortraitArt({ type }) {
  if (type === "NR") {
    return (
      <svg viewBox="0 0 126 176" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="126" height="176" rx="18" fill="url(#bgFemale)" />
        <ellipse cx="63" cy="171" rx="42" ry="8" fill="rgba(0,0,0,0.08)" />
        <path
          d="M43 70C43 55.64 51.73 45 63 45C74.27 45 83 55.64 83 70V86H43V70Z"
          fill="#201F25"
        />
        <path
          d="M49 91C49 76.09 55.72 67 63 67C70.28 67 77 76.09 77 91V125H49V91Z"
          fill="#1A1A20"
        />
        <ellipse cx="63" cy="54" rx="15" ry="18" fill="#E2B8A2" />
        <path
          d="M48 55C48 40.64 55.39 30 63 30C70.61 30 78 40.64 78 55V59H48V55Z"
          fill="#231E20"
        />
        <path d="M52 73L74 73L82 131H44L52 73Z" fill="#111216" />
        <path d="M55 73L63 85L71 73L80 131H46L55 73Z" fill="#FFFFFF" />
        <path d="M59 85L63 90L67 85L64.8 131H61.2L59 85Z" fill="#1A1A20" />
        <path
          d="M63 61C66.31 61 69 58.31 69 55C69 51.69 66.31 49 63 49C59.69 49 57 51.69 57 55C57 58.31 59.69 61 63 61Z"
          fill="#E2B8A2"
        />
      </svg>
    );
  }

  if (type === "AM") {
    return (
      <svg viewBox="0 0 126 176" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="126" height="176" rx="18" fill="url(#bgMaleBlue)" />
        <ellipse cx="63" cy="171" rx="42" ry="8" fill="rgba(0,0,0,0.08)" />
        <ellipse cx="63" cy="52" rx="15" ry="18" fill="#D9B199" />
        <path
          d="M49 53C49 39.19 55.72 29 63 29C70.28 29 77 39.19 77 53V58H49V53Z"
          fill="#2A292E"
        />
        <path d="M52 72L74 72L83 131H43L52 72Z" fill="#314051" />
        <path d="M56 72L63 82L70 72L79 131H47L56 72Z" fill="#FFFFFF" />
        <path d="M60 82H66L68 131H58L60 82Z" fill="#6E7B8D" />
        <path
          d="M56 59C56 62.31 58.69 65 62 65H64C67.31 65 70 62.31 70 59V57H56V59Z"
          fill="#D9B199"
        />
        <rect x="55" y="54" width="16" height="4" rx="2" fill="#2F3238" />
        <rect x="56" y="67" width="14" height="2.6" rx="1.3" fill="#7A4D38" />
        <defs>
          <linearGradient
            id="bgMaleBlue"
            x1="63"
            y1="0"
            x2="63"
            y2="176"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#EEF2F6" />
            <stop offset="1" stopColor="#D9E2EA" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 126 176" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="126" height="176" rx="18" fill="url(#bgMaleGreen)" />
      <ellipse cx="63" cy="171" rx="42" ry="8" fill="rgba(0,0,0,0.08)" />
      <ellipse cx="63" cy="52" rx="15" ry="18" fill="#DDB39B" />
      <path
        d="M49 53C49 39.12 55.72 29 63 29C70.28 29 77 39.12 77 53V58H49V53Z"
        fill="#2B2C31"
      />
      <path d="M51 72L75 72L84 131H42L51 72Z" fill="#1C2735" />
      <path d="M55 72L63 82L71 72L80 131H46L55 72Z" fill="#FFFFFF" />
      <path d="M60 82H66L68 131H58L60 82Z" fill="#1E2C3A" />
      <path
        d="M55 59C55 62.31 57.69 65 61 65H65C68.31 65 71 62.31 71 59V57H55V59Z"
        fill="#DDB39B"
      />
      <defs>
        <linearGradient
          id="bgMaleGreen"
          x1="63"
          y1="0"
          x2="63"
          y2="176"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EDF4EF" />
          <stop offset="1" stopColor="#D9E5DB" />
        </linearGradient>
        <linearGradient
          id="bgFemale"
          x1="63"
          y1="0"
          x2="63"
          y2="176"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F3EFE6" />
          <stop offset="1" stopColor="#E2DACD" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Contact;
