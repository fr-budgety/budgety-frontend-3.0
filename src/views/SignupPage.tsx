/** @format */

import React, { SFC } from 'react';
import RegisterModule from '../components/authentication/register/RegisterModule';
import { Container, Col, Row, Card } from 'reactstrap';
import AuthenticationLayout from '../layouts/AuthenticationLayout';

const SignUpPage: SFC = () => {
  return (
    <AuthenticationLayout>
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
    </AuthenticationLayout>
  );
};

export default SignUpPage;
