import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import config from '../config.json';
import Grid from '@mui/material/Grid';
import {makeStyles} from "@material-ui/core/styles"; 

const useStyles = makeStyles({
    root: {
    },
    voucher: {
        border: "1px solid",
        borderColor: 'blue'
    }
})

function Wallet() {
    const [points, setPoints] = useState(0);
    const [vouchers, setVouchers] = useState([]);
    const classes = useStyles();
    const user = "Ryan";
    const hostName = (config[0].hostName);

    useEffect(() => {
        const axios = require('axios');
        // to get current points of the user
        axios.get(`${hostName}/getRewardState`)
            .then(function (response) {
                // handle success
                // console.log(response.data);
                var amount = 0;
                for (var i = 0; i < response.data.length; i++) {
                    var obj = response.data[i];
                    // console.log(obj.customer);
                    if (obj.customer == user) {
                        amount += parseInt(obj.point);
                    }
                }
                setPoints(amount);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
        var voucherArray = [];
        // to get vouchers redeemed by the user
        axios.get(`${hostName}/getRedemptionState`)
            .then(function (response) {
                // handle success
                // console.log(response.data);
                // var amount = 0;
                for (var i = 0; i < response.data.length; i++) {
                    var obj = response.data[i];
                    // console.log(obj.customer);
                    if (obj.customer == user) {
                        voucherArray.push(obj)
                    }
                }
                setVouchers(voucherArray);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    });

    return (
        <div>
            <Card className = {classes.root} variant="outlined">
                <h1>{user}</h1>
                <h2> Available Points: {points}</h2>
            </Card>
            {vouchers.length>0 ?
                <Grid justify="center" alignItems="center">
                    {vouchers.map(obj =>
                        <Grid>
                        <Card className = {classes.voucher}>
                            <CardContent>
                                Voucher Name: <b>{obj.voucher}</b> <br/>
                                Points used to redeem voucher: <b>{obj.point}</b>
                            </CardContent>
                        </Card>
                    </Grid>
                    )
                    }
                </Grid>
        :<h1>Nothing to show</h1>}
        

        </div>
    )
}

export default Wallet
