import React from 'react';
import { Badge, Card, CardHeader, Media, Table, Container, Row } from 'reactstrap';

import { Link } from 'react-router-dom';

import { IProps } from './types';

const CategoriesTable: React.FC<IProps> = (props) => {
  return (
    <Container className="mt--7" fluid>
      {/* Table */}
      <Row>
        <div className="col">
          <Card className="shadow">
            <CardHeader className="border-0">
              <h3 className="mb-0">Your categories</h3>
            </CardHeader>
            <Table className="align-items-center table-flush" responsive hover>
              <thead className="thead-light">
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Type</th>
                  <th scope="col">Transaction Numbers</th>
                </tr>
              </thead>
              <tbody>
                {/* Map category */}
                {props.categories.map((category) => (
                  <tr key={category.id}>
                    <th scope="row">
                      <Link to={`/user/categories${category.name}`}>
                        <Media className="align-items-center icon-badge">
                          <i className={`ni ni-${category.icon}`} />
                          <Media>
                            <span className="mb-0 text-sm">{category.name}</span>
                          </Media>
                        </Media>
                      </Link>
                    </th>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-warning" />
                        {category.type}
                      </Badge>
                    </td>
                    <td>2 transactions</td>
                  </tr>
                ))}
                {/* Map category ends*/}
              </tbody>
            </Table>
          </Card>
        </div>
      </Row>
    </Container>
  );
};
export default CategoriesTable;
