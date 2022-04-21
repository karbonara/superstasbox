import { CaseItems } from '../../mock/case-items';

function CaseItem() {
    return (
        <>
            {CaseItems.map((index) => (
                <a key={index} href="/" className="case-item all-grades grade-1 bx-shadows">
                    <div className="grade-child" />
                    <span className="price">
                        <span className="count">{index.price}</span>
                        <span className="val">₽</span>
                    </span>
                    <div className="frame">
                        <div className="img">
                            <img src={index.img} alt={index.title} />
                        </div>
                    </div>
                    <div className="name">{index.name}</div>
                </a>
            ))}
        </>
    );
}

export default CaseItem;
