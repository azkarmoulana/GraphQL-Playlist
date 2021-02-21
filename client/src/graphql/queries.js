import { gql } from "@apollo/client";

const GET_BOOKS_QUERY = gql`
  {
    books {
      name
      id
    }
  }
`;

const GET_AUTHORS_QUERY = gql`
  {
    authors {
      name
      id
    }
  }
`;

const ADD_BOOK_MUTATION = gql`
  mutation AddBook($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`;

export {
  GET_BOOKS_QUERY as getBooksQuery,
  GET_AUTHORS_QUERY as getAuthorsQuery,
  ADD_BOOK_MUTATION as addBookMutation,
};
