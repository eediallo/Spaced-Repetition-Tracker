import { getUserIds, getData } from "./storage.js";
import { selectEl } from "./renderOptions.js";
const agendaEl = document.querySelector("#user-agenda-container");

export function displayAgendaForSelectedUser(e) {
  e.preventDefault();
  const userText = selectEl.value.toLowerCase();
  const userIds = getUserIds();
  let userHasAgenda = false;
  agendaEl.innerHTML = ""; // Clear previous content before adding new elements
  for (const id of userIds) {
    const userData = getData(id);
    if (userData && userData.name && userData.name.toLowerCase() === userText) {
      userHasAgenda = true;
      const titleEl = document.createElement("h3");
      titleEl.textContent = `Agenda for ${userData.name}`;
      agendaEl.appendChild(titleEl);
      userData.agenda.forEach(({ title, dates }) => {
        dates.forEach((date) => {
          const dateEl = document.createElement("p");
          dateEl.textContent = `${title}, ${date}`;
          agendaEl.appendChild(dateEl);
        });
      });
    }
  }
  if (!userHasAgenda) {
    agendaEl.textContent = "No agenda found for this User";
  }
}
