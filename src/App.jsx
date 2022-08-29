import "./App.css";
import React, { Component } from "react";
import MovieLists from "./components/movieLists";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/home";
import { Redirect, Route, Switch } from "react-router-dom";
import AboutUs from "./components/aboutUs";
import ContactUs from "./components/contactUs";
import NewsList from "./components/newsList";
import NotFound from "./components/notFound";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <main>
          <div className="container">
            <div className="row">
              <div className="col-12 py-4">
                <Switch>
                  <Route path={"/not-found"} component={NotFound}></Route>
                  <Route
                    path={"/newsList/:year?/:month?"}
                    component={NewsList}
                  ></Route>
                  <Route path={"/contactUs"} component={ContactUs}></Route>
                  <Route path={"/aboutUs"} component={AboutUs}></Route>
                  <Route
                    path={"/Movies/:genre?"}
                    component={MovieLists}
                  ></Route>
                  <Route path={"/"} component={Home} exact></Route>
                  <Redirect to={"/not-found"}></Redirect>
                </Switch>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
