export function priceFormat(price = 0, digit = 0): string {
  return price.toLocaleString("en-US", {
    minimumFractionDigits: digit,
    maximumFractionDigits: digit,
  });
}

export function convertObjectValuesToStrings(obj: {
  [key: string]: string | number | number[];
}) {
  const result: { [key: string]: string } = {};

  for (const [key, value] of Object.entries(obj)) {
    if (!value || value == "") {
      continue;
    }

    if (
      Array.isArray(value) &&
      value.every((item) => typeof item === "number")
    ) {
      result[key] = value.join(",");
    } else if (typeof value === "number" || typeof value === "string") {
      result[key] = value.toString();
    }
  }

  return result;
}
