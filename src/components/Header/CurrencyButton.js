import React from 'react';
import navDropdown from '../../images/nav-dropdown-icon.png';
import CurrencyDropDown from './CurrencyDropdown';
import { CurrencyWrapper, DropdownImage, NavButton, CartAndCurrecyWrapper, NavDropDownULWrapper } from './StyledComponents/CurrencyStyleComponents';
import CartButton from './CartButton';
import { changeCurrency } from '../../redux/ui/ui';
import { connect } from 'react-redux';

class CurrencyButton extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            showCurrenciesDropDown: false,
            currentCurrency: '$'
        }
    }

    handleCurrencyChanged = (currency) => {
        this.setState({
            showCurrenciesDropDown: false,
            currentCurrency: currency
        })
    }

    render() {
        return (
            <CartAndCurrecyWrapper>
                <NavDropDownULWrapper>
                    <NavButton onClick={
                        () => {
                            this.setState({ showCurrenciesDropDown: !this.state.showCurrenciesDropDown });
                        }}>
                        <CurrencyWrapper>
                            {this.state.currentCurrency}
                        </CurrencyWrapper>
                        <DropdownImage src={navDropdown} alt="dropdown" />
                    </NavButton>
                    <CartButton />
                </NavDropDownULWrapper>
                <CurrencyDropDown
                    showCurrenciesDropDown={this.state.showCurrenciesDropDown}
                    currencyChanged={(currency) => {
                        this.handleCurrencyChanged(currency);
                        this.props.changeCurrency(currency);
                    }
                    } />
            </CartAndCurrecyWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeCurrency: (currency) => dispatch(changeCurrency(currency)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyButton);