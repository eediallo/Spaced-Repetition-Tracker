import { USERS } from "../data/users.js";
import { createOption } from "./createOption.js";
import { userSelectEl } from "../queries.js";

export function createAndRenderUserList() {
  const optionList = USERS.map(createOption);
  userSelectEl.append(...optionList);
}
