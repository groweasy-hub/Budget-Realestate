import { useParams } from "react-router-dom";
import BudgetCalculator from "../../components/BudgetCalculator/BudgetCalculator";
import ContactCTA from "../../components/ContactCTA/ContactCTA";
import Navbar from "../../components/Navbar/Navbar";
import { siteNavbar } from "../../data/HomePageContent";
import {
  auctionProperties,
  featuredProperties,
  rentalProperties,
} from "../../data/pageContent";
import {
  ContentSection,
  NavWrap,
  PageShell,
  PageStack,
  SectionDescription,
  SectionHeading,
  SectionKicker,
  SectionTitle,
} from "../Home/HomeStyles";
import {
  ActionLink,
  DetailActions,
  DetailCard,
  DetailHero,
  DetailMeta,
  DetailMetaCard,
  OverviewCard,
  OverviewGrid,
} from "./PropertyDetailsStyles";

const allProperties = [
  ...featuredProperties,
  ...rentalProperties,
  ...auctionProperties,
];

function PropertyDetails() {
  const { propertyId } = useParams();
  const property =
    allProperties.find((item) => item.id === propertyId) || allProperties[0];

  return (
    <PageShell>
      <NavWrap>
        <Navbar links={siteNavbar.links} ctaLabel={siteNavbar.ctaLabel} />
      </NavWrap>
      <DetailHero>
        <DetailCard>
          <SectionKicker>{property.badge}</SectionKicker>
          <h1>{property.title}</h1>
          <p>{property.location}</p>
          <DetailMeta>
            <DetailMetaCard>
              <span>Price</span>
              <strong>{property.price}</strong>
            </DetailMetaCard>
            <DetailMetaCard>
              <span>Budget Cue</span>
              <strong>{property.emi}</strong>
            </DetailMetaCard>
            <DetailMetaCard>
              <span>Area</span>
              <strong>{property.area}</strong>
            </DetailMetaCard>
          </DetailMeta>
          <DetailActions>
            <ActionLink to="/buy">Explore More Properties</ActionLink>
            <ActionLink to="/services" $ghost>
              Request Assistance
            </ActionLink>
          </DetailActions>
        </DetailCard>
      </DetailHero>

      <PageStack>
        <ContentSection as="section">
          <SectionHeading>
            <SectionKicker>Property Overview</SectionKicker>
            <SectionTitle>What makes this property worth a closer look</SectionTitle>
            <SectionDescription>
              A clean summary of price context, usable area, and the kind of buyer
              or investor this listing suits best.
            </SectionDescription>
          </SectionHeading>

          <OverviewGrid>
            <OverviewCard>
              <h3>Affordability Snapshot</h3>
              <p>{property.emi} helps frame the expected financial commitment.</p>
            </OverviewCard>
            <OverviewCard>
              <h3>Location Advantage</h3>
              <p>{property.location} remains a strong option for budget-aware decision making.</p>
            </OverviewCard>
            <OverviewCard>
              <h3>Ideal For</h3>
              <p>Buyers seeking transparent pricing, verified context, and support services under one roof.</p>
            </OverviewCard>
          </OverviewGrid>
        </ContentSection>

        <BudgetCalculator
          title="Estimate Financing Comfort"
          description="Use this model snapshot as a quick guide before speaking with an expert."
          summary={{
            propertyPrice: property.price,
            downPayment: "Rs 15,00,000",
            interestRate: "8.4%",
            tenure: "20 Years",
            emi: property.emi,
            totalCost: "Based on bank terms",
            affordability: "Needs review",
          }}
        />

        <ContactCTA
          title="Want Help Reviewing This Property?"
          description="We can help with verification, paperwork, valuation, and smarter budget comparison."
        />
      </PageStack>
    </PageShell>
  );
}

export default PropertyDetails;
