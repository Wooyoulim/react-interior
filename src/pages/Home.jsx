import { main } from '../assets/api/data';
import { useState } from 'react';
import HomeImg from '../components/home/HomeImg';
import HomeList from '../components/home/HomeList';
import HomeText from '../components/home/HomeText';
import styled from 'styled-components';

const Wrap = styled.div`
    width: 1560px;
    height: 1650px;
    margin: 0 auto;
    display: flex;
    position: relative;
    justify-content: space-between;
    .bigview {
        width: 1560px;
        position: relative;
    }
`;

const Home = () => {
    const [click, setClick] = useState(main[0]);

    const clickChange = (id) => {
        setClick(main.find((item) => item.id === id));
    };

    return (
        <Wrap className="wrap">
            <div className="bigview">
                <HomeImg {...click} />
                <HomeList main={main} clickChange={clickChange} />
            </div>
            <HomeText {...click} />
        </Wrap>
    );
};

export default Home;
