const selectEl = document.querySelector("#select-users");
import { users_data } from "./data.js";
import { createOption } from "./option.js";

export function renderOptions() {
  const optionList = users_data.map(createOption);
  selectEl.append(...optionList);
}
