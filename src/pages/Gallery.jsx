import styled from 'styled-components';
import GalleryForm from '../components/gallery/GalleryForm';

const GalleryMain = styled.div`
    .inner {
        width: 1400px;
        margin: auto;
        box-sizing: border-box;
        padding: 100px 0;
    }
    h2 {
        font-size: 40px;
        margin-bottom: 40px;
    }
`;

const Gallery = () => {
    return (
        <GalleryMain>
            <div className="inner">
                <GalleryForm />
            </div>
        </GalleryMain>
    );
};

export default Gallery;
