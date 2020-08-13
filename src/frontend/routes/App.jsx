import React from "react";
import "../assets/styles/App.scss";
import {hot} from "react-hot-loader";
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";

//Layout
import Layout from "../components/Layout.jsx"


//Components
import Home from "../containers/Home";
import Login from "../containers/Login";
import Register from "../containers/Register";
import Game from "../containers/Game";

const Notfound = () => (
 <section>
   <h1>
     NOT FOUND
   </h1>
 </section>
)

const App  = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/login"} component={Login} />
        <Route exact path={"/register"} component={Register} />
        <Route exact path={"/play"} component={Game} />
        <Route component={Notfound} />
      </Switch>
    </Layout>
  </BrowserRouter>
)



export default hot(module)(App);
