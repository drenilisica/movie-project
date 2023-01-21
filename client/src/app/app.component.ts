import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  router: any;
  ngOnInit(): void {
    if(localStorage.getItem('isLogin') !== null){
      this.router.navigateByUrl('/movies')
    }
  }
  title = 'client';
}
