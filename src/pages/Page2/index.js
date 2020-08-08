import React from 'react';

import { Link } from 'react-router-dom';

export default function Page2() {
    return (
        <div>
            <h1>Página 2</h1>
            <Link to="/">Voltar</Link>
            <br />
            <Link to="/pagina1">Ir para página 1</Link>
        </div>
    );
}