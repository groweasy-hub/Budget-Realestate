import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { siteNavbar } from "../../data/HomePageContent";
import { getAuctionProjectDetails } from "../../data/AuctionProjectDetailsData";
import { NavWrap } from "../Home/HomeStyles";
import {
  ActionButton,
  ActionRow,
  AmenityCard,
  AmenityIcon,
  AmenityLabel,
  AmenitiesGrid,
  BadgeRow,
  BottomBand,
  BottomBandButton,
  BottomBandCopy,
  BottomBandGrid,
  BottomBandIcon,
  BottomBandImage,
  BottomBandText,
  BottomBandTitle,
  BreadcrumbRow,
  CardHeading,
  CardText,
  CheckList,
  CloseButton,
  ConsultantAvatar,
  ConsultantHeader,
  ConsultantMeta,
  ConsultantName,
  CrumbLink,
  CrumbSeparator,
  GalleryShell,
  HeroGrid,
  LocationItem,
  LocationList,
  LocationRow,
  MainImage,
  MainMedia,
  ModalCard,
  ModalImage,
  ModalOverlay,
  ModalThumbRow,
  ModalTitle,
  ModalTop,
  PageInner,
  PageShell,
  RatingPill,
  RatingRow,
  SidebarCard,
  SidebarButton,
  SidebarStack,
  SidebarTitle,
  ThumbnailCard,
  ThumbnailColumn,
  ThumbnailImage,
  ThumbnailLabel,
  TimeBadge,
  Title,
  TitleRow,
  VerifiedDot,
  ViewPhotosButton,
} from "../BuyProjectDetails/BuyProjectDetailsStyles";
import {
  AuctionActionButton,
  AuctionBadge,
  AuctionDetailsGrid,
  AuctionSpecCard,
  AuctionSpecGrid,
  AuctionSpecLabel,
  AuctionSpecValue,
  AmenitiesCard,
  BankLegalCard,
  BankLegalItem,
  BankLegalList,
  BankLegalValue,
  BidCell,
  BidCompareCard,
  BidLabel,
  BidValue,
  ConfidenceArt,
  ConfidenceCard,
  ConfidenceGrid,
  ConfidenceItem,
  ConfidenceList,
  CountdownActionCard,
  CountdownActions,
  CountdownDivider,
  CountdownGroup,
  CountdownInline,
  CountdownNumber,
  CountdownSide,
  CountdownTitle,
  CountdownUnit,
  DetailItem,
  DetailLabel,
  DetailList,
  DetailValue,
  DocumentCard,
  DocumentGrid,
  DocumentItem,
  DocumentsButton,
  InfoChip,
  InfoChipRow,
  LocationCard,
  OverviewCard,
  PriceAuctionCard,
  SecureAuctionCard,
  SecureAuctionGrid,
  SecureAuctionText,
  SecureAuctionTitle,
  SimilarAuctionBadge,
  SimilarAuctionBody,
  SimilarAuctionCard,
  SimilarAuctionEnding,
  SimilarAuctionFav,
  SimilarAuctionGrid,
  SimilarAuctionImage,
  SimilarAuctionImageWrap,
  SimilarAuctionItem,
  SimilarAuctionLocation,
  SimilarAuctionPrice,
  SimilarAuctionTitle,
  SimilarHeader,
  SummaryPanel,
  ViewAllButton,
} from "./AuctionProjectDetailsStyles";

function formatCountdownValue(value) {
  return String(value).padStart(2, "0");
}

