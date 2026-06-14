import {
  agentRows,
  agentSpecializations,
  agentStats,
  agentStatus,
  recentAgentRegistrations,
  topAgents,
} from "../../../../data/admin/userManagementData";
import { useMemo, useState } from "react";
import {
  ActionButtons,
  Badge,
  BottomGrid,
  ChartCard,
  ChartHeader,
  ChartLegend,
  ChartLegendItem,
  ChartTitle,
  CheckBox,
  CompactItem,
  CompactList,
  CompactValue,
  DonutGrid,
  FilterBar,
  FilterButton,
  FilterField,
  FilterLabel,
  FilterSelect,
  FooterControls,
  FooterText,
  LegendItem,
  LegendList,
  MainColumn,
  MainContentGrid,
  ManagementCard,
  ManagementPage,
  ManagementTable,
  PageButton,
  PageSize,
  Pagination,
  PersonCell,
  PersonMeta,
  PersonName,
  QuickAction,
  QuickGrid,
  RankBubble,
  ResetButton,
  ResetRow,
  SearchBox,
  SearchInput,
  SelectWrap,
  SideCard,
  SideColumn,
  SideTitle,
  SideTitleRow,
  StatCard,
  StatChange,
  StatCopy,
  StatGrid,
  StatLabel,
  StatValue,
  StatValueRow,
  TableFooter,
  ViewLink,
} from "./UserManagementStyles";
import {
  ActionIcon,
  AgentPerformanceChart,
  DonutChart,
  FilterIcon,
  PersonAvatar,
  ResetIcon,
  SearchIcon,
  StatGlyph,
  TableActions,
} from "./UserManagementVisuals";

const statusGradient = `conic-gradient(
  #07833e 0 83%,
  #ff3d2e 83% 91%,
  #ff9d18 91% 100%
)`;

const specializationGradient = `conic-gradient(
  #07833e 0 50%,
  #2c7df1 50% 75%,
  #995df1 75% 87.5%,
  #ff9d18 87.5% 96%,
  #b9c0ca 96% 100%
)`;

const pageSize = 6;

function AgentsAdvisorsSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalAgents = agentRows.length;
  const totalPages = Math.ceil(totalAgents / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const visibleAgents = useMemo(
    () => agentRows.slice(startIndex, startIndex + pageSize),
    [startIndex],
  );
  const fromRecord = totalAgents === 0 ? 0 : startIndex + 1;
  const toRecord = Math.min(startIndex + pageSize, totalAgents);

  return (
    <ManagementPage>
      <StatGrid>
        {agentStats.map((item) => (
          <StatCard key={item.label}>
            <StatGlyph item={item} />
            <StatCopy>
              <StatLabel>{item.label}</StatLabel>
              <StatValueRow>
                <StatValue>{item.value}</StatValue>
                {item.change ? <StatChange>{item.change}</StatChange> : null}
              </StatValueRow>
            </StatCopy>
          </StatCard>
        ))}
      </StatGrid>

      <MainContentGrid>
        <MainColumn>
          <ManagementCard>
            <FilterBar $filters={4}>
              <SearchBox>
                <SearchIcon />
                <SearchInput placeholder="Search by name, email or phone..." />
              </SearchBox>
              {[
                ["Status", "All Status"],
                ["Specialization", "All Specializations"],
                ["Experience", "All Experience"],
                ["City", "All Cities"],
              ].map(([label, value]) => (
                <FilterField key={label}>
                  <FilterLabel>{label}</FilterLabel>
                  <SelectWrap>
                    <FilterSelect defaultValue={value}>
                      <option>{value}</option>
                    </FilterSelect>
                  </SelectWrap>
                </FilterField>
              ))}
              <FilterButton type="button"><FilterIcon />Filters</FilterButton>
              <ResetRow><ResetButton type="button"><ResetIcon />Reset</ResetButton></ResetRow>
            </FilterBar>

            <ManagementTable>
              <thead>
                <tr>
                  <th><CheckBox type="checkbox" /></th>
                  <th>Agent</th>
                  <th>Contact</th>
                  <th>Specialization</th>
                  <th>Experience</th>
                  <th>Properties</th>
                  <th>Total Sales</th>
                  <th>Rating</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {visibleAgents.map((row) => (
                  <tr key={row.email}>
                    <td><CheckBox type="checkbox" /></td>
                    <td>
                      <PersonCell>
                        <PersonAvatar type={row.avatar} />
                        <div>
                          <PersonName>{row.name}</PersonName>
                          <PersonMeta>{row.email}</PersonMeta>
                        </div>
                      </PersonCell>
                    </td>
                    <td>{row.contact}</td>
                    <td><Badge $tone={row.tone}>{row.specialization}</Badge></td>
                    <td>{row.experience}</td>
                    <td>{row.properties}</td>
                    <td>{row.sales}</td>
                    <td>{row.rating} <span style={{ color: "#ff9d18", fontSize: 15 }}>★</span></td>
                    <td><Badge $tone={row.statusTone}>{row.status}</Badge></td>
                    <td><ActionButtons><TableActions /></ActionButtons></td>
                  </tr>
                ))}
              </tbody>
            </ManagementTable>

            <TableFooter>
              <FooterText>Showing {fromRecord} to {toRecord} of {totalAgents} agents</FooterText>
              <FooterControls>
                <PageSize defaultValue="6 per page"><option>6 per page</option></PageSize>
                {totalPages > 1 ? (
                  <Pagination>
                    <PageButton type="button" disabled={currentPage === 1} onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}>‹</PageButton>
                    {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                      <PageButton
                        key={page}
                        type="button"
                        $active={page === currentPage}
                        $plain={page !== currentPage}
                        onClick={() => setCurrentPage(page)}
                      >
                        {page}
                      </PageButton>
                    ))}
                    <PageButton type="button" disabled={currentPage === totalPages} onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}>›</PageButton>
                  </Pagination>
                ) : null}
              </FooterControls>
            </TableFooter>
          </ManagementCard>
        </MainColumn>

        <SideColumn>
          <SideCard>
            <SideTitleRow><SideTitle>Agents by Status</SideTitle></SideTitleRow>
            <DonutGrid>
              <DonutChart total="24" gradient={statusGradient} />
              <LegendList>
                {agentStatus.map((item) => (
                  <LegendItem key={item.label} $color={item.color}>
                    <span />
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </LegendItem>
                ))}
              </LegendList>
            </DonutGrid>
          </SideCard>

          <SideCard>
            <SideTitleRow><SideTitle>Top Performing Agents</SideTitle><ViewLink>View All</ViewLink></SideTitleRow>
            <CompactList>
              {topAgents.map((item) => (
                <CompactItem key={item.rank}>
                  <RankBubble>{item.rank}</RankBubble>
                  <PersonCell style={{ minWidth: 0 }}>
                    <PersonAvatar type={item.avatar} small />
                    <PersonName>{item.name}</PersonName>
                  </PersonCell>
                  <CompactValue>{item.value}</CompactValue>
                </CompactItem>
              ))}
            </CompactList>
          </SideCard>

          <SideCard>
            <SideTitleRow><SideTitle>Agents by Specialization</SideTitle></SideTitleRow>
            <DonutGrid>
              <DonutChart total="" label="" gradient={specializationGradient} />
              <LegendList>
                {agentSpecializations.map((item) => (
                  <LegendItem key={item.label} $color={item.color}>
                    <span />
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </LegendItem>
                ))}
              </LegendList>
            </DonutGrid>
          </SideCard>
        </SideColumn>
      </MainContentGrid>

      <BottomGrid $agent>
        <ChartCard>
          <ChartHeader>
            <ChartTitle>Agent Performance Overview</ChartTitle>
            <ChartLegend>
              <ChartLegendItem $color="#11a052">Total Sales (₹ Lakh)</ChartLegendItem>
              <ChartLegendItem $color="#07833e">No. of Deals</ChartLegendItem>
            </ChartLegend>
          </ChartHeader>
          <AgentPerformanceChart />
        </ChartCard>

        <ChartCard>
          <ChartHeader><ChartTitle>Recent Agent Registrations</ChartTitle><ViewLink>View All</ViewLink></ChartHeader>
          <CompactList>
            {recentAgentRegistrations.map((item) => (
              <CompactItem key={item.name}>
                <PersonAvatar type={item.avatar} small />
                <div>
                  <PersonName>{item.name}</PersonName>
                  <PersonMeta>{item.meta}</PersonMeta>
                </div>
                <Badge $tone={item.tone}>{item.status}</Badge>
              </CompactItem>
            ))}
          </CompactList>
        </ChartCard>

        <ChartCard>
          <ChartHeader><ChartTitle>Quick Actions</ChartTitle></ChartHeader>
          <QuickGrid>
            <QuickAction $green><ActionIcon type="plusUser" />Add New Agent</QuickAction>
            <QuickAction><ActionIcon type="upload" />Import Agents</QuickAction>
            <QuickAction><ActionIcon type="bars" />Agent Performance</QuickAction>
            <QuickAction><ActionIcon type="send" />Send Invitation</QuickAction>
          </QuickGrid>
        </ChartCard>
      </BottomGrid>
    </ManagementPage>
  );
}

export default AgentsAdvisorsSection;
