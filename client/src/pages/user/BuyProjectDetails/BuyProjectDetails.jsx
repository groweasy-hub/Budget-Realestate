import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { faCalculator } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../../components/user/Navbar/Navbar";
import { siteNavbar } from "../../../data/user/HomePageContent";
import { getBuyProjectDetails } from "../../../data/user/BuyProjectDetailsData";
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
  CalculatorCard,
  CalculatorFieldName,
  CalculatorFields,
  CalculatorHeading,
  CalculatorHeadingIcon,
  CardHeading,
  CardText,
  CarouselButtons,
  CalculatorRow,
  CheckItem,
  CheckList,
  CircleButton,
  CloseButton,
  ConsultantAvatar,
  ConsultantHeader,
  ConsultantMeta,
  ConsultantName,
  CrumbLink,
  CrumbSeparator,
  DetailsGrid,
  DotDivider,
  EstimateCard,
  EstimateLabel,
  EstimateValue,
  GalleryShell,
  HeroGrid,
  InfoCard,
  InlineValue,
  Input,
  InputWrap,
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
  PriceBlock,
  PriceNote,
  RatingPill,
  RatingRow,
  ResponseCard,
  SecurityCard,
  SecurityContent,
  SecurityIconWrap,
  SecurityText,
  SecurityTitle,
  Select,
  SelectChevron,
  SimilarBody,
  SimilarCard,
  SimilarFav,
  SimilarGrid,
  SimilarHeader,
  SimilarImage,
  SimilarImageWrap,
  SimilarItem,
  SimilarLocation,
  SimilarPrice,
  SimilarSpecs,
  SimilarTitle,
  SidebarButton,
  SidebarCard,
  SidebarStack,
  SidebarTitle,
  SmallBadge,
  SpecCard,
  SpecIcon,
  SpecsGrid,
  SpecValue,
  SummaryPanel,
  ThumbnailCard,
  ThumbnailColumn,
  ThumbnailImage,
  ThumbnailLabel,
  TimeBadge,
  Title,
  TitleRow,
  ViewPhotosButton,
  // Mobile-specific
  MobileHero,
  MobileHeroImage,
  MobileTopBar,
  MobileBackButton,
  MobileTopActions,
  MobileIconButton,
  MobileHeroBadges,
  MobileHeroBadge,
  MobilePhotoCount,
  MobileThumbnailStrip,
  MobileThumbnailItem,
  MobileThumbnailImg,
  MobileThumbnailLbl,
  MobileMoreThumb,
  MobileContent,
  MobileBreadcrumb,
  MobileCrumbLink,
  MobileTitleRow,
  MobileTitle,
  MobileVerifiedIcon,
  MobileMetaRow,
  MobileMetaItem,
  MobileMetaSep,
  MobilePriceRow,
  MobilePriceValue,
  MobilePriceNote,
  MobileSpecsRow,
  MobileSpecItem,
  MobileSpecIcon,
  MobileSpecLabel,
  MobileSpecValue,
  MobileConsultantSection,
  MobileConsultantLeft,
  MobileConsultantAvatar,
  MobileConsultantInfo,
  MobileConsultantRole,
  MobileConsultantName,
  MobileConsultantExp,
  MobileConsultantRating,
  MobileConsultantButtons,
  MobileConsultantBtn,
  MobileSectionDivider,
  MobileAboutSection,
  MobileAboutHeader,
  MobileAboutIcon,
  MobileAboutTitle,
  MobileAboutBody,
  MobileAboutText,
  MobileAboutIllustration,
  MobileReadMore,
  MobileAmenitiesSection,
  MobileAmenitiesHeader,
  MobileAmenitiesTitle,
  MobileViewAll,
  MobileAmenitiesGrid,
  MobileAmenityItem,
  MobileAmenityIcon,
  MobileAmenityLabel,
  MobileDetailSpecsRow,
  MobileDetailSpecItem,
  MobileDetailSpecIcon,
  MobileDetailSpecLabel,
  MobileDetailSpecValue,
  MobileLocationSection,
  MobileLocationHeader,
  MobileLocationTitle,
  MobileLocationTimeline,
  MobileLocationNode,
  MobileLocationNodeIcon,
  MobileLocationDash,
  MobileLocationLabel,
  MobileLocationTime,
  MobileStickyBar,
  MobileStickyPrice,
  MobileStickyPriceValue,
  MobileStickyPriceNote,
  MobileStickyActions,
  MobileSaveBtnWrap,
  MobileSaveIcon,
  MobileSaveLabel,
  MobileBookBtn,
} from "./BuyProjectDetailsStyles";

