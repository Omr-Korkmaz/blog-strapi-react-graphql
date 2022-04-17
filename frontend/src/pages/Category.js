import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { useParams, Link } from 'react-router-dom'

const CATEGORY= gql`
query GetCategory($id: ID!) {
  category(id: $id) {
    data {
      attributes{
        name,

        reviews{
          data{
            attributes{
              title,
              body,
              rating,
              categories{
                data{
                  attributes{
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
     
    }
  }
}
`


export default function Category() {
  const { id } = useParams()
  const { loading, error, data } = useQuery(CATEGORY, {
    variables: { id: id }
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  console.log('categories, This is the ', data)

  return (
    <div>
  
    </div>
  )
}
