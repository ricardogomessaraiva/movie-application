import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'

import { Rate } from '../../model/rate.model'

@Component({
  selector: 'mov-movie-detail-rating',
  templateUrl: './movie-detail-rating.component.html'
})
export class MovieDetailRatingComponent implements OnInit {

  rates: Rate[] = [
    {
      id: 'like',
      chosen: false,
      description: 'Muito Bom!',
      iconPath: '../../../assets/reactions/like.jpeg',
      comment: ''
    },
    {
      id: 'soso',
      chosen: false,
      description: 'Legalzinho...',
      iconPath: '../../../assets/reactions/soso.jpeg',
      comment: ''
    },
    {
      id: 'dislike',
      chosen: false,
      description: 'Não gostei!',
      iconPath: '../../../assets/reactions/dislike.jpeg',
      comment: ''
    }
  ]

  constructor(private formBuilder: FormBuilder) { }

  formRating: FormGroup

  ngOnInit() {
    this.formRating = this.formBuilder.group({
      rate: this.formBuilder.control(''),
    })
  }

  save(rate): void {
    console.log(this.formRating.controls.rate.value)    
  }
}

