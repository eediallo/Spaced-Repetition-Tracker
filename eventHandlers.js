import { selectUserEl } from "../queries.js";
import { newTopicForm } from "../queries.js";
import { addNewTopic } from "./agenda/addTopic.js";
import { displayAgendaForSelectedUser } from "./agenda/displayAgenda.js";

export function eventHandlers() {
  selectUserEl.addEventListener("change", (e) => {    
    displayAgendaForSelectedUser();
  });
  newTopicForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addNewTopic();
  });
}
