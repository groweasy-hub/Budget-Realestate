import { analyticsDonuts, analyticsStats, quickInsights, reportAgents, topLocations } from "../../../../data/admin/reportsData";
import {
  AgentItem,
  AgentList,
  DonutGrid,
  FilterButton,
  FilterStrip,
  Grid,
  Legend,
  LegendItem,
  Medal,
  Panel,
  PanelHeader,
  PanelTitle,
  RangeTab,
  RangeTabs,
  Select,
  SelectWrap,
  SmallText,
  StatCard,
  StatGrid,
  StrongText,
  Table,
  TableScroll,
  ViewLink,
} from "./ReportsStyles";
import { BarChart, DonutChart, Icon, LineChart, PersonAvatar, Stat } from "./ReportsVisuals";

const typeGradient = "conic-gradient(#07833e 0 56%, #176cf0 56% 78%, #9a54ed 78% 90%, #ff9d18 90% 97%, #b9c0ca 97% 100%)";
const statusGradient = "conic-gradient(#07833e 0 45%, #176cf0 45% 70%, #9a54ed 70% 85%, #ff9d18 85% 95%, #b9c0ca 95% 100%)";
const sourceGradient = "conic-gradient(#07833e 0 45%, #176cf0 45% 70%, #9a54ed 70% 85%, #ff9d18 85% 95%, #b9c0ca 95% 100%)";

function AnalyticsSection() {
  return (
    <>
      <FilterStrip $analytics>
        <RangeTabs>
          {["7D", "30D", "90D", "1Y", "Custom"].map((item) => <RangeTab key={item} $active={item === "30D"}>{item}</RangeTab>)}
        </RangeTabs>
        {["All Properties", "All Agents", "All Locations", "All Property Types"].map((item) => (
          <SelectWrap key={item}><Select defaultValue={item}><option>{item}</option></Select></SelectWrap>
        ))}
        <FilterButton><Icon name="filter" size={15} />Filters</FilterButton>
      </FilterStrip>

      <StatGrid $count={6}>
        {analyticsStats.map((item) => <StatCard key={item.label}><Stat item={item} /></StatCard>)}
      </StatGrid>

      <Grid $cols="1.35fr 1.05fr 0.85fr">
        <Panel>
          <PanelHeader><PanelTitle>Overview Trend</PanelTitle></PanelHeader>
          <Legend><LegendItem $color="#07833e">Views</LegendItem><LegendItem $color="#176cf0">Leads</LegendItem><LegendItem $color="#8b4de8">Site Visits</LegendItem><LegendItem $color="#ff7b17">Conversions</LegendItem></Legend>
          <LineChart multi />
        </Panel>
        <Panel>
          <PanelHeader><PanelTitle>Leads & Conversions</PanelTitle><SelectWrap><Select defaultValue="Daily"><option>Daily</option></Select></SelectWrap></PanelHeader>
          <Legend><LegendItem $color="#07833e">Leads</LegendItem><LegendItem $color="#176cf0">Conversions</LegendItem></Legend>
          <BarChart />
        </Panel>
        <Panel>
          <PanelHeader><PanelTitle>Top Performing Agents</PanelTitle><ViewLink>View All</ViewLink></PanelHeader>
          <AgentList>{reportAgents.map((agent, index) => (
            <AgentItem key={agent.name}>
              <Medal $type={agent.medal}>{index + 1}</Medal>
              <PersonAvatar type={agent.avatar} />
              <StrongText>{agent.name}</StrongText>
              <SmallText>{agent.leads}</SmallText>
              <StrongText>{agent.revenue}</StrongText>
            </AgentItem>
          ))}</AgentList>
        </Panel>
      </Grid>

      <Grid $cols="1fr 1fr 0.9fr 1fr">
        <Panel><PanelHeader><PanelTitle>Property Type Performance</PanelTitle></PanelHeader><DonutGrid><DonutChart total="1,248" items={analyticsDonuts.propertyType} gradient={typeGradient} /></DonutGrid></Panel>
        <Panel><PanelHeader><PanelTitle>Property Status Distribution</PanelTitle></PanelHeader><DonutGrid><DonutChart total="1,248" items={analyticsDonuts.status} gradient={statusGradient} /></DonutGrid></Panel>
        <Panel>
          <PanelHeader><PanelTitle>Revenue Overview</PanelTitle></PanelHeader>
          <div style={{ color: "#08112f", fontSize: 28, fontWeight: 800, marginTop: 24 }}>₹ 3.48 Cr</div>
          <SmallText style={{ marginTop: 12 }}>Total Revenue</SmallText>
          <div style={{ color: "#07833e", fontSize: 11, fontWeight: 800, marginTop: 14 }}>↑ 21.6% vs Last 30 Days</div>
          <LineChart />
        </Panel>
        <Panel><PanelHeader><PanelTitle>Leads by Source</PanelTitle></PanelHeader><DonutGrid><DonutChart total="2,456" items={analyticsDonuts.source} gradient={sourceGradient} /></DonutGrid></Panel>
      </Grid>

      <Grid $cols="0.95fr 1.15fr 0.9fr">
        <Panel>
          <PanelHeader><PanelTitle>Top Locations by Views</PanelTitle></PanelHeader>
          <TableScroll>
            <Table $minWidth="520px"><thead><tr><th></th><th>Location</th><th>Views</th><th>Properties</th><th>Leads</th></tr></thead><tbody>{topLocations.map((row, index) => <tr key={row[0]}><td>{index + 1}</td><td>{row[0]}</td><td>{row[1]}</td><td>{row[2]}</td><td>{row[3]}</td></tr>)}</tbody></Table>
          </TableScroll>
        </Panel>
        <Panel>
          <PanelHeader><PanelTitle>Monthly Performance Overview</PanelTitle><SelectWrap><Select defaultValue="Monthly"><option>Monthly</option></Select></SelectWrap></PanelHeader>
          <Legend><LegendItem $color="#07833e">Views</LegendItem><LegendItem $color="#176cf0">Leads</LegendItem><LegendItem $color="#9a54ed">Conversions</LegendItem></Legend>
          <BarChart grouped />
        </Panel>
        <Panel>
          <PanelHeader><PanelTitle>Quick Insights</PanelTitle></PanelHeader>
          <div style={{ display: "grid", gap: 14 }}>{quickInsights.map((item) => (
            <div key={item.title} style={{ display: "grid", gridTemplateColumns: "42px 1fr", gap: 12, alignItems: "center", padding: "13px 14px", borderRadius: 8, background: item.bg }}>
              <div style={{ width: 34, height: 34, borderRadius: 999, display: "grid", placeItems: "center", color: item.color, background: "#fff" }}><Icon name={item.icon} size={20} /></div>
              <div><StrongText>{item.title}</StrongText><SmallText style={{ marginTop: 5 }}>{item.text}</SmallText></div>
            </div>
          ))}</div>
        </Panel>
      </Grid>
    </>
  );
}

export default AnalyticsSection;
