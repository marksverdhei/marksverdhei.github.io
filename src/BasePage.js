import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from './Header';
import Footer from './Footer';

export default function BasePage(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Markus Heiervang" sections={[]} href="/" />
        {props.children}
      </Container>
      <Footer title="What should I put here?" description="I have no clue!" />
    </React.Fragment>
  );
}
