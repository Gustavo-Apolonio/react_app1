import React from 'react';

import { Link } from 'react-router-dom';

import Pai from '../../components/Pai';

export default function Page5() {
    return (
        <div>
            <h1>Página 5</h1>

            <Pai />


            <Link to="/">Voltar à home</Link>
            <br />
            <Link to="/pagina1">Ir para página 1</Link>
            <br />
            <Link to="/pagina2">Ir para página 2</Link>
            <br />
            <Link to="/pagina3">Ir para página 3</Link>
            <br />
            <Link to="/pagina4">Ir para página 4</Link>
            <br />
            <Link to="/pagina6">Ir para página 6</Link>
        </div>
    );
}