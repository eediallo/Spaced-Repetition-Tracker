import { renderOptions } from "./renderOptions.js";
import { setDefaultDate } from "./defaultDate.js";
const selectEl = document.querySelector("#select-users");
import { displayAgendaForSelectedUser } from "./displayAgenda.js";

function main() {
  renderOptions();
  setDefaultDate();
  selectEl.addEventListener("change", displayAgendaForSelectedUser);
}

window.onload = main;
