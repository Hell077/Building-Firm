import styles from './Left_P.module.css';
import ParagraphButton from './ParagraphButton';
import { useState, useEffect } from 'react';

function Paragraph({ handleMessageChange, setTitle }) {
    const [activeButton, setActiveButton] = useState('01');

    const handleButtonClick = (newRange, newMessage, newTitle) => {
        setActiveButton(newRange);
        handleMessageChange(newMessage); 
        setTitle(newTitle);
    };

    useEffect(() => {
        handleMessageChange('Что-то про разработку проектной документации и инженерные изыскания',);
    }, []); 
    useEffect(() => {
      setTitle('Разработка проектной документации и инженерные изыскания');
  }, []); 
 
  
  return (
    <div className={styles.ParagraphContainer}>
      <ParagraphButton
        isActive={activeButton === '01'}
        onClick={() => handleButtonClick('01', 'Что то про разработку проектной документации и инженерные изыскания', 'Разработка проектной документации и инженерные изыскания')}
        range="01"
        style={styles.ParButton1}
        text='Разработка проектной документации и инженерные изыскания'
        flex={styles.flex}
      />

      <ParagraphButton
        isActive={activeButton === '02'}
        onClick={() => handleButtonClick('02', 'Что то про получение разрешения на строительство', 'Получение разрешения на строительство')}
        range="02"
        style={styles.ParButton2}
        text='Получение разрешения на строительство'
        flex={styles.flex}
      />
      

      <ParagraphButton
        isActive={activeButton === '03'}
        onClick={() => handleButtonClick('03','Что то про производство металлоконструкций', 'Производство металлоконструкций')}
        range="03"
        style={styles.ParButton3}
        text='Производство металлоконструкций'
        flex={styles.flex}
      />

      <ParagraphButton
        isActive={activeButton === '04'}
        onClick={() => handleButtonClick('04','Что то про планировка земельного участка','Планировка земельного участка')}
        range="04"
        style={styles.ParButton4}
        text='Планировка земельного участка'
        flex={styles.flex}
      />

      <ParagraphButton
        isActive={activeButton === '05'}
        onClick={() => handleButtonClick('05','Что то про фундаментные работы','Фундаментные работы')}
        range="05"
        style={styles.ParButton5}
        text='Фундаментные работы'
        flex={styles.flex}
      />

      <ParagraphButton
        isActive={activeButton === '06'}
        onClick={() => handleButtonClick('06','Что то про монтаж металлоконструкций','Монтаж металлоконструкций')}
        range="06"
        style={styles.ParButton6}
        text='Монтаж металлоконструкций'
        flex={styles.flex}
      />

      <ParagraphButton
        isActive={activeButton === '07'}
        onClick={() => handleButtonClick('07','Что то про монтаж сэндвич-панелей','Монтаж сэндвич-панелей')}
        range="07"
        style={styles.ParButton7}
        text='Монтаж сэндвич-панелей'
        flex={styles.flex}
      />

      <ParagraphButton
        isActive={activeButton === '08'}
        onClick={() => handleButtonClick('08','Что то про монтаж инженерных сетей','Монтаж инженерных сетей')}
        range="08"
        style={styles.ParButton8}
        text='Монтаж инженерных сетей'
        flex={styles.flex}
      />

      <ParagraphButton
        isActive={activeButton === '09'}
        onClick={() => handleButtonClick('09','Что то про благоустройство территории','Благоустройство территории')}
        range="09"
        style={styles.ParButton9}
        text='Благоустройство территории'
        flex={styles.flex}
      />

      <ParagraphButton
        isActive={activeButton === '10'}
        onClick={() => handleButtonClick('10','Что то про получения ввода в эксплуатацию','Получения ввода в эксплуатацию')}
        range="10"
        style={styles.ParButton10}
        text='Получения ввода в эксплуатацию'
        flex={styles.flex}
      />
    </div>
  );
}



export default Paragraph;
