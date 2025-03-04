# Spaced-Repetition-Tracker

This project implements a spaced repetition learning technique, which involves reviewing topics over increasing time intervals (e.g., after one week, one month, three months, six months, and one year) from a selected date. The start date for the learning task can be chosen from the past, present, or future.<br>**The goal** is to help users track which topics need revision and when.

## Features
- **Topic Tracking:** Users can add topics they want to revise.
- **Revision Schedule:** The system calculates and displays the revision dates based on spaced repetition intervals.
- **Agenda Display:** A simple frontend built with HTML and JavaScript shows an agenda of topics to revise on specific dates.

## Technologies
- **HTML:** Used for the structure of the project.
- **JavaScript:** Used for functionality, including date calculations, user interaction, and data storage.
- **localStorage:** Used to store the user data locally in the browser.
- **Jest:** Used for unit testing to ensure the core functionality works as expected.

## Set up & Installation
1. **Clone the repository** <br>``` git clone https://github.com/eediallo/spaced-repetition-tracker.git ```
2. **Navigate into the project folder (if needed)** <br>``` cd spaced-repetition-tracker``` 
3. **Open index.html in your browser** <br>Ensure the project is served over HTTP for the module system to work. [Learn to serve over HTTP.](https://www.npmjs.com/package/http-server)

## Running tests
#### Make sure you have Node.js installed before running the tests.
1. **Install dependencies:** <br>``` npm install ```
2. **Run Unit Tests:** <br>``` npm test ```<br>This will run the tests using [Jest](https://jestjs.io).
3. **Check the Test Results:** <br>The test results will be displayed in the terminal.

## Usage
1. Open the application in your browser.
2. Select a user from the dropdown to view their study agenda.
3. Add a new topic with a start date.
4. The app will calculate and display review dates based on spaced repetition intervals.

## Notes
- This project focuses on logic implementation, so **no CSS** is used for styling.
- The frontend is kept simple to emphasize functionality over design.

## Contributions 
<br>Contributions are welcome. If you find any bugs or want to improve the project, feel free to fork the repo, make your changes, and submit a pull request.
