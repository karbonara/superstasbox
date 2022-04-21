function Statistics() {
    return (
        <div className="statistics-container">
            <div className="wrapper-title">
                <div className="text" data-text="STATISTIC">
                    Статистика
                </div>
            </div>
            <div className="statistics-wrapper">
                <div className="item item-skew">
                    <div className="skew-child" />
                    <div className="ico">
                        <i className="svg dropbox" />
                    </div>
                    <div className="desc">
                        <span>15 879 982</span>
                        <p>Кейсов открыто</p>
                    </div>
                </div>
                <div className="item item-skew">
                    <div className="skew-child" />
                    <div className="ico">
                        <i className="svg check" />
                    </div>
                    <div className="desc">
                        <span>4 233 999</span>
                        <p>Контрактов создано</p>
                    </div>
                </div>
                <div className="item item-skew">
                    <div className="skew-child" />
                    <div className="ico">
                        <i className="svg user" />
                    </div>
                    <div className="desc">
                        <span>8 765</span>
                        <p>Онлайн пользователей</p>
                    </div>
                </div>
                <div className="item item-skew">
                    <div className="skew-child" />
                    <div className="ico">
                        <i className="svg users" />
                    </div>
                    <div className="desc">
                        <span>34 233 999</span>
                        <p>Всего пользователей</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Statistics;
