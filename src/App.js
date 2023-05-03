import React, { Component } from "react";
import Home from "./componet/page1/Home";
import "./App.css";
import About from "./componet/page2/About.js";
import MyQuest from "./componet/page3/MyQuest";
import Quest from "./componet/page3/Quest";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./componet/pages/LoginPage";
import SignupPage from "./componet/pages/SignupPage";
import Navbar from "./componet/page3/NavbarQ";
import SetupQuest from "./componet/pages/SetupQuest";
import PrivateRoute from "./routes/PrivateRoute";
import LeaderBoard from "./componet/page3/LeaderBoard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="meta"></div>

        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/MyQuest" element={<MyQuest />} /> 
            <Route exact path='/callback' element={<MyQuest />} /> 
            <Route path="/Quest/:id" element={<Quest />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/leaderboard" element={<LeaderBoard />} />
            <Route
              path="/setup"
              element={
                <PrivateRoute>
                  <SetupQuest />
                </PrivateRoute>
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
