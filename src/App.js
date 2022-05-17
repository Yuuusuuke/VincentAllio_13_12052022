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
import Footer from './components/footer/Footer';
import Error from "./pages/error/Error";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
          <Switch>
            <Route path="/signin" element={<Signin />} />
            <Route path="/user" element={<User />} />
            <Route path="/notConnected" element={<Error message="You are not connected yet. Please sign in." />} />
            <Route path="/dataNotFound" element={<Error message="Server is currently unavailable. Please try later." />} />
            <Route path="/404" element={<Error message="Error 404" />} />
            <Route path="/" element={<Index />} />
          </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
