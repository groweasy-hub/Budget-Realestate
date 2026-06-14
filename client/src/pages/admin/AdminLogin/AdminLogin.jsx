import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BrandBlock, BrandMark, GoogleIcon, ShieldUserIcon } from "../../../components/admin/AdminShared";
import { ADMIN_EMAIL, ADMIN_PASSWORD, isAdminAuthenticated, loginAdmin } from "../../../utils/adminAuth";
import {
  AccentLine,
  BadgeWrap,
  BenefitItem,
  BenefitsGrid,
  BrandRow,
  CardSubtitle,
  CardTitle,
  DesktopIconCircle,
  DeviceCard,
  DeviceIconCircle,
  DeviceText,
  DeviceTitle,
  DeviceUrl,
  ErrorText,
  FeatureHeading,
  FeatureIconWrap,
  FeatureItem,
  FeatureList,
  FeatureText,
  FeatureTitle,
  FieldGroup,
  FieldLabel,
  FooterNote,
  Form,
  FormSection,
  GoogleButton,
  IconButton,
  Input,
  InputFrame,
  Laptop,
  LoginCard,
  LoginPage,
  MobileActions,
  MobileAdminPill,
  MobileBrand,
  MobileDesktopNotice,
  MobileDots,
  MobileFeatureCard,
  MobileFeatureGrid,
  MobileHero,
  MobileNoticeInner,
  MobilePrimaryAction,
  MobileSecondaryAction,
  MobileSecurityNote,
  Mug,
  NoticeCard,
  NoticeCardText,
  NoticeCardTitle,
  NoticeCardTop,
  NoticeSubtitle,
  NoticeTitle,
  Plant,
  QrWrap,
  RememberInput,
  RememberLabel,
  ShowcasePanel,
  SubmitButton,
  UtilityLink,
  UtilityRow,
  WelcomeBlock,
  WelcomeCopy,
  WelcomeHeading,
  WelcomeLabel,
  Divider,
} from "./AdminLoginStyles";

const featureItems = [
  {
    title: "Secure & Protected",
    text: "Your data is safe with us",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3c2.5 2.2 6.12 3.14 8 3.45V12c0 5.27-3.88 8.56-8 10-4.12-1.44-8-4.73-8-10V6.45C5.88 6.14 9.5 5.2 12 3Z" stroke="#fff" strokeWidth="1.9" strokeLinejoin="round" />
        <path d="m9.15 12.25 1.95 1.95 3.75-4.1" stroke="#fff" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Real-time Insights",
    text: "Track performance instantly",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M5 19V11" stroke="#fff" strokeWidth="1.9" strokeLinecap="round" />
        <path d="M12 19V5" stroke="#fff" strokeWidth="1.9" strokeLinecap="round" />
        <path d="M19 19v-8" stroke="#fff" strokeWidth="1.9" strokeLinecap="round" />
        <rect x="3.4" y="9.4" width="3.2" height="10.2" rx="1.2" stroke="#fff" strokeWidth="1.3" />
        <rect x="10.4" y="3.4" width="3.2" height="16.2" rx="1.2" stroke="#fff" strokeWidth="1.3" />
        <rect x="17.4" y="9.4" width="3.2" height="10.2" rx="1.2" stroke="#fff" strokeWidth="1.3" />
      </svg>
    ),
  },
  {
    title: "Easy Management",
    text: "Manage everything in one place",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="9" cy="9" r="3.2" stroke="#fff" strokeWidth="1.9" />
        <circle cx="17.4" cy="8.4" r="2.4" stroke="#fff" strokeWidth="1.7" />
        <path d="M3.8 19.2c1.2-3.32 4.1-4.95 5.2-4.95 1.1 0 4 1.63 5.2 4.95" stroke="#fff" strokeWidth="1.9" strokeLinecap="round" />
        <path d="M14.8 18.25c.7-1.9 2.2-3.05 2.95-3.05.78 0 2.26 1.15 2.95 3.05" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
];

