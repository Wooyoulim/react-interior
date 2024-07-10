import { useEffect } from 'react';
import styled from 'styled-components';
const ProForm = styled.form`
    position: absolute;
    margin-bottom: 100px;
    top: 400px;
    right: 0;
    width: 400px;
    height: 250px;
    background: #dcdcdc;
    font-size: 30px;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 30px;
    .buy {
        display: block;
        width: 400px;
        height: 50px;
    }
    .order {
        display: block;
        height: 80px;
    }
`;

const ProductTotal = ({ onSubmit, hap, list, amount, setHap }) => {
    const done = () => {
        alert('주문이 완료되었습니다');
    };

    useEffect(() => {
        setHap(
            list.reduce((acc, curr) => {
                return acc + parseInt(curr.price) * Number(amount);
            }, 0)
        );
    }, [amount]);
    return (
        <ProForm className="Total" onSubmit={onSubmit}>
            <p className="hap">총금액: {hap}원</p>
            <button onClick={done} className="order">
                주문하기
            </button>
        </ProForm>
    );
};

export default ProductTotal;
