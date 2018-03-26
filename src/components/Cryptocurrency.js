import React, { Component } from 'react';
import './Cryptocurrency.css';

class Cryptocurrency extends Component {
  render() {
    var {
      id,
      name,
      symbol,
      price_usd,
      percent_change_1h,
      percent_change_24h,
      percent_change_7d,
      market_cap_usd
      
  } = this.props.data;

  return (
    <li className={"cryptocurrency " + id}>
      <p className="cryptocurrency-name">{name} {(symbol)} </p>
      <h1>$ { (+price_usd).toFixed(2) } </h1>
      <p> {percent_change_1h}% 1hr </p>
      <p> {percent_change_24h}% 24hr </p>
      <p> {percent_change_7d}% 7days </p>
      <p> { (+market_cap_usd).toFixed(2) } </p>

    </li>
  )
 }
}

export default Cryptocurrency;