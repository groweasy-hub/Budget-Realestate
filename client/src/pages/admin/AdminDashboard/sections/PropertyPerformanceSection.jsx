import { propertyRows, propertyStats, propertyTopRows } from "../../../../data/admin/reportsData";
import { useMemo, useState } from "react";
import {
  DonutGrid,
  ExportButton,
  FilterButton,
  FilterField,
  FilterStrip,
  FooterPager,
  Grid,
  LargeTable,
  Legend,
  LegendItem,
  MiniCardGrid,
  MiniMetricCard,
  PageButton,
  PagerControls,
  Panel,
  PanelHeader,
  PanelTitle,
  PropertyCell,
  PropertyThumb,
  Select,
  SelectWrap,
  SmallText,
  SparklineWrap,
  StatCard,
  StatGrid,
  StatusBadge,
  StrongText,
  Table,
  TableScroll,
  ViewLink,
} from "./ReportsStyles";
import { DonutChart, Icon, LineChart, Sparkline, Stat } from "./ReportsVisuals";

const statusGradient = "conic-gradient(#07833e 0 51.4%, #176cf0 51.4% 84.4%, #ff9d18 84.4% 92.2%, #9a54ed 92.2% 96.5%, #b9c0ca 96.5% 100%)";
const statusItems = [
  { label: "For Sale", value: "642 (51.4%)", color: "#07833e" },
  { label: "For Rent", value: "412 (33.0%)", color: "#176cf0" },
  { label: "Under Offer", value: "98 (7.8%)", color: "#ff9d18" },
  { label: "Sold", value: "54 (4.3%)", color: "#9a54ed" },
  { label: "Inactive", value: "42 (3.4%)", color: "#b9c0ca" },
];

const miniCards = [
  ["Top Performing Property", "Sunshine Apartments", "Hyderabad", "6,542", "Views", "#07833e"],
  ["Highest Enquiries", "Green Park Villa", "Hyderabad", "156", "Enquiries", "#176cf0"],
  ["Best Conversion Rate", "Lakeview Residency", "Bangalore", "18.6%", "Conversion Rate", "#9a54ed"],
  ["Highest Revenue Property", "Royal Heights", "Hyderabad", "₹ 48.60 Lakh", "Total Revenue", "#ff7b17"],
  ["Most Shortlisted Property", "Sunshine Apartments", "Hyderabad", "248", "Shortlisted", "#07833e"],
];

function Stars({ value }) {
  const filled = Math.floor(Number(value));
  return <span style={{ color: "#ff9d18", fontSize: 15 }}>{"★".repeat(filled)}<span style={{ color: "#b9c0ca" }}>{"☆".repeat(5 - filled)}</span></span>;
}

function PropertyPerformanceSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;
  const totalProperties = propertyRows.length;
  const totalPages = Math.ceil(totalProperties / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const visiblePropertyRows = useMemo(
    () => propertyRows.slice(startIndex, startIndex + pageSize),
    [startIndex],
  );
  const fromRecord = totalProperties === 0 ? 0 : startIndex + 1;
  const toRecord = Math.min(startIndex + pageSize, totalProperties);

  return (
    <>
      <FilterStrip>
        {[
          ["Date Range", "18 May 2025 - 25 May 2025"],
          ["Property Status", "All Status"],
          ["Property Type", "All Types"],
          ["Purpose", "All Purpose"],
          ["Location", "All Locations"],
          ["Agent / Advisor", "All Agents"],
        ].map(([label, value]) => <FilterField key={label}>{label}<SelectWrap><Select defaultValue={value}><option>{value}</option></Select></SelectWrap></FilterField>)}
        <FilterButton><Icon name="filter" size={15} />Filters</FilterButton>
        <FilterButton style={{ color: "#07833e", border: 0 }}><Icon name="reset" size={15} />Reset</FilterButton>
      </FilterStrip>

      <StatGrid $count={6}>{propertyStats.map((item) => <StatCard key={item.label}><Stat item={item} /></StatCard>)}</StatGrid>

      <Grid $cols="1.2fr 0.9fr 0.85fr">
        <Panel>
          <PanelHeader><PanelTitle>Property Views Trend</PanelTitle><SelectWrap><Select defaultValue="Daily"><option>Daily</option></Select></SelectWrap></PanelHeader>
          <Legend><LegendItem $color="#07833e">Total Views</LegendItem><LegendItem $color="#176cf0">Unique Views</LegendItem></Legend>
          <LineChart property />
        </Panel>
        <Panel>
          <PanelHeader><PanelTitle>Top Performing Properties by Views</PanelTitle><ViewLink>View All</ViewLink></PanelHeader>
          <TableScroll>
            <Table $minWidth="560px"><thead><tr><th>Property</th><th>Views</th><th>Enquiries</th><th>Conversion Rate</th></tr></thead><tbody>{propertyTopRows.map((row) => <tr key={row[0]}><td><PropertyCell><PropertyThumb /><div><StrongText>{row[0]}</StrongText><SmallText>{row[1]}</SmallText></div></PropertyCell></td><td>{row[2]}</td><td>{row[3]}</td><td>{row[4]}</td></tr>)}</tbody></Table>
          </TableScroll>
        </Panel>
        <Panel><PanelHeader><PanelTitle>Performance by Property Status</PanelTitle></PanelHeader><DonutGrid><DonutChart total="1,248" items={statusItems} gradient={statusGradient} /></DonutGrid></Panel>
      </Grid>

      <MiniCardGrid>
        {miniCards.map((card) => (
          <MiniMetricCard key={card[0]}>
            <PanelTitle>{card[0]}</PanelTitle>
            <PropertyCell><PropertyThumb /><div><StrongText>{card[1]}</StrongText><SmallText>{card[2]}</SmallText></div></PropertyCell>
            <SparklineWrap><Sparkline color={card[5]} /></SparklineWrap>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end" }}><StrongText style={{ fontSize: 20 }}>{card[3]}</StrongText><SmallText>{card[4]}</SmallText></div>
          </MiniMetricCard>
        ))}
      </MiniCardGrid>

      <Panel>
        <PanelHeader><PanelTitle>Property Performance Overview</PanelTitle><ExportButton><Icon name="download" size={15} />Export</ExportButton></PanelHeader>
        <TableScroll>
          <LargeTable>
            <thead><tr>{["", "Property", "Property ID", "Type", "Purpose", "Location", "Status", "Views", "Enquiries", "Shortlisted", "Conversions", "Conversion Rate", "Revenue (₹)", "Performance Score", "Actions"].map((h) => <th key={h}>{h}</th>)}</tr></thead>
            <tbody>{visiblePropertyRows.map((row) => <tr key={row[2]}><td><input type="checkbox" /></td><td><PropertyCell><PropertyThumb /><div><StrongText>{row[0]}</StrongText><SmallText>{row[1]}</SmallText></div></PropertyCell></td>{row.slice(2, 13).map((cell, index) => <td key={`${row[2]}-${index}`}>{index === 4 ? <StatusBadge $pending={cell === "Under Offer"}>{cell}</StatusBadge> : cell}</td>)}<td><Stars value={row[13]} /></td><td><PageButton><Icon name="eye" size={14} /></PageButton></td></tr>)}</tbody>
          </LargeTable>
        </TableScroll>
        <FooterPager>
          <SmallText>Showing {fromRecord} to {toRecord} of {totalProperties} properties</SmallText>
          {totalPages > 1 ? (
            <PagerControls>
              <SelectWrap><Select defaultValue="6 per page"><option>6 per page</option></Select></SelectWrap>
              <PageButton type="button" disabled={currentPage === 1} onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}>‹</PageButton>
              {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                <PageButton key={page} type="button" $active={page === currentPage} $plain={page !== currentPage} onClick={() => setCurrentPage(page)}>{page}</PageButton>
              ))}
              <PageButton type="button" disabled={currentPage === totalPages} onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}>›</PageButton>
            </PagerControls>
          ) : null}
        </FooterPager>
      </Panel>
    </>
  );
}

export default PropertyPerformanceSection;
