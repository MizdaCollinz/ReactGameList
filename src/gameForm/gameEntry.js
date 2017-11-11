import React from 'react';

class GameEntry extends React.Component {
   
    render(){
        const {game} = this.props;
        const deleteEntry = this.props.delete;

        return (
            <tr>
                <td>{game.name}</td>
                <td>{game.year}</td>
                <td>{game.status}</td>
                <td><a onClick={() => deleteEntry(game.name)}>DEL</a></td>
            </tr>
        );
    }
}

export default GameEntry;