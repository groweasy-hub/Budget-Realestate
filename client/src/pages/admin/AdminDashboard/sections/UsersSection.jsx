import {
  accountStatuses,
  departmentUsers,
  recentUsers,
  roleDistribution,
  topUsers,
  usersRows,
  userStats,
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
  HorizontalBar,
  HorizontalBarList,
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
  ProgressLine,
  QuickAction,
  QuickGrid,
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
  ActivityChart,
  DonutChart,
  FilterIcon,
  PersonAvatar,
  ResetIcon,
  SearchIcon,
  StatGlyph,
  TableActions,
} from "./UserManagementVisuals";

const roleGradient = `conic-gradient(
  #00894a 0 2%,
  #2c7df1 2% 7%,
  #995df1 7% 26%,
  #ff9d18 26% 32%,
  #35aebe 32% 41%,
  #b9c0ca 41% 100%
)`;

const statusGradient = `conic-gradient(
  #07833e 0 75%,
  #ff3d2e 75% 89%,
  #ff9d18 89% 94%,
  #b8c0cb 94% 100%
)`;

const pageSize = 6;

function UsersSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalUsers = usersRows.length;
  const totalPages = Math.ceil(totalUsers / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const visibleUsers = useMemo(
    () => usersRows.slice(startIndex, startIndex + pageSize),
    [startIndex],
  );
  const fromRecord = totalUsers === 0 ? 0 : startIndex + 1;
  const toRecord = Math.min(startIndex + pageSize, totalUsers);

  return (
    <ManagementPage>
      <StatGrid>
        {userStats.map((item) => (
          <StatCard key={item.label}>
            <StatGlyph item={item} />
            <StatCopy>
              <StatLabel>{item.label}</StatLabel>
              <StatValueRow>
                <StatValue>{item.value}</StatValue>
                <StatChange $danger={item.danger}>{item.change}</StatChange>
              </StatValueRow>
            </StatCopy>
          </StatCard>
        ))}
      </StatGrid>

      <MainContentGrid>
        <MainColumn>
          <ManagementCard>
            <FilterBar $filters={3}>
              <SearchBox>
                <SearchIcon />
                <SearchInput placeholder="Search by name, email or phone..." />
              </SearchBox>
              {[
                ["Role", "All Roles"],
                ["Status", "All Status"],
                ["Department", "All Departments"],
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
              <ResetRow>
                <ResetButton type="button"><ResetIcon />Reset</ResetButton>
              </ResetRow>
            </FilterBar>

            <ManagementTable>
              <thead>
                <tr>
                  <th><CheckBox type="checkbox" /></th>
                  <th>User</th>
                  <th>Role</th>
                  <th>Department</th>
                  <th>Phone</th>
                  <th>Status</th>
                  <th>Last Login</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {visibleUsers.map((row) => (
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
                    <td><Badge $tone={row.roleTone}>{row.role}</Badge></td>
                    <td>{row.department}</td>
                    <td>{row.phone}</td>
                    <td><Badge $tone={row.statusTone}>{row.status}</Badge></td>
                    <td>
                      <div>{row.login[0]}</div>
                      <PersonMeta>{row.login[1]}</PersonMeta>
                    </td>
                    <td>
                      <ActionButtons><TableActions /></ActionButtons>
                    </td>
                  </tr>
                ))}
              </tbody>
            </ManagementTable>

            <TableFooter>
              <FooterText>Showing {fromRecord} to {toRecord} of {totalUsers} users</FooterText>
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
            <SideTitleRow><SideTitle>User Role Distribution</SideTitle></SideTitleRow>
            <DonutGrid>
              <DonutChart total="128" gradient={roleGradient} />
              <LegendList>
                {roleDistribution.map((item) => (
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
            <SideTitleRow><SideTitle>Recent New Users</SideTitle><ViewLink>View All</ViewLink></SideTitleRow>
            <CompactList>
              {recentUsers.map((item) => (
                <CompactItem key={item.name}>
                  <PersonAvatar type={item.avatar} small />
                  <div>
                    <PersonName>{item.name}</PersonName>
                    <PersonMeta>{item.role}</PersonMeta>
                  </div>
                  <CompactValue>{item.time}</CompactValue>
                </CompactItem>
              ))}
            </CompactList>
          </SideCard>

          <SideCard>
            <SideTitleRow><SideTitle>Top Active Users</SideTitle><ViewLink>View All</ViewLink></SideTitleRow>
            <CompactList>
              {topUsers.map((item) => (
                <CompactItem key={item.name}>
                  <PersonAvatar type={item.avatar} small />
                  <div>
                    <PersonName>{item.name}</PersonName>
                    <PersonMeta>{item.value}</PersonMeta>
                  </div>
                  <ProgressLine $value={item.progress}><span /></ProgressLine>
                </CompactItem>
              ))}
            </CompactList>
          </SideCard>

          <SideCard>
            <SideTitleRow><SideTitle>Quick Actions</SideTitle></SideTitleRow>
            <QuickGrid>
              <QuickAction $green><ActionIcon type="plusUser" />Add New User</QuickAction>
              <QuickAction><ActionIcon type="upload" />Import Users</QuickAction>
              <QuickAction><ActionIcon type="shield" />Roles & Permissions</QuickAction>
              <QuickAction><ActionIcon type="clock" />User Activity Log</QuickAction>
            </QuickGrid>
          </SideCard>
        </SideColumn>
      </MainContentGrid>

      <BottomGrid>
        <ChartCard>
          <ChartHeader>
            <ChartTitle>User Activity Overview</ChartTitle>
            <ChartLegend>
              <ChartLegendItem $color="#07833e">Logins</ChartLegendItem>
              <ChartLegendItem $color="#b9c2d0">New Users</ChartLegendItem>
            </ChartLegend>
          </ChartHeader>
          <ActivityChart />
        </ChartCard>

        <ChartCard>
          <ChartHeader><ChartTitle>Users by Department</ChartTitle><ViewLink>View Report</ViewLink></ChartHeader>
          <HorizontalBarList>
            {departmentUsers.map((item) => (
              <HorizontalBar key={item.label} $value={item.value * 2}>
                <span>{item.label}</span>
                <div />
                <strong>{item.value}</strong>
              </HorizontalBar>
            ))}
          </HorizontalBarList>
        </ChartCard>

        <ChartCard>
          <ChartHeader><ChartTitle>Account Status Overview</ChartTitle><ViewLink>View Report</ViewLink></ChartHeader>
          <DonutGrid>
            <DonutChart total="128" gradient={statusGradient} />
            <LegendList>
              {accountStatuses.map((item) => (
                <LegendItem key={item.label} $color={item.color}>
                  <span />
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </LegendItem>
              ))}
            </LegendList>
          </DonutGrid>
        </ChartCard>

      </BottomGrid>
    </ManagementPage>
  );
}

export default UsersSection;
