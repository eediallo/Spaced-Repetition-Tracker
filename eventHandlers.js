import { selectEl } from "../queries.js";
import { newTopicForm } from "../queries.js";
import { addNewTopic } from "./agenda/addTopic.js";
import { displayAgendaForSelectedUser } from "./agenda/displayAgenda.js";

export function eventHandlers() {
  selectEl.addEventListener("change", (e) => {
    e.preventDefault();
    displayAgendaForSelectedUser();
  });
  newTopicForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addNewTopic();
  });
}
