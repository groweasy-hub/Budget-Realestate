import styled from "styled-components";

export const LoginPage = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 600px minmax(0, 1fr);
  background:
    radial-gradient(
      circle at 18% 15%,
      rgba(243, 236, 226, 0.95),
      transparent 22%
    ),
    radial-gradient(
      circle at 87% 13%,
      rgba(243, 236, 226, 0.7),
      transparent 18%
    ),
    radial-gradient(
      circle at 90% 88%,
      rgba(243, 236, 226, 0.82),
      transparent 18%
    ),
    #fefcf9;

  @media (max-width: 920px) {
    display: none;
    background:
      radial-gradient(
        circle at 22% 8%,
        rgba(243, 236, 226, 0.85),
        transparent 22%
      ),
      radial-gradient(
        circle at 84% 90%,
        rgba(243, 236, 226, 0.92),
        transparent 30%
      ),
      #fcfaf7;
  }
`;

export const MobileDesktopNotice = styled.main`
  display: none;

  @media (max-width: 920px) {
    min-height: 100vh;
    display: block;
    padding: 18px 16px 20px;
    color: #102033;
    background:
      radial-gradient(circle at 14% 22%, rgba(217, 231, 220, 0.86) 0 13%, transparent 29%),
      radial-gradient(circle at 78% 19%, rgba(228, 237, 230, 0.9) 0 18%, transparent 34%),
      radial-gradient(circle at 83% 50%, rgba(230, 239, 232, 0.86) 0 16%, transparent 35%),
      linear-gradient(180deg, #ffffff 0%, #fafdfb 100%);
  }
`;

export const MobileNoticeInner = styled.div`
  width: min(100%, 430px);
  margin: 0 auto;
`;

export const MobileBrand = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 0 auto 8px;

  strong {
    display: block;
    color: #102033;
    font-size: 22px;
    font-weight: 800;
    line-height: 1.02;
  }

  span {
    display: block;
    color: #0ea34f;
    font-size: 22px;
    font-weight: 800;
    line-height: 1.02;
  }
`;

export const MobileAdminPill = styled.div`
  width: fit-content;
  height: 24px;
  display: flex;
  align-items: center;
  gap: 7px;
  margin: 0 auto 9px;
  padding: 0 15px;
  border-radius: 999px;
  color: #ffffff;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.04em;
  background: linear-gradient(180deg, #119c49 0%, #087f39 100%);
  box-shadow: 0 6px 14px rgba(8, 127, 57, 0.22);
`;

export const MobileHero = styled.div`
  position: relative;
  height: 205px;
  margin: 0 auto 10px;
`;

export const Plant = styled.div`
  position: absolute;
  left: 0;
  bottom: 4px;
  width: 72px;
  height: 122px;
`;

export const Mug = styled.div`
  position: absolute;
  right: 0;
  bottom: 8px;
  width: 66px;
  height: 54px;
`;

export const Laptop = styled.div`
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 292px;
  height: 168px;
  transform: translateX(-50%);
`;

export const NoticeTitle = styled.h1`
  margin: 8px 0 4px;
  color: #102033;
  text-align: center;
  font-size: 25px;
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: 0;
`;

export const NoticeSubtitle = styled.p`
  width: min(100%, 278px);
  margin: 0 auto 15px;
  color: #687386;
  text-align: center;
  font-size: 13px;
  font-weight: 500;
  line-height: 1.35;
`;

export const NoticeCard = styled.section`
  padding: 16px 18px 15px;
  border: 1px solid #e7ecef;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.94);
  box-shadow: 0 12px 32px rgba(17, 32, 47, 0.06);
`;

export const NoticeCardTop = styled.div`
  display: grid;
  grid-template-columns: 58px 1fr;
  gap: 14px;
  align-items: center;
`;

export const DesktopIconCircle = styled.div`
  width: 58px;
  height: 58px;
  display: grid;
  place-items: center;
  border-radius: 999px;
  color: #0b8d43;
  background: #e8f5ec;
`;

export const NoticeCardTitle = styled.h2`
  margin: 0 0 6px;
  color: #102033;
  font-size: 18px;
  font-weight: 800;
  line-height: 1.18;
`;

export const NoticeCardText = styled.p`
  margin: 0;
  color: #506071;
  font-size: 11px;
  font-weight: 600;
  line-height: 1.45;
`;

export const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 8px 12px;
  margin-top: 14px;
`;

export const BenefitItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: #102033;
  font-size: 10px;
  font-weight: 700;
  line-height: 1.2;

  svg {
    flex: 0 0 auto;
    color: #0b9a48;
  }
`;

export const FeatureHeading = styled.div`
  margin: 15px 0 8px;
  color: #102033;
  text-align: center;
  font-size: 12px;
  font-weight: 800;
`;

export const MobileFeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 7px;
`;

export const MobileFeatureCard = styled.div`
  min-height: 66px;
  display: grid;
  justify-items: center;
  align-content: center;
  gap: 5px;
  padding: 8px 5px;
  border: 1px solid #edf1f3;
  border-radius: 8px;
  color: #0b8d43;
  background: #ffffff;
  box-shadow: 0 6px 14px rgba(17, 32, 47, 0.035);

  strong {
    color: #102033;
    text-align: center;
    font-size: 9px;
    font-weight: 800;
    line-height: 1.12;
  }

  span {
    color: #687386;
    text-align: center;
    font-size: 7px;
    font-weight: 700;
    line-height: 1.15;
  }
`;

export const MobileDots = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin: 9px 0 12px;

  span {
    width: 6px;
    height: 6px;
    border-radius: 999px;
    background: #cbd5de;
  }

  span:first-child {
    background: #0b8d43;
  }
`;

export const MobileActions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 10px;
`;

export const MobilePrimaryAction = styled.button`
  height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 7px;
  color: #ffffff;
  font-size: 13px;
  font-weight: 800;
  background: linear-gradient(180deg, #109b49 0%, #087f39 100%);
  box-shadow: 0 9px 18px rgba(8, 127, 57, 0.22);
`;

export const MobileSecondaryAction = styled.button`
  height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 1px solid #0b8d43;
  border-radius: 7px;
  color: #102033;
  font-size: 13px;
  font-weight: 800;
  background: #ffffff;
`;

export const DeviceCard = styled.section`
  display: grid;
  grid-template-columns: 62px minmax(0, 1fr) 94px;
  gap: 12px;
  align-items: center;
  padding: 14px 15px;
  border: 1px solid #e7ecef;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.94);
`;

export const DeviceIconCircle = styled.div`
  width: 52px;
  height: 52px;
  display: grid;
  place-items: center;
  border-radius: 999px;
  color: #0b8d43;
  background: #e8f5ec;
`;

export const DeviceTitle = styled.div`
  color: #102033;
  font-size: 12px;
  font-weight: 800;
`;

export const DeviceText = styled.div`
  margin-top: 5px;
  color: #687386;
  font-size: 9px;
  font-weight: 600;
  line-height: 1.35;
`;

export const DeviceUrl = styled.div`
  width: fit-content;
  height: 25px;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  margin-top: 9px;
  padding: 0 12px;
  border: 1px solid #e7ecef;
  border-radius: 999px;
  color: #102033;
  font-size: 9px;
  font-weight: 800;
  background: #ffffff;
`;

export const QrWrap = styled.div`
  position: relative;
  justify-self: end;
  width: 88px;
  height: 88px;
`;

export const MobileSecurityNote = styled.div`
  display: flex;
  justify-content: center;
  gap: 7px;
  margin-top: 12px;
  color: #7c8797;
  font-size: 10px;
  font-weight: 600;
`;

export const ShowcasePanel = styled.section`
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  padding: 54px 52px 54px;
  color: #fff;
  background:
    linear-gradient(
      180deg,
      rgba(0, 42, 28, 0.9) 0%,
      rgba(0, 42, 28, 0.83) 55%,
      rgba(0, 42, 28, 0.92) 100%
    ),
    url("/Images/luxury-homes.jpg") center/cover no-repeat;

  @media (max-width: 920px) {
    min-height: 275px;
    padding: 24px 24px 108px;
    border-bottom-left-radius: 28px;
    border-bottom-right-radius: 28px;
    background-position: center;
  }
`;

export const BrandRow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 16px;
`;

export const WelcomeBlock = styled.div`
  position: relative;
  z-index: 1;
  max-width: 420px;
  margin-top: 52px;

  @media (max-width: 920px) {
    margin-top: 34px;
    max-width: 305px;
  }
`;

export const WelcomeLabel = styled.p`
  margin: 0 0 22px;
  color: #18c45a;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.2;

  @media (max-width: 920px) {
    margin-bottom: 12px;
    font-size: 17px;
  }
`;

export const WelcomeHeading = styled.h1`
  margin: 0;
  color: #ffffff;
  font-size: 52px;
  font-weight: 800;
  line-height: 1.08;
  letter-spacing: -0.04em;

  span {
    color: #18c45a;
  }

  @media (max-width: 920px) {
    font-size: 27px;
    line-height: 1.18;
  }
`;

export const AccentLine = styled.div`
  width: 44px;
  height: 3px;
  margin: 30px 0 28px;
  border-radius: 999px;
  background: #18c45a;

  @media (max-width: 920px) {
    display: none;
  }
`;

export const WelcomeCopy = styled.p`
  margin: 0;
  color: rgba(255, 255, 255, 0.86);
  font-size: 17px;
  line-height: 1.65;

  @media (max-width: 920px) {
    display: none;
  }
`;

export const FeatureList = styled.div`
  position: absolute;
  left: 52px;
  right: 52px;
  bottom: 44px;
  display: grid;
  gap: 28px;
  z-index: 1;

  @media (max-width: 920px) {
    display: none;
  }
`;

export const FeatureItem = styled.div`
  display: grid;
  grid-template-columns: 52px 1fr;
  gap: 16px;
  align-items: center;
`;

export const FeatureIconWrap = styled.div`
  width: 52px;
  height: 52px;
  display: grid;
  place-items: center;
  border-radius: 999px;
  background: rgba(16, 151, 72, 0.16);
  backdrop-filter: blur(2px);
`;

export const FeatureTitle = styled.div`
  margin-bottom: 4px;
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
`;

export const FeatureText = styled.div`
  color: rgba(255, 255, 255, 0.8);
  font-size: 15px;
  line-height: 1.35;
`;

export const FormSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 42px 32px 34px;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 30px;
    right: 120px;
    width: 124px;
    height: 62px;
    background-image: radial-gradient(
      circle,
      rgba(169, 178, 189, 0.3) 1.6px,
      transparent 1.8px
    );
    background-size: 20px 20px;
    opacity: 0.8;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background:
      radial-gradient(
        circle at 4% 18%,
        rgba(216, 222, 229, 0.34) 0,
        transparent 20%
      ),
      radial-gradient(
        circle at 100% 68%,
        rgba(226, 231, 236, 0.42) 0,
        transparent 24%
      );
    pointer-events: none;
  }

  @media (max-width: 920px) {
    margin-top: -68px;
    padding: 0 18px 24px;

    &::before,
    &::after {
      display: none;
    }
  }
`;

export const LoginCard = styled.div`
  position: relative;
  z-index: 1;
  width: min(100%, 534px);
  padding: 46px 42px 40px;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.96);
  box-shadow:
    0 22px 60px rgba(20, 32, 56, 0.08),
    0 0 0 1px rgba(22, 30, 45, 0.04);

  @media (max-width: 920px) {
    width: 100%;
    padding: 34px 26px 26px;
    border-radius: 18px;
    box-shadow:
      0 16px 50px rgba(20, 32, 56, 0.12),
      0 0 0 1px rgba(22, 30, 45, 0.04);
  }
