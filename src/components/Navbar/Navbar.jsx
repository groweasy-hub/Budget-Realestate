import {
  Actions,
  Brand,
  BrandCopy,
  BrandMark,
  NavChevron,
  NavLinkItem,
  NavLinks,
  PrimaryButton,
  ProfileButton,
  Shell,
} from "./NavbarStyles";

function Navbar({
  links = [],
  ctaLabel = "List Your Property",
  homeTo = "/",
  showProfile = true,
}) {
  return (
    <Shell>
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
          {ctaLabel} <PlusIcon />
        </PrimaryButton>
        {showProfile ? (
          <ProfileButton type="button">
            <ProfileIcon />
          </ProfileButton>
        ) : null}
      </Actions>
    </Shell>
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

export default Navbar;
