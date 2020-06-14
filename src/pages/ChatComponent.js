import React from "react";
import * as io from "socket.io-client";

class ChatComponent extends React.Component {
  componentDidMount() {
    if (!this.connectionChat) {
      this.connectionChat = io.connect("https://chat-server.fbg.pl");
      this.connectionChat.on("chat message", (message) => {
        console.log(message);
      });
    }
  }

  componentWillUnmount() {
    if (this.connectionChat) {
      this.connectionChat.disconnect();
    }
  }

  render() {
    return <div>Chat Component</div>;
  }
}

export default ChatComponent;
