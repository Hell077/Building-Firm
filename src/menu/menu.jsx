import s from'./menu.module.css'

const Menu = () => {
    return (
        <>
            <menu>
                <button className={s.button}>СТРОИТЕЛЬСТВО</button>
                <button className={s.button}>ПРОИЗВОДСТВО</button>
                <button className={s.button}>ПРОЕКТИРОВАНИЕ</button>
                <button className={s.button}>УСЛУГИ</button>
                <button className={s.button}>ПАРТНЕРЫ</button>
                <button className={s.button}>О КОМПАНИИ</button>
            </menu>
        </>
    );
}

export default Menu;