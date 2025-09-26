# Web-Development-day-120
Redux Toolkit


Redux Toolkit, or RTK, is a node package that simplifies development by providing utility functions. It is made to simplify the creation of a redux store and provide easy state management. It can be easily installed using simple npm commands.

Before the introduction of the Redux toolkit, state management was complex in simple redux.

Redux Toolkit
The Redux toolkit is a wrapper around Redux and encapsulates its necessary functions. Redux toolkit is flexible and provides a simple way to make a store for large applications. It follows the SOPE principle, which means it is Simple, Opinionated, Powerful, and Effective.

Problems solved by Redux Toolkit (RTK) in Redux
Redux Toolkit was created to solve these three common problems that we face in Redux.

Too much code to configure the store.
Writing too much boilerplate code to dispatch actions and store the data in the reducer.
Extra packages like Redux-Thunk and Redux-Saga for doing asynchronous actions.

Steps to Install and Import Redux Toolkit(RTK)
Step 1: Redux Toolkit (RTK) Installation

To install the redux toolkit in our project type the following command in the terminal.

// RTK Installation
// using NPM
npm i @reduxjs/toolkit
npm i react-redux        // We also need basic redux with this application
// using Yarn
yarn add @reduxjs/toolkit
Step 2: Importing Redux Toolkit (RTK)

We import only the necessary functions in our code

// Importing 
import { configureStore } from '@reduxjs/toolkit';        // Creates a store
import { createSlice } from '@reduxjs/toolkit';              // Combines and creates reducer
Dependencies after installing the the Redux Toolkit:
"dependencies": {
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "@reduxjs/toolkit": "^1.6.1",
    "react-redux": "^7.2.5"
  }
Benefits of Redux Toolkit (RTK)
Easier state management as compared to Redux
Boilerplate code for the majority of functions
Official recommended SOPE library
Wrapper functions are provided which reduce lines of code
Important function provided by Redux Toolkit:
The createStore function in basic Redux is wrapped by the configureStore function which automatically provides middlewares and enhancers.
Classic reducer is replaced by createReducer function which makes the code shorter and simpler to understand.
The createAction() utility that returns an action creator function.
Redux createSlice() function comes in handy to replace create action and create Reducer functions with a single function.
Redux createAsyncThunk() that takes Redux strings as arguments and returns a Promise.
Redux createEntityAdapter() utility that helps to perform CRUD operations.
Difference between Redux and Redux Toolkit
React Redux
Redux Toolkit (RTK)
Redux often required writing a significant amount of boilerplate code, such as action creators, reducers, and store setups.

Redux Toolkit is designed to minimize boilerplate code. It includes utilities like createSlice for reducers and configureStore for store configuration, reducing the amount of manual setup required.

Reducers are typically created using a switch statement, handling various action types explicitly.

With createSlice from the Redux Toolkit, reducers can be defined more concisely using a "slice" of the state and auto-generated action creators.

Utility libraries like Object.assign the spread operator are required to ensure immutability

It encourages immutability by providing utility functions immer internally, allowing more straightforward state updates within reducers.

Setting up the Redux store involves configuring middleware, combining reducers, and applying additional enhancements.

configureStore From Redux Toolkit simplifies store configuration by integrating commonly used middleware and providing a more streamlined setup.

Handling asynchronous actions requires additional middleware, like redux-thunk or redux-saga.

createAsyncThunk Is included in the Redux Toolkit which simplifies the process of managing asynchronous actions within the Redux store.

It may have a steeper learning curve due to the amount of boilerplate code and manual configuration.

It is designed to improve developer experience by reducing boilerplate, making it more accessible and efficient, especially for beginners.
