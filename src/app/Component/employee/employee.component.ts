import { Component, Input, OnInit } from '@angular/core';
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
  empllData: Empl[] = [];
  empll: Empl = new Empl();
  public isDeleted: boolean;
  
  public EmployeeAlteration = {
    eid: "",
  }
  public id: any;
  fname: String;
  term: String;
  constructor(private emData: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    {

      this.emData.getEmployees().subscribe(data =>
        console.log(this.emplData = data))

    }
  }

  deleteEmployee(eid: any, ename: String) {
    console.log(eid);
     if (confirm("Are you sure to delete ")) {
      this.emData.deleteEmployee(eid).subscribe(data =>
      console.log(`Employee with ID ${eid} is deleted `));
      this.isDeleted = true;
      window.alert("Employee " + ename + "'s record has been deleted")
      this.router.navigate(['/view']);
      console.log("now" + this.id);
    }
  }
  onSearch() {
    if (this.fname != "") {
    }
    else if (this.fname == "") {
      this.ngOnInit()
    }
    this.empllData = this.emplData.filter(data => {
      return data.fname.toLocaleLowerCase().match(this.fname.toLocaleLowerCase());
    })

  }

  logoutForm() {
    if (confirm("Are you sure to Logout?")) {
      this.router.navigate(['/login'])
    }
  }
}
