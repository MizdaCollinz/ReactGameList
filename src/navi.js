import React from 'react';
import './styles/navi.css';

class Navi extends React.Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><a>One</a></li>
                    <li><a>Two</a></li>
                    <li><a>Three</a></li>
                    <li><a>Four</a></li>
                </ul>
            </nav>
        );
    }
}

export default Navi;