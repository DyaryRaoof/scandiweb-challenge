import React from "react";
import { DescriptionWrappper, AttributesWrapper, AttributeDiv, PriceParagraph, AddToCartButton } from "./DetailStyledComponents";
import NakedButton from "../Shared/StyledComponents/NakedButton";

class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeAttributes: Array(5).fill({ activeItemIndex: 0 }),
        }
    }

    render = () => {
        return (
            <DescriptionWrappper>
                <h1 style={{ margin: 0 }}>{this.props.product.name}</h1>
                <p style={{ fontSize: '30px', margin: 0 }}>{this.props.product.brand}</p>
                {this.props.product.attributes.map((attribute, indexOfAttribute) => {

                    return <div>
                        <p style={{ fontSize: '30px', fontFamily: 'RobotoCondesedBold', marginBottom: '10px' }}>{attribute.name}:</p>
                        <AttributesWrapper>
                            {
                                attribute.items.map((item, indexOfItem) => {
                                    let backgroundColor = 'white';
                                    let color = 'black';
                                    let value = item.value;
                                    let border = '1px solid black';
                                    if (attribute.type === 'swatch') {
                                        backgroundColor = item.value;
                                        value = '';
                                        if (this.state.activeAttributes[indexOfAttribute].activeItemIndex === indexOfItem) {
                                            border = '1px solid black';
                                        } else {
                                            border = 'none';
                                        }
                                    } else {
                                        if (this.state.activeAttributes) {
                                            if (this.state.activeAttributes[indexOfAttribute].activeItemIndex === indexOfItem) {
                                                color = 'white';
                                                backgroundColor = 'black';
                                            }
                                        }

                                    }

                                    return <NakedButton onClick={() => {
                                        this.setState(prevState => ({
                                            activeAttributes: {
                                                ...prevState.activeAttributes,
                                                [indexOfAttribute]: {
                                                    activeItemIndex: indexOfItem
                                                }
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
                <AddToCartButton>
                    ADD TO CART
                </AddToCartButton>
                <div dangerouslySetInnerHTML={{ __html: this.props.product.description }} />
            </DescriptionWrappper>
        )
    }
}

export default Detail;