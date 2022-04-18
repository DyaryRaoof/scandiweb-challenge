import React from 'react';
import { Query } from '@apollo/react-components';
import { connect } from "react-redux";
import categoryQuery from './query';
import { PageWrapper, ItemCard, ItemsWrapper, ItemImage, OutOfStockDiv, OutOfStockHeader, ItemCardButton } from './StyledComponents';
import { withRouter } from '../withRouter';




class ProductListPage extends React.Component {
    render() {

        const CATEGORY = categoryQuery(this.props.categoryName)

        return (
            <PageWrapper>
                <h1>{this.props.categoryName}</h1>
                <ItemsWrapper>
                    <Query query={CATEGORY}>
                        {({ loading, error, data }) => {
                            if (loading) return <p>Loading...</p>;
                            if (error) return <p>Error :(</p>;
                            return data.category.products.map((product) => {
                                const price = product.prices.find(price => price.currency.symbol === this.props.currency);
                                return (

                                    <ItemCard key={product.id}>
                                        <OutOfStockDiv>
                                            <OutOfStockHeader inStock={product.inStock}>{!product.inStock ? 'Out of stock' : ''}</OutOfStockHeader>
                                            <div style={{ zIndex: 1 }}>
                                                <ItemCardButton onClick={() => { this.props.navigate(`/product-description/${product.id}`) }} inStock={product.inStock}>
                                                    <ItemImage src={product.gallery[0]} alt="item" />
                                                    <p style={{ textAlign: 'left', width: '100%', fontFamily: 'RailwayThin' }}>{product.name}</p>
                                                    <p
                                                        style={{ textAlign: 'left', width: '100%', margin: 0 }}>
                                                        {`${price.currency.symbol} ${price.amount}`}
                                                    </p>
                                                </ItemCardButton>
                                            </div>
                                        </OutOfStockDiv>

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

function mapStateToProps(state) {
    return { categoryName: state.uiReducer.categoryName, currency: state.uiReducer.currency };
}

export default connect(mapStateToProps)(withRouter(ProductListPage));