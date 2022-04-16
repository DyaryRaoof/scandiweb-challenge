import React from 'react';
import styled from 'styled-components';
import { gql } from '@apollo/client';
import { Query } from '@apollo/react-components';

const PageWrapper = styled.div`
  margin: 0 110px;
  `
const ItemCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    padding: 10px;
    background-color: #fff;
    &:hover {
        box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
        border-radius: 5px;
    };
    max-width: 600px;
    max-height: 680px;
    `

const ItemsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    `

const ItemImage = styled.img`
        overflow: hidden;
        object-fit: contain;
        width: 100%;
        height: 630px;
        `
const CATEGORY = gql`
    query  {
        category(input:{title:"all"}){
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



class ProductListPage extends React.Component {
    render() {
        return (
            <PageWrapper>
                <h1>Category Name</h1>
                <ItemsWrapper>
                    <Query query={CATEGORY}>
                        {({ loading, error, data }) => {
                            if (loading) return <p>Loading...</p>;
                            if (error) return <p>Error :(</p>;

                            return data.category.products.map((product) => {
                                return (

                                    <ItemCard key={product.id}>
                                        <ItemImage src={product.gallery[0]} alt="item" />
                                        <p style={{ textAlign: 'left', width: '100%', fontFamily: 'RailwayThin' }}>{product.name}</p>
                                        <p style={{ textAlign: 'left', width: '100%', margin: 0 }}>{`${product.prices[0].currency.symbol} ${product.prices[0].amount}`}</p>
                                    </ItemCard>
                                )
                            })
                        }
                        }
                    </Query>
                </ItemsWrapper>
            </PageWrapper>
        )
    }
}

export default ProductListPage;