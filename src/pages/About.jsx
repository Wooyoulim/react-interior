import { MdOutlineNavigateNext, MdNavigateBefore } from 'react-icons/md';

import { con1 } from './../assets/api/data';
import { useState } from 'react';
import AboutPage from '../components/About/AboutPage';
import AboutUl from '../components/About/AboutUl';
import styled from 'styled-components';

const Container = styled.section`
    width: 1560px;
    margin: 50px auto 0 auto;

    .mainBar {
        width: 600px;
        display: flex;
        justify-content: space-between;
        align-items: end;
        margin-bottom: 20px;
        height: 130px;

        h2 {
            font-size: 40px;
            font-weight: 700;
            display: inline-block;
            width: 400px;
        }
        .btn {
            button {
                width: 50px;
                height: 50px;
                border: none;
                margin-left: 10px;
                font-size: 30px;
            }
        }
    }
    .main {
        display: flex;
        justify-content: space-between;
        .mainImg {
            width: 600px;
            height: 960px;
            position: relative;
            img {
                width: 600px;
            }
            .num {
                position: absolute;
                bottom: 30px;
                right: 30px;
                font-size: 26px;
                font-weight: 500;
            }
        }
        .mainDesc {
            width: 900px;
            overflow: hidden;
        }
    }
`;

const About = () => {
    const [data, setData] = useState(con1);
    const [ul, setUl] = useState(con1[0]);
    const [cnt, setCnt] = useState(0);

    const ulChange = (idx) => {
        setUl(con1.find((item) => item.id === idx));
    };
    const onShow = (id) => {
        setData(
            data.map((item) =>
                item.id === id ? { ...item, isShow: true } : { ...item, isShow: false }
            )
        );
    };
    const nextBtn = (cnt) => {
        if (cnt === data.length) {
            setUl(data.find((item) => item.id === 1));
            () => onShow(cnt);
        } else {
            setUl(data.find((item) => item.id === cnt + 1));
            () => onShow(cnt);
        }
    };
    const prevBtn = (cnt) => {
        if (cnt === 1) {
            setUl(data.find((item) => item.id === data.length));
            () => onShow(cnt);
        } else {
            setUl(data.find((item) => item.id === cnt - 1));
            () => onShow(cnt);
        }
    };

    return (
        <>
            <Container id="container">
                <div className="mainBar">
                    <h2>{ul.title}</h2>
                    <p className="btn">
                        <button onClick={() => prevBtn(ul.id)}>
                            <MdNavigateBefore />
                        </button>
                        <button onClick={() => nextBtn(ul.id)}>
                            <MdOutlineNavigateNext />
                        </button>
                    </p>
                </div>
                <div className="main">
                    <div className="mainImg">
                        <img src={ul.bigurl} alt={ul.title} />
                        <p className="num">
                            {ul.id}/ <em className="total">{con1.length}</em>
                        </p>
                    </div>
                    <div className="mainDesc">
                        <AboutPage con1={con1} onShow={onShow} ul={ul} ulChange={ulChange} />
                    </div>
                </div>
                <AboutUl con1={con1} ulChange={ulChange} />
            </Container>
        </>
    );
};

export default About;
