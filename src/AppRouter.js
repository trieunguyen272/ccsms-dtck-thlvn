import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Components/Login-Register/login';

export default function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route path="/admin">
                    <Admin/>
                </Route>
                <Route path="/login">
                    <Login/>
                </Route>
            </Switch>
        </Router>
    )
}

function Admin() {
    return <div>Admin</div>
}

function Login() {
    let login = () => {
        localStorage.setItem("accessToken", true);
    }
    return <div>
        <h2>Login</h2>
        <button onClick={login}>Login</button>
    </div>
}