import { users_data } from "./data.js";
const agendaEl = document.querySelector("#user-agenda-container"); // does not exist yet ==> nadika in charge

export function displayAgendaForSelectedUser(e) {
  const userText = e.target.value;
  const user = users_data.find((user) => user.name === userText);
  const { agenda } = user;

  agendaEl.innerHTML = ""; // Clear previous content

  if (agenda.length === 0) {
    const dateEl = document.createElement("div");
    dateEl.textContent = `There is no agenda for ${user.name}`;
    agendaEl.appendChild(dateEl);
  } else {
    agenda.forEach((agendaItem) => {
      const titleEl = document.createElement("h3");
      titleEl.textContent = agendaItem.title;
      agendaEl.appendChild(titleEl);

      agendaItem.dates.forEach((date) => {
        const dateEl = document.createElement("div");
        dateEl.textContent = date;
        agendaEl.appendChild(dateEl);
      })
    })
  }
}
