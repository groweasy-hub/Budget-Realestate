import {
  availabilityItems,
  leadRows,
  metricCards,
  propertyRows,
  trendPoints,
} from "../../../../data/admin/dashboardData";
import {
  AvailabilityBar,
  AvailabilityCard,
  AvailabilityItem,
  AvailabilityLegend,
  AvailabilityText,
  CardHeader,
  CardTitle,
  ChartCard,
  ChartGrid,
  DonutCenter,
  DonutWrap,
  Dot,
  FilterButton,
  LeadAvatar,
  LegendItem,
  LegendRow,
  MetricCard,
  MetricHeader,
  MetricIcon,
  MetricLabel,
  MetricValue,
  MetricsGrid,
  Pill,
  RevenueCard,
  RevenueStat,
  RevenueStats,
  RevenueTrend,
  StatusText,
  StyledTable,
  SubMetric,
  SubMetricRow,
  TableCard,
  TableGrid,
  TableScroll,
  Thumb,
  ThumbRow,
  TrendBadge,
  ViewAllButton,
} from "../AdminDashboardStyles";
import OverviewIcon from "../components/OverviewIcon";

function TrendChart() {
  return (
    <svg width="100%" height="220" viewBox="0 0 650 220" fill="none" aria-hidden="true">
      <path d="M20 24V186H626" stroke="#E8EDF4" strokeWidth="1.2" />
      {[48, 82, 116, 150].map((y) => (
        <path key={y} d={`M20 ${y}H626`} stroke="#F0F3F7" strokeWidth="1" />
      ))}
      {["100", "75", "50", "25", "0"].map((value, index) => (
        <text key={value} x="0" y={31 + index * 34} fill="#5D667A" fontSize="12">
          {value}
        </text>
      ))}
      {["18 May", "19 May", "20 May", "21 May", "22 May", "23 May", "24 May", "25 May"].map((label, index) => (
        <text key={label} x={20 + index * 85} y="204" fill="#263148" fontSize="12">
          {label}
        </text>
      ))}
      <polyline points={trendPoints.buy} stroke="#1A9850" strokeWidth="2.3" fill="none" />
      <polyline points={trendPoints.rent} stroke="#1F75FE" strokeWidth="2.3" fill="none" />
      <polyline points={trendPoints.auction} stroke="#FF7B17" strokeWidth="2.3" fill="none" />
      {[
        { points: trendPoints.buy, color: "#1A9850" },
        { points: trendPoints.rent, color: "#1F75FE" },
        { points: trendPoints.auction, color: "#FF7B17" },
      ].flatMap((line) =>
        line.points.split(" ").map((pair) => {
          const [cx, cy] = pair.split(",");
          return <circle key={`${line.color}-${pair}`} cx={cx} cy={cy} r="3.5" fill={line.color} />;
        }),
      )}
    </svg>
  );
}

function RevenueSparkline() {
  return (
    <svg width="100%" height="64" viewBox="0 0 290 64" fill="none" aria-hidden="true">
      <polyline points="0,42 36,31 72,39 108,38 144,28 180,41 216,27 252,40 290,44" stroke="#56B46E" strokeWidth="2" fill="none" />
      <polyline points="252,40 270,26 290,26" stroke="#56B46E" strokeWidth="2" fill="none" />
    </svg>
  );
}

function MetricCardBlock({ item }) {
  return (
    <MetricCard $accent={item.accent}>
      <MetricHeader>
        <div style={{ display: "flex", gap: 14 }}>
          <MetricIcon $bg={item.iconBg}>
            <OverviewIcon type={item.icon} />
          </MetricIcon>
          <div>
            <MetricLabel>{item.label}</MetricLabel>
            <MetricValue>{item.value}</MetricValue>
          </div>
        </div>
        <button style={{ padding: 0, background: "transparent", color: "#18233d" }} aria-label={`${item.label} details`}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="m9 6 6 6-6 6" stroke="#18233D" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </MetricHeader>

      <SubMetricRow>
        <SubMetric>
          Revenue
          <strong style={{ color: item.accent }}>{item.revenue}</strong>
        </SubMetric>
        <SubMetric>
          Interest
          <strong>{item.interest}</strong>
        </SubMetric>
        <SubMetric>
          Available
          <strong>{item.available}</strong>
        </SubMetric>
        <SubMetric>
          Sold
          <strong>{item.sold}</strong>
        </SubMetric>
      </SubMetricRow>

      <AvailabilityBar $value={item.progress} $color={item.chartColor}>
        <span />
      </AvailabilityBar>
      <AvailabilityText>{item.availableRate}</AvailabilityText>
    </MetricCard>
  );
}

