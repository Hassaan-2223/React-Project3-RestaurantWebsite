import React from "react";
// import Restaurant from "./component/Basics/restaurant";
// import Todo from "./component/todoList/todo";
// import Temp from "./component/weatherapp/temp";
import "./component/cart-router-redux/style/style.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// ----------------- IMPORTING ROUTES PAGES -----------------------
import Home from "./component/cart-router-redux/Home";
import Header from "./component/cart-router-redux/Header";
import Cart from "./component/cart-router-redux/Cart";


const App = () => {
  // return <Temp/>;

  return (
    
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element ={<Cart />}/>
      </Routes>
    </Router>
  )
}

export default App;
