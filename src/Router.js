import React from 'react'
import FrontPage from './FrontPage'
import AboutPage from './AboutPage'
import PortfolioPage from './PortfolioPage'
import Fade from '@material-ui/core/Fade';

import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";


export default function Main() {
    return (
      <React.StrictMode>
        <BrowserRouter>
          <Switch>
            <Route path="/">
              <FrontPage />
            </Route>
          </Switch>
        </BrowserRouter>
      </React.StrictMode>
    )
}
