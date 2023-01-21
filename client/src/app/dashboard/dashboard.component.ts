import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

    constructor(private router:Router){}

    isLoggedIn = false;
    buttonText = '';

    ngOnInit(): void {
      this.isLoggedIn = localStorage.getItem('isLogin') !== null ? true: false;
      if(this.isLoggedIn){
        this.buttonText = 'Log Out'
      }else{
        this.buttonText = 'Log In'
      }
    }

    login(){
      if(this.isLoggedIn){
        localStorage.clear()
      }
      this.router.navigateByUrl('/login')
    }
}
