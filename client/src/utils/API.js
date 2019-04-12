import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=intitle:";
// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for

export default {
  search: function(query) {
    return axios.get(BASEURL + query);
  }
  // getBook: function() {
  //   return axios.get("/api/books/" );
  // },
  
  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // // Saves a book to the database
  // saveBook: function(bookData) {
  //   return axios.post("/api/books", bookData);
  // }
};
// return axios.get("/api/books", { params: { q: query } });