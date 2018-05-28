import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

// Components
import Header from "./components/Header";
import ProductListings from "./components/ProductListings";

// Css
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="app-container">
                <Header />
                <Switch>
                    <Route path="/" component={ProductListings} />
                </Switch>
            </div>
        );
    }
}

export default App;
