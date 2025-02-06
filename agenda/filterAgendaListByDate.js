import { parseDate } from "./parseDate.js";

export function filterAgendaListByDate(agenda) {
  return agenda
    .flatMap(({ title, dates }) =>
      dates.map((date) => ({ title, date, parsedDate: parseDate(date) }))
    )
    .sort((a, b) => a.parsedDate - b.parsedDate);
}
