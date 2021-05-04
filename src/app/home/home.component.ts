import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public router:Router) { }
login: boolean ;
  @Input() emplData: any;
  ngOnInit(): void {
  }
  logoutForm()
  {
   
    if(confirm("Are you sure to Logout?")) {
      this.router.navigate(['/login'])
      }
  }

}
