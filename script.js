"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?","");

if (numberOfFilms < 10){
    alert("Мало");
} else if (numberOfFilms < 30) {
    alert("Нормас");
} else if (numberOfFilms > 30) {
    alert("Много");
} else {
    alert("Что-то не так");
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let i = 0;
    

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



console.log(personalMovieDB);

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

