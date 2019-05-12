// routerConfig.ts

import { Routes } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { EmployeeComponent } from './employee/employee.component';
import { MeetingComponent } from './meeting/meeting.component';
import { EventComponent } from './event/event.component';
import { ResultComponent } from './result/result.component';

export const appRoutes: Routes = [
  { path: 'company', 
    component: CompanyComponent 
  },
  { path: 'employee',
    component: EmployeeComponent
  },
  { path: 'meeting',
    component: MeetingComponent
  }, 
  { path: 'event',
    component: EventComponent
  }, 
  { path: 'result',
    component: ResultComponent
  }
];
// export default appRoutes;

