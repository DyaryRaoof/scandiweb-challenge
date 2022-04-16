import { gql } from '@apollo/client';

const categoryQuery = (categoryName) => {
  return gql`
    query  {
        category(input:{title:"${categoryName}"}){
            products{
              id
              name
              brand
              gallery
              inStock
              attributes{
                type
                name
                items{
                  value
                }
              }
              prices{
                currency{
                  symbol
                  label
                }
                amount
              }
            }
          }
    }
    `
}

export default categoryQuery;