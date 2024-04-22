import { Injectable } from '@angular/core';
import { Designation, Employee } from './employee';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employeeList: Employee[] = [
    {
      id: 1,
      name: 'Anoop',
      email: 'anoop@gmail.com',
      designation: Designation.OP,
    },
    {
      id: 2,
      name: 'Rahul',
      email: 'rahul@gmail.com',
      designation: Designation.HR,
    },
  ];
  constructor(private http: HttpClient) {}

  getAll() {
    // return this.employeeList;
    return this.http.get<Employee[]>(
      `http://localhost:3000/api/rooms`
    );
  }
  add(employee: Employee) {
    const maxId = this.getMaxId() + 1;
    employee.id = maxId;
    this.employeeList = [...this.employeeList, employee];
  }

  getMaxId() {
    return this.employeeList
      .map((employee) => employee.id)
      .reduce((prev, current) => Math.max(prev, current), 0);
  }

  edit(employee: Employee) {
    const updatedList: Employee[] = [...this.employeeList];
    const index = this.employeeList.findIndex((emp) => emp.id === employee.id);
    updatedList[index] = employee;
    this.employeeList = updatedList;
  }

  delete(id: number) {
    const updatedList: Employee[] = [...this.employeeList];
    this.employeeList = updatedList.filter((emp) => emp.id !== id);
  }
}
