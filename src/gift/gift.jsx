import style from './gift.module.css'

function Gift() {
    return (
        <>
            <div className={style.Gift}>
                <div className={style.block}>
                    <div className={style.image}>
                        <div className={style.shader}>
                            <div className={style.textBlock}>
                                <span className={style.title}>От проектного отдела ПСК НЬЮТЕК</span>
                                <hr />
                                <span className={style.message}>
                                    Проектная и рабочая документация бесплатно
                                </span>
                            </div>
                            <div className={`${style.textBlock} ${style.textBlock2}`}>
                                <span className={style.yellowTitle}>бесплатно</span>
                                <span className={style.grayMessage}>Разработаем проектную и рабочую документацию </span>
                                <span className={style.miniTitle}>*При заказе комплекса строительных работ</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.yellow}>
                    <span className={style.first}>Оставьте заявку, чтобы получить ваш подарок</span>
                    <div className={style.secondBlock}>
                        <span className={style.blockTextTop}>от 1 млн </span>
                        <span className={style.blockTextBottom}>рублей!</span>
                    </div>
                    <span className={style.third}>Закажите консультацию менеджера</span>
                    <p className={style.four}>Узнайте подробности получения “проекта” бесплатно</p>
                    <h1 className={style.five}>+7 (000) 000-00-00</h1>
                    <button className={style.application}>Оставить заявку</button>
                </div>

            </div>

        </>


    );
}

export default Gift;