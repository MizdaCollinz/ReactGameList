import React from 'react';
import '../styles/gameEntry.css';

class GameEntry extends React.Component {
   
    render(){
        const {game} = this.props;
        const deleteEntry = this.props.delete;
        const editEntry = this.props.edit;

        return (
            <tr>
                <td className="entry-name">{game.name}</td>
                <td>{game.year}</td>
                <td>{game.status}</td>
                <td className="entry-buttons">
                    <button onClick={() => editEntry(
                        {
                            name: game.name,
                            year: game.year,
                            status: game.status
                        }
                    )}> Edit </button>
                    <button onClick={() => deleteEntry(game.name)}> Delete </button>
                </td>
            </tr>
        );
    }
}



export default GameEntry;