import React from 'react';

import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <h1>Home</h1>

            <Link to="/pagina1">Ir para página 1</Link>
            <br/>
            <Link to="/pagina2">Ir para página 2</Link>
            <br/>
            <Link to="/pagina3">Ir para página 3</Link>
            <br/>
            <Link to="/pagina4">Ir para página 4</Link>
        </div>
    );
}