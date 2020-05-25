import React, { Component } from 'react';
import styles from './Convert.module.css';

class Convert extends Component {
    state = {
        country: [],
    }

    handleGetValue = async searchTerm => {
        const API_KEY = '526af95664f4a35c896d7ff5a3330e3b'
        try {
        const apiUrl = `https://data.fixer.io/api/latest?access_key=${API_KEY}&from=GBP&to=JPY&amount=25`
        const response = await fetch(apiUrl);
        const {country} = await response.json();
        this.setState({country})
        } catch (error) {
            alert("COUNTRY NOT FOUND");
        }
    }


    render() {
        return(
            <p>Conversion of one currency value to another</p>
        )
    }
}

export default Convert;