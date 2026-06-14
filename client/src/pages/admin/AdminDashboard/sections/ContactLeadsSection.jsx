import {
  contactLeadFilters,
  contactLeads,
  contactLeadStats,
  leadStatusStyles,
} from "../../../../data/admin/contactLeadsData";
import { useMemo, useState } from "react";
import {
  ActionButtons,
  AgentCell,
  Checkbox,
  ContactStatsGrid,
  ExportButton,
  FiltersButton,
  FooterControls,
  FooterText,
  InterestCell,
  LeadActionButton,
  LeadDetailsCell,
  LeadEmail,
  LeadFilterField,
  LeadFiltersGrid,
  LeadName,
  LeadSelect,
  LeadSelectWrap,
  LeadStatCard,
  LeadStatCopy,
  LeadStatIcon,
  LeadStatLabel,
  LeadStatMeta,
  LeadStatValue,
  LeadStatValueRow,
  LeadsCard,
  LeadsFooter,
  LeadsSearch,
  LeadsTable,
  LeadsTableScroll,
  LeadsToolbar,
  LeadsToolbarTop,
  PageButton,
  PageSizeSelect,
  Pagination,
  PersonAvatar,
  ResetButton,
  SourceCell,
  StatusBadge,
  TwoLineCell,
} from "./ContactLeadsStyles";

function StatIcon({ type }) {
  const common = {
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  const icons = {
    users: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="9" cy="8.2" r="3" {...common} />
        <path d="M3.8 19c.95-3.1 3.2-4.65 5.2-4.65s4.25 1.55 5.2 4.65" {...common} />
        <path d="M16 10.3a2.4 2.4 0 1 0-1.15-4.5M16.2 14.2c1.8.42 3.25 1.95 4 4.8" {...common} />
      </svg>
    ),
    phone: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M8.3 4.3 6 5.35c-.8.36-1.22 1.24-.98 2.09 1.42 5.07 4.47 8.87 9.12 11.4.77.42 1.72.25 2.3-.41l1.7-1.95-3.08-3.07-1.74 1.18c-1.92-.95-3.38-2.42-4.38-4.39l1.2-1.78L8.3 4.3Z" {...common} />
      </svg>
    ),
    check: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="8" {...common} />
        <path d="m8.4 12.2 2.3 2.3 5-5" {...common} />
      </svg>
    ),
    group: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="7.5" cy="8.3" r="2.4" {...common} />
        <circle cx="16.5" cy="8.3" r="2.4" {...common} />
        <path d="M4 18c.45-2.55 1.65-4 3.5-4s3.05 1.45 3.5 4M13 18c.45-2.55 1.65-4 3.5-4s3.05 1.45 3.5 4" {...common} />
        <path d="M12 6v10M9.8 13.6h4.4" {...common} />
      </svg>
    ),
    tag: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4.8 5.2h6.7l7.7 7.7-6.3 6.3-7.7-7.7V5.2Z" {...common} />
        <circle cx="8.7" cy="8.8" r="1.1" fill="currentColor" />
      </svg>
    ),
  };

  return icons[type] || null;
}

function SearchIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="6.7" stroke="currentColor" strokeWidth="1.9" />
      <path d="m20 20-4.25-4.25" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
    </svg>
  );
}

function ExportIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3.5v10.2" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
      <path d="m7.8 9.7 4.2 4.2 4.2-4.2" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.2 17.2v1.4a2 2 0 0 0 2 2h9.6a2 2 0 0 0 2-2v-1.4" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
    </svg>
  );
}

function FilterIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4.5 6.5h15l-5.7 6.45v4.7l-3.6 1.85v-6.55L4.5 6.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 12s3.4-5.5 9-5.5 9 5.5 9 5.5-3.4 5.5-9 5.5S3 12 3 12Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="2.4" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M8.1 4.5 6 5.45c-.72.32-1.1 1.12-.88 1.9 1.34 4.78 4.25 8.42 8.7 10.88.7.39 1.58.22 2.1-.38l1.6-1.84-2.85-2.85-1.62 1.1c-1.85-.9-3.24-2.28-4.18-4.14L10 8.45 8.1 4.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

function MoreIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="5.4" r="1.55" fill="currentColor" />
      <circle cx="12" cy="12" r="1.55" fill="currentColor" />
      <circle cx="12" cy="18.6" r="1.55" fill="currentColor" />
    </svg>
  );
}

function Avatar({ variant, small = false }) {
  const isFemale = variant?.startsWith("female");
  const shirt = isFemale ? "#f5f7fb" : "#10213d";
  const hair = isFemale ? "#563225" : "#141b2e";
  const skin = isFemale ? "#d99b73" : "#cf8d63";

  return (
    <PersonAvatar $small={small}>
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
    </PersonAvatar>
  );
}

function LeadActions() {
  return (
    <ActionButtons>
      <LeadActionButton type="button" aria-label="View lead">
        <EyeIcon />
      </LeadActionButton>
      <LeadActionButton type="button" aria-label="Call lead">
        <PhoneIcon />
      </LeadActionButton>
      <LeadActionButton type="button" aria-label="More actions">
        <MoreIcon />
      </LeadActionButton>
    </ActionButtons>
  );
}

function ContactLeadsSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;
  const totalLeads = contactLeads.length;
  const totalPages = Math.ceil(totalLeads / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const visibleLeads = useMemo(
    () => contactLeads.slice(startIndex, startIndex + pageSize),
    [startIndex],
  );
  const startLead = totalLeads === 0 ? 0 : startIndex + 1;
  const endLead = Math.min(startIndex + pageSize, totalLeads);
  const showPagination = totalPages > 1;
  const pages = totalPages > 8
    ? [1, 2, 3, 4, 5, "...", totalPages]
    : Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <>
      <ContactStatsGrid>
        {contactLeadStats.map((item) => (
          <LeadStatCard key={item.label}>
            <LeadStatIcon $color={item.color} $bg={item.bg}>
              <StatIcon type={item.icon} />
            </LeadStatIcon>
            <LeadStatCopy>
              <LeadStatLabel>{item.label}</LeadStatLabel>
              <LeadStatValueRow>
                <LeadStatValue>{item.value}</LeadStatValue>
                <LeadStatMeta $green={item.meta.startsWith("+")}>{item.meta}</LeadStatMeta>
              </LeadStatValueRow>
            </LeadStatCopy>
          </LeadStatCard>
        ))}
      </ContactStatsGrid>

      <LeadsCard>
        <LeadsToolbar>
          <LeadsToolbarTop>
            <LeadsSearch>
              <SearchIcon />
              <input placeholder="Search by name, email, phone or source..." />
            </LeadsSearch>
            <ExportButton type="button">
              <ExportIcon />
              Export
            </ExportButton>
          </LeadsToolbarTop>

          <LeadFiltersGrid>
            {contactLeadFilters.map((filter) => (
              <LeadFilterField key={filter.label}>
                {filter.label}
                <LeadSelectWrap>
                  <LeadSelect defaultValue={filter.value}>
                    <option>{filter.value}</option>
                  </LeadSelect>
                </LeadSelectWrap>
              </LeadFilterField>
            ))}
            <FiltersButton type="button">
              <FilterIcon />
              Filters
            </FiltersButton>
            <ResetButton type="button">Reset</ResetButton>
          </LeadFiltersGrid>
        </LeadsToolbar>

        <LeadsTableScroll>
          <LeadsTable>
            <thead>
              <tr>
                <th style={{ width: 40 }}>
                  <Checkbox type="checkbox" />
                </th>
                <th>Lead Details</th>
                <th>Contact Info</th>
                <th>Interested In</th>
                <th>Lead Source</th>
                <th style={{ width: 28 }}>,</th>
                <th>Status</th>
                <th>Assigned To</th>
                <th>
                  Lead Date
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                    style={{ marginLeft: 8, verticalAlign: "-2px" }}
                  >
                    <path d="M12 5v14M7.5 14.5 12 19l4.5-4.5" stroke="#08112f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {visibleLeads.map((lead) => {
                const status = leadStatusStyles[lead.status];

                return (
                  <tr key={lead.id}>
                    <td>
                      <Checkbox type="checkbox" />
                    </td>
                    <td>
                      <LeadDetailsCell>
                        <Avatar variant={lead.avatar} />
                        <div>
                          <LeadName>{lead.name}</LeadName>
                          <LeadEmail>{lead.email}</LeadEmail>
                        </div>
                      </LeadDetailsCell>
                    </td>
                    <td>
                      <TwoLineCell>
                        <strong>{lead.phone}</strong>
                        <span>{lead.country}</span>
                      </TwoLineCell>
                    </td>
                    <td>
                      <InterestCell>
                        <strong>{lead.interestedIn}</strong>
                        <span>{lead.type}</span>
                      </InterestCell>
                    </td>
                    <td>
                      <SourceCell>{lead.source}</SourceCell>
                    </td>
                    <td />
                    <td>
                      <StatusBadge $color={status.color} $bg={status.bg}>
                        {lead.status}
                      </StatusBadge>
                    </td>
                    <td>
                      <AgentCell>
                        <Avatar variant={lead.agentAvatar} small />
                        {lead.assignedTo}
                      </AgentCell>
                    </td>
                    <td>
                      <TwoLineCell>
                        <strong>{lead.date}</strong>
                        <span>{lead.time}</span>
                      </TwoLineCell>
                    </td>
                    <td>
                      <LeadActions />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </LeadsTable>
        </LeadsTableScroll>

        <LeadsFooter>
          <FooterText>{`Showing ${startLead} to ${endLead} of ${totalLeads} leads`}</FooterText>
          {showPagination ? (
            <FooterControls>
              <LeadSelectWrap>
                <PageSizeSelect defaultValue="6 per page">
                  <option>6 per page</option>
                </PageSizeSelect>
              </LeadSelectWrap>
              <Pagination>
                <PageButton type="button" $icon aria-label="Previous page" disabled={currentPage === 1} onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="m15 6-6 6 6 6" stroke="#647086" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </PageButton>
                {pages.map((page, index) =>
                  page === "..." ? (
                    <span key={`ellipsis-${index}`} style={{ padding: "0 6px", fontWeight: 800 }}>
                      ...
                    </span>
                  ) : (
                    <PageButton key={page} type="button" $active={page === currentPage} onClick={() => setCurrentPage(page)}>
                      {page}
                    </PageButton>
                  ),
                )}
                <PageButton type="button" $icon aria-label="Next page" disabled={currentPage === totalPages} onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="m9 6 6 6-6 6" stroke="#647086" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </PageButton>
              </Pagination>
            </FooterControls>
          ) : null}
        </LeadsFooter>
      </LeadsCard>
    </>
  );
}

export default ContactLeadsSection;
