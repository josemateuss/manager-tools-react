import React from 'react';

const Footer = () => {
    return (
        <footer className="page-footer light-green darken-4">
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <h5 className="white-text">José Mateus</h5>
                        <p className="grey-text text-lighten-4">Desenvolvedor Web com bacharel em Ciência da Computação pelo UniCEUB. Interessado em novos desafios profissionais e disposto a aprender novas tecnologias.</p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                        <h5 className="white-text">Links</h5>
                        <ul>
                            <li><a className="grey-text text-lighten-3" href="https://github.com/josemateuss" target="_blank">GitHub</a></li>
                            <li><a className="grey-text text-lighten-3" href="https://www.linkedin.com/in/josé-mateus-937560106/" target="_blank">Linkedin</a></li>
                            <li><a className="grey-text text-lighten-3" href="https://www.instagram.com/josemateus95/" target="_blank">Instagram</a></li>
                            <li><a className="grey-text text-lighten-3" href="https://dgtalhero.es/" target="_blank">Digital Heroes</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    © 2020 Copyright Text
            {/* <a className="grey-text text-lighten-4 right" href="/">More Links</a> */}
                </div>
            </div>
        </footer>
    )
};

export default Footer;
