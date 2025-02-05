import { renderOptions } from "./renderOptions.js";
import { setDefaultDate } from "./defaultDate.js";
const selectEl = document.querySelector("#select-users");
const newTopicForm = document.querySelector('#form-add-topic');
import {addNewTopic} from "./addTopic.js"
import { displayAgendaForSelectedUser } from "./displayAgenda.js";

function main() {
  renderOptions();
  setDefaultDate();
  selectEl.addEventListener("change", displayAgendaForSelectedUser);
  newTopicForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Added (). Without (), the page will still reload, it can cause issue when storing data in localStorage!
    addNewTopic();
  });
}

window.onload = main;
