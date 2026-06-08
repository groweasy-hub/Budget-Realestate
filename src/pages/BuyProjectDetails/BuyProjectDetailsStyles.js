import { Link } from "react-router-dom";
import styled from "styled-components";

const panel = `
  background: rgba(255, 255, 255, 0.98);
  border: 1px solid rgba(27, 92, 53, 0.08);
  border-radius: 26px;
  box-shadow: 0 18px 44px rgba(32, 54, 40, 0.08);
`;

export const PageShell = styled.main`
  min-height: 100vh;
  background:
    radial-gradient(
      circle at 14% 6%,
      rgba(244, 227, 191, 0.46),
      transparent 22%
    ),
    radial-gradient(
      circle at 88% 5%,
      rgba(226, 243, 225, 0.84),
      transparent 24%
    ),
    linear-gradient(180deg, #fdfefc 0%, #f4f8f3 100%);
`;

export const PageInner = styled.div`
  width: min(1520px, calc(100% - 28px));
  margin: 0 auto;
  padding: 16px 0 30px;
`;

export const HeroGrid = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1.58fr) minmax(0, 1.08fr) 356px;
  gap: 14px;
  align-items: start;
`;

export const GalleryShell = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 174px;
  gap: 12px;
  min-width: 0;
`;

export const MainMedia = styled.div`
  ${panel};
  position: relative;
  overflow: hidden;
  min-height: 540px;
`;

export const MainImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

export const BadgeRow = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  z-index: 2;
`;

export const Badge = styled.div`
  min-height: 34px;
  padding: 0 14px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.96);
  color: #13211d;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.88rem;
  font-weight: 700;
  box-shadow: 0 6px 18px rgba(25, 41, 31, 0.08);

  svg {
    width: 16px;
    height: 16px;
    color: #0f6b34;
  }
