import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empl } from '../Component/model/empl';
import { EmployeeService } from '../Component/service/employee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  empll: Empl = new Empl();
  public LoginEmpl = [];
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

  name2: any;
  loginForm(val) {
    console.log(val.value);
    this.empll.eid = this.EmployeeValidation.eid;
    this.empll.name = this.EmployeeValidation.ename;
    this.empll.password = this.EmployeeValidation.epassword;
    this.getLogin();

  }


  getLogin() {
    this.empService.getLoginDetails(this.name1, this.empll.name, this.empll.password)
      .subscribe((data) => {
        this.name2 = data;
        if (this.name2 == `Login successful`) {

          console.log("Value = " + data);

          this.router.navigate(['/view'])
          window.alert("Welcome " + this.empll.name)
        }
        else {
          console.log("Value = " + data);
          window.alert("Try with valid user name and password")
          this.router.navigate(['/login'])
        }
      }), error => console.log(error);
  }

  ClearForm() {
    if (confirm("Are you sure to get back to home page?")) {
      this.router.navigate(['/home'])
    }
  }
}
