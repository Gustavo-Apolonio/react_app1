import React, { useState, useRef } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { CircleLoader, HashLoader, SyncLoader } from 'react-spinners';

import LoadingBar from 'react-top-loading-bar'


import { Link } from 'react-router-dom';


export default function Page6() {

    const [consultando, setConsultando] = useState(false);

    const ref = useRef(null);
    
    const salvarClick = () => {
        toast.success("Salvo com sucesso!");
    }

    const consultarClick = () => {
        setConsultando(true);
        ref.current.continuousStart();
    }
    
    return (
        <div>
            <LoadingBar color='#f11946' height={10} ref={ref} />
            <h1>Página 6</h1>

            <div>
                <button onClick={salvarClick}>
                    Salvar
                </button>
            </div>
            <div>
                <button onClick={consultarClick}>
                    Consultar
                </button>
                <HashLoader loading={consultando} />
            </div>

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
            <Link to="/pagina5">Ir para página 5</Link>
            <ToastContainer />
        </div>
    );
}