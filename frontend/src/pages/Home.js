import React from 'react'
import { useQuery, gql } from "@apollo/client";
// import useFetch from '../hooks/useFetch'
import { Link } from 'react-router-dom'


const REVIEWS = gql`
  query GetReviews {
    reviews{
      data{
        attributes{
          title,
          rating,
          body,
          image{
            data{
         
              attributes{
                url,
                name
              
              }
            id}
            
          }
        }
        id
      }
    }
  }
`;




export default function Homepage() {
  // const {loading, error, data } = useFetch('http://localhost:1337/api/reviews') // it is used for resfull but now i use graphql that's why no need now...


  const {loading, error, data } = useQuery(REVIEWS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error, something is wrong</p>

  console.log(data.reviews.data)
  console.log('Image URL', data.reviews.data[1].attributes.image.data[0].attributes.url)


  return (
    <div>
      {data.reviews.data.map(review => (
        <div key={review.id} >

          <div >{review.attributes.rating}</div>
          <h2>{review.attributes.title}</h2>
          <img src={`http://localhost:1337${review.attributes.image.data[0].attributes.url}`} alt='resim'/>

          <p>{review.attributes.body.substring(0, 250)}...</p>
          <Link to={`/details/${review.id}`}>Read more</Link>
        </div>
      ))}
    </div>
  )
}
{/* <img src={`http://localhost:1337/${review.attributes.image.data[0].attributes.url}`} alt='resim'/> */}
