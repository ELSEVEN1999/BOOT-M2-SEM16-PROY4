import React from "react";
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import style from "../style/style.scss";
import colibri from "../assets/contenido/colibri.png";
import portada from "../assets/contenido/portada.png";
import bienvenido from "../assets/contenido/bienvenido.png";
import entregas from "../assets/contenido/entregas.png";
import bienvenidos from "../assets/contenido/bienvenido.png";
import menu from "../assets/contenido/Menu.png";
import promo from "../assets/contenido/promocion.png";



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
                        
                        <section className="bienvenidos">
                            <div>
                                    <div className="text-b">
                                        <h1>Bienvenidos</h1>
                                            <p >Agradecemos tu preferencia, te invitamos a degustar nuestra comida tradiconal Mexicana, platillos hechos con amor, con recetas originales y productos de la mas alta calidad</p>
                                            <p>Conoce más sobre el proyecto Taiyari tradicional, y forma parte de nuestro equipo</p>
                                                <Button className="btn" variant="utline-primaory" size="lg" as={ Link } to="/Nosotros">!Haz click¡</Button>
                                    </div>
                            </div>
                        </section>

                        <section className="ubicacion">
                                    <div className="t-ub">
                                        <h1>Servicio al comensal</h1>
                                            <p >Conoce nuestras instalaciones sanitizadas y con todas las medidas de bioseguridad necesarias para brindarte el mejor servicio</p>
                                            <Button className="btn" variant="utline-primaory" size="sm" href="https://www.google.com.mx/maps/search/restaurantes+mexicanos+/@19.3586241,-98.9797575,15z/data=!3m1!4b1?hl=es-419">Ubicacion</Button>
                                            <Button className="btn" variant="utline-primaory" size="sm" as={ Link } to="/Reservar">Reservar</Button>
                                    </div>
                        </section>

                        <section className="art-m">
                            <div>
                                <div id="im-m">
                                    <img src={ menu } alt="menu" />
                                </div>
                                <div className="tx-m">
                                    <h1 className="text-m">Conoce nuestro menú</h1>
                                    <Button className="btn_2" variant="utline-primaory" as={ Link } to="/Menu" >!Aqui¡</Button>
                                </div>
                            </div>
                        </section>

                        <section className="promo">
                                <div>
                                    <img id="promo" src={ promo } alt="promo" />
                                </div>
                                <div className="text-promo">
                                        <h1>Menú del dia</h1>
                                            <p>En la compra de un platillo llevate sopa, agua y postre del día por $80 más</p>
                                            <Button className="btn_3" variant="utline-primaory" size="lg"  as= { Link } to="/Delibery">Promo</Button>
                                </div>
                                
                        </section>

                        <section className="domicilio">
                                <div className="dom-m">    
                                    <img id="moto" src={entregas} alt="entregas" />
                                </div>

                                <div className="text-d">
                                    <h1 >¡Haz tu pedido!</h1>
                                        <p >Llena tu registro y realiza tu orden desde nuestra sección Delibery ¡Es muy fácil!</p>
                                        <Button className="btn_4" variant="utline-primaory"  as= { Link } to="/Delibery">Delibery</Button>
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