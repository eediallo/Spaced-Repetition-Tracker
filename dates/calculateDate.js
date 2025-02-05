import { formatDate } from "./formateDate.js";

export function calculateDates(defaultDate) {
  let todayDate = new Date(defaultDate);
  const currentDate = new Date();

  if (todayDate < currentDate) {
    todayDate = currentDate;
  }

  const futureDates = [
    new Date(todayDate.setDate(todayDate.getDate() + 7)),
    new Date(todayDate.setMonth(todayDate.getMonth() + 1)),
    new Date(todayDate.setMonth(todayDate.getMonth() + 2)),
    new Date(todayDate.setMonth(todayDate.getMonth() + 3)),
    new Date(todayDate.setFullYear(todayDate.getFullYear() + 1)),
  ];

  // Sort the dates before formatting
  return futureDates.sort((a, b) => a - b).map(formatDate);
}
