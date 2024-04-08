import PropTypes from 'prop-types'; 
import s from '../module/list.module.css'


const ListModule = (props) => {
    return (
        <button className={s.dropdown_assets}>
            <img src="src/facts/list/listImg/Plus_circle.svg" alt="" />
            <p className={s.dropdown_assets}>{props.title}</p>
        </button>
    )
}

ListModule.propTypes = { 
    title: PropTypes.string 
}
export default ListModule;