function InputIcon({ type }) {
  if (type === "email") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="3" stroke="#70798C" strokeWidth="1.8" />
        <path d="m5.8 8 6.2 4.85L18.2 8" stroke="#70798C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="5" y="11" width="14" height="10" rx="2.4" stroke="#70798C" strokeWidth="1.8" />
      <path d="M8 11V8.5A4 4 0 0 1 12 4.5v0a4 4 0 0 1 4 4V11" stroke="#70798C" strokeWidth="1.8" />
      <circle cx="12" cy="15.6" r="1.2" fill="#70798C" />
    </svg>
  );
}

function EyeIcon({ open }) {
  return open ? (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M2.8 12s3.4-5.8 9.2-5.8 9.2 5.8 9.2 5.8-3.4 5.8-9.2 5.8S2.8 12 2.8 12Z" stroke="#70798C" strokeWidth="1.8" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="2.9" stroke="#70798C" strokeWidth="1.8" />
    </svg>
  ) : (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 4 20 20" stroke="#70798C" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M10.5 6.4A9.8 9.8 0 0 1 12 6.2c5.8 0 9.2 5.8 9.2 5.8a15.55 15.55 0 0 1-3.25 3.66" stroke="#70798C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14.07 14.06A3 3 0 0 1 9.94 9.93" stroke="#70798C" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M7.1 7.15C4.63 8.57 2.8 12 2.8 12s3.4 5.8 9.2 5.8c1.02 0 1.97-.18 2.85-.49" stroke="#70798C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LoginLockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="5" y="10.8" width="14" height="9.2" rx="2.2" stroke="#fff" strokeWidth="2" />
      <path d="M8.4 10.8V8.45A3.6 3.6 0 0 1 12 4.85v0a3.6 3.6 0 0 1 3.6 3.6v2.35" stroke="#fff" strokeWidth="2" />
      <circle cx="12" cy="15.2" r="1.15" fill="#fff" />
    </svg>
  );
}

function StrokeIcon({ type, size = 24 }) {
  const common = { stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };

  if (type === "shield") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3.5c2.4 1.9 5.5 2.6 7.4 2.9v5.3c0 4.9-3.5 7.8-7.4 9.1-3.9-1.3-7.4-4.2-7.4-9.1V6.4c1.9-.3 5-1 7.4-2.9Z" {...common} />
        <path d="m9.2 12 1.8 1.8 3.9-4" {...common} />
      </svg>
    );
  }

  if (type === "check") {
    return (
      <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <circle cx="8" cy="8" r="6.2" {...common} strokeWidth="1.6" />
        <path d="m5.4 8.1 1.6 1.7 3.7-4" {...common} strokeWidth="1.6" />
      </svg>
    );
  }

  if (type === "send") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M21 4 9.6 15.4M21 4l-6.4 17-3.5-7.6L3.5 9.9 21 4Z" {...common} />
      </svg>
    );
  }

  if (type === "phone") {
    return (
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="11.5" y="4.5" width="17" height="31" rx="3.6" {...common} />
        <path d="M17.8 8.5h4.4M20 30.5h.02M31.5 13.5l3 3-3 3M35 16.5H26" {...common} />
      </svg>
    );
  }

  if (type === "globe") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" {...common} />
        <path d="M3.4 12h17.2M12 3c2.1 2.35 3.2 5.35 3.2 9S14.1 18.65 12 21c-2.1-2.35-3.2-5.35-3.2-9S9.9 5.35 12 3Z" {...common} />
      </svg>
    );
  }

  if (type === "lock") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3.8c2.1 1.7 5.1 2.5 7 2.8v5.6c0 4.7-3.2 7.4-7 8.7-3.8-1.3-7-4-7-8.7V6.6c1.9-.3 4.9-1.1 7-2.8Z" {...common} />
      </svg>
    );
  }

  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="7.5" y="7" width="25" height="18" rx="1.8" {...common} strokeWidth="2.7" />
      <path d="M20 25v6.5M14.6 32.2h10.8" {...common} strokeWidth="2.7" />
    </svg>
  );
}

