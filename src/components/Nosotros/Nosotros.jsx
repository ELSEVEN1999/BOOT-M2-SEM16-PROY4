import React from "react";
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import colibri from "../assets/contenido/colibri.png";
import style from "../Nosotros/Nosotros.scss";
import equipo from "../assets/contenido/equipo.png";

const Nosotros = () => {

    return(
        <div>
            <Navbar className="header">
                <Container className="container">
                    <Navbar.Brand id="brand" href="/">Taiyari "Hecho con el corazón"</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link className="a" as={Link} to="/Inicio">Inicio</Nav.Link>
                        <Nav.Link className="a" as={Link} to="/Menu">Menú</Nav.Link>
                        <Nav.Link className="a" as={Link} to="/Nosotros">Nosotros</Nav.Link>
                        <Nav.Link className="a" as={Link} to="/Delibery">Delibery</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <section className="ntros">
                <div className="ntros-tx">
                    <h1 >Taiyari Tradicional</h1>
                    <p>Somos un proyecto de emprendimeinto con responsabilidad social que busca preservar la cultura gastrónomica tradicional en México.</p>
                    <p>Ofrecemos productos de la más alta calidad 100% Mexicanos, promoviendo el consumo nacional.</p>
                </div>
            </section>

            <section className="ubicacion">
                    <div className="t-ub">
                        <h1>Servicio al comensal</h1>
                        <p >Conoce nuestras instalaciones sanitizadas y con todas las medidas de bioseguridad necesarias para brindarte el mejor servicio</p>
                        <Button className="btn" variant="utline-primaory" size="sm" href="https://www.google.com.mx/maps/search/restaurantes+mexicanos+/@19.3586241,-98.9797575,15z/data=!3m1!4b1?hl=es-419">Ubicacion</Button>
                         </div>
            </section>

            <section className="equipo">
                <div className="equi-text">
                    <h1>Forma parte</h1>
                    <p>Súmate al proyecto, llena el formulario y cuentanos tus habilidades y destresas que pueden hacer crecer a nuestra familia.</p>
                    <Button className="btn" variant="utline-primaory" size="lg" as={ Link } to="/Bolsa">!Haz click¡</Button>
                </div>
                <div>
                    <img id="equi" src={ equipo } alt="" />
                </div>
            </section>

            <section>
                <div>
                    <footer className="footer">
                        <div className="footer-grid ">
                            <div  id="grid-item-01 " >
                                <h1 className="footer_h1 ">Taiyari</h1> 
                                <p className="footer-p1">Comida Mexicana</p>
                                <img className="colibri"
                                    src={ colibri }
                                />
                            </div>
                            <div id="grid-item-02 ">
                                <label className="footer_label">Contacto</label>
                                <p class="footerP ">Email: isael1601@gmail.com</p>
                                <p class="footerP ">Cel. 5535225610</p>
                            </div>
                                
                            <div className="grid-item-04 ">
                                    <p><label class="footer_label ">Redes Sociales</label></p>
                                    <a id="redes" href="https://github.com/UCamp-fullstack-Equipo07/BOOT-M2-SEM13-PROY3.git " class="fa fa-lg fa-github fa-3x "></a>
                                    <a id="redes" href="https://github.com/UCamp-fullstack-Equipo07/BOOT-M2-SEM13-PROY3.git " class="fa fa-lg fa-twitter "></a>
                                    <a id="redes" href="https://github.com/UCamp-fullstack-Equipo07/BOOT-M2-SEM13-PROY3.git " class="fa fa-lg fa-facebook "></a>
                                    <a id="redes" href="https://github.com/UCamp-fullstack-Equipo07/BOOT-M2-SEM13-PROY3.git " class="fa fa-lg fa-instagram "></a>
                            </div>
                        </div>
                    </footer>
                </div>
            </section>
        </div>
    )
};

export default Nosotros;