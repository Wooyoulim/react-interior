import styled from 'styled-components';

const Text = styled.div`
    position: absolute;
    bottom: 405px;
    right: -150px;
    border-radius: 30px;
    width: 520px;
    height: 215px;
    background: #f0f0f0;
    strong {
        font-size: 25px;
        font-weight: 500;
        margin: 30px;
        display: block;
    }
    p {
        font-size: 20px;
        margin: 30px;
    }
`;

const HomeText = ({ ...click }) => {
    const { id, imgurl, title, desc } = click;
    return (
        <Text className="text">
            <strong>{title}</strong>
            <p>{desc}</p>
        </Text>
    );
};

export default HomeText;
