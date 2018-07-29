import React, { Component } from 'react';

//Font Awesome Imports
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

//Router
import Router from './router';

//StyleSheet (Reset-CSS)
import 'reset-css';

class App extends Component {
  render() {
    //Font Awesome Library
    library.add(faSearch);
    return (
      <div>
        {Router}
      </div>
    );
  }
}

export default App;
