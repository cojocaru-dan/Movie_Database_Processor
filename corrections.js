import {toExport as movies} from "./data.js";


// YOUR CODE COMES HERE
function dramas(array) {
	const result = [];
	for (const movie of array) {
		if (movie["genres"].includes("Drama")) {
			result.push(movie["title"]);
		}
	}
	return result;
}
console.log(dramas(movies));

function findByGenre(genre, array) {
	const newArr = [];
	for (const movie of array) {
		if (movie["genres"].includes(genre)) {
			newArr.push(movie["title"]);
		}
	}
	return newArr;
}
console.log(findByGenre("Sci-Fi", movies));
console.log(findByGenre("Romance", movies));
console.log(findByGenre("Comedy", movies));

function longestMovie(array) {
	let longestRt = array[0];
	for (const m of array) {
		if (m.runtime > longestRt.runtime) {
			longestRt = m;
		}
	}
	return longestRt;
}
console.log(longestMovie(movies));

function longestMovieByGenre(genre, array) {
	let longestM = array[0];
	for (const movie of array) {
		if (movie.genres.includes(genre) && movie["runtime"] > longestM["runtime"]) {
			longestM = movie;
		}
	}
	return longestM;
} 
console.log(longestMovieByGenre("Romance", movies));
console.log(longestMovieByGenre("Sci-Fi", movies));
console.log(longestMovieByGenre("Mystery", movies));






// DO NOT MODIFY THE CODE BELOW THIS LINE

let toExport;

try {
	toExport = [
		{name: "dramas", content: dramas, type: "function"},
        {name: "findByGenre", content: findByGenre, type: "function"},
        {name: "longestMovie", content: longestMovie, type: "function"},
        {name: "longestMovieByGenre", content: longestMovieByGenre, type: "function"}
	]
} catch (error) {
	toExport = {error: error.message}
}

export {toExport}
