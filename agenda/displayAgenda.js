import { getUserIds, getData } from "../data/storage.js";
import { selectEl } from "../renderOptions.js";
const agendaEl = document.querySelector("#user-agenda-container");
import { createAgendaTitleElement } from "./createTitleEl.js";

export function displayAgendaForSelectedUser() {
  const userText = selectEl.value.toLowerCase();
  const userIds = getUserIds();
  let userHasAgenda = false;
  agendaEl.innerHTML = ""; // Clear previous content before adding new elements
  for (const id of userIds) {
    const userData = getData(id);
    if (userData && userData.name && userData.name.toLowerCase() === userText) {
      userHasAgenda = true;
      const titleEl = createAgendaTitleElement(userData);
      agendaEl.appendChild(titleEl);
      const dateElements = createAgendaDateElements(userData.agenda);
      dateElements.forEach((dateEl) => agendaEl.appendChild(dateEl));
    }
  }
  if (!userHasAgenda) {
    agendaEl.textContent = "No agenda found for this User";
  }
}
