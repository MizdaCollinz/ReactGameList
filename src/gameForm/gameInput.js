import React from 'react';
import '../styles/gameInput.css';
import GameEntry from './gameEntry.js';

const entries = [{
    name: "Resident Evil 7",
    year:"2017",
    status:"Finished"
},{
    name: "Nier Automata",
    year:"2017",
    status:"Glitchy"
}];

class GameInput extends React.Component {
    
    onSubmit(e){
        return;
    }
    
    render(){
        return (
            <form style={formStyle} >
                <input name="title" type='text' placeholder='Game Title'></input>
                <input name="start" type='number' placeholder='Starting Year'></input>
                <input name="status" type='text' placeholder='Completion Status'></input>
                <input type="submit" onClick={this.onSubmit} value='+'></input>
            
                <table style={tableStyle}>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Year</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {entries.map((entry) => {
                            return (<GameEntry game={entry}></GameEntry>);
                        })}   
                    </tbody>
                </table>
            </form>
           
        );
    }
}


var formStyle = {
    height: '200px',
    width: '70%',
    margin: '0px auto',
    backgroundColor: 'white',
    padding: '10px'
};

var tableStyle = {
    width: '80%',
    margin: '0 auto',
    marginTop: '20px'
}

export default GameInput;