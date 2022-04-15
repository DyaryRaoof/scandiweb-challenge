import React from 'react';
import NavLIWrapper from './NavLIWrapper';
import ActiveHR from './ActiveHR';
import ActiveButton from './ActiveButton';
import NavULWrapper from './NavULWrapper';
import { Query } from "@apollo/react-components";
import { gql } from "@apollo/client";
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
                                <ActiveButton active={this.state.activeIndex === index} onClick={() => this.setState({ activeIndex: index })}>
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

export default NavCategoryButtons;