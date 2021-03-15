import React from 'react'
import FrontPage from './FrontPage'
import BioinformaticsPage from './BioinformaticsPage'
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
            <Route path="/bioinformatics">
              <BioinformaticsPage />
            </Route>
            <Route path="/">
              <FrontPage />
            </Route>
          </Switch>
        </BrowserRouter>
      </React.StrictMode>
    )
}
