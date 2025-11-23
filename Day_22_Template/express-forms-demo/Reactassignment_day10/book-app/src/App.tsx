import React from "react";
import { Container } from 'react-bootstrap';
import BookList from "./components/BookList";

function App() {
  return (
    <Container className="py-4">
      <h1 className="mb-4">Featured Books</h1>
      <BookList />
    </Container>
  );
}

export default App;
