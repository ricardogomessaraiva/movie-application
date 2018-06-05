import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { ROUTES } from './app.routes'

import { AppComponent } from './app.component'
import { NaviComponent } from './navi/navi.component'
import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component'
import { MoviesComponent } from './movies/movies.component'
import { MovieComponent } from './movies/movie/movie.component'
import { MovieNewComponent } from './movies/movie-new/movie-new.component'
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component'
import { FooterComponent } from './footer/footer.component';
import { MoviesService } from './movies/movies.service'
import { MovieDetailService } from './movies/movie-detail/movie-detail.service';
import { MovieDetailRatedComponent } from './movies/movie-detail/movie-detail-rated/movie-detail-rated.component';
import { MovieDetailRatingComponent } from './movies/movie-detail/movie-detail-rating/movie-detail-rating.component'
import { MovieNewService } from '../app/movies/movie-new/movieNewService';
import { LoginComponent } from './login/login.component'

/*SHARED COMPONETS*/
import { HeaderComponent } from './shared/header/header.component'
import { RatingComponent } from './shared/rating/rating.component';
import { InputComponent } from './shared/input/input.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    HomeComponent,
    AboutComponent,
    MoviesComponent,
    FooterComponent,
    MovieNewComponent,
    MovieDetailComponent,
    MovieComponent,
    MovieDetailRatedComponent,
    MovieDetailRatingComponent,
    InputComponent,
    RatingComponent,
    LoginComponent,
    HeaderComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [MoviesService, MovieDetailService, MovieNewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
