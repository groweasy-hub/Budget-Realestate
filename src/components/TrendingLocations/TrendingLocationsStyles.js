import styled, { css } from "styled-components";

const accentMap = {
  emerald: css`
    background:
      radial-gradient(
        circle at 16% 18%,
        rgba(104, 186, 120, 0.45),
        transparent 24%
      ),
      linear-gradient(180deg, #d5e3f1 0%, #eddfd0 44%, #102421 100%);
  `,
  meadow: css`
    background:
      radial-gradient(
        circle at 18% 18%,
        rgba(152, 200, 110, 0.4),
        transparent 24%
      ),
      linear-gradient(180deg, #d9e0ec 0%, #f2e3cf 40%, #11211d 100%);
  `,
  sky: css`
    background:
      radial-gradient(
        circle at 72% 16%,
        rgba(113, 185, 255, 0.26),
        transparent 24%
      ),
      linear-gradient(180deg, #c9ddf4 0%, #dce7f1 38%, #10211f 100%);
  `,
  sunrise: css`
    background:
      radial-gradient(
        circle at 72% 16%,
        rgba(255, 194, 135, 0.28),
        transparent 24%
      ),
      linear-gradient(180deg, #d9deec 0%, #efd7c7 44%, #11221f 100%);
  `,
  harbor: css`
    background:
      radial-gradient(
        circle at 82% 18%,
        rgba(115, 190, 255, 0.22),
        transparent 26%
      ),
      linear-gradient(180deg, #d6dfef 0%, #e5d9d2 44%, #122320 100%);
  `,
};

export const Section = styled.section`
  position: relative;
  padding: 96px 0 54px;
`;

export const Inner = styled.div`
  width: min(1520px, calc(100% - 32px));
  margin: 0 auto;

  @media (max-width: 760px) {
    width: min(100%, calc(100% - 20px));
  }
`;

export const Header = styled.div`
  max-width: 760px;
  margin: 0 auto 44px;
  text-align: center;
`;

export const KickerRow = styled.div`
  display: inline-flex;
  align-items: center;
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

export const SectionTitle = styled.h2`
  margin: 0;
  color: #0f1918;
  font-family: "Poppins", sans-serif;
  font-size: clamp(2rem, 4vw, 4rem);
  font-weight: 400;
  line-height: 1.04;
  letter-spacing: -0.055em;
`;

export const Description = styled.p`
  max-width: 880px;
  margin: 20px auto 0;
  color: #536471;
  font-size: clamp(1rem, 1.7vw, 1.18rem);
  line-height: 1.65;
`;

export const CarouselViewport = styled.div`
  overflow: hidden;
`;

export const CarouselTrack = styled.div`
  --gap: 14px;
  --card-size: calc(
    (100% - (var(--visible-count) - 1) * var(--gap)) / var(--visible-count)
  );
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: var(--card-size);
  align-items: start;
  gap: var(--gap);
  transform: translateX(
    calc(-1 * var(--offset) * (var(--card-size) + var(--gap)))
  );
  transition: ${({ $isAnimating }) =>
    $isAnimating ? "transform 420ms cubic-bezier(0.22, 1, 0.36, 1)" : "none"};
  will-change: transform;

  @media (max-width: 640px) {
    --gap: 12px;
  }
`;

export const Card = styled.article`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border-radius: 18px;
  border: 1px solid rgba(41, 101, 64, 0.12);
  background: transparent;
  padding: 0;
`;

export const CardVisual = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 16px 16px 0 0;
  aspect-ratio: 1 / 0.78;
  display: flex;
  align-items: flex-end;
  padding: 14px 14px;
  background: linear-gradient(180deg, #d8e2ef 0%, #152521 100%);
`;

export const NumberBadge = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 42px;
  min-height: 32px;
  padding: 0 10px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.96);
  box-shadow: 0 10px 20px rgba(17, 31, 28, 0.08);
  color: #338b4c;
  font-size: 0.92rem;
  font-weight: 700;
`;

export const CardImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CardImageFallback = styled.div`
  position: absolute;
  inset: 0;
  ${({ $accent }) => accentMap[$accent] || accentMap.emerald}

  svg {
    width: 100%;
    height: 100%;
    display: block;
  }
`;

export const ImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(10, 19, 17, 0.04) 0%,
    rgba(10, 19, 17, 0.08) 36%,
    rgba(7, 15, 14, 0.86) 100%
  );
`;

export const Title = styled.h3`
  position: relative;
  z-index: 1;
  margin: 0;
  color: #ffffff;
  font-family: "Poppins", sans-serif;
  font-size: clamp(1.35rem, 1.6vw, 1.72rem);
  font-weight: 700;
  line-height: 1.02;
  letter-spacing: -0.045em;
`;

export const LabelAccent = styled.span`
  position: absolute;
  left: 14px;
  bottom: 12px;
  z-index: 1;
  width: 38px;
  height: 4px;
  border-radius: 999px;
  background: linear-gradient(90deg, #54c76e 0%, #d8efdd 100%);
`;

export const MetricRow = styled.div`
  display: grid;
  grid-template-columns: 34px 1fr auto;
  align-items: center;
  gap: 8px;
  padding: 14px 8px;
  border-bottom: 1px solid rgba(43, 98, 62, 0.08);

  ${({ $demand }) =>
    $demand &&
    css`
      padding-bottom: 14px;
      border-bottom: 0;
    `}
`;

export const MetricIconWrap = styled.span`
  width: 28px;
  height: 28px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1.5px solid rgba(70, 158, 89, 0.58);
  color: #31884a;

  svg {
    width: 14px;
    height: 14px;
    display: block;
  }
`;

export const MetricLabel = styled.span`
  color: #263231;
  font-size: 0.92rem;
  line-height: 1.3;
`;

export const MetricValue = styled.span`
  color: #2f8a4d;
  font-size: 0.92rem;
  font-weight: 700;
  text-align: right;
  white-space: nowrap;
`;

export const ProgressBar = styled.div`
  height: 6px;
  margin: 0 16px 14px 44px;
  border-radius: 999px;
  background: #e8efe7;
  overflow: hidden;
`;

export const ProgressFill = styled.div`
  height: 100%;
  border-radius: 999px;
  background: linear-gradient(90deg, #2b8749 0%, #4db76a 100%);
`;

export const BottomArt = styled.div`
  margin-top: auto;
  padding: 8px 4px 8px;
  color: rgba(120, 193, 124, 0.38);

  svg {
    display: block;
    width: 100%;
    height: auto;
  }
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  margin-top: 34px;
`;

export const ControlArrow = styled.button`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 1.5px solid rgba(52, 137, 77, 0.42);
  background: rgba(255, 255, 255, 0.84);
  color: #2c8749;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 10px 20px rgba(40, 73, 50, 0.08);

  svg {
    width: 18px;
    height: 18px;
    display: block;
  }
`;

export const ControlDots = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 12px;
`;

export const ControlDot = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${({ $active }) => ($active ? "#56b86e" : "#d7e7d6")};
  box-shadow: ${({ $active }) =>
    $active ? "0 0 0 3px rgba(86, 184, 110, 0.12)" : "none"};
`;
