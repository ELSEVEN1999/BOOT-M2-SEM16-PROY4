import React, { Fragment, useState } from "react";
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import style from "./Bolsa.scss";
import colibri from "../assets/contenido/colibri.png";

const Bolsa = () => {

    const [datos, setDatos] = useState({
        nombre: '',
        apellido: '',
        telefono: '',
        comentario: '',
        }
        )
     const handleInputChange = (event) => {
         setDatos({
             ...datos,
             [event.target.name] : event.target.value
         })
     }  
     
     const enviarDatos = (event) => {
         event.preventDefault();
         console.log(datos.nombre + '' + datos.apellido + '' + datos.numero + '' + datos.comentario)
     }



    return (
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

            <section>
                <div className="encabezado">
                    <h1 className="textTitle">Manda tus datos y nos contactaremos contigo, queremos conocerte</h1>
                </div>
            </section>

            <section className="agendar">
            <div className="agen-t">
                <h1>Agenda tu visita, la comida es nuestro arte</h1>
            </div>
            <Fragment>
            <div className="container mt-5">
                <form className="row" onSubmit={enviarDatos}>
                    <div className="col-md-5">
                    <input type="text" 
                    placeholder="Nombre"
                    className="form-control"
                    name="nombre"
                    onChange={handleInputChange}

                    />
                    </div>
                    <div className="col-md-5">
                    <input type="text" 
                    placeholder="Apellido"
                    className="form-control"
                    name="apellido"
                    onChange={handleInputChange}
                    />
                    </div>
                    <div className="col-md-5">
                    <input type="number" 
                    placeholder="Telefono"
                    className="form-control"
                    name="telefono"
                    onChange={handleInputChange}
                    />
                    </div>

                    <div className="col-md-5">
                    <input type="textarea" 
                    placeholder="Agrega en un comentario breve tus actitudes y habilidades"
                    className="form-control"
                    name="comentario"
                    onChange={handleInputChange}
                    />
                    </div>

                    <div className="col-md-5">
                    <button type="submit" className="btn">Enviar</button>
                    </div>
                </form>
                </div>
        </Fragment>
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

export default Bolsa;