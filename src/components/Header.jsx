import { Link } from 'react-router-dom';
import Nav from './Nav';
import styled from 'styled-components';

const HeaderCon = styled.header`
    background: #fff;
    width: 100%;
    border-bottom: 2px solid #000;
    .inner {
        width: 1400px;
        margin: 0 auto;
        display: flex;
        height: 100px;
        position: relative;
        h1 img {
            position: absolute;
            z-index: 200;
            width: 250px;
            left: 50%;
            transform: translateX(-50%);
            top: -75%;
        }
    }
`;

const Header = () => {
    return (
        <HeaderCon>
            <div className="inner">
                <h1>
                    <Link to={'/'}>
                        <img src="./images/logo.png" alt="로고" />
                    </Link>
                </h1>

                <Nav />
            </div>
        </HeaderCon>
    );
};

export default Header;
