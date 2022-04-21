import React, { useState } from 'react';
import { FeedbackComments } from '../../mock/feedback';

function Feedback() {

    const [deleteInfo, setDeleteInfo] = useState(true);

    const handleDelete = () => {
        setDeleteInfo(false);
    };

    return (
        <section className="content-wrapper">
            <div className="wrapper-title">
                <div className="text" data-text="Reviews">
                    Отзывы клиентов
                </div>
            </div>
            {deleteInfo && <div className="feedback-info">
                <div className="ico">
                    <i className="svg message" />
                </div>
                <div className="info">
                    <div className="desc">
                        <div className="title">
                            Оставь отзыв о проекте в нашей группе <br />
                            ВКонтакте и получи бонус к депозиту !
                        </div>
                        <div className="text">
                            Выдача бонуса происходит после проверки отзыва администрацией сайта,
                            публикации на сайте и в группе ВКонтакте! Вы должны быть авторизованы
                            на сайте с помощью своего аккаунта ВКонтакте!
                        </div>
                    </div>
                    <a href="/" className="all-button right-skew">
                        <span className="text center">Оставить отзыв</span>
                    </a>
                </div>
                <button className="delete">
                    <i className="svg close" onClick={handleDelete} />
                </button>
            </div>}
            <div className="feedback-container-page">
                <form action="" className="send-form">
                    <div className="item">
                        <input type="text" placeholder="Имя*" required />
                    </div>
                    <div className="item">
                        <div className="result">
                            <div className="text">Ваша оценка:</div>
                            <ul className="all-result-stars hovered">
                                <li>
                                    <i className="svg star" />
                                </li>
                                <li>
                                    <i className="svg star" />
                                </li>
                                <li>
                                    <i className="svg star" />
                                </li>
                                <li>
                                    <i className="svg star" />
                                </li>
                                <li>
                                    <i className="svg star" />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="item textarea">
                        <textarea placeholder="Ваш коментарий..." defaultValue={''} />
                    </div>
                    <div className="buttons">
                        <div className="photo">
                            <input type="file" />
                            <i className="svg download" />
                            <span>Прикрепить фото...</span>
                        </div>
                        <button className="all-button right-skew">
                            <span className="text center">Оставить отзыв</span>
                        </button>
                    </div>
                </form>
                <div className="message-wrapper AllFeedback">
                    {FeedbackComments.map((index) => (
                        <div key={index} className="message-item">
                            <div className="avatar">
                                <img src={index.img} alt="" />
                            </div>
                            <div className="message-desc">
                                <div className="msg-info">
                                    <div className="title">
                                        <div className="name">{index.name}</div>
                                        <ul className="all-result-stars">
                                            <li className="active">
                                                <i className="svg star" />
                                            </li>
                                            <li className="active">
                                                <i className="svg star" />
                                            </li>
                                            <li className="active">
                                                <i className="svg star" />
                                            </li>
                                            <li>
                                                <i className="svg star" />
                                            </li>
                                            <li>
                                                <i className="svg star" />
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="date">{index.data}</div>
                                </div>
                                <div className="msg-text">
                                    <p>{index.comment}</p>
                                </div>
                            </div>
                        </div>
                    ))}

                    <button
                        className="all-button right-skew show-all-button"
                    >
                        <span className="text center">Показать все</span>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Feedback;
