
import Home from "./pages/Home";
import Tours from "./pages/Tours";
import Event from "./pages/Event";
import Weather from "./pages/Weather";
import Login from "./pages/Login";
import Header from "./component/Header";
import Footer from "./component/Footer"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/Weather" element={<Weather/>}/>
          <Route path="/Tours" element={<Tours/>}/>
          <Route path="/Event" element={<Event/>}/>
          <Route path="/Login" element={<Login/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
