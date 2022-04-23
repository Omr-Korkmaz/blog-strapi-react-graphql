import React from "react";
import { useQuery, gql } from "@apollo/client";
// import useFetch from '../hooks/useFetch'
import { Link } from "react-router-dom";

const REVIEWS = gql`
  query GetReviews {
    reviews {
      data {
        attributes {
          title
          rating
          body
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
`;

export default function Homepage() {
  // const {loading, error, data } = useFetch('http://localhost:1337/api/reviews') // it is used for RES but now I use graphql that's why no need it...

  const { loading, error, data } = useQuery(REVIEWS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error, something is wrong</p>;

  console.log(data.reviews.data);
  console.log(
    "Image URL",
    data.reviews.data[1].attributes.image.data[0].attributes.url
  );

  return (
    <div className="container">
      {data.reviews.data.map((review) => (

        <div key={review.id} className="review-card">
          <div className="review-card__rating">{review.attributes.rating} rating</div>
          <img className="review-card__image"
            src={`http://localhost:1337${review.attributes.image.data[0].attributes.url}`}
            alt="resim"
          />
          <h2 >{review.attributes.title}</h2>
         

          <p>{review.attributes.body.substring(0, 250)}...</p>
          <Link to={`/details/${review.id}`}>Read more</Link>
        </div>
      ))}
    </div>
  );
}