function getCountdownItems(targetTime, now) {
  const remaining = Math.max(0, targetTime - now);
  const totalSeconds = Math.floor(remaining / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return [
    { value: formatCountdownValue(days), unit: "Days" },
    { value: formatCountdownValue(hours), unit: "Hours" },
    { value: formatCountdownValue(minutes), unit: "Mins" },
    { value: formatCountdownValue(seconds), unit: "Secs" },
  ];
}

function AuctionProjectDetails() {
  const { projectId } = useParams();
  const project = useMemo(
    () => getAuctionProjectDetails(projectId),
    [projectId],
  );
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [showGallery, setShowGallery] = useState(false);
  const [saved, setSaved] = useState(false);
  const [compared, setCompared] = useState(false);
  const [shareFeedback, setShareFeedback] = useState("Share");
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    setActiveImageIndex(0);
    setShowGallery(false);
    setSaved(false);
    setCompared(false);
    setShareFeedback("Share");
  }, [project]);

  useEffect(() => {
    const timerId = window.setInterval(() => {
      setNow(Date.now());
    }, 1000);

    return () => {
      window.clearInterval(timerId);
    };
  }, []);

  const countdownTarget = useMemo(() => {
    const seed = project.countdownSeed;
    const totalMilliseconds =
      (((seed.days * 24 + seed.hours) * 60 + seed.minutes) * 60 +
        seed.seconds) *
      1000;

    return Date.now() + totalMilliseconds;
  }, [project]);

  const countdownItems = getCountdownItems(countdownTarget, now);
  const activeImage = project.gallery[activeImageIndex];
  const handleShare = async () => {
    const url = window.location.href;

    try {
      if (navigator.share) {
        await navigator.share({
          title: project.title,
          text: `${project.title} - ${project.location}`,
          url,
        });
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(url);
      }

      setShareFeedback("Copied");
      window.setTimeout(() => setShareFeedback("Share"), 1600);
    } catch (error) {
      setShareFeedback("Share");
    }
  };

  return (
    <PageShell>
      <NavWrap>
        <Navbar links={siteNavbar.links} ctaLabel={siteNavbar.ctaLabel} />
      </NavWrap>

      <PageInner>
        <HeroGrid>
          <GalleryShell>
            <MainMedia>
              <BadgeRow>
                {project.badges.map((item) => (
                  <AuctionBadge key={item.label} $tone={item.tone}>
                    <BadgeIcon type={item.icon} />
                    <span>{item.label}</span>
                  </AuctionBadge>
                ))}
                <AuctionBadge $tone="bank">
                  <BankBuildingIcon />
                  <span>{project.auctionType}</span>
                </AuctionBadge>
              </BadgeRow>

              <MainImage src={activeImage.image} alt={activeImage.imageAlt} />

              <ViewPhotosButton
                type="button"
                onClick={() => setShowGallery(true)}
              >
                <GalleryIcon />
                <span>View All Photos</span>
                <span>({project.gallery.length * 6})</span>
              </ViewPhotosButton>
            </MainMedia>

            <ThumbnailColumn>
              {project.gallery.slice(1).map((item, index) => {
                const imageIndex = index + 1;

                return (
                  <ThumbnailCard
                    key={`${item.label}-${imageIndex}`}
                    type="button"
                    $active={activeImageIndex === imageIndex}
                    onClick={() => setActiveImageIndex(imageIndex)}
                  >
                    <ThumbnailImage src={item.image} alt={item.imageAlt} />
                    <ThumbnailLabel>{item.label}</ThumbnailLabel>
                  </ThumbnailCard>
                );
              })}
            </ThumbnailColumn>
          </GalleryShell>

          <SummaryPanel>
            <BreadcrumbRow>
              <CrumbLink to="/auctions">Auction</CrumbLink>
              <CrumbSeparator>&gt;</CrumbSeparator>
              <CrumbLink to="/auctions">{project.category}</CrumbLink>
              <CrumbSeparator>&gt;</CrumbSeparator>
              <span>{project.locationTrail}</span>
            </BreadcrumbRow>

            <TitleRow>
              <Title>{project.title}</Title>
            </TitleRow>

            <LocationRow>
              <LocationPinIcon />
              <span>{project.location}</span>
            </LocationRow>

            <InfoChipRow>
              <InfoChip $surface="soft">
                <BankBuildingIcon />
                <span>{project.bank}</span>
              </InfoChip>
              <InfoChip>
                <span>Auction ID: {project.auctionId}</span>
              </InfoChip>
            </InfoChipRow>

            <RatingRow>
              <RatingPill>
                <StarIcon />
                <span>
                  {project.rating} ({project.reviews})
                </span>
              </RatingPill>
            </RatingRow>

            <BidCompareCard>
              <BidCell>
                <BidLabel>Current Bid</BidLabel>
                <BidValue $accent>{project.currentBid}</BidValue>
              </BidCell>
              <BidCell>
                <BidLabel>Reserve Price</BidLabel>
                <BidValue>{project.reservePrice}</BidValue>
              </BidCell>
            </BidCompareCard>

            <AuctionSpecGrid>
              {project.specs.map((item) => (
                <AuctionSpecCard key={`${item.label}-${item.value}`}>
                  <AuctionSpecValue>{item.value}</AuctionSpecValue>
                  <AuctionSpecLabel>{item.label}</AuctionSpecLabel>
                </AuctionSpecCard>
              ))}
            </AuctionSpecGrid>

            <CountdownActionCard>
              <CountdownSide>
                <CountdownTitle>Auction Ends In</CountdownTitle>
                <CountdownInline>
                  {countdownItems.map((item, index) => (
                    <FragmentCountdown
                      key={item.unit}
                      item={item}
                      showDivider={index < countdownItems.length - 1}
                    />
                  ))}
                </CountdownInline>
              </CountdownSide>

              <CountdownActions>
                <AuctionActionButton type="button">
                  {project.actionLabels.participate}
                </AuctionActionButton>
                <AuctionActionButton type="button" $ghost>
                  {project.actionLabels.login}
                </AuctionActionButton>
              </CountdownActions>
            </CountdownActionCard>

            <ActionRow>
              <ActionButton
                type="button"
                onClick={() => setSaved((value) => !value)}
              >
                <HeartIcon $filled={saved} />
                <span>{saved ? "Saved" : "Save"}</span>
              </ActionButton>
              <ActionButton
                type="button"
                onClick={() => setCompared((value) => !value)}
              >
                <CompareIcon />
                <span>{compared ? "Compared" : "Compare"}</span>
              </ActionButton>
              <ActionButton type="button" onClick={handleShare}>
                <ShareIcon />
                <span>{shareFeedback}</span>
              </ActionButton>
            </ActionRow>
          </SummaryPanel>

          <SidebarStack>
            <SidebarCard>
              <SidebarTitle>Auction Advisor</SidebarTitle>

              <ConsultantHeader>
                <ConsultantAvatar>
                  <ConsultantAvatarArt />
                </ConsultantAvatar>

                <div>
                  <ConsultantName>{project.advisor.name}</ConsultantName>
                  <ConsultantMeta>{project.advisor.role}</ConsultantMeta>
                  <ConsultantMeta>{project.advisor.experience}</ConsultantMeta>
                  <ConsultantMeta
                    style={{
                      color: "#0f6b34",
                      fontWeight: 700,
                      display: "inline-flex",
                      gap: 6,
                      alignItems: "center",
                    }}
                  >
                    <StarIcon />
                    <span>
                      {project.advisor.rating} ({project.advisor.reviews})
                    </span>
                  </ConsultantMeta>
                </div>
              </ConsultantHeader>

              <SidebarButton type="button" $filled $first>
                <HeadsetIcon />
                <span>{project.actionLabels.advisor}</span>
              </SidebarButton>
              <SidebarButton type="button">
                <PhoneIcon />
                <span>{project.actionLabels.callback}</span>
              </SidebarButton>
              <SidebarButton type="button" $whatsapp>
                <WhatsAppIcon />
                <span>{project.actionLabels.whatsapp}</span>
              </SidebarButton>
            </SidebarCard>

            <SecureAuctionCard>
              <SecureAuctionGrid>
                <VerifiedDot style={{ marginBottom: 0 }}>
                  <ShieldCheckIcon />
                </VerifiedDot>
                <div>
                  <SecureAuctionTitle>{project.secureTitle}</SecureAuctionTitle>
                  <SecureAuctionText>{project.secureText}</SecureAuctionText>
                </div>
              </SecureAuctionGrid>
            </SecureAuctionCard>
          </SidebarStack>
        </HeroGrid>

        <AuctionDetailsGrid>
          <OverviewCard>
            <CardHeading>
              <HomeOutlineIcon />
              <span>{project.overviewTitle}</span>
            </CardHeading>
            <CardText>{project.overviewDescription}</CardText>

            <CheckList>
              {project.overviewPoints.map((item) => (
                <DetailCheckItem key={item}>{item}</DetailCheckItem>
              ))}
            </CheckList>
          </OverviewCard>

          <AmenitiesCard>
            <CardHeading>
              <AmenityHubIcon />
              <span>{project.amenitiesTitle}</span>
            </CardHeading>
            <AmenitiesGrid>
              {project.amenities.map((item) => (
                <AmenityCard key={item.key}>
                  <div>
                    <AmenityIcon>
                      <AmenitySvg type={item.key} />
                    </AmenityIcon>
                    <AmenityLabel>{item.label}</AmenityLabel>
                  </div>
                </AmenityCard>
              ))}
            </AmenitiesGrid>
          </AmenitiesCard>

          <LocationCard>
            <CardHeading>
              <LocationListIcon />
              <span>{project.locationTitle}</span>
            </CardHeading>

            <LocationList>
              {project.locationAdvantages.map((item) => (
                <LocationItem key={item.place}>
                  <GreenDotIcon />
                  <span>{item.place}</span>
                  <TimeBadge>{item.time}</TimeBadge>
                </LocationItem>
              ))}
            </LocationList>
          </LocationCard>

          <PriceAuctionCard>
            <SidebarTitle>{project.priceDetailsTitle}</SidebarTitle>
            <DetailList>
              {project.priceAuctionDetails.map((item) => (
                <DetailItem key={item.label}>
                  <DetailLabel>{item.label}</DetailLabel>
                  <DetailValue>{item.value}</DetailValue>
                </DetailItem>
              ))}
            </DetailList>
          </PriceAuctionCard>

          <BankLegalCard>
            <CardHeading>
              <BankBuildingIcon />
              <span>{project.bankInfoTitle}</span>
            </CardHeading>
            <BankLegalList>
              {project.bankLegalInfo.map((item) => (
                <BankLegalItem key={item.label}>
                  <span>{item.label}</span>
                  <BankLegalValue>{item.value}</BankLegalValue>
                </BankLegalItem>
              ))}
            </BankLegalList>
          </BankLegalCard>

          <DocumentCard>
            <CardHeading>
              <DocumentIcon />
              <span>{project.documentsTitle}</span>
            </CardHeading>
            <DocumentGrid>
              {project.documentsAvailable.map((item) => (
                <DocumentItem key={item}>
                  <DocumentTickIcon />
                  <span>{item}</span>
                </DocumentItem>
              ))}
            </DocumentGrid>
            <DocumentsButton type="button">
              <DocumentIcon />
              <span>View All Documents</span>
            </DocumentsButton>
          </DocumentCard>

          <SimilarAuctionCard>
            <SimilarHeader>
              <CardHeading>
                <BuildingIcon />
                <span>{project.similarTitle}</span>
              </CardHeading>
              <ViewAllButton type="button">
                <span>View All</span>
                <ChevronRightIcon />
              </ViewAllButton>
            </SimilarHeader>

            <SimilarAuctionGrid>
              {project.similarProperties.map((item) => (
                <SimilarAuctionItem
                  key={`${project.id}-${item.id}-${item.title}`}
                  to={`/auction-project/${item.id}`}
                >
                  <SimilarAuctionImageWrap>
                    <SimilarAuctionImage src={item.image} alt={item.imageAlt} />
                    <SimilarAuctionBadge>{item.badge}</SimilarAuctionBadge>
                    <SimilarAuctionFav>
                      <HeartOutlineIcon />
                    </SimilarAuctionFav>
                  </SimilarAuctionImageWrap>
                  <SimilarAuctionBody>
                    <SimilarAuctionTitle>{item.title}</SimilarAuctionTitle>
                    <SimilarAuctionLocation>
                      {item.location}
                    </SimilarAuctionLocation>
                    <SimilarAuctionPrice>{item.price}</SimilarAuctionPrice>
                    <SimilarAuctionEnding>{item.ending}</SimilarAuctionEnding>
                  </SimilarAuctionBody>
                </SimilarAuctionItem>
              ))}
            </SimilarAuctionGrid>
          </SimilarAuctionCard>

          <ConfidenceCard>
            <ConfidenceGrid>
              <div>
                <SidebarTitle>{project.confidenceTitle}</SidebarTitle>
                <ConfidenceList>
                  {project.confidencePoints.map((item) => (
                    <ConfidenceItem key={item}>
                      <CheckCircleIcon />
                      <span>{item}</span>
                    </ConfidenceItem>
                  ))}
                </ConfidenceList>
              </div>
              <ConfidenceArt>
                <ConfidenceShieldAuctionArt />
              </ConfidenceArt>
            </ConfidenceGrid>
          </ConfidenceCard>
        </AuctionDetailsGrid>

        <BottomBand>
          <BottomBandGrid>
            <BottomBandCopy>
              <BottomBandIcon>
                <GavelIcon />
              </BottomBandIcon>
              <div>
                <BottomBandTitle>{project.bottomCta.title}</BottomBandTitle>
                <BottomBandText>{project.bottomCta.text}</BottomBandText>
              </div>
            </BottomBandCopy>

            <BottomBandButton type="button">
              <GavelIcon />
              <span>{project.bottomCta.primaryLabel}</span>
            </BottomBandButton>

            <BottomBandButton type="button" $ghost>
              <HeadsetIcon />
              <span>{project.bottomCta.secondaryLabel}</span>
            </BottomBandButton>

            <BottomBandImage
              src={project.bottomCta.image}
              alt={project.bottomCta.imageAlt}
            />
          </BottomBandGrid>
        </BottomBand>
      </PageInner>

      {showGallery ? (
        <ModalOverlay onClick={() => setShowGallery(false)}>
          <ModalCard onClick={(event) => event.stopPropagation()}>
            <ModalTop>
              <ModalTitle>{project.title} Gallery</ModalTitle>
              <CloseButton type="button" onClick={() => setShowGallery(false)}>
                <CloseIcon />
              </CloseButton>
            </ModalTop>

            <ModalImage src={activeImage.image} alt={activeImage.imageAlt} />

            <ModalThumbRow>
              {project.gallery.map((item, index) => (
                <ThumbnailCard
                  key={`${item.label}-modal-${index}`}
                  type="button"
                  $active={activeImageIndex === index}
                  onClick={() => setActiveImageIndex(index)}
                >
                  <ThumbnailImage src={item.image} alt={item.imageAlt} />
                  <ThumbnailLabel>{item.label}</ThumbnailLabel>
                </ThumbnailCard>
              ))}
            </ModalThumbRow>
          </ModalCard>
        </ModalOverlay>
      ) : null}
    </PageShell>
  );
}

