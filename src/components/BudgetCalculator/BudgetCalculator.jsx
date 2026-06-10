import { useEffect, useMemo, useState } from "react";
import {
  AccentLeaves,
  Banner,
  BannerIconWrap,
  CalculatorShell,
  FieldCard,
  FieldHeader,
  FieldIconWrap,
  FieldLabel,
  GaugeArt,
  GaugeCard,
  GaugeImage,
  GaugeImageWrap,
  GaugeText,
  Header,
  HouseIllustration,
  IllustrationImage,
  InputColumn,
  Inner,
  Kicker,
  KickerIconBox,
  KickerLine,
  KickerRow,
  MobileHeaderIllustration,
  NoteRow,
  RangeFill,
  RangeInput,
  RangeSlider,
  RangeThumb,
  RangeTrack,
  ResultMeta,
  ResultMetaCard,
  ResultMetaDescription,
  ResultMetaIcon,
  ResultMetaLabel,
  ResultMetaValue,
  ResultPanel,
  Section,
  SelectBox,
  SummaryValue,
  TextValueBox,
  Title,
} from "./BudgetCalculatorStyles";

const TENURE_OPTIONS = [10, 15, 20, 25, 30];
const INTEREST_OPTIONS = [6.5, 7, 7.5, 8, 8.4, 8.5, 9, 9.5, 10];
const CURRENCY_SYMBOL = "\u20B9";

