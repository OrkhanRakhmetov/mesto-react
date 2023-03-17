import React from 'react';

function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }
  return (
    <li className="element">
      <button type="button" className="element__button-img">
        <img className="element__img" src={card.link} alt={card.name} onClick={handleClick} />
      </button>

      <div className="element__desc">
        <h2 className="element__title">{card.name}</h2>

        <div className="element__heart-block">
          <button type="button" className="element__heart" aria-label="Лайк"></button>
          <p className="element__number_of-likes">{card.likes.length}</p>
        </div>
        <button type="button" className="element__delete" aria-label="Удаление"></button>

      </div>
    </li>
  )
}

export default Card;