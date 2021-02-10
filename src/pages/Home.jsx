import React from 'react'
import { Button, Categories, SortPopup, ItemBlock } from '../components';

function Home({ items }) {
    return (
        <div className="container">
            <div className="filter-block">
                <Categories onClick={(name) => alert(name)} items={[
                    'Новые',
                    'Б/У',
                ]} />
                <SortPopup items={['умолчанию', 'дешевле', 'дороже']} />
            </div>
            <h2 className="content__title">Все</h2>
            <div className="content_items">
                {
                    items.map(obj => <ItemBlock key={obj.id} {...obj}/>)
                }
            </div>
        </div>
    )
}

export default Home
