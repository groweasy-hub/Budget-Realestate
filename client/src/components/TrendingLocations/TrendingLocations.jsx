import React, { useEffect, useState } from "react";
import {
  BottomArt,
  Card,
  CardImage,
  CardImageFallback,
  CardVisual,
  CarouselTrack,
  CarouselViewport,
  Controls,
  ControlArrow,
  ControlDot,
  ControlDots,
  Description,
  Header,
  Kicker,
  KickerLine,
  KickerRow,
  ImageOverlay,
  Inner,
  LabelAccent,
  MetricIconWrap,
  MetricLabel,
  MetricRow,
  MetricValue,
  NumberBadge,
  ProgressBar,
  ProgressFill,
  Section,
  SectionTitle,
  Title,
} from "./TrendingLocationsStyles";

function TrendingLocations({
  title = "Trending Locations",
  description = "Track demand, growth, and average pricing in Hyderabad's strongest real estate corridors.",
  locations = [],
}) {
  const [startIndex, setStartIndex] = useState(locations.length || 0);
  const [visibleCount, setVisibleCount] = useState(getVisibleCount());
  const [isAnimating, setIsAnimating] = useState(true);
  const [isAutoScrollPaused, setIsAutoScrollPaused] = useState(false);
  const isMobileAutoScroll = visibleCount === 1;

  useEffect(() => {
    function handleResize() {
      setVisibleCount(getVisibleCount());
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setIsAnimating(false);
    setStartIndex(locations.length || 0);

    const frame = window.requestAnimationFrame(() => {
      setIsAnimating(true);
    });

    return () => window.cancelAnimationFrame(frame);
  }, [locations.length, visibleCount]);

  useEffect(() => {
    if (!isMobileAutoScroll || locations.length <= 1 || isAutoScrollPaused) {
      return undefined;
    }

    const autoScroll = window.setInterval(() => {
      setStartIndex((current) => current + 1);
    }, 2400);

    return () => window.clearInterval(autoScroll);
  }, [isAutoScrollPaused, isMobileAutoScroll, locations.length]);

  const safeVisibleCount = Math.max(
    1,
    Math.min(visibleCount, locations.length || 1),
  );
  const loopedLocations = [...locations, ...locations, ...locations];
  const activeIndex = locations.length
    ? ((startIndex % locations.length) + locations.length) % locations.length
    : 0;

  function handlePrevious() {
    if (!locations.length) {
      return;
    }

    setStartIndex((current) => current - 1);
  }

  function handleNext() {
    if (!locations.length) {
      return;
    }

    setStartIndex((current) => current + 1);
  }

  function pauseAutoScroll() {
    if (isMobileAutoScroll) {
      setIsAutoScrollPaused(true);
    }
  }

  function resumeAutoScroll() {
    if (isMobileAutoScroll) {
      setIsAutoScrollPaused(false);
    }
  }

  return (
    <Section id="trending-locations">
      <Inner>
        <Header>
          <KickerRow>
            <KickerLine />
            <Kicker>Trending Locations</Kicker>
            <KickerLine />
          </KickerRow>

          <SectionTitle>{title}</SectionTitle>
          <Description>{description}</Description>
        </Header>

        <CarouselViewport
          onMouseEnter={pauseAutoScroll}
          onMouseLeave={resumeAutoScroll}
          onTouchStart={pauseAutoScroll}
          onTouchEnd={resumeAutoScroll}
          onTouchCancel={resumeAutoScroll}
          onPointerDown={pauseAutoScroll}
          onPointerUp={resumeAutoScroll}
          onPointerCancel={resumeAutoScroll}
        >
          <CarouselTrack
            style={{
              "--visible-count": safeVisibleCount,
              "--offset": startIndex,
            }}
            $isAnimating={isAnimating}
            onTransitionEnd={() =>
              normalizeTrackPosition({
                currentIndex: startIndex,
                itemCount: locations.length,
                setCurrentIndex: setStartIndex,
                setIsAnimating,
              })
            }
          >
            {loopedLocations.map((location, index) => (
              <LocationCard
                key={`${location.id || location.name}-${index}`}
                index={index % (locations.length || 1)}
                location={location}
              />
            ))}
          </CarouselTrack>
        </CarouselViewport>

        <Controls>
          <ControlArrow
            type="button"
            aria-label="Previous locations"
            onClick={handlePrevious}
          >
            <ArrowLeftIcon />
          </ControlArrow>

          <ControlDots>
            {locations.map((location, index) => (
              <ControlDot
                key={`dot-${location.id || location.name}`}
                $active={index === activeIndex}
              />
            ))}
          </ControlDots>

          <ControlArrow
            type="button"
            aria-label="Next locations"
            onClick={handleNext}
          >
            <ArrowRightIcon />
          </ControlArrow>
        </Controls>
      </Inner>
    </Section>
  );
}

function getVisibleCount() {
  if (typeof window === "undefined") {
    return 5;
  }

  if (window.innerWidth <= 640) {
    return 1;
  }

  if (window.innerWidth <= 960) {
    return 2;
  }

  if (window.innerWidth <= 1320) {
    return 3;
  }

  return 5;
}

function normalizeTrackPosition({
  currentIndex,
  itemCount,
  setCurrentIndex,
  setIsAnimating,
}) {
  if (!itemCount) {
    return;
  }

  if (currentIndex >= itemCount * 2) {
    setIsAnimating(false);
    setCurrentIndex(currentIndex - itemCount);
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => setIsAnimating(true));
    });
  }

  if (currentIndex < itemCount) {
    setIsAnimating(false);
    setCurrentIndex(currentIndex + itemCount);
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => setIsAnimating(true));
    });
  }
}

