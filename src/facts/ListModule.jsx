import PropTypes from 'prop-types'; 
import './List.css'


const ListModule = (props) => {
    return (
        <button className='dropdown_assets'>
            <img src="src/facts/facts_img/Plus_circle.svg" alt="" />
            <p className='dropdown_assets'>{props.title}</p>
        </button>
    )
}

ListModule.propTypes = { 
    title: PropTypes.string 
}
export default ListModule;
