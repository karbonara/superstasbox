function Footer() {
    return (
        <footer>
            <div className="footer-wrapper">
                <div className="footer-flex">
                    <div className="left-row">
                        <div className="logo">
                            <img src="images/logo.png" alt="" />
                        </div>
                        <div className="desc">
                            © 2021 SuperStasBox — сильнейший
                            <br /> дроп кейсов доступный каждому !
                        </div>
                    </div>
                    <div className="right-row">
                        <ul className="soc">
                            <li>
                                <a href="/" className="vk">
                                    <img src="images/ico-f-vk.png" alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="/" className="tg">
                                    <img src="images/ico-f-tg.png" alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="/" className="tb">
                                    <img src="images/ico-f-tb.png" alt="" />
                                </a>
                            </li>
                        </ul>
                        <a href="/" className="all-btn">
                            <i className="svg cooperation left" />
                            <span>Сотрудничество</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
