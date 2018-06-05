import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms'
import { Rate } from 'src/app/movies/model/rate.model'

@Component({
  selector: 'mov-rating',
  templateUrl: './rating.component.html',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RatingComponent),
    multi: true
  }]
})
export class RatingComponent implements OnInit, ControlValueAccessor {


  constructor() { }

  onChange = (any): void => { };

  rate: Rate
  iconPath: string
  comment: string

  @Input() rates: Rate[]

  ngOnInit() {
  }

  setRate(rate): void {
    this.iconPath = rate.iconPath
    this.comment = rate.comment

    this.rates.forEach(element => {
      element.chosen = false
      element.comment = ''

      if (element.id === 'like')
        element.iconPath = '../../../assets/reactions/like.jpeg'
      else if (element.id === 'soso')
        element.iconPath = '../../../assets/reactions/soso.jpeg'
      else
        element.iconPath = '../../../assets/reactions/dislike.jpeg'
    });

    rate.chosen = true
    rate.iconPath = this.iconPath
    this.rate = rate

    this.onChange(this.rate)
  }

  mouseEnter(rate): void {
    if (rate.id === 'like')
      rate.iconPath = '../../../assets/reactions/like_c.jpeg'
    else if (rate.id === 'soso')
      rate.iconPath = '../../../assets/reactions/soso_c.jpeg'
    else
      rate.iconPath = '../../../assets/reactions/dislike_c.jpeg'
  }

  mouseLeave(rate): void {
    if (!rate.chosen) {
      if (rate.id === 'like')
        rate.iconPath = '../../../assets/reactions/like.jpeg'
      else if (rate.id === 'soso')
        rate.iconPath = '../../../assets/reactions/soso.jpeg'
      else
        rate.iconPath = '../../../assets/reactions/dislike.jpeg'
    }
  }

  writeValue(obj: any): void {
    this.rate = obj
  }

  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void { }

  setDisabledState?(isDisabled: boolean): void { }
}
