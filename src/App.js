import React from 'react';
import "./reset.css";
import './App.css';
import Header from "./Components/Header/Header";
import DesignDepartment from "./Components/DesignDepartment/DesignDepartment";
import Virtues from "./Components/Virtues/Virtues";
import Blog from "./Components/Blog/Blog";
import Discuss from "./Components/Discuss/Discuss";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <DesignDepartment />
      <Virtues />
      <Blog />
      <Discuss />
      <Footer />
    </div>
  );
}

export default App;
