import React from "react";
import { Link, Route } from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import { useSelector } from "react-redux";

function App() {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div className="App">
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">
              amazona
            </Link>
          </div>
          <div>
            <Link to="/cart">
              Cart
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            <Link to="/signin">Sign In</Link>
          </div>
        </header>
        <main>
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route exact path="/" component={HomeScreen} />
        </main>
        <footer className="row center">All Right Reserved</footer>
      </div>
    </div>
  );
}

export default App;
