import { Component, Input, OnInit } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Empl } from '../Component/model/empl';
import { EmployeeService } from '../Component/service/employee.service';

@Component({
  selector: 'app-update-emplyoee',
  templateUrl: './update-emplyoee.component.html',
  styleUrls: ['./update-emplyoee.component.css']
})
export class UpdateEmplyoeeComponent implements OnInit {

  empll: Empl = new Empl();
  public emplData = [];
  public EmployeeValidation = {
    eid: "",
    ename: "",
    eemail: "",
    econtact: "",
    egender: "",
    epassword: "",
    econpass: "",
    edob: ""
  }


  public name1: String = " ";
  constructor(public empService: EmployeeService, private router: Router) { }
  public isAdded = false;
  public pass: boolean;

  ngOnInit(): void {
  
  }

  updateForm(val) {
    console.log(val.value);
    console.log("ABC" + this.EmployeeValidation.epassword)
    console.log("ABCD " + this.EmployeeValidation.econpass);


    this.empll.eid = this.EmployeeValidation.eid;
    this.empll.name = this.EmployeeValidation.ename;
    this.empll.email = this.EmployeeValidation.eemail;
    this.empll.contact = this.EmployeeValidation.econtact;
    this.empll.dob = this.EmployeeValidation.edob;
    this.empll.password = this.EmployeeValidation.epassword;
    this.empll.gender = this.EmployeeValidation.egender;
    this.update();

  }

  update() {

    this.empService.updateEmployee(this.empll)
      .subscribe(data => {
        console.log(data);
        this.isAdded = true;
        console.log("Updated")
      }, error => console.log(error))
    this.router.navigate(['/view'])
  }


  updateForm1(val) {
    console.log(val.value);
    console.log("password" + this.EmployeeValidation.epassword)
    console.log("Confirm password " + this.EmployeeValidation.econpass);
    this.empll.name = this.EmployeeValidation.ename;
    this.empll.email = this.EmployeeValidation.eemail;
    this.empll.contact = this.EmployeeValidation.econtact;
    console.log("email " + this.empll.email);
    this.update1(this.empll.email);

  }

  update1(email: String) {
    this.empService.updateEmployeeByEmail(this.empll, email)
      .subscribe(data => {
        console.log("Name = " + data.name)
        if (data == null) {
          window.alert("EmailId not found")
          this.router.navigate(['/update'])
        }
        else {
          window.alert("Upadted successfully")
          this.router.navigate(['/view'])
        }
      })
  }

  logoutForm() {
    if (confirm("Are you sure to Logout?") == true) {
      this.router.navigate(['/login'])
    }
  }

  ClearForm() {
    if (confirm("Do you really want to cancel update?")) {
      if (true) {
        this.router.navigate(['/view'])
      }

      if (false) {
        this.router.navigate(['/update'])
      }
    }
  }
}

