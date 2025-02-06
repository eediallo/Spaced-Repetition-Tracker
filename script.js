import { createAndRenderUserList } from "./dropDownMenu/createUserList.js";
import { setDefaultDate } from "./dates/setDefaultDate.js";
import { eventHandlers } from "./eventHandlers.js";

function main() {
  createAndRenderUserList();
  setDefaultDate();
  eventHandlers();
}

window.onload = main;
