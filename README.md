# MyReads Project

## Project Overview
In the MyReads project, you'll see a bookshelf app that allows you to select and categorize books as the following:
- Currently Reading
- Want to Read
- Read

The project emphasizes using React to build the application and provides an API server and client library that you will use to persist information as you interact with the application.

## Installing and launching
1. Clone or download the Repository
2. Install all project dependencies with `npm install`
3. Start the app with `npm start`

## Backend Server

A backend server is provided that file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

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
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Acknowledgments
- Maeva Nap's [My Reads Walkthrough](https://www.youtube.com/watch?v=i6L2jLHV9j8)
- Ryan Waite's [FEND Project 6 - Walk Through (Long)](https://www.youtube.com/watch?v=acJHkd6K5kI&=&feature=youtu.be)
