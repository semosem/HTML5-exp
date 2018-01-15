import React, { Component } from "react";

class AddParticipant extends Component {
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onAddParticipant(this.state);
    event.target.reset();
  }

  render() {
    return (
      <div id="registerContainer">
        <h3>List of participants</h3>
        <form
          onSubmit={this.handleSubmit.bind(this)}
          className="form-horizontal"
        >
          <input
            type="text"
            id="inputFullName"
            className="inputAdd"
            name="fullName"
            placeholder="Full name"
            onChange={this.handleInputChange.bind(this)}
            required
          />

          <input
            type="email"
            id="inputEmailAddress"
            className="inputAdd"
            rows="3"
            name="emailAddress"
            placeholder="Email address"
            onChange={this.handleInputChange.bind(this)}
            required
          />

          <input
            type="tel"
            id="inputPhoneNumber"
            className="inputAdd"
            rows="3"
            man="12"
            name="phoneNumber"
            placeholder="Phone number"
            onChange={this.handleInputChange.bind(this)}
          />
          <button type="submit" className="btn-add">
            Add New
          </button>
        </form>
      </div>
    );
  }
}

export default AddParticipant;
