import React, { useState } from 'react';
import Login from './Login'
import Dashboard from './Dashboard'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"

export default function Controller(props){
    return (
        <Router forceRefresh={true}>
            <Switch>
                <Route path="/dashboard">
                    <Dashboard />
                </Route>
                <Route path="/">
                    <Login />
                </Route>
                
            </Switch>
        </Router>
    );
}
    
