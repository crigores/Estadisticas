import React, { useContext, useState } from "react";
import { Container, Row, Col, Card, Button, Spinner} from "react-bootstrap";
import {makeLoginData} from './../../api/request';
import {AuthContext} from './../../context/AuthContext';


export default function Login(){

    const [loader, setLoader] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {signIn} = useContext(AuthContext);

    const makeRequest = async () => {
        setLoader(true);

        if(email === ""){
            alert("El campo email no puede estar vacio");
        }else if(password === ""){
            alert("El campo contrasena no puede estar vacio")
        }else{
            console.log(email, password)
            const  jsn = {
                'email': email,
                'pass': password
            }

            const res = await makeLoginData(jsn);
            console.log(res);
            signIn(res);

            window.localStorage.setItem("token",res)

        }



        setLoader(false);
    }

    return(
        <Container >
            <Row className="justify-content-center align-items-center minh-80" >
                
                <Col  lg="8" md="10" sm="10" xs="10">
                    <Card className="justify-content-center align-items-center rounded-card bg-dark">
                        <Card.Body className="">
                            <Card.Title className="mt-3 display-6 text-center">Inicio de Sesion</Card.Title>
                            
                            <label className="align-left" >Correo:</label>
                            <input type="text" className="form-control" 
                            value={email}
                            onChange={(val) => setEmail(val.target.value)}
                            />
                            <label className="align-left" >Contraseña:</label>
                            <input className="form-control" 
                            type="password" 
                            value={password}
                            onChange={(val) => setPassword(val.target.value)}
                            />
                            <Container className="text-center">
                                {
                                    (loader) ? <>
                                        <div className="text-center mt-2">
                                            <Spinner animation="grow" variant="danger"></Spinner>
                                        </div>
                                    </> : <>
                                        <Button onClick={ () => makeRequest()} className="btn btn-success mt-3">Iniciar Sesion</Button><br></br>
                                        <Row> 
                                            <span>Si no posee una cuenta, puede registrarse aqui <a href="/Register">ahora</a></span>
                                        </Row>
                                    </>
                                }
                                
                                
                            </Container>

                        </Card.Body>
                    </Card>
                
                
                </Col>
            </Row>
        </Container>
    )
}