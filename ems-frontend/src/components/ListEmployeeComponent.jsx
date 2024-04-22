import  {React, useEffect, useState } from 'react';
import { listEmployees } from '../services/EmployeeService';
import { Button}  from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const ListEmployeeComponent = () => {
  const [employees, setEmployees] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    listEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const addNewEmployee = () => {
      navigate('/add-employee');
  }

  return (
    <div className="container">
      <h2 className="text-center">Employees</h2>
      <Button variant="primary" onClick={addNewEmployee}>Add Employee</Button>
      <table className="table table-striped table-bordered my-2">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;
