import React from "react";
import "./App.css";
import Layout from "./Components/Layout";
import NavigationBar from "./Components/Navbar";
import { Switch, Route } from "react-router";
import ItemsList from "./Components/ItemsList/ItemsList";

function App() {
  return (
    <div>
      <NavigationBar />
      <Layout />
    </div>
  );
}

export default App;
