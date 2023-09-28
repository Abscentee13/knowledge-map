import { combineReducers } from 'redux';
import {genresReducer} from './genres/genresReducer';
import {movieReducer} from './movies/moviesReducer';

const rootReducer = combineReducers({


    genres: genresReducer,
    movies: movieReducer
});

export {rootReducer};