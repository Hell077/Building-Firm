import style from './photoblock.module.css'
function PhotoBlock() {
    return (
        <div className={style.Photoblock}>
            <div className={style.firstBlock}>
                <div className={style.messageContainer}>
                    <span className={style.title}>техника, используемая ПСК НЬЮТЕК</span>
                    <hr />
                    <span className={style.message}>строительная техника для работ <br /> в нашей компании</span>
                </div>
                <div className={style.flexcolumn}>
                    <span className={style.yellowTitle}>
                        180
                        <p className={style.yellowMessage}>Единиц</p>
                    </span>
                </div>
            </div>
            <div className={style.secondBlock}>
                <div className={style.cardFirst}>
                    <div className={style.shader}> </div>
                </div>
                <div className={style.cardSecond}>
                    <div className={style.shader}></div>
                </div>
                <div className={style.cardThird}>
                    <div className={style.shader} ></div>
                </div>
                <div className={style.cardFour}>
                    <div className={style.shader}></div>
                </div>
            </div>
        </div>
    );
}

export default PhotoBlock;