import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const toneMap = {
  forest: css`
    background:
      radial-gradient(
        circle at 18% 18%,
        rgba(120, 196, 110, 0.34),
        transparent 32%
      ),
      linear-gradient(
        135deg,
        rgba(6, 28, 22, 0.96) 0%,
        rgba(22, 69, 50, 0.92) 52%,
        rgba(12, 28, 21, 0.96) 100%
      );
  `,
  sunrise: css`
    background:
      radial-gradient(
        circle at 20% 12%,
        rgba(255, 207, 146, 0.42),
        transparent 34%
      ),
      linear-gradient(
        135deg,
        rgba(34, 48, 75, 0.92) 0%,
        rgba(135, 92, 63, 0.78) 36%,
        rgba(18, 31, 33, 0.94) 100%
      );
  `,
  harbor: css`
    background:
      radial-gradient(
        circle at 82% 12%,
        rgba(96, 160, 255, 0.28),
        transparent 30%
      ),
      linear-gradient(
        135deg,
        rgba(7, 25, 50, 0.96) 0%,
        rgba(24, 55, 89, 0.86) 48%,
        rgba(10, 20, 32, 0.96) 100%
      );
  `,
  olive: css`
    background:
      radial-gradient(
        circle at 76% 16%,
        rgba(255, 233, 133, 0.28),
        transparent 36%
      ),
      linear-gradient(
        135deg,
        rgba(34, 61, 24, 0.94) 0%,
        rgba(92, 118, 44, 0.86) 50%,
        rgba(16, 32, 16, 0.96) 100%
      );
  `,
  meadow: css`
    background:
      radial-gradient(
        circle at 18% 18%,
        rgba(198, 255, 165, 0.3),
        transparent 34%
      ),
      linear-gradient(
        135deg,
        rgba(20, 73, 54, 0.96) 0%,
        rgba(99, 158, 82, 0.82) 50%,
        rgba(11, 29, 20, 0.94) 100%
      );
  `,
  sky: css`
    background:
      radial-gradient(
        circle at 82% 16%,
        rgba(159, 212, 255, 0.28),
        transparent 32%
      ),
      linear-gradient(
        135deg,
        rgba(32, 57, 80, 0.96) 0%,
        rgba(96, 127, 158, 0.82) 48%,
        rgba(16, 27, 36, 0.96) 100%
      );
  `,
};

export const Section = styled.section`
  position: relative;
  padding: 92px 0px 42px;
`;

export const Inner = styled.div`
  max-width: 1580px;
  margin: 0 auto;
  padding: 0 28px;

  @media (max-width: 760px) {
    padding: 0 10px;
  }
`;

export const Header = styled.div`
  max-width: 1020px;
  margin: 0 auto 34px;
  text-align: center;
`;

export const KickerRow = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 18px;
`;

export const KickerLine = styled.span`
  width: 46px;
  height: 2px;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.secondary};
`;

export const Kicker = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 0.03em;
`;

export const Heading = styled.h2`
  margin: 0;
  color: #0f1918;
  font-family: "Poppins", sans-serif;
  font-size: clamp(2rem, 4vw, 4rem);
  font-weight: 400;
  line-height: 1.04;
  letter-spacing: -0.055em;
`;

export const Paragraph = styled.p`
  max-width: 880px;
  margin: 20px auto 0;
  color: #536471;
  font-size: clamp(1rem, 1.7vw, 1.18rem);
  line-height: 1.65;
`;

export const CardsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 1180px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    gap: 14px;
  }
`;

export const CardShell = styled.article`
  min-width: 0;
  height: 100%;
`;

export const CardSurface = styled.div`
  min-height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  border: 1px solid rgba(31, 61, 49, 0.08);
  background: ${({ $surface }) =>
    $surface === "dark"
      ? "linear-gradient(180deg, #0b2d23 0%, #0d382c 100%)"
      : "linear-gradient(180deg, rgba(255, 255, 255, 0.98) 0%, rgba(247, 250, 245, 0.99) 100%)"};
  box-shadow:
    0 24px 50px rgba(40, 63, 49, 0.09),
    inset 0 1px 0 rgba(255, 255, 255, 0.9);

  @media (max-width: 760px) {
    flex-direction: ${({ $buyCard }) => ($buyCard ? "column" : "row")};
    align-items: stretch;
    padding: 0;
    border-radius: 18px;
  }
