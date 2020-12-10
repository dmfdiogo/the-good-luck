import React from 'react';
import Clover from '../assets/images/clover.png'
// import { Container } from './styles';

function Logo() {
    return (
        <img src={Clover} style={{ height: '2.5em', margin: '16px' }} alt="logo" />
    );
}

export default Logo;