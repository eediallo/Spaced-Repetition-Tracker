import { displayAgendaForSelectedUser } from "./displayAgenda.js";
import { getFutureDates } from "../dates/getFutureDates.js";
import { USERS } from "../data/users.js";
import { addData, getData } from "../data/storage.js";
import { userSelectEl, topicEl, inputDate } from "../queries.js";
import { alertMsg } from "./alertMsg.js";

export function addNewTopic() {
  const selectedUserName = userSelectEl.value;
  const topicName = topicEl.value;
  const startDate = inputDate.value;
  if (!selectedUserName || !topicName || !startDate) {
    alertMsg("Please fill in all fields.");
  }

  const newTopic = {
    title: topicName,
    dates: getFutureDates(startDate),
  };

  let user = USERS.find((user) => user.name === selectedUserName);
  if (!user) {
    alertMsg("User not found.");
  }

  const existingData = getData(user.id) || user;
  if (existingData.agenda.some((topic) => topic.title === topicName)) {
    alertMsg("This topic already exists for the selected user.");
  }

  existingData.agenda.push(newTopic);
  addData(user.id, existingData);

  displayAgendaForSelectedUser();
  topicEl.value = "";
}
