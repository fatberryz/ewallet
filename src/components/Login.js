import React, { useContext, useState } from 'react';
import { UserContext } from '../UserContext';
import { Grid,Paper, Avatar, TextField, Button} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const Login = () => {
    const user = useContext(UserContext);
    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField 
                    label='Username' 
                    placeholder='Enter username' 
                    fullWidth required
                    onChange={(e) => user.setName(e.target.value.trim())}
                />
                {/* <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/> */}
                <Button 
                    type='submit' 
                    color='primary' 
                    variant="contained" 
                    style={btnstyle} 
                    fullWidth
                    href = "/"
                >
                    Sign in
                </Button>
            </Paper>
        </Grid>
    )
}

export default Login
