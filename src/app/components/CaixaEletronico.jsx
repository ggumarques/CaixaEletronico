"use client"
import { useState } from "react";
import Teclado from './Teclado';
import TelaOperacao from './TelaOperacao';

export default function CaixaEletronico(){
    const [tela, setTela] = useState('inicio');

    const handleOperacao = (operacao) => {
        switch (operacao) {
            case '1':
                setTela('pix');
                break;
            case 'saque':
                setTela('saque');
                break;
            case 'extrato':
                setTela('extrato');
                break;
            case 'deposito':
                setTela('deposito');
              break;
            case 'cancelar':
              setTela('inicio');
              break;
            default:
                setTela('inicio');
        }
    };

    return (
        <div className="flex flex-col items-center p-6 bg-gray-500 h-screen text-white">
            <TelaOperacao tela={tela} />
            <Teclado onOperacao={handleOperacao} />
        </div>
    );
}