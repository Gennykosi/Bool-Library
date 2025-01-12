import React from "react";
import { Link } from "react-router-dom";


const BookCard = ({ book }) => {
  console.log(book);
  const { title, authors, imageLinks, description,publisher,industryIdentifiers } = book.volumeInfo;

  return (
    <div className="border p-4 rounded-lg">
      <Link to="/BookDetailsPage">
      {imageLinks && (
        <img
          src={imageLinks.thumbnail}
          alt={title}
          className="w-full h-auto mb-4"
        />
      )}
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-sm text-gray-600">By {authors?.join(", ")}</p>
      <p className="text-sm mt-2">{description?.substring(0, 100)}...</p>
     
      </Link>
    </div>
  );
};

export default BookCard;
