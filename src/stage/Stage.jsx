import { useState } from 'react';
import style from './Stage.module.css';
import Paragraph from './Left_Paragraph/paragraph';
import RightParagraph from './Right_Paragraph/RightParagraph';

const Stage = () => {
    // State to manage the message
    const [message, setMessage] = useState('');

    // Function to update the message state
    const handleMessageChange = (newMessage) => {
        setMessage(newMessage);
    };

    return (
        <div className={style.Stage_Container}>
            <div className={style.Stage}>
                <h1 className={style.Stage_h1}>Этапы строительства</h1>
                <p className={style.Stage_p1}>Каждый этап выполняем своими силами</p>
                <Paragraph handleMessageChange={handleMessageChange} />
                <RightParagraph message={message} />
            </div>
        </div>
    );
};

export default Stage;
