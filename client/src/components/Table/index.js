import React from 'react';

export default function Table (props) {
    return (
        <div className="table-parent">
            <table>
                
                    <th>
                        Name
                    </th>
                    <th>
                        Phone Number
                    </th>
                    <th>
                        Image
                    </th>
                    <th>
                        Age
                    </th>
                
                <tbody>

                {props.employees.map((employee, i) => (
                    <tr key={`employee-${i}`}>
                        <td>
                            {`${employee.name.first} ${employee.name.last}`}
                        </td>
                        <td>
                            {employee.phone}
                        </td>
                        <td>
                            <img src={employee.picture.thumbnail} alt="Employee Image" />
                        </td>
                        <td>
                            {employee.dob.age}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}