import React from 'react'

// class Categories extends React.Component {
//     state = {
//         activeItem: null,
//     };

//     onSelectItem = index => {
//         this.setState({
//             activeItem: index,
//         });
//     }

//     render() {
//         const { items, onClickItem } = this.props;
//         return (
//             <div className="filter-block">
//                 <div className="categories">
//                     <ul>
//                         <li>Все</li>
//                         {items.map((name, index) => (
//                             <li className={this.state.activeItem === index ? 'active' : ''} onClick={() => this.onSelectItem(index)} key={`${name}_${index}`}>{name}</li>
//                         ))}
//                     </ul>
//                 </div>
//                 <div className="sort">
//                     <div className="sort__label">
//                         <b>Сортировка по:</b>
//                         <select className="selector">
//                             <option value="1">популярности</option>
//                             <option value="2">дешевле</option>
//                             <option value="3">дороже</option>
//                         </select>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

function Categories({ items, onClickItem }) {
    const [activeItem, setActiveItem] = React.useState(null);

    const onSelectItem = (index) => {
        setActiveItem(index);
    }

    return (
        <div className="categories">
            <ul>
                <li className={activeItem === null ? 'active' : ''} onClick={() => onSelectItem(null)}>Все</li>
                {items.map((name, index) => (
                    <li className={activeItem === index ? 'active' : ''} onClick={() => onSelectItem(index)} key={`${name}_${index}`}>{name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Categories
