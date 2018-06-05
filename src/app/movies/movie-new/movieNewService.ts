import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { Movie } from '../model/movie.model'

@Injectable()
export class MovieNewService {
    constructor(private http: HttpClient) { }

    save(movie: Movie) {
        const ParseHeaders = {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        };

        this.http.post<Movie>('', movie, ParseHeaders).subscribe((res) => {
            return res
        });
    }
}