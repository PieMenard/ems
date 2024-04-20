import React from 'react';

const ListEmployeeComponent = () => {
  const dummyData = [
    {
      id: 1,
      firstName: 'First',
      lastName: 'Firstson',
      email: 'first@mail.com',
    },
    {
      id: 2,
      firstName: 'Second',
      lastName: 'Secondson',
      email: 'second@mail.com',
    },
    {
      id: 3,
      firstName: 'Third',
      lastName: 'Thirdson',
      email: 'third@mail.com',
    },
  ];

  return (
    <div className="container">
    <h2 className='text-center'>Employees</h2>
      <table class="table table-striped table-bordered table-dark">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((employee) => (
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
