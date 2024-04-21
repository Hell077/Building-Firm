import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Header from '../header/header';
import Menu from '../menu/menu';
import Map from '../map/map';
import Facts from '../facts/facts/facts';
import Stage from '../stage/Stage';
import Gift from '../gift/gift';
import Preloader from '../preloader/preloader';
import PhotoBlock from '../photoblock/Photoblock';
import './app.css';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 10);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <Header/>
          <Menu />
          <Map />
          <Facts />
          <Stage/>
          <Gift/>
          <PhotoBlock/>
        </>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
