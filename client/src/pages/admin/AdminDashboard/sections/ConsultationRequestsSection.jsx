import {
  calendarDays,
  consultationFilters,
  consultationRows,
  consultationStats,
  consultationTypes,
  recentActivities,
  requestSources,
  todayConsultations,
} from "../../../../data/admin/consultationRequestsData";
import { useMemo, useState } from "react";
import {
  ActionRow,
  ActivityIcon,
  ActivityItem,
  ActivityText,
  ActivityTime,
  Avatar,
  Badge,
  BottomGrid,
  CalendarDay,
  CalendarGrid,
  CalendarHead,
  CalendarHeader,
  CalendarMonth,
  CalendarNav,
  ChartCard,
  ChartHeader,
  ChartTitle,
  Checkbox,
  CompactItem,
  CompactList,
  ConsultationStatsGrid,
  Donut,
  DonutCenter,
  DonutGrid,
  DonutLegend,
  DonutLegendItem,
  FilterBar,
  FilterButton,
  FilterField,
  FooterText,
  IconButton,
  Legend,
  LegendKey,
  MainCard,
  MainStack,
  ModeCell,
  Muted,
  Name,
  PageButton,
  PageGrid,
  PageSize,
  Pagination,
  PersonCell,
  QuickButton,
  QuickGrid,
  ResetButton,
  ResetLine,
  SearchBox,
  Select,
  SelectWrap,
  SideCard,
  SideStack,
  SideTitle,
  SideTitleRow,
  StatCard,
  StatIcon,
  StatLabel,
  StatMeta,
  StatValue,
  StatValueRow,
  Table,
  TableFooter,
  TableScroll,
  Topic,
  ViewLink,
} from "./ConsultationRequestsStyles";

