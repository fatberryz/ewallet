import React, {useContext} from 'react';
import { UserContext } from './UserContext';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Issue from "./components/Issue";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
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
                    <NavBar user ={user} />
                        <Switch>
                            <Route exact path="/login">
                                <Login />
                            </Route>
                            <Route exact path="/">
                                <Home user={user} />
                            </Route>
                            <Route exact path = "/issue">
                                <Issue />
                            </Route>
                            <Route exact path = "/wallet">
                                <Wallet />
                            </Route>
                            <Route exact path = "/rewards">
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
