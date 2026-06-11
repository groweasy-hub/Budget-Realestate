import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Actions,
  Brand,
  BrandCopy,
  BrandMark,
  ButtonLabelDesktop,
  ButtonLabelMobile,
  DrawerActions,
  DrawerCloseBackdrop,
  DrawerContent,
  DrawerFooter,
  DrawerHelp,
  DrawerHelpCopy,
  DrawerHelpIcon,
  DrawerNav,
  DrawerNavIcon,
  DrawerNavItem,
  DrawerPanel,
  DrawerProfileIcon,
  DrawerSocialLink,
  DrawerSocials,
  DrawerUser,
  DrawerUserCopy,
  MenuButton,
  MobileDrawer,
  NavChevron,
  NavLinkItem,
  NavLinks,
  NavWrapper,
  PrimaryButton,
  ProfileButton,
  Shell,
} from "./NavbarStyles";

function useScrollDirection() {
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY.current;
      if (Math.abs(delta) < 6) return; // ignore micro-movements
      setVisible(delta < 0 || y < 60);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return visible;
}

function Navbar({
  links = [],
  ctaLabel = "List Your Property",
  homeTo = "/",
  showProfile = true,
  transparentDesktop = false,
}) {
  const visible = useScrollDirection();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!menuOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  const drawerLinks = [
    { label: "Home", to: "/" },
    ...links.map((link) => ({
      ...link,
      label:
        link.label === "Buy"
          ? "Buy Properties"
          : link.label === "Rent"
            ? "Rent Properties"
            : link.label,
    })),
  ];

  return (
    <>
      <NavWrapper
        $visible={visible || menuOpen}
        $transparentDesktop={transparentDesktop}
        $drawerOpen={menuOpen}
      >
        <Shell $transparentDesktop={transparentDesktop} $drawerOpen={menuOpen}>
          <MenuButton
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </MenuButton>

          <Brand to={homeTo}>
            <BrandMark>
              <BrandLogoIcon />
            </BrandMark>
            <BrandCopy>
              <strong>Budget</strong>
              <span>Realestate</span>
            </BrandCopy>
          </Brand>

          <NavLinks>
            {links.map((link) => (
              <NavLinkItem
                key={link.label}
                to={link.to}
                $active={Boolean(link.active)}
              >
                <span>{link.label}</span>
                {needsChevron(link.label) ? (
                  <NavChevron>
                    <ChevronDownIcon />
                  </NavChevron>
                ) : null}
              </NavLinkItem>
            ))}
          </NavLinks>

          <Actions>
            <PrimaryButton type="button">
              <ButtonLabelDesktop>{ctaLabel}</ButtonLabelDesktop>
              <ButtonLabelMobile>List Property</ButtonLabelMobile>
              <PlusIcon />
            </PrimaryButton>
            {showProfile ? (
              <ProfileButton type="button">
                <ProfileIcon />
              </ProfileButton>
            ) : null}
          </Actions>
        </Shell>
      </NavWrapper>

      <MobileDrawer $open={menuOpen} aria-hidden={!menuOpen}>
        <DrawerCloseBackdrop
          type="button"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        />
        <DrawerPanel $open={menuOpen}>
          <DrawerContent>
            <DrawerUser>
              <DrawerProfileIcon>
                <ProfileIcon />
              </DrawerProfileIcon>
              <DrawerUserCopy>
                <span>Welcome!</span>
                <strong>Guest User</strong>
                <DrawerActions>
                  <button type="button">
                    Login
                    <LoginIcon />
                  </button>
                  <button type="button">
                    Register
                    <UserPlusIcon />
                  </button>
                </DrawerActions>
              </DrawerUserCopy>
            </DrawerUser>

            <DrawerNav>
              {drawerLinks.map((link) => {
                const active =
                  link.to === "/"
                    ? ["/", "/home"].includes(location.pathname)
                    : location.pathname === link.to ||
                      location.pathname.startsWith(`${link.to}/`);

                return (
                  <DrawerNavItem
                    key={link.label}
                    to={link.to}
                    $active={active}
                    onClick={() => setMenuOpen(false)}
                  >
                    <DrawerNavIcon>
                      <DrawerIcon name={link.label} />
                    </DrawerNavIcon>
                    <span>{link.label}</span>
                    <ChevronRightIcon />
                  </DrawerNavItem>
                );
              })}
            </DrawerNav>

            <DrawerHelp>
              <DrawerHelpIcon>
                <HeadsetIcon />
              </DrawerHelpIcon>
              <DrawerHelpCopy>
                <strong>Need immediate help?</strong>
                <span>Our support team is ready to assist you.</span>
                <button type="button">
                  Chat on WhatsApp
                  <WhatsappIcon />
                </button>
              </DrawerHelpCopy>
            </DrawerHelp>

            <DrawerFooter>
              <span>Follow Us</span>
              <DrawerSocials>
                <DrawerSocialLink href="/" aria-label="Instagram">
                  <InstagramIcon />
                </DrawerSocialLink>
                <DrawerSocialLink href="/" aria-label="LinkedIn">
                  <LinkedinIcon />
                </DrawerSocialLink>
                <DrawerSocialLink href="/" aria-label="YouTube">
                  <YoutubeIcon />
                </DrawerSocialLink>
                <DrawerSocialLink href="/" aria-label="WhatsApp">
                  <WhatsappIcon />
                </DrawerSocialLink>
              </DrawerSocials>
            </DrawerFooter>
          </DrawerContent>
        </DrawerPanel>
      </MobileDrawer>
    </>
  );
}

function needsChevron(label) {
  return ["Buy", "Rent", "Services", "Locations", "Resources"].includes(label);
}

function BrandLogoIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7 23L24 9L32 15V11H38V20L41 23"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 23V39H21V29H27V39H37V23"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinejoin="round"
      />
    </svg>
  );
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

function MenuIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.5 8.5H26.5"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      <path
        d="M5.5 16H26.5"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      <path
        d="M5.5 23.5H26.5"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 8L24 24"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      <path
        d="M24 8L8 24"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 2V10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M2 6H10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LoginIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13 5H18V19H13"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 12H15"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <path
        d="M11.5 8.5L15 12L11.5 15.5"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ProfileIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M5.5 19C5.5 15.96 8.19 13.5 11.5 13.5H12.5C15.81 13.5 18.5 15.96 18.5 19"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function UserPlusIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="9" cy="8" r="3.25" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M3.75 18.5C3.75 15.6 6.1 13.25 9 13.25"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M17 10.5V17.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M13.5 14H20.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9 5L16 12L9 19"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DrawerIcon({ name }) {
  if (name === "Buy Properties") {
    return <BuildingIcon />;
  }
  if (name === "Rent Properties") {
    return <RentIcon />;
  }
  if (name === "Auctions") {
    return <GavelIcon />;
  }
  if (name === "Services") {
    return <HandshakeIcon />;
  }
  if (name === "Contact Us") {
    return <PhoneIcon />;
  }
  return <HomeIcon />;
}

function HomeIcon() {
  return (
    <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5 13.2L14 5.8L23 13.2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 12.5V23H12V17H16V23H20.5V12.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M21 7.5V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 24V8H15V24" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M15 12H22V24" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M9.5 12H11.5M9.5 16H11.5M9.5 20H11.5M18 16H19.5M18 20H19.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function RentIcon() {
  return (
    <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 10H22V19H6V10Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M9 10V7H19V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 22V19M20 22V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M9 14H19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M10 16.5H18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M9.5 13.6H18.5V16.8H9.5V13.6Z" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function GavelIcon() {
  return (
    <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.5 7L18 13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M8.5 10L15 16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M6.5 22H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M16 14.5L22 20.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M9 8.5L13 4.5L20.5 12L16.5 16L9 8.5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="22.5" cy="5.5" r="1" fill="currentColor" />
    </svg>
  );
}

function HandshakeIcon() {
  return (
    <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 16L13 18.8C14 19.7 15.5 19.7 16.5 18.8L23 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 13L9.5 8.5L14 10.5L17 8.5L23 14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 13L10.5 18.5M9 17L7 19M12 19L10 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 6L12.2 10.6L9.9 12.5C11.2 15.2 13.2 17.3 16 18.6L18 16.3L22.5 18.5C22.1 21 20.4 23 17.8 22.6C11.2 21.6 6.4 16.8 5.4 10.2C5 7.6 7 5.9 10 6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M18 6.5C20.2 7.1 21.9 8.8 22.5 11M17 10C17.8 10.3 18.4 10.9 18.7 11.7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function HeadsetIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 17C7 11.5 11 7.5 16 7.5C21 7.5 25 11.5 25 17" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" />
      <path d="M7 17V22C7 23.1 7.9 24 9 24H11V16H9C7.9 16 7 16.9 7 18" stroke="currentColor" strokeWidth="2.3" strokeLinejoin="round" />
      <path d="M25 17V22C25 23.1 24.1 24 23 24H21V16H23C24.1 16 25 16.9 25 18" stroke="currentColor" strokeWidth="2.3" strokeLinejoin="round" />
      <path d="M21 24C20.2 26 18.5 27 16 27" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" />
      <circle cx="15" cy="27" r="1.4" fill="currentColor" />
    </svg>
  );
}

function WhatsappIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.2 19L6.2 15.8C5.5 14.7 5.1 13.4 5.1 12C5.1 8.1 8.2 5 12.1 5C16 5 19.1 8.1 19.1 12C19.1 15.9 16 19 12.1 19C10.8 19 9.6 18.7 8.6 18.1L5.2 19Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M9.5 9.2C9.8 12.2 11.5 14.1 14.5 14.7L15.5 13.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="14" height="14" rx="4" stroke="currentColor" strokeWidth="1.9" />
      <circle cx="12" cy="12" r="3.1" stroke="currentColor" strokeWidth="1.9" />
      <circle cx="16" cy="8" r="1" fill="currentColor" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.4 9.3H9V18H6.4V9.3ZM7.7 5C8.6 5 9.2 5.6 9.2 6.4C9.2 7.2 8.6 7.8 7.7 7.8C6.8 7.8 6.2 7.2 6.2 6.4C6.2 5.6 6.8 5 7.7 5ZM10.8 9.3H13.3V10.5C13.8 9.8 14.6 9.1 16 9.1C18 9.1 19.5 10.4 19.5 13.2V18H16.9V13.6C16.9 12.4 16.5 11.7 15.5 11.7C14.7 11.7 14.2 12.2 14 12.7C13.9 12.9 13.9 13.2 13.9 13.5V18H11.3C11.3 18 11.3 10.1 10.8 9.3Z" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.4 8.2C19.2 7.5 18.7 7 18 6.8C16.8 6.5 12 6.5 12 6.5C12 6.5 7.2 6.5 6 6.8C5.3 7 4.8 7.5 4.6 8.2C4.3 9.4 4.3 12 4.3 12C4.3 12 4.3 14.6 4.6 15.8C4.8 16.5 5.3 17 6 17.2C7.2 17.5 12 17.5 12 17.5C12 17.5 16.8 17.5 18 17.2C18.7 17 19.2 16.5 19.4 15.8C19.7 14.6 19.7 12 19.7 12C19.7 12 19.7 9.4 19.4 8.2ZM10.5 14.4V9.6L14.6 12L10.5 14.4Z" />
    </svg>
  );
}

export default Navbar;
