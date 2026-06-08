import { Link } from "react-router-dom";
import {
  BottomRow,
  Brand,
  BrandLogo,
  BrandMark,
  BrandText,
  BrandWordmark,
  ContactItem,
  ContactList,
  Copyright,
  DividerColumn,
  LegalLinks,
  NavGrid,
  NavLinkItem,
  NavList,
  SectionTitle,
  Shell,
  SocialButton,
  SocialRow,
  SupportButton,
  SupportCard,
  SupportHeader,
  SupportIconWrap,
  SupportText,
  SupportTitle,
  TopColumn,
  TopSection,
  TrustGrid,
  TrustIconWrap,
  TrustItem,
  TrustStrip,
  TrustText,
  TrustTitle,
  Wrap,
} from "./FooterStyles";

const primaryLinks = [
  { label: "Buy Properties", to: "/buy" },
  { label: "Rent Properties", to: "/rent" },
  { label: "Auctions", to: "/auctions" },
];

const secondaryLinks = [
  { label: "Services", to: "/services" },
  { label: "Featured Projects", to: "/buy" },
  { label: "Contact Us", to: "/contact" },
];

const trustItems = [
  {
    title: "RERA Verified",
    text: "All properties are verified",
    icon: "shield",
  },
  {
    title: "Secure & Transparent",
    text: "Safe and transparent transactions",
    icon: "lock",
  },
  {
    title: "Expert Guidance",
    text: "Advice from property experts",
    icon: "guidance",
  },
  {
    title: "End-to-End Support",
    text: "From search to settlement",
    icon: "support",
  },
];

function Footer() {
  return (
    <Shell>
      <Wrap>
        <TopSection>
          <TopColumn>
            <Brand>
              <BrandLogo to="/">
                <BrandMark>
                  <BrandLogoIcon />
                </BrandMark>
                <BrandWordmark>
                  <strong>Budget</strong>
                  <span>RealEstate</span>
                </BrandWordmark>
              </BrandLogo>

              <BrandText>
                Find smart properties without stretching your budget. Trusted
                service, verified listings, and expert guidance.
              </BrandText>

              <SocialRow>
                <SocialButton href="https://instagram.com" aria-label="Instagram">
                  <InstagramIcon />
                </SocialButton>
                <SocialButton href="https://linkedin.com" aria-label="LinkedIn">
                  <LinkedInIcon />
                </SocialButton>
                <SocialButton href="https://youtube.com" aria-label="YouTube">
                  <YouTubeIcon />
                </SocialButton>
                <SocialButton href="https://whatsapp.com" aria-label="WhatsApp">
                  <WhatsAppIcon />
                </SocialButton>
              </SocialRow>
            </Brand>
          </TopColumn>

          <DividerColumn>
            <SectionTitle>Quick Navigation</SectionTitle>
            <NavGrid>
              <NavList>
                {primaryLinks.map((item) => (
                  <NavLinkItem key={item.label} to={item.to}>
                    <ChevronIcon />
                    <span>{item.label}</span>
                  </NavLinkItem>
                ))}
              </NavList>

              <NavList>
                {secondaryLinks.map((item) => (
                  <NavLinkItem key={item.label} to={item.to}>
                    <ChevronIcon />
                    <span>{item.label}</span>
                  </NavLinkItem>
                ))}
              </NavList>
            </NavGrid>
          </DividerColumn>

          <DividerColumn>
            <SectionTitle>Contact &amp; Support</SectionTitle>
            <ContactList>
              <ContactItem>
                <LocationIcon />
                <span>Hyderabad, Telangana, India</span>
              </ContactItem>
              <ContactItem>
                <PhoneIcon />
                <span>+91 XXXXXXXXXX</span>
              </ContactItem>
              <ContactItem>
                <MailIcon />
                <span>hello@budgetrealestate.com</span>
              </ContactItem>
              <ContactItem>
                <ClockIcon />
                <span>Mon - Sat&nbsp;&nbsp; | &nbsp;&nbsp;9:00 AM - 7:00 PM</span>
              </ContactItem>
            </ContactList>
          </DividerColumn>

          <TopColumn>
            <SupportCard>
              <SupportHeader>
                <SupportIconWrap>
                  <HeadsetIcon />
                </SupportIconWrap>
                <div>
                  <SupportTitle>Need immediate help?</SupportTitle>
                  <SupportText>
                    Our support team is ready to assist you.
                  </SupportText>
                </div>
              </SupportHeader>

              <SupportButton href="https://wa.me/910000000000">
                <span>Chat on WhatsApp</span>
                <WhatsAppIcon />
              </SupportButton>
            </SupportCard>
          </TopColumn>
        </TopSection>

        <TrustStrip>
          <TrustGrid>
            {trustItems.map((item) => (
              <TrustItem key={item.title}>
                <TrustIconWrap>
                  <TrustIcon type={item.icon} />
                </TrustIconWrap>
                <div>
                  <TrustTitle>{item.title}</TrustTitle>
                  <TrustText>{item.text}</TrustText>
                </div>
              </TrustItem>
            ))}
          </TrustGrid>
        </TrustStrip>

        <BottomRow>
          <Copyright>
            {"\u00A9"} 2025 Budget RealEstate. All rights reserved.
          </Copyright>

          <LegalLinks>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <span>|</span>
            <Link to="/terms-and-conditions">Terms &amp; Conditions</Link>
            <span>|</span>
            <Link to="/cookie-policy">Cookie Policy</Link>
          </LegalLinks>
        </BottomRow>
      </Wrap>
    </Shell>
  );
}

