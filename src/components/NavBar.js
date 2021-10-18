import React from 'react';
import { Link } from 'react-router-dom';
//  import { useState } from 'react';
import CustomBtn from './CustomBtn';
import logo from '../ewallet.png';
import {Toolbar, Typography} from '@material-ui/core';
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

function NavBar(props) {
    const classes = styles()
    // const [currentPage, setState] = useState(false)

    // const handleClick = () => {
    //     console.log("test test, button clicked.");
    //     setState(true)
    // }
    return (
            <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>   
                <img src={logo} className={classes.logo} alt = " "/> 
                <Typography variant="h6" className={classes.menuItem}>
                   <Link to="/"> Home </Link>
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    <Link to="/issue"> Issue Points </Link>
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    <Link to="/wallet"> My Account Balance </Link>
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                <Link to="/rewards">  Claim Rewards </Link>
                </Typography>
                <CustomBtn user={props.user} />
            </Toolbar>
    )
}

export default NavBar