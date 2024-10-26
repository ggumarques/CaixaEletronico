"use client";
import { useState } from "react";

export default function TelaLogin({ onLogin }) {
    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");

    const handleLogin = () => {
        if (nome && senha) {
            onLogin(); 
            alert("Por favor, insira nome e senha.");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-full text-white bg-gray-700 p-6 rounded-lg">
            <h2 className="mb-4 text-2xl">Digite seu nome e senha</h2>
            <input 
                type="text"
                placeholder="Nome"
                className="p-2 mb-4 rounded text-gray-800"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />
            <input 
                type="password"
                placeholder="Senha"
                className="p-2 mb-4 rounded text-gray-800"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
            />
            <button onClick={handleLogin} className="bg-green-600 p-3 rounded text-white">Entrar</button>
        </div>
    );
}
