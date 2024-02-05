class Library {
    #books;
  
  
    /**
     * 
     * @param {Array} books 
     */
    constructor(books) {
      if (books.length > 0 && books.some((book) => this.#books.includes(book))) {
        throw new Error("Duplicate books not allowed.");
      }
  
      this.#books = books;
    }
  
    get allBooks() {
      return this.#books;
    }
  
    /**
     * 
     * @param {string} title 
     */
    addBook(title) {
      if (this.#books.find((book) => book === title)) {
        throw new Error(`Book ${title} already exists.`);
      }
  
      this.#books.push(title);
    }
  
    /**
     * 
     * @param {string} title 
     */
    removeBook(title) {
      const index = this.#books.indexOf(title);
  
      if (index === -1) {
        throw new Error(`Book ${title} does not exist.`);
      }
  
      this.#books.splice(index, 1);
    }
  
    /**
     * 
     * @param {string} title 
     * @returns bool
     */
    hasBook(title) {
      return this.#books.includes(title);
    }
  }
  
