import React from "react"
import "../styles/index.css"
import "../styles/dashboard.css"

const DB = () => {
    return (
        <section className="column">
            <div>
                <h2>Instruções:</h2>
                <ol>
                    <li>Adicione o nome, e-mail e telefone do seu cliente.</li>
                    <li>Adicione as necessidades do seu cliente. 
                    Qual as características do problema do seu cliente?</li>
                    <li>Elabore a proposta a ser enviada para o seu cliente. 
                    Coloque o orçamento e em quantos dias o trabalho será entregue.</li>
                    <li>Adicione o feedback do seu cliente. Diga se o negócio foi fechado ou não e porquê.</li>
                 </ol>
            </div>
            <div className="todas-etapas">
                <div className="etapa">
                    <h3>Clientes</h3>
                    <button class="btn btn-dark">Adicionar cliente</button>
                </div>
                <div className="etapa">
                    <h3>Necessidades do cliente</h3>
                </div>
                <div className="etapa">
                    <h3>Proposta</h3>
                </div>
                <div className="etapa">
                    <h3>Negócio Fechado</h3>
                </div>
            </div>
        </section>
    )
}

export default DB