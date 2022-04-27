import React from "react";
import { DescriptionWrappper, AttributesWrapper, AttributeDiv, PriceParagraph, AddToCartButton } from "./DetailStyledComponents";
import NakedButton from "../Shared/StyledComponents/NakedButton";
import { addProduct } from "../../redux/cart/cart";
import { connect } from "react-redux";
import { withRouter } from "../withRouter";
import { Interweave } from 'interweave';

class Detail extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            activeAttributes: Array(10).fill(0),
        }
    }

    handleAddToCart = (product) => {
        const { params, addItemToCart, cartItems } = this.props;
        const { activeAttributes } = this.state;

        const cartItem = {
            id: params,
            quantity: 1,
            product: product,
            attributes: activeAttributes,

        };


        if (!cartItems.map(item => item.id).includes(params)) {
            addItemToCart(cartItem);
        }

    }

    setAttributeDivProperties = (item, attribute, indexOfAttribute, indexOfItem) => {
        const { activeAttributes } = this.state;
        let backgroundColor = 'white';
        let color = 'black';
        let value = item.value;
        let border = '1px solid black';
        if (attribute.type === 'swatch') {
            backgroundColor = item.value;
            value = '';
            if (activeAttributes[indexOfAttribute] === indexOfItem) {
                border = '1px solid black';
            } else {
                border = 'none';
            }
        } else {
            if (activeAttributes) {
                if (activeAttributes[indexOfAttribute] === indexOfItem) {
                    color = 'white';
                    backgroundColor = 'black';
                }
            }

        }

        return { backgroundColor, color, value, border };
    }

    render = () => {
        const { product, currency } = this.props;
        const price = product.prices.find(price => price.currency.symbol === currency);

        return (
            <DescriptionWrappper>
                <h1 style={{ margin: 0 }}>{product.name}</h1>
                <p style={{ fontSize: '30px', margin: 0 }}>{product.brand}</p>
                {product.attributes.map((attribute, indexOfAttribute) => {

                    return <div key={indexOfAttribute}>
                        <p style={{ fontSize: '30px', fontFamily: 'RobotoCondesedBold', marginBottom: '10px' }}>{attribute.name}:</p>
                        <AttributesWrapper>
                            {
                                attribute.items.map((item, indexOfItem) => {
                                    const { backgroundColor, color, value, border } = this.setAttributeDivProperties(item, attribute, indexOfAttribute, indexOfItem);

                                    return <NakedButton key={indexOfItem} onClick={() => {
                                        this.setState(prevState => ({
                                            activeAttributes: {
                                                ...prevState.activeAttributes,
                                                [indexOfAttribute]: indexOfItem
                                            }
                                        }))
                                    }}>
                                        <AttributeDiv
                                            key={item.value}
                                            color={color}
                                            backgroundColor={backgroundColor}
                                            border={border}
                                        >
                                            {value}
                                        </AttributeDiv>
                                    </NakedButton>
                                })
                            }
                        </AttributesWrapper>
                    </div>


                })}
                <PriceParagraph marginTop="30" marginBottom="0">Price:</PriceParagraph>
                <PriceParagraph marginTop="0" marginBottom="30">
                    {`${price.currency.symbol} ${price.amount}`}
                </PriceParagraph>
                <AddToCartButton onClick={() => {
                    if (product.inStock) {
                        this.handleAddToCart(product);
                    }
                }}>
                    ADD TO CART
                </AddToCartButton>

                <div>
                    <Interweave content={product.description} />
                </div>
            </DescriptionWrappper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.cartReducer.cartItems,
        currency: state.uiReducer.currency,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart: (item) => {
            dispatch(addProduct(item));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail));