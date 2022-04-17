import React from 'react';
import { withRouter } from '../withRouter';
import { Query } from '@apollo/react-components';
import productQuery from './query';
import styled from 'styled-components';
import NakedButton from '../Shared/StyledComponents/NakedButton';


const PageWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 0  100px;
`;


const SideImage = styled.img`
    width: 150px;
    height: 150px;
    margin-right: 10px;
    object-fit: contain;
`;

const ManinImage = styled.img`
    width: 1100px;
    height: 1100px;
    object-fit: cover;
    object-position: 0% 0%;

`;

const SideImagesDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const AttributeDiv = styled.div`
    width: 60px;
    height: 40px;
    background-color: ${props => props.backgroundColor};
    color: ${props => props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    border: ${props => props.border};
    `;

const AttributesWrapper = styled.div`
    display: flex;
    `;

const DescriptionWrappper = styled.div`
margin:0 100px;
padding:0 10px;
width:310px;
`;

const AddToCartButton = styled(NakedButton)`
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: #5ECE7B;
    color: white;
    font-size: 16px;
    padding: 10px;
    width: 292px;
    height: 52px;
`;

const PriceParagraph = styled.p`
    font-size: '30px'; 
    font-family: 'RobotoCondesedBold';
    margin-top: ${props => props.marginTop};
    margin-bottom: ${props => props.marginBottom};
    font-size: 30px;
`;




class ProductDescriptionPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeImageIndex: 0,
            activeAttributes: Array(5).fill({ activeItemIndex: 0 }),
        }
    }


    render() {
        const { id } = this.props.params;
        const PRODUCT = productQuery(id);
        return (
            <Query query={PRODUCT}>
                {({ loading, error, data }) => {
                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>Error :(</p>;
                    console.log(data);
                    return (

                        <PageWrapper>
                            <SideImagesDiv>
                                {
                                    data.product.gallery.map((image, index) => {
                                        return <NakedButton onClick={() => { this.setState({ activeImageIndex: index }) }}>
                                            <SideImage key={index} src={image} alt="item" />
                                        </NakedButton>
                                    })
                                }
                            </SideImagesDiv>
                            <ManinImage src={data.product.gallery[this.state.activeImageIndex]} alt="item" />
                            <DescriptionWrappper>
                                <h1 style={{ margin: 0 }}>{data.product.name}</h1>
                                <p style={{ fontSize: '30px', margin: 0 }}>{data.product.brand}</p>
                                {data.product.attributes.map((attribute, indexOfAttribute) => {

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
                                    {`${data.product.prices[0].currency.symbol} ${data.product.prices[0].amount}`}
                                </PriceParagraph>
                                <AddToCartButton>
                                    ADD TO CART
                                </AddToCartButton>
                                <div dangerouslySetInnerHTML={{ __html: data.product.description }} />
                            </DescriptionWrappper>
                        </PageWrapper>
                    )
                }
                }
            </Query>
        )
    }

}

export default withRouter(ProductDescriptionPage);