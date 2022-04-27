import React from 'react';
import NavLIWrapper from './StyledComponents/NavLIWrapper';
import ActiveHR from './StyledComponents/ActiveHR';
import ActiveButton from './StyledComponents/ActiveButton';
import NavULWrapper from './StyledComponents/NavULWrapper';
import { Query } from "@apollo/react-components";
import { gql } from "@apollo/client";
import { changeCategory } from '../../redux/ui/ui';
import { connect } from 'react-redux';
import { withRouter } from '../withRouter';

const CATEGORIES = gql`
    query  {
     categories{
       name
     }
    }
  `;

class NavCategoryButtons extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0
        }
    }

    render = () => {
        return <NavULWrapper>
            <Query query={CATEGORIES}>
                {({ loading, error, data }) => {
                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>Error :(</p>;

                    return data.categories.map((category, index) => {
                        return (

                            <NavLIWrapper key={index}>
                                <ActiveButton active={this.state.activeIndex === index}
                                    onClick={() => {
                                        this.setState({ activeIndex: index });
                                        this.props.changeCategory(category.name);
                                        this.props.navigate('/');
                                    }}>
                                    {category.name.toUpperCase()}
                                    {this.state.activeIndex === index ? <ActiveHR /> : null}
                                </ActiveButton>
                            </NavLIWrapper>
                        )
                    })
                }
                }
            </Query>
        </NavULWrapper>
    }
}

const mapStateToProps = (state) => {
    return {
        categoryName: state.uiReducer.categoryName,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeCategory: (categoryName) => dispatch(changeCategory(categoryName)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavCategoryButtons));