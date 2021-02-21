import { useQuery } from "@apollo/client";
import { getBooksQuery } from "../graphql/queries";

const BookList = () => {
  const { loading, error, data } = useQuery(getBooksQuery);

  return (
    <div>
      <ul id="book-list">
        {loading && <p>Loading...</p>}
        {data &&
          data.books.map((book) => {
            return <li key={book.id}>{book.name}</li>;
          })}
      </ul>
    </div>
  );
};

export default BookList;
