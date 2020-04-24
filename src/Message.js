import React, { Component } from "react";

class Message extends Component {
  state = { text: "" };

  async componentDidMount() {
    try {
      const response = await fetch("api/GetMessage");
      const data = await response.json();
      this.setState({ text: data.text });
    } catch (err) {
      this.setState({ text: "API request failed" });
    }
  }

  render() {
    return <h1>{this.state.text}</h1>;
  }
}

export default Message;
