import React, {Component} from 'react';
import '../scss/Login.scss';
import { Link } from 'react-router-dom';


class Login extends Component {
    constructor(){
        super();
    };



render() {
    return (
        <div className="row" id="Body">sdfsdfsdf
            <div className="medium-5 columns left">
                <h4>Login</h4>
                <label>Username</label>
                <input type="text" name="username" placeholder="Username" />
                <label>Password</label>
                <input type="password" name="password" placeholder="Password" />
                <input type="submit" className="button success" value="Login" />
                <a href="/signup">Registration</a>
            </div>
        </div>
    );
}
}
export default Login;