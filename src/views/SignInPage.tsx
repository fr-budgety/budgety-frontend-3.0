/** @format */

import React, { SFC } from 'react';
import { Container, Col, Row, Card } from 'reactstrap';
import CenteredBlankLayout from '../layouts/CenteredBlankLayout';
import LoginModule from '../components/authentication/login/LoginModule';

const SignInPage: SFC = () => {
  return (
    <CenteredBlankLayout>
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
    </CenteredBlankLayout>
  );
};

export default SignInPage;
