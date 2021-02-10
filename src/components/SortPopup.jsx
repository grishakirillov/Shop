import React from 'react'

function SortPopup({ items }) {
    const [visiblePopup, setVisiblePopup] = React.useState(false);
    const [activeItem, setActiveItem] = React.useState(0);
    const sortRef = React.useRef();
    const activeLabel = items[activeItem];

    const toggleVisiblePopup = () => {
        setVisiblePopup(!visiblePopup);
    }

    const handleOutsideClick = (e) => {
        if (!e.path.includes(sortRef.current)) {
            setVisiblePopup(false);
        }
    }

    const onSelectItem = (index) => {
        setActiveItem(index);
        setVisiblePopup(false);
    }

    React.useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick);
    }, []);

    return (
        <div ref={sortRef} className="sort">
            <div className="sort__label">
                <b>Сортировка по: </b>
                <span onClick={toggleVisiblePopup}>{activeLabel}</span>
            </div>
            {visiblePopup &&
                <div className="sort__popup">
                    <ul>
                        {items &&
                            items.map((name, index) => (
                                <li className={activeItem === index ? 'active' : ''}
                                    onClick={() => onSelectItem(index)}
                                    key={`${name}_${index}`}>{name}</li>
                            ))}
                    </ul>
                </div>}
            {/* <select className="selector">
                    <option value="1">популярности</option>
                    <option value="2">дешевле</option>
                    <option value="3">дороже</option>
                </select> */}
        </div>
    )
}

export default SortPopup

