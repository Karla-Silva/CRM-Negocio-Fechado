import React from "react"
import "../styles/index.css"

const Services = () => {
    return(
        <section className="page-section">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Por que escolher o Negócio Fechado?</h2>
                    <h3 className="section-subheading text-muted">Descubra os melhores leads, contacte seus clientes, feche negócios e muito mais em uma plataforma inteligente e de fácil acesso</h3>
                </div>
                <div className="row text-center">
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">Gerencie seu pipeline</h4>
                        <p className="text-muted" styles="text-align:justify;">Obtenha uma visão atualizada de todo o seu funil de vendas em um painel limpo e visual. Você pode classificar negócios ganhos e perdidos, compromissos agendados, contratos enviados e acompanhar o desempenho em relação às cotas definidas em uma visualização simples.</p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-laptop fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">Acesse fácil aos leads</h4>
                        <p className="text-muted" styles="text-align:justify;">Vá muito além de nomes e cargos. Cada interação com um lead é armazenada em uma linha do tempo organizada, incluindo chamadas, e-mails, reuniões e notas. Você nunca precisará vasculhar uma caixa de entrada ou planilha bagunçada para descobrir onde um atendimento parou.</p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-lock fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">Auto-registro de dados</h4>
                        <p className="text-muted" styles="text-align:justify;">O CRM Negócio Fechado rastreia as interações do cliente automaticamente – seja por e-mail, nas mídias sociais ou em uma chamada. Sincronize com o Gmail ou Outlook e capture todas as chamadas, e-mails ou reuniões à medida que acontecem. com a certeza que todos os seus registros estão bem guardados.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services