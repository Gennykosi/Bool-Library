import React, { useState } from "react";
import BookCard from "../components/BookCard";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);

  const fetchBooks = async (e) => {
    e.preventDefault();
    const apiKey = "AIzaSyCThZP8OmZ4BjyVMNsXBjHGV28WlwXriL4";
    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
      query
    )}&key=${apiKey}`;
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setBooks(data.items || []);
    } catch (error) {
      console.error("Error fetching books:", error.message);
    }
  };

  return (
    <form onSubmit={fetchBooks}class="form">
    <div className="p-4">
      <h1 className="text-blue-500  font-bold">Search for Books</h1>
      <div className="mt-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border p-2 rounded w-full"
          placeholder="Enter book title or author"
        />
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Search
        </button>
      </div>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {books.map((book) => (
          <BookCard key={book.id} book={book} onClick={(BookDetailsPage) => {}} />
        ))}
      </div>
    </div>
    </form>
  );
};

export default SearchPage;
