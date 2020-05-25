import React, { Component } from 'react';
import styles from './Lookup.module.css';

class Lookup extends Component {
    state = {
        country: [],
    }
    render() {
        return(
            <p>Currency Value Lookup</p>
        )
    }
}

export default Lookup;