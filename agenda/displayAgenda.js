import { getUserIds, getData } from "../data/storage.js";
import { selectUserEl } from "../queries.js";
import { agendaEl } from "../queries.js";
import { createAgendaTitleElement } from "./createTitleEl.js";
import { createAgendaTopicList } from "./createAgendaList.js";

export function displayAgendaForSelectedUser() {
  const userText = selectUserEl.value.toLowerCase();
  const userIds = getUserIds();
  let userHasAgenda = false;
  agendaEl.innerHTML = "";
  for (const id of userIds) {
    const userData = getData(id);
    if (userData && userData.name && userData.name.toLowerCase() === userText) {
      userHasAgenda = true;
      const titleEl = createAgendaTitleElement(userData);
      agendaEl.appendChild(titleEl);
      const agendaList = createAgendaTopicList(userData.agenda);
      agendaList.forEach((dateEl) => agendaEl.appendChild(dateEl));
    }
  }
  if (!userHasAgenda) {
    agendaEl.innerHTML = `No agenda found for <strong>${userText[0].toUpperCase()}${userText.slice(
      1
    )}</strong>. Please add a new topic to revise!`;
  }
}
