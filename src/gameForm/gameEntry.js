import React from 'react';
import '../styles/gameEntry.css';

class GameEntry extends React.Component {
    render() {
        const {game, delete: deleteEntry, edit} = this.props;

        return (
            <tr>
                <td className="entry-name">{game.name}</td>
                <td>{game.year}</td>
                <td>{game.status}</td>
                <td className="entry-buttons">
                    <button onClick={() => edit({...game})}>Edit</button>
                    <button onClick={() => deleteEntry(game.name)}> Delete</button>
                </td>
            </tr>
        );
    }
}

export default GameEntry;