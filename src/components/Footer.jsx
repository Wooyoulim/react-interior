import styled from 'styled-components';

const FooterCon = styled.header`
    background: #dcdcdc;
    width: 100%;

    .inner {
        width: 1400px;
        margin: 0 auto;
        display: flex;
        height: 100px;
        justify-content: space-between;
        align-items: center;
    }
`;

const Footer = () => {
    return (
        <FooterCon>
            <div className="inner">
                <address>Copyright © Yulim Woo. All Rights Reserved.</address>
            </div>
        </FooterCon>
    );
};

export default Footer;
