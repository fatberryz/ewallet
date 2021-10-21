import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext';
import CustomBtn from './CustomBtn';
import logo from '../ewallet.png';
import {Toolbar, Typography, Button} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles"; 



const styles = makeStyles({
    bar:{
        paddingTop: "1.15rem",
        backgroundColor: "#fff",
        '@media (max-width:780px)': { 
           flexDirection: "column"
          }
    },
    logo: {
        width: "15%", 
        '@media (max-width:780px)': { 
           display: "none"
           }
    },
    menuItem: {
        cursor: "pointer", 
        flexGrow: 1,
        "&:hover": {
            color:  "#4f25c8"
        },
        '@media (max-width:780px)': { 
            paddingBottom: "1rem"    }
    }
})

const NavBar = () => {
    const user = useContext(UserContext);
    const classes = styles()

    return (
            <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>   
                <img src={logo} className={classes.logo} alt = " "/> 
                {/* <Typography variant="h6" className={classes.menuItem}>
                    <Link to="/issue"> Issue Points </Link>
                </Typography> */}
                <Typography variant="h6" className={classes.menuItem}>
                    <Link to="/wallet"> My Account Balance </Link>
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                <Link to="/rewards">  Claim Rewards </Link>
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                   <Button href="/"> Sign Out </Button>
                </Typography>
                <CustomBtn user={user.name} />
            </Toolbar>
    )
}

export default NavBar