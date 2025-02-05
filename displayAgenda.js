import { users_data } from "./data.js";
const agendaEl = document.querySelector("#user-agenda-container"); // does not exist yet ==> nadika in charge

export function displayAgendaForSelectedUser(e) {
  const userText = e.target.value;
  const user = users_data.find((user) => user.name === userText);

  for (const agenda of user.agenda) {
    const { title, dates } = agenda;
    agendaEl.innerHTML = ""; // Clear previous content
    if (dates.length === 0 || title === "") {
      const dateEl = document.createElement("div");
      dateEl.textContent = `There is no agenda for ${user.name}`;
      agendaEl.appendChild(dateEl);
    } else {
      for (const date of dates) {
        const dateEl = document.createElement("div");
        dateEl.textContent = `${title}, ${date}`;
        agendaEl.appendChild(dateEl);
      }
    }
  }
}
