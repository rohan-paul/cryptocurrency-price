import React, { Component } from 'react';
import axios from 'axios';

import './Screeners.css';
import Cryptocurrency from './Cryptocurrency';

class Screeners extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: "bitcoin",
                    name: "Bitcoin",
                    symbol: "BTC",
                    price_usd: "1",
                    percent_change_1h: "0",
                    percent_change_24h: "0",
                    percent_change_7d: "0",
                },
                {
                  id: "ethereum",
                  name: "Ethereum",
                  symbol: "ETH",
                  price_usd: "1",
                  percent_change_1h: "0",
                  percent_change_24h: "0",
                  percent_change_7d: "0",
                },
                {
                  id: "litecoin",
                  name: "Litecoin",
                  symbol: "LTC",
                  price_usd: "1",
                  percent_change_1h: "0",
                  percent_change_24h: "0",
                  percent_change_7d: "0",
                }
            ]
        }
    }

    render() {
        var screeners = this.state.data.map((currency) =>
            <Cryptocurrency data={currency} key={currency.id} />
    );
        return (
            <div className="screeners-containers">
                <ul className="screeners">{screeners}</ul>
                <p>Information updated every 10 seconds from coinmarketcap.com</p>
            </div>
        );
    }
}

export default Screeners;