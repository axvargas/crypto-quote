import React from 'react';

import useStyles from './style';
import { Typography, Grid } from '@material-ui/core';
const Quote = ({ result }) => {
    const classes = useStyles();
    return (
        <Grid container justify="center" direction="column" alignItems="center" spacing={2} className={classes.gridI}>
            <Grid item xs={12} sm={12} >
                <Typography variant="h3" className={classes.typo}>Comparison</Typography>
            </Grid>
            <br />
            <Grid item xs={12} sm={12} >
                <Typography variant="h4" className={classes.typo}>Price</Typography>
                <Typography variant="h5" className={classes.typo}>{result.PRICE}</Typography>
            </Grid>
            <Grid item xs={12} sm={12} >
                <Typography variant="h4" className={classes.typo}>Highest price today</Typography>
                <Typography variant="h5" className={classes.typo}>{result.HIGHDAY}</Typography>
            </Grid>
            <Grid item xs={12} sm={12} >
                <Typography variant="h4" className={classes.typo}>Lowest price today</Typography>
                <Typography variant="h5" className={classes.typo}>{result.LOWDAY}</Typography>
            </Grid>
            <Grid item xs={12} sm={12} >
                <Typography variant="h4" className={classes.typo}>Change percentage within last 24 hours</Typography>
                <Typography variant="h5" className={classes.typo}>{result.CHANGEPCT24HOUR}</Typography>
            </Grid>
            <Grid item xs={12} sm={12} >
                <Typography variant="h4" className={classes.typo}>Last update</Typography>
                <Typography variant="h5" className={classes.typo}>{result.LASTUPDATE}</Typography>
            </Grid>

        </Grid>

    );
}

export default Quote;
