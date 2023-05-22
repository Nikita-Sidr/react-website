import React from "react";
import './App.css';
import Header from './components/Header/Header'
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

const App = () => {
  return (
    <div className="Global">
    <div className="App">
        <Header />
        <Navbar />
        <Profile />
    </div>
    </div>
  )
}
export default App