function DashboardSection() {
  return (
    <>
      <MetricsGrid>
        {metricCards.map((item) => (
          <MetricCardBlock key={item.label} item={item} />
        ))}

        <RevenueCard>
          <MetricHeader>
            <div style={{ display: "flex", gap: 14 }}>
              <MetricIcon $bg="#ecf8df">
                <span style={{ color: "#4ba336", fontSize: "28px", fontWeight: 700 }}>&#8377;</span>
              </MetricIcon>
              <div>
                <MetricLabel>Total Revenue</MetricLabel>
                <MetricValue>&#8377;8.95 Cr</MetricValue>
              </div>
            </div>
          </MetricHeader>

          <RevenueStats>
            <RevenueStat>
              Total Properties
              <strong>1,245</strong>
            </RevenueStat>
            <RevenueStat style={{ borderLeft: "1px solid #edf1f5", paddingLeft: "24px" }}>
              Total Interest
              <strong>575</strong>
            </RevenueStat>
          </RevenueStats>

          <RevenueTrend>
            <RevenueSparkline />
            <TrendBadge>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="m6 14 6-6 6 6" stroke="#138543" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              +12.5% vs last week
            </TrendBadge>
          </RevenueTrend>
        </RevenueCard>
      </MetricsGrid>

      <ChartGrid>
        <ChartCard>
          <CardHeader>
            <CardTitle>Interest Trends</CardTitle>
            <FilterButton type="button">
              This Week
              <svg style={{ marginLeft: 10 }} width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="m6 9 6 6 6-6" stroke="#18233D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </FilterButton>
          </CardHeader>

          <LegendRow>
            <LegendItem $color="#1A9850">Buy Properties</LegendItem>
            <LegendItem $color="#1F75FE">Rent Properties</LegendItem>
            <LegendItem $color="#FF7B17">Auction Properties</LegendItem>
          </LegendRow>
          <TrendChart />
        </ChartCard>

        <AvailabilityCard>
          <div style={{ width: "100%" }}>
            <CardHeader style={{ marginBottom: 24 }}>
              <CardTitle>Property Availability</CardTitle>
            </CardHeader>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <DonutWrap>
                <DonutCenter>
                  <strong>1,245</strong>
                  <span>Total Properties</span>
                </DonutCenter>
              </DonutWrap>
            </div>
          </div>

          <AvailabilityLegend>
            {availabilityItems.map((item) => (
              <AvailabilityItem key={item.label}>
                <Dot $color={item.color} />
                <span>{item.label}</span>
                <span>{item.value}</span>
              </AvailabilityItem>
            ))}
          </AvailabilityLegend>
        </AvailabilityCard>
      </ChartGrid>

      <TableGrid>
        <TableCard>
          <CardHeader>
            <CardTitle>Recent Properties with Interest</CardTitle>
            <ViewAllButton type="button">View All</ViewAllButton>
          </CardHeader>
          <TableScroll>
            <StyledTable>
              <thead>
                <tr>
                  <th>Property</th>
                  <th>Type</th>
                  <th>Location</th>
                  <th>Price / Rent</th>
                  <th>Interest</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {propertyRows.map((row) => (
                  <tr key={row.name}>
                    <td>
                      <ThumbRow>
                        <Thumb src={row.thumb} alt={row.name} />
                        <span>{row.name}</span>
                      </ThumbRow>
                    </td>
                    <td>
                      <Pill $color={row.type.color} $bg={row.type.bg}>{row.type.label}</Pill>
                    </td>
                    <td>{row.location}</td>
                    <td>{row.price}</td>
                    <td>{row.interest}</td>
                    <td>
                      <StatusText $color={row.status.color}>{row.status.label}</StatusText>
                    </td>
                  </tr>
                ))}
              </tbody>
            </StyledTable>
          </TableScroll>
        </TableCard>

        <TableCard>
          <CardHeader>
            <CardTitle>Recent Interest Leads</CardTitle>
            <ViewAllButton type="button">View All</ViewAllButton>
          </CardHeader>
          <TableScroll>
            <StyledTable>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Interested In</th>
                  <th>Property</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {leadRows.map((row) => (
                  <tr key={`${row.name}-${row.date}`}>
                    <td>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 120 }}>
                        <LeadAvatar $bg={row.avatarBg}>{row.initials}</LeadAvatar>
                        <span>{row.name}</span>
                      </div>
                    </td>
                    <td>
                      <Pill $color={row.interested.color} $bg={row.interested.bg}>{row.interested.label}</Pill>
                    </td>
                    <td>{row.property}</td>
                    <td>{row.date}</td>
                    <td>
                      <Pill $color={row.status.color} $bg={row.status.bg}>{row.status.label}</Pill>
                    </td>
                  </tr>
                ))}
              </tbody>
            </StyledTable>
          </TableScroll>
        </TableCard>
      </TableGrid>
    </>
  );
}

export default DashboardSection;
