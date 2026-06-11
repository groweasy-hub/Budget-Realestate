import {
  ContentSection,
  SectionDescription,
  SectionHeading,
  SectionKicker,
  SectionTitle,
} from "../../pages/Home/HomeStyles";
import { Card, Grid, ServiceIcon } from "./ServicesCardStyles";

function ServicesCard({
  title = "Property Services",
  description = "Premium support modules designed to reduce risk and help users close with clarity.",
  items = [],
}) {
  return (
    <ContentSection as="section" id="services-grid" $soft>
      <SectionHeading>
        <SectionKicker>Services</SectionKicker>
        <SectionTitle>{title}</SectionTitle>
        <SectionDescription>{description}</SectionDescription>
      </SectionHeading>

      <Grid>
        {items.map((item) => (
          <Card key={item.title}>
            <ServiceIcon>{item.title.charAt(0)}</ServiceIcon>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </Card>
        ))}
      </Grid>
    </ContentSection>
  );
}

export default ServicesCard;
