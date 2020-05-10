import React from 'react';

import useStyles from './style';

import { Paper, Typography } from '@material-ui/core';
const Footer = () => {
    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <Typography variant="h6" className={classes.typo}> MattuApp&copy; 2020 </Typography>
        </Paper>
    );
}


export default Footer;
