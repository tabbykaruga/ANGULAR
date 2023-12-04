import { Component ,OnInit } from '@angular/core';
import { Movie } from '../../classes/movie';
import { MoviesService } from '../../services/movies.service';

@Component({
    selector: 'app-movie-list',
    templateUrl: './movie-list.component.html',
    styleUrl: './movie-list.component.css',
})

export class MovieListComponent implements OnInit {
  //variable
  movies: Movie[] = [];
 

  //overide the constructor
  constructor(private movieService:MoviesService) { }

  //when the promise returns the data we assign in to the variable declared above
  getMovies(): void{
    this.movieService.getMovies().then(movies => this.movies = movies);
  }

  //life cycle event /begins here
  ngOnInit() {
    this.getMovies(); 
  }

}
