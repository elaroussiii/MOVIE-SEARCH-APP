import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ApiService} from '../services/api.service'; // Importe ton service
import {Movie} from '../models/movie.model'; // Interface pour le typage
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardTitle
} from '@angular/material/card';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatCardTitle, MatCard, MatCardHeader, MatCardContent, MatCardActions, MatCardImage, MatButton],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // 1. Déclaration des variables
  movies: Movie[] = []; // Liste des films
  isLoading = true;     // Pour afficher un loader

  // 2. Injection du service API
  constructor(private api: ApiService) {
  }

  // 3. Méthode appelée à l'initialisation
  ngOnInit() {
    this.loadMovies();
  }

  // 4. Logique métier : Chargement des films
  loadMovies() {
    this.isLoading = true;
    this.api.getPopularMovies().subscribe({
      next: (movies) => {
        this.movies = movies; // Stocke les films reçus
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Erreur API :', err);
        this.isLoading = false;
      }
    });
  }

  // 5. Exemple de méthode supplémentaire
  refreshMovies() {
    this.loadMovies();
  }
}
