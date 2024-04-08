import ParagraphButton from "./ParagraphButton";
import s from './Left_P.module.css'
const Paragraph = () => {
  return <>
    <div className={s.ParagraphContainer}>
      <ParagraphButton range="01" style={s.ParButton1} text='Разработка проектной документации и инженерные изыскания' flex={s.flex} />
      <ParagraphButton range="02" style={s.ParButton2}  text='Получение разрешения на строительство' flex={s.flex} />
      <ParagraphButton range="03" style={s.ParButton3}  text='Производство металлоконструкций'flex={s.flex} />
      <ParagraphButton range="04" style={s.ParButton4}  text='Планировка земельного участка' flex={s.flex} />
      <ParagraphButton range="05" style={s.ParButton5}  text='Фундаментные работы' flex={s.flex} />
      <ParagraphButton range="06" style={s.ParButton6}  text='Монтаж металлоконструкций' flex={s.flex} />
      <ParagraphButton range="07" style={s.ParButton7}  text='Монтаж сэндвич-панелей' flex={s.flex} />
      <ParagraphButton range="08" style={s.ParButton8}  text='Монтаж инженерных сетей' flex={s.flex} />
      <ParagraphButton range="09" style={s.ParButton9} text='Благоустройство территории' flex={s.flex} />
      <ParagraphButton range="10" style={s.ParButton10}  text='Получения ввода в эксплуатацию'flex={s.flex} />
    </div>
  </>;
};

export default Paragraph;

