import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empl } from '../Component/model/empl';
import { EmployeeService } from '../Component/service/employee.service';

@Component({
  selector: 'app-update-emplyoee',
  templateUrl: './update-emplyoee.component.html',
  styleUrls: ['./update-emplyoee.component.css']
})
export class UpdateEmplyoeeComponent implements OnInit {
 
  @Input() msgFromParent1: any[];

  
  
  empll : Empl =new Empl();
  public EmployeeValidation={
    eid:"",
    ename:"",
    eemail:"",
    econtact:"",
    egender:"",
    epassword:"",
    econpass:"",
    edob:""
  }


  public name1 : String = " ";
  constructor(public empService : EmployeeService, private router: Router) { }
 public isAdded =false;
  public pass: boolean ;
  ngOnInit(): void {
    console.log("mes"+this.msgFromParent1)
  }
updateForm(val){
  console.log(val.value);
  console.log("ABC"+this.EmployeeValidation.epassword)
  console.log("ABCD "+this.EmployeeValidation.econpass);
  
  
this.empll.eid = this.EmployeeValidation.eid;
this.empll.name = this.EmployeeValidation.ename;
this.empll.email = this.EmployeeValidation.eemail;
this.empll.contact = this.EmployeeValidation.econtact;
this.empll.dob = this.EmployeeValidation.edob;
this.empll.password = this.EmployeeValidation.epassword;
this.empll.gender = this.EmployeeValidation.egender;
this.update();

}

update(){
 
this.empService.updateEmployee(this.empll)
                .subscribe(data => {console.log(data);
                  this.isAdded = true;
                  console.log("Updated")
                }, error=>console.log(error))
                this.router.navigate(['/view'])
}


updateForm1(val){
  console.log(val.value);
  console.log("ABC"+this.EmployeeValidation.epassword)
  console.log("ABCD "+this.EmployeeValidation.econpass);
  
  
this.empll.eid = this.EmployeeValidation.eid;
this.empll.name = this.EmployeeValidation.ename;
this.empll.email = this.EmployeeValidation.eemail;
this.empll.contact = this.EmployeeValidation.econtact;
this.empll.dob = this.EmployeeValidation.edob;
this.empll.password = this.EmployeeValidation.epassword;
this.empll.gender = this.EmployeeValidation.egender;
console.log("Hello "+ this.empll.email);

this.update1(this.empll.email);

}

update1(email:String){
 
this.empService.updateEmployeeByEmail(this.empll,email)
                .subscribe(data => {console.log(data);
                  this.isAdded = true;
                  console.log("Updated")
                }, error=>console.log(error))
                this.router.navigate(['/view'])
}




}

