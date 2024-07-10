import ProductUl from './ProductUl';
import styled from 'styled-components';
const ProList = styled.div`
    width: 100%;
    .img {
        width: 100%;
        h2 {
            position: relative;
            font-size: 30px;
            font-weight: 500;
            background: beige;
            line-height: 80px;
            text-indent: 20px;
            margin-bottom: 40px;
            .icon {
                width: 60px;
                line-height: 60px;
                border-radius: 50%;
                border: 1px solid #000;
                text-align: center;
                cursor: pointer;
                position: absolute;
                right: 0;
                top: -50px;
                span {
                    display: block;
                    text-align: center;
                    font-size: 20px;
                    width: 40px;
                    line-height: 40px;
                    border-radius: 50%;
                    border: 1px solid #000;
                    position: absolute;
                    right: -20px;
                    top: -30px;
                    background: #fff;
                }
            }
        }
    }
`;

const ProductList = ({ data, onAdd }) => {
    return (
        <ProList className="List">
            <div className="img">
                <h2>편안한 나만의 공간, 휴식을 위한 선택</h2>

                <ProductUl data={data} onAdd={onAdd} />
            </div>
        </ProList>
    );
};

export default ProductList;
