import React, {Component} from 'react';
import '../scss/Home.scss';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div className="row " id="Body">
                <div className="medium-12 columns">
                    <h2 id="welcomeText">Make people fall in love with your ideas</h2>

                    <Link to='/login' style={{padding: '5px'}}>
                        Login
                    </Link>
                    <a href="/signup" className="button success">Signup</a>
                </div>
            </div>
        );
    }
}
export default Home;
