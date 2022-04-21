import React from "react";
import { useParams } from "react-router-dom";
import './Details.css'
import { useQuery, gql } from "@apollo/client";
import useFetch from "../hooks/useFetch";

const REVIEW = gql`
  query GetReview($id: ID!) {
    review(id: $id) {
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

export default function ReviewDetails() {
  const { id } = useParams();
  // const { loading, error, data } = useFetch('http://localhost:1337/api/reviews/' + id)

  const { loading, error, data } = useQuery(REVIEW, {
    variables: { id: id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error, something is wrong</p>;

  console.log("detailsssss", data);

  return (
    <div className="review-card-detail">
      <img
        className="image"
        src={`http://localhost:1337${data.review.data.attributes.image.data[0].attributes.url}`}
        alt="resim"
      />

      <div className="rating">{data.review.data.attributes.rating}</div>
      <h2>{data.review.data.attributes.title}</h2>

      <p>{data.review.data.attributes.body}</p>
    </div>
  );
}
