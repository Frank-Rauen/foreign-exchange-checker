import React, { Component } from 'react';
import styles from './Lookup.module.css';

class Lookup extends Component {
    state = {
        country: [],
    }

    handleGetValue = async searchTerm => {
        const API_KEY = '526af95664f4a35c896d7ff5a3330e3b'
        try {
        const apiUrl = `https://data.fixer.io/api/latest?access_key=${API_KEY}&base=USD`
        } catch (error) {
            alert("COUNTRY NOT FOUND");
        }
    }

    render() {
        return(
            <p>Currency Value Lookup</p>
        )
    }
}

export default Lookup;