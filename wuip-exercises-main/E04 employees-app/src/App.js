import './App.css';
import React, { useEffect, useState } from 'react';
import axios from "axios";

function App() {

  const [employees, setEmployees] = useState([]) 
  
  useEffect(() => {
    axios
      .get('http://localhost:3001/employees')
      .then(response => {
        setEmployees(response.data)
      })
  }, [])
  
  function Employee(props) {
    return (
      <div className="Employee">
        <img src={props.employee.image} alt="ReactImage" />
        <h1>{props.employee.last_name} {props.employee.first_name}</h1>
        <p>{props.employee.title}{" @ "}{props.employee.department}</p>
        <p>{props.employee.email}</p>
        <p>{props.employee.phone}</p>
      </div>
    )
  }
  const employeeItems = employees.map((employee,index) =>
  <Employee key={index} employee={employee}/>
);


  return (
    <div className="App">
        {employeeItems}
    </div>
  );
  

}

export default App;
