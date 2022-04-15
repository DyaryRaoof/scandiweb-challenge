import React from 'react'
import styled from 'styled-components'
import logo from '../../images/logo.png';
import emptyCartLogo from '../../images/empty-cart.png';
import navDropdown from '../../images/nav-dropdown-icon.png';
import NakedButton from '../Shared/NakedButton';


const NavULWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: ${props => props.margin ? "0 101px" : "0"};
  list-style: none;
  background-color: #fff;
  padding: 15px 0;
  `

const NavLIWrapper = styled.li`
font-size: 16px;
line-height: 19.2px;
margin: 0 0;
width: 80px;
text-align: center;
`

const ActiveHR = styled.hr`
    width: 100%;
    height: 2px;
    background-color: #5ECE7B;
    border: none;
    margin-top: 25px;
    `

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

const ActiveButton = styled(NakedButton)`
font-weight: ${props => props.active ? '600' : 'regular'};
color: ${props => props.active ? '#5ECE7B' : '#1D1F22'};
`;




class Header extends React.Component {
    render() {
        return (
            <nav>
                <NavULWrapper margin>
                    <li>
                        <NavULWrapper>
                            <NavLIWrapper active>
                                <ActiveButton active>
                                    WOMEN
                                    <ActiveHR />
                                </ActiveButton>
                            </NavLIWrapper>
                            <NavLIWrapper>
                                <ActiveButton>
                                    MEN
                                </ActiveButton>
                            </NavLIWrapper>
                            <NavLIWrapper>
                                <ActiveButton>
                                    KIDS
                                </ActiveButton>
                            </NavLIWrapper>
                        </NavULWrapper>
                    </li>
                    <LogoLI>
                        <NakedButton>
                            <img src={logo} alt="logo" />
                        </NakedButton>
                    </LogoLI>
                    <li>
                        <NavULWrapper>
                            <li>
                                <NavButton>
                                    <CurrencyWrapper>
                                        $
                                    </CurrencyWrapper>
                                    <DropdownImage src={navDropdown} alt="dropdown" />
                                </NavButton>
                            </li>
                            <li>
                                <NakedButton>
                                    <img src={emptyCartLogo} alt="empty cart" />
                                </NakedButton>
                            </li>
                        </NavULWrapper>
                    </li>
                </NavULWrapper>
            </nav>
        );
    }
}

export default Header;