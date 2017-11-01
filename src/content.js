import React from 'react';

class Content extends React.Component {
    
    render() {
        return (
            // Regular comments out here
            <section style={sectionStyle}> 
                {/*Special comment format used here as JSX*/}
                <div></div>

                <div></div>

                <div></div>

            </section>
        );
    }
}

var sectionStyle = {
    backgroundColor: '#363636',
    height: '600px',
    width: '100%'
};

export default Content;