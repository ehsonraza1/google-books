import React from "react";
import BookCard from "../BookCard";

function BookContainer(props) {
  return (
    <div>
      <h1>Results</h1>
      {props.booksArray.map((el) => {
        return <BookCard booksArray={props.booksArray} />;
      })}
    </div>
  );
}

export default BookContainer;
