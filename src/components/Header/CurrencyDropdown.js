import React from "react";
import { Query } from "@apollo/react-components";
import { gql } from "@apollo/client";
import NakedButton from "../Shared/StyledComponents/NakedButton";
import NavCurrencyDropdown from "./StyledComponents/NavCurrencyDropdown";

const CURRENCIES = gql`
    query  {
        currencies{
            label
            symbol
        }
    }
  `;

class CurrencyDropDown extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            currentCurrency: '$'
        }
    }

    render = () => {
        if (this.props.showCurrenciesDropDown) {
            return <NavCurrencyDropdown>
                <Query query={CURRENCIES}>
                    {({ loading, error, data }) => {
                        if (loading) return <p>Loading...</p>;
                        if (error) return <p>Error :(</p>;

                        return data.currencies.map((currency, index) => {
                            return (
                                <NakedButton key={index} onClick={() => { this.props.currencyChanged(currency.symbol) }}>
                                    <p >{`${currency.symbol} ${currency.label}`}</p>
                                </NakedButton>
                            )
                        })
                    }
                    }
                </Query>
            </NavCurrencyDropdown>
        } else {
            return null;
        }

    }
}

export default CurrencyDropDown;