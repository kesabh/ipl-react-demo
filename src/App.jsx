import React from "react";
import { Nav } from "./Navbar.jsx";
import { Home } from "./Home.jsx";
import Captains from "./Captains.jsx";
import { Heading } from "./Heading.jsx";
import Leaders from "./Leaders.jsx";
import Players from "./Players.jsx";
import Teams from "./Teams.jsx";
import Records from "./Records.jsx";

import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav></Nav>

        <Switch>
          <Route exact path="/">
            <Home></Home>
            <br />
            <br />
            <Heading text="Team Captains"></Heading>
            <br />
            <Captains></Captains>
            <br />
            <br />
            <Heading text="2021 Leaders"></Heading>
            <br />
            <Leaders></Leaders>
          </Route>
          <Route exact path="/players">
            <Players></Players>
          </Route>

          <Route exact path="/teams">
            <Teams></Teams>
          </Route>

          <Route exact path="/records">
            <Records></Records>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export { App };
