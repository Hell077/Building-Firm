import React from 'react';
import './menu.css'
class Menu extends React.Component {
    state = {  }
    render() { 
        return ( 
            <>
            <menu>
                <button>СТРОИТЕЛЬСТВО</button>
                <button>ПРОИЗВОДСТВО</button>
                <button>ПРОЕКТИРОВАНИЕ</button>
                <button>УСЛУГИ</button>
                <button>ПАРТНЕРЫ</button>
                <button>О КОМПАНИИ</button>
            </menu>
            </>
         );
    }
}
 
export default Menu;