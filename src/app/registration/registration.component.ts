import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { Router } from '@angular/router';
import { EmployeeComponent } from '../Component/employee/employee.component';
import { Empl } from '../Component/model/empl';
import { EmployeeService } from '../Component/service/employee.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  empll: Empl = new Empl();
  public EmployeeValidation = {
    ename: "",
    eemail: "",
    econtact: "",
    egender: "",
    epassword: "",
    econpass: "",
    edob: ""

  }
  public msg: String = " ";
  constructor(public empService: EmployeeService, private router: Router) { }
  public isAdded = false;
  public pass: boolean;
  ngOnInit(): void {
  }


  registrationForm(val) {
    console.log(val.value);
    console.log("ABC" + this.EmployeeValidation.epassword)
    console.log("ABCD " + this.EmployeeValidation.econpass);
    if (!(this.EmployeeValidation.epassword === this.EmployeeValidation.econpass)) {
      this.pass = true;
      this.msg = "Not Matched"

    }

    this.empll.name = this.EmployeeValidation.ename;
    this.empll.email = this.EmployeeValidation.eemail;
    this.empll.contact = this.EmployeeValidation.econtact;
    this.empll.dob = this.EmployeeValidation.edob;
    this.empll.password = this.EmployeeValidation.epassword;
    this.empll.gender = this.EmployeeValidation.egender;
    this.save();
  }

  save() {
    this.empService.saveEmployee(this.empll)
      .subscribe(data => {
        console.log(data);
        if (data == null) {
          window.alert("Registration is not successfull. Try again")
          this.router.navigate(['/home'])
        }
        else {
          window.alert("Registration is successful")
          this.router.navigate(['/login'])
        }
      })
  }

  ClearForm() {
    if (confirm("Are you sure to get back to home page?")) {
      this.router.navigate(['/home'])
    }
  }
}