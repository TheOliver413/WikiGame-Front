import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CrearJuego from "./components/CrearJuego/CrearJuego";
import GameDetails from "./components/GameDetails/GameDetails";
import Landing from './components/Landing/Landing';
import Page404 from "./components/Page404/page404";
import Videogames from "./components/Videogames/Videogames";


function App() {
  return (
      <BrowserRouter>
          <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/videogames" component={Videogames} />
          <Route exact path="/crearjuego" component={CrearJuego} />
          <Route exact path='/videogame/:idVideogame' component={GameDetails} />
          <Route path='*' component={Page404} />
          </Switch>
      </BrowserRouter>
  );
}

export default App;
