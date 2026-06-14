import {
  ActionButtons,
  BuyFiltersRow,
  BuyPageCard,
  BuyPropertyCell,
  BuyPropertyName,
  BuyTable,
  BuyTableFooter,
  BuyTableWrap,
  BuyThumb,
  BuyToolbar,
  BuyToolbarTop,
  CheckboxCell,
  FilterField,
  FilterFieldLabel,
  FilterSelect,
  FiltersActionWrap,
  FooterControls,
  FooterMeta,
  MoreFiltersButton,
  PageSizeSelect,
  Pagination,
  PaginationButton,
  Pill,
  PrimaryAction,
  SearchInput,
  SearchWrap,
  SecondaryAction,
  SelectWrap,
  TableActionButton,
  TableCheckbox,
  TableScroll,
} from "../AdminDashboardStyles";

function SearchIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="6.7" stroke="#7D879A" strokeWidth="1.8" />
      <path d="m20 20-4.2-4.2" stroke="#7D879A" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 5v14M5 12h14" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ExportIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3v11" stroke="#18233D" strokeWidth="1.9" strokeLinecap="round" />
      <path d="m7.5 9.5 4.5 4.5 4.5-4.5" stroke="#18233D" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 17.5v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1" stroke="#18233D" strokeWidth="1.9" strokeLinecap="round" />
    </svg>
  );
}

function MoreFiltersIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 7h14M8 12h8M10 17h4" stroke="#18233D" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="8" cy="7" r="1.2" fill="#18233D" />
      <circle cx="14" cy="12" r="1.2" fill="#18233D" />
      <circle cx="11" cy="17" r="1.2" fill="#18233D" />
    </svg>
  );
}

function RowActions() {
  return (
    <ActionButtons>
      <TableActionButton type="button" aria-label="View property">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M2.8 12s3.4-5.8 9.2-5.8 9.2 5.8 9.2 5.8-3.4 5.8-9.2 5.8S2.8 12 2.8 12Z" stroke="#647086" strokeWidth="1.7" strokeLinejoin="round" />
          <circle cx="12" cy="12" r="2.7" stroke="#647086" strokeWidth="1.7" />
        </svg>
      </TableActionButton>
      <TableActionButton type="button" aria-label="Edit property">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="m4 20 3.5-.7L18 8.8 15.2 6 4.7 16.5 4 20Z" stroke="#647086" strokeWidth="1.7" strokeLinejoin="round" />
          <path d="m13.8 7.4 2.8 2.8" stroke="#647086" strokeWidth="1.7" />
        </svg>
      </TableActionButton>
      <TableActionButton type="button" aria-label="More actions">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="5.5" r="1.7" fill="#647086" />
          <circle cx="12" cy="12" r="1.7" fill="#647086" />
          <circle cx="12" cy="18.5" r="1.7" fill="#647086" />
        </svg>
      </TableActionButton>
    </ActionButtons>
  );
}

function PropertyManagementTable({
  columns,
  filters,
  rows,
  totalProperties,
  primaryActionLabel = "Add New Property",
  pageSize = 6,
  currentPage = 1,
  totalPages,
}) {
  const pageCount = totalPages ?? Math.ceil(totalProperties / pageSize);
  const startIndex = totalProperties === 0 ? 0 : (currentPage - 1) * pageSize + 1;
  const endIndex = Math.min(currentPage * pageSize, totalProperties);
  const visibleRows = rows.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  const pages = pageCount > 8 ? [1, 2, 3, 4, 5, "...", pageCount] : Array.from({ length: pageCount }, (_, index) => index + 1);

  return (
    <BuyPageCard>
      <BuyToolbar>
        <BuyToolbarTop>
          <SearchWrap>
            <SearchIcon />
            <SearchInput placeholder="Search by property title, location or ID..." />
          </SearchWrap>

          <div style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
            <PrimaryAction type="button">
              <PlusIcon />
              {primaryActionLabel}
            </PrimaryAction>
            <SecondaryAction type="button">
              <ExportIcon />
              Export
            </SecondaryAction>
          </div>
        </BuyToolbarTop>

        <BuyFiltersRow $columns={filters.length}>
          {filters.map((filter) => (
            <FilterField key={filter.label}>
              <FilterFieldLabel>{filter.label}</FilterFieldLabel>
              <SelectWrap>
                <FilterSelect defaultValue={filter.value}>
                  <option>{filter.value}</option>
                </FilterSelect>
              </SelectWrap>
            </FilterField>
          ))}

          <FiltersActionWrap>
            <MoreFiltersButton type="button">
              <MoreFiltersIcon />
              More Filters
            </MoreFiltersButton>
          </FiltersActionWrap>
        </BuyFiltersRow>
      </BuyToolbar>

      <BuyTableWrap>
        <TableScroll>
          <BuyTable>
            <thead>
              <tr>
                <th style={{ width: 42 }}>
                  <TableCheckbox type="checkbox" />
                </th>
                {columns.map((column) => (
                  <th key={column.key}>{column.label}</th>
                ))}
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {visibleRows.map((row) => (
                <tr key={row.id}>
                  <CheckboxCell>
                    <TableCheckbox type="checkbox" />
                  </CheckboxCell>
                  {columns.map((column) => (
                    <td key={column.key}>
                      {typeof column.render === "function" ? (
                        column.render(row)
                      ) : column.key === "property" ? (
                        <BuyPropertyCell>
                          <BuyThumb src={row.thumb} alt={row.name} />
                          <BuyPropertyName>
                            {row.name}
                            {row.subtitle ? <span>{row.subtitle}</span> : null}
                          </BuyPropertyName>
                        </BuyPropertyCell>
                      ) : column.key === "type" ? (
                        <Pill $color={row.type.color} $bg={row.type.bg}>
                          {row.type.label}
                        </Pill>
                      ) : column.key === "status" ? (
                        <Pill $color={row.status.color} $bg={row.status.bg}>
                          {row.status.label}
                        </Pill>
                      ) : (
                        row[column.key]
                      )}
                    </td>
                  ))}
                  <td>
                    <RowActions />
                  </td>
                </tr>
              ))}
            </tbody>
          </BuyTable>
        </TableScroll>
      </BuyTableWrap>

      <BuyTableFooter>
        <FooterMeta>{`Showing ${startIndex} to ${endIndex} of ${totalProperties} properties`}</FooterMeta>
        {pageCount > 1 ? (
          <FooterControls>
            <SelectWrap>
              <PageSizeSelect defaultValue="6 per page">
                <option>6 per page</option>
              </PageSizeSelect>
            </SelectWrap>

            <Pagination>
              <PaginationButton type="button" $icon>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="m15 6-6 6 6 6" stroke="#647086" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </PaginationButton>
              {pages.map((page, index) =>
                page === "..." ? (
                  <span key={`ellipsis-${index}`} style={{ padding: "0 10px", fontWeight: 700 }}>
                    ...
                  </span>
                ) : (
                  <PaginationButton key={page} type="button" $active={page === currentPage} $plain={page !== currentPage}>
                    {page}
                  </PaginationButton>
                ),
              )}
              <PaginationButton type="button" $icon>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="m9 6 6 6-6 6" stroke="#647086" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </PaginationButton>
            </Pagination>
          </FooterControls>
        ) : null}
      </BuyTableFooter>
    </BuyPageCard>
  );
}

export default PropertyManagementTable;
