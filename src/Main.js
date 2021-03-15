import React from 'react'
import Blog from './Blog'
import reportWebVitals from './reportWebVitals'
import BasePage from './BasePage'
import AboutPage from './AboutPage'
import PortfolioPage from './PortfolioPage'
import GlobalContext from './GlobalContext'
import Fade from '@material-ui/core/Fade';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


export default function Main() {
    const context = React.useContext(GlobalContext)
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
              <Blog />
            </Route>
            </Fade>
          </Switch>
        </Router>
      </React.StrictMode>
    )
}
