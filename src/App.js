import React, { Component } from 'react';

//Font Awesome Imports
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

//Components
import Home from './Components/Home/Home';

//StyleSheet (Reset-CSS)
import 'reset-css';

class App extends Component {
  render() {
    //Font Awesome Library
    library.add(faSearch);
    return (
      <div>
        <Home />
      </div>
    );
  }
}

export default App;
