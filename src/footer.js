import React from 'react';

class Footer extends React.Component {
    render(){
        return (
            <footer style={footerStyle}>
                A general test of the ReactJS Library
            </footer>
        );
    }
}

const footerStyle = {
    position: 'fixed',
    bottom: '0px',
    width: '100%',
    textAlign: 'center',
    padding: '15px',
    backgroundColor: '#202020',
    color: 'whitesmoke',
    letterSpacing: '3px',
    fontWeight: 'bold'
};

export default Footer;