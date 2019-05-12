import { Employee } from '../employee/employee.model';

export class Meeting {
  startTime: string;
  endTime: string;
  priorityAttendees: Employee[]
  invited: Employee[]

  constructor(startTime: string, endTime: string, priorityAttendees: Employee[], invited: Employee[]) {
    this.startTime = startTime;
    this.endTime = endTime;
    this.priorityAttendees = priorityAttendees;
    this.invited = invited;
  }

}