`;

export const ViewPhotosButton = styled.button`
  position: absolute;
  left: 16px;
  bottom: 16px;
  min-height: 52px;
  padding: 0 14px 0 16px;
  border-radius: 18px;
  background: rgba(23, 28, 32, 0.72);
  backdrop-filter: blur(12px);
  color: #ffffff;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-size: 0.95rem;
  font-weight: 700;
  box-shadow: 0 12px 22px rgba(0, 0, 0, 0.14);

  span:last-child {
    opacity: 0.88;
    font-weight: 500;
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

export const ThumbnailColumn = styled.div`
  display: grid;
  gap: 10px;
`;

export const ThumbnailCard = styled.button`
  ${panel};
  position: relative;
  overflow: hidden;
  min-height: 172px;
  padding: 0;
  border: 2px solid
    ${({ $active }) => ($active ? "rgba(17, 107, 52, 0.24)" : "transparent")};
  cursor: pointer;
`;

export const ThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const ThumbnailLabel = styled.div`
  position: absolute;
  left: 10px;
  bottom: 10px;
  min-height: 30px;
  padding: 0 10px;
  border-radius: 10px;
  background: rgba(20, 23, 25, 0.78);
  color: #ffffff;
  display: inline-flex;
  align-items: center;
  font-size: 0.82rem;
  font-weight: 700;
`;

export const SummaryPanel = styled.div`
  min-width: 0;
  padding: 2px 10px 0 14px;
`;

export const BreadcrumbRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  color: #66736d;
  font-size: 0.98rem;
  font-weight: 500;
`;

export const CrumbLink = styled(Link)`
  color: #0f6b34;
  text-decoration: none;
  font-weight: 600;
`;

export const CrumbSeparator = styled.span`
  color: #84a087;
`;

export const TitleRow = styled.div`
  display: flex;
  align-items: end;
  gap: 14px;
  margin-top: 18px;
`;

export const Title = styled.h1`
  margin: 0;
  color: #10211d;
  font-size: clamp(2.35rem, 5vw, 2.25rem);
  font-weight: 600;
  line-height: 0.98;
  letter-spacing: -0.05em;
`;

export const VerifiedDot = styled.div`
  width: 34px;
  height: 34px;
  margin-bottom: 10px;
  border-radius: 50%;
  background: linear-gradient(180deg, #0f6d34 0%, #0b592a 100%);
  color: #ffffff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 18px rgba(15, 109, 52, 0.18);

  svg {
    width: 18px;
    height: 18px;
  }
`;

export const LocationRow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-top: 18px;
  color: #5f6d67;
  font-size: 0.95rem;

  svg {
    width: 18px;
    height: 18px;
    color: #0f6b34;
  }
`;

export const RatingRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 16px;
  color: #5f6d67;
  font-size: 0.86rem;
`;

export const RatingPill = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #0f6b34;
  font-weight: 700;

  svg {
    width: 18px;
    height: 18px;
  }
`;

export const DotDivider = styled.span`
  width: 1px;
  height: 22px;
  background: rgba(110, 122, 116, 0.24);
`;

export const PriceBlock = styled.div`
  margin-top: 18px;
`;

export const Price = styled.div`
  color: #0f6b34;
  font-size: 2.35rem;
  font-weight: 800;
  letter-spacing: -0.03em;
`;

export const PriceNote = styled.div`
  margin-top: 6px;
  color: #71807a;
  font-size: 0.96rem;
  display: inline-flex;
  align-items: center;
  gap: 8px;

  svg {
    width: 15px;
    height: 15px;
  }
`;

export const SpecsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
  margin-top: 18px;
`;

export const SpecCard = styled.div`
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
`;

export const SpecIcon = styled.div`
  color: #0f6b34;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 22px;
    height: 22px;
  }
`;

export const SpecValue = styled.div`
  color: #17251f;
  font-size: 0.98rem;
  font-weight: 800;
  line-height: 1.1;
`;

export const ActionRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 14px;
`;

export const ActionButton = styled.button`
  ${panel};
  min-height: 38px;
  padding: 0 18px;
  border-radius: 14px;
  background: ${({ $primary }) =>
    $primary
      ? "linear-gradient(180deg, #eff8f0 0%, #e7f4e9 100%)"
      : "rgba(255,255,255,0.98)"};
  border-color: ${({ $accent }) =>
    $accent ? "rgba(15, 107, 52, 0.28)" : "rgba(27, 92, 53, 0.08)"};
  color: ${({ $accent }) => ($accent ? "#0f6b34" : "#16241f")};
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 0.82rem;
  font-weight: 700;
  white-space: nowrap;
  cursor: pointer;

  svg {
    width: 17px;
    height: 17px;
  }
`;

export const SidebarStack = styled.div`
  display: grid;
  gap: 14px;
`;

export const SidebarCard = styled.aside`
  ${panel};
  padding: 16px;
`;

export const SidebarTitle = styled.h3`
  margin: 0;
  color: #1a2822;
  font-size: 0.96rem;
  font-weight: 800;
`;

export const ConsultantHeader = styled.div`
  display: grid;
  grid-template-columns: 68px minmax(0, 1fr);
  gap: 12px;
  margin-top: 12px;
  align-items: center;
`;

export const ConsultantAvatar = styled.div`
  ${panel};
  overflow: hidden;
  border-radius: 14px;
  min-height: 68px;
  background: linear-gradient(180deg, #edf4ef 0%, #dbe6dd 100%);

  svg {
    width: 100%;
    height: 100%;
    display: block;
  }
`;

export const ConsultantName = styled.div`
  color: #17251f;
  font-size: 0.92rem;
  font-weight: 800;
`;

export const ConsultantMeta = styled.div`
  margin-top: 4px;
  color: #6a7772;
  font-size: 0.82rem;
  line-height: 1.34;
`;

export const SidebarButton = styled.button`
  width: 100%;
  min-height: 48px;
  margin-top: ${({ $first }) => ($first ? "14px" : "8px")};
  border-radius: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 0.88rem;
  font-weight: 700;
  cursor: pointer;
  color: ${({ $filled }) => ($filled ? "#ffffff" : "#11301e")};
  background: ${({ $filled, $whatsapp }) =>
    $filled
      ? "linear-gradient(180deg, #0f6b34 0%, #0b592a 100%)"
      : $whatsapp
        ? "linear-gradient(180deg, #eef8f0 0%, #e5f3e7 100%)"
        : "#ffffff"};
  border: 1px solid
    ${({ $filled }) =>
      $filled ? "rgba(15, 107, 52, 0.2)" : "rgba(15, 107, 52, 0.22)"};

  svg {
    width: 17px;
    height: 17px;
    color: ${({ $filled, $whatsapp }) =>
      $filled ? "#ffffff" : $whatsapp ? "#0f6b34" : "#0f6b34"};
  }
`;

export const ResponseCard = styled.div`
  margin-top: 10px;
  padding: 12px 12px;
  border-radius: 12px;
  background: linear-gradient(180deg, #f3faf4 0%, #eef7f0 100%);
  display: grid;
  grid-template-columns: 24px minmax(0, 1fr);
  gap: 8px;
  align-items: start;
  color: #53625b;
  font-size: 0.8rem;
  line-height: 1.34;

  svg {
    width: 16px;
    height: 16px;
    color: #0f6b34;
    margin-top: 2px;
  }
`;

export const DetailsGrid = styled.section`
  display: grid;
  grid-template-columns: 1.02fr 1.24fr 1.06fr 1fr;
  gap: 14px;
  margin-top: 16px;
  align-items: start;
`;

export const InfoCard = styled.article`
  ${panel};
  padding: 20px 18px;
  min-height: ${({ $tall }) => ($tall ? "288px" : "270px")};
`;

export const CardHeading = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: #18261f;
  font-size: 1.2rem;
  font-weight: 800;

  svg {
    width: 22px;
    height: 22px;
    color: #0f6b34;
  }
`;

export const CardText = styled.p`
  margin: 18px 0 0;
  color: #596862;
  font-size: 0.82rem;
  line-height: 1.62;
`;

export const CheckList = styled.div`
  display: grid;
  gap: 10px;
  margin-top: 18px;
`;

export const CheckItem = styled.div`
  display: grid;
  grid-template-columns: 18px minmax(0, 1fr);
  gap: 10px;
  color: #5a6963;
  font-size: 0.7rem;
  line-height: 1.38;

  svg {
    width: 18px;
    height: 18px;
    color: #0f6b34;
  }
`;

export const AmenitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
  margin-top: 16px;
`;

export const AmenityCard = styled.div`
  min-height: 68px;
  border-radius: 16px;
  background: linear-gradient(180deg, #f8fbf8 0%, #f3f7f4 100%);
  border: 1px solid rgba(27, 92, 53, 0.06);
  display: grid;
  place-items: center;
  padding: 12px 6px;
  text-align: center;
`;

export const AmenityIcon = styled.div`
  color: #0f6b34;

  svg {
    width: 28px;
    height: 28px;
  }
`;

export const AmenityLabel = styled.div`
  margin-top: 8px;
  white-space: pre-line;
  color: #192720;
  font-size: 0.72rem;
  font-weight: 700;
  line-height: 1.32;
`;

export const LocationList = styled.div`
  display: grid;
  gap: 14px;
  margin-top: 22px;
`;

export const LocationItem = styled.div`
  display: grid;
  grid-template-columns: 18px minmax(0, 1fr) auto;
  gap: 12px;
  align-items: center;
  color: #4f5e58;
  font-size: 0.9rem;

  svg {
    width: 14px;
    height: 14px;
    color: #0f6b34;
  }
`;

export const TimeBadge = styled.div`
  color: #4f5e58;
  font-size: 0.88rem;
`;

export const CalculatorCard = styled(InfoCard)`
  min-height: 308px;
  padding: 18px 18px 16px;
`;

export const CalculatorHeading = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: #18261f;
  font-size: 1rem;
  font-weight: 800;
`;

export const CalculatorHeadingIcon = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 12px;
  background: linear-gradient(180deg, #eef8f0 0%, #e6f3e8 100%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #0f6b34;

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const CalculatorFields = styled.div`
  display: grid;
  gap: 13px;
  margin-top: 18px;
`;

export const CalculatorRow = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 1.08fr;
  gap: 16px;
  align-items: center;
`;

export const CalculatorFieldName = styled.div`
  color: #4f5d58;
  font-size: 0.84rem;
  font-weight: 500;
`;

export const FormStack = styled.div`
  display: grid;
  gap: 12px;
  margin-top: 14px;
`;

export const FieldLabel = styled.label`
  display: grid;
  gap: 6px;
  color: #5d6b65;
  font-size: 0.58rem;
  font-weight: 500;
`;

export const InputWrap = styled.div`
  position: relative;
  min-height: 32px;
  border-radius: 10px;
  border: 1px solid rgba(27, 92, 53, 0.09);
  background: #ffffff;
  display: flex;
  align-items: center;
  padding: 0 12px;
  gap: 10px;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.9);
`;

export const Input = styled.input`
  width: 100%;
  border: 0;
  outline: none;
  background: transparent;
  color: #21302a;
  font-size: 0.86rem;
  font-weight: 500;
`;

export const Select = styled.select`
  width: 100%;
  border: 0;
  outline: none;
  background: transparent;
  color: #21302a;
  font-size: 0.86rem;
  font-weight: 500;
  appearance: none;
`;

export const InlineValue = styled.div`
  color: #0f6b34;
  font-size: 0.77rem;
  font-weight: 700;
  white-space: nowrap;
`;

export const SelectChevron = styled.span`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #67756f;
  pointer-events: none;

  svg {
    width: 16px;
    height: 16px;
    display: block;
  }
`;

export const EstimateCard = styled.div`
  margin-top: 16px;
  padding: 14px 18px 12px;
  border-radius: 14px;
  background: linear-gradient(90deg, #eff8f0 0%, #eef7f0 52%, #e8f4ea 100%);
  display: grid;
  grid-template-columns: minmax(0, 1fr) 84px;
  gap: 12px;
  align-items: end;
`;

export const EstimateLabel = styled.div`
  color: #1f5f39;
  font-size: 0.84rem;
  font-weight: 700;
`;

export const EstimateValue = styled.div`
  margin-top: 6px;
  color: #0f6b34;
  font-size: 1.2rem;
  font-weight: 800;
  line-height: 1;
`;

export const SimilarCard = styled(InfoCard)`
  grid-column: 1 / span 2;
  min-height: 278px;
`;

export const SimilarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

export const CarouselButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const CircleButton = styled.button`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 1px solid rgba(27, 92, 53, 0.12);
  background: #ffffff;
  color: #0f6b34;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const SimilarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin-top: 14px;
`;

export const SimilarItem = styled(Link)`
  ${panel};
  overflow: hidden;
  border-radius: 18px;
  text-decoration: none;
  color: inherit;
`;

export const SimilarImageWrap = styled.div`
  position: relative;
  height: 126px;
  overflow: hidden;
`;

export const SimilarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const SmallBadge = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  min-height: 26px;
  padding: 0 10px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.95);
  color: #182620;
  display: inline-flex;
  align-items: center;
  font-size: 0.72rem;
  font-weight: 700;
