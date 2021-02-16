import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";

import Header from "./components/header/Header";
import Logo from "./components/logo/Logo";
import HideOnScroll from "./components/hide-on-scroll/HideOnScroll";

import Home from "./pages/home/Home.jsx";
import Realisation from "./pages/realisation/Realisation";
import Mobilier from "./pages/mobilier/Mobilier";
import Project from "./pages/project/Project";
import Collection from "./pages/collection/Collection";
import Contact from "./pages/contact/Contact.jsx";
import data from "./data/data.json";
import { Toolbar, AppBar } from "@material-ui/core";

const classes = {
  start: {
    textAlign: "center",
    zIndex: 110,
    position: "fixed",
    height: 200,
    width: "100%",
  },
};

const App = ({ visible }) => {
  return (
    <div className="App">
      <HideOnScroll>
        <AppBar elevation={0}>
          <Toolbar style={{ minHeight: 200, backgroundColor: "white" }}>
            <Logo />
          </Toolbar>
          <Header />
        </AppBar>
        {/* dissocier header */}

        {/* <h1 style={{ position: "fixed" }}>LOGO</h1> */}
      </HideOnScroll>

      <div className={visible ? "fixed-background" : ""}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/realisations" render={() => <Realisation />} />
          <Route exact path="/collections" render={() => <Mobilier />} />
          {data["realisations"].map((realisation) => {
            return (
              <Route
                path={realisation.path}
                render={() => <Project realisation={realisation} />}
              />
            );
          })}
          {data["collections"].map((collection) => (
            <Route
              path={collection.path}
              render={() => <Collection collection={collection} />}
            />
          ))}
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </div>
  );
};

const mapStateToProps = ({ menu: { visible } }) => ({
  visible,
});

export default connect(mapStateToProps)(App);
