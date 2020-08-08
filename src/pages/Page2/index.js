import React from 'react';

import { Link } from 'react-router-dom';

export default function Page2() {
    return (
        <div>
            <h1>Página 2</h1>
            <Link to="/">Voltar à home</Link>
            <br />
            <Link to="/pagina1">Ir para página 1</Link>
            <br />
            <Link to="/pagina3">Ir para página 3</Link>
            <br />
            <Link to="/pagina4">Ir para página 4</Link>
        </div>
    );
}