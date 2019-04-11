import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { BookList, BookListItem } from "../components/BookList";
import { Container, Row, Col } from "../components/Grid";

class Saved extends Component {
  state = {
    saved: true,
    savedBooks: []
    
  };
  omponentWillMount() {
    API.getBooks().then(
        (response) => {
            this.setState({savedBooks: response.data});
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
            <Col size="xs-12">
              {!this.state.savedBooks.length ? (
                <h1 className="text-center">No Books to Display</h1>
              ) : (
                <BookList>
                  {this.state.savedBooks.map(book => {
                    return (
                      <BookListItem
                        key={book.volumeInfo.title}
                        title={book.volumeInfo.title}
                        author={book.volumeInfo.authors}
                        description={book.volumeInfo.description}
                        href={book.volumeInfo.previewLink}
                        // thumbnail={book.volumeInfo.imageLinks.smallThumbnail}
                      />
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

export default Saved;