function formatCurrency(value) {
  return new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 0,
  }).format(value);
}

function calculateMonthlyEmi(price, downPayment, interestRate, tenureYears) {
  const principal = Math.max(0, Number(price) - Number(downPayment));
  const monthlyRate = Number(interestRate) / 12 / 100;
  const months = Number(tenureYears) * 12;

  if (!principal || !monthlyRate || !months) {
    return 0;
  }

  const factor = (1 + monthlyRate) ** months;

  return Math.round((principal * monthlyRate * factor) / (factor - 1));
}

function parseNumberInput(value) {
  return Number(String(value).replace(/[^\d.]/g, "")) || 0;
}

function BuyProjectDetails() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = useMemo(() => getBuyProjectDetails(projectId), [projectId]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [showGallery, setShowGallery] = useState(false);
  const [saved, setSaved] = useState(false);
  const [compared, setCompared] = useState(false);
  const [shareFeedback, setShareFeedback] = useState("Share");
  const [similarStart, setSimilarStart] = useState(0);
  const [calculator, setCalculator] = useState(project.calculator);

  useEffect(() => {
    setActiveImageIndex(0);
    setShowGallery(false);
    setSaved(false);
    setCompared(false);
    setShareFeedback("Share");
    setSimilarStart(0);
    setCalculator(project.calculator);
  }, [project]);

  const activeImage = project.gallery[activeImageIndex];
  const visibleSimilar = Array.from({ length: 3 }, (_, index) => {
    return project.similarProperties[
      (similarStart + index) % project.similarProperties.length
    ];
  });
  const monthlyEmi = calculateMonthlyEmi(
    calculator.propertyPrice,
    calculator.downPayment,
    calculator.interestRate,
    calculator.tenureYears,
  );
  const downPaymentPercent = calculator.propertyPrice
    ? ((calculator.downPayment / calculator.propertyPrice) * 100).toFixed(2)
    : "0.00";

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
      `Price: ${project.price}`,
      `Project ID: ${project.projectCode}`,
      `Rating: ${project.rating} (${project.reviews})`,
      "",
      project.aboutDescription,
    ].join("\n");
    const href = `data:text/plain;charset=utf-8,${encodeURIComponent(brochureText)}`;
    const link = document.createElement("a");
    link.href = href;
    link.download = `${project.id}-brochure.txt`;
    link.click();
  };

  // ─── DESKTOP LAYOUT ─────────────────────────────────────────────────────────
  const DesktopLayout = (
    <>
      <NavWrap>
        <Navbar links={siteNavbar.links} ctaLabel={siteNavbar.ctaLabel} />
      </NavWrap>

      <PageInner>
        <HeroGrid>
          <GalleryShell>
            <MainMedia>
              <BadgeRow>
                {project.badges.map((item) => (
                  <Badge key={item}>
                    <BadgeIcon />
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

          <SummaryPanel>
            <BreadcrumbRow>
              <CrumbLink to="/buy">Buy</CrumbLink>
              <CrumbSeparator>&gt;</CrumbSeparator>
              <CrumbLink to="/buy">{project.category}</CrumbLink>
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
              <span>RERE No: {project.projectCode}</span>
            </RatingRow>

            <PriceBlock>
              <Price>{project.price}</Price>
              <PriceNote>
                <span>{project.detailsInfoLabel}</span>
                <InfoIcon />
              </PriceNote>
            </PriceBlock>

            <SpecsGrid>
              {project.specs.map((item) => (
                <SpecCard key={`${item.value}-${item.label}`}>
                  <SpecIcon>
                    <SpecTypeIcon label={item.label} />
                  </SpecIcon>
                  <SpecValue>{item.value}</SpecValue>
                </SpecCard>
              ))}
            </SpecsGrid>

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
          </SummaryPanel>

          <SidebarStack>
            <SidebarCard>
              <SidebarTitle>Property Consultant</SidebarTitle>

              <ConsultantHeader>
                <ConsultantAvatar>
                  <ConsultantAvatarArt />
                </ConsultantAvatar>

                <div>
                  <ConsultantName>{project.consultant.name}</ConsultantName>
                  <ConsultantMeta>
                    {project.consultant.experience}
                  </ConsultantMeta>
                  <ConsultantMeta>{project.consultant.role}</ConsultantMeta>
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
                      {project.consultant.rating} ({project.consultant.reviews})
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
                <span>{project.actionLabels.expert}</span>
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

        <DetailsGrid>
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
          </InfoCard>

          <InfoCard>
            <CardHeading>
              <LocationPinListIcon />
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

          <CalculatorCard>
            <CalculatorHeading>
              <CalculatorHeadingIcon>
                <CalculatorIcon />
              </CalculatorHeadingIcon>
              <span>{project.calculatorTitle}</span>
            </CalculatorHeading>

            <CalculatorFields>
              <CalculatorRow>
                <CalculatorFieldName>Property Price</CalculatorFieldName>
                <InputWrap>
                  <Input
                    type="number"
                    inputMode="numeric"
                    min="0"
                    value={calculator.propertyPrice || ""}
                    onChange={(event) =>
                      setCalculator((current) => ({
                        ...current,
                        propertyPrice: parseNumberInput(event.target.value),
                      }))
                    }
                  />
                </InputWrap>
              </CalculatorRow>

              <CalculatorRow>
                <CalculatorFieldName>Down Payment</CalculatorFieldName>
                <InputWrap>
                  <Input
                    type="number"
                    inputMode="numeric"
                    min="0"
                    value={calculator.downPayment || ""}
                    onChange={(event) =>
                      setCalculator((current) => ({
                        ...current,
                        downPayment: parseNumberInput(event.target.value),
                      }))
                    }
                  />
                  <InlineValue>{downPaymentPercent}%</InlineValue>
                </InputWrap>
              </CalculatorRow>

              <CalculatorRow>
                <CalculatorFieldName>
                  Interest Rate (% p.a.)
                </CalculatorFieldName>
                <InputWrap>
                  <Input
                    type="number"
                    inputMode="decimal"
                    min="0"
                    step="0.01"
                    value={calculator.interestRate || ""}
                    onChange={(event) =>
                      setCalculator((current) => ({
                        ...current,
                        interestRate:
                          parseFloat(
                            String(event.target.value).replace(/[^\d.]/g, ""),
                          ) || 0,
                      }))
                    }
                  />
                </InputWrap>
              </CalculatorRow>

              <CalculatorRow>
                <CalculatorFieldName>Loan Tenure</CalculatorFieldName>
                <InputWrap>
                  <Select
                    value={calculator.tenureYears}
                    onChange={(event) =>
                      setCalculator((current) => ({
                        ...current,
                        tenureYears: Number(event.target.value),
                      }))
                    }
                  >
                    {[10, 15, 20, 25, 30].map((year) => (
                      <option key={year} value={year}>
                        {year} Years
                      </option>
                    ))}
                  </Select>
                  <SelectChevron>
                    <ChevronDownIcon />
                  </SelectChevron>
                </InputWrap>
              </CalculatorRow>
            </CalculatorFields>

            <EstimateCard>
              <div>
                <EstimateLabel>Estimated Monthly EMI</EstimateLabel>
                <EstimateValue>{`Rs ${formatCurrency(monthlyEmi)}`}</EstimateValue>
              </div>
              {project.calculator.image ? (
                <img
                  src={project.calculator.image}
                  alt={project.calculator.imageAlt || "Calculator illustration"}
                  style={{
                    width: 74,
                    justifySelf: "end",
                    alignSelf: "end",
                    display: "block",
                  }}
                />
              ) : (
                <CalculatorCoinsIcon />
              )}
            </EstimateCard>
          </CalculatorCard>

          <SimilarCard>
            <SimilarHeader>
              <CardHeading>
                <BuildingIcon />
                <span>{project.similarTitle}</span>
              </CardHeading>

              <CarouselButtons>
                <CircleButton
                  type="button"
                  onClick={() =>
                    setSimilarStart(
                      (current) =>
                        (current - 1 + project.similarProperties.length) %
                        project.similarProperties.length,
                    )
                  }
                >
                  <ChevronLeftIcon />
                </CircleButton>
                <CircleButton
                  type="button"
                  onClick={() =>
                    setSimilarStart(
                      (current) =>
                        (current + 1) % project.similarProperties.length,
                    )
                  }
                >
                  <ChevronRightIcon />
                </CircleButton>
              </CarouselButtons>
            </SimilarHeader>

            <SimilarGrid>
              {visibleSimilar.map((item) => (
                <SimilarItem
                  key={`${project.id}-${item.id}`}
                  to={`/buy-project/${item.id}`}
                >
                  <SimilarImageWrap>
                    <SimilarImage src={item.image} alt={item.imageAlt} />
                    <SmallBadge>{item.badge}</SmallBadge>
                    <SimilarFav>
                      <HeartOutlineIcon />
                    </SimilarFav>
                  </SimilarImageWrap>
                  <SimilarBody>
                    <SimilarTitle>{item.title}</SimilarTitle>
                    <SimilarLocation>{item.location}</SimilarLocation>
                    <SimilarSpecs>{item.specs}</SimilarSpecs>
                    <SimilarPrice>{item.price}</SimilarPrice>
                  </SimilarBody>
                </SimilarItem>
              ))}
            </SimilarGrid>
          </SimilarCard>

          <InfoCard $tall>
            <CardHeading>
              <ShieldOutlineIcon />
              <span>{project.whyTitle}</span>
            </CardHeading>
            <CheckList>
              {project.whyPoints.map((item) => (
                <CheckItem key={item}>
                  <CheckCircleIcon />
                  <span>{item}</span>
                </CheckItem>
              ))}
            </CheckList>
          </InfoCard>

          <SecurityCard>
            <SecurityContent>
              <SecurityIconWrap>
                <LargeShieldIcon />
              </SecurityIconWrap>
              <div>
                <SecurityTitle>{project.securityCard.title}</SecurityTitle>
                <SecurityText>{project.securityCard.text}</SecurityText>
              </div>
            </SecurityContent>
          </SecurityCard>
        </DetailsGrid>

        <BottomBand>
          <BottomBandGrid>
            <BottomBandCopy>
              <BottomBandIcon>
                <CalendarIcon />
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
    </>
  );

  // ─── MOBILE LAYOUT ──────────────────────────────────────────────────────────
  const MobileLayout = (
    <MobileContent>
      {/* Hero Image */}
      <MobileHero>
        <MobileHeroImage src={activeImage.image} alt={activeImage.imageAlt} />

        <MobileTopBar>
          <MobileBackButton type="button" onClick={() => navigate(-1)}>
            <ChevronLeftIcon />
          </MobileBackButton>
          <MobileTopActions>
            <MobileIconButton type="button" onClick={() => setSaved((v) => !v)}>
              <HeartIcon $filled={saved} />
            </MobileIconButton>
            <MobileIconButton type="button" onClick={handleShare}>
              <ShareIcon />
            </MobileIconButton>
          </MobileTopActions>
        </MobileTopBar>

        <MobileHeroBadges>
          {project.badges.map((item) => (
            <MobileHeroBadge key={item}>
              <BadgeIcon />
              <span>{item}</span>
            </MobileHeroBadge>
          ))}
        </MobileHeroBadges>

        <MobilePhotoCount>
          {activeImageIndex + 1} / {project.gallery.length}
        </MobilePhotoCount>
      </MobileHero>

      {/* Thumbnail Strip */}
      <MobileThumbnailStrip>
        {project.gallery.slice(0, 4).map((item, index) => (
          <MobileThumbnailItem
            key={`mob-thumb-${index}`}
            type="button"
            $active={activeImageIndex === index}
            onClick={() => setActiveImageIndex(index)}
          >
            <MobileThumbnailImg src={item.image} alt={item.imageAlt} />
            <MobileThumbnailLbl>{item.label}</MobileThumbnailLbl>
          </MobileThumbnailItem>
        ))}
        {project.gallery.length > 4 && (
          <MobileMoreThumb type="button" onClick={() => setShowGallery(true)}>
            <span>+{project.gallery.length - 4}</span>
            <span>More</span>
          </MobileMoreThumb>
        )}
      </MobileThumbnailStrip>

      {/* Breadcrumb + Title + Meta */}
      <MobileBreadcrumb>
        <MobileCrumbLink to="/buy">Buy</MobileCrumbLink>
        <CrumbSeparator>&gt;</CrumbSeparator>
        <MobileCrumbLink to="/buy">{project.category}</MobileCrumbLink>
        <CrumbSeparator>&gt;</CrumbSeparator>
        <span>{project.locationTrail}</span>
      </MobileBreadcrumb>

      <MobileTitleRow>
        <MobileTitle>{project.title}</MobileTitle>
        <MobileVerifiedIcon>
          <CheckCircleIcon />
        </MobileVerifiedIcon>
      </MobileTitleRow>

      <MobileMetaRow>
        <MobileMetaItem>
          <LocationIcon />
          <span>{project.location}</span>
        </MobileMetaItem>
        <MobileMetaSep />
        <MobileMetaItem>
          <StarIcon />
          <span>
            {project.rating} ({project.reviews})
          </span>
        </MobileMetaItem>
        <MobileMetaSep />
        <span>Project ID: {project.projectCode}</span>
      </MobileMetaRow>

      {/* Price + Specs */}
      <MobilePriceRow>
        <div>
          <MobilePriceValue>{project.price}</MobilePriceValue>
          <MobilePriceNote>
            <span>{project.detailsInfoLabel}</span>
            <InfoIcon />
          </MobilePriceNote>
        </div>
        <MobileSpecsRow>
          {project.specs.map((item) => (
            <MobileSpecItem key={`${item.value}-${item.label}`}>
              <MobileSpecIcon>
                <SpecTypeIcon label={item.label} />
              </MobileSpecIcon>
              <div>
                <MobileSpecLabel>{item.label}</MobileSpecLabel>
                <MobileSpecValue>{item.value}</MobileSpecValue>
              </div>
            </MobileSpecItem>
          ))}
        </MobileSpecsRow>
      </MobilePriceRow>

      <MobileSectionDivider />

      {/* Consultant Section */}
      <MobileConsultantSection>
        <MobileConsultantLeft>
          <MobileConsultantAvatar>
            <ConsultantAvatarArt />
          </MobileConsultantAvatar>
          <MobileConsultantInfo>
            <MobileConsultantRole>Property Consultant</MobileConsultantRole>
            <MobileConsultantName>
              {project.consultant.name}
            </MobileConsultantName>
            <MobileConsultantExp>
              {project.consultant.experience}
            </MobileConsultantExp>
            <MobileConsultantRating>
              <StarIcon />
              <span>
                {project.consultant.rating} ({project.consultant.reviews})
              </span>
            </MobileConsultantRating>
          </MobileConsultantInfo>
        </MobileConsultantLeft>

        <MobileConsultantButtons>
          <MobileConsultantBtn $filled type="button">
            <CalendarIcon />
            <span>{project.actionLabels.siteVisit}</span>
          </MobileConsultantBtn>
          <MobileConsultantBtn type="button">
            <HeadsetIcon />
            <span>{project.actionLabels.expert}</span>
          </MobileConsultantBtn>
          <MobileConsultantBtn $whatsapp type="button">
            <WhatsAppIcon />
            <span>{project.actionLabels.whatsapp}</span>
          </MobileConsultantBtn>
        </MobileConsultantButtons>
      </MobileConsultantSection>

      <MobileSectionDivider />

      {/* About This Property */}
      <MobileAboutSection>
        <MobileAboutHeader>
          <MobileAboutIcon>
            <HomeOutlineIcon />
          </MobileAboutIcon>
          <MobileAboutTitle>{project.aboutTitle}</MobileAboutTitle>
        </MobileAboutHeader>
        <MobileAboutBody>
          <MobileAboutText>
            {project.aboutDescription}{" "}
            <MobileReadMore>Read More</MobileReadMore>
          </MobileAboutText>
          <MobileAboutIllustration>
            <PropertyIllustrationSvg />
          </MobileAboutIllustration>
        </MobileAboutBody>
      </MobileAboutSection>

      <MobileSectionDivider />

      {/* Amenities */}
      <MobileAmenitiesSection>
        <MobileAmenitiesHeader>
          <MobileAmenitiesTitle>Amenities</MobileAmenitiesTitle>
          <MobileViewAll>
            View All <ChevronRightIcon />
          </MobileViewAll>
        </MobileAmenitiesHeader>
        <MobileAmenitiesGrid>
          {project.amenities.map((item) => (
            <MobileAmenityItem key={item.key}>
              <MobileAmenityIcon>
                <AmenitySvg type={item.key} />
              </MobileAmenityIcon>
              <MobileAmenityLabel>{item.label}</MobileAmenityLabel>
            </MobileAmenityItem>
          ))}
        </MobileAmenitiesGrid>
      </MobileAmenitiesSection>

      <MobileSectionDivider />

      {/* Detail Specs (Possession, Furnishing, Parking, Facing) */}
      <MobileDetailSpecsRow>
        {project.specs.map((item) => (
          <MobileDetailSpecItem key={`detail-${item.label}`}>
            <MobileDetailSpecIcon>
              <SpecTypeIcon label={item.label} />
            </MobileDetailSpecIcon>
            <MobileDetailSpecLabel>{item.label}</MobileDetailSpecLabel>
            <MobileDetailSpecValue>{item.value}</MobileDetailSpecValue>
          </MobileDetailSpecItem>
        ))}
      </MobileDetailSpecsRow>

      <MobileSectionDivider />

      {/* Location Advantages */}
      <MobileLocationSection>
        <MobileLocationHeader>
          <MobileLocationTitle>Location Advantages</MobileLocationTitle>
          <MobileViewAll>
            View All <ChevronRightIcon />
          </MobileViewAll>
        </MobileLocationHeader>
        <MobileLocationTimeline>
          {project.locationAdvantages.map((item, index) => (
            <MobileLocationNode key={item.place}>
              <MobileLocationNodeIcon>
                <LocationPinListIcon />
              </MobileLocationNodeIcon>
              {index < project.locationAdvantages.length - 1 && (
                <MobileLocationDash />
              )}
              <MobileLocationLabel>{item.place}</MobileLocationLabel>
              <MobileLocationTime>{item.time}</MobileLocationTime>
            </MobileLocationNode>
          ))}
        </MobileLocationTimeline>
      </MobileLocationSection>

      {/* Sticky Bottom Bar */}
      <MobileStickyBar>
        <MobileStickyPrice>
          <MobileStickyPriceValue>{project.price}</MobileStickyPriceValue>
          <MobileStickyPriceNote>
            All Inclusive Price <InfoIcon />
          </MobileStickyPriceNote>
        </MobileStickyPrice>

        <MobileStickyActions>
          <MobileSaveBtnWrap type="button" onClick={() => setSaved((v) => !v)}>
            <MobileSaveIcon $filled={saved}>
              <BookmarkIcon />
            </MobileSaveIcon>
            <MobileSaveLabel>Save</MobileSaveLabel>
          </MobileSaveBtnWrap>

          <MobileBookBtn type="button">
            <CalendarIcon />
            <span>Book a Site Visit</span>
          </MobileBookBtn>
        </MobileStickyActions>
      </MobileStickyBar>
    </MobileContent>
  );

  return (
    <PageShell>
      {/* Desktop/Tablet nav + layout */}
      <DesktopOnlyWrapper>{DesktopLayout}</DesktopOnlyWrapper>

      {/* Mobile layout */}
      <MobileOnlyWrapper>{MobileLayout}</MobileOnlyWrapper>

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

// Visibility wrappers

const DesktopOnlyWrapper = styled.div`
  @media (max-width: 767px) {
    display: none;
  }
`;

const MobileOnlyWrapper = styled.div`
  display: none;
  @media (max-width: 767px) {
    display: block;
  }
`;

// ─── PROPERTY ILLUSTRATION SVG ────────────────────────────────────────────────
function PropertyIllustrationSvg() {
  return (
    <svg viewBox="0 0 180 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Ground */}
      <rect x="10" y="118" width="160" height="4" rx="2" fill="#C8E6C9" />
      {/* Trees left */}
      <rect x="18" y="88" width="6" height="30" rx="2" fill="#6D9E70" />
      <ellipse cx="21" cy="82" rx="12" ry="14" fill="#4CAF50" />
      <ellipse cx="21" cy="76" rx="9" ry="11" fill="#66BB6A" />
      {/* Trees right */}
      <rect x="148" y="92" width="5" height="26" rx="2" fill="#6D9E70" />
      <ellipse cx="150" cy="86" rx="10" ry="12" fill="#4CAF50" />
      <ellipse cx="150" cy="81" rx="7" ry="9" fill="#66BB6A" />
      {/* House body */}
      <rect
        x="42"
        y="70"
        width="96"
        height="50"
        rx="3"
        fill="#F5F5F5"
        stroke="#1B5E20"
        strokeWidth="2"
      />
      {/* Roof */}
      <path
        d="M36 72L90 38L144 72"
        stroke="#1B5E20"
        strokeWidth="2.5"
        strokeLinejoin="round"
        fill="#E8F5E9"
      />
      {/* Door */}
      <rect
        x="80"
        y="94"
        width="20"
        height="26"
        rx="2"
        fill="white"
        stroke="#2E7D32"
        strokeWidth="1.5"
      />
      <circle cx="97" cy="108" r="1.5" fill="#2E7D32" />
      {/* Windows */}
      <rect
        x="50"
        y="80"
        width="18"
        height="14"
        rx="2"
        fill="white"
        stroke="#2E7D32"
        strokeWidth="1.5"
      />
      <line x1="59" y1="80" x2="59" y2="94" stroke="#2E7D32" strokeWidth="1" />
      <line x1="50" y1="87" x2="68" y2="87" stroke="#2E7D32" strokeWidth="1" />
      <rect
        x="112"
        y="80"
        width="18"
        height="14"
        rx="2"
        fill="white"
        stroke="#2E7D32"
        strokeWidth="1.5"
      />
      <line
        x1="121"
        y1="80"
        x2="121"
        y2="94"
        stroke="#2E7D32"
        strokeWidth="1"
      />
      <line
        x1="112"
        y1="87"
        x2="130"
        y2="87"
        stroke="#2E7D32"
        strokeWidth="1"
      />
      {/* Chimney */}
      <rect
        x="106"
        y="44"
        width="10"
        height="18"
        rx="1"
        fill="#F5F5F5"
        stroke="#1B5E20"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function BadgeIcon() {
  return <StarOutlineIcon />;
}

function AmenitySvg({ type }) {
  switch (type) {
    case "club":
      return <ClubHouseIcon />;
    case "gym":
      return <GymIcon />;
    case "play":
      return <PlayAreaIcon />;
    case "track":
      return <JoggingIcon />;
    case "security":
      return <SecurityIcon />;
    case "backup":
      return <PowerIcon />;
    case "ev":
      return <EvIcon />;
    default:
      return <PoolIcon />;
  }
}

function SpecTypeIcon({ label }) {
  const normalized = String(label).toLowerCase();

  if (normalized.includes("bhk")) {
    return <BedIcon />;
  }

  if (normalized.includes("sqft")) {
    return <AreaIcon />;
  }

  if (normalized.includes("type") || normalized.includes("space")) {
    return <PropertyTypeIcon />;
  }

  return <CalendarTagIcon />;
}

function BookmarkIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.5 4.5H14.5V16.5L10 13.5L5.5 16.5V4.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
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

function CalendarTagIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="3.8"
        y="4.5"
        width="12.4"
        height="11.8"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M6.8 3V6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M13.2 3V6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path d="M3.8 7.3H16.2" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M7.2 11H12.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
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

function InfoIcon() {
  return (
    <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="9" cy="9" r="6.2" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M9 8.1V11.4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="9" cy="5.9" r="0.9" fill="currentColor" />
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
      <rect width="78" height="78" rx="16" fill="url(#consultantBg)" />
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
          id="consultantBg"
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

function PoolIcon() {
  return (
    <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4 17C5.2 15.67 6.4 15 7.6 15C8.8 15 10 15.67 11.2 17C12.4 18.33 13.6 19 14.8 19C16 19 17.2 18.33 18.4 17C19.6 15.67 20.8 15 22 15C23.2 15 24.4 15.67 25.6 17"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <path
        d="M4 22C5.2 20.67 6.4 20 7.6 20C8.8 20 10 20.67 11.2 22C12.4 23.33 13.6 24 14.8 24C16 24 17.2 23.33 18.4 22C19.6 20.67 20.8 20 22 20C23.2 20 24.4 20.67 25.6 22"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <path
        d="M9 14V7.8C9 6.81 9.81 6 10.8 6H17.2C18.19 6 19 6.81 19 7.8V14"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ClubHouseIcon() {
  return (
    <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5 13L14 6L23 13V22H17.3V16.8H10.7V22H5V13Z"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinejoin="round"
      />
      <path
        d="M10 10H10.01"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M18 10H18.01"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M14 6V3.8"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
    </svg>
  );
}

function GymIcon() {
  return (
    <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 12V16"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <path
        d="M20 12V16"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <path
        d="M10 10V18"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <path
        d="M18 10V18"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <path
        d="M10 14H18"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <path
        d="M5 12V16"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <path
        d="M23 12V16"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PlayAreaIcon() {
  return (
    <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 22V13.5L14 8L20 13.5V22"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinejoin="round"
      />
      <path
        d="M11 22V18H17V22"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinejoin="round"
      />
      <path
        d="M8 10L14 6L20 10"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
    </svg>
  );
}

function JoggingIcon() {
  return (
    <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle
        cx="17.5"
        cy="6.5"
        r="2.4"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M11.5 12.5L15 10L18.5 11.2L20.2 14.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 14.2L10 18L7 17.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5 14.5L18 19.5L21.8 21"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SecurityIcon() {
  return (
    <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14 5L20.2 7.6V12.4C20.2 16.58 17.54 20.26 14 21.8C10.46 20.26 7.8 16.58 7.8 12.4V7.6L14 5Z"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinejoin="round"
      />
      <path
        d="M11.5 13L13.4 14.9L16.9 11.4"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PowerIcon() {
  return (
    <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="9.2"
        y="4.8"
        width="9.6"
        height="18.4"
        rx="1.8"
        stroke="currentColor"
        strokeWidth="1.9"
      />
      <path
        d="M14 8V14.4L11.8 14.4L15.8 22L15.8 15.6L18 15.6"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function EvIcon() {
  return (
    <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 6H18V22H10V6Z"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 11H15.5"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <path
        d="M14 14L12 17H14V20L16 17H14V14Z"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinejoin="round"
      />
      <path
        d="M18 11H20.2C21.19 11 22 11.81 22 12.8V15.2"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LocationPinListIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 6.4C9.55 6.4 10.8 7.65 10.8 9.2C10.8 10.98 8 13.8 8 13.8C8 13.8 5.2 10.98 5.2 9.2C5.2 7.65 6.45 6.4 8 6.4Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="8" cy="9.2" r="0.9" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M13.5 8.2H18.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M13.5 12.2H18.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M13.5 16.2H18.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
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
      <circle cx="6" cy="6" r="4.5" />
    </svg>
  );
}

function CalculatorIcon() {
  return <FontAwesomeIcon icon={faCalculator} />;
}

function CalculatorCoinsIcon() {
  return (
    <svg viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="12" y="10" width="30" height="42" rx="4" fill="#58645F" />
      <rect x="16" y="15" width="22" height="9" rx="2" fill="#EFF6F0" />
      <rect x="18" y="28" width="6" height="6" rx="1.5" fill="#EFF6F0" />
      <rect x="27" y="28" width="6" height="6" rx="1.5" fill="#EFF6F0" />
      <rect x="18" y="37" width="6" height="6" rx="1.5" fill="#EFF6F0" />
      <rect x="27" y="37" width="6" height="6" rx="1.5" fill="#EFF6F0" />
      <ellipse cx="55" cy="48" rx="12" ry="10" fill="#F0C13A" />
      <ellipse cx="50" cy="54" rx="10" ry="8" fill="#D9A51D" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="5.5"
        y="4.8"
        width="13"
        height="14.4"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M8.5 8.2H8.51"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
      />
      <path
        d="M12 8.2H12.01"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
      />
      <path
        d="M15.5 8.2H15.51"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
      />
      <path
        d="M8.5 12H8.51"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
      />
      <path
        d="M12 12H12.01"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
      />
      <path
        d="M10.8 19.2V15.6H13.2V19.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronLeftIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.8 3.7L5.6 8L9.8 12.3"
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
        d="M6.2 3.7L10.4 8L6.2 12.3"
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
        d="M4 6.2L8 10L12 6.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HeartOutlineIcon() {
  return (
    <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9 14.4C12.02 11.97 13.53 10.19 13.53 8.27C13.53 6.93 12.48 5.88 11.14 5.88C10.25 5.88 9.52 6.3 9 7.12C8.48 6.3 7.75 5.88 6.86 5.88C5.52 5.88 4.47 6.93 4.47 8.27C4.47 10.19 5.98 11.97 9 14.4Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldOutlineIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 4L18 6.4V11.2C18 15.15 15.43 18.63 12 20.1C8.57 18.63 6 15.15 6 11.2V6.4L12 4Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 11.3L11.2 13L14.8 9.4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LargeShieldIcon() {
  return (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M60 10L98 25V56.5C98 85.2 80.3 110.1 60 118C39.7 110.1 22 85.2 22 56.5V25L60 10Z"
        fill="url(#shieldFillLarge)"
        stroke="#0F6B34"
        strokeWidth="4"
      />
      <path
        d="M42 58.5L53.5 70L78 45.5"
        stroke="#FFFFFF"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="shieldFillLarge"
          x1="60"
          y1="10"
          x2="60"
          y2="118"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29A254" />
          <stop offset="1" stopColor="#0C6A33" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.5 4.5L13.5 13.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M13.5 4.5L4.5 13.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default BuyProjectDetails;

