const Info = () => {
    return (
        <div className="main-container">
            <div className="info-container">
                <p>React — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов.</p>
                <p>React разрабатывается и поддерживается Facebook, Instagram и сообществом отдельных разработчиков и корпораций.</p>
                <p>React может использоваться для разработки одностраничных и мобильных приложений. Его цель — предоставить высокую скорость разработки, простоту и масштабируемость. В качестве библиотеки для разработки пользовательских интерфейсов React часто используется с другими библиотеками, такими как MobX, Redux и GraphQL.</p>
                <p>React был создан Джорданом Валке, разработчиком программного обеспечения из Facebook. На него оказал влияние XHP — компонентный HTML-фреймворк для PHP. Впервые React использовался в новостной ленте Facebook в 2011 году и позже в ленте Instagram в 2012 году. Исходный код React открыт в мае 2013 года на конференции «JSConf US».</p>
                <div className="info-react">
                    <div>
                        <h3>Декларативный</h3>
                        <p>Создавать интерактивные пользовательские интерфейсы на React — приятно и просто. Вам достаточно описать, как части интерфейса приложения выглядят в разных состояниях. React будет своевременно их обновлять, когда данные изменяются.</p>
                        <p>Декларативные представления сделают код более предсказуемым и упростят отладку.</p>
                    </div>
                    <div>
                        <h3>Основан на компонентах</h3>
                        <p>Создавайте инкапсулированные компоненты с собственным состоянием, а затем объединяйте их в сложные пользовательские интерфейсы.</p>
                        <p>Поскольку логика компонента написана на JavaScript, а не содержится в шаблонах, можно с лёгкостью передавать самые разные данные по всему приложению и держать состояние вне DOM.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info;