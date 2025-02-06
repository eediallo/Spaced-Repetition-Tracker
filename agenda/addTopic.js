import { displayAgendaForSelectedUser } from "./displayAgenda.js";
import { calculateDates } from "../dates/calculateDates.js";
import { USERS } from "../data/users.js";
import { addData, getData } from "../data/storage.js";

const userSelectEl = document.querySelector("#select-users");

export function addNewTopic() {
  const selectedUserName = userSelectEl.value;

  const topicEl = document.getElementById("form-topic");
  const topicName = topicEl.value;
  const startDate = document.getElementById("form-date").value;

  if (!selectedUserName || !topicName || !startDate) {
    alert("Please fill in all fields.");
    return;
  }

  const newTopic = {
    title: topicName,
    dates: calculateDates(startDate),
  };

  let user = USERS.find((user) => user.name === selectedUserName);

  if (user) {
    const existingData = getData(user.id) || user;

    // Check if the topic already exists
    const topicExists = existingData.agenda.some(
      (topic) => topic.title === topicName
    );
    if (topicExists) {
      alert("This topic already exists for the selected user.");
      return;
    }

    existingData.agenda.push(newTopic);
    user = existingData;
    addData(user.id, user);
  }
  displayAgendaForSelectedUser();

  topicEl.value = "";
}
