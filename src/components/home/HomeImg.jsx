import styled from 'styled-components';

const BigImg = styled.div`
    width: 1560px;
    position: relative;
    img {
        width: 1560px;
        height: 960px;
    }
    h2 {
        text-align: center;
        width: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 50px;
        font-weight: 700;
        z-index: 10;
        color: #fff;
        text-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
`;

const HomeImg = ({ ...click }) => {
    const { id, imgurl, title, desc } = click;
    return (
        <BigImg className="bigimg">
            <h2>{title}</h2>
            <img src={imgurl} alt={title} />
        </BigImg>
    );
};

export default HomeImg;
