# Spaced-Repetition-Tracker

This project implements a spaced repetition learning technique, which involves reviewing topics over increasing time intervals (e.g., after one week, one month, three months, six months, and one year) from a selected date. The start date for the learning task can be chosen from the past, present, or future. The goal is to help users track which topics need revision and when.

## Technologies
- **HTML**: Used for the structure of the website.
- **JavaScript**: Used for functionality, including date calculations, user interaction, and data storage.
- **localStorage**: Used to store the user data locally in the browser.

## Set up & Installation
1. **Clone the repository** <br>git clone https://github.com/your-username/spaced-repetition-tracker.git
2. **Navigate into the project folder (if needed)** <br>cd spaced-repetition-tracker
3. **Open index.html in your browser** <br>Ensure the project is served over HTTP for the module system to work.

## Running tests
#### Make sure you have **Node.js** and **npm** installed before running the tests.
1. **Install dependencies** <br>npm install
2. **Run Unit Tests:** <br>npm test <br>This will run the tests using Jest, the testing framework used in this project. 
3. **Check the Test Results:** <br>The test results will be displayed in the terminal. If the tests pass, you'll see a message indicating that all tests have passed. If any test fails, you will get an error message showing where the issue is.

## Usage
1. Open the application in your browser.
2. Select a user from the dropdown to view their study agenda.
3. Add a new topic with a start date.
4. The app will calculate and display review dates based on spaced repetition intervals.

## Contributions 
<br>Contributions are welcome. If you find any bugs or want to improve the project, feel free to fork the repo, make your changes, and submit a pull request.
