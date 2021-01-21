import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";

// import Start from "./components/Start.jsx";
import Header from "./components/Header.jsx";

// import Home from './pages/Home'
import Home from "./pages/Home.jsx";
import Realisation from "./pages/Realisation";
import Mobilier from "./pages/Mobilier";
import Project from "./pages/Project";
import Collection from "./pages/Collection";
import Contact from "./pages/Contact.jsx";
import { data } from "./data/data";

// import Duquesne from "./data/projects/Duquesne";
// import LaCoupole from "./data/projects/LaCoupole";
// import LeRelaisDuLouvre from "./data/projects/LeRelaisDuLouvre";
// import IleDeLaReunion from "./data/projects/IleDeLaReunion";
// import ShowroomDigital from "./data/projects/ShowroomDigital";

// import Accessoires from "./data/collection/Accessoires";
// import Assises from "./data/collection/Assises";
// import Luminaires from "./data/collection/Luminaires";
// import Meubles from "./data/collection/Meubles";

const App = ({ visible }) => {
  return (
    <div className="App">
      <div className={"after-start"}>
        <Header />
        <div className={visible ? "fixed-background" : ""}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/realisation" render={() => <Realisation />} />
            <Route exact path="/mobilier" render={() => <Mobilier />} />
            {data["realisation"].pages.map((realisation) => {
              return (
                <Route
                  path={realisation.path}
                  render={() => (
                    <Project
                      content={realisation}
                      images={realisation.images}
                    />
                  )}
                />
              );
            })}
            {data["mobilier"].pages.map((mobilier) => (
              <Route
                path={mobilier.path}
                render={() => (
                  <Collection content={mobilier} images={mobilier.images} />
                )}
              />
            ))}
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ menu: { visible } }) => ({
  visible,
});

export default connect(mapStateToProps)(App);
