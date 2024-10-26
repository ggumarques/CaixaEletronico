"use client";

import { useState } from "react";
import Teclado from './Teclado';
import TelaOperacao from './TelaOperacao';
import TelaLogin from '../TelaLogin';

export default function CaixaEletronico() {
    const [tela, setTela] = useState('login');
    const [acessoPermitido, setAcessoPermitido] = useState(false);
    const [input, setInput] = useState(''); 

    const handleOperacao = (operacao) => {
        if (!isNaN(operacao)) { 
            setInput((prev) => prev + operacao); 
        } else {
            switch (operacao) {
                case 'confirmar':
                    console.log("Operação confirmada:", input);
                    setInput(''); 
                    break;
                case 'apagar':
                    setInput((prev) => prev.slice(0, -1)); 
                    break;
                case 'cancelar':
                    setTela('inicio');
                    setInput(''); 
                    break;
                default:
                    setTela('inicio');
            }
        }
    };

    const handleLogin = () => {
        setAcessoPermitido(true);
        setTela('inicio');
    };

    return (
        <div className="flex h-screen text-white">
            <div className="w-1/2 flex items-center justify-center p-6">
                {acessoPermitido 
                    ? <TelaOperacao tela={tela} input={input} /> 
                    : <TelaLogin onLogin={handleLogin} />}
            </div>
            <div className="w-1/2 flex items-center justify-center p-6 bg-gray-500">
                <Teclado onOperacao={handleOperacao} />
            </div>
        </div>
    );
}