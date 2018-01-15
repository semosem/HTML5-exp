// import necessary external modules

import React, { Component } from "react";
import Header from "./Components/Header";
import AddParticipant from "./Components/AddForm";
import Participant_generator from "./generator";
import "./App.css";
import toastr from "toastr"; //notification
import uuid from "uuid"; // id generator
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"; //material ui Components icon wrapper
import IconButton from "material-ui/IconButton"; //material ui Components icon wrapper
import EditBtn from "material-ui/svg-icons/image/edit";
import DeleteBtn from "material-ui/svg-icons/action/delete";
import SaveBtn from "material-ui/svg-icons/navigation/check";
import { grey500 } from "material-ui/styles/colors";

class App extends Component {
  // initial state
  constructor(props) {
    super(props);
    this.state = {
      participants: [],
      editIndx: false
    };
  }

  componentWillMount() {
    // populating generated random participants to the state array
    for (var i = 0; i < 10; i++) {
      this.state.participants.push(new Participant_generator());
    }

    this.setState({
      participants: this.state.participants
    });
  }

  handleAddParticipant(person) {
    console.log(person);
    this.setState({
      participants: [...this.state.participants, person]
    });
    toastr.success("Participant Aded");
  }
  // when edit input fields  change
  handleEditParticipant(index) {
    let newValue = index.target.value;
    console.log(newValue);
  }
  // on edit button click event --show input fields
  startEditing(index) {
    this.setState({
      editIndx: index
    });
  }
  // on save button click event --hide input fields

  stopEditing(index) {
    this.setState({
      editIndx: -1
    });
  }
  // delete hadler
  handleDeleteParticipant(index) {
    this.setState({
      participants: this.state.participants.filter(function(e, i) {
        return i !== index;
      })
    });

    toastr.error("Participant Deleted");
  }

  hadleSortParticipant(thisComp) {
    this.setState({
      participants: this.state.participants.sort(function(a, b) {
        if (a.firstName < b.firstName) {
          return -1;
        } else if (a.firstName > b.firstName) {
          return 1;
        } else {
          return 0;
        }
      })
    });
    console.log("sorted");
  }

  render() {
    return (
      <div className="App">
        <Header />

        <div className="containerr">
          <AddParticipant
            onAddParticipant={this.handleAddParticipant.bind(this)}
          />

          <table className="lists">
            <tbody>
              <tr>
                <th onClick={this.hadleSortParticipant.bind(this)}>
                  <span className="glyphicon glyphicon-sort" /> Name
                </th>
                <th>E-mail address</th>
                <th>Phone number</th>
                <th>*</th>
              </tr>

              {this.state.participants.map((person, index) => {
                const isEditing = this.state.editIndx === index;
                return (
                  <tr key={uuid.v4()}>
                    <td>
                      {isEditing ? (
                        <input
                          className="inputEdit"
                          value={person.fullName}
                          onChange={this.handleEditParticipant.bind(this)}
                        />
                      ) : (
                        <p>{person.fullName}</p>
                      )}
                    </td>

                    <td>
                      {isEditing ? (
                        <input
                          className="inputEdit"
                          value={person.emailAddress}
                          onChange={this.handleEditParticipant.bind(this)}
                        />
                      ) : (
                        <p>{person.emailAddress}</p>
                      )}
                    </td>

                    <td>
                      {isEditing ? (
                        <input
                          className="inputEdit"
                          name={person.phoneNumber}
                          value={person.phoneNumber}
                          onChange={this.handleEditParticipant.bind(this)}
                        />
                      ) : (
                        <p>{person.phoneNumber}</p>
                      )}
                    </td>

                    <td>
                      {isEditing ? (
                        <MuiThemeProvider>
                          <IconButton onClick={this.startEditing.bind(this)}>
                            <SaveBtn color={grey500} />
                          </IconButton>
                        </MuiThemeProvider>
                      ) : (
                        <MuiThemeProvider>
                          <IconButton>
                            <EditBtn
                              color={grey500}
                              onClick={this.startEditing.bind(this, index)}
                            />
                          </IconButton>
                        </MuiThemeProvider>
                      )}

                      <MuiThemeProvider>
                        <IconButton
                          onClick={this.handleDeleteParticipant.bind(
                            this,
                            index
                          )}
                        >
                          <DeleteBtn color={grey500} />
                        </IconButton>
                      </MuiThemeProvider>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
