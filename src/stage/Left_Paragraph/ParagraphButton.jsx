import PropTypes from 'prop-types';
import { useState } from 'react';
import s from './Left_P.module.css'

const ParagraphButton = (props) => {
  const [isRectVisible, setRectVisible] = useState(false);
  const [buttonColor, setButtonColor] = useState('');

  const toggleRectVisibility = () => {
    setRectVisible(!isRectVisible);
    setButtonColor(isRectVisible ? '' : '#FCDB5C');
  };

  return (
    <>
      <div className={s.mainButtonContainer}>
        <button className={`${props.style} ${props.flex}`} onClick={toggleRectVisibility} style={{ backgroundColor: buttonColor}}>
          <div className={s.buttonContainer}>
            <div className={s.buttonRange}>{props.range}</div>
            <div className={s.buttonText}>{props.text}</div>
          </div>
        </button>
        <div className={s.buttonRect} style={{ display: isRectVisible ? 'block' : 'none' }}></div>
      </div>
    </>

  )

};
ParagraphButton.propTypes = {
  range: PropTypes.string,
  style: PropTypes.string,
  flex: PropTypes.string,
  text: PropTypes.string
}

export default ParagraphButton;
