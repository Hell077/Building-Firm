import './Preloader.css';

function Preloader() {
    return (
        <div className='LoaderFlex' style={{display:'flex', flexDirection:'column'}}>
            <div className="loader"> </div>
            <div style={{fontSize:'30px'}}>Loading...</div>
        </div>
    );
}

export default Preloader;
