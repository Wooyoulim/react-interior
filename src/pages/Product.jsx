import { useState } from 'react';
import { dataList } from '../assets/api/data';
import { useEffect } from 'react';
import ProductList from '../components/product/ProductList';
import ProductCart from '../components/product/ProductCart';
import ProductTotal from '../components/product/ProductTotal';

import styled from 'styled-components';
const ProWrap = styled.div`
    width: 1600px;
    margin: 200px auto;
    position: relative;
`;

const Product = () => {
    const [data, setData] = useState(dataList);
    const { id, title, price } = data;

    const [list, setList] = useState([]);
    const [pick, setPick] = useState({});
    const [add, setAdd] = useState(false);
    const [cart, setCart] = useState(false);
    const [amount, setAmount] = useState(0);
    const [cost, setCost] = useState(0);
    const [hap, setHap] = useState(0);

    //카트 추가
    const onAdd = (id) => {
        setPick(data.find((item) => item.id === id));
        setAdd(true);
    };

    //카트 삭제
    const onDel = (id) => {
        setList(list.filter((item) => item.id !== id));
    };

    const onSubmit = (e) => {
        e.preventDefault();
    };

    //장바구니 담기
    const onCart = () => {
        setCart(true);
    };

    //가격 변동

    // useEffect(() => {}, [cart]);

    return (
        <ProWrap className="content">
            <ProductList data={data} onAdd={onAdd} />
            {add && (
                <ProductCart
                    list={list}
                    onDel={onDel}
                    onCart={onCart}
                    amount={amount}
                    setAmount={setAmount}
                    cost={cost}
                    setList={setList}
                    pick={pick}
                />
            )}

            {cart && (
                <ProductTotal
                    onSubmit={onSubmit}
                    hap={hap}
                    list={list}
                    amount={amount}
                    setHap={setHap}
                />
            )}
        </ProWrap>
    );
};

export default Product;
