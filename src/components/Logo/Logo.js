import React from 'react';
import burgerLogo from '../../assets/images/132 burger-logo.png';
import classes from './Logo.css';

const logo = (props) => (
    <div
        style={{height:props.height}}
        className={classes.Logo}>
        <img src={burgerLogo} alt="MyBurger"/>
    </div>
);

export default logo;