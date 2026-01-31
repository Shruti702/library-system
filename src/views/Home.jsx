import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Home = () => {
  const categories = ["Fiction", "Non-Fiction", "Sci-Fi", "Romance"];
  
  //Get all books from the Redux store.
  const books = useSelector((state) => state.books.books);

  //Show books with a rating higher than 4.5, or just take the first 4.
  const popularBooks = books.filter((book) => book.rating >= 4.5).slice(0, 4);

  return (
    <div className="home-container">
      {/*Hero Section*/}
      <div className="hero-section">
        <h1>Welcome to the Online Library</h1>
        <p>
          Discover your next favorite book. Browse our collection, 
          search by author, or add your own discoveries to our growing library.
        </p>
      </div>

      {/*Categories Section*/}
      <section className="categories-section">
        <h2>Explore Categories</h2>
        <div className="category-list">
          {categories.map((cat) => (
            <Link key={cat} to={`/books/${cat}`} className="category-card">
              {cat}
            </Link>
          ))}
        </div>
      </section>

      <section className="popular-section">
        <h2>Popular Books</h2>
        <div className="popular-books">
            {/*Map through the dynamic "popularBooks" array */}
            {popularBooks.map((book) => (
                <div key={book.id} className="book-card">
                    <h3>{book.title}</h3>
                    <p>By {book.author}</p>
                    <p><strong>Rating:</strong> {book.rating} ★</p> 
                    <Link to={`/books/details/${book.id}`} className="details-link">
                        View Details
                    </Link>
                </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default Home;