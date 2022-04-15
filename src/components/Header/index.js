import React from 'react'
import logo from '../../images/logo.png';
import NakedButton from '../Shared/NakedButton';
import NavULWrapper from './NavULWrapper';
import NavCategoryButtons from './NavCategoryButtons';
import CurrencyButton from './CurrencyButton';
import LogoLI from './LogoLI';


class Header extends React.Component {

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
                        <CurrencyButton />
                    </li>
                </NavULWrapper>
            </nav>
        );
    }
}

export default Header;