function FragmentCountdown({ item, showDivider }) {
  return (
    <>
      <CountdownGroup>
        <CountdownNumber>{item.value}</CountdownNumber>
        <CountdownUnit>{item.unit}</CountdownUnit>
      </CountdownGroup>
      {showDivider ? <CountdownDivider>:</CountdownDivider> : null}
    </>
  );
}

function DetailCheckItem({ children }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "18px minmax(0, 1fr)",
        gap: "10px",
        color: "#5a6963",
        fontSize: "0.8rem",
        lineHeight: 1.38,
      }}
    >
      <CheckCircleIcon />
      <span>{children}</span>
    </div>
  );
}

function BadgeIcon({ type }) {
  switch (type) {
    case "shield":
      return <ShieldCheckIcon />;
    default:
      return <GavelIcon />;
  }
}

function AmenitySvg({ type }) {
  switch (type) {
    case "gym":
      return <GymIcon />;
    case "pool":
      return <PoolIcon />;
    case "play":
      return <PlayAreaIcon />;
    case "backup":
      return <PowerIcon />;
    case "security":
      return <SecurityIcon />;
    case "lift":
      return <LiftIcon />;
    case "parking":
      return <ParkingIcon />;
    default:
      return <ClubHouseIcon />;
  }
}

function GavelIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.1 7.4L10.4 11.7"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M8.2 5.3L12.5 9.6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <rect
        x="10.5"
        y="4.1"
        width="3.6"
        height="6.1"
        rx="1"
        transform="rotate(45 10.5 4.1)"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <rect
        x="5.2"
        y="9.4"
        width="3.6"
        height="6.1"
        rx="1"
        transform="rotate(45 5.2 9.4)"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M11.8 13.1L16.6 17.9"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M4 17H16.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BankBuildingIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.8 7.2L10 4L16.2 7.2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.2 7.6V13.6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M8.4 7.6V13.6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M11.6 7.6V13.6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M14.8 7.6V13.6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M3.8 14.4H16.2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function GalleryIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="3.5"
        y="4.5"
        width="13"
        height="11"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M6.5 4.5V8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M10 9.1L8.6 10.8L10.7 13L13.8 9.8L16.5 12.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LocationPinIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 17C12.7 13.94 14.05 11.61 14.05 9.97C14.05 7.76 12.27 6 10 6C7.73 6 5.95 7.76 5.95 9.97C5.95 11.61 7.3 13.94 10 17Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle
        cx="10"
        cy="9.9"
        r="1.5"
        stroke="currentColor"
        strokeWidth="1.8"
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

