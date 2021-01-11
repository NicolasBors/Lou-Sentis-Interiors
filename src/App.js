import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";

import Start from "./components/Start.jsx";
import Header from "./components/Header.jsx";

// import Home from './pages/Home'
import Home from "./pages/Home.jsx";
import Realisation from "./pages/Realisation";
import Mobilier from "./pages/Mobilier";
import Project from "./pages/Project";
import Collection from "./pages/Collection";
import Contact from "./pages/Contact.jsx";

import Duquesne from "./data/projects/Duquesne";
import LaCoupole from "./data/projects/LaCoupole";
import LeRelaisDuLouvre from "./data/projects/LeRelaisDuLouvre";
import IleDeLaReunion from "./data/projects/IleDeLaReunion";
import ShowroomDigital from "./data/projects/ShowroomDigital";

import Accessoires from "./data/collection/Accessoires";
import Assises from "./data/collection/Assises";
import Luminaires from "./data/collection/Luminaires";
import Meubles from "./data/collection/Meubles";

const App = ({ visible }) => {
  const [start, setStart] = useState(true);
  const [opacity, setOpacity] = useState(false);

  return (
    <div className="App">
      <Start start={start} setStart={setStart} setOpacity={setOpacity} />
      {start ? null : (
        <div className={opacity ? "after-start" : "before-start"}>
          <Header />
          <div className={visible ? "fixed-background" : ""}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/réalisation" render={() => <Realisation />} />
              <Route
                exact
                path="/mobilier"
                render={() => <Mobilier view={"MOBILIER"} />}
              />
              <Route
                path="/réalisation/duquesne"
                render={() => <Project content={Duquesne} />}
              />
              <Route
                path="/réalisation/la-coupole"
                render={() => <Project content={LaCoupole} />}
              />
              <Route
                path="/réalisation/le-relais-du-louvre"
                render={() => <Project content={LeRelaisDuLouvre} />}
              />
              <Route
                path="/réalisation/île-de-la-réunion"
                render={() => <Project content={IleDeLaReunion} />}
              />
              <Route
                path="/réalisation/showroom-digital"
                render={() => <Project content={ShowroomDigital} />}
              />
              <Route
                path="/mobilier/accessoires"
                render={() => <Collection content={Accessoires} />}
              />
              <Route
                path="/mobilier/assises"
                render={() => <Collection content={Assises} />}
              />
              <Route
                path="/mobilier/luminaires"
                render={() => <Collection content={Luminaires} />}
              />
              <Route
                path="/mobilier/meubles"
                render={() => <Collection content={Meubles} />}
              />
              <Route path="/contact" component={Contact} />} />
            </Switch>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = ({ menu: { visible } }) => ({
  visible,
});

export default connect(mapStateToProps)(App);
