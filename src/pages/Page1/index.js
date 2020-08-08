import React from 'react';

import { Link } from 'react-router-dom';

export default function Page1() {
    return (
        <div>
            <h1>Página 1</h1>
            <Link to="/">Voltar</Link>
            <br />
            <Link to="/pagina2">Ir para página 2</Link>
        </div>
    );
}