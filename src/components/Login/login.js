import React from 'react'
import { Col, Container, Row, Card, Figure } from 'react-bootstrap'
import LoginForm from './form'

export default function Login() {
    return (
        <>
        <div className='main-div'>
            <section className="bg-grident-blue ">
                <Container>
                    <Card.Body className="text-center mb-7 cardBody">
                        <Row className="justify-content-center ">
                            <Col md={6} lg={5}>
                                <Figure.Caption as='h1' className="text-white wlcomtitle">
                                    Welcome!
                                </Figure.Caption>

                                <Figure.Caption as='p' className="text-lead text-light">
                                    Use these awesome forms to login or create new account in your project for free.
                                </Figure.Caption>

                            </Col>
                        </Row>
                    </Card.Body>
                </Container>
                <div className="separator separator-bottom separator-skew zindex-100">
                    <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x={0} y={0}><polygon className="fill-default" points="2560 0 2560 100 0 100" /></svg>
                </div>
                

            </section>
          
            </div>
            <LoginForm/>
        </>
    )
}