`;

export const SimilarFav = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.92);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #7d8a84;

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const SimilarBody = styled.div`
  padding: 10px 12px 12px;
`;

export const SimilarTitle = styled.div`
  color: #17251f;
  font-size: 0.94rem;
  font-weight: 800;
`;

export const SimilarLocation = styled.div`
  margin-top: 5px;
  color: #64716b;
  font-size: 0.82rem;
`;

export const SimilarSpecs = styled.div`
  margin-top: 5px;
  color: #64716b;
  font-size: 0.82rem;
`;

export const SimilarPrice = styled.div`
  margin-top: 6px;
  color: #0f6b34;
  font-size: 1.02rem;
  font-weight: 800;
`;

export const SecurityCard = styled(InfoCard)`
  min-height: 178px;
  padding: 0;
  overflow: hidden;
  background: radial-gradient(
    circle at 88% 22%,
    rgba(224, 239, 226, 0.94),
    rgba(243, 248, 244, 0.96) 60%,
    rgba(249, 252, 249, 0.98) 100%
  );
`;

export const SecurityContent = styled.div`
  display: grid;
  grid-template-columns: 132px minmax(0, 1fr);
  gap: 14px;
  align-items: center;
  padding: 22px 20px;
  height: 100%;
`;

export const SecurityIconWrap = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #0f6b34;

  svg {
    width: 110px;
    height: 110px;
  }
`;

