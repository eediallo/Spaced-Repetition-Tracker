const selectEl = document.querySelector("select");
import { createOption } from "./option.js";

function renderOptions(users) {
  const optionList = users.map(createOption);
  selectEl.append(...optionList);
}

window.onload = renderOptions;
