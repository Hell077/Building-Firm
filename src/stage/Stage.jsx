import './stage.css';
import Paragraph from './paragraph';
import RightParagraph from './Paragraph/RightParagraph';

const Stage = () => {
    return (
        <div className='Stage_Container'>
            <div className="Stage">
                <h1 className='Stage_h1'>Этапы строительства</h1>
                <p className='Stage_p1'>Каждый этап выполняем своими силами</p>
                <Paragraph/>
            </div>
            <RightParagraph/>
        </div>
    );
};

export default Stage;
