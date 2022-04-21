function Garant() {
    return (
        <div className="garant-container">
            <div className="wrapper-title">
                <div className="text" data-text="GARANTUE">
                    Наши гарантии
                </div>
            </div>
            <div className="garant-flex">
                <div className="item item-skew">
                    <div className="skew-child" />
                    <div className="ico">
                        <i className="svg search" />
                    </div>
                    <div className="title">Полная прозрачность</div>
                    <div className="text">
                        У нас вы можете посмотреть все. Кто получил, что получил и когда.
                        Каждый профиль снабжен ссылкой на контакт человека в одной из трех
                        социальных сетей.
                    </div>
                </div>
                <div className="item item-skew">
                    <div className="skew-child" />
                    <div className="ico">
                        <i className="svg def" />
                    </div>
                    <div className="title">Гарантия низких цен</div>
                    <div className="text">
                        Благодаря крупным оптовым закупкам цены в нашем магазине на все товары
                        одни из самых низких на рынке.
                    </div>
                </div>
                <div className="item item-skew">
                    <div className="skew-child" />
                    <div className="ico">
                        <i className="svg bag" />
                    </div>
                    <div className="title">Проверенные товары</div>
                    <div className="text">
                        Мы выкладываем только проверенные товары от надежных поставщиков.
                        Каждый товар тестируется перед отправкой и снабжается всей
                        сопровождающей документацией.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Garant;
