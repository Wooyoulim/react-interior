import GalleryItem from './GalleryItem';
import styled from 'styled-components';

const GalleryUl = styled.ul`
    border: 1px solid #999;
    padding: 20px;
    li {
        line-height: 40px;
        border-bottom: 1px solid #dcdcdc;
        display: flex;
        margin: 30px;
        /* display: block; */
    }
`;
const GalleryList = ({ data }) => {
    return (
        <GalleryUl>
            {data.map((pic) => (
                <GalleryItem key={pic.id} {...pic} />
            ))}
        </GalleryUl>
    );
};

export default GalleryList;
