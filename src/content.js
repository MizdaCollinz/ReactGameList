import React from 'react';
import GameInput from './gameForm/gameInput.jsx'


class Content extends React.Component {
    
    render() {
        return (
            // Regular comments out here
            <section style={sectionStyle}> 
                {/*Special comment format used here as JSX*/}
                <GameInput/>
            </section>
        );
    }
}

const sectionStyle = {
    backgroundColor: '#363636',
    padding: '50px'
};

export default Content;