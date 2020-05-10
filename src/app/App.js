import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
	createMuiTheme,
	responsiveFontSizes,
	MuiThemeProvider,
	Grid,
	Typography,
	Container
} from '@material-ui/core';

import Form from '../components/form';
import Quote from '../components/quote';
import Spinner from '../components/spinner';
import image from '../crypto.png'

import useStyles from './style';
import Footer from '../components/footer';
import Header from '../components/header';

const App = () => {

	const classes = useStyles();
	let theme = createMuiTheme();
	theme = responsiveFontSizes(theme);

	// State 

	const [comparison, setComparison] = useState({});
	const [result, setResult] = useState({});
	const [loading, setLoading] = useState(false);
	const { currency, crypto } = comparison;

	//useEffect
	useEffect(() => {

		compareAPI();
		// eslint-disable-next-line
	}, [comparison]);

	//Comparing trough the API
	const compareAPI = async () => {
		if (!currency) return;

		const URL = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${currency}`;
		const response = await axios.get(URL);

		//Loading

		setLoading(true);

		//Pantomima de cargar
		setTimeout(() => {
			setLoading(false);
			setResult(response.data.DISPLAY[crypto][currency]);
		}, 2000);

	}
	return (
		<MuiThemeProvider theme={theme}>
			<Header title="MattuCrypto"/>
			<Container>



				<Grid container justify="center" spacing={2} className={classes.grid}>

					<Grid item xs={12} sm={12} md={6} >
						<Grid container justify="flex-end" spacing={2}>
							<img src={image} alt="CryptoCurrency" className={classes.img} />
						</Grid>
					</Grid>
					<Grid item xs={12} sm={12} md={6} >
						<Grid container justify="flex-start" spacing={2}>
							<Grid item xs={12} sm={12} >
								<Typography variant="h1" className={classes.typo}>Compare Cryptocurrencies now</Typography>
							</Grid>

							<Grid item xs={12} sm={12} >
								<Form setComparison={setComparison} />
							</Grid>

						</Grid>

					</Grid>
					<Grid item xs={12} sm={12} >

						{loading ?
							<Spinner />
							:
							null
						}
						{Object.keys(result).length !== 0 && !loading &&

							<Quote result={result} />

						}
					</Grid>


				</Grid>

			</Container>
			<Footer />
		</MuiThemeProvider>
	);
}


export default App;
