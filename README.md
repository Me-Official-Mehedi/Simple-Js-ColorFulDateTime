# Dynamic Terminal Timer

[![Node.js](https://img.shields.io/badge/Node.js-%3E%3D14-brightgreen)](https://nodejs.org/) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A dynamic Node.js terminal timer that displays a live updating clock with colorful output using [chalk](https://github.com/chalk/chalk). This project is designed to run in your terminal and update every second, offering a vibrant display of the current date and time.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Customization](#customization)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)

## Features

- **Live Timer:** Updates the terminal every second with the current date and time.
- **Colorful Output:** Uses [chalk](https://github.com/chalk/chalk) to add colors to different parts of the timer.
- **Dynamic Display:** Clears and refreshes the terminal for a clean live update effect.
- **Customizable Format:** Easily modify the date and time format or the colors used.

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- npm (comes bundled with Node.js)

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/dynamic-terminal-timer.git
   cd dynamic-terminal-timer

2. **Install dependencies:**

- There are two approaches depending on your preferred import style with chalk:

   - Using ES Modules (Recommended with Chalk v5+):
   
   - Rename your file to use the .mjs extension (e.g., DataTime.mjs).
   
   - Install chalk (latest version):
```bash
npm install chalk
```

- Using CommonJS (if you prefer require()):

   - Install chalk version 4.1.2:
```bash
npm uninstall chalk
npm install chalk@4.1.2
```

## Usage
**Running the Timer**
 1. For ES Modules (Chalk v5+):
   - Ensure your timer file is renamed (e.g., DataTime.mjs) and update the import as follows:
```bash
import chalk from 'chalk';
```
- Run the timer using:
```bash
node DataTime.mjs
```
2. For CommonJS (Chalk v4.1.2):
```bash
const chalk = require('chalk');
```
   - Run the timer using:
```bash
node DataTime.js
```
## Customization
- Date & Time Format:
Adjust the format by modifying the strings in the console.log() call inside UpdateTimer().

- Color Scheme:
Change chalk colors by replacing chalk.cyan(), chalk.green(), etc., with your preferred colors or styles (e.g., chalk.red.bold()).

- Starting Date/Time:
Modify the DateVar variable to set a different starting time.

## Troubleshooting
Chalk Import Errors:

- If you see an error like chalk.cyan is not a function, verify if you are using the correct import for your version of chalk (see Installation section).

- No Output/Terminal Issues:

- Ensure your file is saved with the correct extension (.js for CommonJS or .mjs for ES Modules).

- Verify that Node.js is correctly installed by running node -v.

#  Contributing
Contributions are welcome! Please follow these steps:

Fork the repository.

- Create a new branch (git checkout -b feature/YourFeature).

- Commit your changes (git commit -m 'Add new feature').

- Push your branch (git push origin feature/YourFeature).

- Open a pull request.
