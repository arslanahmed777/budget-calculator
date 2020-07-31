import React from 'react'
import {ExpenseItem} from './ExpenseItem.jsx'
import styled from 'styled-components'
import { MdDeleteForever } from "react-icons/md";
const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: white;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  background: palevioletred;
  
`;

const List = styled.ul`
    margin: 2rem 0.75rem 0 0.75rem;
    list-style-type: none;
    border: none;
    padding: 0;
`;


export const ExpenseList = ({expenses,clearHandle,handleEdit,handleDelete}) => {
    
    const expenseitem = expenses.map(item =>{
        return <ExpenseItem key={item.id} id={item.id} charge={item.charge} amount={item.amount} handleEdit={handleEdit} handleDelete={handleDelete} />
    })
    return (
        <React.Fragment>
            <List>
                {expenseitem}
            </List>
            {expenses.length > 0  && <div style={{textAlign:"center"}}><Button onClick={clearHandle} >Clear List <MdDeleteForever /></Button></div> }
        
        </React.Fragment>
        
    )
}
