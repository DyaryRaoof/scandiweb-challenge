import React from 'react';
import { withRouter } from '../withRouter';
import { Query } from '@apollo/react-components';
import productQuery from './query';
import NakedButton from '../Shared/StyledComponents/NakedButton';
import Detail from './Detail';
import { PageWrapper, SideImage, ManinImage, SideImagesDiv } from './IndexStyledComponents';

class ProductDescriptionPage extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            activeImageIndex: 0,
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

                    return (
                        <PageWrapper>
                            <SideImagesDiv>
                                {
                                    data.product.gallery.map((image, index) => {
                                        return <NakedButton key={index} onClick={() => { this.setState({ activeImageIndex: index }); }}>
                                            <SideImage src={image} alt="item" />
                                        </NakedButton>
                                    })
                                }
                            </SideImagesDiv>
                            <ManinImage src={data.product.gallery[this.state.activeImageIndex]} alt="item" />
                            <Detail product={data.product} />
                        </PageWrapper>
                    )
                }
                }
            </Query>
        )
    }

}

export default withRouter(ProductDescriptionPage);