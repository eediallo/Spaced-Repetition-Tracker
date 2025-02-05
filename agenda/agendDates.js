import { parseDate } from "./parseDate.js";

export function createAgendaDateElements(agenda) {
  const dateElements = [];

  const sortedDates = agenda
    .flatMap(({ title, dates }) =>
      dates.map((date) => ({ title, date, parsedDate: parseDate(date) }))
    )
    .sort((a, b) => a.parsedDate - b.parsedDate);

  sortedDates.forEach(({ title, date }) => {
    const dateEl = document.createElement("p");
    dateEl.textContent = `${title}, ${date}`;
    dateElements.push(dateEl);
  });

  return dateElements;
}
