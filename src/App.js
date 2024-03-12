/*=======================================================================
Name        : App.js
Assignment  : Lab 8
Author(s)   : Jaimal Sahota, Mahdi Ansari, William Arthur Philip Louis
Submission  : Mar 11, 2024
Description : Learning React
===========================================================================*/

import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ProductsProvider } from "./context/ProductsContext";
import ProductList from "./components/ProductList";
import NotFoundPage from "./components/NotFoundPage";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="App">
      <ProductsProvider>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/products">Product List</Link>
                </li>
                <li>
                  <Link to="/product/add">Add Product</Link>
                </li>
              </ul>
            </nav>

            <Routes>
              <Route path="/products" element={<ProductList />} />
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </Router>
      </ProductsProvider>
    </div>
  );
}

export default App;
