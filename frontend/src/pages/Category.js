import React from "react";
import { useQuery, gql } from "@apollo/client";
import './Category.css'
import { useParams, Link } from "react-router-dom";

const CATEGORY = gql`
  query GetCategory($id: ID!) {
    category(id: $id) {
      data {
        attributes {
          name

          reviews {
            data {
              attributes {
                title
                body
                rating
                categories {
                  data {
                    attributes {
                      name
                    }
                    id
                  }
                }
                image {
                  data {
                    attributes {
                      url
                      name
                    }
                    id
                  }
                }
              }
              id
            }
          }
        }
        id
      }
    }
  }
`;

export default function Category() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(CATEGORY, {
    variables: { id: id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log("categories, This is the ", data);

  return (
    <div>
    
      {data.category.data.attributes.reviews.data.map((review) => (

        <div key={review.id} className="review-card">
          <div className="rating">{review.attributes.rating} Starts</div>

          <h2>{review.attributes.title}</h2>
          <div> categories :
          {review.attributes.categories.data.map((c) => (
            <small className="category-name" key={c.id}> {c.attributes.name}</small>
          ))}
</div>
          <img
            className="image"
            src={`http://localhost:1337${review.attributes.image.data[0].attributes.url}`}
            alt="resim"
          />

          <p>{review.attributes.body.substring(0, 200)}...</p>
          <Link to={`/details/${review.id}`}>Read more</Link>
        </div>
      ))}
    </div>
  );
}
