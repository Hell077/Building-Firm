import styles from './RightParagraph.module.css';
import PropTypes from 'prop-types';

function RightParagraph({ message}) {
  return (
    <div className={styles.right_paragraph}>
        <div className={styles.yellow}></div>
        <div className={styles.white}></div>
        <div className={styles.black}>
          <p className={styles.message}>{message}</p>
        </div>
      <img src="src/stage/Right_Paragraph/Paragraph_image/side-view-old-architect-with-building-plans 1.svg" alt="" className={styles.architect} />
    </div>
  );
}

RightParagraph.propTypes = {
  message: PropTypes.string.isRequired, 
};

export default RightParagraph;
