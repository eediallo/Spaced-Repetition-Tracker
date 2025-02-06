export const selectEl = document.querySelector("#select-users");
import { USERS } from "../data/users.js";
import { createOption } from "./createOption.js";

export function createAndRenderUserList() {
  const optionList = USERS.map(createOption);
  selectEl.append(...optionList);
}