`;

export const FigureShell = styled.div`
  position: relative;
  overflow: hidden;
  isolation: isolate;
  margin: 12px;
  border-radius: 18px 18px 24px 24px;
  ${({ $tone }) => toneMap[$tone] || toneMap.forest}
  aspect-ratio: 1.1 / 0.72;

  @media (max-width: 760px) {
    width: ${({ $buyCard }) => ($buyCard ? "auto" : "38%")};
    min-width: ${({ $buyCard }) => ($buyCard ? "0" : "126px")};
    margin: ${({ $buyCard }) =>
      $buyCard ? "12px 12px 0" : "10px 0 10px 10px"};
    height: ${({ $buyCard }) => ($buyCard ? "208px" : "196px")};
    border-radius: 14px;
    aspect-ratio: auto;
  }
`;

export const FigureBadge = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 32px;
  padding: 0 11px;
  border-radius: 999px;
  background: ${({ $surface }) =>
    $surface === "dark" ? "rgba(25, 108, 67, 0.9)" : "rgba(28, 109, 67, 0.92)"};
  border: 1px solid rgba(255, 255, 255, 0.14);
  backdrop-filter: blur(8px);
  color: #f1faf2;

  svg {
    width: 14px;
    height: 14px;
    display: block;
  }

  @media (max-width: 760px) {
    top: 10px;
    left: 10px;
    min-height: 28px;
    padding: 0 10px;
    gap: 6px;
    border-radius: 999px;

    svg {
      width: 12px;
      height: 12px;
    }
  }
`;

export const FigureBadgeText = styled.span`
  font-size: 0.74rem;
  font-weight: 700;
  text-transform: uppercase;

  @media (max-width: 760px) {
    font-size: 0.62rem;
    letter-spacing: 0.02em;
  }
`;

export const FigureImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const VisualFallback = styled.div`
  position: absolute;
  inset: 0;
  ${({ $tone }) => toneMap[$tone] || toneMap.forest}
`;

export const CardBody = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 2px 14px 14px;

  @media (max-width: 760px) {
    padding: ${({ $buyCard }) =>
      $buyCard ? "12px 12px 14px" : "12px 12px 10px"};
  }
`;

export const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: flex-start;

  > div {
    min-width: 0;
  }

  @media (max-width: 760px) {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: ${({ $buyCard }) => ($buyCard ? "10px" : "8px")};
  }
`;

export const CardLabel = styled.div`
  color: ${({ $surface }) => ($surface === "dark" ? "#7fd6a3" : "#2c7b47")};
  font-size: 0.74rem;
  font-weight: 700;
  line-height: 1.2;

  @media (max-width: 760px) {
    display: block;
    font-size: 0.78rem;
    font-weight: ${({ $buyCard }) => ($buyCard ? "700" : "500")};
  }
`;

export const TitleText = styled.h3`
  margin: 8px 0 0;
  color: ${({ $surface }) => ($surface === "dark" ? "#f8fbf8" : "#15201d")};
  font-family: "Poppins", sans-serif;
  font-size: clamp(1.1rem, 1.7vw, 1.2rem);
  line-height: 1.08;
  letter-spacing: -0.035em;

  @media (max-width: 760px) {
    margin-top: 6px;
    font-size: ${({ $buyCard }) => ($buyCard ? "0.96rem" : "0.92rem")};
    line-height: 1.12;
    letter-spacing: -0.03em;
  }
`;

export const ReviewsPill = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-height: 34px;
  padding: 0 10px;
  border-radius: 999px;
  background: ${({ $surface }) =>
    $surface === "dark" ? "rgba(255, 210, 84, 0.12)" : "transparent"};
  color: ${({ $surface }) => ($surface === "dark" ? "#ffd254" : "#1f5d35")};
  font-size: 0.84rem;
  font-weight: 700;
  flex: 0 0 auto;

  svg {
    width: 14px;
    height: 14px;
    display: block;
  }

  @media (max-width: 760px) {
    min-height: 0;
    padding: 0;
    gap: 6px;
    background: ${({ $surface }) =>
      $surface === "dark" ? "rgba(255, 210, 84, 0.12)" : "transparent"};
    color: ${({ $surface }) => ($surface === "dark" ? "#ffd254" : "#22302b")};
    font-size: 0.88rem;
  }
`;

export const LocationRow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 12px;

  @media (max-width: 760px) {
    margin-top: 8px;
    gap: 5px;
  }
`;

