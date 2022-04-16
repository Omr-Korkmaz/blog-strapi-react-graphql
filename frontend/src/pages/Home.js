import React from 'react'
import useFetch from '../hooks/useFetch'
import { Link } from 'react-router-dom'

export default function Homepage() {
  const {loading, error, data } = useFetch('http://localhost:1337/api/reviews')

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error, something is wrong</p>

  console.log(data.data)

  return (
    <div>
      {data.data.map(review => (
        <div key={review.id} >
          
          <div >{review.attributes.rating}</div>
          <h2>{review.attributes.title}</h2>
          
          <small>console list</small>

          <p>{review.attributes.body.substring(0, 250)}...</p>
          <Link to={`/details/${review.id}`}>Read more</Link>
        </div>
      ))}
    </div>
  )
}