import React from 'react';

class GameEntry extends React.Component {
   
    render(){
        const {game} = this.props;

        return (
            <tr>
                <td>{game.name}</td>
                <td>{game.year}</td>
                <td>{game.status}</td>
            </tr>
        );
    }
}

export default GameEntry;