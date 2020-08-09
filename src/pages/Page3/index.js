import React, { useState } from 'react';

import { Link } from 'react-router-dom';

export default function Page3() {

    const [mensagem, setMensagem] = useState("Sejam Bem-Vindos!");
    const [nome, setNome] = useState("Gustavo");
    const [linguagens, setLinguagens] = useState(["C#", "Js", "Html", "Css", "Sql"]);

    return (
        <div>
            <h1>Página 3</h1>
            <h1>{mensagem}</h1>

            {nome === "Gustavo" && (
                <div>
                    <h3>{nome} é lindo!</h3>
                </div>
            )}

            {nome !== "Gustavo" && (
                <div>
                    <h3>{nome} é feio!</h3>
                </div>
            )}

            <ul>
                {linguagens.map(item => 
                        <li key={item}>{item}</li>        
                )}
            </ul>

            <Link to="/">Voltar à home</Link>
            <br />
            <Link to="/pagina1">Ir para página 1</Link>
            <br />
            <Link to="/pagina2">Ir para página 2</Link>
            <br />
            <Link to="/pagina4">Ir para página 4</Link>
            <br />
            <Link to="/pagina5">Ir para página 5</Link>
        </div>
    );
}