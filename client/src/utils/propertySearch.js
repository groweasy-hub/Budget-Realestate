export function normalizeSearchValue(value) {
  return String(value || "").trim().toLowerCase();
}

export function parseAmountInput(value) {
  const normalized = String(value || "")
    .trim()
    .toLowerCase()
    .replace(/,/g, "")
    .replace(/\s+/g, "");

  if (!normalized) {
    return null;
  }

  const match = normalized.match(
    /^(\d+(?:\.\d+)?)(k|l|lac|lakh|lakhs|cr|crore|crores)?$/,
  );

  if (!match) {
    return null;
  }

  const numericValue = Number(match[1]);

  if (!Number.isFinite(numericValue)) {
    return null;
  }

  switch (match[2]) {
    case "k":
      return numericValue * 1000;
    case "l":
    case "lac":
    case "lakh":
    case "lakhs":
      return numericValue * 100000;
    case "cr":
    case "crore":
    case "crores":
      return numericValue * 10000000;
    default:
      return numericValue;
  }
}

export function buildPropertySearchQuery({
  location = "",
  propertyType = "",
  minBudget = "",
  maxBudget = "",
}) {
  const params = new URLSearchParams();

  if (String(location).trim()) {
    params.set("location", String(location).trim());
  }

  if (String(propertyType).trim()) {
    params.set("propertyType", String(propertyType).trim());
  }

  if (String(minBudget).trim()) {
    params.set("minBudget", String(minBudget).trim());
  }

  if (String(maxBudget).trim()) {
    params.set("maxBudget", String(maxBudget).trim());
  }

  return params.toString();
}

export function matchesLocation(source, query) {
  if (!normalizeSearchValue(query)) {
    return true;
  }

  return normalizeSearchValue(source).includes(normalizeSearchValue(query));
}

export function matchesPropertyType(actualType, selectedType) {
  if (!normalizeSearchValue(selectedType) || selectedType === "All Types") {
    return true;
  }

  return normalizeSearchValue(actualType) === normalizeSearchValue(selectedType);
}

export function matchesBudgetRange(
  rangeMin,
  rangeMax,
  minBudgetInput,
  maxBudgetInput,
) {
  const minBudget = parseAmountInput(minBudgetInput);
  const maxBudget = parseAmountInput(maxBudgetInput);

  if (minBudget !== null && rangeMax < minBudget) {
    return false;
  }

  if (maxBudget !== null && rangeMin > maxBudget) {
    return false;
  }

  return true;
}

export function parsePriceRangeText(priceText) {
  const matches = [...String(priceText || "").matchAll(/(\d+(?:\.\d+)?)\s*(Cr|Crore|Crores|L|Lac|Lakh|Lakhs|K)?/gi)];
  const values = matches
    .map((match) => parseAmountInput(`${match[1]}${match[2] || ""}`))
    .filter((value) => value !== null);

  if (values.length === 0) {
    return { min: 0, max: 0 };
  }

  if (values.length === 1) {
    return { min: values[0], max: values[0] };
  }

  return {
    min: Math.min(...values),
    max: Math.max(...values),
  };
}

export function splitBudgetRangeText(value) {
  const [minBudget = "", maxBudget = ""] = String(value || "")
    .split("-")
    .map((item) => item.trim());

  return {
    minBudget,
    maxBudget,
  };
}

export function formatBudgetRangeText(minBudget, maxBudget) {
  if (!minBudget && !maxBudget) {
    return "";
  }

  return `${minBudget || ""}${minBudget || maxBudget ? " - " : ""}${maxBudget || ""}`.trim();
}
