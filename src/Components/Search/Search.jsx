import React, {Component} from 'react';
import axios from 'axios';

//Router DOM
import {Link} from 'react-router-dom';

//Font Awesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//Styling
import './Search.css';

class Search extends Component {
    constructor(){
        super();

    }

    componentDidMount(){
        axios.get('getPictures').then(response => {
            console.log(response)
        })
    }

    render(){
        return(
            <div className="search-container">
                <nav className="search-nav">
                    <div className="search-nav-box1">
                        <Link to="/"><h1>flickr</h1></Link>
                        <h2>Explore</h2>
                        <h2>Create</h2>
                    </div>

                    <div className="search-nav-box2">
                        <span id="search-nav-icon"><FontAwesomeIcon icon="search"/></span>
                        <input type="text" placeholder="Photos, people, or groups"/>
                    </div>

                    <div className="search-nav-btns">
                        <button id="search-nav-btn1">Log In</button>
                        <button id="search-nav-btn2">Sign Up</button>
                    </div>
                </nav>

                <div className="nav-filter">
                    <ul>
                        <li><Link to='#'>Photos</Link></li>
                        <li><Link to='#'>People</Link></li>
                        <li><Link to='#'>Groups</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Search;