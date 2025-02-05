import { displayAgendaForSelectedUser } from "./displayAgenda.js";
import { calculateDates } from "./calculateDate.js";
import { users_data } from "./data.js";
import { addData, getData } from "./storage.js";

const userSelectEl = document.getElementById("select-users");

export function addNewTopic() {
  const selectedUserName = userSelectEl.value;
  const topicName = document.getElementById("form-topic").value;
  const startDate = document.getElementById("form-date").value;

  if (!selectedUserName || !topicName || !startDate) {
    alert("Please fill in all fields.");
    return;
  }

  const newTopic = {
    title: topicName,
    dates: calculateDates(startDate),
  };

  let user = users_data.find((user) => user.name === selectedUserName);

  if (user) {
    const existingData = getData(user.id) || user;
    existingData.agenda.push(newTopic);
    user = existingData;
    addData(user.id, user);
  }
  displayAgendaForSelectedUser();

  // Clear input fields after submission
  document.getElementById("form-topic").value = "";
}
