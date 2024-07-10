import AboutLi from './AboutLi';
import styled from 'styled-components';

const MainList = styled.ul`
    margin: 50px 0;
    display: flex;
    justify-content: space-between;
    li {
        width: 300px;
        img {
            width: 300px;
        }
    }
`;
const AboutUl = ({ con1, ulChange }) => {
    return (
        <MainList className="mainList">
            {con1.map((item) => (
                <AboutLi key={item.id} item={item} ulChange={ulChange} />
            ))}
        </MainList>
    );
};

export default AboutUl;
