import HomeItem from './HomeItem';
import styled from 'styled-components';

const List = styled.ul`
    position: absolute;
    left: 0px;
    margin-top: 50px;
    width: 1560px;
    display: flex;
    align-items: center;
    flex-wrap: wrap-reverse;
    li {
        margin: 20px;
        &:nth-child(1) {
            margin-left: -200px;
        }
        img {
            border-radius: 30px;
            width: 350px;
        }
    }
`;

const HomeList = ({ main, clickChange }) => {
    return (
        <List className="list">
            {main.map((item) => (
                <HomeItem key={item.id} item={item} clickChange={clickChange} />
            ))}
        </List>
    );
};

export default HomeList;
