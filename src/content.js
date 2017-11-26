import React from 'react';
import GameInput from './gameForm/gameInput.js'


class Content extends React.Component {
    
    render() {
        return (
            // Regular comments out here
            <section style={sectionStyle}> 
                {/*Special comment format used here as JSX*/}
                <GameInput></GameInput>
                {/* <div style={fillerStyle} > General Div </div> */}
                

            </section>
        );
    }
}

var sectionStyle = {
    backgroundColor: '#363636',
    padding: '50px'
};

var fillerStyle = {
    height: '100px',
    width: '40%',
    backgroundColor: 'white'
};

export default Content;