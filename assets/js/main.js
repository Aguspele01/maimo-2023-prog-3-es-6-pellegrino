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

const mimusica = songs [0].title
console.log('Ex 4', mimusica)

// Example 5

const eagle = songs.find(HotelCalifornia => HotelCalifornia.artist === 'Eagles')
console.log('Ex 5', eagle)

// Example 6 (No resuelto aún)




// Example 7

const infoCompleto =  songs.map (song => `${song.title} - ${song.artist} (${song.year})`)
console.log('Ex 7', infoCompleto)

// Example 8

const beatles = songs.filter(({artist}) => artist === 'The Beatles')
console.log('Ex 8', beatles)


// Example 9 (No resuelto aún)



// Example 10 (No resuelto aún)



// Example 11 (No resuelto aún)




// Example 12 

const firstSong = songs [0]
const {title, artist,year} = firstSong

console.log('Ex 12', `${title} de ${artist} (${year})`)


// Example 13 (No resuelto aún)



// Example 14 (No resuelto aún)



// Example 15 (No resuelto aún)



// Example 16

const canciones80s = songs.some ((song) => song.year >="1980" )
console.log('Ex 16', canciones80s)


// Example 17

const Beatlessong = (title, artist, year) => {
return `${artist} released ${title} in ${year}`;
}

Beatlessong('Let it Be','The Beatles',1970)

const infoBeat = Beatlessong('Let it Be','The Beatles',1970);
console.log('Ex 17',infoBeat)

// Example 18
const songArtist = songs.map (song => `${song.artist}`)
console.log('Ex 18.', songArtist)


// Example 19 (No resuelto aún)



// Example 20

const songYear = songs.map ((song) => `${song.year}`)
console.log('Ex 20 (a)', songYear)

//Quiero que me aparezcan los artistas de 1975 en adelante
//const songDespues = songs.filter(({year}) => year === '1975' || parseInt(year) >= 1975)
//console.log('Ex 20 (b)', songDespues)




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

19. Create a function called randomMovie that returns one movie from the songs array randomly. Log the call of this function 3 times.

20. Write your own function using at least 3 concepts.

*/
