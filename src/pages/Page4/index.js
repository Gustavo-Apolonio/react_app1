import React, { useState } from 'react';

import { Link } from 'react-router-dom';

export default function Page4() {
    const [nome, setNome] = useState("");
    const [nome2, setNome2] = useState("");

    const botaoClickNome = () => {
        setNome(nome2);
    }
    const alterouNome = (e) => {
        let novoNome = e.target.value;
        setNome2(novoNome);
    }

    const [idade, setIdade] = useState("");
    const [idade2, setIdade2] = useState("");

    const botaoClickIdade = () => {
        setIdade(idade2);
    }
    const alterouIdade = (e) => {
        let novoIdade = e.target.value;
        setIdade2(novoIdade);
    }

    const [checkBox, setCheckbox] = useState("");

    

    return (
        <div>
            <h1>Página 4</h1>

            <div>
                <label>Nome : </label>
                <input type="text"
                       name="nome"
                       placeholder="Escreva aqui..."
                       onChange={alterouNome} />
                <button onClick={botaoClickNome}>Alterar Nome</button>
                <h3> {nome} </h3>
            </div>

            <div>
                <label>Idade : </label>
                <input type="number"
                       name="idade"
                       placeholder="Idade aqui..."
                       onChange={alterouIdade} />
                <button onClick={botaoClickIdade}>Alterar Idade</button>
                <h3> {idade} </h3>
            </div>

            {/* <div>
                <label>Idade : </label>
                <input type="number"
                       name="idade"
                       placeholder="Idade aqui..."
                       onChange={alterouIdade} />
                <button onClick={botaoClickIdade}>Alterar Idade</button>
                <h3> {idade} </h3>
            </div> */}

            {/* falta terminar */}

            {/* <div>
                <input type="number"
                    placeholder="Escreva aqui..."
                    onChange={(e) => {Number(setMensagem(e.target.value))}}/>
                <button onClick={botaoClick}>Clique se for capaz</button>
            </div>
            <div>
                <input type="checkbox"
                    placeholder="Escreva aqui..."
                    onChange={(e) => {setMensagem(Boolean(e.target.checked))}}/>
                <button onClick={botaoClick}>Clique se for capaz</button>
            </div>
            <div>
                <input type="radio"
                    name="sexo"
                    placeholder="Escreva aqui..."
                    onChange={(e) => {setMensagem(e.target.checked ? 'M' : 'F')}}/> Masculinho
                <button onClick={botaoClick}>Clique se for capaz</button>
            </div>
            <div>
                <input type="radio"
                    name="sexo"
                    placeholder="Escreva aqui..."
                    onChange={(e) => {setMensagem(e.target.checked ? 'F' : 'M')}}/> Feminino
                <button onClick={botaoClick}>Clique se for capaz</button>
            </div>


            <h2>{mensagem}</h2>
 */}

            <br />
            <Link to="/">Voltar à home</Link>
            <br />
            <Link to="/pagina1">Ir para página 1</Link>
            <br />
            <Link to="/pagina2">Ir para página 2</Link>
            <br />
            <Link to="/pagina3">Ir para página 3</Link>
        </div>
    );
}