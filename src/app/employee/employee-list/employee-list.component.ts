import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent  {
  @Input('employeeList') employeeList!: Employee[];

  @Output('action') action: EventEmitter<[string, number]> = new EventEmitter<[string, number]>();

  deleteAction(id: number) {
    this.action.emit(['DELETE', id]);
  }

  editAction(id: number) {
    this.action.emit(['EDIT', id]);
  }

}
