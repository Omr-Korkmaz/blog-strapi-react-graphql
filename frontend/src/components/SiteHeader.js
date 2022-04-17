import React from "react";
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
    <div>
      <Link to="/">
        {" "}
        <h1>Reviews</h1>
      </Link>

      <nav>
        <span>Filter it by category:</span>
        {data.categories.data.map((category) => (
          <Link key={category.id} to={`/category/${category.id}`}>
            {category.attributes.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default SiteHeader;
