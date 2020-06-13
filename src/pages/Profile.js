import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setUsername } from "../store/actions/globalActions";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.username,
    };
  }

  onUsernameChange = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  setUsername = () => {
    this.props.setUsername(this.state.username);
  };

  render() {
    return (
      <div>
        <h1>Profile</h1>
        <input onChange={this.onUsernameChange} value={this.state.username} />
        <button onClick={this.setUsername}>Set Username</button>
        <h3>Current username: {this.props.username}</h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  username: state.globalReducer.username,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      setUsername,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
