import React from "react";
import { DescriptionWrappper, AttributesWrapper, AttributeDiv, PriceParagraph, AddToCartButton } from "./DetailStyledComponents";
import NakedButton from "../Shared/StyledComponents/NakedButton";
import { addProduct } from "../../redux/cart/cart";
import { connect } from "react-redux";
import { withRouter } from "../withRouter";

class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeAttributes: Array(10).fill(0),
        }
    }

    handleAddToCart = (product) => {
        const cartItem = {
            id: this.props.params,
            quantity: 1,
            product: product,
            attributes: this.state.activeAttributes,

        };


        if (!this.props.cartItems.map(item => item.id).includes(this.props.params)) {
            this.props.addItemToCart(cartItem);
        }

    }

    setAttributeDivProperties = (item, attribute, indexOfAttribute, indexOfItem) => {
        let backgroundColor = 'white';
        let color = 'black';
        let value = item.value;
        let border = '1px solid black';
        if (attribute.type === 'swatch') {
            backgroundColor = item.value;
            value = '';
            if (this.state.activeAttributes[indexOfAttribute] === indexOfItem) {
                border = '1px solid black';
            } else {
                border = 'none';
            }
        } else {
            if (this.state.activeAttributes) {
                if (this.state.activeAttributes[indexOfAttribute] === indexOfItem) {
                    color = 'white';
                    backgroundColor = 'black';
                }
            }

        }

        return { backgroundColor, color, value, border };
    }

    render = () => {
        return (
            <DescriptionWrappper>
                <h1 style={{ margin: 0 }}>{this.props.product.name}</h1>
                <p style={{ fontSize: '30px', margin: 0 }}>{this.props.product.brand}</p>
                {this.props.product.attributes.map((attribute, indexOfAttribute) => {

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
                    {`${this.props.product.prices[0].currency.symbol} ${this.props.product.prices[0].amount}`}
                </PriceParagraph>
                <AddToCartButton onClick={() => {
                    this.handleAddToCart(this.props.product);
                }}>
                    ADD TO CART
                </AddToCartButton>
                <div dangerouslySetInnerHTML={{ __html: this.props.product.description }} />
            </DescriptionWrappper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.cartReducer.cartItems,
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