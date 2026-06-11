import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./FeaturedPropertiesStyles";

const Section = S.Section || "section";
const Inner = S.Inner || "div";
const Header = S.Header || "div";
const KickerRow = S.KickerRow || "div";
const KickerLine = S.KickerLine || "span";
const Kicker = S.Kicker || "span";
const Heading = S.Heading || "h2";
const Paragraph = S.Paragraph || "p";
const CardsRow = S.CardsRow || "div";
const CardShell = S.CardShell || "article";
const CardSurface = S.CardSurface || "div";
const FigureBadge = S.FigureBadge || "div";
const FigureBadgeText = S.FigureBadgeText || "span";
const FigureShell = S.FigureShell || "div";
const FigureImage = S.FigureImage || "img";
const CardBody = S.CardBody || "div";
const CardTop = S.CardTop || "div";
const CardLabel = S.CardLabel || "div";
const TitleText = S.TitleText || "h3";
const ReviewsPill = S.ReviewsPill || "div";
const LocationRow = S.LocationRow || "div";
const LocationIcon = S.LocationIcon || "span";
const LocationText = S.LocationText || "span";
const PriceWrap = S.PriceWrap || "div";
const PriceCard = S.PriceCard || "div";
const PriceText = S.PriceText || "div";
const CardStatus = S.CardStatus || "div";
const CardMeta = S.CardMeta || "div";
const CardMetaItem = S.CardMetaItem || "div";
const CardMetaLabel = S.CardMetaLabel || "div";
const CardMetaValue = S.CardMetaValue || "div";
const LinkText = S.LinkText || Link;
const LinkArrow = S.LinkArrow || "span";
const VisualFallback = S.VisualFallback || "div";

function FeaturedProperties({
  title = "High-Conviction homes and investment Ready assets.",
  description = "A tighter premium collection with verified positioning, pricing context, and detail-first discovery.",
  properties = [],
}) {
  return (
    <Section>
      <Inner>
        <Header>
          <KickerRow>
            <KickerLine />
            <Kicker>Featured Properties</Kicker>
            <KickerLine />
          </KickerRow>
          <Heading>{title}</Heading>
          <Paragraph>{description}</Paragraph>
        </Header>

        <CardsRow>
          {properties.map((property, index) => (
            <ProjectCard
              key={property.id || property.title}
              property={property}
              index={index}
            />
          ))}
        </CardsRow>
      </Inner>
    </Section>
  );
}

function ProjectCard({ property, index }) {
  const navigate = useNavigate();
  const layout = property.layout || "card";
  const surface = index % 2 === 0 ? "light" : "dark";
  const detailPath = getFeaturedPropertyPath(property);

  const handleCardOpen = () => {
    navigate(detailPath);
  };

  const handleCardKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleCardOpen();
    }
  };

  return (
    <CardShell
      role="link"
      tabIndex={0}
      aria-label={`Open details for ${property.title}`}
      onClick={handleCardOpen}
      onKeyDown={handleCardKeyDown}
    >
      <CardSurface $surface={surface}>
        <ProjectFigure property={property} layout={layout} surface={surface} />

        <CardBody $surface={surface}>
          <CardTop>
            <div>
              <CardLabel $surface={surface}>{property.category}</CardLabel>
              <TitleText $surface={surface}>{property.title}</TitleText>
            </div>

            <PriceCard $surface={surface}>
              <PriceText $surface={surface}>{property.price}</PriceText>
              <CardStatus $surface={surface}>
                {property.availability}
              </CardStatus>
            </PriceCard>
          </CardTop>

          <LocationRow>
            <LocationIcon $surface={surface}>
              <PinIcon />
            </LocationIcon>
            <LocationText $surface={surface}>{property.location}</LocationText>
          </LocationRow>

            <CardMeta $surface={surface}>
              <CardMetaItem $surface={surface}>
                <PropertyTypeIcon />
                <div>
                  <CardMetaLabel $surface={surface}>Type</CardMetaLabel>
                  <CardMetaValue $surface={surface}>
                    {property.category}
                  </CardMetaValue>
                </div>
              </CardMetaItem>
              <CardMetaItem $surface={surface}>
                <BedIcon />
                <div>
                  <CardMetaLabel $surface={surface}>Details</CardMetaLabel>
                  <CardMetaValue $surface={surface}>
                    {property.details}
                  </CardMetaValue>
                </div>
              </CardMetaItem>
              <CardMetaItem $surface={surface}>
                <AreaIcon />
                <div>
                  <CardMetaLabel $surface={surface}>Area</CardMetaLabel>
                  <CardMetaValue $surface={surface}>
                    {property.area}
                  </CardMetaValue>
                </div>
            </CardMetaItem>
          </CardMeta>

          <PriceWrap>
            <ReviewsPill $surface={surface}>
              <BadgeIcon kind={property.badgeIcon} />
              <span>{property.rating}</span>
            </ReviewsPill>

            <LinkText as="div" $surface={surface}>
              <span>{property.ctaLabel || "View Project"}</span>
              <LinkArrow $surface={surface}>
                <ArrowIcon />
              </LinkArrow>
            </LinkText>
          </PriceWrap>
        </CardBody>
      </CardSurface>
    </CardShell>
  );
}

