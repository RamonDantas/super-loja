import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Home from './component/Home';
import Cart from './component/Cart';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              <Button color="inherit" href="/">
                Super Loja
              </Button>
            </Typography>
            <Button color="inherit" href="/cart">
              <span className="material-icons">
                shopping_cart
              </span>
            </Button>
          </Toolbar>          
        </AppBar>
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
      </div>
    </BrowserRouter>
  );
}

export default App;
