import { FaqData } from '../../mock/faq-data';

function Faq() {
    return (
        <>
            <section className="content-wrapper">
                <div className="wrapper-title">
                    <div className="text" data-text="MODAL WINDOWS">
                        Модальные окна
                    </div>
                </div>
                <div className="faq-container">
                    {FaqData.map((item) => (
                        <div key={item} className="item">
                            <span className="ico">
                                <i className="svg faq" />
                            </span>
                            <span className="desc">
                                <span className="title">{item.title}</span>
                                <span className="text">{item.text}</span>
                            </span>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default Faq;
