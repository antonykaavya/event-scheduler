import { Component, OnInit, Input, Output } from '@angular/core';
import { DataService } from '../data.service'

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  companyName:string;
  companySize: number;

  constructor(private data: DataService) { 

  }

  newCompanyName(newName:HTMLInputElement) {
  	this.data.changeCompanyName(newName.value);
  }

  newCompanySize(newSize:HTMLInputElement) {
    this.data.changeCompanySize(newSize.valueAsNumber);
  }

  ngOnInit() {
    this.data.currentCompanyName.subscribe(companyName => this.companyName = companyName);
    this.data.currentCompanySize.subscribe(companySize => this.companySize = companySize);
  
  }

}
