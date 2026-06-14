import { auctionOverviewCards, auctionPropertyRows } from "../../../../data/admin/auctionPropertiesData";
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

function AuctionDateCell({ value }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "flex-start", gap: 8, minWidth: 112 }}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ marginTop: 1 }}>
        <rect x="3.5" y="4.5" width="17" height="16" rx="2.2" stroke="#18233D" strokeWidth="1.7" />
        <path d="M7 2.8v3.4M17 2.8v3.4M3.5 9h17" stroke="#18233D" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
      <span style={{ display: "grid", gap: 5 }}>
        <strong style={{ color: "#18233d", fontSize: 13, fontWeight: 600 }}>{value.date}</strong>
        <span style={{ color: "#18233d", fontSize: 12, fontWeight: 500 }}>{value.time}</span>
      </span>
    </div>
  );
}

function CurrentBidCell({ value }) {
  return (
    <span style={{ display: "grid", gap: 5, minWidth: 92 }}>
      <strong style={{ color: value.neutral ? "#18233d" : "#159447", fontSize: 13, fontWeight: 800 }}>
        {value.value}
      </strong>
      <span style={{ color: value.neutral ? "#18233d" : "#159447", fontSize: 12, fontWeight: 700 }}>
        {value.change}
      </span>
    </span>
  );
}

const auctionColumns = [
  { key: "property", label: "Property" },
  { key: "id", label: "Property ID" },
  { key: "type", label: "Type" },
  { key: "location", label: "Location" },
  { key: "auctionDate", label: "Auction Date", render: (row) => <AuctionDateCell value={row.auctionDate} /> },
  { key: "startingPrice", label: "Starting Price" },
  { key: "currentBid", label: "Current Bid", render: (row) => <CurrentBidCell value={row.currentBid} /> },
  { key: "bids", label: "Bids" },
  { key: "status", label: "Status" },
];

const auctionFilters = [
  { label: "Property Type", value: "All Types" },
  { label: "Status", value: "All Status" },
  { label: "Auction Date", value: "All Dates" },
  { label: "Bid Status", value: "All" },
  { label: "Price Range", value: "All Prices" },
  { label: "Location", value: "All Locations" },
];

function AuctionPropertiesSection() {
  return (
    <>
      <SimpleMetricsGrid>
        {auctionOverviewCards.map((item) => (
          <SimpleMetricCard key={item.label}>
            <MetricIcon $bg={item.bg}>
              <OverviewIcon type={item.icon} />
            </MetricIcon>
            <SimpleMetricCopy>
              <SimpleMetricLabel>{item.label}</SimpleMetricLabel>
              <div style={{ display: "flex", alignItems: "baseline", gap: 16, flexWrap: "wrap" }}>
                <SimpleMetricValue>{item.value}</SimpleMetricValue>
                <span style={{ color: "#159447", fontSize: 13, fontWeight: 800 }}>{item.delta}</span>
              </div>
            </SimpleMetricCopy>
          </SimpleMetricCard>
        ))}
      </SimpleMetricsGrid>

      <PropertyManagementTable
        columns={auctionColumns}
        filters={auctionFilters}
        rows={auctionPropertyRows}
        totalProperties={auctionPropertyRows.length}
        primaryActionLabel="Add New Auction Property"
      />
    </>
  );
}

export default AuctionPropertiesSection;
