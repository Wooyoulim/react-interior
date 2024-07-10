const GalleryItem = ({ webformatURL, views, user, downloads, tags, likes }) => {
    const tag = tags.split(',');
    return (
        <li>
            <img src={webformatURL} alt="" />

            <ul>
                <li>작가:{user}</li>
                <li>조회수:{views}</li>
                <li>다운로드:{downloads}</li>
                <li>좋아요:{likes}</li>
                <li>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem enim, placeat
                    commodi sequi repellendus molestias dolorem possimus sed, voluptates quis
                    exercitationem tempore dolores cumque perspiciatis numquam adipisci! Nulla,
                    inventore quisquam?
                </li>
            </ul>
            {/* <p>
                {tag.map((item) => (
                    <span key={item.id}>#{item}</span>
                ))}
            </p> */}
        </li>
    );
};

export default GalleryItem;
