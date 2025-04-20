import {Injectable} from '@angular/core';


import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly API_URL = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {
  }

  // Récupère les films populaires
  getPopularMovies() {
    return this.http.get(
      `${this.API_URL}/movie/popular`).pipe(
      map((res: any) => res.results)
    );
  }

  // Recherche de films
  searchMovies(query: string) {
    return this.http.get(
      `${this.API_URL}/search/movie?api_key=${environment.tmdbApiKey}&query=${query}`
    ).pipe(
      map((res: any) => res.results)
    );
  }

  // Détails d'un film spécifique
  getMovieDetails(id: number) {
    return this.http.get(
      `${this.API_URL}/movie/${id}?api_key=${environment.tmdbApiKey}`
    );
  }
}
