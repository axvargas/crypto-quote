import React from 'react';
import { Grid } from '@material-ui/core';
import './style.css';
const Spinner = () => {
    return (
        <Grid container justify="center" alignItems="center">
            <div className="sk-chase">
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
            </div>
        </Grid>

    );
}

export default Spinner;
