import { Component, OnInit } from '@angular/core';
//reactive forms
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

import { MovieNewService } from '../movie-new/movieNewService'
import { Movie } from '../model/movie.model'

@Component({
  selector: 'mov-new-movie',
  templateUrl: './movie-new.component.html'
})

export class MovieNewComponent implements OnInit {
  private movie: Movie
  newMovieForm: FormGroup

  constructor(private formBuilder: FormBuilder,
    private serviceNewMovie: MovieNewService) { }

  ngOnInit() {
    this.newMovieForm = this.formBuilder.group({
      imageURL: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      category: this.formBuilder.control('', [Validators.required, Validators.minLength(0)]),
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      sinopse: this.formBuilder.control('', [Validators.required, Validators.minLength(5)])
    })
  }

  save(): void {
    this.movie.imagePath = this.newMovieForm.get('imageURL').value
    this.movie.name = this.newMovieForm.get('name').value
    this.movie.category = this.newMovieForm.get('category').value
    this.movie.sinopse = this.newMovieForm.get('sinopse').value

    this.serviceNewMovie.save(this.movie)
  }

}
