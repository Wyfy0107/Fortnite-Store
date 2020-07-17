import React from "react";
import "./App.css";
import Layout from "./Components/Layout";
import NavigationBar from "./Components/Navbar";
import { Switch, Route } from "react-router";
import ItemsWrapper from "./HOC/ItemsWrapper";
import Loading from "./Components/Containers/Loading";

function App() {
  return (
    <div>
      <NavigationBar />
      <Loading />
      <Switch>
        <Route exact path='/Fortnite-Store'>
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
