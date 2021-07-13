import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Home from "./pages/Home";
import Men from "./pages/Men";
import Footer from "./components/Footer";
import Error from "./pages/Error";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Detail from "./pages/Detail";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={Men} />
            <Route path="/products/:nameCate" component={Men} />
            <Route path="/product/:idUser" component={Detail} />
            <Route path="/cart" component={Cart} />
            <Route path="/login" component={Login} />
            <Route path="/:somestring" component={Error} />
          </Switch>
          <Footer />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
