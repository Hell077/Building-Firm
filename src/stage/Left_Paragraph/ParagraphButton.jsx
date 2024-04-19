// Настройки кнопки вызываемые в paragraph.jsx

import PropTypes from 'prop-types';
import styles from './Left_P.module.css'

function ParagraphButton({ range, style, flex, text, onClick, isActive }) {
  const handleClick = () => {
    onClick(range);
  };

  return (
    <div className={styles.mainButtonContainer}>
      <button
        className={`${style} ${flex} ${isActive ? styles.active : ''}`}
        onClick={handleClick}
        style={{ backgroundColor: isActive ? '#FCDB5C' : '' }}
      >
        <div className={styles.buttonContainer}>
          <div className={styles.buttonRange}>{range}</div>
          <div className={styles.buttonText}>{text}</div>
        </div>
      </button>
      <div className={styles.buttonRect} style={{ display: isActive ? 'block' : 'none' }}></div>
       </div>
  );
}

ParagraphButton.propTypes = {
  range: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  flex: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default ParagraphButton;
