import React from "react";
import "./App.css";
import Layout from "./Components/Layout";
import NavigationBar from "./Components/Navbar";
import { Switch, Route } from "react-router";
import ItemsWrapper from "./HOC/ItemsWrapper";

function App() {
  return (
    <div>
      <NavigationBar />
      <Switch>
        <Route exact path='/'>
          <Layout />
        </Route>

        <Route path='/ItemStore'>
          <ItemsWrapper />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
