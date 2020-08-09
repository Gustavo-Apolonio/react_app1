import React, { useState } from 'react';

import Filho from '../Filho';

export default function Pai() {

    const [nome, setNome] = useState("Gustavo");
    const [idade, setIdade] = useState(16);
    const [esportes, setEsportes] = useState({
        futebol: "Brazil",
        basket: "Lakers"
    });
    const [musicas, setMusicas] = useState(["Forro", "Axe", "Gospel"]);

    return (
        <div>
            <h1>Pai</h1>
            
            <Filho nome={nome}
                   idade={idade}
                   musicas={musicas}
                   esportes={esportes}
                   musicas={musicas}/>
        </div>
    );
}