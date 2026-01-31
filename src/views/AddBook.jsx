import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/booksSlice';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Local state to manage form input values.
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    category: '',
    description: '',
    rating: ''
  });

  const [errors, setErrors] = useState({});

  //Specific handler to update formData state dynamically when inputs change.
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    //Validation
    const newErrors = {};
    if (!formData.title) newErrors.title = "Title is required";
    if (!formData.author) newErrors.author = "Author is required";
    if (!formData.category) newErrors.category = "Category is required";
    if (!formData.rating || formData.rating < 0 || formData.rating > 5) newErrors.rating = "Rating must be 0-5";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    //Add new book to Redux.
    const newBook = {
      ...formData,
      rating: parseFloat(formData.rating), //Ensure rating is stored as a number (float).
      id: Date.now(), //Unique ID
    };
    dispatch(addBook(newBook));

    //Redirect to Browse Books.
    navigate('/browse');
  };

  return (
    <div className="form-container">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input name="title" placeholder="Title" onChange={handleChange} />
          {errors.title && <span className="error">{errors.title}</span>}
        </div>
        <div className="form-group">
          <input name="author" placeholder="Author" onChange={handleChange} />
          {errors.author && <span className="error">{errors.author}</span>}
        </div>
        <div className="form-group">
            <select name="category" onChange={handleChange}>
                <option value="">Select Category</option>
                <option value="Fiction">Fiction</option>
                <option value="Non-Fiction">Non-Fiction</option>
                <option value="Sci-Fi">Sci-Fi</option>
                <option value="Romance">Romance</option>
            </select>
            {errors.category && <span className="error">{errors.category}</span>}
        </div>
        <div className="form-group">
          <textarea name="description" placeholder="Description" onChange={handleChange} />
        </div>
        <div className="form-group">
          <input type="number" name="rating" placeholder="Rating (0-5)" onChange={handleChange} step="0.1" min="0" max="5"/>
          {errors.rating && <span className="error">{errors.rating}</span>}
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;