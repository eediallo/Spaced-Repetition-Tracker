export function parseDate(dateStr) {
  const suffixes = ["st", "nd", "rd", "th"];
  let [day, month, year] = dateStr.split(" ");

  suffixes.forEach((suffix) => {
    if (day.endsWith(suffix)) {
      day = day.slice(0, -suffix.length);
    }
  });

  return new Date(`${month} ${day}, ${year}`); // Convert to Date object
}
