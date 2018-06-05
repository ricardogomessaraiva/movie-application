import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

import { Movie } from '../model/movie.model';
import { MovieDetailService } from './movie-detail.service'
import { MoviesService } from '../movies.service';

@Component({
  selector: 'mov-movie-detail',
  templateUrl: './movie-detail.component.html'
})

export class MovieDetailComponent implements OnInit {
  movie: Movie
  constructor(private movieService: MovieDetailService) { }

  ngOnInit() {
    this.movie = this.movieService.getMovie()
  }

}
