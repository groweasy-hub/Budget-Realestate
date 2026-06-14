import {
  calendarDays,
  siteVisitRows,
  todayTimeline,
  typeStyles,
  upcomingVisits,
  visitFilters,
  visitStats,
  visitStatusStyles,
} from "../../../../data/admin/siteVisitRequestsData";
import { useMemo, useState } from "react";
import {
  ActionRow,
  AgentCell,
  Avatar,
  BottomGrid,
  CalendarDay,
  CalendarGrid,
  CalendarHead,
  CalendarHeader,
  CalendarMonth,
  CalendarNav,
  Checkbox,
  CustomerCell,
  CustomerName,
  FilterButton,
  FooterText,
  FullScheduleButton,
  IconButton,
  IdLine,
  MutedLine,
  PageButton,
  PageSizeSelect,
  Pagination,
  Pill,
  PropertyCell,
  PropertyTitle,
  QuickActionButton,
  QuickActionsGrid,
  ResetButton,
  ResetLine,
  SelectWrap,
  SideCard,
  SideStack,
  SideTitle,
  TableFooter,
  Thumb,
  TimelineCard,
  TimelineItem,
  TimelineTime,
  TimelineTitle,
  TimelineTrack,
  TimelineVisitTitle,
  TwoLine,
  UpcomingHeader,
  UpcomingItem,
  UpcomingList,
  UpcomingMeta,
  UpcomingTitle,
  VisitFilterField,
  VisitFilters,
  VisitGrid,
  VisitMainCard,
  VisitSearch,
  VisitSelect,
  VisitStatCard,
  VisitStatIcon,
  VisitStatLabel,
  VisitStatMeta,
  VisitStatValue,
  VisitStatValueRow,
  VisitStatsGrid,
  VisitTable,
  VisitTableScroll,
} from "./SiteVisitRequestsStyles";

const thumbTones = {
  villa: "linear-gradient(135deg, #0f5f3b 0%, #f4b35d 48%, #1f4d7a 100%)",
  apartment: "linear-gradient(135deg, #c8d5e6 0%, #607da2 52%, #233d5b 100%)",
  tower: "linear-gradient(135deg, #6788aa 0%, #2f4968 54%, #d5a060 100%)",
  house: "linear-gradient(135deg, #1e6a45 0%, #e3b96c 52%, #3a6e9f 100%)",
  plot: "linear-gradient(135deg, #54a7f2 0%, #94c95a 55%, #8f6b38 100%)",
};

function Icon({ name, size = 16 }) {
  const common = {
    stroke: "currentColor",
    strokeWidth: 1.9,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  const icons = {
    calendar: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4" y="5" width="16" height="15" rx="2" {...common} />
        <path d="M8 3v4M16 3v4M4 9h16M8.5 13h3M8.5 16h6.5" {...common} />
      </svg>
    ),
    schedule: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4" y="5" width="16" height="15" rx="2" {...common} />
        <path d="M8 3v4M16 3v4M4 9h16M8.5 14l2.2 2.1 4.9-5" {...common} />
      </svg>
    ),
    check: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="8" {...common} />
        <path d="m8.5 12.2 2.3 2.3 4.8-5" {...common} />
      </svg>
    ),
    clock: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="8" {...common} />
        <path d="M12 7.5v5l3.4 2" {...common} />
      </svg>
    ),
    chart: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M5 19V9M11 19V5M17 19v-7M4 19h16M8 11l3-3 3 3 4-5" {...common} />
      </svg>
    ),
    search: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="11" cy="11" r="6.7" {...common} />
        <path d="m20 20-4.25-4.25" {...common} />
      </svg>
    ),
    filter: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4.5 6.5h15l-5.7 6.45v4.7l-3.6 1.85v-6.55L4.5 6.5Z" {...common} />
      </svg>
    ),
    eye: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 12s3.4-5.5 9-5.5 9 5.5 9 5.5-3.4 5.5-9 5.5S3 12 3 12Z" {...common} />
        <circle cx="12" cy="12" r="2.4" {...common} />
      </svg>
    ),
    phone: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M8.1 4.5 6 5.45c-.72.32-1.1 1.12-.88 1.9 1.34 4.78 4.25 8.42 8.7 10.88.7.39 1.58.22 2.1-.38l1.6-1.84-2.85-2.85-1.62 1.1c-1.85-.9-3.24-2.28-4.18-4.14L10 8.45 8.1 4.5Z" {...common} />
      </svg>
    ),
    location: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 21s6-5.1 6-11a6 6 0 1 0-12 0c0 5.9 6 11 6 11Z" {...common} />
        <circle cx="12" cy="10" r="2.2" {...common} />
      </svg>
    ),
    more: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="5.4" r="1.55" fill="currentColor" />
        <circle cx="12" cy="12" r="1.55" fill="currentColor" />
        <circle cx="12" cy="18.6" r="1.55" fill="currentColor" />
      </svg>
    ),
    user: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="8.3" r="3.2" {...common} />
        <path d="M5.3 19c1.25-3.25 3.85-4.85 6.7-4.85s5.45 1.6 6.7 4.85" {...common} />
      </svg>
    ),
    bell: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M6.5 16.5h11l-1.6-2.1V10a3.9 3.9 0 1 0-7.8 0v4.4L6.5 16.5ZM10 18a2 2 0 0 0 4 0" {...common} />
      </svg>
    ),
    download: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3.5v10.2M7.8 9.7l4.2 4.2 4.2-4.2M5.2 17.2v1.4a2 2 0 0 0 2 2h9.6a2 2 0 0 0 2-2v-1.4" {...common} />
      </svg>
    ),
  };

  return icons[name] || null;
}

function PersonAvatar({ variant, small = false }) {
  const isFemale = variant?.startsWith("female");
  const shirt = isFemale ? "#f5f7fb" : "#10213d";
  const hair = isFemale ? "#563225" : "#141b2e";
  const skin = isFemale ? "#d99b73" : "#cf8d63";

  return (
    <Avatar $small={small}>
      <svg width="100%" height="100%" viewBox="0 0 42 42" fill="none" aria-hidden="true">
        <rect width="42" height="42" rx="21" fill="#edf2f7" />
        <circle cx="21" cy="15.4" r="7" fill={skin} />
        <path d="M9.5 37c1.7-6.45 6.45-9.55 11.5-9.55S30.8 30.55 32.5 37" fill={shirt} />
        <path d="m17.1 37 3.9-9.55L24.9 37" fill={isFemale ? "#184b79" : "#ffffff"} />
        <path
          d={isFemale ? "M13.2 18.7c-.8-5.85 2.3-10.55 7.8-10.55s8.6 4.7 7.8 10.55c-1.7-2.25-3-4.25-3.55-6-2.35 2.55-6.35 4.05-12.05 6Z" : "M13.2 13.2c1.05-5.1 6-7.65 10.6-6.15 3.85 1.25 5.9 4.3 5.6 8.15l-.18 2.55h-2.6v-4.02l-1.9 2.05c-2.75 2.98-6.75 4.45-10.75 3.95l-1.58-.2.35-1.55c.36-1.62.5-3.25.46-4.78Z"}
          fill={hair}
        />
      </svg>
    </Avatar>
  );
}

function VisitActions() {
  return (
    <ActionRow>
      <IconButton type="button" aria-label="View details"><Icon name="eye" size={13} /></IconButton>
      <IconButton type="button" aria-label="Call customer"><Icon name="phone" size={13} /></IconButton>
      <IconButton type="button" aria-label="Open location"><Icon name="location" size={13} /></IconButton>
      <IconButton type="button" aria-label="Reschedule"><Icon name="calendar" size={13} /></IconButton>
      <IconButton type="button" aria-label="Mark completed"><Icon name="check" size={13} /></IconButton>
    </ActionRow>
  );
}

function SiteVisitRequestsSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;
  const totalRequests = siteVisitRows.length;
  const totalPages = Math.ceil(totalRequests / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const visibleVisits = useMemo(
    () => siteVisitRows.slice(startIndex, startIndex + pageSize),
    [startIndex],
  );
  const start = totalRequests === 0 ? 0 : startIndex + 1;
  const end = Math.min(startIndex + pageSize, totalRequests);

  return (
    <>
      <VisitStatsGrid>
        {visitStats.map((item) => (
          <VisitStatCard key={item.label}>
            <VisitStatIcon $color={item.color} $bg={item.bg}>
              <Icon name={item.icon} size={24} />
            </VisitStatIcon>
            <div>
              <VisitStatLabel>{item.label}</VisitStatLabel>
              <VisitStatValueRow>
                <VisitStatValue>{item.value}</VisitStatValue>
                <VisitStatMeta>{item.meta}</VisitStatMeta>
              </VisitStatValueRow>
            </div>
          </VisitStatCard>
        ))}
      </VisitStatsGrid>

      <VisitGrid>
        <VisitMainCard>
          <VisitFilters>
            <VisitSearch>
              <Icon name="search" size={14} />
              <input placeholder="Search by name, email or phone..." />
            </VisitSearch>
            {visitFilters.map((filter) => (
              <VisitFilterField key={filter.label}>
                {filter.label}
                <SelectWrap>
                  <VisitSelect defaultValue={filter.value}>
                    <option>{filter.value}</option>
                  </VisitSelect>
                </SelectWrap>
              </VisitFilterField>
            ))}
            <FilterButton type="button">
              <Icon name="filter" size={14} />
              Filters
            </FilterButton>
            <ResetLine>
              <ResetButton type="button">Reset</ResetButton>
            </ResetLine>
          </VisitFilters>

          <VisitTableScroll>
            <VisitTable>
              <thead>
                <tr>
                  <th style={{ width: 40 }}><Checkbox type="checkbox" /></th>
                  <th>Customer</th>
                  <th>Property</th>
                  <th>Type</th>
                  <th>Visit Date</th>
                  <th>Time</th>
                  <th>Assigned Agent</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {visibleVisits.map((visit) => {
                  const type = typeStyles[visit.type];
                  const status = visitStatusStyles[visit.status];

                  return (
                    <tr key={visit.id}>
                      <td><Checkbox type="checkbox" /></td>
                      <td>
                        <CustomerCell>
                          <PersonAvatar variant={visit.avatar} />
                          <div>
                            <CustomerName>{visit.customer}</CustomerName>
                            <MutedLine>{visit.email}</MutedLine>
                            <MutedLine>{visit.phone}</MutedLine>
                          </div>
                        </CustomerCell>
                      </td>
                      <td>
                        <PropertyCell>
                          <Thumb $tone={thumbTones[visit.image]} />
                          <div>
                            <PropertyTitle>{visit.property}</PropertyTitle>
                            <MutedLine>{visit.location}</MutedLine>
                            <IdLine>{`ID: ${visit.propertyId}`}</IdLine>
                          </div>
                        </PropertyCell>
                      </td>
                      <td><Pill $color={type.color} $bg={type.bg}>{visit.type}</Pill></td>
                      <td>
                        <TwoLine>
                          <strong>{visit.date}</strong>
                          <span>{visit.day}</span>
                        </TwoLine>
                      </td>
                      <td><strong>{visit.time}</strong></td>
                      <td>
                        <AgentCell>
                          <PersonAvatar variant={visit.agentAvatar} small />
                          {visit.agent}
                        </AgentCell>
                      </td>
                      <td><Pill $color={status.color} $bg={status.bg}>{visit.status}</Pill></td>
                      <td><VisitActions /></td>
                    </tr>
                  );
                })}
              </tbody>
            </VisitTable>
          </VisitTableScroll>

          <TableFooter>
            <FooterText>{`Showing ${start} to ${end} of ${totalRequests} requests`}</FooterText>
            {totalPages > 1 ? (
              <Pagination>
                <SelectWrap>
                  <PageSizeSelect defaultValue="6 per page">
                    <option>6 per page</option>
                  </PageSizeSelect>
                </SelectWrap>
                <PageButton type="button" $icon aria-label="Previous page" disabled={currentPage === 1} onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="m15 6-6 6 6 6" stroke="#647086" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </PageButton>
                {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                  <PageButton key={page} type="button" $active={page === currentPage} onClick={() => setCurrentPage(page)}>
                    {page}
                  </PageButton>
                ))}
                <PageButton type="button" $icon aria-label="Next page" disabled={currentPage === totalPages} onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="m9 6 6 6-6 6" stroke="#647086" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </PageButton>
              </Pagination>
            ) : null}
          </TableFooter>
        </VisitMainCard>

        <SideStack>
          <SideCard>
            <SideTitle>Upcoming Visits Calendar</SideTitle>
            <CalendarHeader>
              <CalendarNav type="button" aria-label="Previous month">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="m15 6-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </CalendarNav>
              <CalendarMonth>May 2026</CalendarMonth>
              <CalendarNav type="button" aria-label="Next month">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="m9 6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </CalendarNav>
            </CalendarHeader>
            <CalendarGrid>
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <CalendarHead key={day}>{day}</CalendarHead>
              ))}
              {calendarDays.flat().map((day, index) => (
                <CalendarDay
                  key={`${day}-${index}`}
                  $muted={index < 4}
                  $active={day === "25"}
                  $soft={day === "24"}
                  $dot={["1", "2", "8", "25", "26", "28", "29", "30", "31"].includes(day)}
                >
                  {day}
                </CalendarDay>
              ))}
            </CalendarGrid>

            <UpcomingHeader>
              <span>Upcoming Visits (This Week)</span>
              <button type="button">View All</button>
            </UpcomingHeader>
            <UpcomingList>
              {upcomingVisits.map((visit) => {
                const status = visitStatusStyles[visit.status];
                return (
                  <UpcomingItem key={visit.id}>
                    <Thumb $tone={thumbTones[visit.image]} />
                    <div>
                      <UpcomingMeta>{`${visit.date.replace("2026", "")}, ${visit.day.slice(0, 3)} - ${visit.time}`}</UpcomingMeta>
                      <UpcomingTitle>{visit.property}</UpcomingTitle>
                      <MutedLine>{visit.customer}</MutedLine>
                    </div>
                    <Pill $color={status.color} $bg={status.bg}>{visit.status}</Pill>
                  </UpcomingItem>
                );
              })}
            </UpcomingList>
            <FullScheduleButton type="button">
              <Icon name="calendar" size={14} />
              View Full Schedule
            </FullScheduleButton>
          </SideCard>
        </SideStack>
      </VisitGrid>

      <BottomGrid>
        <TimelineCard>
          <TimelineTitle>Today's Visits Timeline</TimelineTitle>
          <TimelineTrack>
            {todayTimeline.map((item) => {
              const status = visitStatusStyles[item.status];
              return (
                <TimelineItem key={item.time} $color={item.color}>
                  <Thumb $large $tone={thumbTones[item.image]} />
                  <div>
                    <TimelineTime $color={item.color}>{item.time}</TimelineTime>
                    <TimelineVisitTitle>{item.title}</TimelineVisitTitle>
                    <MutedLine>{item.customer}</MutedLine>
                    <MutedLine>{item.property}</MutedLine>
                    <div style={{ marginTop: 9 }}>
                      <Pill $color={status.color} $bg={status.bg}>{item.status}</Pill>
                    </div>
                  </div>
                </TimelineItem>
              );
            })}
          </TimelineTrack>
        </TimelineCard>

        <SideCard>
          <SideTitle>Quick Actions</SideTitle>
          <QuickActionsGrid>
            <QuickActionButton type="button"><Icon name="user" size={18} />Assign Agent</QuickActionButton>
            <QuickActionButton type="button"><Icon name="calendar" size={18} />Reschedule Visit</QuickActionButton>
            <QuickActionButton type="button" $color="#168246"><Icon name="check" size={18} />Mark Completed</QuickActionButton>
            <QuickActionButton type="button"><Icon name="bell" size={18} />Send Reminder</QuickActionButton>
            <QuickActionButton type="button"><Icon name="phone" size={18} />Call Customer</QuickActionButton>
            <QuickActionButton type="button"><Icon name="download" size={18} />Export Report</QuickActionButton>
          </QuickActionsGrid>
        </SideCard>
      </BottomGrid>
    </>
  );
}

export default SiteVisitRequestsSection;
