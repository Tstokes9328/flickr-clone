import React from 'react';
import {Switch, Route} from 'react-router-dom';

//Components
import Home from './Components/Home/Home';
import Search from './Components/Search/Search';

//Router
export default (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/search" component={Search}/>
    </Switch>
)