function FeatureGlyph({ type }) {
  const common = { stroke: "currentColor", strokeWidth: 1.9, strokeLinecap: "round", strokeLinejoin: "round" };
  const paths = {
    buy: <path d="M4 11.2 12 4l8 7.2M6.2 10.2V20h11.6v-9.8M10 20v-5.6h4V20" {...common} />,
    rent: <path d="M5 21V5.8C5 4.8 5.8 4 6.8 4h5.4c1 0 1.8.8 1.8 1.8V21M14 10h3.2c1 0 1.8.8 1.8 1.8V21M3.6 21h16.8M8.2 8h2.6M8.2 12h2.6M8.2 16h2.6" {...common} />,
    auction: <path d="m13.8 5.2 5 5M11 8l5 5M4.2 20h8.6M8.4 16.1l3.5-3.5M5.9 13.6l3.5-3.5M15.7 4.3l-8.9 8.9" {...common} />,
    leads: <path d="M9 11.4a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.8 19c1-3.2 3.9-4.6 5.2-4.6S13.2 15.8 14.2 19M16.2 9.1h4M18.2 7.1v4M16.7 15.2c1.6.4 2.8 1.7 3.5 3.8" {...common} />,
    visit: <path d="M8 4v4M16 4v4M4.5 10h15M9 15.2l2 2 4-4M4 5.8h16v14H4z" {...common} />,
    analytics: <path d="M5.5 19v-5M12 19V6M18.5 19V10M4 14h3v5H4zM10.5 6h3v13h-3zM17 10h3v9h-3z" {...common} />,
  };

  return (
    <svg width="23" height="23" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {paths[type] || paths.buy}
    </svg>
  );
}

function PlantIllustration() {
  return (
    <svg viewBox="0 0 92 150" fill="none" aria-hidden="true">
      <ellipse cx="48" cy="137" rx="38" ry="5" fill="#C8D7CC" opacity="0.8" />
      <path d="M32 68c13.5 24.5 16 49 16 65M51 75c-2.8 19-3 37-3 58" stroke="#6F9F78" strokeWidth="4" strokeLinecap="round" />
      <path d="M27 66C13.4 53.4 8.1 35.8 5.8 20.5 21.4 27.6 34.9 40 39.2 58.9c1.9 8.4-5.7 12.2-12.2 7.1Z" fill="#8DBB90" />
      <path d="M58.7 78.8c-1-18.8 7.3-36.5 18.1-50.3 7 15.8 7.2 36.2-5.7 52.1-5.2 6.5-12 5.8-12.4-1.8Z" fill="#5E946E" />
      <path d="M35.4 86.7c-15.5-5.3-25.7-17.9-32.1-30.2 15.1-.2 30.7 7.1 39.1 21.6 4 7-1.3 11.1-7 8.6Z" fill="#79A983" />
      <path d="M50 101c7.7-15.2 21.6-24 34.7-28.4-.9 15.1-9.7 29.9-25 36.5-7.2 3.1-12.5-2.3-9.7-8.1Z" fill="#7FB58A" />
      <path d="M26 113h44l-5.6 28H31.6L26 113Z" fill="#BFDCC9" />
    </svg>
  );
}

function MugIllustration() {
  return (
    <svg viewBox="0 0 88 70" fill="none" aria-hidden="true">
      <ellipse cx="36" cy="64" rx="36" ry="5" fill="#C8D7CC" opacity="0.75" />
      <path d="M15 13h48v30c0 13.3-9.6 21-24 21S15 56.3 15 43V13Z" fill="#4D9A61" />
      <path d="M63 23h6.5c8.6 0 14 6.1 14 13.7s-5.4 13.7-14 13.7H63v-7.8h5.8c4 0 6.5-2.3 6.5-5.9 0-3.5-2.5-5.8-6.5-5.8H63V23Z" fill="#4D9A61" />
      <ellipse cx="39" cy="13" rx="24" ry="5" fill="#2B7840" />
    </svg>
  );
}

