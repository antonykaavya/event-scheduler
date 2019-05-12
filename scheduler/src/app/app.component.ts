import { Component } from '@angular/core';
import { Employee } from './employee/employee.model';
import { DataService } from './data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'scheduler';
  employeeList: Employee[];
  prioritized: Employee[];

  constructor() {
  	this.employeeList = [];
  }

  addEmployee(name: HTMLInputElement): boolean {
    var item: Employee = new Employee(name.value, false, []);
    this.employeeList.push(item);
    console.log(this.employeeList);
    return false;
  }

  returnPriorityEmployees(): Employee[] {
  	this.prioritized = this.employeeList.filter(item => item.priority);
  	return this.prioritized;
  }

}
