import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from 'services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(private router:Router, private moviesService:MoviesService){}
  movies:any
  ngOnInit(): void {
   if(localStorage.getItem('isLogin') === null){
    this.router.navigateByUrl('/login')
   }

   this.moviesService.movies().pipe().subscribe((data)=>{
    console.log(data);
    this.movies = data
   },(err)=>{console.log(err);
   })
  }

url="./assets/484717.jpg";

}
