import React from 'react'
import { Container, Row, Col, Card,Form, Button } from 'react-bootstrap'
import GitIcon from '../../Images/github.svg'
import GoogleIcon from '../../Images/google.svg'

export default function LoginForm() {
  return (
    <>
    <div className='formSection'>
    <Container  className="mt--8 pb-5 ">
  <Row className="justify-content-center customBody">
    <Col md={7} lg={5}>
        <Card className=' border-0 cardMain'>
    <Card.Header className='pb-5'>
  <div className="text-muted text-center mt-2 mb-3"><small>Sign in with</small></div>
  <div className="btn-wrapper text-center">
      <a href="#pablo" className="btn-neutral btn-icon btn btn-default">
          <span className="btn-inner--icon">
      <img alt="..." src={GitIcon} />
      </span>
      <span className="btn-inner--text">Github</span></a>
      <a href="#pablo" className="btn-neutral btn-icon btn btn-default">
          <span className="btn-inner--icon">
              <img alt="..." src={GoogleIcon} /></span>
              <span className="btn-inner--text">Google</span></a>
      </div>

    </Card.Header>

      <Card className="formArea shadow border-0">
      <div class="text-center text-muted mb-4"><small>Or sign in with credentials</small></div>
      <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="email" placeholder="Enter email" />
    {/* <Form.Text className="text-muted hide">
      We'll never share your email with anyone else.
    </Form.Text> */}
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Remember me" />
  </Form.Group>
  <Form.Group className="mb-4 mt-4 text-center " controlId="Btn">
  <Button variant="primary" type="submit" className='theme-btn'>
    Submit
  </Button>
  </Form.Group>
</Form>
      </Card>
     </Card>
     <Row className="mt-3">
        <Col col={6}><a className="text-light" href="#pablo"><small>Forgot password?</small></a></Col>
        <Col col={6} className="text-end"><a className="text-light" href="#pablo"><small>Create new account</small></a>
        </Col>
    
      </Row>
    </Col>
  </Row>
  </Container>
  </div>

    </>
  )
}
