import React from 'react';

import Mensagem from '../Ninja/Mensagem';

import './boasVindas.css';

export default function BoasVindas() {
    return (
        <div className="boas-vindas">
            <h1>Sejam todos bem-vindos!</h1>
            <h2>React na veia!</h2>
            <Mensagem />
        </div>
    );
}