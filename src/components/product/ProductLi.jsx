const ProductLi = ({ item, onAdd }) => {
    const { id, imgurl, title } = item;

    return (
        <>
            <li onClick={() => onAdd(id)}>
                <img src={imgurl} alt={title} />
            </li>
        </>
    );
};

export default ProductLi;
