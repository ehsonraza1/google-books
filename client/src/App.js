import React, { Component } from "react";
import Form from "./components/Form";
import BookContainer from "./components/BookContainer";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Form />
        <BookContainer />
      </React.Fragment>
    );
  }
}
// function Card(props) {
//   let book = props.book;
//   return (
//     <div className="card">
//       <h3>{book.title}</h3>
//     </div>
//   );
// }
export default App;
