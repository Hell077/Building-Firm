import  { useState } from 'react';
import PropTypes from 'prop-types'; 
import s from '../module/list.module.css'

const ListModule = (props) => {
    const [isOpen, setIsOpen] = useState(false); 

    const toggleContent = () => {
        setIsOpen(!isOpen); // Изменяем состояние при клике на кнопку
    }

    return (
        <div>
            <button className={s.dropdown_assets} onClick={toggleContent}>
                <img src="src/facts/list/listImg/Plus_circle.svg" alt="" />
                <p className={s.dropdown_assets}>{props.title}</p>
            </button>
            {isOpen && (
                <div className={s.dropdown_content}>
                    {props.children}
                    
                </div>
            )}
        </div>
    )
}

ListModule.propTypes = { 
    title: PropTypes.string 
}

export default ListModule;
