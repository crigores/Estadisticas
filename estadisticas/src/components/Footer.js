import React from "react";
import { Row, Col} from "react-bootstrap";










export default function Footer(){
    return(
        <>
            <div className="footer">
                <Row className="pt-3">
                    <Col md={12} lg={4} className= "footerleft text-center">
                        <img alt="Logo" className="img-footer mt-4" width={200} height={200} src="https://previews.123rf.com/images/danilzorin/danilzorin1803/danilzorin180300141/97068517-tienda-online-logo-de-la-tienda-online-logotipo-para-empresas-ilustraci%C3%B3n-vectorial-aislado.jpg"></img>
                    </Col>

                    <Col md={12} lg={4} className= "footermid">
                        <h3>Contact Info</h3>
                        <hr></hr>

                        <p>Email:
                        </p>
                        <span>soporte@tiendaonline.com</span>
                    </Col>

                    <Col md={12} lg={4} className= "footerright">
                        <h3> Follow Us</h3>
                        <hr></hr>
                        

                        <a href="https://es-la.facebook.com/" target="_blank"><img width={50} height={50} className='img-social' src="https://thumbs.dreamstime.com/b/icono-del-logotipo-de-facebook-en-blanco-y-negro-alta-resoluci%C3%B3n-con-fondo-archivo-pasos-vectoriales-disponible-para-descarga-175771686.jpg" alt="Facebook Logo"/></a>
                        <a href="https://www.instagram.com/" target="_blank"><img width={50} height={50} className='img-social' src="https://us.123rf.com/450wm/alsstocks450/alsstocks4501911/alsstocks450191100137/136346965-voronezh-rusia-21-de-noviembre-de-2019-icono-redondo-del-logotipo-de-instagram-en-color-negro.jpg?ver=6" alt="Instagram Logo"></img></a>
                    </Col>
                </Row>

                <div className="copyright text-center">
                    <hr></hr>
                    <p>
                        Copyright © 2022
                        <br/>
                        All Rights Reserved
                    </p>
                </div>
            </div>
        </>
    )
}