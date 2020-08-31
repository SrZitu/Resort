import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
//import "./Sass/Variables.scss";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Rooms from "./component/Rooms";
import SingleRoom from "./component/SingleRoom";
import Error from "./component/Error";
import { RoomProvider } from "./component/Contex";
function App() {
  return (
    <RoomProvider>
      <div className="App">
        <Router>
          <Navbar />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/rooms/" component={Rooms} />
            <Route exact path="/rooms/:slug" component={SingleRoom} />
            <Route component={Error} />
          </Switch>
        </Router>
      </div>
    </RoomProvider>
  );
}

export default App;
