import React from "react";
import {Switch, Route} from "react-router-dom";
import Auth from './Components/Auth/Auth';
import Lobby from './Components/Lobby/Lobby'
import Bank from './Components/Bank/Bank'


export default (
    <Switch>
        <Route exact path='/' component={Auth} />
        <Route path='/lobby' component={Lobby} />
        <Route path='/bank' component={Bank} />
    </Switch>
);