function HeartIcon({ $filled }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill={$filled ? "currentColor" : "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 16C13.78 12.96 15.67 10.74 15.67 8.34C15.67 6.66 14.36 5.35 12.68 5.35C11.56 5.35 10.65 5.88 10 6.9C9.35 5.88 8.44 5.35 7.32 5.35C5.64 5.35 4.33 6.66 4.33 8.34C4.33 10.74 6.22 12.96 10 16Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CompareIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5 6H15"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M5 14H15"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M7.8 3.8L5.2 6.4L7.8 9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.2 11L14.8 13.6L12.2 16.2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="6" cy="10" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle
        cx="14.5"
        cy="5.5"
        r="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle
        cx="14.5"
        cy="14.5"
        r="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M7.75 9.1L12.7 6.3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M7.75 10.9L12.7 13.7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ConsultantAvatarArt() {
  return (
    <svg viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="78" height="78" rx="16" fill="url(#auctionConsultantBg)" />
      <ellipse cx="39" cy="82" rx="22" ry="5" fill="rgba(0,0,0,0.08)" />
      <ellipse cx="39" cy="24" rx="9" ry="10" fill="#D9B29B" />
      <path
        d="M29.5 25C29.5 17.65 33.76 12 39 12C44.24 12 48.5 17.65 48.5 25V27.5H29.5V25Z"
        fill="#2A2C31"
      />
      <path d="M31.5 36H46.5L51 66H27L31.5 36Z" fill="#223141" />
      <path d="M34 36L39 43L44 36L48.5 66H29.5L34 36Z" fill="#FFFFFF" />
      <path d="M37 43H41L42 66H36L37 43Z" fill="#223141" />
      <defs>
        <linearGradient
          id="auctionConsultantBg"
          x1="39"
          y1="0"
          x2="39"
          y2="78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EDF4EF" />
          <stop offset="1" stopColor="#DAE5DD" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function HeadsetIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.6 10.2C4.6 7.22 7.02 4.8 10 4.8C12.98 4.8 15.4 7.22 15.4 10.2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <rect
        x="4.1"
        y="9.5"
        width="2.7"
        height="4.8"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <rect
        x="13.2"
        y="9.5"
        width="2.7"
        height="4.8"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M13.2 15C12.84 15.88 11.78 16.5 10.5 16.5H9.2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.1 4.6H7.9L8.9 7.8L7.65 8.95C8.35 10.32 9.48 11.44 10.84 12.14L12 10.9L15.2 11.9V13.7C15.2 14.51 14.54 15.17 13.73 15.17C8.76 15.17 4.73 11.14 4.73 6.17C4.73 5.36 5.39 4.7 6.2 4.7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 16.6C13.65 16.6 16.6 13.65 16.6 10C16.6 6.35 13.65 3.4 10 3.4C6.35 3.4 3.4 6.35 3.4 10C3.4 11.28 3.76 12.46 4.39 13.47L3.73 16.27L6.63 15.61C7.61 16.25 8.78 16.6 10 16.6Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M8.2 7.5C8.38 7.11 8.56 7.1 8.86 7.1C8.99 7.1 9.13 7.1 9.27 7.11C9.43 7.11 9.65 7.16 9.79 7.47C9.96 7.86 10.38 8.87 10.43 8.95C10.48 9.03 10.51 9.13 10.45 9.24C10.38 9.35 10.35 9.4 10.23 9.53C10.11 9.66 9.98 9.82 9.88 9.93C9.77 10.04 9.66 10.16 9.8 10.39C9.95 10.63 10.43 11.41 11.13 12.04C12.04 12.85 12.82 13.1 13.07 13.2C13.31 13.31 13.45 13.29 13.56 13.18C13.67 13.06 13.99 12.66 14.13 12.45C14.28 12.24 14.42 12.28 14.62 12.35C14.83 12.42 15.9 12.94 16.12 13.06C16.34 13.17 16.49 13.22 16.54 13.31C16.6 13.4 16.6 13.84 16.4 14.23C16.2 14.61 15.21 14.97 14.82 15C14.42 15.03 14.07 15.17 12.46 14.54C10.86 13.93 9.77 12.39 9.53 12.04C9.29 11.7 8.56 10.72 8.4 9.76C8.23 8.8 8.43 7.84 8.2 7.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function HomeOutlineIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.5 10L12 4.6L19.5 10V19H14.7V14.6H9.3V19H4.5V10Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AmenityHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="5"
        y="5"
        width="6"
        height="6"
        rx="1.6"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <rect
        x="13"
        y="5"
        width="6"
        height="6"
        rx="1.6"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <rect
        x="5"
        y="13"
        width="6"
        height="6"
        rx="1.6"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <rect
        x="13"
        y="13"
        width="6"
        height="6"
        rx="1.6"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function LocationListIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 7H18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M6 12H18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M6 17H18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="4.2" cy="7" r="1.2" fill="currentColor" />
      <circle cx="4.2" cy="12" r="1.2" fill="currentColor" />
      <circle cx="4.2" cy="17" r="1.2" fill="currentColor" />
    </svg>
  );
}

function GreenDotIcon() {
  return (
    <svg
      viewBox="0 0 12 12"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="6" cy="6" r="4.2" />
    </svg>
  );
}

function GymIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4 10V14"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M20 10V14"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M8 8V16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M16 8V16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M8 12H16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PoolIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4 16C5.2 14.8 6.4 14.8 7.6 16C8.8 17.2 10 17.2 11.2 16C12.4 14.8 13.6 14.8 14.8 16C16 17.2 17.2 17.2 18.4 16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M5 12C6.2 10.8 7.4 10.8 8.6 12C9.8 13.2 11 13.2 12.2 12C13.4 10.8 14.6 10.8 15.8 12C17 13.2 18.2 13.2 19.4 12"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M8 8.2C8 6.43 9.43 5 11.2 5H15V12"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlayAreaIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 18V11L12 7L16 11V18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M6 19H18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M12 7V4.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PowerIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="7"
        y="4.5"
        width="10"
        height="15"
        rx="1.8"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M12 7.5V12.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M10 10.8L12 12.8L14 10.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 17H14"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SecurityIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 4L18 6.5V11.1C18 15.08 15.47 18.42 12 19.8C8.53 18.42 6 15.08 6 11.1V6.5L12 4Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M9.2 11.5L11 13.3L14.8 9.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LiftIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="6"
        y="4"
        width="12"
        height="16"
        rx="1.8"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M10 8H14"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M10 12H14"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path d="M9 17L7.4 15.2H10.6L9 17Z" fill="currentColor" />
      <path d="M15 15L13.4 16.8H16.6L15 15Z" fill="currentColor" />
    </svg>
  );
}

function ParkingIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7 18V6H12.4C15 6 16.8 7.56 16.8 9.9C16.8 12.24 15 13.8 12.4 13.8H7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 13.8H13.4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ClubHouseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.5 10L12 4.8L19.5 10V19H4.5V10Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9 19V12.6H15V19"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 8.8H7.6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M16.4 8.8H16.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CheckCircleIcon() {
  return (
    <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="9" cy="9" r="6.2" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M6.1 9L8.1 11L11.9 7.2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldCheckIcon() {
  return (
    <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9 2.5L14 4.5V8.3C14 11.38 12.03 13.95 9 15.1C5.97 13.95 4 11.38 4 8.3V4.5L9 2.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M6.8 8.9L8.3 10.4L11.4 7.3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 3.8H11.5L15 7.3V16.2H6V3.8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M11.2 3.9V7.5H14.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DocumentTickIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5 8L7 10L11 6"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.5 2.8H9L11.8 5.6V13.2H4.5V2.8Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <path
        d="M8.8 2.9V5.9H11.8"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 16V4.6H12.2V16" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12.2 16V8.2H15.8V16" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M7.4 7H9.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M7.4 10H9.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 5L13 10L8 15"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HeartOutlineIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 16C13.78 12.96 15.67 10.74 15.67 8.34C15.67 6.66 14.36 5.35 12.68 5.35C11.56 5.35 10.65 5.88 10 6.9C9.35 5.88 8.44 5.35 7.32 5.35C5.64 5.35 4.33 6.66 4.33 8.34C4.33 10.74 6.22 12.96 10 16Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ConfidenceShieldAuctionArt() {
  return (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M55 14L88 27V52.1C88 72.9 74.56 90.3 55 98C35.44 90.3 22 72.9 22 52.1V27L55 14Z"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        d="M41 53L51 63L72 42"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.5 5.5L14.5 14.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M14.5 5.5L5.5 14.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default AuctionProjectDetails;
