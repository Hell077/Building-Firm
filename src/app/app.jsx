import ReactDOM from 'react-dom/client'
import Header from '../header/header'
import Menu from '../menu/menu'
import Map from '../map/map'
import Facts from '../facts/facts'
import './app.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Header/>
    <Menu/>
    <Map/>
    <Facts/>
  </>
)
