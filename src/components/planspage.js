import React from "react"
import '../styles/index.css'
import '../styles/planspage.css'

const PlansTypes = () => {
    return (
    <section className="container plans-container">
        <div className="container plan-type">
            <h2 className="text-uppercase">Plano Free</h2>
            <p className="price">R$ 0</p>
            <p className="item-intro text-muted">Organize sua equipe de vendas e se relacione com leads por chat, e-mail ou telefone</p>
            <img className="img-fluid d-block mx-auto" src="assets/img/plans/free.jpg" alt="" />
            <p styles="text-align: left; padding-left: 10rem; font-size: 1.3rem;"> <strong>Benefícios:</strong> 
            </p>
            <ul className="list-inline" styles="font-size: 1.1rem;">
                <li>Lista de contatos dos clientes</li>
                <li>Fases do ciclo de vida do atendimento</li> 
                <li>Chat, e-mail e telefone integrados</li>
                <li>Suporte 24x7</li>
                <li>Aplicativo Móvel</li>
                <li className="line-through">Pipeline de vendas visuais</li>
                <li className="line-through">Pontuação de contato preditiva com tecnologia de IA</li> 
                <li className="line-through">Até 2.000 sessões de bot/mês</li>
                <li className="line-through">WhatsApp Business</li>
                <li className="line-through">Fluxos de trabalho temporais</li>
                <li className="line-through">Registros de auditoria</li>
                <li className="line-through">Gerente de contas</li>
            </ul>
            <button className="btn btn-primary btn-xl text-uppercase" type="button">
            Inscreva-se
            </button>
        </div>
        <div className="container plan-type">
            <h2 className="text-uppercase">Plano Plus</h2>
            <p className="price">R$ 49</p>
            <p className="item-intro text-muted">Além dos benefícios gratuitos, inclui mais ferramentas de gerenciamento</p>
            <img className="img-fluid d-block mx-auto" src="assets/img/plans/plus.jpg" alt="" />
            <p styles="text-align: left; padding-left: 10rem; font-size: 1.3rem;"> 
            <strong>Benefícios:</strong>
            </p>
            <ul className="list-inline" styles="font-size: 1.1rem;">
                <li>Lista de contatos dos clientes</li>
                <li>Fases do ciclo de vida do atendimento</li> 
                <li>Chat, e-mail e telefone integrados</li>
                <li>Suporte 24x7</li>
                <li>Aplicativo Móvel</li>
                <li>Pipeline de vendas visuais</li>
                <li>Pontuação de contato preditiva com tecnologia de IA</li> 
                <li>Até 2.000 sessões de bot/mês</li>
                <li>WhatsApp Business</li>
                <li className="line-through">Fluxos de trabalho temporais</li>
                <li className="line-through">Registros de auditoria</li>
                <li className="line-through">Gerente de contas</li>
            </ul>
            <button className="btn btn-primary btn-xl text-uppercase" type="button">
                Inscreva-se
            </button>
        </div>  
        <div className="container plan-type">
            <h2 className="text-uppercase">Plano Premium</h2>
            <p className="price">R$ 69</p>
            <p className="item-intro text-muted">Acesse todas as ferramentas disponíveis na nossa plataforma</p>
            <img className="img-fluid d-block mx-auto" src="assets/img/plans/premium.jpg" alt=""></img>
            <p styles="text-align: left; padding-left: 10rem; font-size: 1.3rem;"> 
            <strong>Benefícios:</strong>
            </p>
            <ul className="list-inline" styles="font-size: 1.1rem;">
                <li>Lista de contatos dos clientes</li>
                <li>Fases do ciclo de vida do atendimento</li> 
                <li>Chat, e-mail e telefone integrados</li>
                <li>Suporte 24x7</li>
                <li>Aplicativo Móvel</li>
                <li>Pipeline de vendas visuais</li>
                <li>Pontuação de contato preditiva com tecnologia de IA</li> 
                <li>Até 5.000 sessões de bot/mês</li>
                <li>WhatsApp Business</li>
                <li>Fluxos de trabalho temporais</li>
                <li>Registros de auditoria</li>
                <li>Gerente de contas</li>
            </ul>
            <button className="btn btn-primary btn-xl text-uppercase" type="button">
                Inscreva-se
            </button>
        </div>
    </section>
    )
}

export default PlansTypes