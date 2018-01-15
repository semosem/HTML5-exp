import random_name from "node-random-name";
import uuid from "uuid";

export default function Participant_generator() {
  this.id = uuid.v4();
  this.fullName = random_name({ random: Math.random });
  this.firstName = this.fullName.split(" ")[0];
  this.lastName = this.fullName.split(" ")[1];
  var randomNumber = Math.floor(Math.random() * emailArray.length);
  this.emailAddress =
    this.firstName.toLowerCase() +
    "." +
    this.lastName.toLowerCase() +
    emailArray[randomNumber];
  this.phoneNumber = "0" + Math.floor(Math.random() * 1000000000);
}

var emailArray = ["@gmail.com", "@metropolia.com", "@digia.com", "@yahoo.com"];
