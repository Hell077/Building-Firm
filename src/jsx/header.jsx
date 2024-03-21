import React from 'react';

class Header extends React.Component {
    state = {}
    render() {
        return (
            <>
                <header>
                    <img src="public\images\Логотип.svg" alt="" className='header_logo' />
                    <div className="center_txt">
                        <img src="public\images\location.svg" alt="" />
                        <p>ОФИС: СПб, Пулковское шоссе, дом 30 к 4, офис 205 <br />
                           Производство: СПб, Пулковское шоссе, дом 30 к 4</p>
                    </div>
                </header>
            </>
        );
    }
}

export default Header;