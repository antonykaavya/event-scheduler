import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs' ;
import { Employee } from './employee/employee.model';

@Injectable()
export class DataService {

	private companyNameSource = new BehaviorSubject<string>("");
	currentCompanyName = this.companyNameSource.asObservable();

	private companySizeSource = new BehaviorSubject<number>(0);
	currentCompanySize = this.companySizeSource.asObservable();

	private employeesSource= new BehaviorSubject<Employee[]>([]);
	currentEmployees = this.employeesSource.asObservable();
	
	constructor() {}

	changeCompanyName(companyName: string) {
		this.companyNameSource.next(companyName);
	}

	changeCompanySize(companySize: number) {
		this.companySizeSource.next(companySize);
	}

	// changeEmployeeList(listEmployees: Employee[]) {
	// 	this.employeesSource.next(listEmployees); 
	// }

	// getEmployeeListFromService() {
	// 	return this.employeesSource;
	// }
 
}