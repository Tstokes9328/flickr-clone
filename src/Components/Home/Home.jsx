import React, {Component} from 'react';

//Font Awesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//StyleSheets
import './Home.css';

//Images
import image1 from '../../assets/arch.jpg';
import image2 from '../../assets/beach.jpg';
import image3 from '../../assets/concert.jpg';
import image4 from '../../assets/girl.jpg';
import image5 from '../../assets/jellyfish.jpg';
import image6 from '../../assets/skate.jpg';

let counter = 1;

class Home extends Component {
    constructor(){
        super()

        this.state = {
        }

        this.backgroundFunc = this.backgroundFunc.bind(this);
    }

    componentDidMount(){
        setInterval(() => counter += counter + 1, 3000)
    }

     backgroundFunc(){
         if(counter === 1){
             return image1
         }else if(counter === 2){
             return image2
         }else if(counter === 3){
             return image3
         }else if(counter === 4){
             return image4
         }else if(counter === 5){
             return image5
         }else {
             return image6
         }
     }

    render(){
        return (
            <div className="home-container" style={{"backgroundImage": `url(${this.backgroundFunc()})`, "backgroundSize": "cover", "backgroundPosition": "center"}}>
                <nav className="home-nav">
                    <h1>flickr</h1>
                    <div className="home-search-container">
                        <span id="home-nav-search-icon"><FontAwesomeIcon icon="search"/></span>
                        <input type="text" placeholder="Photos, people, or groups"/>
                    </div>
                    <div className="home-nav-btn-container">
                    <button id="home-nav-login">Log In</button>
                    <button id="home-nav-signup">Sign Up</button>
                    </div>
                </nav>

                <section className="welcome-container">
                    <h1>Find your inspiration.</h1>
                    <h2>Join the Flickr community, home to tens of billions of photos and 2 million groups.</h2>
                    <button>Sign Up</button>
                </section>

                <footer className="footer">
                    <span>About</span>
                    <span>Jobs</span>
                    <span>Blog</span>
                    <span>Developers</span>
                    <span>Guidelines</span>
                    <span>Privacy</span>
                    <span>Terms</span>
                    <span>Help forum</span>
                    <span>English</span>
                </footer>
            </div>
        )
    }
}

export default Home;