import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { HomePage } from './pages/HomePage';

function App() {
  return <>
    <CssBaseline />
    <Container maxWidth="sm"> 
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" noWrap>
            Weather App
          </Typography>
        </Toolbar>
      </AppBar>
      
      <HomePage />
      
    </Container>
  </>
}

export default App;
