import React, {useContext} from 'react';
import { UserContext } from './UserContext';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Issue from "./components/Issue";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import NavBarAdmin from "./components/NavBarAdmin";
import NotFound from "./components/NotFound";
import Wallet from './components/Wallet';
import Rewards from './components/Rewards';
import Login from './components/Login';

const theme = createTheme({
    palette: {  
      primary: {
        main:"#2e1667",
      },
      secondary: {
        main:"#c7d8ed",
      },
    },
    typography: {
      fontFamily: [
        'Roboto'
      ],
      h4: {
        fontWeight: 600,
        fontSize: 28,
        lineHeight: '2rem',
        },
      h5: {
        fontWeight: 100,
        lineHeight: '2rem',
      },
    },
  });

const App = () => {
    const user = useContext(UserContext);
    return (
        <Router>
            <div className="App">
                <ThemeProvider theme={theme}>
                        <Switch>
                            <Route exact path="/">
                                <Login />
                            </Route>
                            <Route exact path = "/home">
                                <NavBar user ={user} />
                                <Home user ={user} />
                            </Route>
                            <Route exact path = "/issue">
                                <NavBarAdmin user ="Admin"/>
                                <Issue />
                            </Route>
                            <Route exact path = "/wallet">
                                <NavBar user ={user} />
                                <Wallet />
                            </Route>
                            <Route exact path = "/rewards">
                                <NavBar user ={user} />
                                <Rewards />
                            </Route>
                            <Route path="*">
                                <NotFound />
                            </Route>

                        </Switch>

                </ThemeProvider>

            </div> 
     </Router>
  );
}

export default App;
