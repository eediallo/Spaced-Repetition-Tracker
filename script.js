import { renderOptions } from "./dropDownMenu/renderOptions.js";
import { setDefaultDate } from "./dates/defaultDate.js";
const selectEl = document.querySelector("#select-users");
const newTopicForm = document.querySelector("#form-add-topic");
import { addNewTopic } from "./addTopic.js";
import { displayAgendaForSelectedUser } from "./agenda/displayAgenda.js";

function main() {
  renderOptions();
  setDefaultDate();
  eventHandlers();
}

function eventHandlers() {
  selectEl.addEventListener("change", (e) => {
    e.preventDefault();
    displayAgendaForSelectedUser();
  });
  newTopicForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addNewTopic();
  });
}

window.onload = main;
