import CaseItem from "../../components/case-item/case-item";
import Garant from "../../components/garant/garant";
import Statistics from "../../components/statistics/statistics";

function Main() {
    return (
        <>
            <section className="content-wrapper">
                <div className="case-container">
                    <div className="wrapper-title">
                        <div className="text" data-text="POPULAR">
                            Популярные кейсы
                        </div>
                    </div>
                    <div className="case-flex">
                        <CaseItem />
                    </div>
                </div>
                <div className="case-container">
                    <div className="wrapper-title">
                        <div className="text" data-text="POPULAR">
                            Популярные кейсы
                        </div>
                    </div>
                    <div className="case-flex">
                        <CaseItem />
                    </div>
                </div>
                <Garant />
                <Statistics />
            </section>
        </>
    );
}

export default Main;
