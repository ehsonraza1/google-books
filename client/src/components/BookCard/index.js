import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function BookCard(props) {
  return (
    <div>
      <div>props.Title</div>
      <div>Author</div>
      <div>Description</div>
      <div>Link</div>
      <img />
    </div>
  );
}

export default BookCard;
