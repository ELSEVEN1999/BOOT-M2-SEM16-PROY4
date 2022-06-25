import React, { useState, Fragment } from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import colibri from "../assets/contenido/colibri.png";
import style from "./Delivery.scss";

const Delivery = () => {


    return(
        <div>
            <Navbar className="header">
                <Container className="container">
                    <Navbar.Brand id="brand" href="/">Taiyari "Hecho con el corazón"</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link className="a" as={Link} to="/Inicio">Inicio</Nav.Link>
                        <Nav.Link className="a" as={Link} to="/Menu">Menú</Nav.Link>
                        <Nav.Link className="a" as={Link} to="/Nosotros">Nosotros</Nav.Link>
                        <Nav.Link className="a" as={Link} to="/Delivery">Delivery</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Fragment>
                <div className="port-pedido">
                    <h1>!Haz tu pedido¡</h1>
                    <p>Llena nuestro formulario y en breve te enviaremos el numero de pedido</p>
                </div>
                <form className="row m-5">
                    <div className="col-md-3">
                        <input
                        placeholder="Nombre"
                        className="form-control"
                        ></input>
                    </div>
                    <div className="col-md-3">
                        <input
                        placeholder="Apellido"
                        className="form-control"
                        ></input>
                    </div>
                    <div className="col-md-3">
                        <input
                        placeholder="Direccion"
                        className="form-control"
                        ></input>
                    </div>
                    <div className="col-md-3">
                        <input
                        placeholder="Telefono"
                        className="form-control"
                        ></input>
                    </div>
                    <div className="col-md-3">
                        <button className="btn" variant="utline-primaory" size="sm">enviar</button>
                    </div>
                </form>
                </Fragment>  
                
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

export default Delivery ;