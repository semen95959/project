"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?","");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const firstFilm = prompt("Один из последних просмотренных фильмов?", ""),
    firstEstimation = +prompt("Ваша оценка",""),
    secondFilm = prompt("Один из последних просмотренных фильмов?", ""),
    secndEstimation = +prompt("Ваша оценка","");


personalMovieDB.movies[firstFilm] = firstEstimation;
personalMovieDB.movies[secondFilm] = secndEstimation;

console.log(personalMovieDB);