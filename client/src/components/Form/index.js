import React from "react";
import axios from "axios";

// This file exports the Input, TextArea, and FormBtn components

class Form extends React.Component {
  constructor(props) {
    super(props);
    //copy lines 10-41 and pass functions as Props and pass specifics part of state as props - searchStyle to form
    //Passing state.BooksArray to bookcontainer - and map through the array of this.props and map it to BookCard component
    this.state = {
      booksArray: [],

      searchTitle: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  //Update seatchTitle property of the this.state object using the function
  //following function listens for events specifically onChange(handle change) events
  handleChange(event) {
    // console.log(event);
    //setState method updates the state itself
    this.setState({ searchTitle: event.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-row align-items-center">
          <div className="col-auto">
            <label className="sr-only" for="inlineFormInput">
              Name
            </label>
            <input
              type="text"
              onChange={this.handleChange}
              className="form-control mb-2"
              id="inlineFormInput"
              placeholder=" Enter Book Here"
            />
          </div>
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-2">
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default Form;
