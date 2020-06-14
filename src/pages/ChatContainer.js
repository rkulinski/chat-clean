import React from "react";
import { connect } from "react-redux";
import ChatComponent from "./ChatComponent";

class ChatContainer extends React.Component {
  render() {
    return (
      <div>
        <h1>Chat</h1>
        <div>Piszesz jako: {this.props.username}</div>
        <hr />
        <ChatComponent username={this.props.username} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  username: state.globalReducer.username,
});

export default connect(mapStateToProps)(ChatContainer);
