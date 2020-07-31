import React from 'react'
import styled from 'styled-components'
import { MdEdit,MdDelete } from "react-icons/md";
import ReactTooltip from 'react-tooltip';

const Item = styled.li`
    background-color: white;
    line-height: 1.5rem;
    padding: 10px 20px;
    margin-bottom: 1rem;
    border: 1px solid #e0e0e0;
    display: flex;
    justify-content: space-between;
    transition: all 0.3s linear;
    &:hover
    {
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
        transform: scale(1.05);
    }
`;
const Wrapper = styled.section`
    flex: 0 0 60%;
    display: flex;
    justify-content: space-between;
`;
const Button = styled.button`
    background: none;
    border: none;
    font-size: 1.2rem;
    outline: none;
    cursor: pointer;
`;
const Charge = styled.div`
    margin-right: 2rem;
    text-transform: capitalize;

`;
const Amount = styled.div`
    font-weight: 300;
    font-size: 1rem;
    color: var(--mainWhite);
    background-color: var(--primaryColor);
    border-radius: 2px;
    padding: 1px 3px;

`;

export const ExpenseItem = ({id, amount,charge,handleDelete,handleEdit}) => {
    return (
        <Item>
            <Wrapper>
                <Charge >{charge}</Charge>
                <Amount >{amount}</Amount>
            </Wrapper>
            <Button
                data-tip="<b>Edit</b>"
                data-html={true}
                data-type="warning"
                onClick={()=>{handleEdit(id)}}><MdEdit/><ReactTooltip effect="solid" /></Button>
            <Button
                data-tip="<b>Delete</b>"
                data-html={true}
                data-type="error"
             onClick={()=>{handleDelete(id)}}><MdDelete/></Button>
        </Item>
    )
}
