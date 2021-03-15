import React from 'react'
import FrontPage from './FrontPage'
import AboutPage from './AboutPage'
import PortfolioPage from './PortfolioPage'
import Fade from '@material-ui/core/Fade';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


export default function Main() {
    return (
      <React.StrictMode>
        <Router>
          <Switch>
            <Route path="/about">

              <AboutPage/>
            </Route>
            <Route path="/portfolio">
              <PortfolioPage/>
            </Route>
            <Fade>
            <Route path="/">
              <FrontPage />
            </Route>
            </Fade>
          </Switch>
        </Router>
      </React.StrictMode>
    )
}
