import React from 'react'
import styled from 'styled-components'
import logo from '../../images/logo.png';
import emptyCartLogo from '../../images/empty-cart.png';
import navDropdown from '../../images/nav-dropdown-icon.png';
import NakedButton from '../Shared/NakedButton';
import {
    gql
} from "@apollo/client";
import { Query } from "@apollo/react-components";
import NavULWrapper from './NavULWrapper';
import NavCategoryButtons from './NavCategoryButtons';




const LogoLI = styled.li`
    padding: 15px 0;
    `

const CurrencyWrapper = styled.span`
    font-size: 18px;
    `
const DropdownImage = styled.img`
    width: 20px;
    height: 20px;
    margin-left: 5px;
    `
const NavButton = styled(NakedButton)`
    display: flex;
    align-items: start;
`;



const NavCurrencyDropdown = styled.div`
    width: 114px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border-radius: 5px;
    padding: 10px;
    position: absolute;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    top: 70px;
    right: 80px;
    z-index: 1;

`;

const CartAndCurrecyWrapper = styled.div` 
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    `

const NavDropDownULWrapper = styled(NavULWrapper)`
    display: flex;
    justify-content: start;
    `



const CURRENCIES = gql`
    query  {
        currencies{
            label
            symbol
        }
    }
  `;

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            showCurrenciesDropDown: false,
            currentCurrency: '$'
        }
    }

    render() {
        return (
            <nav>
                <NavULWrapper margin>
                    <li>
                        <NavCategoryButtons />
                    </li>
                    <LogoLI>
                        <NakedButton>
                            <img src={logo} alt="logo" />
                        </NakedButton>
                    </LogoLI>
                    <li>
                        <CartAndCurrecyWrapper>
                            <NavDropDownULWrapper>
                                <NavButton onClick={() => this.setState({ showCurrenciesDropDown: !this.state.showCurrenciesDropDown })}>
                                    <CurrencyWrapper>
                                        {this.state.currentCurrency}
                                    </CurrencyWrapper>
                                    <DropdownImage src={navDropdown} alt="dropdown" />
                                </NavButton>
                                <NakedButton>
                                    <img src={emptyCartLogo} alt="empty cart" />
                                </NakedButton>
                            </NavDropDownULWrapper>
                            {
                                this.state.showCurrenciesDropDown ?
                                    <NavCurrencyDropdown>
                                        <Query query={CURRENCIES}>
                                            {({ loading, error, data }) => {
                                                if (loading) return <p>Loading...</p>;
                                                if (error) return <p>Error :(</p>;

                                                return data.currencies.map((currency, index) => {
                                                    return (
                                                        <NakedButton key={index} onClick={() => { this.setState({ showCurrenciesDropDown: false, currentCurrency: currency.symbol }) }}>
                                                            <p >{`${currency.symbol} ${currency.label}`}</p>
                                                        </NakedButton>
                                                    )
                                                })
                                            }
                                            }
                                        </Query>
                                    </NavCurrencyDropdown>
                                    : null

                            }

                        </CartAndCurrecyWrapper>
                    </li>
                </NavULWrapper>
            </nav>
        );
    }
}

export default Header;