// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
   const newArray1 = moviesArray.map(names =>(
        names.director
    ))
    return newArray1
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const newArray2 = moviesArray.filter(
      (movie) => movie.director === "Steven Spielberg"
    );
    let count = 0;
    
    for (let i = 0; i < newArray2.length; i++) {
        for(let j =0 ; j< newArray2[i].genre.length ; j++){
//on peut utiliser le includes
          if (newArray2[i].genre[j] === "Drama") {
            count++;
          }
        }
    }
    return count ;
  }
  howManyMovies(array);

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if(!moviesArray.length){
    return 0
  }else{
    const newArray3 = moviesArray.reduce(function(acc, cumu) {
        if(cumu.score){
         return acc + cumu.score
        }
        return acc
    }, 0)
   let average = newArray3/moviesArray.length
   console.log(Math.round(average*100)/100)
    return Math.round(average*100)/100
  }
  
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  if (!moviesArray.length) {
    return 0
  } else {
    const newArray = moviesArray.filter(elem => elem.genre.includes("Drama"))
    
    const newArray1 = newArray.reduce(function(acc, cumu) {
    if (cumu.score) {
      return acc + cumu.score
    }
     return acc
    }, 0)
    
    if (newArray.length === 0) return 0;
    
    let average = newArray1 / newArray.length
    console.log(Math.round(average * 100) / 100)
    return Math.round(average * 100) / 100
  }
}
dramaMoviesScore(movies)

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArray) {
  if (!moviesArray) {
    return 0
  } else {
    const newArray = [...moviesArray]
    .sort((a, b) => {
      if(a.year < b.year){
        return -1
      }else if(a.year > b.year){
        return 1
      }else{
        if(a.title > b.title){
          return 1
        }else{
          return -1
        }
      }
    })
    console.log(newArray)
    return newArray
    
  }
}



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles



function orderAlphabetically(moviesArray) {
  if (!moviesArray) {
    return 0
  } else {
    const newArray = [...moviesArray]
    .sort((a, b) => {
      if(a.title < b.title){
        return -1
      }
      
    })
    let tab = []
    for (let i= 0 ; i < newArray.length ; i++){
      tab.push(newArray[i].title)
    }
    return tab.slice(0,20)
  }
}

orderAlphabetically(movies) 

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
