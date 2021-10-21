import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { UserContext } from '../UserContext';
import { Grid,Paper, Avatar, TextField, Button} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const Login = () => {
    const user = useContext(UserContext);
    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}

    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Enter Username</h2>
                </Grid>
                <TextField 
                    label='Username' 
                    placeholder='Enter username' 
                    fullWidth 
                    required
                    onChange={(e) => user.setName(e.target.value.trim())}
                />
                {/* <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/> */}
                <Link
                    to = "/home"
                >
                    Sign in as user
                </Link> <br/><br/>
                <Button href = "/issue"> Login as Admin</Button>
            </Paper>
        </Grid>
    )
}

export default Login
