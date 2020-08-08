import React from 'react';

import Dog from './dog404.jpg';
import { Link } from 'react-router-dom';

export default function() {
    return (
        <div>
            <h1>Hey! Stop right there!</h1>
            <img src={Dog} alt="Não encontrado"/>
            <br />
            <Link to="/">Voltar à home</Link>
        </div>
    )
}