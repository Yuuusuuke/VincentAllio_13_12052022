import React from 'react';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from "react-router-dom";
import './App.css';
import Index from "./pages/index/Index";
import Signin from "./pages/signin/Signin";
import User from "./pages/user/User";
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/index" element={<Index />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/user" element={<User />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