`;

export const BadgeWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 24px;

  @media (max-width: 920px) {
    margin-bottom: 18px;
  }
`;

export const CardTitle = styled.h2`
  margin: 0;
  color: #121c35;
  text-align: center;
  font-size: 31px;
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.04em;

  @media (max-width: 920px) {
    font-size: 26px;
  }
`;

export const CardSubtitle = styled.p`
  margin: 10px 0 30px;
  color: #465066;
  text-align: center;
  font-size: 16px;
  line-height: 1.5;

  @media (max-width: 920px) {
    margin-bottom: 24px;
    font-size: 15px;
  }
`;

export const Form = styled.form`
  display: grid;
  gap: 24px;
`;

export const FieldGroup = styled.label`
  display: grid;
  gap: 10px;
`;

export const FieldLabel = styled.span`
  color: #1e2942;
  font-size: 15px;
  font-weight: 600;
`;

export const InputFrame = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  height: 54px;
  padding: 0 16px;
  border: 1px solid ${({ $invalid }) => ($invalid ? "#e27474" : "#d9dee6")};
  border-radius: 12px;
  background: #ffffff;
  box-shadow: 0 1px 2px rgba(14, 24, 41, 0.03);
`;

export const Input = styled.input`
  width: 100%;
  border: 0;
  outline: 0;
  padding: 0;
  color: #15203a;
  font-size: 16px;
  background: transparent;

  &::placeholder {
    color: #8b94a8;
  }
