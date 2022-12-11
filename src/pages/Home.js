import moment from "moment";

const Home = () => {
    return (
        <div className="main-container">
            <div className="home-container">
                <div className="home-logo"></div>
                <h1 className="home-text">Труднее всего – конец месяца, особенно последние тридцать дней</h1>
                <p className="home-date">{moment().format("DD-MM-YYYY")}</p>
            </div>
        </div>
    )
}

export default Home;