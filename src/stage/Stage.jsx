import style from './Stage.module.css'
import Paragraph from './Left_Paragraph/paragraph';
import RightParagraph from './Right_Paragraph/RightParagraph';

const Stage = () => {
    return (
        <div className={style.Stage_Container}>
            <div className={style.Stage}>
                <h1 className={style.Stage_h1}>Этапы строительства</h1>
                <p className={style.Stage_p1}>Каждый этап выполняем своими силами</p>
                <Paragraph/>
            </div>
            <RightParagraph/>
        </div>
    );
};

export default Stage;
