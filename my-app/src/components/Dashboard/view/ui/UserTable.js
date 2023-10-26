import ListUser from "../../components/dashboard/ListUser";
import { Row, Col, Table, Card, CardTitle, CardBody } from "reactstrap";

const UserTables = () => {
  return (
    <Row>
      <Col lg="12">
        <ListUser />
      </Col>
    </Row>
  );
};

export default UserTables;
