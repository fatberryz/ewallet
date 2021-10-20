import { useState } from "react";
import config from '../config.json';
import "../index.css";

const Issue = () => {
    const [amount, setAmount] = useState(' ');
    const [receiver, setReceiver] = useState(' ');
    const hostName = (config[0].hostName);

    const handleSubmit = (e) => {
        e.preventDefault();
        const transactionDetails = { amount, receiver };
        console.log(transactionDetails)
        const url = `${hostName}/issue?customer=${receiver}&&point=${amount}`;
        console.log(url);
        const axios = require('axios');
        axios.get(url)
            .then(function (response) {
                // handle success
                console.log(response.data);
                // add progress bar in
                alert("Points have been issued successfully!")
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }

    return (
        <div className="issue">
            <h2>Issue Reward Points</h2>
            <form onSubmit={handleSubmit}>
                <label>Customer Name</label>
                <input
                    type="text"
                    required
                    value={receiver}
                    onChange={(e) => setReceiver(e.target.value.trim())}
                />
                <label> Number of Points:</label>
                <input
                    type="text"
                    required
                    value={amount}
                    onChange={(e) => setAmount(e.target.value.trim())}
                />

                <button>Issue now</button>
            </form>
        </div>
    );
}

export default Issue;