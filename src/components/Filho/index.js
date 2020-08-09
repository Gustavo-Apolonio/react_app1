import React from 'react';

export default function Filho(props) {

    const times = [];
    times.push(props.esportes.futebol);
    times.push(props.esportes.basket);


    return (
        <div>
            <h1>Filho</h1>

            <h1> Nome : {props.nome} - {props.idade} anos </h1>
            <h1>Times : </h1>
            <ul>
                {times.map(item => 
                    <li key={item}>{item}</li>
                    )}
            </ul>
            <h1>Estilos Musicais : </h1>
            <ul type="square">
                {props.musicas.map(item =>
                    <li key={item}>{item}</li>
                    )}
            </ul>
        </div>
    )
}