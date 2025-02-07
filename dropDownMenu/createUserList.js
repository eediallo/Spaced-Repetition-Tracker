import { USERS } from "../data/users.js";
import { createOption } from "./createOption.js";
import { selectUserEl } from "../queries.js";

export function createAndRenderUserList() {
  const optionList = USERS.map(createOption);
  selectUserEl.append(...optionList);
}
