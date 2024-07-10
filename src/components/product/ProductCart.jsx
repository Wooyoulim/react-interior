import { useEffect } from 'react';
import styled from 'styled-components';
const ProCart = styled.div`
    margin-top: 70px;
    table {
        width: 1100px;
        thead {
            font-weight: 500;
            font-size: 26px;
            text-align: left;
        }
        tbody {
            border-bottom: 1px solid #000;
            border-top: 1px solid #000;
            tr {
                td {
                    vertical-align: middle;
                    padding: 10px;
                    &:nth-child(2) {
                        width: 400px;
                        word-break: break-all;
                    }

                    img {
                        width: 160px;
                        vertical-align: middle;
                    }
                }
                button {
                    margin-right: 10px;
                    width: auto;
                    height: 30px;
                }
            }
        }
    }
`;

const ProductCart = ({ list, onDel, onCart, amount, setAmount, cost, pick, setList }) => {
    const numChange = (e) => {
        setAmount(e.target.value);
    };
    useEffect(() => {
        setList([...list, pick]);
    }, [pick]);
    return (
        <ProCart className="cart">
            <table>
                <colgroup>
                    <col className="text" />
                    <col className="amount" />
                    <col className="price" />
                </colgroup>
                <thead></thead>
                <tbody>
                    {list.map((item) => (
                        <tr key={item.id}>
                            <td>
                                <img src={item.imgurl} alt={item.title} />
                            </td>
                            <td>
                                상품명 : {item.title}
                                <br />
                                <br />
                            </td>
                            <td>
                                {
                                    <select onChange={numChange}>
                                        <option value="num">수량을 선택</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                }
                            </td>
                            <td>
                                금액 :
                                {amount === 0
                                    ? item.price
                                    : `${Number(parseInt(item.price) * amount)}원`}
                            </td>
                            <td>
                                <button onClick={() => onCart(item.id)}>장바구니 담기</button>
                                <button onClick={() => onDel(item.id)}>삭제</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </ProCart>
    );
};

export default ProductCart;
