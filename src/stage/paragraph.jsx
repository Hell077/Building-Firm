import ParagraphButton from "./ParagraphButton";
import './stage.css'
const Paragraph = () => {
  return <>
    <div className="ParagraphContainer">
      <ParagraphButton range="01" style="ParButton1" text='Разработка проектной документации и инженерные изыскания' flex="flex" />
      <ParagraphButton range="02" style="ParButton2" text='Получение разрешения на строительство' flex="flex" />
      <ParagraphButton range="03" style="ParButton3" text='Производство металлоконструкций' flex="flex" />
      <ParagraphButton range="04" style="ParButton4" text='Планировка земельного участка' flex="flex" />
      <ParagraphButton range="05" style="ParButton5" text='Фундаментные работы' flex="flex" />
      <ParagraphButton range="06" style="ParButton6" text='Монтаж металлоконструкций' flex="flex" />
      <ParagraphButton range="07" style="ParButton7" text='Монтаж сэндвич-панелей' flex="flex" />
      <ParagraphButton range="08" style="ParButton8" text='Монтаж инженерных сетей' flex="flex" />
      <ParagraphButton range="09" style="ParButton9" text='Благоустройство территории' flex="flex" />
      <ParagraphButton range="10" style="ParButton10" text='Получения ввода в эксплуатацию' flex="flex" />
    </div>
  </>;
};

export default Paragraph;

