import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
// import Nav from "../components/Nav";
// import Input from "../components/Input";
import SearchForm from "../components/SearchForm";
// import Button from "../components/Button";
import API from "../utils/API";
import { BookList, BookListItem } from "../components/BookList";
import { Container, Row, Col } from "../components/Grid";

class SearchBooks extends Component {
  state = {
    books: [],
    saved: false,
    bookSearch: ""
  };
  componentDidMount() {
    this.searchBooks("1984");
  }
  // handleInputChange = event => {
  //   // Destructure the name and value properties off of event.target
  //   // Update the appropriate state
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };
  searchBooks = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };
  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // handleFormSubmit = event => {
  //   // When the form is submitted, prevent its default behavior, get recipes update the recipes state
  //   event.preventDefault();
  //   API.searchBooks(this.state.bookSearch)
  //     .then(res => this.setState({ books: res.data }))
  //     .catch(err => console.log(err));
  // };
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBooks(this.state.search);
  };
  handleSaveClick = function(event) {
    this.setState({saved: true});
    const bookData = {
        title: this.props.title,
        authors: this.props.authors,
        link: this.props.link,
        image: this.props.img,
        description: this.props.description
    }
    event.preventDefault();
    API.addBookToDB(bookData).then(
        (response) => {
            console.log(response);
        }
    ).catch(
        (err) => {
            console.log(err);
        }
    );
}

  render() {
    return (
      <div>
        
        <Jumbotron />
        <Container>
          <Row>
            <Col size="md-12">
              
                <Container>
                  <Row>
                    {/* <Col size="xs-9 sm-10">
                      <Input
                        name="bookSearch"
                        value={this.state.bookSearch}
                        onChange={this.handleInputChange}
                        placeholder="Search For a Book"
                      />
                    </Col>
                    <Col size="xs-3 sm-2">
                      <Button
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                      >
                        Search
                      </Button>
                    </Col> */}
                    <SearchForm>

                    </SearchForm>
                  </Row>
                </Container>
              
            </Col>
          </Row>
          <Row>
            <Col size="xs-12">
              {!this.state.books.length ? (
                <h1 className="text-center">No Books to Display</h1>
              ) : (
                <BookList>
                  {this.state.books.map(book => {
                    return (
                      <div>
                      <BookListItem
                        key={book.volumeInfo.title}
                        title={book.volumeInfo.title}
                        author={book.volumeInfo.authors}
                        description={book.volumeInfo.description}
                        href={book.volumeInfo.previewLink}
                        onClick={this.handleSaveClick}
                        // thumbnail={book.volumeInfo.imageLinks.smallThumbnail}
                        
                      />
                      
                      </div>
                    );
                  })}
                </BookList>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default SearchBooks;