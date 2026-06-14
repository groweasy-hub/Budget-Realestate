import { rentOverviewCards, rentPropertyRows } from "../../../../data/admin/rentPropertiesData";
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

const rentColumns = [
  { key: "property", label: "Property" },
  { key: "id", label: "Property ID" },
  { key: "type", label: "Type" },
  { key: "location", label: "Location" },
  { key: "rent", label: "Rent (Monthly)" },
  { key: "deposit", label: "Deposit" },
  { key: "bedsBaths", label: "Beds / Baths" },
  { key: "views", label: "Views" },
  { key: "interest", label: "Interest" },
  { key: "status", label: "Status" },
];

const rentFilters = [
  { label: "Property Type", value: "All Types" },
  { label: "Status", value: "All Status" },
  { label: "Rent Range", value: "All Ranges" },
  { label: "Furnishing", value: "Any" },
  { label: "Bedrooms", value: "Any" },
];

function RentPropertiesSection() {
  return (
    <>
      <SimpleMetricsGrid>
        {rentOverviewCards.map((item) => (
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
        columns={rentColumns}
        filters={rentFilters}
        rows={rentPropertyRows}
        totalProperties={rentPropertyRows.length}
      />
    </>
  );
}

export default RentPropertiesSection;
