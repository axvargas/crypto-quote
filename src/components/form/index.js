import React, { useEffect, useState } from 'react';
import { Typography, Button } from '@material-ui/core';
import axios from 'axios';

//import HOOK
import useCurrency from '../../hooks/useCurrency';
import useCrypto from '../../hooks/useCrypto';

import { currencies, URL } from './variables';
import useStyles from './style';

const Form = ({ setComparison }) => {
    //Styles
    const classes = useStyles();

    //State
    const [cryptoCurrencies, setCryptoCurrencies] = useState([]);
    const [errorCurrency, setErrorCurrency] = useState(false);
    const [errorCrypto, setErrorCrypto] = useState(false);
    const [helperCurrency, setHelperCurrency] = useState(false);
    const [helperCrypto, setHelperCrypto] = useState(false);

    // Destructure the hook
    const [currency, CmbCurrency] = useCurrency('Currency', null, currencies);
    const [crypto, CmbCrypto] = useCrypto('Cryptocurrency', null, cryptoCurrencies);

    //Execute API call
    useEffect(() => {
        consultAPI();
    }, []);

    const consultAPI = async () => {

        const response = await axios.get(URL);
        setCryptoCurrencies(response.data.Data);
    }

    const handleSubmit = (event) => {
        event.preventDefault();


        let numberOfErrors = 0;
        if (currency === null) {
            numberOfErrors += 1
            setErrorCurrency(true)
            setHelperCurrency('Select a currency')
        }

        if (crypto === null) {
            numberOfErrors += 1
            setErrorCrypto(true)
            setHelperCrypto('Select a Cryptocurrency')
        }


        if (numberOfErrors > 0) {
            console.log("Stopped")
            return;
        }
        // Pass the info to the App Component
        console.log("Submiting...");

        setComparison({
            currency: currency.value,
            crypto: crypto.CoinInfo.Internal
        })
     
    }
    return (
        <form onSubmit={handleSubmit}>
            <CmbCurrency error={errorCurrency} helper={helperCurrency} setError={setErrorCurrency} setHelper={setHelperCurrency} />
            <CmbCrypto error={errorCrypto} helper={helperCrypto} setError={setErrorCrypto} setHelper={setHelperCrypto} />
            <Button
                type="submit"
                className={classes.btn}
            >
                <Typography variant="h4" className={classes.typo}>Compare</Typography>
            </Button>
        </form>
    );
}

export default Form;
