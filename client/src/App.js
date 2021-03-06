import React, { Component } from "react";
import Form from "./components/Form";
import BookContainer from "./components/BookContainer";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      booksArray: [],

      searchTitle: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    // console.log(event);
    //setState method updates the state itself
    this.setState({ searchTitle: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchTitle}`
      )
      .then((response) => {
        this.setState({ booksArray: response.data.items });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }
  render() {
    return (
      <React.Fragment>
        <Form
          searchTitle={this.state.searchTitle}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <BookContainer booksArray={this.state.booksArray} />
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
