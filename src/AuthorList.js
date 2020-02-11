import React from "react";

// Components
import AuthorCard from "./AuthorCard";
import SearchBar from "./SearchBar";

const AuthorList = props => {
  const authorCards = props.authors.map(author => (
    <AuthorCard
      key={author.first_name + author.last_name}
      author={author}
      selectAuthor={props.selectAuthor}
    />
  ));

  const filterAuthors = query => {
    const filteredAuthors = props.authors.filter(author =>
      `${author.first_name} ${author.last_name}`.includes(query)
    );
    console.log(filteredAuthors);
  };
  return (
    <div className="authors">
      <h3>Authors</h3>
      <SearchBar filterAuthors={filterAuthors} />
      <div className="row">{authorCards}</div>
    </div>
  );
};

export default AuthorList;