function Icon({ name, size = 18 }) {
  const common = { stroke: "currentColor", strokeWidth: 1.9, strokeLinecap: "round", strokeLinejoin: "round" };
  const icons = {
    chat: <path d="M5 15.5H4a2 2 0 0 1-2-2V6.8a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v6.7a2 2 0 0 1-2 2H9l-4 3v-3ZM8 9h5M8 12h3M14 17h2.5l3.5 2.5V17h.5a2 2 0 0 0 2-2V9" {...common} />,
    calendar: <><rect x="4" y="5" width="16" height="15" rx="2" {...common} /><path d="M8 3v4M16 3v4M4 9h16M8.5 14l2 2 4.8-5" {...common} /></>,
    users: <><circle cx="9" cy="8.4" r="3" {...common} /><path d="M3.8 19c1-3.1 3.3-4.6 5.2-4.6s4.2 1.5 5.2 4.6M16.2 10.5a2.4 2.4 0 1 0-1-4.7M16.2 14.2c1.8.5 3.2 2 4 4.8" {...common} /></>,
    check: <><circle cx="12" cy="12" r="8" {...common} /><path d="m8.5 12.2 2.3 2.3 4.8-5" {...common} /></>,
    chart: <><path d="M5 19V9M11 19V5M17 19v-7M4 19h16M8 11l3-3 3 3 4-5" {...common} /></>,
    search: <><circle cx="11" cy="11" r="6.5" {...common} /><path d="m20 20-4.2-4.2" {...common} /></>,
    filter: <path d="M4.5 6.5h15l-5.7 6.4v4.7l-3.6 1.9v-6.6L4.5 6.5Z" {...common} />,
    reset: <path d="M6.2 8.2A7 7 0 1 1 5.1 14M6.2 8.2H3.4V5.4" {...common} />,
    video: <><rect x="4" y="7" width="11" height="10" rx="1.8" {...common} /><path d="m15 11 5-3v8l-5-3" {...common} /></>,
    phone: <path d="M8.1 4.5 6 5.45c-.72.32-1.1 1.12-.88 1.9 1.34 4.78 4.25 8.42 8.7 10.88.7.39 1.58.22 2.1-.38l1.6-1.84-2.85-2.85-1.62 1.1c-1.85-.9-3.24-2.28-4.18-4.14L10 8.45 8.1 4.5Z" {...common} />,
    person: <><circle cx="12" cy="8.3" r="3.2" {...common} /><path d="M5.3 19c1.25-3.25 3.85-4.85 6.7-4.85s5.45 1.6 6.7 4.85" {...common} /></>,
    eye: <><path d="M3 12s3.3-5.2 9-5.2 9 5.2 9 5.2-3.3 5.2-9 5.2S3 12 3 12Z" {...common} /><circle cx="12" cy="12" r="2.4" {...common} /></>,
    more: <><circle cx="12" cy="5.8" r="1" fill="currentColor" /><circle cx="12" cy="12" r="1" fill="currentColor" /><circle cx="12" cy="18.2" r="1" fill="currentColor" /></>,
    bell: <path d="M6.5 16.5h11l-1.6-2.1V10a3.9 3.9 0 1 0-7.8 0v4.4L6.5 16.5ZM10 18a2 2 0 0 0 4 0" {...common} />,
    all: <path d="M4 6h16M4 12h16M4 18h16" {...common} />,
    download: <path d="M12 3.5v10M7.8 9.7l4.2 4.2 4.2-4.2M5.2 17.2v1.4a2 2 0 0 0 2 2h9.6a2 2 0 0 0 2-2v-1.4" {...common} />,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">{icons[name]}</svg>;
}

function PersonAvatar({ type, small }) {
  return <Avatar $type={type} $small={small} />;
}

function TrendChart() {
  return (
    <svg width="100%" height="132" viewBox="0 0 430 132" fill="none" aria-hidden="true">
      {[18, 44, 70, 96, 122].map((y) => <path key={y} d={`M34 ${y}H420`} stroke="#edf1f5" />)}
      <path d="M34 18V122H420" stroke="#dfe5ee" />
      {["100", "80", "60", "40", "20", "0"].map((v, i) => <text key={v} x="3" y={18 + i * 21} fill="#4f5a73" fontSize="10">{v}</text>)}
      {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((v, i) => <text key={v} x={58 + i * 54} y="130" fill="#24304b" fontSize="10">{v}</text>)}
      <polyline points="58,88 112,68 166,54 220,66 274,54 328,76 382,60 420,78" stroke="#07833e" strokeWidth="2" fill="none" />
      <polyline points="58,108 112,92 166,78 220,80 274,66 328,78 382,96 420,82" stroke="#b9c2d0" strokeWidth="2" fill="none" />
      {"58,88 112,68 166,54 220,66 274,54 328,76 382,60 420,78".split(" ").map((p) => { const [x, y] = p.split(","); return <circle key={p} cx={x} cy={y} r="3.5" fill="#07833e" />; })}
    </svg>
  );
}

function DonutChart({ total, gradient }) {
  return (
    <Donut $gradient={gradient}>
      <DonutCenter>
        <strong>{total}</strong>
        <span>Total</span>
      </DonutCenter>
    </Donut>
  );
}

const typeGradient = "conic-gradient(#07833e 0 48%, #176cf0 48% 71%, #ffb020 71% 84%, #9a54ed 84% 94%, #b9c0ca 94% 100%)";
const sourceGradient = "conic-gradient(#07833e 0 45%, #176cf0 45% 72%, #ffb020 72% 88%, #9a54ed 88% 95%, #b9c0ca 95% 100%)";
const pageSize = 6;

function ConsultationRequestsSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalRequests = consultationRows.length;
  const totalPages = Math.ceil(totalRequests / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const visibleRequests = useMemo(
    () => consultationRows.slice(startIndex, startIndex + pageSize),
    [startIndex],
  );
  const fromRecord = totalRequests === 0 ? 0 : startIndex + 1;
  const toRecord = Math.min(startIndex + pageSize, totalRequests);

  return (
    <>
      <ConsultationStatsGrid>
        {consultationStats.map((item) => (
          <StatCard key={item.label}>
            <StatIcon $color={item.color} $bg={item.bg}><Icon name={item.icon} size={28} /></StatIcon>
            <div>
              <StatLabel>{item.label}</StatLabel>
              <StatValueRow><StatValue>{item.value}</StatValue><StatMeta>{item.meta}</StatMeta></StatValueRow>
            </div>
          </StatCard>
        ))}
      </ConsultationStatsGrid>

      <PageGrid>
        <MainStack>
          <MainCard>
            <FilterBar>
              <SearchBox><Icon name="search" size={15} /><input placeholder="Search by name, email, phone or topic..." /></SearchBox>
              {consultationFilters.map((filter) => (
                <FilterField key={filter.label}>
                  {filter.label}
                  <SelectWrap><Select defaultValue={filter.value}><option>{filter.value}</option></Select></SelectWrap>
                </FilterField>
              ))}
              <FilterButton type="button"><Icon name="filter" size={14} />Filters</FilterButton>
              <ResetLine><ResetButton type="button"><Icon name="reset" size={13} />Reset</ResetButton></ResetLine>
            </FilterBar>

            <TableScroll>
              <Table>
                <thead>
                  <tr>
                    <th><Checkbox type="checkbox" /></th>
                    <th>Client Details</th>
                    <th>Consultation Topic</th>
                    <th>Type</th>
                    <th>Preferred Mode</th>
                    <th>Requested On</th>
                    <th>Assigned To</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {visibleRequests.map((row) => (
                    <tr key={row.email}>
                      <td><Checkbox type="checkbox" /></td>
                      <td>
                        <PersonCell>
                          <PersonAvatar type={row.avatar} />
                          <div><Name>{row.client}</Name><Muted>{row.email}</Muted><Muted>{row.phone}</Muted></div>
                        </PersonCell>
                      </td>
                      <td><Topic>{row.topic[0]}<br />{row.topic[1]}{row.topic[2] ? <span>{row.topic[2]}</span> : null}</Topic></td>
                      <td><Badge $tone={row.typeTone}>{row.type}</Badge></td>
                      <td><ModeCell><Icon name={row.modeIcon} size={14} />{row.mode}</ModeCell></td>
                      <td><Name>{row.date}</Name><Muted>{row.time}</Muted></td>
                      <td><PersonCell style={{ minWidth: 126 }}><PersonAvatar type={row.agentAvatar} small /><Name>{row.agent}</Name></PersonCell></td>
                      <td><Badge $tone={row.statusTone}>{row.status}</Badge></td>
                      <td>
                        <ActionRow>
                          <IconButton><Icon name="eye" size={14} /></IconButton>
                          <IconButton><Icon name="phone" size={14} /></IconButton>
                          <IconButton><Icon name="calendar" size={14} /></IconButton>
                          <IconButton><Icon name="more" size={14} /></IconButton>
                        </ActionRow>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </TableScroll>

            <TableFooter>
              <FooterText>Showing {fromRecord} to {toRecord} of {totalRequests} requests</FooterText>
              {false ? <Pagination>
                <SelectWrap><PageSize defaultValue="6 per page"><option>6 per page</option></PageSize></SelectWrap>
                <PageButton type="button">‹</PageButton>
                {[1, 2, 3, 4, 5].map((page) => <PageButton key={page} type="button" $active={page === 1} $plain={page !== 1}>{page}</PageButton>)}
                <PageButton type="button" $plain>...</PageButton>
                <PageButton type="button" $plain>25</PageButton>
                <PageButton type="button">›</PageButton>
              </Pagination> : null}
              {totalPages > 1 ? (
                <Pagination>
                  <SelectWrap><PageSize defaultValue="6 per page"><option>6 per page</option></PageSize></SelectWrap>
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
            </TableFooter>
          </MainCard>
        </MainStack>

        <SideStack>
          <SideCard>
            <SideTitleRow><SideTitle>Consultation Calendar</SideTitle></SideTitleRow>
            <CalendarHeader><CalendarNav>‹</CalendarNav><CalendarMonth>May 2025</CalendarMonth><CalendarNav>›</CalendarNav></CalendarHeader>
            <CalendarGrid>
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => <CalendarHead key={day}>{day}</CalendarHead>)}
              {calendarDays.flat().map((day, index) => <CalendarDay key={`${day}-${index}`} $active={day === "25"} $dot={["1", "2", "8", "25", "26", "28", "29", "30", "31"].includes(day)}>{day}</CalendarDay>)}
            </CalendarGrid>
          </SideCard>

          <SideCard>
            <SideTitleRow><SideTitle>Today's Consultations</SideTitle><ViewLink>View All</ViewLink></SideTitleRow>
            <CompactList>
              {todayConsultations.map((item) => (
                <CompactItem key={item.name}>
                  <PersonAvatar type={item.avatar} />
                  <div><Muted>{item.time}</Muted><Name>{item.name}</Name><Muted>{item.mode}</Muted></div>
                  <Badge $tone={item.tone}>{item.status}</Badge>
                </CompactItem>
              ))}
            </CompactList>
          </SideCard>

          <SideCard>
            <SideTitleRow><SideTitle>Quick Actions</SideTitle></SideTitleRow>
            <QuickGrid>
              <QuickButton><Icon name="users" />Assign to Agent</QuickButton>
              <QuickButton><Icon name="phone" />Schedule Call</QuickButton>
              <QuickButton><Icon name="check" />Mark Completed</QuickButton>
              <QuickButton><Icon name="bell" />Send Reminder</QuickButton>
              <QuickButton><Icon name="all" />View All Requests</QuickButton>
              <QuickButton><Icon name="download" />Export Report</QuickButton>
            </QuickGrid>
          </SideCard>
        </SideStack>
      </PageGrid>

      <BottomGrid>
        <ChartCard>
          <ChartHeader><ChartTitle>Requests Trend</ChartTitle><Legend><LegendKey $color="#07833e">This Week</LegendKey><LegendKey $color="#b9c2d0">Last Week</LegendKey></Legend></ChartHeader>
          <TrendChart />
        </ChartCard>
        <ChartCard>
          <ChartHeader><ChartTitle>Consultation Types</ChartTitle></ChartHeader>
          <DonutGrid>
            <DonutChart total="248" gradient={typeGradient} />
            <DonutLegend>{consultationTypes.map((item) => <DonutLegendItem key={item.label} $color={item.color}><span /><span>{item.label}</span><strong>{item.value}</strong></DonutLegendItem>)}</DonutLegend>
          </DonutGrid>
        </ChartCard>
        <ChartCard>
          <ChartHeader><ChartTitle>Request Source</ChartTitle></ChartHeader>
          <DonutGrid>
            <DonutChart total="248" gradient={sourceGradient} />
            <DonutLegend>{requestSources.map((item) => <DonutLegendItem key={item.label} $color={item.color}><span /><span>{item.label}</span><strong>{item.value}</strong></DonutLegendItem>)}</DonutLegend>
          </DonutGrid>
        </ChartCard>
        <SideCard>
          <SideTitleRow><SideTitle>Recent Activities</SideTitle></SideTitleRow>
          <CompactList>
            {recentActivities.map((item) => (
              <ActivityItem key={item.text}>
                <ActivityIcon $color={item.color} $bg={item.bg}><Icon name={item.icon} size={14} /></ActivityIcon>
                <ActivityText>{item.text}</ActivityText>
                <ActivityTime>{item.time}</ActivityTime>
              </ActivityItem>
            ))}
          </CompactList>
        </SideCard>
      </BottomGrid>
    </>
  );
}

export default ConsultationRequestsSection;
