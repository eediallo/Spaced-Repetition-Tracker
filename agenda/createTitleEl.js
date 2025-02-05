export function createAgendaTitleElement(userData) {
  const titleEl = document.createElement("h3");
  titleEl.textContent = `Agenda for ${userData.name}`;
  return titleEl;
}
