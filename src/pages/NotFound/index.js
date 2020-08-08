import React from 'react';

import Dog from './dog404.jpg';

export default function() {
    return (
        <div>
            <h1>Hey! Stop right there!</h1>
            <img src={Dog} alt="Não encontrado"/>
        </div>
    )
}