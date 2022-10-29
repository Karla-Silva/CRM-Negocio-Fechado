import React from "react"
import '../styles/index.css'
import '../styles/plans.css'
import free from '../assets/img/plans/free.jpg'
import plus from '../assets/img/plans/plus.jpg'
import premium from '../assets/img/plans/premium.jpg'

const Plans = () => {
    return(
        <section className="page-section bg-light" id="plans">
        <div styles="background-color: #f6f5f5; padding: 5rem 0;">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Planos</h2>
                    <h3 className="section-subheading text-muted">Escolha as ferramentas que melhor atendem a sua necessidade</h3>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-sm-6 mb-4">
                        <div className="plans-item">
                            <a className="plans-link" href="plans">
                                <div className="plans-hover">
                                    <div className="plans-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={free} alt="..." />
                            </a>
                            <div className="plans-caption">
                                <div className="plans-caption-heading">Free</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4">
                        <div className="plans-item">
                            <a className="plans-link" href="plans">
                                <div className="plans-hover">
                                    <div className="plans-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={plus} alt="..." />
                            </a>
                            <div className="plans-caption">
                                <div className="plans-caption-heading">Plus</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4">
                        <div className="plans-item">
                            <a className="plans-link" href="plans">
                                <div className="plans-hover">
                                    <div className="plans-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={premium} alt="..." />
                            </a>
                            <div className="plans-caption">
                                <div className="plans-caption-heading">Premium</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Plans