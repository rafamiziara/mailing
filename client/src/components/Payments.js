import React, { Component } from 'react';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';
import { connect } from 'react-redux';
import * as actions from '../actions';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

class Payments extends Component {
  async handleClick(event) {
    const stripe = await stripePromise;

    const res = await axios.post('/api/stripe');
    const session = await res.data;

    await stripe.redirectToCheckout({ sessionId: session.id });
  }

  render() {
    return (
      <button style={{borderRadius: '1rem', marginLeft: '1rem', display: 'flex', alignItems: 'center'}} className="btn" role="link" onClick={this.handleClick}>
        <img style={{width: '1.6rem'}} src="/card.svg" />
      </button>
    );
  }
}

export default connect(null, actions)(Payments);