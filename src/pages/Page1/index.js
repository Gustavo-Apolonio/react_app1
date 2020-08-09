import React from 'react';

import { Link } from 'react-router-dom';

export default function Page1() {
    return (
        <div>
            <h1>Página 1</h1>
            <Link to="/">Voltar à home</Link>
            <br />
            <Link to="/pagina2">Ir para página 2</Link>
            <br />
            <Link to="/pagina3">Ir para página 3</Link>
            <br />
            <Link to="/pagina4">Ir para página 4</Link>
            <br />
            <Link to="/pagina5">Ir para página 5</Link>
            <br />
            <Link to="/pagina6">Ir para página 6</Link>
        </div>
    );
}