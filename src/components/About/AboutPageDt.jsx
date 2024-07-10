import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const AboutPageDt = ({ id, title, desc, ul, ulChange }) => {
    return (
        <>
            <dt onClick={() => ulChange(id)} className={id === ul.id ? 'on' : ''}>
                {title}
                {id === ul.id ? <FaChevronUp /> : <FaChevronDown />}
                <span className={id === ul.id ? 'on' : ''}></span>
            </dt>
            <dd className={id === ul.id ? 'on' : ''}>{desc}</dd>
        </>
    );
};

export default AboutPageDt;