export const SecurityTitle = styled.div`
  color: #17251f;
  font-size: 1.08rem;
  font-weight: 800;
  line-height: 1.35;
`;

export const SecurityText = styled.div`
  margin-top: 10px;
  color: #4e5d57;
  font-size: 0.95rem;
  line-height: 1.5;
`;

export const BottomBand = styled.section`
  margin-top: 16px;
  border-radius: 24px;
  overflow: hidden;
  background:
    radial-gradient(
      circle at 10% 50%,
      rgba(34, 129, 68, 0.34),
      transparent 18%
    ),
    radial-gradient(
      circle at 82% 50%,
      rgba(95, 174, 120, 0.22),
      transparent 28%
    ),
    linear-gradient(90deg, #0b6b34 0%, #084f27 58%, #0b6b34 100%);
  box-shadow: 0 20px 36px rgba(12, 72, 36, 0.18);
`;

export const BottomBandGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto auto 220px;
  gap: 20px;
  align-items: center;
  min-height: 110px;
  padding: 18px 20px;
`;

export const BottomBandCopy = styled.div`
  display: grid;
  grid-template-columns: 64px minmax(0, 1fr);
  gap: 16px;
  align-items: center;
`;

export const BottomBandIcon = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.12);
  color: #ffffff;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 30px;
    height: 30px;
  }
`;

