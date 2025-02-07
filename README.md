# Playwright Tests  

This project uses **Playwright** to run automated end-to-end tests for a React application built with **Vite**.  

## Prerequisites  

Before running the tests, make sure you have the following installed:  

- **Node.js** (v18 or later)  
- **npm** (comes with Node.js)  
- **Playwright**  

## Installation  

1. Clone the repository:  'git clone https://github.com/Diankavoy19/Test-Task.git'
2. Install dependencies for both the React app and Playwright tests:  
   ```sh
   cd my-vite-app && npm install
   cd ../playwright && npm install
   ```
3. Install Playwright browsers:  
   ```sh
   npx playwright install --with-deps
   ```
## Running the Application  

To start the React application locally:  

```sh
cd my-vite-app
npm run dev
```

By default, it runs on **http://localhost:5173**.

## Running Playwright Tests  

1. Open a new terminal and navigate to the Playwright folder:  
   ```sh
   cd playwright
   ```

2. Run the tests:  
   ```sh
   npm run test
   ```
## Viewing Test Results  

After running tests, Playwright generates a test report. To open it:  

```sh
npx playwright show-report
```
## Running Tests in CI  

Tests are automatically executed in **GitHub Actions CI** on every push or pull request. The workflow:  

- Installs dependencies  
- Starts the React app  
- Runs Playwright tests  
- Uploads test results for debugging  

OR

Go to the [GitHub Actions](https://github.com/Diankavoy19/Test-Task/actions).
2. Click on the workflow ["Playwright Tests"](https://github.com/Diankavoy19/Test-Task/actions/workflows/test.yml).
3. Click on the "Run workflow" button
4. Click on the "Run workflow" button again
5. Wait for the tests to run
6. Click on the last test run