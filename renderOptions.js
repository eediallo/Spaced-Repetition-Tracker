const selectEl = document.querySelector("#select-users");
import { createOption } from "./option.js";
import users_data from './data.js'

function renderOptions() {
  const optionList = users_data.map(createOption);
  selectEl.append(...optionList);
}

window.onload = renderOptions;
