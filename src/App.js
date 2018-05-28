import React, { Component } from "react";

// Components
import Header from "./components/Header"

// Css
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="app-container">
                <Header />
            </div >
        )
    }
}

export default App;
