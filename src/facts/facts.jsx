import React from 'react';
import './facts.css'

class Facts extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        return (
            <>
                <div className="Facts">
                    <h1>Факты о компании ПСК &quot;Ньютек&quot;</h1>
                    <p className='heightxt'>полный цикл строительства от проектирования до ввода в эксплуатацию</p>
                    <div className="rectangles">
                        <div className="rectangle" id='rec1'>
                            <p className='p1'>13</p>
                            <p className='p2'>Лет <br />на Рынке</p>
                        </div>
                        <div className="rectangle" id='rec2'>
                            <p className="p1">200.000</p>
                            <p className="p2">кв.м. <br /> построено</p>
                        </div>
                        <div className="rectangle" id='rec3'>
                            <p className="p1">60+</p>
                            <p className="p2">Человек <br /> работает у нас</p>
                        </div>
                    </div>
                    <div className="dropdown">
                        <ul className="dropdown_assets">
                            <img src="src\facts\facts_img\Plus_circle.svg" alt="" />
                            <p>Собственное производство металлоконструкций</p>
                        </ul>
                        <ul className="dropdown_assets">
                            <img src="src\facts\facts_img\Plus_circle.svg" alt="" />
                            <p>Собственный отдел проектирования</p>
                        </ul>
                        <ul className="dropdown_assets">
                            <img src="src\facts\facts_img\Plus_circle.svg" alt="" />
                            <p>Собственный отдел логистики и снабжения</p>
                        </ul>
                        <ul className="dropdown_assets">
                            <img src="src\facts\facts_img\Plus_circle.svg" alt="" />
                            <p>Собственный отдел инженерных изысканий</p>
                        </ul>
                        <ul className="dropdown_assets">
                            <img src="src\facts\facts_img\Plus_circle.svg" alt="" />
                            <p>Собственный парк техники</p>
                        </ul>
                    </div>
                </div>
            </>);
    }
}

export default Facts;