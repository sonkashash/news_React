import React, { useState } from "react"
import '../styles/Cards.css'
import Dot_between_text from '../assets/Dot.svg'
import Popup from "./Popup";


function Cards({ news_card, searchTitle }) {
    const [activePopup, setActivePopup] = useState(false);
    const [popupContent, setPopupContent] = useState({});

    const cardClick = (card) => {
        setPopupContent(card);
        setActivePopup(true);
    };

    const filteredCards = news_card.filter(card =>
        card.title.toLowerCase().includes(searchTitle.toLowerCase()) ||
        card.text.toLowerCase().includes(searchTitle.toLowerCase())
    );

    return (
        <>
            <div className="cards-wrapper">
                {filteredCards.map(card =>
                    <div className="card" onClick={() => cardClick(card)}>
                        <img className="card-img" src={card.img} srcSet={`${card.img_2x} 2x`} alt="news_img" />
                        <p className="card-tags">{card.tags}</p>
                        <h1 className="card-title">{card.title}</h1>
                        <div className="meta-info">
                            <span className="card-autor">{card.autor} </span>
                            <img className="dot" src={Dot_between_text} alt="circle-icon" />
                            <span className="card-date">{card.date} </span>
                            <img className="dot" src={Dot_between_text} alt="circle-icon" />
                            <span className="card-views">{card.views} views</span>
                        </div>
                        <p className="card-description">{card.text}</p>
                    </div>)
                }
            </div>
            <Popup active={activePopup} setActive={setActivePopup} title={popupContent.title} content={popupContent.text} />
        </>
    )
}

export default Cards
