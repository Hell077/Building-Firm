import s from'../module/facts.module.css'
import ListContainer from '../list/ListContainer';

const Facts = () => {
    return (
        <>
        <div className={s.Facts}>
                <h1 className={s.companyTitle}>Факты о компании ПСК &quot;Ньютек&quot;</h1>
                <p className={s.heightxt}>полный цикл строительства от проектирования до ввода в эксплуатацию</p>
                <div className={s.rectangles}>
                    <div className={s.rectangle} id={s.rec1}>
                        <p className={s.p1}>13</p>
                        <p className={s.p2}>Лет <br />на Рынке</p>
                    </div>
                    <div className={s.rectangle} id={s.rec2}>
                        <p className={s.p1}>200.000</p>
                        <p className={s.p2}>кв.м. <br /> построено</p>
                    </div>
                    <div className={s.rectangle} id={s.rec3}>
                        <p className={s.p1}>60+</p>
                        <p className={s.p2}>Человек <br /> работает у нас</p>
                    </div>
                </div>
            </div>
            <ListContainer/>
        </>);
}

export default Facts;
