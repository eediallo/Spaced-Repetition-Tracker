const selectEl = document.querySelector("#select-users");
const newTopicForm = document.querySelector("#form-add-topic");
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
