import React, { Component } from "react";
import "./Auth.scss";
import axios from "axios";
import { connect } from "react-redux";
import { addUser } from "../../ducks/reducer";

class Auth extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
    };
  }
  handleUsernameChange = (e) => {
    this.setState({ username: e.target.value });
  };
  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };
  handleRegister = () => {
    const { username, password } = this.state;
    axios
      .post("/api/register", { username, password })
      .then((res) => {
        this.props.addUser(res.data);
        this.props.history.push("/lobby");
      })
      .catch((err) => console.log(err));
  };
  handleLogin = () => {
    const { username, password } = this.state;
    axios
      .post("/api/login", { username, password })
      .then((res) => {
        this.props.addUser(res.data);
        this.props.history.push("/lobby");
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div className="auth-container">
        <div className="input-container">
          <div className="wrapper1">
            {" "}
            <div>
              <i className="fas fa-dollar-sign"></i>
              <i className="far fa-check-circle"></i>
            </div>
            <div className="title">
              <label className="label">Smart Bank</label>
            </div>
            <div className="input-data1">
              <input
                type="text"
                required
                onChange={this.handleUsernameChange}
              />
              <label>Enter Username</label>
            </div>
            <div className="input-data1">
              <input
                type="password"
                required
                onChange={this.handlePasswordChange}
              />
              <label>Enter Password</label>
            </div>
            <div className="buttons">
              <button onClick={this.handleRegister}>Register</button>
              <button onClick={this.handleLogin}>Login</button>
            </div>
            <div className="quote">
              <p>
                It's not about how much you make,<br></br> its's about how much you save.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, { addUser })(Auth);
