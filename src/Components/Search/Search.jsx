import React, {Component} from 'react';
import {connect} from 'react-redux';

//Reducer functions
import {getImages} from '../../redux/reducer';

//Router DOM
import {Link} from 'react-router-dom';

//Font Awesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//Styling
import './Search.css';

class Search extends Component {
    constructor(props){
        super(props);

       this.state = {
           input: ''
       }

        //Binding methods
        this.handleInputChange = this.handleInputChange.bind(this);
        this.onEnter = this.onEnter.bind(this);
    }

    //Lifecycle hooks
    componentDidMount(props){
        let searchTerm = this.props.reducer.searchKey
        this.props.getImages(searchTerm);
    }

    //Methods
    //changes state for what is typed into the search bar
    handleInputChange(event){
        this.setState({input: event.target.value})
    }

    //executes when you hit enter in the search box
    onEnter(event){
        let searchTerm = this.state.input;
        if(event.key === 'Enter'){
            this.props.getImages(searchTerm)
        }
    }

    render(props){

        //storing the flickr images array from redux into a variable
        let images = this.props.reducer.images

        //mapping through the redux images array to display as a list
        let flickrImages = images.map((element, index) => {
            return (
                <div key={index} className="flickr-photo-container">
                    <a href={element.link}><img src={element.media.m}/></a>
                </div>
            )
        })

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
                        <input type="text" 
                        placeholder="Photos, people, or groups"
                        onKeyUp={this.onEnter}
                        onChange={this.handleInputChange}
                        />
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

                <div className="display-container">
                    {flickrImages}
                </div>
            </div>
        )
    }
}

//subscribing to the redux store
function mapStateToProps(state){
    return {
        reducer: state
    }
}

export default connect(mapStateToProps, {getImages})(Search);