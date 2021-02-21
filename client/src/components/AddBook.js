import { useQuery, useMutation } from "@apollo/client";
import { useState } from "react";
import { getAuthorsQuery, addBookMutation } from "../graphql/queries";

const AddBook = () => {
  const { loading, error, data } = useQuery(getAuthorsQuery);

  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [authorId, setAuthorId] = useState("");

  const [
    addBook,
    { loading: mutationLoading, error: mutationError },
  ] = useMutation(addBookMutation);

  const onAddBook = (e) => {
    e.preventDefault();
    const data = {
      name,
      genre,
      authorId,
    };

    addBook({ variables: { name, genre, authorId } });
  };

  return (
    <form id="add-book" onSubmit={onAddBook}>
      <div className="field">
        <label>Book name:</label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="field">
        <label>Genre:</label>
        <input type="text" onChange={(e) => setGenre(e.target.value)} />
      </div>
      <div className="field">
        <label>Author:</label>
        <select onChange={(e) => setAuthorId(e.target.value)}>
          <option>Select author</option>
          {data &&
            data.authors.map((author) => {
              return (
                <option key={author.id} value={author.id}>
                  {author.name}
                </option>
              );
            })}
        </select>
      </div>
      <button>+</button>
      {mutationLoading && <p>Adding book...</p>}
    </form>
  );
};

export default AddBook;
