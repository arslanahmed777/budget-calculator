import React from 'react'
import { Alert as AlertMessage } from 'react-bootstrap';
export const Alert = ({alert}) => {
    const isAlert = alert[0]
    console.log(isAlert.type)
    const setAlert = alert[1]

    return (
        <>
        {isAlert.status && <AlertMessage onClose={() => setAlert({status:false})} dismissible variant={isAlert.type}> is  alert—check it out!</AlertMessage>}
        </>
        
    )
}
