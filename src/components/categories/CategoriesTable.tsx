import React from 'react';
import { Badge, Card, CardHeader, Media, Table, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

const CategoriesTable: React.FC = () => {
  return (
    <Container className="mt--7" fluid>
      {/* Table */}
      <Row>
        <div className="col">
          <Card className="shadow">
            <CardHeader className="border-0">
              <h3 className="mb-0">Your categories</h3>
            </CardHeader>
            <Table className="align-items-center table-flush" responsive>
              <thead className="thead-light">
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Type</th>
                  <th scope="col">Transaction Numbers</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <Link to="/user/categories/category-name">
                      <Media className="align-items-center">
                        <img
                          alt="..."
                          src={require('assets/img/theme/bootstrap.jpg')}
                          className="avatar rounded-circle mr-3"
                        />
                        <Media>
                          <span className="mb-0 text-sm">Argon Design System</span>
                        </Media>
                      </Media>
                    </Link>
                  </th>
                  <td>
                    <Badge color="" className="badge-dot mr-4">
                      <i className="bg-warning" />
                      Expense
                    </Badge>
                  </td>
                  <td>2 transactions</td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </div>
      </Row>
    </Container>
  );
};

export default CategoriesTable;
