import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import style from "../style/style.scss";
import colibri from "../assets/contenido/colibri.png";
import portada from "../assets/contenido/portada.png";


const Inicio = () => {

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
            <section>
                <div>
                    <main className="Content">
                        <section className="portada">
                        <div>
                        <div className="text-cont-portada">
                            <h1 className="text-cont">Comida Tradicional Mexicana</h1>
                                <p className="text-cont-p">"La comida es nuestro arte"</p>
                        </div>
                        </div>
                        </section>
                    </main>
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

export default Inicio;