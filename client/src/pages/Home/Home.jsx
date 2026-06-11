import CategoryMatrix from "../../components/CategoryMatrix/CategoryMatrix";
import BudgetCalculator from "../../components/BudgetCalculator/BudgetCalculator";
import ContactCTA from "../../components/ContactCTA/ContactCTA";

import FeaturedProperties from "../../components/FeaturedProperties/FeaturedProperties";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";

import TrendingLocations from "../../components/TrendingLocations/TrendingLocations";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import {
  budgetCalculatorSummary,
  categoryMatrix,
  contactCtaSection,
  featuredProperties,
  locations,
  siteNavbar,
  whyChooseSection,
} from "../../data/HomePageContent";

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
