import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

export default function ReviewDetails() {
  const { id } = useParams()
  const { loading, error, data } = useFetch('http://localhost:1337/api/reviews/' + id)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error, something is wrong</p>

  console.log(data)

  return (
    <div >
      <div >{data.data.attributes.rating}</div>
      <h2>{data.data.attributes.title}</h2>

      

      <p>{data.data.attributes.body}</p>
    </div>
  )
}