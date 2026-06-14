import { reportAgents, revenueDetails, revenueStats, transactionRows } from "../../../../data/admin/reportsData";
import { useMemo, useState } from "react";
import {
  AgentItem,
  AgentList,
  DonutGrid,
  FilterButton,
  FilterField,
  FilterStrip,
  FooterPager,
  Grid,
  LargeTable,
  Legend,
  LegendItem,
  Medal,
  PageButton,
  PagerControls,
  Panel,
  PanelHeader,
  PanelTitle,
  Select,
  SelectWrap,
  SmallText,
  StatCard,
  StatGrid,
  StatusBadge,
  StrongText,
  SummaryList,
  SummaryRow,
  Table,
  TableScroll,
  ViewLink,
} from "./ReportsStyles";
import { BarChart, DonutChart, Icon, LineChart, PersonAvatar, Stat } from "./ReportsVisuals";

const revenueGradient = "conic-gradient(#07833e 0 48%, #176cf0 48% 77%, #9a54ed 77% 91%, #ff9d18 91% 97%, #b9c0ca 97% 100%)";
const revenueTypes = [
  { label: "Residential", value: "₹ 1.68 Cr (48%)", color: "#07833e" },
  { label: "Commercial", value: "₹ 1.02 Cr (29%)", color: "#176cf0" },
  { label: "Luxury", value: "₹ 0.48 Cr (14%)", color: "#9a54ed" },
  { label: "Rental", value: "₹ 0.22 Cr (6%)", color: "#ff9d18" },
  { label: "Others", value: "₹ 0.08 Cr (3%)", color: "#b9c0ca" },
];

function RevenueReportsSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;
  const totalEntries = revenueDetails.length;
  const totalPages = Math.ceil(totalEntries / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const visibleRevenueDetails = useMemo(
    () => revenueDetails.slice(startIndex, startIndex + pageSize),
    [startIndex],
  );
  const fromRecord = totalEntries === 0 ? 0 : startIndex + 1;
  const toRecord = Math.min(startIndex + pageSize, totalEntries);

  return (
    <>
      <FilterStrip>
        {[
          ["Date Range", "18 May 2025 - 25 May 2025"],
          ["Property Type", "All Types"],
          ["Transaction Type", "All Transactions"],
          ["Agent / Advisor", "All Agents"],
          ["Location", "All Locations"],
        ].map(([label, value]) => (
          <FilterField key={label}>{label}<SelectWrap><Select defaultValue={value}><option>{value}</option></Select></SelectWrap></FilterField>
        ))}
        <FilterButton><Icon name="filter" size={15} />Filters</FilterButton>
        <FilterButton style={{ color: "#07833e", border: 0 }}><Icon name="reset" size={15} />Reset</FilterButton>
      </FilterStrip>

      <StatGrid $count={5}>{revenueStats.map((item) => <StatCard key={item.label}><Stat item={item} /></StatCard>)}</StatGrid>

      <Grid $cols="1.3fr 0.9fr 0.7fr">
        <Panel>
          <PanelHeader><PanelTitle>Revenue Overview</PanelTitle><SelectWrap><Select defaultValue="Daily"><option>Daily</option></Select></SelectWrap></PanelHeader>
          <Legend><LegendItem $color="#07833e">Total Revenue</LegendItem><LegendItem $color="#176cf0">Net Revenue</LegendItem><LegendItem $color="#9a54ed">Commission</LegendItem></Legend>
          <LineChart revenue multi />
        </Panel>
        <Panel><PanelHeader><PanelTitle>Revenue by Property Type</PanelTitle></PanelHeader><DonutGrid><DonutChart total="₹ 3.48 Cr" items={revenueTypes} gradient={revenueGradient} /></DonutGrid></Panel>
        <Panel>
          <PanelHeader><PanelTitle>Revenue Summary</PanelTitle></PanelHeader>
          <SummaryList>
            <SummaryRow><span>Gross Revenue</span><strong>₹ 3.48 Cr</strong></SummaryRow>
            <SummaryRow><span>Discounts / Offers</span><strong style={{ color: "#ef3d31" }}>- ₹ 0.32 Cr</strong></SummaryRow>
            <SummaryRow><span>Taxes Collected</span><strong>₹ 0.57 Cr</strong></SummaryRow>
            <SummaryRow $highlight $bold><span>Net Revenue</span><strong style={{ color: "#07833e" }}>₹ 2.91 Cr</strong></SummaryRow>
            <SummaryRow><span>Commission Paid</span><strong style={{ color: "#ef3d31" }}>- ₹ 0.57 Cr</strong></SummaryRow>
            <SummaryRow $highlight $bold><span>Net Profit</span><strong style={{ color: "#07833e" }}>₹ 2.34 Cr</strong></SummaryRow>
          </SummaryList>
        </Panel>
      </Grid>

      <Grid $cols="0.9fr 1.1fr 0.95fr">
        <Panel>
          <PanelHeader><PanelTitle>Revenue by Transaction Type</PanelTitle></PanelHeader>
          <TableScroll>
            <Table $minWidth="520px"><thead><tr><th>Transaction Type</th><th>Transactions</th><th>Gross Revenue</th><th>Net Revenue</th></tr></thead><tbody>{transactionRows.map((row) => <tr key={row[0]}>{row.map((cell) => <td key={cell}>{cell}</td>)}</tr>)}</tbody></Table>
          </TableScroll>
        </Panel>
        <Panel>
          <PanelHeader><PanelTitle>Monthly Revenue Trend</PanelTitle><SelectWrap><Select defaultValue="Monthly"><option>Monthly</option></Select></SelectWrap></PanelHeader>
          <Legend><LegendItem $color="#07833e">Gross Revenue</LegendItem><LegendItem $color="#176cf0">Net Revenue</LegendItem></Legend>
          <BarChart />
        </Panel>
        <Panel>
          <PanelHeader><PanelTitle>Top Revenue Generating Agents</PanelTitle><ViewLink>View All</ViewLink></PanelHeader>
          <AgentList>{reportAgents.map((agent, index) => (
            <AgentItem key={agent.name}>
              <Medal $type={agent.medal}>{index + 1}</Medal>
              <PersonAvatar type={agent.avatar} />
              <StrongText>{agent.name}</StrongText>
              <SmallText>{[68, 56, 48, 42, 38][index]}</SmallText>
              <StrongText>{["₹ 68.4 Lakh", "₹ 56.2 Lakh", "₹ 48.7 Lakh", "₹ 42.1 Lakh", "₹ 38.6 Lakh"][index]}</StrongText>
            </AgentItem>
          ))}</AgentList>
        </Panel>
      </Grid>

      <Panel>
        <PanelHeader><PanelTitle>Revenue Details</PanelTitle></PanelHeader>
        <TableScroll>
          <LargeTable>
            <thead><tr>{["Date", "Transaction ID", "Property", "Transaction Type", "Customer", "Agent / Advisor", "Gross Amount", "Discount", "Tax", "Net Amount", "Commission", "Net Profit", "Status"].map((h) => <th key={h}>{h}</th>)}</tr></thead>
            <tbody>{visibleRevenueDetails.map((row) => <tr key={row[1]}>{row.map((cell, index) => <td key={`${row[1]}-${index}`}>{index === row.length - 1 ? <StatusBadge $pending={cell === "Pending"}>{cell}</StatusBadge> : cell}</td>)}</tr>)}</tbody>
          </LargeTable>
        </TableScroll>
        <FooterPager>
          <SmallText>Showing {fromRecord} to {toRecord} of {totalEntries} entries</SmallText>
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

export default RevenueReportsSection;
