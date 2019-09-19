/** @format */

import React from 'react';
import RegisterModule from '../layouts/register/RegisterModule';
import { Container, Col, Row, Card } from 'reactstrap';

const AuthenticationPage = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col lg="6" md="8">
            <Card className="bg-secondary shadow border-0">
              <RegisterModule />
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AuthenticationPage;
