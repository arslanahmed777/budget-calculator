import React from 'react'
import styled from 'styled-components'
import { Row,Col,Form } from 'react-bootstrap';
import { MdSend } from "react-icons/md";
const Button =  styled.button`
display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;
  text-align: center
  
`;
 const ExpenseForm = ({charge,amount,handleCharge,handleAmount,handleSubmit,edit}) => {
    return (
        <Form onSubmit={handleSubmit}>
            <Row>
              <Col>
                <Form.Control type="text" value={charge} onChange={handleCharge} placeholder="Charge" />
              </Col>
              <Col>
                <Form.Control type="number" value={amount} onChange={handleAmount} placeholder="Amount" />
              </Col>
            </Row>
            <Row className="">
                <Col md={{ span: 2, offset: 4 }}>
                    <Button>{edit?"Edit":"Submit"}<MdSend/></Button>
                </Col>
            </Row>
          </Form>
    )
}
export default ExpenseForm;
