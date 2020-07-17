import React from 'react';
import Book from './Containers/Books/Book';
import { BrowserRouter, Route, Redirect } from 'react-router-dom'

function App() {
  return (
      <BrowserRouter>
        <Route exact path="/">
          <Redirect to="books" />
        </Route>
        <Route path="/books" component={Book} />
      </BrowserRouter>
  );
}

export default App;
