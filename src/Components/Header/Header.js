import React, { Component } from "react";
import "./Header.scss";
import Axios from "axios";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

class Header extends Component {
  logout = async () => {
    await Axios.put(`/api/logout`);
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="header-container">
        <nav>
          
          <div className="header-title"><i className="fas fa-dollar-sign"></i>
          <Link to="/lobby" style={{textDecoration: 'none', color: 'rgba(66, 146, 68, 0.952941)'}}><p>mart Bank</p></Link>
            
            </div>
          
        </nav>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="logout" onClick={this.logout}>
          <button>
            <i className="fas fa-sign-out-alt"></i>Logout
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
