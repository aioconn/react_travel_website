import React from 'react';
import CardItem from "./CardItem";
import './Cards.css'

const Cards = () => {
    return (
        <div className='cards'>
            <h1>Come see these destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        src="./images/image-9.jpg"
                        text="Explore the jungles of Argentina"
                        label="Adventure"
                        path='/services'
                        />
                        <CardItem
                            src="./images/img-2.jpg"
                            text="Travel through the Islands of Bali in a Private Cruise"
                            label="Luxury"
                            path='/services'
                        />

                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src="./images/image-3.jpg"
                            text="Stay a week at a 5 star resort in Hawaii"
                            label="Relax"
                            path='/services'
                        />
                        <CardItem
                            src="./images/image-4.jpg"
                            text="Take in the breath taking views of the Grand Canyon"
                            label="Adventure"
                            path='/services'
                        />
                        <CardItem
                            src="./images/image-2.jpg"
                            text="Admire the beautiful sights of Greece"
                            label="Luxury"
                            path='/services'
                        />

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Cards;
