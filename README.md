# Sample UI test automation for Circula app
This repository contains the Cypress test automation framework for end-to-end testing of [Circula](https://www.circula.com/en).
This automation framework is developed using Cypress, JavaScript and CSS.

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/) 
- [npm](https://www.npmjs.com/) (comes with Node.js)
  
## Installation

Follow these steps to set up the project locally:

1. **Clone the repository**: https://github.com/nylm/circula-task.git
2. **Install project dependencies**:
    ```bash
    npm install
    ```


## Running Tests

You can run the Cypress tests using the following commands:

1. **Open Cypress Test Runner**:

    This command opens the Cypress Test Runner, allowing you to run tests interactively:

    ```bash
    npx cypress open
    ```

2. **Run Cypress tests in headless mode**:

    This command runs the tests in headless mode and outputs the results in the terminal:

    ```bash
    npx cypress run
    ```

## Project Structure

- `cypress/`
  - `fixtures/`: Sample data files used in tests
  - `e2e/`: Test files
  - `pages/`: Page objects model
  - `support/`: Support files and reusable functions, custom commands
  - `cypress.config.js`: Cypress/project configuration
 
## Additional Resources

- [Cypress Documentation](https://docs.cypress.io)
- [Cypress GitHub Repository](https://github.com/cypress-io/cypress)
