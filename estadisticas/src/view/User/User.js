import { Container, Row, Col, Card, Modal} from "react-bootstrap";
import * as FaIcons from 'react-icons/fa';
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";


const User = () => {

    const baseUrl="http://localhost/Backend2/index.php?c=roles&a=ver";
    const baseUrl2="http://localhost/Backend2/index.php?c=personas&a=ver";
    const baseUrl3="http://localhost/Backend2/index.php?c=usuarios&a=guardar";
    const [data,setData]=useState([]);
    const [datapersonas,setDataPersonas]=useState([]);
    const [dataroles,setDataRoles]=useState([]);
    const [selected, setSelected]=useState({
        usuario: '',
        idpersona: '',
        idrol: '',
        correo: '',
        password: '',
        guardar: ''
    });
   
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    /*const registerUser=async()=>[
        await axios.post(baseUrl)
        .then(response=>{
            setData(response.data);
        })
    ]*/


    const getRol=async()=>[
        await axios.get(baseUrl)
        .then(response=>{
            setDataRoles(response.data);
            console.log(response.data)
        })
    ]

    const getPersonas=async()=>[
        await axios.get(baseUrl2)
        .then(response=>{
            setDataPersonas(response.data);
            console.log(response.data)
        })
    ]

    const registrarUsuarios=async()=>{
        var f = new FormData();
        f.append("usuario", selected.usuario);
        f.append("password", selected.password);
        f.append("idpersona", selected.idpersona);
        f.append("rol", selected.idrol);
        f.append("correo_primario", selected.correo);
        f.append("guardar", "");
        await axios.post(baseUrl3)
        .then(response=>{
            setData(response.data);
        })
    }

    useEffect(()=>{
        getRol();
        getPersonas();
    },[])






    return(
        <>
            <Header/>
            <div className="flex">
                
                <Sidebar/>
                <Container>
                    <Row className="mt-5">
                        <Col md="6">
                            <Card className="Card-color" >
                                <Card.Body>
                                    <div className="text-center">
                                        <Card.Title className="text-center Card-title-text">Registrar Usuarios</Card.Title>  
                                    </div>
                                    <div className="text-center mt-3">
                                    
                                        <button className="btn btn-success" onClick={handleShow} >
                                        <FaIcons.FaUserPlus className="display-1"></FaIcons.FaUserPlus>
                                        </button>

                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md="6">
                            <Card className="Card-color" >
                                <Card.Body>
                                    <div className="text-center">
                                        <Card.Title className="text-center Card-title-text">Lista de Usuarios</Card.Title>  
                                    </div>
                                    <div className="text-center mt-3">
                                        <Link className="btn btn-primary" to="/UserList" >
                                        <FaIcons.FaUsers className="display-1"></FaIcons.FaUsers>
                                        </Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col md="6">
                            <Card className="Card-color" >
                                <Card.Body>
                                    <div className="text-center">
                                        <Card.Title className="text-center Card-title-text">Permisos de Usuarios</Card.Title>  
                                    </div>
                                    <div className="text-center mt-3">
                                        <a href="#" className="btn btn-danger">
                                        <FaIcons.FaUserCog className="display-1"></FaIcons.FaUserCog>
                                        </a>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md="6">
                            <Card className="Card-color" >
                                <Card.Body>
                                    <div className="text-center">
                                        <Card.Title className="text-center Card-title-text">Log de Usuarios</Card.Title>  
                                    </div>
                                    <div className="text-center mt-3">
                                        <a href="#" className="btn btn-secondary">
                                        <FaIcons.FaUserCheck className="display-1"></FaIcons.FaUserCheck>
                                        </a>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                   
                    
                </Container>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header className="text-center display-6">Registrar Usuarios</Modal.Header>
                    <Modal.Body>
                        <div className="form-group">
                            <label>Nombre de Usuario:</label><br/>
                            <input id="user" name="user" type="text" className="form-control"/>
                            <label>Nombre:</label><br/>
                            <select id="idpersona" name="idpersona" className="form-control">
                                <option value={0}></option>
                                {datapersonas.map(persona=>(
                                    <option key={persona.id} value={persona.id}>{persona.nombre}</option>
                                ))}
                            </select>
                            <label>Rol:</label><br/>
                            <select id="idrol" name="idrol" className="form-control">
                                <option value={0}></option>
                                {dataroles.map(roles=>(
                                    <option key={roles.id} value={roles.id}>{roles.rol}</option>
                                ))}
                            </select>
                            <label>Contrasena:</label><br/>
                            <input id="pass1" name="pass1" type="password" className="form-control"/>
                            <label>Repetir Contrasena:</label><br/>
                            <input id="pass2" name="pass2" type="password" className="form-control"/>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button id="guardar" name="guardar" className="btn btn-primary" onClick={registrarUsuarios}>Registrar</button>
                        <button className="btn btn-danger" onClick={handleClose}>Cancelar</button>
                    </Modal.Footer>
                </Modal>
            </div>
            <Footer/>
        </>
    );
}


export default User;