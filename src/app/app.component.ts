
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Movie } from './models/Movie';
import { MovieService } from './services/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  movies: Movie[] = [];
  imageUrl = environment.imagesEndpoint;
  constructor(
    private moviesService: MovieService
  ) {
    console.log('CONSTRUCTOR');
  }
  ngOnInit(): void {
    this.moviesService.getMoviesByPopularity(1)
      .subscribe( ( resp: any ) => {
        this.movies = resp.results;
        console.log(this.movies);
      });
  }
  voteAverage(vote: number):boolean{
    return vote >= 7 ? true : false;
  }

}
