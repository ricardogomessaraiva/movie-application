import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'

import { Movie } from './model/movie.model'
import { MovieDetailComponent } from './movie-detail/movie-detail.component'
import { MovieDetailService } from './movie-detail/movie-detail.service'
import { MoviesService } from './movies.service'

@Component({
  selector: 'mov-movies',
  templateUrl: './movies.component.html'
})

export class MoviesComponent implements OnInit {
  movies: Movie[] = []  

  constructor(private moviesService: MoviesService) { }  

  ngOnInit() {
    this.movies = this.moviesService.all()
  }
}