function getFeaturedPropertyPath(property) {
  const category = String(property.category || "").toLowerCase();

  if (category.includes("auction")) {
    return `/auction-project/${property.id}`;
  }

  return `/property/${property.id}`;
}

function ProjectFigure({ property, layout, surface }) {
  const [hasImageError, setHasImageError] = useState(false);

  useEffect(() => {
    setHasImageError(false);
  }, [property.image]);

  const showImage = property.image && !hasImageError;

  return (
    <FigureShell
      $layout={layout}
      $tone={property.tone || property.accent}
      $surface={surface}
    >
      <FigureBadge $surface={surface}>
        <BadgeIcon kind={property.badgeIcon} />
        <FigureBadgeText>{property.badge}</FigureBadgeText>
      </FigureBadge>

      {showImage ? (
        <FigureImage
          src={property.image}
          alt={property.imageAlt || property.title}
          loading="lazy"
          decoding="async"
          onError={() => setHasImageError(true)}
        />
      ) : (
        <VisualFallback $tone={property.tone || property.accent} />
      )}
    </FigureShell>
  );
}

function BadgeIcon({ kind }) {
  switch (kind) {
    case "rocket":
      return <RocketIcon />;
    case "chart":
      return <ChartIcon />;
    case "leaf":
      return <LeafIcon />;
    default:
      return <StarIcon />;
  }
}

function PinIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 17.5C13 14.09 14.5 11.48 14.5 9.66C14.5 7.18 12.61 5.25 10 5.25C7.39 5.25 5.5 7.18 5.5 9.66C5.5 11.48 7 14.09 10 17.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle
        cx="10"
        cy="9.6"
        r="1.5"
        stroke="currentColor"
        strokeWidth="1.6"
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

function RocketIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.8 3.8C10.2 4.2 8.1 5.6 6.8 7.9L5.9 9.5L8.6 12.2L10.2 11.3C12.5 10 13.9 7.9 14.3 5.3L14.5 3.7L12.8 3.8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M7.8 12.2L5.2 14.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M9 14C8.7 15.3 7.7 16.3 6.4 16.6L5.2 16.9L5.5 15.7C5.8 14.4 6.8 13.4 8.1 13.1"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="11.4" cy="6.6" r="1.1" fill="currentColor" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.5 15.5H16.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M5.2 13.2L8.3 9.6L10.8 11.4L14.8 6.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.8 6.8H14.8V8.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.9 4.3C10.5 4.3 7 6.8 5.7 10.5C5 12.4 5.1 14.4 6 15.7C7.3 16.6 9.2 16.6 11.2 15.9C14.9 14.6 17.4 11 17.4 6.6V4.3H14.9Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M6.7 15L13.8 7.9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.5 10H15.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M10.8 5.3L15.5 10L10.8 14.7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PropertyTypeIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.5 9.2L10 4L16.5 9.2V16H12.4V11.8H7.6V16H3.5V9.2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BedIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.5 11.2H16.5V15.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 15.5V8.8H8.2C9.3 8.8 10.2 9.7 10.2 10.8V11.2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M10.2 9.3H13.8C15 9.3 16 10.3 16 11.5V11.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 15.5V16.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M16.5 15.5V16.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function AreaIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4 4H8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M4 4V8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M16 4H12"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M16 4V8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M4 16H8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M4 16V12"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M16 16H12"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M16 16V12"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default FeaturedProperties;
