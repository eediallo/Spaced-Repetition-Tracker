import { formatDate } from "./formateDate.js";

export function calculateDates(defaultDate) {
  const selectedDate = new Date(defaultDate);
  const currentDate = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate()
  );

  const dates = {
    weekLater: new Date(selectedDate),
    monthLater: new Date(selectedDate),
    threeMonthsLater: new Date(selectedDate),
    sixMonthsLater: new Date(selectedDate),
    yearLater: new Date(selectedDate),
    twoMonthLater: new Date(selectedDate),
    fiveMonthLater: new Date(selectedDate),
    elevenMonthLater: new Date(selectedDate),
  };

  dates.weekLater.setDate(selectedDate.getDate() + 7);
  dates.monthLater.setMonth(selectedDate.getMonth() + 1);
  dates.threeMonthsLater.setMonth(selectedDate.getMonth() + 3);
  dates.sixMonthsLater.setMonth(selectedDate.getMonth() + 6);
  dates.yearLater.setFullYear(selectedDate.getFullYear() + 1);
  dates.twoMonthLater.setMonth(selectedDate.getMonth() + 2);
  dates.fiveMonthLater.setMonth(selectedDate.getMonth() + 5);
  dates.elevenMonthLater.setMonth(selectedDate.getMonth() + 11);

  const startFromPastDateDates = [
    formatDate(dates.monthLater),
    formatDate(dates.twoMonthLater),
    formatDate(dates.fiveMonthLater),
    formatDate(dates.elevenMonthLater),
  ];

  const startFromselectedDateDates = [
    formatDate(dates.weekLater),
    formatDate(dates.monthLater),
    formatDate(dates.threeMonthsLater),
    formatDate(dates.sixMonthsLater),
    formatDate(dates.yearLater),
  ];

  return selectedDate < currentDate
    ? startFromPastDateDates
    : startFromselectedDateDates;
}
