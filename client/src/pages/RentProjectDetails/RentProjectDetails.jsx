import { useEffect, useMemo, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { siteNavbar } from "../../data/HomePageContent";
import { getRentProjectDetails } from "../../data/RentProjectDetailsData";
import { NavWrap } from "../Home/HomeStyles";
import {
  ActionButton,
  ActionRow,
  AmenityCard,
  AmenityIcon,
  AmenityLabel,
  AmenitiesGrid,
  Badge,
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
  CheckItem,
  CheckList,
  CloseButton,
  ConsultantAvatar,
  ConsultantHeader,
  ConsultantMeta,
  ConsultantName,
  CrumbLink,
  CrumbSeparator,
  DotDivider,
  GalleryShell,
  HeroGrid,
  InfoCard,
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
  Price,
  RatingPill,
  RatingRow,
  ResponseCard,
  SidebarButton,
  SidebarCard,
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
  DesktopOnly,
  MobileOnly,
  LocalityCard,
  LocalityText,
  MobileAdvisorActions,
  MobileAdvisorAvatar,
  MobileAdvisorBtn,
  MobileAdvisorLeft,
  MobileAdvisorMeta,
  MobileAdvisorName,
  MobileAdvisorRating,
  MobileAdvisorRight,
  MobileAdvisorSection,
  MobileAdvisorTitle,
  MobileAmenityIcon,
  MobileAmenityItem,
  MobileAmenityLabel,
  MobileAmenitiesRow,
  MobileBadge,
  MobileBadgeRow,
  MobileBottomBar,
  MobileBottomBarBtn,
  MobileGalleryWrapper,
  MobileLocationDivider,
  MobileLocationIcon,
  MobileLocationItem,
  MobileLocationName,
  MobileLocationRow,
  MobileLocationTime,
  MobileMainImage,
  MobileMorePhotos,
  MobileMorePhotosLabel,
  MobileMorePhotosSub,
  MobilePageBottomPad,
  MobilePhotoCount,
  MobilePropertyInfo,
  MobileResponseCard,
  MobileSectionCard,
  MobileSectionHeading,
  MobileSectionHeadingRow,
  MobileThumbnailItem,
  MobileThumbnailLabel,
  MobileThumbnailRow,
  MobileTopBar,
  MobileTopBarBtn,
  MobileTopBarRight,
  MobileViewAll,
  NearbyCard,
  NearbyGrid,
  NearbyItem,
  NearbyLabel,
  NearbyTime,
  RentDetailsGrid,
  RentMetaNote,
  RentPriceRow,
  RentPriceUnit,
  RentSpecCard,
  RentSpecGrid,
  RentSpecLabel,
  RentSpecValue,
  RentSummaryCard,
  SummaryItem,
  SummaryLabel,
  SummaryList,
  SummaryValue,
  Tag,
  TagRow,
  VerifiedPropertyCard,
  VerifiedPropertyContent,
  VerifiedPropertyText,
  VerifiedPropertyTitle,
} from "./RentProjectDetailsStyles";

function RentProjectDetails() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = useMemo(() => getRentProjectDetails(projectId), [projectId]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [showGallery, setShowGallery] = useState(false);
  const [saved, setSaved] = useState(false);
  const [compared, setCompared] = useState(false);
  const [shareFeedback, setShareFeedback] = useState("Share");

  useEffect(() => {
    setActiveImageIndex(0);
    setShowGallery(false);
    setSaved(false);
    setCompared(false);
    setShareFeedback("Share");
  }, [project]);

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

  const handleDownloadBrochure = () => {
    const brochureText = [
      project.title,
      `Location: ${project.location}`,
      `Rent: ${project.price}${project.priceSuffix}`,
      `Property ID: ${project.propertyCode}`,
      `Rating: ${project.rating} (${project.reviews})`,
      "",
      project.aboutDescription,
    ].join("\n");
    const href = `data:text/plain;charset=utf-8,${encodeURIComponent(brochureText)}`;
    const link = document.createElement("a");
    link.href = href;
    link.download = `${project.id}-rent-details.txt`;
    link.click();
  };

  /* ─── Mobile gallery thumbnails: first 3 + "more" tile ─── */
  const mobileThumbs = project.gallery.slice(1, 4);
  const moreCount = project.gallery.length - 4;

  return (
    <PageShell>
      {/* ── DESKTOP / TABLET NAVBAR (hidden on mobile) ── */}
      <DesktopOnly>
        <NavWrap>
          <Navbar links={siteNavbar.links} ctaLabel={siteNavbar.ctaLabel} />
        </NavWrap>
      </DesktopOnly>

      {/* ════════════════════════════════════
          MOBILE LAYOUT  (max-width: 768px)
          ════════════════════════════════════ */}
      <MobileOnly>
        {/* Mobile top bar: back + save/share */}
        <MobileTopBar>
          <MobileTopBarBtn type="button" aria-label="Go back" onClick={() => navigate(-1)}>
            <BackArrowIcon />
          </MobileTopBarBtn>
          <MobileTopBarRight>
            <MobileTopBarBtn
              type="button"
              aria-label="Save"
              onClick={() => setSaved((v) => !v)}
            >
              <HeartIcon $filled={saved} />
            </MobileTopBarBtn>
            <MobileTopBarBtn
              type="button"
              aria-label="Share"
              onClick={handleShare}
            >
              <ShareIcon />
            </MobileTopBarBtn>
          </MobileTopBarRight>
        </MobileTopBar>

        {/* Mobile gallery */}
        <MobileGalleryWrapper>
          <MobileBadgeRow>
            {project.badges.map((item) => (
              <MobileBadge key={item}>
                <StarOutlineIcon />
                <span>{item}</span>
              </MobileBadge>
            ))}
          </MobileBadgeRow>

          <MobileMainImage src={activeImage.image} alt={activeImage.imageAlt} />

          <MobilePhotoCount>
            <GalleryIcon />
            <span>
              {activeImageIndex + 1} / {project.gallery.length}
            </span>
          </MobilePhotoCount>

          <MobileThumbnailRow>
            {mobileThumbs.map((item, index) => {
              const imgIndex = index + 1;
              return (
                <MobileThumbnailItem
                  key={`mob-thumb-${imgIndex}`}
                  type="button"
                  onClick={() => setActiveImageIndex(imgIndex)}
                >
                  <img src={item.image} alt={item.imageAlt} />
                  <MobileThumbnailLabel>{item.label}</MobileThumbnailLabel>
                </MobileThumbnailItem>
              );
            })}

            {/* +More photos tile */}
            <MobileMorePhotos
              type="button"
              onClick={() => setShowGallery(true)}
            >
              {project.gallery[4] && (
                <img
                  src={project.gallery[4].image}
                  alt="more"
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    opacity: 0.28,
                  }}
                />
              )}
              <MobileMorePhotosLabel>
                +{moreCount > 0 ? moreCount : 18}
              </MobileMorePhotosLabel>
              <MobileMorePhotosSub>More Photos</MobileMorePhotosSub>
            </MobileMorePhotos>
          </MobileThumbnailRow>
        </MobileGalleryWrapper>

        {/* Mobile property info block */}
        <MobilePropertyInfo>
          {/* Breadcrumb */}
          <BreadcrumbRow>
            <CrumbLink to="/rent">Rent</CrumbLink>
            <CrumbSeparator>&gt;</CrumbSeparator>
            <CrumbLink to="/rent">{project.category}</CrumbLink>
            <CrumbSeparator>&gt;</CrumbSeparator>
            <span>{project.locationTrail}</span>
          </BreadcrumbRow>

          {/* Title */}
          <TitleRow>
            <Title>{project.title}</Title>
            <VerifiedDot style={{ display: "inline-flex", marginLeft: 6 }}>
              <ShieldCheckIcon />
            </VerifiedDot>
          </TitleRow>

          {/* Location + rating */}
          <LocationRow>
            <LocationIcon />
            <span>{project.location}</span>
          </LocationRow>

          <RatingRow style={{ marginTop: 6 }}>
            <RatingPill>
              <StarIcon />
              <span>
                {project.rating} ({project.reviews})
              </span>
            </RatingPill>
            <DotDivider />
            <span>Property ID: {project.propertyCode}</span>
          </RatingRow>

          {/* Price */}
          <div style={{ marginTop: 14 }}>
            <RentPriceRow>
              <Price>{project.price}</Price>
              <RentPriceUnit>{project.priceSuffix}</RentPriceUnit>
            </RentPriceRow>
            <RentMetaNote>{project.maintenanceNote}</RentMetaNote>
          </div>

          {/* Specs */}
          <RentSpecGrid>
            {project.specs.map((item) => (
              <RentSpecCard key={`${item.value}-${item.label}`}>
                <SpecIcon type={item.icon} />
                <div>
                  <RentSpecValue>{item.value}</RentSpecValue>
                  {item.label && <RentSpecLabel>{item.label}</RentSpecLabel>}
                </div>
              </RentSpecCard>
            ))}
          </RentSpecGrid>

          {/* Action row: Save / Compare / Share / Download */}
          <ActionRow style={{ marginTop: 14 }}>
            <ActionButton type="button" onClick={() => setSaved((v) => !v)}>
              <HeartIcon $filled={saved} />
              <span>{saved ? "Saved" : "Save"}</span>
            </ActionButton>
            <ActionButton type="button" onClick={() => setCompared((v) => !v)}>
              <CompareIcon />
              <span>{compared ? "Compared" : "Compare"}</span>
            </ActionButton>
            <ActionButton type="button" onClick={handleShare}>
              <ShareIcon />
              <span>{shareFeedback}</span>
            </ActionButton>
            <ActionButton
              type="button"
              $primary
              $accent
              onClick={handleDownloadBrochure}
            >
              <DownloadIcon />
              <span>{project.actionLabels.brochure}</span>
            </ActionButton>
          </ActionRow>
        </MobilePropertyInfo>

        {/* Mobile Property Advisor card */}
        <MobileAdvisorSection>
          <MobileAdvisorLeft>
            <MobileAdvisorAvatar>
              <ConsultantAvatarArt />
            </MobileAdvisorAvatar>
          </MobileAdvisorLeft>

          <MobileAdvisorRight>
            <MobileAdvisorTitle>Property Advisor</MobileAdvisorTitle>
            <MobileAdvisorName>{project.consultant.name}</MobileAdvisorName>
            <MobileAdvisorMeta>{project.consultant.role}</MobileAdvisorMeta>
            <MobileAdvisorMeta>
              {project.consultant.experience}
            </MobileAdvisorMeta>
            <MobileAdvisorRating>
              <StarIcon />
              <span>
                {project.consultant.rating} ({project.consultant.reviews})
              </span>
            </MobileAdvisorRating>
          </MobileAdvisorRight>
        </MobileAdvisorSection>

        {/* Advisor action buttons */}
        <MobileAdvisorActions>
          <MobileAdvisorBtn type="button" $filled>
            <CalendarIcon />
            <span>{project.actionLabels.siteVisit}</span>
          </MobileAdvisorBtn>
          <MobileAdvisorBtn type="button">
            <HeadsetIcon />
            <span>{project.actionLabels.advisor}</span>
          </MobileAdvisorBtn>
          <MobileAdvisorBtn type="button">
            <PhoneIcon />
            <span>{project.actionLabels.callback}</span>
          </MobileAdvisorBtn>
          <MobileAdvisorBtn type="button" $whatsapp>
            <WhatsAppIcon />
            <span>{project.actionLabels.whatsapp}</span>
          </MobileAdvisorBtn>
        </MobileAdvisorActions>

        {/* Response time */}
        <MobileResponseCard>
          <ClockIcon />
          <div>
            <strong>Response Time</strong>
            <span>{project.consultant.responseTime}</span>
          </div>
        </MobileResponseCard>

        {/* Rent Summary */}
        <MobileSectionCard>
          <MobileSectionHeading>
            <RentSummaryIcon />
            <span>{project.rentSummaryTitle}</span>
          </MobileSectionHeading>
          <SummaryList>
            {project.rentSummary.map((item) => (
              <SummaryItem key={item.label}>
                <SummaryLabel>{item.label}</SummaryLabel>
                <SummaryValue>{item.value}</SummaryValue>
              </SummaryItem>
            ))}
          </SummaryList>
        </MobileSectionCard>

        {/* Verified Property */}
        <MobileSectionCard
          style={{
            background:
              "linear-gradient(135deg, #f5faf5 0%, #eef7f0 55%, #f7fbf7 100%)",
          }}
        >
          <VerifiedPropertyContent>
            <VerifiedDot style={{ marginBottom: 0 }}>
              <ShieldCheckIcon />
            </VerifiedDot>
            <div>
              <VerifiedPropertyTitle>
                {project.verifiedCard.title}
              </VerifiedPropertyTitle>
              <VerifiedPropertyText>
                {project.verifiedCard.text}
              </VerifiedPropertyText>
            </div>
          </VerifiedPropertyContent>
        </MobileSectionCard>

        {/* About This Property */}
        <MobileSectionCard>
          <MobileSectionHeading>
            <HomeOutlineIcon />
            <span>{project.aboutTitle}</span>
          </MobileSectionHeading>
          <CardText style={{ marginTop: 10, fontSize: "0.85rem" }}>
            {project.aboutDescription}{" "}
            <span
              style={{ color: "#0f6b34", fontWeight: 700, cursor: "pointer" }}
            >
              Read More
            </span>
          </CardText>
        </MobileSectionCard>

        {/* Amenities */}
        <MobileSectionCard>
          <MobileSectionHeadingRow>
            <MobileSectionHeading>
              <AmenitiesIcon />
              <span>{project.amenitiesTitle}</span>
            </MobileSectionHeading>
            <MobileViewAll type="button">
              View All <ChevronRightIcon />
            </MobileViewAll>
          </MobileSectionHeadingRow>

          <MobileAmenitiesRow>
            {project.amenities.map((item) => (
              <MobileAmenityItem key={item.key}>
                <MobileAmenityIcon>
                  <AmenitySvg type={item.key} />
                </MobileAmenityIcon>
                <MobileAmenityLabel>{item.label}</MobileAmenityLabel>
              </MobileAmenityItem>
            ))}
          </MobileAmenitiesRow>
        </MobileSectionCard>

        {/* Location Advantages */}
        <MobileSectionCard>
          <MobileSectionHeadingRow>
            <MobileSectionHeading>
              <LocationListIcon />
              <span>{project.locationTitle}</span>
            </MobileSectionHeading>
            <MobileViewAll type="button">
              View All <ChevronRightIcon />
            </MobileViewAll>
          </MobileSectionHeadingRow>

          <MobileLocationRow>
            {project.locationAdvantages.map((item, index) => (
              <>
                <MobileLocationItem key={item.place}>
                  <MobileLocationIcon>
                    <LocationAdvantageIcon type={item.icon} />
                  </MobileLocationIcon>
                  <MobileLocationName>{item.place}</MobileLocationName>
                  <MobileLocationTime>{item.time}</MobileLocationTime>
                </MobileLocationItem>
                {index < project.locationAdvantages.length - 1 && (
                  <MobileLocationDivider key={`div-${index}`}>
                    ›
                  </MobileLocationDivider>
                )}
              </>
            ))}
          </MobileLocationRow>
        </MobileSectionCard>

        {/* Bottom padding to account for fixed bar */}
        <MobilePageBottomPad />

        {/* ── Fixed bottom bar ── */}
        <MobileBottomBar>
          <MobileBottomBarBtn type="button" $outline>
            <HeadsetIcon />
            <span>Talk to Advisor</span>
          </MobileBottomBarBtn>
          <MobileBottomBarBtn type="button">
            <CalendarIcon />
            <span>Schedule Visit</span>
          </MobileBottomBarBtn>
        </MobileBottomBar>
      </MobileOnly>

      {/* ════════════════════════════════════
          DESKTOP LAYOUT (min-width: 769px)
          ════════════════════════════════════ */}
      <DesktopOnly>
        <PageInner>
          <HeroGrid>
            <GalleryShell>
              <MainMedia>
                <BadgeRow>
                  {project.badges.map((item) => (
                    <Badge key={item}>
                      <StarOutlineIcon />
                      <span>{item}</span>
                    </Badge>
                  ))}
                </BadgeRow>

                <MainImage src={activeImage.image} alt={activeImage.imageAlt} />

                <ViewPhotosButton
                  type="button"
                  onClick={() => setShowGallery(true)}
                >
                  <GalleryIcon />
                  <span>View Photos</span>
                  <span>
                    {activeImageIndex + 1} / {project.gallery.length}
                  </span>
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

            <div style={{ minWidth: 0, padding: "2px 10px 0 14px" }}>
              <BreadcrumbRow>
                <CrumbLink to="/rent">Rent</CrumbLink>
                <CrumbSeparator>&gt;</CrumbSeparator>
                <CrumbLink to="/rent">{project.category}</CrumbLink>
                <CrumbSeparator>&gt;</CrumbSeparator>
                <span>{project.locationTrail}</span>
              </BreadcrumbRow>

              <TitleRow>
                <Title>{project.title}</Title>
              </TitleRow>

              <LocationRow>
                <LocationIcon />
                <span>{project.location}</span>
              </LocationRow>

              <RatingRow>
                <RatingPill>
                  <StarIcon />
                  <span>
                    {project.rating} ({project.reviews})
                  </span>
                </RatingPill>
                <DotDivider />
                <span>Property ID: {project.propertyCode}</span>
              </RatingRow>

              <div style={{ marginTop: 18 }}>
                <RentPriceRow>
                  <Price>{project.price}</Price>
                  <RentPriceUnit>{project.priceSuffix}</RentPriceUnit>
                </RentPriceRow>
                <RentMetaNote>{project.maintenanceNote}</RentMetaNote>
              </div>

              <RentSpecGrid>
                {project.specs.map((item) => (
                  <RentSpecCard key={`${item.value}-${item.label}`}>
                    <SpecIcon type={item.icon} />
                    <RentSpecValue>{item.value}</RentSpecValue>
                  </RentSpecCard>
                ))}
              </RentSpecGrid>

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
                <ActionButton
                  type="button"
                  $primary
                  $accent
                  onClick={handleDownloadBrochure}
                >
                  <DownloadIcon />
                  <span>{project.actionLabels.brochure}</span>
                </ActionButton>
              </ActionRow>
            </div>

            <SidebarStack>
              <SidebarCard>
                <SidebarTitle>Property Advisor</SidebarTitle>

                <ConsultantHeader>
                  <ConsultantAvatar>
                    <ConsultantAvatarArt />
                  </ConsultantAvatar>

                  <div>
                    <ConsultantName>{project.consultant.name}</ConsultantName>
                    <ConsultantMeta>{project.consultant.role}</ConsultantMeta>
                    <ConsultantMeta>
                      {project.consultant.experience}
                    </ConsultantMeta>
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
                        {project.consultant.rating} (
                        {project.consultant.reviews})
                      </span>
                    </ConsultantMeta>
                  </div>
                </ConsultantHeader>

                <SidebarButton type="button" $filled $first>
                  <CalendarIcon />
                  <span>{project.actionLabels.siteVisit}</span>
                </SidebarButton>
                <SidebarButton type="button">
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

                <ResponseCard>
                  <ClockIcon />
                  <div>
                    <strong style={{ display: "block", color: "#203028" }}>
                      Response Time
                    </strong>
                    <span>{project.consultant.responseTime}</span>
                  </div>
                </ResponseCard>
              </SidebarCard>
            </SidebarStack>
          </HeroGrid>

          <RentDetailsGrid>
            <InfoCard>
              <CardHeading>
                <HomeOutlineIcon />
                <span>{project.aboutTitle}</span>
              </CardHeading>
              <CardText>{project.aboutDescription}</CardText>

              <CheckList>
                {project.aboutPoints.map((item) => (
                  <CheckItem key={item}>
                    <CheckCircleIcon />
                    <span>{item}</span>
                  </CheckItem>
                ))}
              </CheckList>
            </InfoCard>

            <InfoCard>
              <CardHeading>
                <AmenitiesIcon />
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
            </InfoCard>

            <InfoCard>
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
            </InfoCard>

            <RentSummaryCard>
              <SidebarTitle>{project.rentSummaryTitle}</SidebarTitle>
              <SummaryList>
                {project.rentSummary.map((item) => (
                  <SummaryItem key={item.label}>
                    <SummaryLabel>{item.label}</SummaryLabel>
                    <SummaryValue>{item.value}</SummaryValue>
                  </SummaryItem>
                ))}
              </SummaryList>
            </RentSummaryCard>

            <NearbyCard>
              <CardHeading>
                <NearbyPinIcon />
                <span>{project.nearbyTitle}</span>
              </CardHeading>

              <NearbyGrid>
                {project.nearbyEssentials.map((item) => (
                  <NearbyItem key={item.label}>
                    <NearbySvg type={item.icon} />
                    <NearbyLabel>{item.label}</NearbyLabel>
                    <NearbyTime>{item.time}</NearbyTime>
                  </NearbyItem>
                ))}
              </NearbyGrid>
            </NearbyCard>

            <LocalityCard>
              <CardHeading>
                <LocationIcon />
                <span>{project.localityTitle}</span>
              </CardHeading>

              <LocalityText>{project.localityDescription}</LocalityText>

              <TagRow>
                {project.localityTags.map((item) => (
                  <Tag key={item}>
                    <CheckCircleIcon />
                    <span>{item}</span>
                  </Tag>
                ))}
              </TagRow>
            </LocalityCard>

            <VerifiedPropertyCard>
              <VerifiedPropertyContent>
                <VerifiedDot style={{ marginBottom: 0 }}>
                  <ShieldCheckIcon />
                </VerifiedDot>
                <div>
                  <VerifiedPropertyTitle>
                    {project.verifiedCard.title}
                  </VerifiedPropertyTitle>
                  <VerifiedPropertyText>
                    {project.verifiedCard.text}
                  </VerifiedPropertyText>
                </div>
              </VerifiedPropertyContent>
            </VerifiedPropertyCard>
          </RentDetailsGrid>

          <BottomBand>
            <BottomBandGrid>
              <BottomBandCopy>
                <BottomBandIcon>
                  <HomeBandIcon />
                </BottomBandIcon>
                <div>
                  <BottomBandTitle>{project.bottomCta.title}</BottomBandTitle>
                  <BottomBandText>{project.bottomCta.text}</BottomBandText>
                </div>
              </BottomBandCopy>

              <BottomBandButton type="button">
                <CalendarIcon />
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
      </DesktopOnly>

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

/* ─── Helper: location icon per type ─── */
function LocationAdvantageIcon({ type }) {
  switch (type) {
    case "school":
      return <SchoolIcon />;
    case "metro":
      return <MetroIcon />;
    case "hospital":
      return <HospitalIcon />;
    case "mall":
      return <MallIcon />;
    case "park":
      return <NearbyPinIcon />;
    default:
      return <LocationIcon />;
  }
}

function AmenitySvg({ type }) {
  switch (type) {
    case "parking":
      return <ParkingIcon />;
    case "backup":
      return <PowerIcon />;
    case "security":
      return <SecurityIcon />;
    case "gym":
      return <GymIcon />;
    case "club":
      return <ClubHouseIcon />;
    case "play":
      return <PlayAreaIcon />;
    case "water":
      return <WaterDropIcon />;
    default:
      return <LiftIcon />;
  }
}

function SpecIcon({ type }) {
  switch (type) {
    case "area":
      return <AreaIcon />;
    case "property":
      return <PropertyTypeIcon />;
    case "furnishing":
      return <FurnishingIcon />;
    default:
      return <BedIcon />;
  }
}

function NearbySvg({ type }) {
  switch (type) {
    case "school":
      return <SchoolIcon />;
    case "hospital":
      return <HospitalIcon />;
    case "metro":
      return <MetroIcon />;
    case "restaurant":
      return <RestaurantIcon />;
    case "mall":
      return <MallIcon />;
    default:
      return <CartIcon />;
  }
}

/* ─── Icons ─── */

function BackArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.5 15L7.5 10L12.5 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 4L10 8L6 12"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RentSummaryIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="5"
        y="3"
        width="14"
        height="18"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M9 8H15"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M9 12H15"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M9 16H12"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function StarOutlineIcon() {
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

function LocationIcon() {
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

function DownloadIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 3.8V11.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M7.2 8.8L10 11.6L12.8 8.8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.5 14.4H15.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ConsultantAvatarArt() {
  return (
    <svg viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="78" height="78" rx="16" fill="url(#rentConsultantBg)" />
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
          id="rentConsultantBg"
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

function CalendarIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="3.6"
        y="4.5"
        width="12.8"
        height="11.8"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M6.7 3V6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M13.3 3V6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path d="M3.6 7.4H16.4" stroke="currentColor" strokeWidth="1.7" />
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

function ClockIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="6.7" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M10 6.8V10.2L12.35 11.7"
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

function AmenitiesIcon() {
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

function NearbyPinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 20C15.3 16.12 16.95 13.2 16.95 11.05C16.95 8.08 14.56 5.7 11.62 5.7C8.68 5.7 6.3 8.08 6.3 11.05C6.3 13.2 7.95 16.12 11.25 20"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle
        cx="11.6"
        cy="11"
        r="1.8"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function BedIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.5 10.4V14.2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M16.5 10.4V14.2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M3.5 11H16.5V13.4H3.5V11Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M5.1 7.8H8.8C9.83 7.8 10.67 8.64 10.67 9.67V11H5.1V7.8Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M10.67 8.5H13.48C14.44 8.5 15.2 9.28 15.2 10.22V11H10.67V8.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function AreaIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="4"
        y="4"
        width="12"
        height="12"
        rx="1.8"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M7 4V6.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M13 4V6.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M4 7H6.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M13.2 13H16"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PropertyTypeIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.8 9L10 4.5L16.2 9V15.5H12.2V11.8H7.8V15.5H3.8V9Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M7.4 8.8L10 6.9L12.6 8.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function FurnishingIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.8 8.8H15.2V14.2H4.8V8.8Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M6 8.8V6.8C6 5.81 6.81 5 7.8 5H12.2C13.19 5 14 5.81 14 6.8V8.8"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M6.2 14.2V15.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M13.8 14.2V15.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
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
    </svg>
  );
}

function WaterDropIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 4.8C14.8 8.1 16.2 10.56 16.2 12.2C16.2 14.8 14.38 16.8 12 16.8C9.62 16.8 7.8 14.8 7.8 12.2C7.8 10.56 9.2 8.1 12 4.8Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5 6H7L8.5 14H17L18.8 8.5H9.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="10.2" cy="18.2" r="1.2" fill="currentColor" />
      <circle cx="16.2" cy="18.2" r="1.2" fill="currentColor" />
    </svg>
  );
}

function SchoolIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.5 10L12 5.6L19.5 10L12 14.4L4.5 10Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M7 11.8V17.2H17V11.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HospitalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="6"
        y="5.5"
        width="12"
        height="13"
        rx="1.8"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M12 8.4V15.6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M8.4 12H15.6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MetroIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="6"
        y="4.8"
        width="12"
        height="13.4"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M8.5 18.2L6.8 20"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M15.5 18.2L17.2 20"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function RestaurantIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7 5V12"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M9.8 5V12"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M7 8.4H9.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M8.4 12V19"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M15.4 5.2C16.88 6.77 17.1 9.24 16 11.2L14.8 13.3V19"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MallIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.2 9.2H17.8L17 18.6H7L6.2 9.2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9.2 9.2V7.8C9.2 6.25 10.45 5 12 5C13.55 5 14.8 6.25 14.8 7.8V9.2"
        stroke="currentColor"
        strokeWidth="1.8"
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

function HomeBandIcon() {
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

export default RentProjectDetails;
