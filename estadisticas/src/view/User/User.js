import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";

//import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { Container, Row, Col, Card, Modal } from "react-bootstrap";
import * as FaIcons from 'react-icons/fa';

const User = () => {
	const { register, handleSubmit } = useForm();

	const baseUrl = "http://localhost/Backend2/index.php?c=roles&a=ver";
	const baseUrl2 = "http://localhost/Backend2/index.php?c=personas&a=ver";
	const baseUrl3 = "http://localhost/Backend2/index.php?c=usuarios&a=guardar";
	const [data, setData] = useState([]);
	const [datapersonas, setDataPersonas] = useState([]);
	const [dataroles, setDataRoles] = useState([]);
	// const [selected, setSelected] = useState({
	// 	usuario: '',
	// 	idpersona: '',
	// 	idrol: '',
	// 	password: ''
	// });

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);


	/*const registerUser=async()=>[
			await axios.post(baseUrl)
			.then(response=>{
					setData(response.data);
			})
	]*/


	const getRol = async () => [
		await axios.get(baseUrl)
			.then(response => {
				setDataRoles(response.data);
			})
	]

	const getPersonas = async () => [
		await axios.get(baseUrl2)
			.then(response => {
				setDataPersonas(response.data);
				//console.log(response.data)
			})
	]

	const registrarUsuarios = async data => {
		var f = new FormData();
		f.append("usuario", data.usuario);
		f.append("password", data.password);
		f.append("idpersona", data.idpersona);
		f.append("rol", data.idrol);

		console.log("usuario ==>", data.usuario);
		console.log("selected.password ==>", data.password);
		console.log("selected.idpersona ==>", data.idpersona);
		console.log("selected.idrol ==>", data.idrol);

		await axios.post(baseUrl3, f)
			.then(response => {
				setData(response.data);
				console.log(response.data);
			})
			.catch(error => console.log("Error = ", error))
	}

	useEffect(() => {
		getRol();
		getPersonas();
	}, [])

	return (
		<>
			<Header />
			<div className="flex">
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
						<Col md="12">
							<Card className="Card-color" >
								<Card.Body>
									<div className="text-center">
										<Card.Title className="text-center Card-title-text">Permisos de Usuarios</Card.Title>
									</div>
									<div className="text-center mt-3">
										<Link className="btn btn-danger" to="/PermisologyUser">
											<FaIcons.FaUserCog className="display-1"></FaIcons.FaUserCog>
										</Link>
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
							<label>Nombre de Usuario:</label><br />
							<input id="usuario" name="usuario" type="text" className="form-control" {...register("usuario")} />
							<label>Nombre:</label><br />
							{datapersonas && <select id="idpersona" name="idpersona" className="form-control" {...register("idpersona")}>
								<option value={0}></option>
								{datapersonas.map((persona, index) => (
									<option key={index} value={persona.id}>{persona.primerNombre + ' ' + persona.segundoNombre + ' ' + persona.primerApellido + ' ' + persona.segundoApellido}</option>
								))}
							</select>}
							<label>Rol:</label><br />
							{dataroles && <select id="idrol" name="idrol" className="form-control" {...register("idrol")}>
								<option value={0}></option>
								{dataroles.map((roles, index) => (
									<option key={index} value={roles.idrol}>{roles.rol}</option>
								))}
							</select>}
							<label>Contrasena:</label><br />
							<input id="password" name="password" type="password" className="form-control" {...register("password")} />
							<label>Repetir Contrasena:</label><br />
							<input id="pass2" name="pass2" type="password" className="form-control" />
						</div>

					</Modal.Body>
					<Modal.Footer>
						<button id="guardar" name="guardar" className="btn btn-primary" onClick={handleSubmit(registrarUsuarios)}>Registrar</button>
						<button className="btn btn-danger" onClick={handleClose}>Cancelar</button>
					</Modal.Footer>
				</Modal>
			</div>
			<Footer />
		</>
	);
}


export default User;