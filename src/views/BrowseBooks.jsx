import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BrowseBooks = () => {
  const { category } = useParams(); //Get category from URL.
  const books = useSelector((state) => state.books.books); //Get books from Redux.
  const [searchTerm, setSearchTerm] = useState(""); //Search state.
  //Filter logic.
  const filteredBooks = books.filter((book) => {
    const matchesCategory = category ? book.category === category : true; // If category param exists, filter by it.
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          book.author.toLowerCase().includes(searchTerm.toLowerCase()); //Search Title or Author.
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="browse-container">
      <h2>{category ? `${category} Books` : "All Books"}</h2>
      
      {/*Search Bar*/}
      <input 
        type="text" 
        placeholder="Search by title or author..." 
        className="search-bar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
       
       {/*Book Cards.*/}
      <div className="book-list">
        {filteredBooks.map((book) => (
          <div key={book.id} className="book-card">
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Category: {book.category}</p>
            <Link to={`/books/details/${book.id}`} className="details-link">View Details</Link>
          </div>
        ))}
        {filteredBooks.length === 0 && <p>No books found.</p>}
      </div>
    </div>
  );
};

export default BrowseBooks;