function BudgetCalculator({
  title = "Budget Calculator",
  description = "A fast affordability snapshot using a typical buyer profile.",
  summary = {
    propertyPrice: "Rs 75,00,000",
    downPayment: "Rs 15,00,000",
    interestRate: "8.4%",
    tenure: "20 Years",
    emi: "Rs 51,750 / month",
    totalCost: "Rs 1.24Cr",
    affordability: "Smart Fit",
  },
}) {
  const initialValues = useMemo(() => {
    const propertyPrice = clamp(
      parseCurrency(summary.propertyPrice),
      1500000,
      50000000,
    );
    const downPayment = clamp(
      parseCurrency(summary.downPayment),
      300000,
      Math.max(propertyPrice * 0.8, 300000),
    );
    const interestRate = clamp(parsePercent(summary.interestRate), 0.1, 30);
    const tenureYears = clamp(parseYears(summary.tenure), 5, 30);

    return {
      propertyPrice,
      downPayment: Math.min(downPayment, propertyPrice - 100000),
      interestRate,
      tenureYears,
    };
  }, [summary]);

  const [propertyPrice, setPropertyPrice] = useState(
    initialValues.propertyPrice,
  );
  const [downPayment, setDownPayment] = useState(initialValues.downPayment);
  const [interestRate, setInterestRate] = useState(initialValues.interestRate);
  const [tenureYears, setTenureYears] = useState(initialValues.tenureYears);

  useEffect(() => {
    setPropertyPrice(initialValues.propertyPrice);
    setDownPayment(initialValues.downPayment);
    setInterestRate(initialValues.interestRate);
    setTenureYears(initialValues.tenureYears);
  }, [initialValues]);

  const result = useMemo(() => {
    const loanAmount = Math.max(propertyPrice - downPayment, 0);
    const months = tenureYears * 12;
    const monthlyRate = interestRate / 12 / 100;
    const emi =
      monthlyRate === 0
        ? loanAmount / Math.max(months, 1)
        : (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
          (Math.pow(1 + monthlyRate, months) - 1);
    const totalCost = emi * months;
    const score = getAffordabilityScore({
      propertyPrice,
      downPayment,
      interestRate,
      tenureYears,
      emi,
    });

    return {
      emi,
      totalCost,
      score,
      loanAmount,
      gaugeProgress: clamp((emi / 62000) * 100, 18, 92),
    };
  }, [downPayment, interestRate, propertyPrice, tenureYears]);

  const interestOptions = useMemo(() => {
    return Array.from(new Set([...INTEREST_OPTIONS, interestRate])).sort(
      (left, right) => left - right,
    );
  }, [interestRate]);
  const houseImageSrc = resolveAssetPath(summary.houseImage);
  const calculatorImageSrc = resolveAssetPath(summary.calculatorImage);

  const propertyProgress = getVisualProgress(propertyPrice, 1500000, 9000000);
  const downPaymentProgress = getVisualProgress(downPayment, 300000, 1800000);
  const interestProgress = getVisualProgress(interestRate, 6, 9);
  const tenureProgress = getVisualProgress(tenureYears, 8, 22);

  return (
    <Section id="budget-calculator">
      <AccentLeaves />
      <Inner>
        <Header>
          <KickerRow>
            <KickerIconBox>
              <CalculatorIcon />
            </KickerIconBox>
            <KickerLine />
            <Kicker>Budget Calculator</Kicker>
            <KickerLine />
          </KickerRow>
          <Title>{title}</Title>
          <SummaryValue>{description}</SummaryValue>
          <MobileHeaderIllustration>
            {houseImageSrc ? (
              <IllustrationImage
                src={houseImageSrc}
                alt={summary.houseImageAlt || "Budget calculator house"}
              />
            ) : null}
          </MobileHeaderIllustration>
        </Header>

        <CalculatorShell>
          <InputColumn>
            <FieldCard>
              <FieldHeader>
                <FieldIconWrap>
                  <HomeIcon />
                </FieldIconWrap>
                <FieldLabel>Property Price</FieldLabel>
                <TextValueBox aria-label="Property Price">
                  {displayCurrency(propertyPrice)}
                </TextValueBox>
              </FieldHeader>
              <RangeSlider>
                <RangeTrack aria-hidden="true">
                  <RangeFill style={{ width: `${propertyProgress}%` }} />
                  <RangeThumb style={{ left: `${propertyProgress}%` }} />
                </RangeTrack>
                <RangeInput
                  type="range"
                  min={1500000}
                  max={50000000}
                  step={50000}
                  value={propertyPrice}
                  onChange={(event) => {
                    const nextPrice = Number(event.target.value);
                    setPropertyPrice(nextPrice);
                    setDownPayment((current) =>
                      clamp(
                        current,
                        300000,
                        Math.max(nextPrice - 100000, 300000),
                      ),
                    );
                  }}
                />
              </RangeSlider>
            </FieldCard>

            <FieldCard>
              <FieldHeader>
                <FieldIconWrap>
                  <WalletIcon />
                </FieldIconWrap>
                <FieldLabel>Down Payment</FieldLabel>
                <TextValueBox aria-label="Down Payment">
                  {displayCurrency(
                    Math.min(downPayment, propertyPrice - 100000),
                  )}
                </TextValueBox>
              </FieldHeader>
              <RangeSlider>
                <RangeTrack aria-hidden="true">
                  <RangeFill style={{ width: `${downPaymentProgress}%` }} />
                  <RangeThumb style={{ left: `${downPaymentProgress}%` }} />
                </RangeTrack>
                <RangeInput
                  type="range"
                  min={300000}
                  max={Math.max(propertyPrice - 100000, 300000)}
                  step={25000}
                  value={Math.min(downPayment, propertyPrice - 100000)}
                  onChange={(event) =>
                    setDownPayment(Number(event.target.value))
                  }
                />
              </RangeSlider>
            </FieldCard>

            <FieldCard>
              <FieldHeader>
                <FieldIconWrap>
                  <PercentIcon />
                </FieldIconWrap>
                <FieldLabel>Interest Rate</FieldLabel>
                <SelectBox
                  value={interestRate}
                  onChange={(event) =>
                    setInterestRate(
                      clamp(Number(event.target.value) || 0.1, 0.1, 30),
                    )
                  }
                  aria-label="Interest Rate"
                >
                  {interestOptions.map((rate) => (
                    <option key={rate} value={rate}>
                      {formatPercentValue(rate)}
                    </option>
                  ))}
                </SelectBox>
              </FieldHeader>
              <RangeSlider>
                <RangeTrack aria-hidden="true">
                  <RangeFill style={{ width: `${interestProgress}%` }} />
                  <RangeThumb style={{ left: `${interestProgress}%` }} />
                </RangeTrack>
                <RangeInput
                  type="range"
                  min={0.1}
                  max={30}
                  step={0.1}
                  value={interestRate}
                  onChange={(event) =>
                    setInterestRate(Number(event.target.value))
                  }
                />
              </RangeSlider>
            </FieldCard>

            <FieldCard>
              <FieldHeader>
                <FieldIconWrap>
                  <CalendarIcon />
                </FieldIconWrap>
                <FieldLabel>Tenure</FieldLabel>
                <SelectBox
                  value={tenureYears}
                  onChange={(event) =>
                    setTenureYears(Number(event.target.value))
                  }
                >
                  {TENURE_OPTIONS.map((years) => (
                    <option key={years} value={years}>
                      {years} Years
                    </option>
                  ))}
                </SelectBox>
              </FieldHeader>
              <RangeSlider>
                <RangeTrack aria-hidden="true">
                  <RangeFill style={{ width: `${tenureProgress}%` }} />
                  <RangeThumb style={{ left: `${tenureProgress}%` }} />
                </RangeTrack>
                <RangeInput
                  type="range"
                  min={5}
                  max={30}
                  step={1}
                  value={tenureYears}
                  onChange={(event) =>
                    setTenureYears(Number(event.target.value))
                  }
                />
              </RangeSlider>
            </FieldCard>

            <NoteRow>
              <InfoIcon />
              <span>
                This is an estimate. Actual values may vary based on lender
                policies.
              </span>
            </NoteRow>
          </InputColumn>

          <ResultPanel>
            <HouseIllustration>
              {houseImageSrc ? (
                <IllustrationImage
                  src={houseImageSrc}
                  alt={summary.houseImageAlt || "Budget calculator house"}
                />
              ) : null}
            </HouseIllustration>

            <GaugeCard>
              <GaugeArt $progress={result.gaugeProgress}>
                <GaugeSvg progress={result.gaugeProgress} />
              </GaugeArt>
              <GaugeText>
                <span>Estimated EMI</span>
                <strong>{displayCurrency(Math.round(result.emi))}</strong>
                <small>/ month</small>
              </GaugeText>
              <GaugeImageWrap>
                {calculatorImageSrc ? (
                  <GaugeImage
                    src={calculatorImageSrc}
                    alt={
                      summary.calculatorImageAlt || "Budget calculator visual"
                    }
                  />
                ) : null}
              </GaugeImageWrap>
            </GaugeCard>

            <ResultMeta>
              <ResultMetaCard>
                <ResultMetaIcon>
                  <MoneyBagIcon />
                </ResultMetaIcon>
                <div>
                  <ResultMetaLabel>Total Cost</ResultMetaLabel>
                  <ResultMetaValue>
                    {displayCompactCurrency(result.totalCost)}
                  </ResultMetaValue>
                  <ResultMetaDescription $compact>
                    Includes principal, interest & charges
                  </ResultMetaDescription>
                </div>
              </ResultMetaCard>

              <ResultMetaCard>
                <ResultMetaIcon>
                  <MedalIcon />
                </ResultMetaIcon>
                <div>
                  <ResultMetaLabel>Affordability Score</ResultMetaLabel>
                  <ResultMetaValue>{result.score.label}</ResultMetaValue>
                  <ResultMetaDescription $score>
                    {result.score.description}
                  </ResultMetaDescription>
                </div>
              </ResultMetaCard>
            </ResultMeta>

            <Banner>
              <BannerIconWrap>
                <StarCircleIcon />
              </BannerIconWrap>
              <span>{result.score.banner}</span>
            </Banner>
          </ResultPanel>
        </CalculatorShell>
      </Inner>
    </Section>
  );
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function getVisualProgress(value, min, max) {
  return clamp(((value - min) / Math.max(max - min, 1)) * 100, 0, 100);
}

function resolveAssetPath(path) {
  if (!path) {
    return "";
  }

  if (/^(https?:|data:|blob:)/.test(path)) {
    return path;
  }

  if (path.startsWith("/")) {
    return `${process.env.PUBLIC_URL || ""}${path}`;
  }

  return path;
}

function parseCurrency(value = "") {
  const text = String(value);
  const match = text.match(/(\d[\d,]*\.?\d*)/);
  if (!match) {
    return 7500000;
  }

  const amount = Number(match[1].replace(/,/g, ""));
  const lower = text.toLowerCase();

  if (lower.includes("cr")) {
    return amount * 10000000;
  }

  if (lower.includes("lac") || lower.includes("lakh") || lower.includes("l")) {
    return amount * 100000;
  }

  if (lower.includes("k")) {
    return amount * 1000;
  }

  return amount;
}

function parsePercent(value = "") {
  const match = String(value).match(/(\d+(\.\d+)?)/);
  return match ? Number(match[1]) : 8.4;
}

function parseYears(value = "") {
  const match = String(value).match(/(\d+)/);
  return match ? Number(match[1]) : 20;
}

function formatCurrency(value) {
  return `₹ ${new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 0,
  }).format(value)}`;
}

function formatCompactCurrency(value) {
  if (value >= 10000000) {
    return `₹ ${(value / 10000000).toFixed(2).replace(/\.00$/, "")} Cr`;
  }

  if (value >= 100000) {
    return `₹ ${(value / 100000).toFixed(2).replace(/\.00$/, "")} L`;
  }

  return formatCurrency(value);
}

function displayCurrency(value) {
  return formatCurrency(value).replace("â‚¹", CURRENCY_SYMBOL);
}

function displayCompactCurrency(value) {
  return formatCompactCurrency(value).replace("â‚¹", CURRENCY_SYMBOL);
}

function formatPercentValue(value) {
  return `${Number(value).toFixed(1).replace(/\.0$/, "")}%`;
}

function getAffordabilityScore({
  propertyPrice,
  downPayment,
  interestRate,
  tenureYears,
  emi,
}) {
  const downRatio = downPayment / Math.max(propertyPrice, 1);
  const strain = emi / Math.max(propertyPrice / 100, 1);

  if (downRatio >= 0.2 && interestRate <= 8.8 && strain <= 0.78) {
    return {
      label: "Smart Fit",
      description: "Well within your affordability range",
      banner: "Great! This property fits well within your budget.",
    };
  }

  if (downRatio >= 0.12 && interestRate <= 9.4 && tenureYears <= 25) {
    return {
      label: "Balanced",
      description: "Comfortable with moderate EMI planning",
      banner: "This property looks manageable with a balanced payment plan.",
    };
  }

  return {
    label: "Needs Review",
    description: "A tighter fit for your current budget",
    banner:
      "Consider a higher down payment or longer tenure for a smoother EMI.",
  };
}

function GaugeSvg({ progress }) {
  const radius = 148;
  const circumference = Math.PI * radius;
  const offset = circumference - (circumference * progress) / 100;
  const clampedProgress = clamp(progress, 0, 100);
  const angle = Math.PI * (1 - clampedProgress / 100);
  const markerX = 180 + radius * Math.cos(angle);
  const markerY = 190 - radius * Math.sin(angle);

  return (
    <svg viewBox="0 0 360 220" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M32 190C32 108.262 98.262 42 180 42C261.738 42 328 108.262 328 190"
        stroke="rgba(54, 128, 73, 0.16)"
        strokeWidth="18"
        strokeLinecap="round"
      />
      <path
        d="M32 190C32 108.262 98.262 42 180 42C261.738 42 328 108.262 328 190"
        stroke="url(#gaugeGradient)"
        strokeWidth="18"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        pathLength={circumference}
      />
      <circle
        cx={markerX}
        cy={markerY}
        r="12"
        fill="#FFFFFF"
        stroke="#2a8a53"
        strokeWidth="8"
      />
      <circle cx={markerX} cy={markerY} r="4.5" fill="#2a8a53" />
      <defs>
        <linearGradient
          id="gaugeGradient"
          x1="32"
          y1="190"
          x2="328"
          y2="190"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1f7c49" />
          <stop offset="1" stopColor="#afe4b9" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.8 11.1L12 5.2L19.2 11.1V19H14.8V14.4H9.2V19H4.8V11.1Z"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CalculatorIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="5"
        y="3.8"
        width="14"
        height="16.4"
        rx="2.4"
        stroke="currentColor"
        strokeWidth="1.9"
      />
      <rect
        x="8.2"
        y="7"
        width="7.6"
        height="2.8"
        rx="0.8"
        fill="currentColor"
      />
      <path
        d="M8.2 12.6H9.7M12 12.6H13.5M15.8 12.6H15.9M8.2 15.8H9.7M12 15.8H13.5M15.8 15.8H15.9"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
    </svg>
  );
}

function WalletIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.5 8.4C4.5 6.97 5.67 5.8 7.1 5.8H16.2C17.63 5.8 18.8 6.97 18.8 8.4V17.2C18.8 18.63 17.63 19.8 16.2 19.8H7.1C5.67 19.8 4.5 18.63 4.5 17.2V8.4Z"
        stroke="currentColor"
        strokeWidth="1.9"
      />
      <path
        d="M15.4 12.8H18.8"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <circle cx="14.2" cy="12.8" r="1" fill="currentColor" />
    </svg>
  );
}

function PercentIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="2.6" stroke="currentColor" strokeWidth="1.9" />
      <circle cx="16" cy="16" r="2.6" stroke="currentColor" strokeWidth="1.9" />
      <path
        d="M18 6L6 18"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="4.8"
        y="6.4"
        width="14.4"
        height="12.8"
        rx="2.2"
        stroke="currentColor"
        strokeWidth="1.9"
      />
      <path
        d="M8.2 4.8V8"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <path
        d="M15.8 4.8V8"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <path d="M4.8 10.1H19.2" stroke="currentColor" strokeWidth="1.9" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M10 9.2V13.2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <circle cx="10" cy="6.3" r="1" fill="currentColor" />
    </svg>
  );
}

function MoneyBagIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.3 5.4H14.7L13.4 7.4H10.6L9.3 5.4Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M8 9.1C6.3 10.4 5.2 12.5 5.2 14.9C5.2 18.6 8.2 21.6 11.9 21.6C15.6 21.6 18.6 18.6 18.6 14.9C18.6 12.5 17.4 10.3 15.7 9"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M12 11.2V17.1"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M10.1 13H12.7C13.6 13 14.3 13.6 14.3 14.4C14.3 15.2 13.6 15.8 12.7 15.8H9.7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MedalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.4 4.8H15.6L14.1 9.1H9.9L8.4 4.8Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="14.1"
        r="4.7"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M12 11.9L12.7 13.4H14.3L13 14.4L13.5 15.9L12 15L10.5 15.9L11 14.4L9.7 13.4H11.3L12 11.9Z"
        fill="currentColor"
      />
    </svg>
  );
}

function StarCircleIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M10 5.8L11.2 8.1L13.8 8.5L11.9 10.3L12.4 12.8L10 11.6L7.6 12.8L8.1 10.3L6.2 8.5L8.8 8.1L10 5.8Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default BudgetCalculator;
