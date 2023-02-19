/* eslint-disable require-jsdoc */
import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import Navbar from './components/navbar';
import Homepage from './components/homepage';
import Singledog from './components/singledog';
import Alldogs from './components/alldogs';
import Retriever from './components/retriever';
import Bulldog from './components/bulldog';
import Corgi from './components/corgi';
import Samoyed from './components/samoyed';
import Comingsoon from './components/comingsoon';
import {withAuth0} from '@auth0/auth0-react';
import ProtectedRoute from './auth0/ProtectedRoute.js';
import AdoptNow from './components/adoptnow';

function App() {
  const [singledog, setSingledog] = useState({});
  const setSingleDogPage = (
      image,
      name,
      age,
      description,
      breed,
      characteristics,
  ) => {
    setSingledog({
      image: image,
      name: name,
      age: age,
      description: description,
      breed: breed,
      characteristics: characteristics,
    });
  };

  return (
    <div className="App">
      <Helmet>
        <title>JRR Dog Adoption Center</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <Router>
        <Navbar />
        <Switch>
          <Route
            exact
            path="/dog-adoption-frontend"
            component={() => <Homepage setSingleDogPage={setSingleDogPage} />}
          />
          <Route exact path="/comingsoon" component={Comingsoon} />
          <Route
            exact
            path="/singledog"
            component={() => <Singledog singledog={singledog} />}
          />
          <ProtectedRoute exact path="/adoptnow" component={AdoptNow} />
          <Route
            exact
            path="/alldogs"
            component={() => <Alldogs setSingleDogPage={setSingleDogPage} />}
          />
          <Route
            exact
            path="/retrievers"
            component={() => <Retriever setSingleDogPage={setSingleDogPage} />}
          />
          <Route
            exact
            path="/bulldogs"
            component={() => <Bulldog setSingleDogPage={setSingleDogPage} />}
          />
          <Route
            exact
            path="/corgis"
            component={() => <Corgi setSingleDogPage={setSingleDogPage} />}
          />
          <Route
            exact
            path="/samoyeds"
            component={() => <Samoyed setSingleDogPage={setSingleDogPage} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default withAuth0(App);
