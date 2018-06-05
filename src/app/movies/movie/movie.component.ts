import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'

import { Movie } from '../model/movie.model'
import { MovieDetailService } from '../movie-detail/movie-detail.service'

@Component({
  selector: 'mov-movie',
  templateUrl: './movie.component.html'
})
export class MovieComponent implements OnInit {

  //Decoretor - Necessário para Parent receber propriedade
  @Input() movie: Movie

  constructor(private router: Router, private detailService: MovieDetailService) { }

  ngOnInit() {
  }

  movieDetails(movie: Movie): void {
    this.detailService.currentMovie(movie)
    this.router.navigate(['/movie-detail'])
  }
}
