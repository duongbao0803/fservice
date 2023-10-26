import ListService from "../../components/dashboard/ListService";
import { Row, Col, Table, Card, CardTitle, CardBody } from "reactstrap";

const ServiceTable = () => {
  return (
    <Row>
      {/* --------------------------------------------------------------------------------*/}
      {/* table-1*/}
      {/* --------------------------------------------------------------------------------*/}
      <Col lg="12">
        <ListService />
      </Col>
      {/* --------------------------------------------------------------------------------*/}
      {/* table-2*/}
      {/* --------------------------------------------------------------------------------*/}
    </Row>
  );
};

export default ServiceTable;
