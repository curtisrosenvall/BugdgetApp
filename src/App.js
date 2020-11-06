import React, {Component} from 'react';
import './App.css';
import Header from './Components/Header/Header'
import routes from './routes';
import Axios from "axios";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import reducer, { addUser } from "./ducks/reducer";

class App extends Component {
  async componentDidMount() {
    let user = await Axios.get("/api/verify");
    user = user.data;
    if (user.verified === true) {
      this.props.addUser(user.data);
    } else {
      this.props.history.push("/");
    }
  }
  render() {
    return (
    <div className="App">
      {/* <Header /> */}
      {this.props.location.pathname === "/" ? null : <Header />}
     {routes}
     

    </div>
  );
  }
  
}

function mapStateToProps(reducerState) {
  return reducerState;
}

export default connect(mapStateToProps, { addUser })(withRouter(App));
