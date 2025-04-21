import {Component, OnInit} from '@angular/core';
import {DecimalPipe, NgForOf, NgIf, NgStyle} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from '../services/api.service';

@Component({
  selector: 'app-movie-detail',
  imports: [
    NgStyle, MatCardModule, DecimalPipe, NgForOf, NgIf
  ],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent implements OnInit {

  movie: any; // Holds movie details

  constructor(private route: ActivatedRoute, private apiService: ApiService) {
  }

  ngOnInit(): void {
    // Retrieve movie data (mocked for now)
    const movieId: string = this.route.snapshot.paramMap.get('id') || '';
    this.fetchMovieDetailsById(movieId);
  }

  private fetchMovieDetailsById(id: string) {
    this.apiService.getMovieDetails(Number(id)).subscribe(movie => this.movie = movie)
  }
}
