import './List.css'
import ListModule from './ListModule';

const TitleList = () => {
    return (
        <div className="dropdown">
            <ListModule title='Собственное производство металлоконструкций' />
            <ListModule title='Собственный отдел проектирования' />
            <ListModule title='Собственный отдел логистики и снабжения' />
            <ListModule title='Собственный отдел инженерных изысканий' />
            <ListModule title='Собственный парк техники' />
        </div>

    );
}

export default TitleList;
