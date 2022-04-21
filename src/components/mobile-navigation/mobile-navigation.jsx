function MobileNavigation() {
    return (
        <div className="mobile-navigation">
            <div className="box">
                <ul className="menu">
                    <li>
                        <a href="index.php">
                            <span>Главная</span>
                        </a>
                    </li>
                    <li>
                        <a href="contracts.php">
                            <span>Контракты</span>
                        </a>
                    </li>
                    <li>
                        <a href="shares.php">
                            <span>Бонусы</span>
                        </a>
                    </li>
                    <li>
                        <a href="shop.php">
                            <span>Магазин</span>
                        </a>
                    </li>
                    <li>
                        <a href="feedback.php">
                            <span>Отзывы</span>
                        </a>
                    </li>
                    <li>
                        <a href="faq.php">
                            <span>FAQ</span>
                        </a>
                    </li>
                </ul>
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
                    <div className="text">У Васть есть промокод ?</div>
                    <div className="desc">
                        Для активации промокода,
                        <br /> введите его в полне ниже.
                    </div>
                    <form action="" className="form">
                        <div className="input">
                            <input type="text" placeholder="Введите его здесь" required />
                        </div>
                        <button>
                            <i className="svg ok" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default MobileNavigation;
