import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/Home';
import BrowseBooks from './views/BrowseBooks';
import BookDetails from './views/BookDetails';
import AddBook from './views/AddBook';
import NotFound from './views/NotFound';
import './index.css';

//Layout component to include Navbar.
const Layout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*Routes WITH Header*/}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<BrowseBooks />} /> {/*All books*/}
          <Route path="/books/:category" element={<BrowseBooks />} /> {/*Filtered*/}
          <Route path="/books/details/:id" element={<BookDetails />} />
          <Route path="/add-book" element={<AddBook />} />
        </Route>

        {/*Route WITHOUT Header (404)*/}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;