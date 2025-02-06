import { formatDate } from "./formateDate.js";

export function calculateDates(defaultDate) {
  let selectedDate = new Date(defaultDate);
  let currentDate = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate()
  );

  let weekLater = new Date(selectedDate);
  let monthLater = new Date(selectedDate);
  let threeMonthsLater = new Date(selectedDate);
  let sixMonthsLater = new Date(selectedDate);
  let yearLater = new Date(selectedDate);

  let twoMonthLater = new Date(selectedDate);
  let fiveMonthLater = new Date(selectedDate);
  let elevenMonthLater = new Date(selectedDate);

  twoMonthLater.setMonth(selectedDate.getMonth() + 2);
  fiveMonthLater.setMonth(selectedDate.getMonth() + 5);
  elevenMonthLater.setMonth(selectedDate.getMonth() + 11);

  weekLater.setDate(selectedDate.getDate() + 7);
  monthLater.setMonth(selectedDate.getMonth() + 1);
  threeMonthsLater.setMonth(selectedDate.getMonth() + 3);
  sixMonthsLater.setMonth(selectedDate.getMonth() + 6);
  yearLater.setFullYear(selectedDate.getFullYear() + 1);

  const startFromPastDate = [
    formatDate(monthLater),
    formatDate(twoMonthLater),
    formatDate(fiveMonthLater),
    formatDate(elevenMonthLater),
  ];

  const startFromselectedDate = [
    formatDate(weekLater),
    formatDate(monthLater),
    formatDate(threeMonthsLater),
    formatDate(sixMonthsLater),
    formatDate(yearLater),
  ];

  return selectedDate < currentDate ? startFromPastDate : startFromselectedDate;
}
