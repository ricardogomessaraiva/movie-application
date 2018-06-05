import { Injectable } from '@angular/core'

import { Movie } from '../model/movie.model'

@Injectable()
export class MovieDetailService {
    movie: Movie
    constructor() { }

    currentMovie(mov: Movie): void {
        this.movie = mov
    }

    getMovie() {
        return this.movie
    }        
}