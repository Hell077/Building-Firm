import ListModule from './ListModule';
import s from '../module/list.module.css'

const TitleList = () => {
    return (
        <div className={s.dropdown}>
            <ListModule title='Собственное производство металлоконструкций'>
                <div className={s.hide}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus illo a iste corporis voluptatum consequuntur veritatis dolores ex distinctio. Accusamus praesentium facere voluptates dignissimos quasi. Quaerat saepe magnam fugit labore.</div>
            </ListModule>
            <ListModule title='Собственный отдел проектирования'>
                <div className={s.hide}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus illo a iste corporis voluptatum consequuntur veritatis dolores ex distinctio. Accusamus praesentium facere voluptates dignissimos quasi. Quaerat saepe magnam fugit labore.</div>
            </ListModule>
            <ListModule title='Собственный отдел логистики и снабжения'>
                <div className={s.hide}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus illo a iste corporis voluptatum consequuntur veritatis dolores ex distinctio. Accusamus praesentium facere voluptates dignissimos quasi. Quaerat saepe magnam fugit labore.</div>
            </ListModule>
            <ListModule title='Собственный отдел инженерных изысканий'>
                <div className={s.hide}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus illo a iste corporis voluptatum consequuntur veritatis dolores ex distinctio. Accusamus praesentium facere voluptates dignissimos quasi. Quaerat saepe magnam fugit labore.</div>
            </ListModule>
            <ListModule title='Собственный парк техники'>
                <div className={s.hide}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus illo a iste corporis voluptatum consequuntur veritatis dolores ex distinctio. Accusamus praesentium facere voluptates dignissimos quasi. Quaerat saepe magnam fugit labore.</div>
            </ListModule>
        </div>
    );
}

export default TitleList;
