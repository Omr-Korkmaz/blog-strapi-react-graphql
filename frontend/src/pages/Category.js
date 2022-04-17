import React from "react";
import { useQuery, gql } from "@apollo/client";
import { useParams, Link } from "react-router-dom";

const CATEGORY = gql`

  query GetCategory($id: ID!) {
    category(id: $id) {
      data {
        attributes{
          name,
          reviews {
            data{
              attributes{
                title,
                rating,
                body    
              }
              id  
        
            }
          }


        }
        id


        
     
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

  console.log(data);

  return (
    <div>
  
  <h2>{data.category.data.attributes.name} Games</h2>
{/* {data.category.data.reviews.map((review) => (
  <div key={review.id} className="review-card">
    <div className="rating">{review.data.attributes.rating}</div>
    <h2>{review.data.attributes.title}</h2>

    {review.data.categories.data.map((c) => (
      <small key={c.id}>{c.attributes.name}</small>
    ))}

    <p>{review.data.attributes.body.substring(0, 200)}...</p>
    <Link to={`/details/${review.id}`}>Read more</Link>
  </div>
))} */}
    </div>
  );
}


{/* <h2>{data.category.data.attributes.name} Games</h2>
{data.category.data.reviews.map((review) => (
  <div key={review.id} className="review-card">
    <div className="rating">{review.data.attributes.rating}</div>
    <h2>{review.data.attributes.title}</h2>

    {review.data.categories.data.map((c) => (
      <small key={c.id}>{c.attributes.name}</small>
    ))}

    <p>{review.data.attributes.body.substring(0, 200)}...</p>
    <Link to={`/details/${review.id}`}>Read more</Link>
  </div>
))} */}