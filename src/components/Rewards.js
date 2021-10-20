import React, { useState, useEffect, useContext} from 'react';
import { UserContext } from '../UserContext';
import rewardsJson from '../rewards.json';
import config from '../config.json';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';

const Rewards = () => {
    const obj = useContext(UserContext);
    const [points, setPoints] = useState(0);
    const hostName = (config[0].hostName);
    const user = obj.name;


    const handleRedeem = (name, points) => {
        const axios = require('axios');
        const url = `${hostName}/redeem?voucher=${name}&&customer=${user}&&point=${points}`
        axios.get(url)
        .then(function (response) {
            // handle success
            // console.log(response.data);
            alert("Voucher redeemed successfully!")
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
    }
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
        })

    return (
        <Grid justify="center" alignItems="center">
            {rewardsJson.map(obj =>
                <Grid>
                    <Card>
                        <CardContent>
                            Voucher Name: <b>{obj.name}</b> <br />
                            Value of Voucher: <b>{obj.value}</b> <br />
                            Points needed to redeem voucher: <b>{obj.points}</b> <br />
                            {points >= obj.points ?
                            <Button onClick={() => handleRedeem(obj.name, obj.points)}> Redeem Voucher </Button>                         
                        : <h4 style={{ color: 'red' }}> Insufficient points to redeem voucher</h4>}

                        </CardContent>
                    </Card>
                </Grid>
            )
            }
        </Grid>
    )
}

export default Rewards
