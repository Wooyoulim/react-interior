import { useEffect, useState } from 'react';
import GalleryList from './GalleryList';
import styled from 'styled-components';
import axios from 'axios';

const GalleryFormcon = styled.form`
    margin-bottom: 15px;
    width: 1200px;
    margin-left: auto;

    h2 {
        font-size: 100px;
        position: fixed;
        left: -300px;
        z-index: -1;
        top: 80%;
        opacity: 0.3;
        transform: rotate(-90deg);
    }
    input {
        width: 800px;
        height: 40px;
        border: 1px solid #999;
        box-sizing: border-box;
        padding: 0 15px;
        margin: 50px 0;
    }
`;

const GalleryForm = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [text, setText] = useState('furniture');

    const API_KEY = '43934478-a047dc1a61cd1dcae4818bed9';
    useEffect(() => {
        const url = `https://pixabay.com/api/?key=${API_KEY}&q=${text}&image_type=photo`;
        axios
            .get(url)
            .then((res) => {
                setData(res.data.hits);
                setLoading(false);
                setError(null);
            })
            .catch((error) => {
                setData([]);
                setLoading(true);
                setError('픽사베이 api를 찾을 수 없습니다.');
            });
    }, [text]);

    const onSearch = (text) => {
        setText(text);
    };

    return (
        <GalleryFormcon>
            <input type="text" value={text} onChange={(e) => onSearch(e.target.value)} />
            <h2>CASAMIA GALLERY</h2>
            <GalleryList data={data} />
        </GalleryFormcon>
    );
};

export default GalleryForm;
