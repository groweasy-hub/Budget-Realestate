import {
  ContentSection,
  SectionDescription,
  SectionHeading,
  SectionKicker,
  SectionTitle,
} from "../../pages/Home/HomeStyles";
import { Item, List } from "./FAQStyles";

function FAQ({
  title = "Frequently Asked Questions",
  description = "Quick answers for common buyer, renter, and service-related questions.",
  items = [],
}) {
  return (
    <ContentSection as="section" id="faq">
      <SectionHeading>
        <SectionKicker>FAQ</SectionKicker>
        <SectionTitle>{title}</SectionTitle>
        <SectionDescription>{description}</SectionDescription>
      </SectionHeading>

      <List>
        {items.map((item) => (
          <Item key={item.question}>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </Item>
        ))}
      </List>
    </ContentSection>
  );
}

export default FAQ;