`;

export const IconButton = styled.button`
  display: inline-grid;
  place-items: center;
  padding: 0;
  color: #6f788c;
  background: transparent;
  cursor: pointer;
`;

export const UtilityRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: -4px;
`;

export const RememberLabel = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: #2d3953;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
`;

export const RememberInput = styled.input`
  width: 18px;
  height: 18px;
  accent-color: #128b45;
`;

export const UtilityLink = styled.button`
  padding: 0;
  color: #0f9845;
  font-size: 15px;
  font-weight: 600;
  background: transparent;
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  height: 56px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: 2px;
  border-radius: 12px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  background: linear-gradient(180deg, #109b49 0%, #0c8a40 100%);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.14);
  cursor: pointer;
`;

export const Divider = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 18px;
  margin: 12px 0 2px;
  color: #4f596d;
  font-size: 16px;

  &::before,
  &::after {
    content: "";
    height: 1px;
    background: #e6e9ef;
  }
`;

export const GoogleButton = styled.button`
  height: 54px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  border: 1.5px solid #1faf58;
  border-radius: 12px;
  color: #18243f;
  font-size: 16px;
  font-weight: 700;
  background: #ffffff;
  cursor: pointer;
`;

export const ErrorText = styled.p`
  margin: -10px 0 0;
  color: #d44f4f;
  font-size: 14px;
  font-weight: 500;
`;

export const FooterNote = styled.p`
  position: relative;
  z-index: 1;
  margin: 28px 0 0;
  color: #4b5567;
  text-align: center;
  font-size: 15px;
  line-height: 1.5;

  @media (max-width: 920px) {
    margin-top: 20px;
  }
`;
