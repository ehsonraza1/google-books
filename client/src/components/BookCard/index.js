import React from "react";
import "./style.css";
import axios from "axios";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function BookCard(props) {
  function saveBook(b) {
    // send a POST request
    axios({
      method: "post",
      url: "/api/books/add",
      data: b,
    });
  }
  return props.booksArray.map((elBook) => {
    console.log(elBook);
    return (
      <div>
        <div>Title: {elBook.volumeInfo.title}</div>
        <div>Author: {elBook.volumeInfo.authors}</div>
        <div>Description: {elBook.volumeInfo.description}</div>
        <div>Link: {elBook.volumeInfo.infoLink}</div>
        <img src={elBook.volumeInfo.imageLinks.smallThumbnail} />
        <button
          onClick={() => {
            //Making a call to the Axios post route
            saveBook(elBook);
          }}
          className="saveButton"
        >
          Save{" "}
        </button>
      </div>
    );
  });
}

export default BookCard;
