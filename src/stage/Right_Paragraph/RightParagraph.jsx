import s from './RightParagraph.module.css';

const RightParagraph = () => {
    return (
        <div className={s.right_paragraph}>
            <img src="src\stage\Paragraph\Paragraph_image\side-view-old-architect-with-building-plans 1.svg" alt="" />
           <div className={s.right_paragraph_yellow_small}></div>
           <div className={s.right_paragraph_black}></div>
           <div className={s.right_paragraph_yellow_small}></div>
        </div>
    )
}

export default RightParagraph;