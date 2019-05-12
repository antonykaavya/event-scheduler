import { Meeting } from '../meeting/meeting.model';

export class Employee {
  name: string;
  priority: boolean;
  meetings: Meeting[];

  constructor(name: string, priority: boolean, meetings: Meeting[]) {
    this.name = name;
    this.priority = priority;
    this.meetings = meetings;
  }

  returnPriority(): boolean {
    return this.priority;
  }
  
}