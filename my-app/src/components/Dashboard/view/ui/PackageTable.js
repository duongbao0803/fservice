import ListPackge from "../../components/dashboard/ListPackage";
import { Row, Col, Table, Card, CardTitle, CardBody } from "reactstrap";

const PackageTable = () => {
  return (
    <Row>
      <Col lg="12">
        <ListPackge />
      </Col>
    </Row>
  );
};

export default PackageTable;
