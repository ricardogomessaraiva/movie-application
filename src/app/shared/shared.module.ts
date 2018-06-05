import { NgModule, ModuleWithProviders } from '@angular/core'
import { MovieDetailService } from '../movies/movie-detail/movie-detail.service'
import { MoviesService } from '../movies/movies.service'

export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [MoviesService, MovieDetailService]
        }
    }
}