function TrustIcon({ type }) {
  switch (type) {
    case "lock":
      return <LockIcon />;
    case "guidance":
      return <GuidanceIcon />;
    case "support":
      return <SupportOutlineIcon />;
    default:
      return <ShieldCheckIcon />;
  }
}

function BrandLogoIcon() {
  return (
    <svg viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 31.5L34.8 10L47 21.5V15H56V29L60 32.2"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 31.4V57H29.8V41.8H39.5V57H51.2V31.4"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5 3.2L10 8L5 12.8"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="16" height="16" rx="4.5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="3.7" stroke="currentColor" strokeWidth="2" />
      <circle cx="17" cy="7.2" r="1" fill="currentColor" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 10V18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M12 18V13.8C12 12.25 13.12 11 14.6 11C16.08 11 17 12.14 17 13.8V18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 11V18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="7" cy="7.2" r="1.4" fill="currentColor" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4.2" y="6.2" width="15.6" height="11.6" rx="3.2" stroke="currentColor" strokeWidth="2" />
      <path d="M10.2 9.3L15 12L10.2 14.7V9.3Z" fill="currentColor" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 13.55 4.44 14.99 5.2 16.2L4.4 19.6L7.9 18.8C9.08 19.57 10.49 20 12 20Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M9.2 8.8C9.44 8.26 9.68 8.24 10.1 8.24C10.28 8.24 10.47 8.24 10.66 8.25C10.88 8.26 11.18 8.33 11.37 8.76C11.61 9.3 12.18 10.68 12.24 10.79C12.31 10.9 12.36 11.03 12.27 11.18C12.18 11.33 12.13 11.41 11.97 11.59C11.81 11.77 11.63 11.99 11.49 12.13C11.34 12.29 11.19 12.45 11.38 12.77C11.58 13.09 12.24 14.16 13.21 15.03C14.47 16.16 15.54 16.51 15.88 16.65C16.22 16.79 16.42 16.77 16.57 16.61C16.72 16.45 17.18 15.91 17.38 15.62C17.58 15.33 17.78 15.38 18.06 15.49C18.34 15.59 19.84 16.33 20.15 16.49C20.46 16.65 20.67 16.73 20.75 16.86C20.83 16.99 20.83 17.61 20.55 18.15C20.27 18.69 18.88 19.19 18.33 19.23C17.78 19.27 17.29 19.47 15.05 18.6C12.82 17.74 11.31 15.61 10.97 15.13C10.64 14.65 9.63 13.3 9.4 11.98C9.17 10.66 9.44 9.34 9.2 8.8Z" fill="currentColor" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 20.3C15.18 16.75 16.75 14.08 16.75 12.2C16.75 9.58 14.62 7.45 12 7.45C9.38 7.45 7.25 9.58 7.25 12.2C7.25 14.08 8.82 16.75 12 20.3Z" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12.15" r="1.9" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.7 5.8H10L11.25 10.2L9.6 11.72C10.48 13.45 11.91 14.86 13.63 15.73L15.15 14.08L19.55 15.33V17.65C19.55 18.7 18.7 19.55 17.65 19.55C10.59 19.55 4.85 13.82 4.85 6.75C4.85 5.71 5.69 4.86 6.74 4.86" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="6.2" width="16" height="11.8" rx="2.4" stroke="currentColor" strokeWidth="2" />
      <path d="M5.6 8L12 12.6L18.4 8" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" />
      <path d="M12 8V12.3L14.9 14.1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HeadsetIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 24C10 16.27 16.27 10 24 10C31.73 10 38 16.27 38 24" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
      <rect x="9" y="23" width="6.5" height="11" rx="2.2" stroke="currentColor" strokeWidth="3" />
      <rect x="32.5" y="23" width="6.5" height="11" rx="2.2" stroke="currentColor" strokeWidth="3" />
      <path d="M32.5 35.8C31.6 38.55 28.9 40.2 25.3 40.2H21.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M19 40.5H25" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function ShieldCheckIcon() {
  return (
    <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M28 8.5L40.8 13.8V24C40.8 32.47 35.35 39.98 28 43.1C20.65 39.98 15.2 32.47 15.2 24V13.8L28 8.5Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      <path d="M22.4 24.8L26.2 28.6L33.8 21" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="16" y="24" width="24" height="18" rx="3.5" stroke="currentColor" strokeWidth="3" />
      <path d="M21.2 24V19.6C21.2 15.73 24.33 12.6 28.2 12.6C32.07 12.6 35.2 15.73 35.2 19.6V24" stroke="currentColor" strokeWidth="3" />
      <path d="M28 30V35" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M24.5 30H31.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function GuidanceIcon() {
  return (
    <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="23" cy="19.5" r="7" stroke="currentColor" strokeWidth="3" />
      <path d="M12 40C12 33.56 16.94 29.2 23 29.2C29.06 29.2 34 33.56 34 40" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M37 25.5V35.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M32 30.5H42" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <circle cx="41.8" cy="33.8" r="8.2" stroke="currentColor" strokeWidth="3" />
    </svg>
  );
}

function SupportOutlineIcon() {
  return (
    <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 28C16 21.37 21.37 16 28 16C34.63 16 40 21.37 40 28" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <rect x="14.2" y="27.2" width="6.6" height="10.6" rx="2.2" stroke="currentColor" strokeWidth="3" />
      <rect x="35.2" y="27.2" width="6.6" height="10.6" rx="2.2" stroke="currentColor" strokeWidth="3" />
      <path d="M35.5 40C34.45 42.42 31.92 44 28.8 44H24.8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M25 44H31" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M22.5 32.5H29.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M31.8 32.5H31.81" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
    </svg>
  );
}

export default Footer;
