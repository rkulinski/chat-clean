import React from "react";
import { connect } from "react-redux";

class ChatContainer extends React.Component {
  render() {
    return (
      <div>
        <h1>Chat</h1>
        <div>{this.props.username}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  username: state.globalReducer.username,
});

export default connect(mapStateToProps)(ChatContainer);