function LaptopIllustration() {
  return (
    <svg viewBox="0 0 360 205" fill="none" aria-hidden="true">
      <ellipse cx="178" cy="194" rx="164" ry="7" fill="#C8D7CC" opacity="0.8" />
      <path d="M36 23c0-8.8 7.2-16 16-16h256c8.8 0 16 7.2 16 16v157H36V23Z" fill="#172225" />
      <path d="M48 24c0-4.4 3.6-8 8-8h248c4.4 0 8 3.6 8 8v146H48V24Z" fill="#F9FBFA" />
      <rect x="48" y="16" width="264" height="18" fill="#FFFFFF" />
      <circle cx="290" cy="25" r="4" fill="#EC5B5B" /><circle cx="301" cy="25" r="4" fill="#F1BE43" />
      <path d="M24 178h312l-13.5 14H37.5L24 178Z" fill="#263033" />
      <rect x="64" y="42" width="58" height="128" fill="#064D2F" />
      <rect x="132" y="49" width="53" height="26" rx="6" fill="#F4FAF6" stroke="#E8EFEA" />
      <rect x="194" y="49" width="48" height="26" rx="6" fill="#F4FAF6" stroke="#E8EFEA" />
      <rect x="250" y="49" width="47" height="26" rx="6" fill="#F4FAF6" stroke="#E8EFEA" />
      <path d="M78 57h31M78 78h36M78 92h32M78 106h37M78 120h35M78 134h32M78 148h34" stroke="#78BA8B" strokeWidth="3" strokeLinecap="round" />
      <circle cx="162" cy="114" r="22" stroke="#1BA85C" strokeWidth="11" />
      <path d="M162 92a22 22 0 0 1 21 29" stroke="#F2B847" strokeWidth="11" />
      <path d="M183 121a22 22 0 0 1-25 14" stroke="#2798D8" strokeWidth="11" />
      <path d="M215 129c11-12 22-8 34-24 9-12 18-10 31-22" stroke="#21A45A" strokeWidth="3" fill="none" />
      <path d="M212 133h76M212 117h76M212 101h76M212 85h76" stroke="#EEF3F0" strokeWidth="1" />
      <rect x="146" y="158" width="18" height="7" rx="2" fill="#5CBF82" /><rect x="178" y="156" width="18" height="9" rx="2" fill="#38A96B" /><rect x="210" y="153" width="18" height="12" rx="2" fill="#249B59" /><rect x="242" y="149" width="18" height="16" rx="2" fill="#168747" /><rect x="270" y="144" width="18" height="21" rx="2" fill="#A9D9B8" />
    </svg>
  );
}

