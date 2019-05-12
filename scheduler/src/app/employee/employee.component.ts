import { Component, OnInit, Input } from '@angular/core';
import { CompanyComponent } from '../company/company.component';
import { Employee } from './employee.model';
import { DataService } from '../data.service'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {
  companyName:string;	
  companySize: number;
  //listEmployees: Employee[];
  employeeList: Employee[];
  prioritized: Employee[];

  constructor(private data: DataService) {
  	this.employeeList = [];
  }

  emptyArray() {
    return Array.apply(null, {length: this.companySize}).map(Number.call, Number)
  }

  addEmployee(names: HTMLInputElement[]): boolean {
  	for (var i = 0; i < names.length; i++) {
  		var item: Employee = new Employee(names[i].value, false, []);
  		console.log(item.name);
      	this.employeeList.push(item);
  	}
    return false;
  }

  // addEmployee(names: HTMLInputElement[]): boolean {
  //   for (var i = 0; i < names.length; i++) {
  //     var item: Employee = new Employee(names[i].value, false, []);
  //     console.log(item.name);
  //     this.employeeList.push(item);
  //   }
  //   this.data.changeEmployeeList(this.listEmployees);
  //   return false;
  // }

  returnPriorityEmployees(): Employee[] {
  	this.prioritized = this.employeeList.filter(item => item.priority);
  	return this.prioritized;
  }

  ngOnInit() { 
    this.data.currentCompanyName.subscribe(companyName => this.companyName = companyName);
    this.data.currentCompanySize.subscribe(companySize => this.companySize = companySize);
    //this.data.currentEmployees.subscribe(listEmployees => this.listEmployees = listEmployees);

  }

}
