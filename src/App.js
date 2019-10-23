import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import WeatherHeader from './components/header/header';
import WeatherPage from './components/weather-page/weather-page';
import FavoritesPage from './components/favorites-page/favorites-page';


function App() {
  return (
    <div>
      <Router>
        <WeatherHeader/>
        <Switch>
          <Route path='/' component={WeatherPage} exact/>
          <Route path='/favorites-page' component={FavoritesPage}/>
          <Route path="**" component={() => <h1> Not Found! </h1>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