export const LocationIcon = styled.span`
  width: 18px;
  height: 18px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({ $surface }) =>
    $surface === "dark" ? "rgba(233, 243, 237, 0.88)" : "#6b746f"};

  svg {
    width: 18px;
    height: 18px;
    display: block;
  }

  @media (max-width: 760px) {
    width: 14px;
    height: 14px;

    svg {
      width: 14px;
      height: 14px;
    }
  }
`;

export const LocationText = styled.span`
  color: ${({ $surface }) =>
    $surface === "dark" ? "rgba(233, 243, 237, 0.88)" : "#5b6a6f"};
  font-size: 0.9rem;
  line-height: 1.45;

  @media (max-width: 760px) {
    font-size: ${({ $buyCard }) => ($buyCard ? "0.82rem" : "0.7rem")};
    line-height: 1.3;
  }
`;

export const PriceWrap = styled.div`
  margin-top: auto;
  padding-top: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  border-top: 1px solid rgba(35, 74, 58, 0.1);

  @media (max-width: 760px) {
    margin-top: ${({ $buyCard }) => ($buyCard ? "0" : "10px")};
    padding-top: ${({ $buyCard }) => ($buyCard ? "0" : "10px")};
    display: ${({ $buyCard }) => ($buyCard ? "none" : "grid")};
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: 10px;
    border-top: 0;
  }
`;

export const PriceCard = styled.div`
  min-width: 102px;
  padding: 12px 14px;
  border-radius: 16px;
  background: ${({ $surface }) =>
    $surface === "dark"
      ? "linear-gradient(180deg, rgba(44, 110, 76, 0.42) 0%, rgba(28, 86, 55, 0.62) 100%)"
      : "linear-gradient(180deg, #f4fbf5 0%, #eaf5ea 100%)"};

  @media (max-width: 760px) {
    display: flex;
    min-width: ${({ $buyCard }) => ($buyCard ? "108px" : "auto")};
    padding: ${({ $buyCard }) => ($buyCard ? "10px 12px" : "0 5px 5px")};
    border-radius: ${({ $buyCard }) => ($buyCard ? "14px" : "14px")};
    background: ${({ $buyCard, $surface }) =>
      !$buyCard
        ? $surface === "dark"
          ? "linear-gradient(180deg, rgba(44, 110, 76, 0.42) 0%, rgba(28, 86, 55, 0.62) 100%)"
          : "linear-gradient(180deg, #f4fbf5 0%, #eaf5ea 100%)"
        : $surface === "dark"
          ? "linear-gradient(180deg, rgba(44, 110, 76, 0.42) 0%, rgba(28, 86, 55, 0.62) 100%)"
          : "linear-gradient(180deg, #f4fbf5 0%, #eaf5ea 100%)"};
    flex-direction: column;
    align-items: ${({ $buyCard }) => ($buyCard ? "flex-start" : "flex-end")};
  }
`;

export const PriceText = styled.div`
  color: ${({ $surface }) => ($surface === "dark" ? "#ffffff" : "#2f8d54")};
  font-family: "Poppins", sans-serif;
  font-size: clamp(0.875rem, 1.5vw, 1rem);
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.05em;

  @media (max-width: 760px) {
    display: inline-flex;
    align-items: center;
    min-height: ${({ $buyCard }) => ($buyCard ? "0" : "36px")};
    padding: ${({ $buyCard }) => ($buyCard ? "0" : "0 12px")};
    border-radius: ${({ $buyCard }) => ($buyCard ? "0" : "12px")};
    background: ${({ $buyCard, $surface }) =>
      $buyCard
        ? "transparent"
        : $surface === "dark"
          ? "transparent"
          : "linear-gradient(180deg, #f4fbf5 0%, #eaf5ea 100%)"};
    font-size: ${({ $buyCard }) => ($buyCard ? "0.82rem" : "0.9rem")};
    line-height: ${({ $buyCard }) => ($buyCard ? "1.2" : "1")};
    text-align: ${({ $buyCard }) => ($buyCard ? "left" : "right")};
  }
`;

export const CardStatus = styled.div`
  display: inline-flex;
  align-items: center;
  margin-top: 8px;
  color: ${({ $surface }) =>
    $surface === "dark" ? "rgba(238, 245, 240, 0.92)" : "#5a7462"};
  font-size: 0.64rem;
  font-weight: 600;

  &::before {
    content: "";
    width: 7px;
    height: 7px;
    margin-right: 6px;
    border-radius: 50%;
    background: currentColor;
    opacity: 0.9;
  }

  @media (max-width: 760px) {
    display: inline-flex;
    margin-top: ${({ $buyCard }) => ($buyCard ? "6px" : "0px")};
    justify-content: ${({ $buyCard }) =>
      $buyCard ? "flex-start" : "flex-end"};
    font-size: ${({ $buyCard }) => ($buyCard ? "0.66rem" : "0.6rem")};
    white-space: ${({ $buyCard }) => ($buyCard ? "normal" : "nowrap")};
  }
`;

