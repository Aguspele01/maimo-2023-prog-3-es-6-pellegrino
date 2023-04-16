// Example 1

import songs from "./songs.js";
console.log('Ex 1.', songs)

// Example 2

const songName = songs.map (song => `<h2>${song.title}</h2>`)
console.log('Ex 2.', songName)

// Example 3

const songAntes = songs.filter(({year}) => year === '1975' || parseInt(year) <= 1975)
console.log('Ex 3', songAntes)

// Example 4

/*const mimusica = songs [0].title
console.log('Ex 4', mimusica)*/

const {title: mimusica} = songs[0];
console.log ('Ex 4',mimusica) 


// Example 5

const eagle = songs.find(HotelCalifornia => HotelCalifornia.artist === 'Eagles')
console.log('Ex 5', eagle)

// Example 6

const sum = (...values) => values.reduce ((acc, curr) => acc + curr, 0)
console.log ('Ex 6', sum (1,2,10,20))

// Example 7

const infoCompleto =  songs.map (song => `${song.title} - ${song.artist} (${song.year})`)
console.log('Ex 7', infoCompleto)

// Example 8

/*const beatles = songs.filter(({artist}) => artist === 'The Beatles')
console.log('Ex 8', beatles)*/

const beatles = songs.filter(({artist}) => artist === 'The Beatles').map (({title}) => title) 
console.log('Ex 8', beatles)


// Example 9

const totalYears = songs.reduce ((acc, curr) => acc + curr.year, 0)
//const averageYears = totalYears / songs.length

console.log('Ex 9', totalYears)

// Example 10


// Example 11

const longestSong = songs.find(({title}) => title.length === Math.max(...songs.map(({title})=> title.length))
);
console.log('Ex 11', longestSong)

// Example 12 

const firstSong = songs [0]
const {title, artist,year} = firstSong

console.log('Ex 12', `${title} de ${artist} (${year})`)


// Example 13


// Example 14

// Example 15

const songsLongTitltes = songs.every(song => song.length >= 5);
console.log('Ex 15',songsLongTitltes);


// Example 16

const canciones80s = songs.some ((song) => song.year >="1980" )
console.log('Ex 16', canciones80s)


// Example 17

/*const Beatlessong = (title, artist, year) => {
return `${artist} released ${title} in ${year}`;
}

Beatlessong('Let it Be','The Beatles',1970)

const infoBeat = Beatlessong('Let it Be','The Beatles',1970);
console.log('Ex 17',infoBeat)*/

const letitbe = songs.find((song) => song.title === 'Let It Be')
const infoBeat = `${letitbe.artist} released ${letitbe.title} in ${letitbe.year}`
console.log('Ex 17', infoBeat)

// Example 18
const songArtist = songs.map (song => `${song.artist}`)
console.log('Ex 18.', songArtist)


// Example 19

function randomSong() {
    const randomIndex = Math.floor(Math.random() * songs.length);
    return songs[randomIndex];
  }

  console.log('Ex 19',randomSong());
  console.log(randomSong());
  console.log(randomSong());


// Example 20

//Quiero que me aparezcan todos los años
const songYear = songs.map ((song) => `${song.year}`)
console.log('Ex 20 (a)', songYear)

//Quiero que me aparezcan los artistas de 1975 en adelante
const songDespues = songs.filter(({year}) => year === '1975' || parseInt(year) >= 1975).map(({artist}) => artist)
console.log('Ex 20 (b)', songDespues)

//Descripción de la canción Stairway to Heaven
const toheaven = songs.find((song) => song.title === 'Stairway to Heaven')
const infoheaven = `In ${toheaven.year}, the singer called ${toheaven.artist} released the song called ${toheaven.title}`
console.log('Ex 20 (c)', infoheaven)


/*
Exercises

Tips: 
1. To show the result of each exercise write a consol log with the form: console.log('Ex 1.', value or function).
2. Make some research about the usage of reduce, some and many.
3. Create a js file called utils.js and place all helper functions in it. (Ex 10 and 14)

1) Import songs array using modules. -------------------------------------------------------------------------------------------------

2. Use the map function to create a new array with the title of each song in uppercase letters.  ------------------------------------

3. Use the filter function to create a new array with all the songs released before 1975.  ------------------------------------------

4. Use destructuring to create a variable that stores the title of the first song in the array.  ------------------------------------

5. Use the find function to get the object representing the song "Hotel California".  -----------------------------------------------

6. Use the rest operator to create a function that takes any number of arguments and returns their sum. (Tip: Use reduce)

7. Use the map function and template literals to create a new array with strings in the format "Title - Artist (Year)" for each song.--

8. Use destructuring and the filter function to create a new array with the titles of all the songs by The Beatles.--------------------

9. Use arrow functions and the reduce function to calculate the total number of years between all the songs' release dates. (Tip: Use reduce)

10. Create a module that exports a function to calculate the average release year of the songs in the input array. (Tip: Use reduce.)

11. Use the find function to get the object representing the song with the longest title.

12. Use destructuring and template literals to log the title, artist and year of the first element of the array. ----------------------

13. Use the rest operator to create a new array without the first element.

14. Import the filter() function from a utils.js module and use it to create a new array with all the songs that have "Love" in the title.

15. Use the every() method to check if all the songs have titles that are 5 or more characters long.

16. Use the some() method to check if there are any songs from the 80s.  --------------------------------------------------------------

17. Use a template literal to create a string that says "The Beatles released Let It Be in 1970."  ------------------------------------

18. Use the map() method to create a new array with just the artist names.  -----------------------------------------------------------

19. Create a function called randomSong that returns one song from the songs array randomly. Log the call of this function 3 times.

20. Write your own function using at least 3 concepts.

*/
