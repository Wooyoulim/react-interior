const HomeItem = ({ item, clickChange }) => {
    const { id, imgurl, title, desc } = item;
    return (
        <>
            <li key={id} onClick={() => clickChange(id)}>
                <img src={imgurl} alt={title} />
            </li>
        </>
    );
};

export default HomeItem;
