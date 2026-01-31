import { useParams, Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BookDetails = () => {
  const { id } = useParams(); //Get ID from URL.
  const books = useSelector((state) => state.books.books);
  const book = books.find((b) => b.id === parseInt(id));
  const navigate = useNavigate();

  if (!book) return <h2>Book not found!</h2>;

  return (
    <div className="details-container">
      {/*Back Button.*/}
      <button onClick={() => navigate('/browse')} className="back-btn">
        ← Back to Browse
      </button>

      {/*Book Info*/}
      <h1>{book.title}</h1>
      <h3>Author: {book.author}</h3>
      <p><strong>Rating:</strong> {book.rating} / 5</p>
      <p><strong>Description:</strong> {book.description}</p>
    </div>
  );
};

export default BookDetails;