export const CardMeta = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 8px;
  margin-top: 14px;
  padding: 12px 10px;
  border-radius: 16px;
  background: ${({ $surface }) =>
    $surface === "dark"
      ? "linear-gradient(180deg, rgba(27, 84, 57, 0.78) 0%, rgba(20, 66, 45, 0.86) 100%)"
      : "linear-gradient(180deg, #f6faf6 0%, #eef5ee 100%)"};

  @media (max-width: 540px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 760px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0;
    margin-top: ${({ $buyCard }) => ($buyCard ? "14px" : "12px")};
    padding: ${({ $buyCard }) => ($buyCard ? "10px 4px 2px" : "5px 4px")};
    border-radius: ${({ $buyCard }) => ($buyCard ? "16px" : "14px")};
    background: ${({ $buyCard, $surface }) =>
      $surface === "dark"
        ? "linear-gradient(180deg, rgba(27, 84, 57, 0.78) 0%, rgba(20, 66, 45, 0.86) 100%)"
        : $buyCard
          ? "linear-gradient(180deg, #f6faf6 0%, #eef5ee 100%)"
          : "linear-gradient(180deg, #f8fbf6 0%, #eff5eb 100%)"};
  }
`;

export const CardMetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
  padding: 6px 4px;
  border-right: 1px solid
    ${({ $surface }) =>
      $surface === "dark"
        ? "rgba(222, 238, 229, 0.12)"
        : "rgba(35, 74, 58, 0.08)"};

  &:last-child {
    border-right: 0;
  }

  svg {
    width: 18px;
    height: 18px;
    color: ${({ $surface }) => ($surface === "dark" ? "#b7ebcb" : "#2e7b46")};
    flex: 0 0 auto;
  }

  @media (max-width: 760px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 6px;
    padding: ${({ $buyCard }) => ($buyCard ? "0 8px" : "0 4px")};
    text-align: center;
    border-right: 1px solid
      ${({ $surface }) =>
        $surface === "dark"
          ? "rgba(222, 238, 229, 0.12)"
          : "rgba(35, 74, 58, 0.08)"};

    svg {
      width: 16px;
      height: 16px;
      color: ${({ $surface }) => ($surface === "dark" ? "#b7ebcb" : "#2e7b46")};
    }

    &:last-child {
      border-right: 0;
    }
  }
`;

export const CardMetaLabel = styled.div`
  color: ${({ $surface }) =>
    $surface === "dark" ? "rgba(255, 255, 255, 0.78)" : "#6c7a7b"};
  display: none;

  @media (max-width: 760px) {
    display: block;
    color: ${({ $surface }) =>
      $surface === "dark" ? "rgba(255, 255, 255, 0.78)" : "#67716c"};
    font-size: 0.54rem;
    font-weight: 500;
    line-height: 1.15;
  }
`;

export const CardMetaValue = styled.div`
  color: ${({ $surface }) => ($surface === "dark" ? "#ffffff" : "#13201d")};
  font-size: 0.6rem;
  font-weight: 600;
  line-height: 1.25;

  @media (max-width: 760px) {
    margin-top: 3px;
    font-size: 0.6rem;
    font-weight: 700;
    line-height: 1.2;
  }
`;

export const LinkText = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  color: ${({ $surface }) => ($surface === "dark" ? "#f3faf5" : "#1c6d43")};
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 700;
  flex: 1 1 auto;

  ${({ $hidden }) =>
    $hidden &&
    css`
      display: none;
    `}

  @media (max-width: 760px) {
    justify-content: flex-end;
    gap: 0;
    font-size: 0.82rem;
    color: #2a874a;
    display: contents;
  }

  @media (max-width: 760px) {
    span {
      justify-self: center;
      text-align: center;
      font-weight: 700;
    }
  }
`;

export const LinkArrow = styled.span`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #48a767 0%, #22693e 100%);
  color: #ffffff;
  box-shadow: 0 14px 26px rgba(25, 93, 54, 0.18);

  svg {
    width: 16px;
    height: 16px;
    display: block;
  }

  @media (max-width: 760px) {
    width: 28px;
    height: 28px;
    justify-self: end;

    svg {
      width: 12px;
      height: 12px;
    }
  }
`;

