import React, { useState } from "react";
import "./SiteHeader.css";
import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

const CATEGORIES = gql`
  query getCategories {
    categories {
      data {
        attributes {
          name
        }
        id
      }
    }
  }
`;

const SiteHeader = () => {
  const { loading, error, data } = useQuery(CATEGORIES);
  if (loading) return <p>Loading categories...</p>;
  if (error) return <p>Error fetching categories</p>;
  console.log("Category", data);
  return (
    <div className="navbar">
      <span className="navbar__logo">
        <Link className="navbar__link" to="/">
          {" "}
          <h1>Blog Posts</h1>
        </Link>
      </span>
      <div className="navbar__items">
        <span>Filter it by category:</span>
        {data.categories.data.map((category) => (
          <Link
            className="navbar__link"
            key={category.id}
            to={`/category/${category.id}`}
          >
            {category.attributes.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SiteHeader;
