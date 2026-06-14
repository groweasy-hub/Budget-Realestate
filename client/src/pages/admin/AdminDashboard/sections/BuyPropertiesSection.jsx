import { buyOverviewCards, buyPropertyRows } from "../../../../data/admin/buyPropertiesData";
import {
  MetricIcon,
  SimpleMetricCard,
  SimpleMetricCopy,
  SimpleMetricLabel,
  SimpleMetricValue,
  SimpleMetricsGrid,
} from "../AdminDashboardStyles";
import OverviewIcon from "../components/OverviewIcon";
import PropertyManagementTable from "../components/PropertyManagementTable";

const buyColumns = [
  { key: "property", label: "Property" },
  { key: "id", label: "Property ID" },
  { key: "type", label: "Type" },
  { key: "location", label: "Location" },
  { key: "price", label: "Price" },
  { key: "bedsBaths", label: "Beds / Baths" },
  { key: "views", label: "Views" },
  { key: "interest", label: "Interest" },
  { key: "status", label: "Status" },
];

const buyFilters = [
  { label: "Property Type", value: "All Types" },
  { label: "Status", value: "All Status" },
  { label: "Price Range", value: "All Prices" },
  { label: "Bedrooms", value: "Any" },
];

function BuyPropertiesSection() {
  return (
    <>
      <SimpleMetricsGrid>
        {buyOverviewCards.map((item) => (
          <SimpleMetricCard key={item.label}>
            <MetricIcon $bg={item.bg}>
              <OverviewIcon type={item.icon} />
            </MetricIcon>
            <SimpleMetricCopy>
              <SimpleMetricLabel>{item.label}</SimpleMetricLabel>
              <SimpleMetricValue>{item.value}</SimpleMetricValue>
            </SimpleMetricCopy>
          </SimpleMetricCard>
        ))}
      </SimpleMetricsGrid>

      <PropertyManagementTable
        columns={buyColumns}
        filters={buyFilters}
        rows={buyPropertyRows}
        totalProperties={buyPropertyRows.length}
      />
    </>
  );
}

export default BuyPropertiesSection;
