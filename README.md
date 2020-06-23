## BooK Library MS
* Built with ReactJS, Recact Router.
* State Management by Redux.
* Backend by Nodejs(ExpressJS).
* Backend deployed to Google Cloud App Engine.
* Front End deployed to Goodgle Cloud Hosting(Firebase)
* Database - Google Cloud Firestore.
* Design own css.

## Start Front End Application.

* In the project directory, install dependencies: `yarn install`
* In the project directory, you can run: `yarn start`
* Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
* add firebase config to `src\services\firebase\index.tsx`
* add front end url to `src\.env`
* add backend api to `src\services\axios\index.tsx`
* To build the application `yarn build` Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

Your app is ready to be deployed!

## BackEnd APIS
* `/list` - Return all the books.
* `/list?keyword=steve` Return filtered books based on keyword.
* `/books/add` - Add new book (Name, Description, Author, Count).
* `/books/:id/` - View particular book details.
* `/books/:id/edit` - Edit particular book details.

[View It's Back-End Project](https://github.com/argodeep/NodejS-Backend-Book_library)

