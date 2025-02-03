import { renderOptions } from "./renderOptions.js";
import { setDefaultDate } from "./defaultDate.js";

function main() {
  renderOptions();
  setDefaultDate();
  selectEl.addEventListener("change", displayAgendaForSelectedUser);
}

window.onload = main;

