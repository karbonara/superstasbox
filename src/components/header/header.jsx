import { Link } from 'react-router-dom';
import { LiveDropData } from '../../mock/live-drop-data';
import MobileNavigation from '../mobile-navigation/mobile-navigation';

function Header() {
    return (
        <header>
            <div className="navigation">
                <div className="grid">
                    <div className="left-row">
                        <ul className="social">
                            <li>
                                <a href="/">
                                    <img src="images/ico-vk.png" alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <img src="images/ico-inst.png" alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <img src="images/ico-tube.png" alt="" />
                                </a>
                            </li>
                        </ul>
                        <div className="promka">
                            <div className="ico">
                                <i className="svg prize" />
                            </div>
                            <div className="text">
                                У Васть есть
                                <br /> промокод ?
                            </div>
                            <div className="droplist">
                                <div className="desc">
                                    Для активации промокода,
                                    <br /> введите его в полне ниже.
                                </div>
                                <form action="" className="form">
                                    <div className="input">
                                        <input
                                            type="text"
                                            placeholder="Введите его здесь"
                                            required
                                        />
                                    </div>
                                    <button>
                                        <i className="svg ok" />
                                    </button>
                                </form>
                            </div>
                        </div>
                        <ul className="menu">
                            <li>
                                <Link to="/" className="yellow">
                                    <span className="ico">
                                        <img src="images/ico-home.png" alt="" />
                                    </span>
                                    <span className="text">Главная</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/contract">
                                    <span className="text">Контракты</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/bonus">
                                    <span className="text">Бонусы</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="center-row">
                        <img src="images/logo.png" alt="" />
                    </div>
                    <div className="right-row">
                        <ul className="menu">
                            <li>
                                <Link to="/market">
                                    <span className="text">Магазин</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/feedback">
                                    <span className="text">Отзывы</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/faq">
                                    <span className="text">FAQ</span>
                                </Link>
                            </li>
                        </ul>
                        <a
                            href="/"
                            className="all-button login-button right-skew"
                            style={{ display: 'none' }}
                        >
                            <span className="text">Войти через</span>
                            <i className="svg vk right" />
                        </a>
                        <div className="navi-profile">
                            <a href="profile.php" className="avatar">
                                <img src="images/avatar.png" alt="" />
                            </a>
                            <div className="desc">
                                <div className="count">
                                    <div className="text">
                                        5000 <span>₽</span>
                                    </div>
                                </div>
                                <div className="buttons">
                                    <button className="add">
                                        <i className="svg plus" />
                                    </button>
                                    <button className="logout">
                                        <i className="svg exit" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <button className="navi-button">
                            <span />
                            <p />
                        </button>
                    </div>
                </div>
            </div>
            <MobileNavigation />
            <div className="live-drop-banner">
                <div className="ico" />
                <div className="text">Лайв лента призов</div>
            </div>
            <div className="live-drop-wrapper">
                <div className="best-drop all-grades grade-3">
                    <div className="grade-child" />
                    <div className="label">Лучший дроп !</div>
                    <div className="info">
                        <div className="img">
                            <img src="images/live/img-1.png" alt="" />
                        </div>
                        <div className="desc">
                            <span>Микрофон HyperX</span>
                        </div>
                    </div>
                    <a href="/" className="user">
                        <span className="avatar">
                            <img src="images/avatar.png" alt="" />
                        </span>
                        <span className="name">Никита Зотов</span>
                    </a>
                </div>
                <div className="box">
                    <div className="row">

                        {LiveDropData.map((item) => (
                            <div key={item} className={`item all-grades ${item.gradeClass}`}>
                                <div className="grade-child" />
                                <div className="img">
                                    <img src={item.img} alt="" />
                                </div>
                                <a href="/" className="user">
                                    <span className="avatar">
                                        <img src={item.avatar} alt="" />
                                    </span>
                                    <span className="name">{item.name}</span>
                                </a>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </header >
    );
}
export default Header;
