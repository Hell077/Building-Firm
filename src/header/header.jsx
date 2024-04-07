import './header.css';


const Header = () => {
    return (
        <>
            <header>
                <img src="src\header\header_img\Логотип.svg" alt="" className='header_logo' />
                <div className="center_right">
                    <div className="center_txt">
                        <img src="src\header\header_img\location.svg" alt="" />
                        <p className='HeaderP'> ОФИС: СПб, Пулковское шоссе, дом 30 к 4, офис 205 <br />
                            Производство: СПб, Пулковское шоссе, дом 30 к 4</p>
                    </div>
                    <div className="right_obj">
                        <div className="first_item">
                            <img src="src\header\header_img\Phone_call.svg" alt="" />
                            <p className='HeaderP'>
                                круглосуточно
                                <br /> +7 (000) 000-00-00</p>
                        </div>
                        <div className="second_item">
                            <img src="src\header\header_img\Globe 2.svg" alt="" />
                            <p className='HeaderP'>
                                САЙТ КОМПАНИИ
                                <br /> WWW.NEWTECK.RU
                            </p>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
