# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

# TODO

If I had more time I would do the following:

- validation; the app allows empty strings, so implement validation on the TODO input field
- add more components like <input ... > as that could be used elsewhere in a larger app with the same styling and behaviour
- localStorage is a bad way of persisting data in most cases, the user could clear browser memory and data is restricted to that browser. So create a REST API and use `fetch` or `axios` to invoke that server.
- use auth; signup, login, logout with JWT
- jest unit tests
- Playwright e2e tests
