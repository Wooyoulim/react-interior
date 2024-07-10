import ProductLi from './ProductLi';
import styled from 'styled-components';
const ProUl = styled.ul`
    height: 200px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin: 50px 0;
    li {
        transition: 0.4s;
        img {
            width: 200px;
        }
        &:hover {
            filter: brightness(0.5);
        }
    }
`;

const ProductUl = ({ data, onAdd }) => {
    return (
        <ProUl>
            {data.map((item, idx) => (
                <ProductLi key={item.id} item={item} onAdd={onAdd} />
            ))}
        </ProUl>
    );
};

export default ProductUl;
