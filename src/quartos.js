import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';

function Quartos() {
    const quartos = [
        {
            nome: "SUÍTE PIT STOP",
            foto: "url_da_foto_qurto_luxo.jpg",
            valor: "$150 por noite"
        },
        {
            nome: "SUÍTE GUEIXA",
            foto: "url_da_foto_quarto_executivo.jpg",
            valor: "$90 por noite"
        },
        {
            nome: "SUÍTE CABARET",
            foto: "url_da_foto_qurto_luxo.jpg",
            valor: "$150 por noite"
        },
        {
            nome: "SUÍTE IMPERIAL",
            foto: "url_da_foto_qurto_luxo.jpg",
            valor: "$150 por noite"
        },
        
        // Adicione mais quartos conforme necessário
    ];

    return (
        <div>
            {/* Renderização dos quartos */}
            {quartos.map((quarto, index) => (
                <div key={index} className="quarto-card">
                    <img src={quarto.foto} alt={quarto.nome} className="quarto-foto" />
                    <h3>{quarto.nome}</h3>
                    <p>{quarto.valor}</p>
                </div>
            ))}
        </div>
    );
}

export default Quartos;
