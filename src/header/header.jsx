import s from './module/header.module.css';


const Header = () => {
    return (
        <>
            <header>
                <img src="src\header\header_img\Логотип.svg" alt="" className={s.header_logo} />
                <div className={s.center_right}>
                    <div className={s.center_txt}>
                        <img src="src\header\header_img\location.svg" alt="" />
                        <p className={s.HeaderP}> ОФИС: СПб, Пулковское шоссе, дом 30 к 4, офис 205 <br />
                            Производство: СПб, Пулковское шоссе, дом 30 к 4</p>
                    </div>
                    <div className={s.right_obj}>
                        <div className={s.first_item}>
                            <img src="src\header\header_img\Phone_call.svg" alt="" />
                            <p className={s.HeaderP}>
                                круглосуточно
                                <br /> +7 (000) 000-00-00</p>
                        </div>
                        <div className={s.second_item}>
                            <img src="src\header\header_img\Globe 2.svg" alt="" />
                            <p className={s.HeaderP}>
                                САЙТ КОМПАНИИ <br />
                                 WWW.NEWTECK.RU
                            </p>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
