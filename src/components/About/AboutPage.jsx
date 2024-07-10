import AboutPageDt from './AboutPageDt';
import styled from 'styled-components';

const Page1 = styled.div`
    dl {
        dt {
            width: 900px;
            font-size: 24px;
            font-weight: 500;
            position: relative;
            &.on {
                color: green;
            }
            svg {
                margin-left: 20px;
            }
            span {
                width: 900px;
                height: 1px;
                background: #000;
                display: inline;
                position: absolute;
                margin-left: 20px;
                top: 50%;
                transform: translateY(-50%);
                &.on {
                    background: green;
                }
            }
        }
        dd {
            font-size: 20px;
            font-weight: 300;
            margin-top: 40px;
            margin-bottom: 20px;
            transition: 0.4s;
            height: 0px;
            opacity: 0;
            &.on {
                height: 150px;
                opacity: 1;
            }
        }
    }
`;

const AboutPage = ({ con1, onShow, ul, ulChange }) => {
    return (
        <Page1 className="con1page">
            <dl>
                {con1.map((item) => (
                    <AboutPageDt
                        {...item}
                        key={item.id}
                        onShow={onShow}
                        ul={ul}
                        ulChange={ulChange}
                    />
                ))}
            </dl>
        </Page1>
    );
};

export default AboutPage;
