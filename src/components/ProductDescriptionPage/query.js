import { gql } from '@apollo/client';

const productQuery = (productId) => {
    return gql`
    query  {
        product(id:"${productId}"){
            name
            inStock
            attributes{
              name
              type
              items{
                displayValue
                value
              }
            }
            prices{
              currency{
                label
                symbol
              }
              amount
            }
            brand
            category
            description
            gallery
            id
        }
        
    }
    `
}

export default productQuery;