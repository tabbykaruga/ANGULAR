import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './components/movie-list/movie-list.component';

const movieRoutes :Routes = [
    {
        path : 'movies',
        component : MovieListComponent,
    }
];
@NgModule({
    imports: [RouterModule.forChild(movieRoutes)],
    exports:[RouterModule],
})

export class MoviesRoutingModule { }