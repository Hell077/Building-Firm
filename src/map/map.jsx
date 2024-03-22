import React from 'react';
import './map.css'
class Map extends React.Component {
    state = {}
    render() {
        return (
            <>
                <div className="map">
                    <div className="map_opacity">
                        <div className="map2"></div>
                        <div className="left_text"></div>
                    </div>
                </div>
            </>
        );
    }
}

export default Map;