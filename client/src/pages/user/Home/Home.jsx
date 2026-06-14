import CategoryMatrix from "../../../components/user/CategoryMatrix/CategoryMatrix";
import BudgetCalculator from "../../../components/user/BudgetCalculator/BudgetCalculator";
import ContactCTA from "../../../components/user/ContactCTA/ContactCTA";

import FeaturedProperties from "../../../components/user/FeaturedProperties/FeaturedProperties";
import Hero from "../../../components/user/Hero/Hero";
import Navbar from "../../../components/user/Navbar/Navbar";

import TrendingLocations from "../../../components/user/TrendingLocations/TrendingLocations";
import WhyChooseUs from "../../../components/user/WhyChooseUs/WhyChooseUs";
import {
  budgetCalculatorSummary,
  categoryMatrix,
  contactCtaSection,
  featuredProperties,
  locations,
  siteNavbar,
  whyChooseSection,
} from "../../../data/user/HomePageContent";

import { HeroNavWrap, HeroStage, PageShell, PageStack } from "./HomeStyles";

function Home() {
  return (
    <PageShell>
      <HeroStage>
        <HeroNavWrap>
          <Navbar
            links={siteNavbar.links}
            ctaLabel={siteNavbar.ctaLabel}
            transparentDesktop
          />
        </HeroNavWrap>
        <Hero activeTab="buy" />
      </HeroStage>
      <PageStack>
        <CategoryMatrix items={categoryMatrix} />
        <FeaturedProperties properties={featuredProperties} />
        <TrendingLocations locations={locations} />
        <BudgetCalculator summary={budgetCalculatorSummary} />
        <WhyChooseUs {...whyChooseSection} />
        <ContactCTA {...contactCtaSection} />
      </PageStack>
    </PageShell>
  );
}

export default Home;

