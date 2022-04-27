import React from 'react'
import logo from '../../images/logo.png';
import NakedButton from '../Shared/StyledComponents/NakedButton';
import NavULWrapper from './StyledComponents/NavULWrapper';
import NavCategoryButtons from './NavCategoryButtons';
import CurrencyButton from './CurrencyButton';
import LogoLI from './StyledComponents/LogoLI';


class Header extends React.PureComponent {

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