import { useEffect, useState } from "react";

import {
  Card,
  CardBody,
  CardDescription,
  CardTitle,
  CountIconWrap,
  CountLabel,
  CountPill,
  CountValue,
  Description,
  Grid,
  Header,
  IconBadge,
  Inner,
  KickerLine,
  KickerRow,
  KickerText,
  Media,
  MediaArt,
  MediaImage,
  Section,
  Title,
} from "./CategoryMatrix.Styles";

const iconMap = {
  Flats: BuildingBadgeIcon,
  Villas: HomeBadgeIcon,
  Plots: GridBadgeIcon,
  Commercial: BuildingBadgeIcon,
  "Farm Lands": LeafBadgeIcon,
  "Luxury Homes": DiamondBadgeIcon,
  Auctions: GavelBadgeIcon,
};

const sceneMap = {
  Flats: FlatsScene,
  Villas: VillasScene,
  Plots: PlotsScene,
  Commercial: CommercialScene,
  "Farm Lands": FarmlandsScene,
  "Luxury Homes": LuxuryScene,
  Auctions: AuctionsScene,
};

function splitCount(count = "") {
  const firstSpace = count.indexOf(" ");

  if (firstSpace === -1) {
    return { value: count, label: "" };
  }

  return {
    value: count.slice(0, firstSpace),
    label: count.slice(firstSpace + 1),
  };
}

function CardMediaContent({ item, Icon, Scene }) {
  const [hasImageError, setHasImageError] = useState(false);

  useEffect(() => {
    setHasImageError(false);
  }, [item.image]);

  const showImage = item.image && !hasImageError;

  return (
    <Media>
      {showImage ? (
        <MediaImage
          src={item.image}
          alt={item.imageAlt || item.title}
          onError={() => setHasImageError(true)}
        />
      ) : (
        <>
          <IconBadge>
            <Icon />
          </IconBadge>
          <MediaArt>
            <Scene />
          </MediaArt>
        </>
      )}
    </Media>
  );
}

function CategoryMatrix({
  title = "Browse property verticals with intent.",
  description = "Jump directly into curated inventory segments instead of starting with a generic search box.",
  items = [],
}) {
  return (
    <Section id="category-matrix">
      <Inner>
        <Header>
          <KickerRow>
            <KickerLine />
            <KickerText>Category Matrix</KickerText>
            <KickerLine />
          </KickerRow>

          <Title>{title}</Title>
          <Description>{description}</Description>
        </Header>

        <Grid>
          {items.map((item) => {
            const Icon = iconMap[item.title] || BuildingBadgeIcon;
            const Scene = sceneMap[item.title] || FlatsScene;
            const { value, label } = splitCount(item.count);

            return (
              <Card key={item.title}>
                <CardMediaContent item={item} Icon={Icon} Scene={Scene} />

                <CardBody>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>

                  <CountPill>
                    <CountIconWrap>
                      <UsersIcon />
                    </CountIconWrap>
                    <span>
                      <CountValue>{value}</CountValue>{" "}
                      <CountLabel>{label}</CountLabel>
                    </span>
                  </CountPill>
                </CardBody>
              </Card>
            );
          })}
        </Grid>
      </Inner>
    </Section>
  );
}

function BuildingBadgeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 20V6.8H13.4V20" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round" />
      <path d="M13.4 10H19V20" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round" />
      <path d="M8 9.4H9.2" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
      <path d="M8 12.7H9.2" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
      <path d="M8 16H9.2" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
      <path d="M15.6 13H16.8" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
      <path d="M15.6 16H16.8" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
    </svg>
  );
}

function HomeBadgeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.6 11.2L12 5.2L19.4 11.2V19H14.6V14.4H9.4V19H4.6V11.2Z"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinejoin="round"
      />
      <path d="M8 9.6H8.1" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

function GridBadgeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="14" height="14" rx="1.8" stroke="currentColor" strokeWidth="1.9" />
      <path d="M9.7 5V19" stroke="currentColor" strokeWidth="1.9" />
      <path d="M14.3 5V19" stroke="currentColor" strokeWidth="1.9" />
      <path d="M5 9.7H19" stroke="currentColor" strokeWidth="1.9" />
      <path d="M5 14.3H19" stroke="currentColor" strokeWidth="1.9" />
    </svg>
  );
}

function LeafBadgeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.8 5.3C13.3 5.3 8.4 8.1 6.5 12.4C5.5 14.8 5.6 17.4 6.7 19C8.3 20.1 10.9 20.2 13.3 19.2C17.6 17.3 20.4 12.4 20.4 6.9V5.3H18.8Z"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinejoin="round"
      />
      <path d="M7.3 18.5L17.8 8" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
    </svg>
  );
}

function DiamondBadgeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 6H16L20 10.5L12 19L4 10.5L8 6Z" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round" />
      <path d="M8 6L12 19L16 6" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round" />
      <path d="M4 10.5H20" stroke="currentColor" strokeWidth="1.9" />
    </svg>
  );
}

function GavelBadgeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.2 9.3L11.8 5.8L18.2 12.2L14.7 15.8L8.2 9.3Z" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round" />
      <path d="M7 17L13.2 10.8" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
      <path d="M5 19.3H14.8" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
      <path d="M12.8 14.9L18.8 20.9" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="9" r="3" stroke="currentColor" strokeWidth="1.9" />
      <path d="M3.5 18.2C4.7 15.9 6.3 14.8 8.7 14.8C11.1 14.8 12.7 15.9 13.9 18.2" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
      <circle cx="16.7" cy="9.7" r="2.5" stroke="currentColor" strokeWidth="1.9" />
      <path d="M15 14.8C17 15 18.5 16 19.6 17.9" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
    </svg>
  );
}

function FlatsScene() {
  return (
    <svg viewBox="0 0 640 420" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <rect width="640" height="420" fill="url(#flatsSky)" />
      <rect y="284" width="640" height="136" fill="url(#flatsGround)" />
      <circle cx="83" cy="84" r="70" fill="url(#flatsSun)" opacity="0.95" />
      <rect x="70" y="136" width="120" height="188" rx="8" fill="#4F5763" />
      <rect x="122" y="110" width="150" height="214" rx="8" fill="#6C7785" />
      <rect x="226" y="94" width="156" height="230" rx="8" fill="#505963" />
      <rect x="332" y="120" width="126" height="204" rx="8" fill="#768291" />
      <rect x="436" y="156" width="98" height="168" rx="8" fill="#53606C" />
      <path d="M0 320C98 302 161 292 242 298C332 305 398 333 507 318C561 310 606 302 640 296V420H0V320Z" fill="#9BB26B" />
      <path d="M0 350C90 338 174 340 254 350C345 362 445 376 640 338V420H0V350Z" fill="#6F8F4B" />
      {Array.from({ length: 30 }).map((_, index) => {
        const row = Math.floor(index / 5);
        const col = index % 5;
        return (
          <rect
            key={`f1-${index}`}
            x={142 + col * 25}
            y={132 + row * 28}
            width="12"
            height="18"
            rx="2"
            fill="#D9B46F"
          />
        );
      })}
      {Array.from({ length: 24 }).map((_, index) => {
        const row = Math.floor(index / 4);
        const col = index % 4;
        return (
          <rect
            key={`f2-${index}`}
            x={254 + col * 28}
            y={118 + row * 30}
            width="14"
            height="18"
            rx="2"
            fill="#DFAE57"
          />
        );
      })}
      <defs>
        <linearGradient id="flatsSky" x1="320" y1="0" x2="320" y2="282" gradientUnits="userSpaceOnUse">
          <stop stopColor="#BFD9F6" />
          <stop offset="0.55" stopColor="#E8F1FB" />
          <stop offset="1" stopColor="#FFF4DF" />
        </linearGradient>
        <radialGradient id="flatsSun" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(83 84) rotate(90) scale(70)">
          <stop stopColor="#FFF4CA" />
          <stop offset="1" stopColor="#FFE2A9" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="flatsGround" x1="320" y1="284" x2="320" y2="420" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D3DDB8" />
          <stop offset="1" stopColor="#7E9353" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function VillasScene() {
  return (
    <svg viewBox="0 0 640 420" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <rect width="640" height="420" fill="url(#villaSky)" />
      <rect y="270" width="640" height="150" fill="#739257" />
      <path d="M0 318C138 282 268 278 404 300C485 313 548 330 640 340V420H0V318Z" fill="#557447" />
      <path d="M92 300H514V338H92V300Z" fill="#D6D5D2" />
      <path d="M130 164H452V302H130V164Z" fill="#F5F0EA" />
      <path d="M198 112H520V252H198V112Z" fill="#EFEAE4" />
      <path d="M226 140H488V252H226V140Z" fill="#DBC3A3" opacity="0.75" />
      <path d="M198 112L244 76H470L520 112H198Z" fill="#64584E" />
      <path d="M96 338C166 332 198 306 235 288C280 266 350 262 425 286C474 302 522 330 640 344V420H0V356C34 350 64 344 96 338Z" fill="#8D7A5C" opacity="0.45" />
      <rect x="176" y="186" width="74" height="116" fill="#3A3432" />
      <rect x="270" y="188" width="114" height="58" fill="#6A4D2C" />
      <rect x="398" y="188" width="84" height="100" fill="#6A4D2C" />
      <rect x="238" y="134" width="98" height="78" fill="#6A4D2C" />
      <rect x="358" y="134" width="102" height="78" fill="#6A4D2C" />
      <path d="M106 352L220 310" stroke="#D8D2C8" strokeWidth="14" strokeLinecap="round" />
      <path d="M220 310L292 340" stroke="#D8D2C8" strokeWidth="14" strokeLinecap="round" />
      <circle cx="76" cy="302" r="20" fill="#5D7D47" />
      <circle cx="540" cy="294" r="28" fill="#5F814C" />
      <defs>
        <linearGradient id="villaSky" x1="320" y1="0" x2="320" y2="270" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C5DAF3" />
          <stop offset="1" stopColor="#F7E7C8" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function PlotsScene() {
  return (
    <svg viewBox="0 0 640 420" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <rect width="640" height="420" fill="url(#plotsSky)" />
      <rect y="108" width="640" height="312" fill="#7FA54F" />
      <path d="M0 164H640" stroke="#E6E0C7" strokeWidth="10" />
      <path d="M0 266H640" stroke="#E6E0C7" strokeWidth="10" />
      <path d="M182 108V420" stroke="#E6E0C7" strokeWidth="10" />
      <path d="M358 108V420" stroke="#E6E0C7" strokeWidth="10" />
      <path d="M510 108V420" stroke="#E6E0C7" strokeWidth="10" />
      <path d="M0 350L640 28" stroke="#D8D2BC" strokeWidth="18" />
      <path d="M-10 78L650 400" stroke="#D8D2BC" strokeWidth="18" />
      <path d="M0 126C96 146 156 166 226 194C302 224 382 222 476 196C540 178 584 154 640 132V420H0V126Z" fill="#6E9240" opacity="0.42" />
      <defs>
        <linearGradient id="plotsSky" x1="320" y1="0" x2="320" y2="126" gradientUnits="userSpaceOnUse">
          <stop stopColor="#BEDAF7" />
          <stop offset="1" stopColor="#E6F1F8" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function CommercialScene() {
  return (
    <svg viewBox="0 0 640 420" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <rect width="640" height="420" fill="url(#commercialSky)" />
      <rect y="308" width="640" height="112" fill="#B9C8D5" />
      <path d="M0 348C112 332 248 336 332 346C420 356 520 362 640 338V420H0V348Z" fill="#8393A2" />
      <path d="M118 152L188 112H286V308H118V152Z" fill="#C7D0DB" />
      <path d="M262 126L336 92H454V308H262V126Z" fill="#AFBBC9" />
      <path d="M416 148L482 108H586V308H416V148Z" fill="#C0CAD5" />
      <path d="M188 112L236 92H336L286 112H188Z" fill="#E7EDF3" />
      <path d="M482 108L528 88H620L586 108H482Z" fill="#E8EEF4" />
      {Array.from({ length: 30 }).map((_, index) => {
        const row = Math.floor(index / 5);
        const col = index % 5;
        return (
          <rect
            key={`c1-${index}`}
            x={140 + col * 28}
            y={138 + row * 28}
            width="18"
            height="18"
            rx="2"
            fill="#7D96B0"
          />
        );
      })}
      {Array.from({ length: 35 }).map((_, index) => {
        const row = Math.floor(index / 5);
        const col = index % 5;
        return (
          <rect
            key={`c2-${index}`}
            x={292 + col * 26}
            y={118 + row * 26}
            width="16"
            height="16"
            rx="2"
            fill={row > 4 ? "#E7B86B" : "#85A1BE"}
          />
        );
      })}
      {Array.from({ length: 24 }).map((_, index) => {
        const row = Math.floor(index / 4);
        const col = index % 4;
        return (
          <rect
            key={`c3-${index}`}
            x={448 + col * 28}
            y={132 + row * 28}
            width="18"
            height="18"
            rx="2"
            fill="#86A2C2"
          />
        );
      })}
      <defs>
        <linearGradient id="commercialSky" x1="320" y1="0" x2="320" y2="308" gradientUnits="userSpaceOnUse">
          <stop stopColor="#BCD5F5" />
          <stop offset="0.62" stopColor="#EAF1FB" />
          <stop offset="1" stopColor="#F6EAD8" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function FarmlandsScene() {
  return (
    <svg viewBox="0 0 640 420" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <rect width="640" height="420" fill="url(#farmSky)" />
      <circle cx="118" cy="98" r="62" fill="url(#farmSun)" />
      <path d="M0 206C90 164 182 158 268 188C332 210 418 210 492 180C540 160 590 148 640 150V420H0V206Z" fill="#90AF56" />
      <path d="M0 268C124 230 240 234 320 264C388 290 470 294 640 238V420H0V268Z" fill="#73954B" />
      <path d="M0 318C116 292 202 298 282 322C378 352 484 360 640 316V420H0V318Z" fill="#55743E" />
      <path d="M46 328H202" stroke="#7D613A" strokeWidth="12" strokeLinecap="round" />
      <path d="M70 286V350" stroke="#7D613A" strokeWidth="10" strokeLinecap="round" />
      <path d="M124 278V346" stroke="#7D613A" strokeWidth="10" strokeLinecap="round" />
      <path d="M178 288V352" stroke="#7D613A" strokeWidth="10" strokeLinecap="round" />
      <path d="M396 248C420 214 452 192 488 188C512 186 536 198 546 220C556 244 544 278 512 300C474 326 424 336 384 320C350 306 334 274 346 246C358 222 376 208 396 200" fill="#6F8F45" />
      <path d="M404 248C420 236 434 218 438 198" stroke="#59753B" strokeWidth="5" strokeLinecap="round" />
      <defs>
        <linearGradient id="farmSky" x1="320" y1="0" x2="320" y2="224" gradientUnits="userSpaceOnUse">
          <stop stopColor="#DDE7F4" />
          <stop offset="0.52" stopColor="#F5EED6" />
          <stop offset="1" stopColor="#F9F2D7" />
        </linearGradient>
        <radialGradient id="farmSun" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(118 98) rotate(90) scale(62)">
          <stop stopColor="#FFF4C4" />
          <stop offset="1" stopColor="#FFF4C4" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}

function LuxuryScene() {
  return (
    <svg viewBox="0 0 640 420" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <rect width="640" height="420" fill="url(#luxurySky)" />
      <rect y="286" width="640" height="134" fill="#6D8955" />
      <path d="M0 332C102 318 176 300 238 282C316 260 402 258 498 286C556 302 600 320 640 336V420H0V332Z" fill="#5B7345" />
      <rect x="176" y="142" width="312" height="148" fill="#E9EBED" />
      <rect x="244" y="94" width="268" height="104" fill="#EEF0F1" />
      <rect x="210" y="196" width="110" height="94" fill="#504541" />
      <rect x="340" y="194" width="124" height="74" fill="#5D4632" />
      <rect x="278" y="122" width="94" height="54" fill="#75635B" />
      <rect x="388" y="122" width="88" height="54" fill="#75635B" />
      <rect x="146" y="268" width="222" height="64" rx="14" fill="#73A8C2" />
      <path d="M176 332H436" stroke="#CFC6BB" strokeWidth="14" strokeLinecap="round" />
      <circle cx="534" cy="278" r="26" fill="#5D7C48" />
      <defs>
        <linearGradient id="luxurySky" x1="320" y1="0" x2="320" y2="286" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C3D7EE" />
          <stop offset="0.58" stopColor="#EAF0F8" />
          <stop offset="1" stopColor="#F7E8D1" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function AuctionsScene() {
  return (
    <svg viewBox="0 0 640 420" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <rect width="640" height="420" fill="url(#auctionBg)" />
      <rect x="0" y="0" width="640" height="420" fill="url(#auctionOverlay)" />
      <rect x="398" y="202" width="136" height="90" fill="#F7E9D2" />
      <path d="M422 218L466 190L510 218V286H422V218Z" fill="#F5F3EF" />
      <path d="M438 286V246H466V286" fill="#C1A27F" />
      <rect x="478" y="236" width="18" height="18" fill="#C8B7A2" />
      <rect x="436" y="230" width="18" height="18" fill="#C8B7A2" />
      <rect x="112" y="258" width="196" height="28" rx="14" transform="rotate(-14 112 258)" fill="#4E2B18" />
      <rect x="244" y="152" width="108" height="72" rx="16" transform="rotate(26 244 152)" fill="#6A3A1F" />
      <rect x="230" y="170" width="80" height="36" rx="12" transform="rotate(26 230 170)" fill="#7B4725" />
      <circle cx="160" cy="304" r="74" fill="#5E311B" />
      <circle cx="160" cy="304" r="48" fill="#734224" />
      <rect x="330" y="88" width="192" height="108" rx="14" fill="rgba(84, 57, 38, 0.48)" />
      <text x="362" y="152" fill="#EBD8B8" fontFamily="Poppins, Arial, sans-serif" fontSize="44" fontWeight="700">
        AUCTION
      </text>
      <defs>
        <linearGradient id="auctionBg" x1="320" y1="0" x2="320" y2="420" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4D3124" />
          <stop offset="0.48" stopColor="#7D5338" />
          <stop offset="1" stopColor="#4A2D21" />
        </linearGradient>
        <linearGradient id="auctionOverlay" x1="0" y1="0" x2="640" y2="420" gradientUnits="userSpaceOnUse">
          <stop stopColor="rgba(255,255,255,0.06)" />
          <stop offset="1" stopColor="rgba(0,0,0,0.18)" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default CategoryMatrix;
