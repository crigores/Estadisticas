import { Container, Row, Col } from "react-bootstrap";

import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import DoughnutChart from "../../components/DoughnutChart";

const Report = () => {
    return(
        <>
            <Header/>
            <div className="flex">
                <Sidebar/>
                <Container>
                    <Row className="mt-5">
                        <Col xl="2" md="3" sm="2"></Col>
                        <Col xl="8" md="6" sm="8">
                            <form>
                                <select className="form-control">
                                    <option value={0}>Seleccione una opcion</option>
                                </select>
                            </form>
                            <DoughnutChart/>
                        </Col>
                    </Row>
                </Container> 
            </div>
            <Footer/>
        </>
    );
}


export default Report;