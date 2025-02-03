import { displayAgendaForSelectedUser } from "./displayAgenda.js";
import { renderOptions, selectEl } from "./renderOptions.js";

function main() {
  renderOptions();

  selectEl.addEventListener("change", displayAgendaForSelectedUser);
}

window.onload = main;