function QrIllustration() {
  const cells = [[0, 0, 7, 7], [1, 1, 5, 5, "white"], [2, 2, 3, 3], [14, 0, 7, 7], [15, 1, 5, 5, "white"], [16, 2, 3, 3], [0, 14, 7, 7], [1, 15, 5, 5, "white"], [2, 16, 3, 3], [8, 2, 2, 2], [11, 1, 1, 5], [8, 7, 1, 3], [10, 8, 4, 1], [16, 8, 2, 2], [19, 8, 2, 4], [8, 12, 3, 1], [12, 11, 2, 4], [15, 13, 4, 1], [20, 14, 1, 5], [8, 16, 1, 4], [10, 18, 3, 2], [14, 16, 1, 5], [16, 17, 5, 1], [17, 19, 2, 2], [8, 21, 13, 1], [21, 4, 1, 3], [4, 21, 3, 1]];

  return (
    <svg viewBox="0 0 94 94" fill="none" aria-hidden="true">
      <rect width="94" height="94" rx="7" fill="#FFFFFF" stroke="#D9E1DD" />
      <g transform="translate(7 7) scale(3.55)">
        {cells.map(([x, y, w, h, color], index) => <rect key={`${x}-${y}-${index}`} x={x} y={y} width={w} height={h} fill={color || "#101820"} />)}
      </g>
      <circle cx="47" cy="47" r="15" fill="#15994A" stroke="#FFFFFF" strokeWidth="4" />
      <path d="M38.5 47.5 47 40l8.5 7.5M41 46.2v9.5h12v-9.5M45 55.7v-5h4v5" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const benefitItems = [
  "Buy & Sell Properties",
  "Rent Properties",
  "Auction Management",
  "Customer Leads",
  "Site Visit Scheduling",
  "Consultation Requests",
  "Analytics & Reports",
  "Users & Permissions",
  "Performance Insights",
];

const mobileFeatures = [
  { title: "Buy Properties", text: "Property listing management", type: "buy" },
  { title: "Rent Properties", text: "Tenant & rental management", type: "rent" },
  { title: "Auction Properties", text: "Auction tracking & bidding", type: "auction" },
  { title: "Customer Leads", text: "Lead conversion management", type: "leads" },
  { title: "Site Visits", text: "Visit scheduling & tracking", type: "visit" },
  { title: "Analytics", text: "Performance insights", type: "analytics" },
];

export function MobileAdminDesktopNotice() {
  return (
    <MobileDesktopNotice>
      <MobileNoticeInner>
        <MobileBrand>
          <BrandMark size={48} />
          <div>
            <strong>Budget</strong>
            <span>RealEstate</span>
          </div>
        </MobileBrand>
        <MobileAdminPill><StrokeIcon type="shield" size={13} /> ADMIN PANEL</MobileAdminPill>
        <MobileHero>
          <Plant><PlantIllustration /></Plant>
          <Laptop><LaptopIllustration /></Laptop>
          <Mug><MugIllustration /></Mug>
        </MobileHero>
        <NoticeTitle>Admin Dashboard</NoticeTitle>
        <NoticeSubtitle>Designed for desktop management and advanced property operations.</NoticeSubtitle>
        <NoticeCard>
          <NoticeCardTop>
            <DesktopIconCircle><StrokeIcon type="desktop" size={34} /></DesktopIconCircle>
            <div>
              <NoticeCardTitle>Desktop Experience Required</NoticeCardTitle>
              <NoticeCardText>The admin panel is optimized for larger screens to help you manage properties, leads, visits, consultations, auctions, and reports efficiently.</NoticeCardText>
            </div>
          </NoticeCardTop>
          <BenefitsGrid>
            {benefitItems.map((item) => <BenefitItem key={item}><StrokeIcon type="check" />{item}</BenefitItem>)}
          </BenefitsGrid>
        </NoticeCard>
        <FeatureHeading>Powerful Features at a Glance</FeatureHeading>
        <MobileFeatureGrid>
          {mobileFeatures.map((item) => (
            <MobileFeatureCard key={item.title}>
              <FeatureGlyph type={item.type} />
              <strong>{item.title}</strong>
              <span>{item.text}</span>
            </MobileFeatureCard>
          ))}
        </MobileFeatureGrid>
        <MobileDots><span /><span /><span /></MobileDots>
        <MobileActions>
          <MobilePrimaryAction type="button"><StrokeIcon type="desktop" size={18} />Open on Desktop</MobilePrimaryAction>
          <MobileSecondaryAction type="button"><StrokeIcon type="send" size={17} />Send Login Link</MobileSecondaryAction>
        </MobileActions>
        <DeviceCard>
          <DeviceIconCircle><StrokeIcon type="phone" size={31} /></DeviceIconCircle>
          <div>
            <DeviceTitle>Continue on another device</DeviceTitle>
            <DeviceText>Scan the QR code to open the admin panel on your desktop or laptop.</DeviceText>
            <DeviceUrl><StrokeIcon type="globe" size={13} />admin.budgetrealestate.com</DeviceUrl>
          </div>
          <QrWrap><QrIllustration /></QrWrap>
        </DeviceCard>
        <MobileSecurityNote><StrokeIcon type="lock" size={12} />For security reasons, admin access is not available on mobile devices.</MobileSecurityNote>
      </MobileNoticeInner>
    </MobileDesktopNotice>
  );
}

function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const isMobileAdminViewport = window.matchMedia("(max-width: 920px)").matches;

    if (!isMobileAdminViewport && isAdminAuthenticated()) {
      navigate("/admin/dashboard", { replace: true });
    }
  }, [navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (loginAdmin(email.trim(), password)) {
      setError("");
      navigate("/admin/dashboard", { replace: true, state: { rememberMe } });
      return;
    }

    setError(`Use ${ADMIN_EMAIL} and ${ADMIN_PASSWORD} to access the admin dashboard.`);
  };

  return (
    <>
      <MobileAdminDesktopNotice />
      <LoginPage>
      <ShowcasePanel>
        <BrandRow>
          <BrandBlock />
        </BrandRow>

        <WelcomeBlock>
          <WelcomeLabel>Welcome Back!</WelcomeLabel>
          <WelcomeHeading>
            Sign in to your
            <br />
            <span>Admin</span> Account
          </WelcomeHeading>
          <AccentLine />
          <WelcomeCopy>
            Manage properties, leads, users and grow your real estate business.
          </WelcomeCopy>
        </WelcomeBlock>

        <FeatureList>
          {featureItems.map((item) => (
            <FeatureItem key={item.title}>
              <FeatureIconWrap>{item.icon}</FeatureIconWrap>
              <div>
                <FeatureTitle>{item.title}</FeatureTitle>
                <FeatureText>{item.text}</FeatureText>
              </div>
            </FeatureItem>
          ))}
        </FeatureList>
      </ShowcasePanel>

      <FormSection>
        <LoginCard>
          <BadgeWrap>
            <ShieldUserIcon />
          </BadgeWrap>

          <CardTitle>Admin Login</CardTitle>
          <CardSubtitle>Enter your credentials to access admin panel</CardSubtitle>

          <Form onSubmit={handleSubmit}>
            <FieldGroup>
              <FieldLabel>Email Address</FieldLabel>
              <InputFrame $invalid={Boolean(error)}>
                <InputIcon type="email" />
                <Input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Enter your email address"
                  autoComplete="email"
                />
              </InputFrame>
            </FieldGroup>

            <FieldGroup>
              <FieldLabel>Password</FieldLabel>
              <InputFrame $invalid={Boolean(error)}>
                <InputIcon type="password" />
                <Input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                />
                <IconButton type="button" onClick={() => setShowPassword((value) => !value)} aria-label="Toggle password visibility">
                  <EyeIcon open={showPassword} />
                </IconButton>
              </InputFrame>
            </FieldGroup>

            {error ? <ErrorText>{error}</ErrorText> : null}

            <UtilityRow>
              <RememberLabel>
                <RememberInput
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(event) => setRememberMe(event.target.checked)}
                />
                Remember me
              </RememberLabel>
              <UtilityLink type="button">Forgot Password?</UtilityLink>
            </UtilityRow>

            <SubmitButton type="submit">
              <LoginLockIcon />
              Login to Dashboard
            </SubmitButton>

            <Divider>or</Divider>

            <GoogleButton type="button">
              <GoogleIcon />
              Login with Google
            </GoogleButton>
          </Form>
        </LoginCard>

        <FooterNote>
          © 2025 Budget RealEstate. All rights reserved.
        </FooterNote>
      </FormSection>
      </LoginPage>
    </>
  );
}

export default AdminLogin;
