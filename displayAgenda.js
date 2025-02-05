// import { users_data } from "./data.js"; We don't need it
import { getData } from "./storage.js"; // Added import
const agendaEl = document.querySelector("#user-agenda-container"); // does not exist yet ==> nadika in charge

export function displayAgendaForSelectedUser(e) {
  // const userText = e.target.value; 
  // const user = users_data.find((user) => user.name === userText); // Issue with connection with getUserIds() - return IDs, but we are searching for a user.name!
  const selectedUserId = document.getElementById("select-users").value.trim(); // Added - get user ID, not a name. Get Id directly.
  if (!selectedUserId) return; // Added - Break if user is not selected.
  
  // Get user agenda from storage
  const userAgenda = getData(selectedUserId) || [];

  // Clear previous agenda
  agendaEl.innerHTML = "<h2>Agenda: Task Reviews</h2>"; // Added - Must be before loop

  // Add message when empty agenda
  if (userAgenda.length === 0) {
    const emptyAgenda = document.createElement("div");
    emptyAgenda.textContent = `There is no agenda for this user.`;
    agendaEl.appendChild(emptyAgenda);
    return;
  }

  // Display agenda for each user
  userAgenda.forEach((agenda) => {
    const { title, dates } = agenda;
    dates.forEach((date) => {
      const dateEl = document.createElement("div");
      dateEl.textContent = `${title}, ${date}`;
      agendaEl.appendChild(dateEl);
    });
  });

  // for (const agenda of user.agenda) {
  //   const { title, dates } = agenda;
  //   agendaEl.innerHTML = ""; // Clear previous content
  //   if (dates.length === 0 || title === "") {
  //     const dateEl = document.createElement("div");
  //     dateEl.textContent = `There is no agenda for ${user.name}`;
  //     agendaEl.appendChild(dateEl);
  //   } else {
  //     for (const date of dates) {
  //       const dateEl = document.createElement("div");
  //       dateEl.textContent = `${title}, ${date}`;
  //       agendaEl.appendChild(dateEl);
  //     }
  //   }
  // }
}
