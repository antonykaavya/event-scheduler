import { Component, OnInit } from '@angular/core';
import { Meeting } from './meeting.model';
import { DataService } from '../data.service'
import { Employee } from '../employee/employee.model';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css']
})
export class MeetingComponent implements OnInit {
  meetingList: Meeting[];
  //listEmployees: Employee[];

  constructor(private data: DataService) { 
  	this.meetingList = [];
  }

  emptyArray() {
    return Array.apply(null, {length: 4}).map(Number.call, Number)
  }

  addMeeting(startTime: HTMLInputElement, endTime: HTMLInputElement, priorityAttendees: HTMLInputElement, invited: HTMLInputElement): boolean {
    console.log(priorityAttendees.checked);
    var item: Meeting = new Meeting(startTime.value, endTime.value, [], []);
    console.log(item.startTime);
    this.meetingList.push(item);
    return false;
  }

  // getEmployeeList() {
  //   this.data.getEmployeeListFromService();
  // }

  ngOnInit() {
    //this.data.currentEmployees.subscribe(listEmployees => this.listEmployees = listEmployees);

  }

}