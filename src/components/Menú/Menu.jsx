import React from "react";
import { Navbar, Nav, Container, Card, Col, Button, Row, ListGroup} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import colibri from "../assets/contenido/colibri.png";
import bebidas from "../assets/bebidas/bebidas.js";
import entradas from "../assets/entradas/entradas.js";
import sopas from "../assets/sopas/sopas.js";
import postres from "../assets/postres/postres.js";
import platillos from "../assets/platillos/platillos.js";
import seccion from "../assets/contenido/seccion.png"
import style from "./menu.scss"


const Menú = () => {
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

            <section>
                <section className="men-sec">
                    <div>
                        <h1>Platillos</h1>
                        <img id="im-s" src={ seccion } alt="seccion" />
                    </div>
                </section>
                <div>
                <Row className="g-4">
                {
                    platillos.map((platillos, i) => {
                        return (
                            <Col key={i}>
                                <Card className="cards" key={i}>
                                    <Card.Img className="cardImg" src={platillos.img} />
                                    <Card.Body>
                                         <ListGroup  className="list">
                                            <Card.Header className="cardTitle" fs="10px"><h1>{platillos.Nombre}</h1></Card.Header>
                                            <ListGroup.Item className="cardText">{platillos.Tamaño}</ListGroup.Item>
                                        <Link to={`/${platillos.id}`}>
                                            <Button src={platillos.id} className="boton" variant="utline-primaory" size="sm" >Detalles</Button>
                                            <Button as={ Link } to={"/Delibery"} className="boton" variant="utline-primaory" size="sm" >Delibery</Button>
                                        </Link>
                                        </ListGroup>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })
                }
                 </Row>   
                </div>
            </section>

            <section>
                <section className="men-sec">
                    <div>
                        <h1>Sopas</h1>
                        <img id="im-s" src={ seccion } alt="seccion" />
                    </div>
                </section>
                <div>
                <Row className="g-4">
                {
                    sopas.map((sopas, i) => {
                        return (
                            <Col key={i}>
                                <Card className="cards" key={i}>
                                    <Card.Img className="cardImg" src={sopas.img} />
                                    <Card.Body>
                                         <ListGroup className="list" >
                                            <Card.Header className="cardTitle"><h1>{sopas.Nombre}</h1></Card.Header>
                                            <ListGroup.Item className="cardText">{sopas.Tamaño}</ListGroup.Item>
                                        <Link to={`/${sopas.id}`}>
                                            <Button className="boton" variant="utline-primaory" size="sm" >Detalles</Button>
                                            <Button as={ Link } to={"/Delibery"} className="boton" variant="utline-primaory" size="sm" >Delibery</Button>
                                        </Link>
                                        </ListGroup>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })
                }
                 </Row>   
                </div>
            </section>

            <section>
                <section className="men-sec">
                    <div>
                        <h1>Entradas</h1>
                        <img id="im-s" src={ seccion } alt="seccion" />
                    </div>
                </section>
                <div>
                <Row className="g-4">
                {
                    entradas.map((entradas, i) => {
                        return (
                            <Col key={i}>
                                <Card className="cards" key={i}>
                                    <Card.Img className="cardImg" src={entradas.img} />
                                    <Card.Body>
                                         <ListGroup className="list">
                                            <Card.Header className="cardTitle"><h1>{entradas.Nombre}</h1></Card.Header>
                                            <ListGroup.Item className="cardText">{entradas.Tamaño}</ListGroup.Item>
                                        <Link to={`/${entradas.id}`}>
                                            <Button className="boton" variant="utline-primaory" size="sm" >Detalles</Button>
                                            <Button as={ Link } to={"/Delibery"} className="boton" variant="utline-primaory" size="sm" >Delibery</Button>
                                        </Link>
                                        </ListGroup>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })
                }
                 </Row>   
                </div>
            </section>

            <section>
                <section className="men-sec">
                    <div>
                        <h1>Postres</h1>
                        <img id="im-s" src={ seccion } alt="seccion" />
                    </div>
                </section>
                <div>
                <Row className="g-4">
                {
                    postres.map((postres, i) => {
                        return (
                            <Col key={i}>
                                <Card className="cards" key={i}>
                                    <Card.Img className="cardImg" src={postres.img} />
                                    <Card.Body>
                                         <ListGroup className="list">
                                            <Card.Header className="cardTitle"><h1>{postres.Nombre}</h1></Card.Header>
                                            <ListGroup.Item className="cardText">{postres.Tamaño}</ListGroup.Item>
                                        <Link to={`/${postres.id}`}>
                                            <Button className="boton" variant="utline-primaory" size="sm" >Detalles</Button>
                                            <Button as={ Link } to={"/Delibery"} className="boton" variant="utline-primaory" size="sm" >Delibery</Button>
                                        </Link>
                                        </ListGroup>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })
                }
                 </Row>   
                </div>
            </section>

            <section>
                <section className="men-sec">
                    <div>
                        <h1>Bebidas</h1>
                        <img id="im-s" src={ seccion } alt="seccion" />
                    </div>
                </section>
                <div>
                <Row className="g-4">
                {
                    bebidas.map((bebidas, i) => {
                        return (
                            <Col key={i}>
                                <Card className="cards" key={i}>
                                    <Card.Img className="cardImg" src={bebidas.img} />
                                    <Card.Body>
                                         <ListGroup className="list">
                                            <Card.Header className="cardTitle"><h1>{bebidas.Nombre}</h1></Card.Header>
                                            <ListGroup.Item className="cardText">{bebidas.Tamaño}</ListGroup.Item>
                                        <Link to={`/${bebidas.id}`}>
                                            <Button className="boton" variant="utline-primaory" size="sm" >Detalles</Button>
                                            <Button as={ Link } to={"/Delibery"} className="boton" variant="utline-primaory" size="sm" >Delibery</Button>
                                        </Link>
                                        </ListGroup>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })
                }
                 </Row>   
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

export default Menú;