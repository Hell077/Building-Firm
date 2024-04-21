import styles from './RightParagraph.module.css';
import PropTypes from 'prop-types';

function RightParagraph({ message, title }) {
    return (
        <>
            <div className={styles.right_paragraph}>
                <div className={styles.yellow}></div>
                <div className={styles.white}></div>
                <div className={styles.black}>
                    <h1 className={styles.title}>
                        {title}
                        <p className={styles.message}>{message}</p>
                    </h1>
                </div>
                <button className={styles.calculate}>Расчитать стоимость</button>
                <img src="src/stage/Right_Paragraph/Paragraph_image/side-view-old-architect-with-building-plans 1.svg" alt="" className={styles.architect} />
            </div>
        </>

    );
}

RightParagraph.propTypes = {
    message: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default RightParagraph;
