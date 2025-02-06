import { filterAgendaListByDate } from "./filterAgendaListByDate.js";

export function createAgendaTopicList(agenda) {
  const agendaList = [];

  const sortedDates = filterAgendaListByDate(agenda);

  sortedDates.forEach(({ title, date }) => {
    const dateEl = document.createElement("p");
    dateEl.textContent = `${title}, ${date}`;
    agendaList.push(dateEl);
  });

  return agendaList;
}
