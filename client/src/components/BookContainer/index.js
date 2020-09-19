import React from "react";
import BookCard from "../BookCard";

function BookContainer(props) {
  return (
    <div>
      {props.booksArray.map((el) => {
        return <BookCard booksArray={props.booksArray} />;
      })}
    </div>
  );
}

export default BookContainer;
