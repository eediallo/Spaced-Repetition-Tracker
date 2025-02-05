import { renderOptions } from "./renderOptions.js";
import { setDefaultDate } from "./defaultDate.js";
const selectEl = document.querySelector("#select-users");
const newTopicForm = document.querySelector("#form-add-topic");
import { addNewTopic } from "./addTopic.js";
import { displayAgendaForSelectedUser } from "./displayAgenda.js";

function main() {
  renderOptions();
  setDefaultDate();
  eventHandlers();
}

function eventHandlers() {
  selectEl.addEventListener("change", displayAgendaForSelectedUser);
  newTopicForm.addEventListener("submit", addNewTopic);
}

window.onload = main;
