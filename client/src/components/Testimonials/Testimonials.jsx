import {
  ContentSection,
  SectionDescription,
  SectionHeading,
  SectionKicker,
  SectionTitle,
} from "../../pages/Home/HomeStyles";
import { Avatar, Card, Grid, Rating } from "./TestimonialsStyles";

function Testimonials({
  title = "Testimonials",
  description = "Real feedback from people using the platform for buying, renting, and auctions.",
  items = [],
}) {
  return (
    <ContentSection as="section" id="testimonials" $soft>
      <SectionHeading>
        <SectionKicker>Testimonials</SectionKicker>
        <SectionTitle>{title}</SectionTitle>
        <SectionDescription>{description}</SectionDescription>
      </SectionHeading>

      <Grid>
        {items.map((item) => (
          <Card key={item.name}>
            <Avatar>{item.name.charAt(0)}</Avatar>
            <Rating>{"\u2605\u2605\u2605\u2605\u2605"}</Rating>
            <p>"{item.quote}"</p>
            <strong>{item.name}</strong>
            <span>{item.role}</span>
          </Card>
        ))}
      </Grid>
    </ContentSection>
  );
}

export default Testimonials;