export const BottomBandTitle = styled.h3`
  margin: 0;
  color: #ffffff;
  font-family: "DM Serif Display", Georgia, serif;
  font-size: 1.16rem;
  font-weight: 400;
`;

export const BottomBandText = styled.p`
  margin: 4px 0 0;
  color: rgba(245, 249, 245, 0.94);
  font-size: 0.92rem;
`;

export const BottomBandButton = styled.button`
  min-width: 190px;
  min-height: 54px;
  padding: 0 18px;
  border-radius: 12px;
  border: 1px solid
    ${({ $ghost }) =>
      $ghost ? "rgba(229, 238, 230, 0.28)" : "rgba(229, 238, 230, 0.08)"};
  background: ${({ $ghost }) =>
    $ghost
      ? "transparent"
      : "linear-gradient(180deg, #ffffff 0%, #f3f8f3 100%)"};
  color: ${({ $ghost }) => ($ghost ? "#ffffff" : "#18301f")};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;

  svg {
    width: 18px;
    height: 18px;
  }
`;

export const BottomBandImage = styled.img`
  width: 220px;
  align-self: end;
  justify-self: end;
  display: block;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1200;
  background: rgba(10, 14, 18, 0.72);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const ModalCard = styled.div`
  ${panel};
  width: min(1180px, 100%);
  padding: 18px;
  border-radius: 28px;
  background: #ffffff;
`;

export const ModalTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

export const ModalTitle = styled.h3`
  margin: 0;
  color: #17251f;
  font-size: 1.1rem;
  font-weight: 800;
`;

export const CloseButton = styled.button`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 1px solid rgba(27, 92, 53, 0.1);
  background: #ffffff;
  color: #1c2a24;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ModalImage = styled.img`
  width: 100%;
  height: 620px;
  margin-top: 14px;
  border-radius: 22px;
  object-fit: cover;
  display: block;
`;

export const ModalThumbRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px;
  margin-top: 12px;
`;
