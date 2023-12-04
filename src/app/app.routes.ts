import { Routes } from '@angular/router';
import { MovieListComponent } from './modules/movies/components/movie-list/movie-list.component';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { PageNotFoundComponent } from './components/page-not-found.component';

export const routes: Routes = [
    {
        path : 'movies',
        component : MovieListComponent
    },
    {
        path : 'characters',
        component : CharactersListComponent
    },
    {
        path : '**',
        component : PageNotFoundComponent
    },
    {
        path : '', 
        redirectTo : '/characters',
        pathMatch : 'full'
    }
];
