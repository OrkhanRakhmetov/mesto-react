import React, { useState } from 'react';
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }
 

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="page">
      <Header />
      <Main 
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick} />
      <Footer />

      <PopupWithForm
        name="popupEditProfile"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        buttonText="Сохранить"
      >
        <input
          id="name-user"
          name="name"
          type="text"
          className="popup__input popup__input_type_name"
          placeholder="Имя"
          required
          minLength="2"
          maxLength="40"
        />
        <span className="popup__input-error" id="name-user-error" />
        <input
          id="job-desc"
          name="job"
          type="text"
          className="popup__input popup__input_type_job"
          placeholder="Род деятельности"
          required
          minLength="2"
          maxLength="200"
        />
        <span className="popup__input-error" id="job-desc-error" />
      </PopupWithForm>

      <PopupWithForm
        name="popupAddCard"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        buttonText="Создать"
      >
        <input
          id="card-name"
          name="name"
          type="text"
          className="popup__input popup__input_name-img"
          placeholder="Название"
          required
          minLength="2"
          maxLength="30"
        />
        <span className="popup__input-error" id="name-img-error" />
        <input
          id="link-img"
          name="link"
          type="url"
          className="popup__input popup__input_link_img"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="popup__input-error" id="link-img-error" />
      </PopupWithForm>

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />

      <PopupWithForm
        name="popupNewAvatar"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        buttonText="Сохранить"
      >
        <input
          id="urlAvatar"
          name="link"
          type="url"
          className="popup__input"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="popup__input-error" id="urlAvatar-error" />
      </PopupWithForm> 

      {/* <PopupWithForm
        name="popupConfirm"
        title="Вы уверены?"
        onClose={closeAllPopups}
        buttonText="Да"
      /> */}

    </div>
  )
}

export default App;
