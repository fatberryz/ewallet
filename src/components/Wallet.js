import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';

function Wallet() {
    const [points, setPoints] = useState(0);
    const [vouchers, setVouchers] = useState([]);

    useEffect(() => {
        const axios = require('axios');
        const user = "Ryan";
        // to get current points of the user
        axios.get('http://18.136.104.201:9090/getRewardState')
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
        axios.get('http://18.136.104.201:9090/getRedemptionState')
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
            <Card variant="outlined">
                <h1>Ryan</h1>
                <h2> Available Points: {points}</h2>
            </Card>
            {vouchers.length>0 ?
                <Grid justify="center" alignItems="center">
                    {vouchers.map(obj =>
                        <Grid>
                            <Card>
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
