import React from 'react';
import './header.css'

class Header extends React.Component {
    state = {}
    render() {
        return (
            <>
                <header>
                    <img src="/header_img/Логотип.svg" alt="" className='header_logo' />
                    <div className="center_right">
                        <div className="center_txt">
                            <img src="/header_img/location.svg" alt="" />
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