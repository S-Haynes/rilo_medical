import React from "react";
import "./App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/About/About";
import Shop from "./components/Pages/Shop/Shop";
import Contact from "./components/Pages/Contact/Contact";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
