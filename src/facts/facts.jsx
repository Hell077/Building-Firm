import './facts.css'
import ListContainer from './ListContainer';

const Facts = () => {
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
            </div>
            <ListContainer/>
        </>);
}

export default Facts;
