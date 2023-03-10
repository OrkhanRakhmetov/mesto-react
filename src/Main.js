import React from 'react';
import AvatarPic from "./images/profile-image.jpg"

function Main() {

  return (
    <main className="content">

      <section className="profile">
        <div className="profile__container">

          <button className="profile__avatar-button" type="button" aria-label="Заменить аватарку">
            <img src={AvatarPic} alt="Аватарка профиля" className="profile__avatar" />
          </button>

          <div className="profile__info">
            <div className="profile__info-name">
              <h1 className="profile__title">Жак-Ив Кусто</h1>
              <button type="button" className="profile__edit-button" aria-label="Редактиовать данные"></button>
            </div>
            <p class="profile__subtitle">Исследователь океана</p>
          </div>
        </div>
        <button type="button" className="profile__add-button" aria-label="Добавить фото"></button>
      </section>

      <section className="elements">

        <ul className="elements__list"></ul>

        <template id="element-template">

          <li className="element">
            <button type="button" className="element__button-img">
              <img className="element__img" />
            </button>

            <div className="element__desc">
              <h2 className="element__title"></h2>

              <div className="element__heart-block">
                <button type="button" className="element__heart" aria-label="Лайк"></button>
                <p className="element__number_of-likes">0</p>
              </div>
              <button type="button" className="element__delete" aria-label="Удаление"></button>

            </div>
          </li>

        </template>

      </section>

      <section className="popup" id="popupEditProfile">
        <div className="popup__container">
          <h2 className="popup__title">Редактировать профиль</h2>
          <form name="popupEditProfile" className="popup__inputs popup__inputs_edit-profile" novalidate>
            <input id="name-user" name="name" type="text" className="popup__input popup__input_type_name" placeholder="Имя"
              minlength="2" maxlength="40" required />
            <span className="popup__input-error" id="name-user-error"></span>
            <input id="job-desc" name="job" type="text" className="popup__input popup__input_type_job"
              placeholder="Род деятельности" minlength="2" maxlength="200" required />
            <span className="popup__input-error" id="job-desc-error"></span>
            <button id="popupEditSubmit" type="submit" className="popup__button popup__button_edit"
              aria-label="Сохранить">Сохранить</button>
          </form>
          <button type="button" className="popup__close" aria-label="Закрыть попап"></button>
        </div>
      </section>

      <section className="popup" id="popupAddCard">
        <div className="popup__container">
          <h2 className="popup__title">Новое место</h2>
          <form name="popupAddCard" className="popup__inputs popup__inputs_add-img" novalidate>
            <input id="name-img" name="name" type="text" className="popup__input popup__input_name-img" placeholder="Название"
              minlength="2" maxlength="30" required />
            <span className="popup__input-error" id="name-img-error"></span>
            <input id="link-img" name="link" type="url" className="popup__input popup__input_link_img"
              placeholder="Ссылка на картинку" required />
            <span className="popup__input-error" id="link-img-error"></span>
            <button id="popupAddSubmit" type="submit" className="popup__button popup__button_add"
              aria-label="Создать карту">Создать</button>
          </form>
          <button type="button" className="popup__close" aria-label="Закрыть попап"></button>
        </div>
      </section>

      <section className="popup popup_img_enlarge" id="popupBigImg">
        <div className="popup__enlarge-container">
          <img className="popup__big-img" />
          <p className="popup__img-desc"></p>
          <button type="button" className="popup__close" aria-label="Закрыть попап"></button>
        </div>
      </section>

      <section className="popup popup_active" id="popupNewAvatar">
        <div className="popup__container popup__container_avatar">
          <h2 className="popup__title">Обновить аватар</h2>
          <form name="popupAvatarForm" className="popup__inputs popup__inputs_add-img" novalidate>
            <input id="urlAvatar" name="link" type="url" className="popup__input" placeholder="Ссылка на картинку" required />
            <span className="popup__input-error" id="urlAvatar-error"></span>
            <button id="popupAvatarSubmit" type="submit" className="popup__button popup__button_avatar"
              aria-label="Сохранить">Сохранить</button>
          </form>
          <button type="button" className="popup__close" aria-label="Закрыть попап"></button>
        </div>
      </section>

      <section className="popup" id="popupConfirm">
        <div className="popup__container popup__container_confirm">
          <h2 className="popup__title">Вы уверены?</h2>
          <form name="popupConfirm" className="popup__inputs popup__inputs_confirm">
            <button id="popupConfirmSubmit" type="submit" className="popup__button popup__button_confirm"
              aria-label="Да">Да</button>
          </form>
          <button type="button" className="popup__close" aria-label="Закрыть попап"></button>
        </div>
      </section>

    </main>

  );
}

export default Main;