function LocationCard({ location, index }) {
  const [hasImageError, setHasImageError] = useState(false);

  useEffect(() => {
    setHasImageError(false);
  }, [location.image]);

  const showImage = location.image && !hasImageError;
  const sequence =
    location.sequence || `${String(index + 1).padStart(2, "0")}..`;
  const demandWidth = Math.max(0, Math.min(location.demandValue || 0, 100));

  return (
    <Card>
      <CardVisual>
        <NumberBadge>{sequence}</NumberBadge>
        {showImage ? (
          <CardImage
            src={location.image}
            alt={location.imageAlt || location.name}
            loading="lazy"
            decoding="async"
            onError={() => setHasImageError(true)}
          />
        ) : (
          <CardImageFallback $accent={location.accent}>
            <FallbackScene />
          </CardImageFallback>
        )}
        <ImageOverlay />
        <Title>{location.name}</Title>
        <LabelAccent />
      </CardVisual>

      <MetricRow>
        <MetricIconWrap>
          <GrowthIcon />
        </MetricIconWrap>
        <MetricLabel>Growth</MetricLabel>
        <MetricValue>{location.growth}</MetricValue>
      </MetricRow>

      <MetricRow>
        <MetricIconWrap>
          <RupeeIcon />
        </MetricIconWrap>
        <MetricLabel>Average Price</MetricLabel>
        <MetricValue>{location.averagePrice}</MetricValue>
      </MetricRow>

      <MetricRow $demand>
        <MetricIconWrap>
          <DemandIcon />
        </MetricIconWrap>
        <MetricLabel>Demand Score</MetricLabel>
        <MetricValue>{location.demand}</MetricValue>
      </MetricRow>

      <ProgressBar>
        <ProgressFill style={{ width: `${demandWidth}%` }} />
      </ProgressBar>

      <BottomArt>
        <IllustrationSwitch type={location.illustration} />
      </BottomArt>
    </Card>
  );
}

function IllustrationSwitch({ type }) {
  switch (type) {
    case "temple":
      return <TempleArt />;
    case "riverfront":
      return <RiverfrontArt />;
    case "heritage":
      return <HeritageArt />;
    case "district":
      return <DistrictArt />;
    default:
      return <BridgeArt />;
  }
}

function GrowthIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4 14L8.1 9.9L11 12.8L16 7.8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.2 7.8H16V10.6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RupeeIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 5.5H13"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M6 8.6H13"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M6.3 5.5C8.8 5.5 10 6.7 10 8.6C10 10.5 8.8 11.7 6.3 11.7H5.8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.8 11.7L12.8 18"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function DemandIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.8 15.8H16.2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M5.3 14.6V10.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M8.7 14.6V8.6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M12.1 14.6V6.6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M15.5 14.6V9.4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M4.8 6.8C6.4 5.3 8.2 4.6 10.4 4.6C12.6 4.6 14.3 5.3 15.9 6.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ArrowLeftIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15 10H5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M9.2 5.5L4.8 10L9.2 14.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5 10H15"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M10.8 5.5L15.2 10L10.8 14.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FallbackScene() {
  return (
    <svg
      viewBox="0 0 420 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="420" height="300" fill="url(#fallbackSky)" />
      <rect y="214" width="420" height="86" fill="#132B24" />
      <path
        d="M0 232C66 210 126 204 210 212C284 219 340 242 420 226V300H0V232Z"
        fill="#203D32"
      />
      <rect x="52" y="98" width="56" height="116" rx="6" fill="#768AA4" />
      <rect x="118" y="86" width="72" height="128" rx="6" fill="#658099" />
      <rect x="198" y="74" width="82" height="140" rx="6" fill="#4D667D" />
      <rect x="292" y="92" width="68" height="122" rx="6" fill="#72889F" />
      <defs>
        <linearGradient
          id="fallbackSky"
          x1="210"
          y1="0"
          x2="210"
          y2="300"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D8E6F7" />
          <stop offset="0.6" stopColor="#F6E8D1" />
          <stop offset="1" stopColor="#1E2D34" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function BridgeArt() {
  return (
    <svg viewBox="0 0 320 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 78H314" stroke="currentColor" strokeWidth="2" />
      <path
        d="M50 78L96 48L144 78"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M90 78V38" stroke="currentColor" strokeWidth="2" />
      <path d="M88 40L116 78" stroke="currentColor" strokeWidth="2" />
      <path d="M92 40L66 78" stroke="currentColor" strokeWidth="2" />
      {Array.from({ length: 9 }).map((_, index) => (
        <rect
          key={index}
          x={172 + index * 16}
          y={34 + (index % 3) * 8}
          width="10"
          height={44 - (index % 3) * 6}
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      ))}
      <rect
        x="18"
        y="54"
        width="18"
        height="24"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <rect
        x="270"
        y="44"
        width="24"
        height="34"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function TempleArt() {
  return (
    <svg viewBox="0 0 320 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 78H310" stroke="currentColor" strokeWidth="2" />
      <path
        d="M92 78V44L118 22L144 44V78"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M176 78V36L202 16L228 36V78"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M202 16V8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M46 78V54L64 42L82 54V78"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {Array.from({ length: 6 }).map((_, index) => (
        <circle
          key={index}
          cx={258 + index * 8}
          cy={70 - (index % 2) * 4}
          r="5"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      ))}
    </svg>
  );
}

function RiverfrontArt() {
  return (
    <svg viewBox="0 0 320 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 78H306" stroke="currentColor" strokeWidth="2" />
      <path
        d="M34 78C72 54 108 34 160 18C212 34 248 54 286 78"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M160 18V78" stroke="currentColor" strokeWidth="2" />
      <path d="M132 78L160 26L188 78" stroke="currentColor" strokeWidth="2" />
      {Array.from({ length: 7 }).map((_, index) => (
        <rect
          key={index}
          x={26 + index * 16}
          y={44 + (index % 3) * 6}
          width="10"
          height={34 - (index % 3) * 5}
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      ))}
      {Array.from({ length: 7 }).map((_, index) => (
        <rect
          key={`b-${index}`}
          x={220 + index * 12}
          y={36 + (index % 2) * 8}
          width="8"
          height={42 - (index % 2) * 8}
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      ))}
    </svg>
  );
}

function HeritageArt() {
  return (
    <svg viewBox="0 0 320 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 78H312" stroke="currentColor" strokeWidth="2" />
      <path d="M96 78V48H224V78" stroke="currentColor" strokeWidth="2" />
      <path
        d="M108 48C108 34 120 22 136 22C152 22 164 34 164 48"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M156 48C156 34 168 22 184 22C200 22 212 34 212 48"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M136 22V14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M184 22V12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <rect
        x="34"
        y="54"
        width="22"
        height="24"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <rect
        x="264"
        y="50"
        width="26"
        height="28"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function DistrictArt() {
  return (
    <svg viewBox="0 0 320 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 78H310" stroke="currentColor" strokeWidth="2" />
      <path
        d="M80 78V44L110 20L140 44V78"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M180 78V36L216 14L252 36V78"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M206 14L188 78" stroke="currentColor" strokeWidth="2" />
      <path d="M226 14L244 78" stroke="currentColor" strokeWidth="2" />
      {Array.from({ length: 4 }).map((_, index) => (
        <rect
          key={index}
          x={28 + index * 12}
          y={58 + (index % 2) * 6}
          width="8"
          height={20 - (index % 2) * 4}
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      ))}
      {Array.from({ length: 5 }).map((_, index) => (
        <rect
          key={`r-${index}`}
          x={270 + index * 8}
          y={54 + (index % 2) * 5}
          width="6"
          height={24 - (index % 2) * 5}
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      ))}
    </svg>
  );
}

export default TrendingLocations;
