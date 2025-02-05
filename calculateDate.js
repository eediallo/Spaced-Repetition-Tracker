export function formatDate(date) {
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();

  let suffix = "th";
  if (day === 1 || day === 21 || day === 31) suffix = "st";
  if (day === 2 || day === 22) suffix = "nd";
  if (day === 3 || day === 23) suffix = "rd";

  return `${day}${suffix} ${month} ${year}`;
}

export function calculateDates(defaultDate) {
  let todayDate = new Date(defaultDate);
  const currentDate = new Date();

  // If the selected date is in the past, set it to today's date
  if (todayDate < currentDate) {
    todayDate = currentDate;
  }

  const weekLater = new Date(todayDate);
  const monthLater = new Date(todayDate);
  const threeMonthsLater = new Date(todayDate);
  const sixMonthsLater = new Date(todayDate);
  const yearLater = new Date(todayDate);

  weekLater.setDate(todayDate.getDate() + 7);
  monthLater.setMonth(todayDate.getMonth() + 1);
  threeMonthsLater.setMonth(todayDate.getMonth() + 3);
  sixMonthsLater.setMonth(todayDate.getMonth() + 6);
  yearLater.setFullYear(todayDate.getFullYear() + 1);

  return [
    formatDate(weekLater),
    formatDate(monthLater),
    formatDate(threeMonthsLater),
    formatDate(sixMonthsLater),
    formatDate(yearLater),
  ];
}
