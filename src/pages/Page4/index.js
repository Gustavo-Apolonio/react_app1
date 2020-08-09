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

    let checkBox = [];
    const [checkBox2, setCheckBox2] = useState([]);
    
    const lista = [];
    const adicionarLinguagem = (item) => {
        lista.push(item);
        checkBox = lista;
    }
    const removerLinguagem = (item) => {
        lista.push(item);
        checkBox = lista;
    }
    const botaoClickLinguagem = () => {
        setCheckBox2(checkBox);
    }

    const [sexo, setSexo] = useState("");
    const [data, setData] = useState("");

    

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

            <div>
                <div>
                    <h1>Linguagens</h1>
                </div>
                <label>C# : </label>
                <input type="checkbox"
                       name="linguagem"
                       onChange={(e) => e.target.checked ? adicionarLinguagem("C#") : ''} />
                <br />
                <label>SQL : </label>
                <input type="checkbox"
                       name="linguagem"
                       onChange={(e) => e.target.checked ? adicionarLinguagem("SQL") : ''} />
                <br />
                <label>JavaScript : </label>
                <input type="checkbox"
                       name="linguagem"
                       onChange={(e) => e.target.checked ? adicionarLinguagem("JavaScript") : ''} />
                <br />
                <label>HTML : </label>
                <input type="checkbox"
                       name="linguagem"
                       onChange={(e) => e.target.checked ? adicionarLinguagem("HTML") : ''} />
                <br />
                <label>CSS : </label>
                <input type="checkbox"
                       name="linguagem"
                       onChange={(e) => e.target.checked ? adicionarLinguagem("CSS") : ''} />
                <br />
                <button onClick={botaoClickLinguagem}>Mostrar Linguagens</button>
                <ul>
                    {checkBox2.map(item => 
                            <li key={item}>{item}</li>        
                    )}
                </ul>
            </div>

            <div>
                <h1>Sexo</h1>
                <label>Masculino : </label>
                <input type="radio"
                       name="sexo"
                       onChange={(e) => e.target.checked ? setSexo("M") : ''} />
                <br />
                <label>Feminino : </label>
                <input type="radio"
                       name="sexo"
                       onChange={(e) => e.target.checked ? setSexo("F") : ''} />

                <p> {sexo} </p>
            </div>

            <div>
                <h1>Nascimento</h1>
                <label>Escolha sua data de nascimento : </label>
                <input type="date"
                       onChange={(e) => setData(Date(e.target.value))}/>

                <p> {data} </p>
            </div>

            <br />
            <Link to="/">Voltar à home</Link>
            <br />
            <Link to="/pagina1">Ir para página 1</Link>
            <br />
            <Link to="/pagina2">Ir para página 2</Link>
            <br />
            <Link to="/pagina3">Ir para página 3</Link>
            <br />
            <Link to="/pagina5">Ir para página 5</Link>
        </div>
    );
}