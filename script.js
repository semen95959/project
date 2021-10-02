"use strict";

let numberOfFilms;

function start() {
    
    numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?","");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {

        numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?","");

    }


}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true
};

function checkPrivat(test) {

    if (!test) {
        console.log(personalMovieDB);
    }

}

checkPrivat(personalMovieDB.privat);

function detectPersonalLevel() {

    if (numberOfFilms < 10){
        alert("Мало");
    } else if (numberOfFilms < 30) {
        alert("Нормас");
    } else if (numberOfFilms > 30) {
        alert("Много");
    } else {
        alert("Что-то не так");
    }

}

detectPersonalLevel();



function rememderMyFilms () {

    for (let i = 0; i < 2; i++)  {
    
    

        let a = prompt("Один из последних просмотренных фильмов?", "");
        let b = +prompt("Ваша оценка",""); 
        
        if (a != null && a != "" && a.length < 10){
            personalMovieDB.movies[a] = b;
        } else {
            alert("Не-не, давай ещё раз");
            i--;
        }
            
        
    } 

}  

rememderMyFilms();

function writeMyGenres(gen) {
    
    for (let i = 1; i < 4; i++) {
        gen = prompt("Ваш топ-" + i + " жанр?");
        while (gen == '' || gen == null || !isNaN(gen)) {

            gen = prompt(`Ваш топ-${i} жанр?`,"");

        }
        personalMovieDB.genres[i-1] = i + ". " + gen;
    }
}

writeMyGenres();

/* if (4 == 9) {
    console.log("Ok!");
} else {
    console.log("Error");
}; */



/* (num == 50) ? console.log("Ok!") : console.log("Error"); */

/* switch (num) {
    case 49:
        console.log("Неверно");
        break;
    case 51:
        console.log("Неверно");
        break;
    case 50:
        console.log("Верно");
        break;
    default:
        console.log("Не в этот раз");
} */

