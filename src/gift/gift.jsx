import style from './gift.module.css'

function Gift() {
    return (
        <>
            <div className={style.Gift}>
                <div className={style.block}>
                    <div className={style.image}>
                        <div className={style.shader}></div>
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