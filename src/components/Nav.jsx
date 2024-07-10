import { Link } from 'react-router-dom';
import styled from 'styled-components';
const NavCon = styled.nav`
    ul {
        display: flex;
        li {
            z-index: 200;
            position: absolute;

            &:nth-child(1) {
                left: 350px;
                top: 30%;
            }
            &:nth-child(2) {
                left: 450px;
                top: 30%;
            }
            &:nth-child(3) {
                right: 450px;
                top: 30%;
            }
            &:nth-child(4) {
                right: 350px;
                top: 30%;
            }
            a {
                font-size: 20px;
                font-weight: 700;
            }
        }
    }
`;
const Nav = () => {
    return (
        <NavCon>
            <ul>
                <li>
                    <Link to={'/'}>home</Link>
                </li>
                <li>
                    <Link to="about">About</Link>
                </li>
                <li>
                    <Link to="product">Product</Link>
                </li>
                <li>
                    <Link to="gallery">Gallery</Link>
                </li>
            </ul>
        </NavCon>
    );
};

export default Nav;
