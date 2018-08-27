# MyReads Project

This project for the Udacity Front End Web Development nanodegree demonstrates use of the React component structure to build the **MyReads** book organising app. Books can be sorted onto 'shelves' of **Currently Reading**, **Want To Read** or **Read**. A search feature is also available, although limited to particular terms as detailed in below sections. The starter template provided by Udacity gives a static example of the app with CSS and HTML markup. The purpose of the project was to add interactivity to the app by refactoring the static code.

## Install

Install `npm`.
Install project dependencies with `npm install`.

## Launch
Clone or download the [project repository](https://github.com/josephine-mattina/my-reads-app). Run `npm start` on the command line. The app can be viewed at: localhost:3000.

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with the app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for the app.
    ├── App.js # This is the root of the app.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for the app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

## Backend Server

To simplify the development process, Udacity provided a backend server to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods needed to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in the app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if the searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Resources used to build the app

[Starter code](https://github.com/udacity/reactnd-project-myreads-starter)
[Project rubric](https://review.udacity.com/#!/rubrics/918/view)
[Project introduction]()
[Thinking in React](https://reactjs.org/docs/thinking-in-react.html)
[Drop down onChange event](https://stackoverflow.com/questions/28868071/onchange-event-using-react-js-for-drop-down)
[Linking the shelf component to the home page](https://knowledge.udacity.com/questions/7352)
