import React,{useState,useEffect} from 'react';
import './App.css';
import styled from 'styled-components'
import { Container,Row,Col,Badge,Alert } from 'react-bootstrap';
import ExpenseForm from './components/ExpenseForm.jsx'
//import {Alert} from './components/Alert.jsx'
import {ExpenseList} from './components/ExpenseList.jsx'
import { v4 as uuidv4 } from 'uuid';
const Heading = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: white;
`;

// const initialExpenses = [
//   {id:uuidv4(),charge:"rent",amount:200},
//   {id:uuidv4(),charge:"carpayment",amount:400},
//   {id:uuidv4(),charge:"bill",amount:1200}
// ]

const initialExpenses = localStorage.getItem('expenses')? JSON.parse(localStorage.getItem('expenses')) :[]
//console.table(initialExpenses);
function App() {
  const[expenses,setExpenses] = useState(initialExpenses);

  const[charge,setCharge] = useState('');
  const[amount,setAmount] = useState('');

  const [alert,setAlert] = useState({status:false,type:"",message:""});

  const [edit,setEdit] = useState(false)
  const [tempId,setTempId] = useState(0)

  useEffect(()=>{

    localStorage.setItem('expenses',JSON.stringify(expenses))
    console.log("use effect run")
  },[expenses])

  const handleCharge = (e)=>{
    setCharge(e.target.value)
    //console.log(`charge : ${e.target.value}`);
  }
  const handleAmount = (e)=>{
    
    
      setAmount(e.target.value)
    
    //console.log(`amount : ${e.target.value}`);
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(charge !== '' && amount > 0) 
    {
      if(edit)
      {
        let tempExpenses = expenses.map((item)=>{
          return tempId === item.id ? {...item,charge,amount} :item
        })
        //console.log(tempExpenses);
        setExpenses(tempExpenses)
        setEdit(false)
        setTempId(0)
        setAlert({status:true,type:"success",message:"Item succesfully edited Edited"})

      }else
      {
        const expense = {id:uuidv4(),amount,charge}
        setExpenses([...expenses,expense]);
        setAlert({status:true,type:"success",message:"form submitted"})
      }
      setAmount(' ')
      setCharge('')
    }else
    {
      setAlert({status:true,type:"danger",message:"Need to fill all fields"})
    }

  }

  const clearHandle = () =>{
    console.log("object");
    setExpenses([]);
    setAlert({status:true,type:"success",message:"All fields are deleted"})
  }

  const handleDelete =(id)=>{
    let filterExpenses = expenses.filter(item => item.id !== id);
    setExpenses(filterExpenses);
    setAlert({status:true,type:"danger",message:"Expense Deleted"})
  }

  
  const handleEdit =(idd)=>{
   let editExpense =  expenses.find((item)=> item.id === idd);
   const {id, amount,charge}= editExpense
   console.log(id);
   setCharge(charge)
   setAmount(parseInt(amount))
   setEdit(true)
   setTempId(id)
   
  }
  
  return (
    <Container fluid style={{"backgroundColor":"#848ccf"}}>
      <Row>
        <Col style={{"border":"2px solid green"}} md={{ span: 8, offset: 2 }} >
        <Heading>Budget Calculator By Arslan Ahmed Shaad <br/>email: ashi3610@gmail.com<br/>phone:+923338048724</Heading>
          {alert.status && <Alert onClose={() => setAlert({status:false})} dismissible variant={alert.type}>{alert.message}</Alert>}
        
          
          <ExpenseForm 
            charge = {charge}
            amount = {amount}
            handleCharge = {handleCharge}
            handleAmount = {handleAmount}
            handleSubmit = {handleSubmit}
            edit= {edit}
          />
          <ExpenseList expenses = {expenses} clearHandle={clearHandle} handleDelete={handleDelete} handleEdit={handleEdit}/>
          <h1>
            Total : <Badge variant="success">{expenses.reduce((acc,val)=>{return(acc += parseInt(val.amount))},0)}</Badge>
          </h1>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
