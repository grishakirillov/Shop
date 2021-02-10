import React from 'react'
import { Button, Categories, SortPopup, PizzaBlock } from '../components';

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
                    items.map(obj => <PizzaBlock key={obj.id} {...obj}/>)
                }
                {/* <div className="item_block">
                    <img src="img/iphone12promax.jpg" alt="" />
                    <h4 className="item-block__title">iPhone 12 Pro Max</h4>
                    <div className="item-block__bottom">
                        <div className="item-block__price">
                            <div className="item-block__price">90 990Р</div>
                        </div>
                        <Button outline>
                            <svg width="12" height="12"
                                viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                    fill="white"></path>
                            </svg>
                            <span>Добавить</span>
                        </Button>
                    </div>
                </div> */}
                {/* <div className="item_block">
                    <img src="img/iphone12pro.jpg" alt="" />
                    <h4 className="item-block__title">iPhone 12 Pro</h4>
                    <div className="item-block__bottom">
                        <div className="item-block__price">
                            <div className="item-block__price">86 990Р</div>
                        </div>
                        <button className="button button-add button-outline"><svg width="12" height="12"
                            viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                fill="white"></path>
                        </svg>
                            <span>Добавить</span>
                        </button>
                    </div>
                </div>
                <div className="item_block">
                    <img src="img/iphone12mini.jpg" alt="" />
                    <h4 className="item-block__title">iPhone 12 mini</h4>
                    <div className="item-block__bottom">
                        <div className="item-block__price">
                            <div className="item-block__price">57 990Р</div>
                        </div>
                        <button className="button button-add button-outline">
                            <svg width="12" height="12"
                                viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                    fill="white"></path>
                            </svg>
                            <span>Добавить</span>
                        </button>
                    </div>
                </div>
                <div className="item_block">
                    <img src="img/iphonese2020.jpg" alt="" />
                    <h4 className="item-block__title">iPhone SE 2020</h4>
                    <div className="item-block__bottom">
                        <div className="item-block__price">
                            <div className="item-block__price">33 990Р</div>
                        </div>
                        <button className="button button-add button-outline"><svg width="12" height="12"
                            viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                fill="white"></path>
                        </svg>
                            <span>Добавить</span>
                        </button>
                    </div>
                </div>
                <div className="item_block">
                    <img src="img/iphone11promax.jpg" alt="" />
                    <h4 className="item-block__title">iPhone 11 Pro Max</h4>
                    <div className="item-block__bottom">
                        <div className="item-block__price">
                            <div className="item-block__price">86 990Р</div>
                        </div>
                        <button className="button button-add button-outline"><svg width="12" height="12"
                            viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                fill="white"></path>
                        </svg>
                            <span>Добавить</span>
                        </button>
                    </div>
                </div>
                <div className="item_block">
                    <img src="img/iphone11pro.jpg" alt="" />
                    <h4 className="item-block__title">iPhone 11 Pro</h4>
                    <div className="item-block__bottom">
                        <div className="item-block__price">
                            <div className="item-block__price">83 990Р</div>
                        </div>
                        <button className="button button-add button-outline"><svg width="12" height="12"
                            viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                fill="white"></path>
                        </svg>
                            <span>Добавить</span>
                        </button>
                    </div>
                </div>
                <div className="item_block">
                    <img src="img/iphone11.jpg" alt="" />
                    <h4 className="item-block__title">iPhone 11</h4>
                    <div className="item-block__bottom">
                        <div className="item-block__price">
                            <div className="item-block__price">48 990Р</div>
                        </div>
                        <button className="button button-add button-outline"><svg width="12" height="12"
                            viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                fill="white"></path>
                        </svg>
                            <span>Добавить</span>
                        </button>
                    </div>
                </div>
                <div className="item_block">
                    <img src="img/iphonexs.jpg" alt="" />
                    <h4 className="item-block__title">iPhone XS</h4>
                    <div className="item-block__bottom">
                        <div className="item-block__price">
                            <div className="item-block__price">37 990Р</div>
                        </div>
                        <button className="button button-add button-outline"><svg width="12" height="12"
                            viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                fill="white"></path>
                        </svg>
                            <span>Добавить</span>
                        </button>
                    </div>
                </div>
                <div className="item_block">
                    <img src="/img/iphonexr.jpg" alt="" />
                    <h4 className="item-block__title">iPhone XR</h4>
                    <div className="item-block__bottom">
                        <div className="item-block__price">
                            <div className="item-block__price">42 990Р</div>
                        </div>
                        <button className="button button-add button-outline"><svg width="12" height="12"
                            viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                fill="white"></path>
                        </svg>
                            <span>Добавить</span>
                        </button>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Home
