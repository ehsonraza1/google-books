import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function BookCard(props) {
  return props.booksArray.map((elBook) => {
    console.log(elBook);
    return (
      <div>
        <div>Title: {elBook.volumeInfo.title}</div>
        <div>Author: {elBook.volumeInfo.authors}</div>
        <div>Description: {elBook.volumeInfo.description}</div>
        <div>Link: {elBook.volumeInfo.infoLink}</div>
        {/* <img {elBook.volumeInfo.imageLinks.smallThumbnail}/> */}
      </div>
    );
  });
}

export default BookCard;
