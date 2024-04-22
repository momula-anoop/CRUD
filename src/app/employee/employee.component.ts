import { Component, OnInit } from '@angular/core';
import { Designation, Employee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  user: Employee = new Employee();
  employeeList!: Employee[];
  designations: Designation[] = [
    Designation.HR,
    Designation.OP,
    Designation.SF,
  ];
  // designations = Object.entries(Designation);
  designation1!: Designation;
  constructor(private employeeService: EmployeeService) {
    console.log();
  }
  ngOnInit(): void {
    this.getAllEmployees();
  }
  onSubmit(event: any) {
    if (this.user.id != undefined) {
      this.employeeService.edit(this.user);
    } else {
      this.employeeService.add(this.user);
    }
    this.user = new Employee();
    this.getAllEmployees();
  }

  getAllEmployees() {
    console.log('Hello');
    // this.employeeList = this.employeeService.getAll();
    this.employeeService.getAll().subscribe((data) => {
      this.employeeList = data;
    });
  }

  performAction(action: [string, number]) {
    const [actionName, id] = action;
    if (actionName === 'DELETE') {
      if (this.user.id === id) {
        this.user = new Employee();
      }
      this.employeeService.delete(id);
    } else if (actionName === 'EDIT') {
      const editEmployee = this.employeeList.find((emp) => emp.id === id);
      if (editEmployee != undefined) {
        this.user = { ...editEmployee };
      }
    }
    this.getAllEmployees();
  }
}
