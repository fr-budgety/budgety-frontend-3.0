/** @format */

import React, { SFC } from 'react';
import { Container, Col, Row, Card } from 'reactstrap';
import LoginModule from '../components/authentication/login/LoginModule';
import AuthenticationLayout from '../layouts/AuthenticationLayout';

const SignInPage: SFC = () => {
  return (
    <AuthenticationLayout>
      <div className="SignInPage">
        <Container>
          <Row className="justify-content-center">
            <Col lg="6" md="8">
              <Card className="bg-secondary shadow border-0">
                <LoginModule />
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </AuthenticationLayout>
  );
};

export default SignInPage;
