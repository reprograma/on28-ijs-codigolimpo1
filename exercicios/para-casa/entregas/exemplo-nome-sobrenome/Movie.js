class Movie {
	#title;

	constructor(title) { this.#title = title; }
    get title() { return this.#title; }
}

module.exports = Movie;