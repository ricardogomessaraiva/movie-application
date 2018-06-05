import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { MoviesComponent } from './movies/movies.component'
import { MovieNewComponent } from './movies/movie-new/movie-new.component'
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component'
import { MovieDetailRatedComponent } from './movies/movie-detail/movie-detail-rated/movie-detail-rated.component'
import { MovieDetailRatingComponent } from './movies/movie-detail/movie-detail-rating/movie-detail-rating.component'
import { AboutComponent } from './about/about.component'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'


import { ContentChildren } from '@angular/core';



export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'movies', component: MoviesComponent },
    {
        path: 'movie-detail', component: MovieDetailComponent,
        children: [
            { path: '', redirectTo: 'rated', pathMatch: 'full' },
            { path: 'rated', component: MovieDetailRatedComponent },
            { path: 'rating', component: MovieDetailRatingComponent }
        ]
    },
    { path: 'new-movie', component: MovieNewComponent },
    { path: 'about', component: AboutComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent }
]