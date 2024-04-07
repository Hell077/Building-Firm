import PropTypes from 'prop-types';
import './stage.css'
import { useState } from 'react';

const ParagraphButton = (props) => {
  const [isRectVisible, setRectVisible] = useState(false);
  const [buttonColor, setButtonColor] = useState('');

  const toggleRectVisibility = () => {
    setRectVisible(!isRectVisible);
    setButtonColor(isRectVisible ? '' : '#FCDB5C');
  };

  return (
    <>
      <div className="main-button-container">
        <button className={`${props.style} ${props.flex}`} onClick={toggleRectVisibility} style={{ backgroundColor: buttonColor }}>
          <div className="button-container">
            <div className="button-range">{props.range}</div>
            <div className="button-text">{props.text}</div>
          </div>
        </button>
        <div className="button-rect" style={{ display: isRectVisible ? 'block' : 'none' }}></div>
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
