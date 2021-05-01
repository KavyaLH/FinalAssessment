import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empl } from '../model/empl';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public emplData = [];
  empll: Empl = new Empl();

  public isDeleted: boolean;
  public EmployeeAlteration = {
    eid: "",
  }
  public id: any;
  constructor(private emData: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    {

      this.emData.getEmployees().subscribe(data =>
        this.emplData = data)
    }
  }

  deleteEmployee(eid: any) {
    console.log(eid);
    this.emData.deleteEmployee(eid).subscribe(data =>
      console.log(`Employee with ID ${eid} is deleted `));
    this.isDeleted = true;
    this.router.navigate(['/view']);
    console.log("now" + this.id);
  }

  updateEmployee(eid: any) {
    console.log(eid)
    this.id = eid;
    this.router.navigate(['/view'])
  }
}
