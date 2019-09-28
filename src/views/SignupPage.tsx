/** @format */

import React, { SFC } from 'react';
import RegisterModule from '../components/authentication/register/RegisterModule';
import { Container, Col, Row, Card } from 'reactstrap';
import CenteredBlankLayout from '../layouts/CenteredBlankLayout';

const SignUpPage: SFC = () => {
  return (
    <CenteredBlankLayout>
      <div className="SignUpPage">
        <Container>
          <Row className="justify-content-center">
            <Col lg="6" md="8">
              <Card className="bg-secondary shadow border-0">
                <RegisterModule />
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </CenteredBlankLayout>
  );
};

export default SignUpPage;
