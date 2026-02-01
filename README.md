📚 Online Library System

A React-based online library application. This application allows users to browse books, search by title or author, filter by categories, and add new books to the collection using Redux for state management.

🚀 Features

Home Page: specific landing page with a welcome message, book categories, and a section for popular books (Rated 4.5+).
Browse Books: View the full library collection with dynamic filtering by category.
Search Functionality: Real-time search bar to find books by Title or Author.
Book Details: Dynamic routing (`/books/details/:id`) to display specific information about a book.
Add Book: A dedicated form with validation to add new books to the Redux store. New books appear at the top of the browse list.
404 Page: Custom "Page Not Found" route that handles invalid URLs without showing the navigation bar.
Responsive Design: Fully responsive layout using CSS Grid and Flexbox.

🛠️ Tech Stack

Framework: [React](https://react.dev/) (Vite)
State Management: [Redux Toolkit](https://redux-toolkit.js.org/)
Routing: [React Router DOM](https://reactrouter.com/)
Styling: CSS3 (Custom Variables, Grid, Flexbox)

⚙️ Installation & Running

Follow these steps to set up and run the project locally:

1 Clone the repository:
git clone "link"
cd "folder_name"

2 Install Dependencies Make sure you have Node.js installed. Then run:
npm install

3 Run the Development Server Start the application using Vite:
npm run dev

4 Open in Browser Click the link provided in the terminal (usually http://localhost:5173/) to view the app.