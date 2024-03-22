import React from 'react';

class Header extends React.Component {
    state = {}
    render() {
        return (
            <>
                <header>
                    <img src="src/images/Логотип.svg" alt="" className='header_logo' />
                    <div className="center_right">
                        <div className="center_txt">
                            <img src="/images/location.svg" alt="" />
                            <p>ОФИС: СПб, Пулковское шоссе, дом 30 к 4, офис 205 <br />
                                Производство: СПб, Пулковское шоссе, дом 30 к 4</p>
                        </div>
                        <div className="right_obj">
                        </div>
                    </div>

                </header>
            </>
        );
    }
}

export default Header;