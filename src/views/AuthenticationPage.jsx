/** @format */

import React from 'react';
import RegisterModule from '../components/register/RegisterModule';
import { Container, Col, Row, Card } from 'reactstrap';
import CenteredBlankLayout from '../layouts/CenteredBlankLayout';

class AuthenticationPage extends React.Component {
  componentDidMount() {
    document.body.classList.add('bg-default');
  }
  componentWillUnmount() {
    document.body.classList.remove('bg-default');
  }
  render() {
    return (
      <CenteredBlankLayout>
        <div className="AuthenticationPage">
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
  }
}

export default AuthenticationPage;
